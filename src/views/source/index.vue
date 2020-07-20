<template>
  <div style="background: #eee;height:100%">
    <div class="app-container">
      <div class="content-container">
        <el-form size="mini" :inline="true">
          <el-form-item>
            <el-select v-model="mainTable.filter.groupName" placeholder="请选择素材分组" clearable>
              <el-option
                v-for="(value, key) in map.source"
                :key="key"
                :label="value"
                :value="value"
              />
            </el-select>
          </el-form-item>
          <el-button size="mini" type="primary" icon="el-icon-search" @click="getMainTableData">搜索</el-button>
        </el-form>
      </div>
      <div class="content-container" style="padding-top: 0">
        <h3>素材管理
          <div style="float:right">
            <el-button size="mini" icon="el-icon-box" type="primary" @click="showDialog('group')">分组</el-button>
            <el-button size="mini" icon="el-icon-plus" type="primary" @click="showDialog('add')">新增</el-button>
            <el-button size="mini" icon="el-icon-delete" type="danger" @click="deleteSource">删除</el-button>
          </div>
        </h3>
        <el-table
          v-loading="mainTable.loading"
          :data="mainTable.array"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            align="center"
          />
          <el-table-column
            align="center"
            prop="name"
            label="名称"
          />
          <el-table-column
            align="center"
            prop="groupName"
            label="分组"
          />
          <el-table-column
            align="center"
            label="类型"
          >
            <template slot-scope="scope">
              {{ map.type[scope.row.type] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="上传时间"
            prop="createTime"
          />
          <el-table-column
            align="center"
            label="操作"
          >
            <template slot-scope="scope">
              <el-button size="mini" @click="showDialog('edit', scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <pagination
          :pager-size="mainTable.pager.size"
          :pager-index="mainTable.pager.index"
          :pager-total="mainTable.pager.total"
          @pagination-change="handlePagerChange"
        />
      </div>
      <el-dialog :title="`素材分组`" width="350px" :visible.sync="dialogVisible.group" center>
        <el-form size="mini" label-width="80px">
          <el-form-item label="分组名称">
            <el-select v-model="mainTable.groupForm.groupName" placeholder="请选择素材分组" clearable>
              <el-option
                v-for="(value, key) in map.source"
                :key="key"
                :label="value"
                :value="value"
              />
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button size="mini" @click="dialogVisible.group = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="handleSourceGroup">提 交</el-button>
        </div>
      </el-dialog>

      <el-dialog :title="`${type === 'add' ? '新建' : '编辑'}素材`" width="400px" :visible.sync="dialogVisible.source" center>
        <el-form size="mini" label-width="80px">
          <el-form-item label="素材名">
            <el-input v-model="mainTable.form.name" placeholder="请输入素材名" />
          </el-form-item>
          <!-- <el-form-item label="素材分组">
            <el-select v-model="mainTable.form.groupName" placeholder="请选择素材分组">
              <el-option
                v-for="(value, key) in map.source"
                :key="key"
                :label="value"
                :value="value"
              />
            </el-select>
          </el-form-item> -->
          <el-form-item label="类型">
            <el-select v-model="mainTable.form.type" placeholder="请选择素材分组">
              <el-option
                v-for="(value, key) in map.type"
                :key="key"
                :label="value"
                :value="key"
              />
            </el-select>
          </el-form-item>
          <el-form-item v-show="mainTable.form.type" label="内容">
            <div v-show="['1','5','6','7'].indexOf(mainTable.form.type) > -1" style="margin-bottom: 5px">
              <el-input v-model="mainTable.form.mes" type="textarea" :rows="4" placeholder="请输入文本信息" />
            </div>
            <div v-show="['4','7'].indexOf(mainTable.form.type) > -1" style="margin-bottom: 5px">
              <el-input v-model="mainTable.form.url" placeholder="请输入链接" />
            </div>
            <div>
              <el-row :gutter="5">
                <el-col v-show="['2','4','5','7'].indexOf(mainTable.form.type) > -1" :span="12">
                  <div
                    v-loading="loading.img"
                    class="upload-source"
                    element-loading-text="正在上传，请稍候"
                    element-loading-spinner="el-icon-loading"
                  >
                    <div v-if="!mainTable.form.imgUrl" class="upload-source-tip" @click="fakeUploadClick('img')">
                      <i class="el-icon-upload" />
                      <div>点击此处上传图片</div>
                    </div>
                    <img v-else style="width:100%;height:100%" :src="mainTable.form.imgUrl" alt="" @click="fakeUploadClick('img')">
                  </div>
                </el-col>
                <el-col v-show="['3','6'].indexOf(mainTable.form.type) > -1" :span="12">
                  <div
                    v-loading="loading.video"
                    class="upload-source"
                    element-loading-text="正在上传，请稍候"
                    element-loading-spinner="el-icon-loading"
                  >
                    <div class="upload-source">
                      <div v-if="!mainTable.form.videoUrl" class="upload-source-tip" @click="fakeUploadClick('video')">
                        <i class="el-icon-upload" />
                        <div>点击此处上传视频</div>
                      </div>
                      <video v-else style="width:100%;height:100%" :src="mainTable.form.videoUrl" @click="fakeUploadClick('video')" />
                    </div>
                  </div>
                </el-col>
              </el-row>
              <input
                type="file"
                style="visibility: hidden;position: absolute"
                @change="uploadSource"
              >
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button size="mini" @click="dialogVisible.source = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="handleSubmit">提 交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getSourceList, updateSource, getSourceMap, deleteSource, uploadSource, groupSource } from '@/api/source'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      type: '',
      uploadType: '',
      loading: {
        img: false,
        video: false
      },
      map: {
        source: {},
        type: {
          1: '文本',
          2: '图片',
          3: '视频',
          4: '链接+图片',
          5: '图片+文字',
          6: '视频+文字',
          7: '图片+文字+链接'
        }
      },
      dialogVisible: {
        source: false,
        group: false
      },
      mainTable: {
        loading: false,
        selectedArray: [],
        filter: {
          groupName: ''
        },
        form: {
          name: '',
          groupName: '',
          type: '',
          content: '',
          mes: '',
          url: '',
          imgUrl: '',
          videoUrl: ''
        },
        groupForm: {
          groupName: ''
        },
        array: [],
        row: {},
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      }
    }
  },
  created() {
    this.mainTable.filter.groupName = this.$route.query.groupName
    this.getSourceMap()
    this.getMainTableData()
  },
  methods: {
    fakeUploadClick(type) {
      this.uploadType = type
      const fileInput = document.querySelector('input[type=file]')
      fileInput.click()
    },
    uploadSource(e) {
      const { files } = e.target
      if (files.length) {
        this.loading[this.uploadType] = true
        const formData = new FormData()
        formData.append('file', files[0])
        uploadSource(formData).then(res => {
          this.mainTable.form[`${this.uploadType}Url`] = res.result
        }).finally(() => {
          this.loading[this.uploadType] = false
        })
      }
    },
    async getSourceMap() {
      const { result } = await getSourceMap()
      // const _result = {}
      const _resutlt = result.reduce((total, currentValud) => {
        return Object.assign(total, currentValud)
      }, {})
      this.map.source = _resutlt || {}
    },
    deleteSource() {
      if (!this.mainTable.selectedArray.length) {
        this.$message.info('请选择要删除的素材')
        return
      }
      this.$confirm('确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = []
        this.mainTable.selectedArray.forEach(item => {
          ids.push(item.id)
        })
        ids = ids.join(',')
        deleteSource({ ids }).then(res => {
          this.$message.success(res.message)
          this.getMainTableData()
        })
      })
    },
    handleSourceGroup() {
      let ids = []
      this.mainTable.selectedArray.forEach(item => {
        ids.push(item.id)
      })
      ids = ids.join(',')
      groupSource({ ids, groupName: this.mainTable.groupForm.groupName }).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
        this.dialogVisible.group = false
      })
    },
    showDialog(type, item = {}) {
      if (type === 'group') {
        if (!this.mainTable.selectedArray.length) {
          this.$message.info('请选择要分组的素材')
          return
        }
        this.$tool.initForm(this.mainTable.groupForm)
        this.dialogVisible.group = true
        return
      }
      this.type = type
      this.mainTable.row = item
      this.$tool.initForm(this.mainTable.form)
      if (type === 'edit') {
        const _keys = Object.keys(item)
        _keys.forEach(key => {
          item[key] && (item[key] = item[key].toString())
        })

        if (item.type === '1') {
          this.mainTable.form.mes = item.sourceContent
        } else if (item.type === '2') {
          this.mainTable.form.imgUrl = item.sourceContent
        } else if (item.type === '3') {
          this.mainTable.form.videoUrl = item.sourceContent
        } else if (item.type === '4') {
          const _content = JSON.parse(item.sourceContent)
          this.mainTable.form.imgUrl = _content.imgUrl
          this.mainTable.form.url = _content.url
        } else if (item.type === '5') {
          const _content = JSON.parse(item.sourceContent)
          this.mainTable.form.imgUrl = _content.imgUrl
          this.mainTable.form.mes = _content.mes
        } else if (item.type === '6') {
          const _content = JSON.parse(item.sourceContent)
          this.mainTable.form.videoUrl = _content.videoUrl
          this.mainTable.form.mes = _content.mes
        } else if (item.type === '7') {
          const _content = JSON.parse(item.sourceContent)
          this.mainTable.form.url = _content.url
          this.mainTable.form.mes = _content.mes
          this.mainTable.form.imgUrl = _content.imgUrl
        }

        this.$tool.copyObj(this.mainTable.form, item)
      }

      this.dialogVisible.source = true
    },
    handleSelectionChange: function(val) {
      this.mainTable.selectedArray = val
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    handleSubmit() {
      const _form = Object.assign({
        id: this.mainTable.row.id
      }, this.mainTable.form)
      if (this.mainTable.form.type === '1') {
        _form.sourceContent = _form.mes
      } else if (this.mainTable.form.type === '2') {
        _form.sourceContent = _form.imgUrl
      } else if (this.mainTable.form.type === '3') {
        _form.sourceContent = _form.videoUrl
      } else if (this.mainTable.form.type === '4') {
        _form.sourceContent = JSON.stringify({
          url: _form.url,
          imgUrl: _form.imgUrl
        })
      } else if (this.mainTable.form.type === '5') {
        _form.sourceContent = JSON.stringify({
          mes: _form.mes,
          imgUrl: _form.imgUrl
        })
      } else if (this.mainTable.form.type === '6') {
        _form.sourceContent = JSON.stringify({
          mes: _form.mes,
          videoUrl: _form.videoUrl
        })
      } else if (this.mainTable.form.type === '7') {
        _form.sourceContent = JSON.stringify({
          mes: _form.mes,
          url: _form.url,
          imgUrl: _form.imgUrl
        })
      }
      delete _form.mes
      delete _form.url
      delete _form.imgUrl
      delete _form.videoUrl
      updateSource(_form, this.type).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
        this.dialogVisible.source = false
      })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _filter = Object.assign({}, this.mainTable.filter)
      let _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      _form = Object.assign(_form, _filter)
      getSourceList(_form).then(response => {
        this.mainTable.pager.total = response.result.total || 0
        this.mainTable.array = response.result.records || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-source{
  border-radius: 4px;
  border: 1px dashed #ccc;
  height: 100px;
  cursor: pointer;
}
.upload-source-tip{
  text-align: center;
  transform: translateY(-50%);
  position: relative;
  top: 50%;
}
</style>
