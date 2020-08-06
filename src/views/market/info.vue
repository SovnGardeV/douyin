<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">信息补充</h3>
          <el-link type="danger" style="float:right" href="http://qny.fulifmk.cn//基础信息导入示例模板.docx" target="_blank">说明文档</el-link>
        </div>
        <el-row>
          <el-col :span="12">
            <div class="title">
              基础信息
            </div>
            <div style="margin-bottom: 10px">
              <el-link type="danger" href="http://qny.fulifmk.cn//导入营销示例模板.docx">模板文件</el-link>
            </div>
            <el-button :loading="infoLoading" icon="el-icon-upload" type="primary" size="mini" @click="fakeUploadClick('base-info')">导入</el-button>
            <span style="font-size:12px;color: #ccc">提示：仅支持txt文件</span>
            <input class="base-info" type="file" style="visibility: hidden;" @change="uploadInfo">
          </el-col>
          <el-col :span="12">
            <div class="title">
              头像
            </div>
            <div>
              <el-button :loading="avatorLoading" size="mini" type="primary" icon="el-icon-upload" @click="fakeUploadClick('avator')">上传</el-button>
              <input class="avator" type="file" style="visibility: hidden;" @change="uploadHead">
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

        <el-tabs>
          <el-tab-pane label="抖音号配套基础信息">
            <el-table
              v-loading="info.loaidng"
              :data="info.array"
              border
            >
              <el-table-column
                align="center"
                label="抖音号"
                prop="shortId"
              />
              <el-table-column
                align="center"
                label="昵称"
              />
              <el-table-column
                align="center"
                label="头像"
              >
                <template slot-scope="scope">
                  <img v-show="scope.row.head" width="40" height="40" :src="scope.row.head" alt="">
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
                        v-loading="video.loaidng"
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
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import { uploadInfo, uploadHead, uploadVideo, getVList, getInfoList } from '@/api/merchant'
import { uploadSource } from '@/api/source'
import { getVideoSource } from '@/api/source'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
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
    // this.getVideoData()
  },
  methods: {
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
          this.getInfoData()
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
          this.getInfoData()
          this.infoId = res.result
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
        pageSize: this.info.pager.size
      }
      getInfoList(_form).then(response => {
        const { result } = response
        this.info.pager.total = result.total || 0
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
.info-avator{
    width: 160px;
    height: 160px;
    border-radius: 4px;
    border: 1px dashed #ccc;
    cursor: pointer;
}
.info-video{
    width: 360px;
    height: 160px;
    border-radius: 4px;
    border: 1px dashed #ccc;
    cursor: pointer;
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
.upload-source{
  border-radius: 4px;
  border: 1px dashed #ccc;
  height: 180px;
  width: 50%;
  cursor: pointer;
}
.upload-icon{
  text-align: center;
  display: block;
  transform: translateY(-50%);
  position: relative;
  top: 50%;
  font-size: 36px;
}
</style>
