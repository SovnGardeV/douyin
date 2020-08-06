<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">信息补充</h3>
          <el-link type="danger" style="float:right" href="http://qny.fulifmk.cn//基础信息导入示例模板.docx" target="_blank">说明文档</el-link>
        </div>
        <div class="content" style="margin-top: 0">
          <div>
            <div class="title">设备选择</div>
            <span v-if="selectArray.length">
              <el-tag size="mini">{{ selectArray[0] }}</el-tag>
              <el-tag size="mini">+{{ selectArray.length }}</el-tag>
            </span>
          </div>
          <select-device
            :need-screen="true"
            @selected="handleSelectData"
            @isgroup="val => {
              form.group = val
            }"
          />
        </div>
        <div class="content">
          <div class="title">
            执行时间
          </div>
          <el-radio-group v-model="form.type" size="mini">
            <el-radio-button :label="1">立即执行</el-radio-button>
            <el-radio-button :label="3">定时执行</el-radio-button>
          </el-radio-group>
          <div v-show="form.type === 3" style="margin-top: 15px">
            <el-date-picker
              v-model="form.operTime"
              size="mini"
              :value-format="'yyyy-MM-dd HH:mm:ss'"
              type="datetime"
              placeholder="选择执行时间"
            />
          </div>
        </div>
        <div class="content">
          <div class="title">
            任务内容
          </div>
          <el-radio-group v-model="form.operType">
            <el-radio v-for="item in labelArray" :key="item" :label="item" />
          </el-radio-group>
          <!-- <div v-if="form.operType === '互动'" style="margin-top: 15px">
            <el-checkbox v-model="isSelectAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
            <el-checkbox-group v-model="form.operTypeOther" @change="handleCheckedChange">
              <el-checkbox v-for="item in labelOhterArray" :key="item" :disabled="item === '播放'" :label="item" />
            </el-checkbox-group>
          </div> -->
        </div>
        <div class="content">
          <div class="title">任务参数</div>
          <el-row :gutter="10">
            <el-col :span="12">
              <div style="height: 110px" class="border-content">
                <div class="title">
                  基础信息
                </div>
                <el-button :loading="infoLoading" icon="el-icon-upload" type="primary" size="mini" @click="fakeUploadClick('base-info')">导入</el-button>
                <div style="margin-top: 10px">
                  <el-link type="danger" href="http://qny.fulifmk.cn//导入营销示例模板.docx">模板文件</el-link>
                  <span style="font-size:12px;color: #ccc">提示：仅支持txt文件</span>
                </div>
                <input class="base-info" type="file" style="visibility: hidden;" @change="uploadInfo">
              </div>
            </el-col>
            <el-col :span="12">
              <div style="height: 110px" class="border-content">
                <div class="title">
                  头像
                </div>
                <div>
                  <el-button :loading="avatorLoading" style="margin: 0 auto;display: block" size="mini" type="primary" icon="el-icon-upload" @click="fakeUploadClick('avator')">上传</el-button>
                  <input class="avator" type="file" style="visibility: hidden;" @change="uploadHead">
                </div>
              </div>
            </el-col>
          </el-row>

          <el-dialog :title="`视频上传`" width="400px" :visible.sync="dialogVisible.upload" center>
            <div>
              <el-radio-group v-model="selectMode">
                <el-radio label="本地文件" />
                <el-radio label="素材库" />
                <el-radio label="视频地址" />
              </el-radio-group>
              <div style="margin: 10px 0">
                <input v-show="selectMode === '本地文件'" class="video-file" type="file" @change="uploadSource">
                <el-select v-show="selectMode === '素材库'" v-model="video.sourceVideo" size="mini">
                  <el-option v-for="item in video.source" :key="item.id" :label="item.name" :value="item.sourceContent" />
                </el-select>
                <el-input v-show="selectMode === '视频地址'" v-model="video.netVideo" size="mini" placeholder="请输入视频地址" />
              </div>
              <div>
                <el-input v-model="video.title" style="margin-bottom: 10px" size="mini" placeholder="请输入视频标题" />
                <el-input v-model="video.text" style="margin-bottom: 10px" type="textarea" :rows="3" size="mini" placeholder="请输入视频文案" />
              </div>
            </div>
            <div slot="footer">
              <el-button size="mini" @click="dialogVisible.upload = false">取 消</el-button>
              <el-button :loading="videoLoading" size="mini" type="primary" icon="el-icon-upload" @click="uploadVideo">提 交</el-button>
            </div>
          </el-dialog>

          <div v-loading="info.loaidng" class="border-content" style="padding: 15px;text-align: left">
            <el-input v-model="info.filter.name" placeholder="请输入昵称" size="mini" style="width: unset;margin-bottom: 10px;" @keyup.enter.native="getInfoData">
              <el-button slot="append" icon="el-icon-search" @click="getInfoData" />
            </el-input>
            <input class="update-head" type="file" style="visibility: hidden;" @change="updateHead">
            <el-table
              :data="info.array"
              border
            >
              <el-table-column
                align="center"
                label="设备号"
                prop="deviceId"
              />
              <el-table-column
                align="center"
                label="抖音号"
                prop="shortId"
              />
              <el-table-column
                align="center"
                label="昵称"
                prop="name"
              >
                <template slot-scope="scope">
                  <span v-if="!scope.row.isEdit">
                    {{ scope.row.name }}
                    <i class="el-icon-edit-outline" @click="edit(scope.row)" />
                  </span>
                  <el-input v-else :ref="scope.row.id" v-model="scope.row.name" size="mini" @blur="handleEdit(scope.row, 'name')" />
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                label="头像"
              >
                <template slot-scope="scope">
                  <img width="40" height="40" :src="scope.row.head" alt="" @click="info.row = scope.row;fakeUploadClick('update-head')">
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                label="简介"
                prop="sign"
              />
              <el-table-column
                align="center"
                label="地址"
                prop="site"
              />
              <el-table-column
                align="center"
                label="使用状态"
              >
                <template slot-scope="scope">
                  {{ map.code[scope.row.code] }}
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                label="操作"
              >
                <template slot-scope="scope">
                  <el-popover
                    placement="left"
                    width="600"
                    trigger="click"
                  >
                    <div>
                      <el-table
                        border
                        :data="video.array"
                      >
                        <el-table-column
                          align="center"
                          label="视频标题"
                          prop="title"
                        />
                        <!-- <el-table-column
                          align="center"
                          label="关联头像ID"
                          prop="infoId"
                        /> -->
                        <el-table-column
                          align="center"
                          label="使用状态"
                        >
                          <template slot-scope="rscope">
                            {{ map.code[rscope.row.code] }}
                          </template>
                        </el-table-column>
                        <el-table-column
                          align="center"
                          label="视频地址"
                        >
                          <template slot-scope="rscope">
                            <el-link target="_blank" :href="rscope.row.videoUrl" :underline="false">查看</el-link>
                          </template>
                        </el-table-column>
                      </el-table>
                      <pagination
                        :pager-size="video.pager.size"
                        :pager-index="video.pager.index"
                        :pager-total="video.pager.total"
                        @pagination-change="val => {
                          handlePagerChange(val, 'video')
                        }"
                      />
                    </div>
                    <el-button slot="reference" size="mini" @click="getVideoData(scope.row.id)">视频列表</el-button>
                  </el-popover>
                  <el-button size="mini" @click="showDialog(scope.row)">视频上传</el-button>
                </template>
              </el-table-column>
            </el-table>
            <pagination
              :pager-size="info.pager.size"
              :pager-index="info.pager.index"
              :pager-total="info.pager.total"
              @pagination-change="val => {
                handlePagerChange(val, 'info')
              }"
            />
          </div>
          <!-- <div v-if="form.operType === '关注指定用户'">
            <div style="margin: 10px 0">
              <span style="font-size: 14px">视频播放数量</span>
              <el-input v-model="form.playNum[0]" :max="form.playNum[1]" size="mini" type="number" min="1" style="width: 150px">
                <div slot="append">次</div>
              </el-input>
              ~
              <el-input v-model="form.playNum[1]" size="mini" type="number" :min="form.playNum[0] || 1" style="width: 150px">
                <div slot="append">次</div>
              </el-input>
              <span style="font-size: 14px">停留时间</span>
              <el-input v-model="form.timeInterval[0]" :max="form.timeInterval[1]" size="mini" type="number" min="1" style="width: 150px">
                <div slot="append">秒</div>
              </el-input>
              ~
              <el-input v-model="form.timeInterval[1]" size="mini" type="number" :min="form.timeInterval[0] || 1" style="width: 150px">
                <div slot="append">秒</div>
              </el-input>
            </div>
            <div style="margin: 10px 0">
              <span style="font-size: 14px">操作个数</span>
              <el-input v-model="form.num" size="mini" type="number" min="1" style="width: 150px">
                <div slot="append">个</div>
              </el-input>
            </div>
          </div> -->

          <!-- <el-row v-if="form.operType === '互动'" :gutter="10">
            <div style="margin: 10px 0">
              <span style="font-size: 14px">操作个数</span>
              <el-input v-model="form.num" size="mini" type="number" min="1" style="width: 150px">
                <div slot="append">个</div>
              </el-input>
            </div>
            <el-col v-if="form.operTypeOther.join(',').indexOf('评论') > -1" :span="12">
              <select-source name="评论" @source="val => handleSource(val,'comments')" />
            </el-col>
            <el-col v-if="form.operTypeOther.join(',').indexOf('转发') > -1" :span="12">
              <select-source name="转发" @source="val => handleSource(val,'shares')" />
            </el-col>
          </el-row> -->

        </div>
        <div style="text-align: center">
          <el-button size="medium" type="primary" @click="handleSubmit">提 交</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import SelectDevice from '@/views/device/components/SelectDevice'
import citys from '@/utils/city'
import { handleTask } from '@/utils/handleTask'
import { uploadInfo, uploadHead, uploadVideo, getVList, getInfoList, updateInfo } from '@/api/merchant'
import { uploadSource } from '@/api/source'
import { getVideoSource } from '@/api/source'
import Pagination from '@/components/Pagination'

export default {
  components: {
    SelectDevice,
    Pagination
  },
  data() {
    return {
      citys,
      isEdit: true,
      selectArray: [],
      sourceList: [],
      douyinList: [{ value: '默认账号' }],
      labelArray: ['信息补充', '批量发布视频'],
      labelOhterArray: ['播放', '点赞', '关注', '转发', '收藏音乐', '评论'],
      isIndeterminate: false,
      isSelectAll: false,
      form: {
        devices: '',
        group: false,
        type: '',
        operTime: '',
        operType: '信息补充',
        operTypeOther: ['播放'],
        content: {
          comments: [],
          shares: []
        },
        playNum: ['', ''],
        timeInterval: ['', ''],
        num: ''
      },

      dialogVisible: {
        upload: false
      },
      selectMode: '本地文件',
      avatorLoading: false,
      videoLoading: false,
      infoLoading: false,
      infoId: '',
      map: {
        code: {
          0: '未使用',
          1: '已使用'
        }
      },
      video: {
        source: [],
        videoUrl: '',
        localVideo: '',
        sourceVideo: '',
        netVideo: '',
        title: '',
        text: '',
        loading: false,
        array: [],
        pager: {
          index: 1,
          size: 10,
          total: 0
        }
      },
      info: {
        loading: false,
        filter: {
          name: ''
        },
        array: [],
        row: {},
        pager: {
          index: 1,
          size: 10,
          total: 0
        }
      }
    }
  },
  created() {
    this.getVideoSource()
    this.getInfoData()
  },
  methods: {
    handleCheckAllChange(val) {
      this.form.operTypeOther = val ? this.labelOhterArray : ['播放']
      this.isIndeterminate = false
    },
    handleCheckedChange(value) {
      const checkedCount = value.length
      this.isSelectAll = checkedCount === this.labelOhterArray.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.labelOhterArray.length
    },
    handleSelectData(val) {
      this.selectArray = val
    },
    handleSource(val, index) {
      this.form.content[index] = val
    },
    edit(row) {
      row.isEdit = true
      this.info.row = Object.assign({}, row)
      this.$nextTick(_ => {
        this.$refs[row.id].focus()
      })
    },
    handleEdit(row, key, value) {
      row.isEdit = false
      if (this.info.row[key] !== row[key] || value) {
        const _form = {
          id: row.id,
          [key]: value || row[key]
        }
        updateInfo(_form, 'edit').then(res => {
          this.$message.success(res.message)
          this.getInfoData()
        })
      }
    },
    handleSubmit() {
      const _form = {
        devices: this.selectArray,
        group: this.form.group,
        name: '信息补充',
        operTime: this.form.operTime,
        type: this.form.type
      }

      const _content = {
        operType: this.form.operType,
        operMsg: '信息补充',
        content: this.form.content,
        type: this.form.type,
        operTime: this.form.operTime
      }

      handleTask(_form, _content, res => {
        this.$message.success(res.message)
        Object.assign(this.$data, this.$options.data())
      })
    },
    uploadSource(e) {
      const { files } = e.target
      if (files.length) {
        this.videoLoading = true
        const formData = new FormData()
        formData.append('file', files[0])
        uploadSource(formData).then(res => {
          this.video.videoUrl = res.result
        }).finally(() => {
          this.videoLoading = false
        })
      }
    },
    async updateHead(e) {
      const { files } = e.target
      if (files.length) {
        const formData = new FormData()
        formData.append('file', files[0])
        this.info.loading = true
        const { result } = await uploadSource(formData)
        await this.handleEdit(this.info.row, 'head', result)
        this.info.loading = false
      }
    },
    showDialog(item) {
      this.infoId = item.id
      // this.$tool.initForm(this.mainTable.form)
      this.dialogVisible.upload = true
    },
    handlePagerChange(val, form) {
      this[form].pager.index = val.index
      this[form].pager.size = val.size
      if (form === 'video') {
        this.getVideoData(this.infoId)
      } else {
        this.getInfoData()
      }
    },
    fakeUploadClick(className) {
      const fileInput = document.querySelector(`input[type=file].${className}`)
      fileInput.value = ''
      fileInput.click()
    },
    uploadInfo(e) {
      const { files } = e.target
      if (files.length) {
        this.infoLoading = true
        const formData = new FormData()
        formData.append('file', files[0])
        uploadInfo(formData).then(res => {
          this.$message.success(res.message)
        }).finally(() => {
          this.infoLoading = false
        })
      }
    },
    uploadHead(e) {
      const { files } = e.target
      if (files.length) {
        this.avatorLoading = true
        const formData = new FormData()
        formData.append('file', files[0])
        uploadHead(formData).then(res => {
          this.$message.success(res.message)
          this.infoId = res.result
          this.getInfoData()
        }).finally(() => {
          this.avatorLoading = false
        })
      }
    },
    uploadVideo() {
      this.videoLoading = true
      const formData = new FormData()
      switch (this.selectMode) {
        case '本地文件': {
          this.video.localVideo && formData.append('videoUrl', this.video.localVideo)
          break
        }
        case '素材库': {
          this.video.sourceVideo && formData.append('videoUrl', this.video.sourceVideo)
          break
        }
        case '视频地址': {
          this.video.netVideo && formData.append('videoUrl', this.video.netVideo)
          break
        }
      }
      this.video.text && formData.append('text', this.video.text)
      this.infoId && formData.append('infoId', this.infoId)
      this.video.title && formData.append('title', this.video.title)

      uploadVideo(formData).then(res => {
        this.$message.success(res.message)
        this.getInfoData()
        this.dialogVisible.upload = false
      }).finally(() => {
        this.videoLoading = false
      })
    },
    getVideoData(infoId) {
      this.infoId = infoId
      this.video.loading = true
      const _form = {
        pageNo: this.video.pager.index,
        pageSize: this.video.pager.size,
        infoId
      }
      getVList(_form).then(response => {
        const { result } = response
        this.video.pager.total = result.total || 0
        this.video.array = result.records || []
      }).finally(_ => {
        this.video.loading = false
      })
    },
    getInfoData() {
      this.info.loading = true
      const _form = {
        pageNo: this.info.pager.index,
        pageSize: this.info.pager.size,
        name: this.info.filter.name
      }
      getInfoList(_form).then(response => {
        const { result } = response
        this.info.pager.total = result.total || 0
        if (Array.isArray(result.records)) {
          result.records.forEach(item => {
            item.isEdit = false
          })
        }
        this.info.array = result.records || []
      }).finally(_ => {
        this.info.loading = false
      })
    },
    getVideoSource() {
      getVideoSource().then(res => {
        this.video.source = res.result || []
      })
    }
  }
}
</script>

<style scoped lang="scss">
.title{
  margin: 8px 0;
}
.content{
  margin: 30px 0;
}
.douyin-list{
    padding:10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-height: 240px;
    overflow-y: auto;
    margin-top: 10px;
    width: 50%;
}
.el-divider--horizontal{
    margin: 8px 0 !important;
}
.douyin-input{
    position: relative;
    width: 92%;
}
.douyin-input-delete{
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    color: #F56C6C;
}
.border-content{
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  text-align: center;
  margin-bottom: 10px;
}
</style>
