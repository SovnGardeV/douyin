<template>
  <div style="background: rgb(238, 238, 238);height: 100%">
    <div class="app-container">
      <div class="content-container">
        <div style="display: flex">
          <h3 style="flex: 1;margin: 10px 0">插件大类</h3>
          <div style="margin: 10px 0">
            <el-button size="mini" type="primary" @click="showDialog('add')">新增</el-button>
            <el-button size="mini" type="danger" @click="deleteAdmin">删除</el-button>
          </div>
        </div>
        <el-table
          v-loading="mainTable.loading"
          :data="mainTable.array"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            align="center"
            type="selection"
          />
          <el-table-column
            align="center"
            label="标题"
            prop="title"
          />
          <el-table-column
            align="center"
            label="LOGO"
            prop="account"
          >
            <template slot-scope="scope">
              <img :src="scope.row.logo" width="60" alt="">
            </template>
          </el-table-column>
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
            label="操作"
          >
            <template slot-scope="scope">
              <el-button size="mini" @click="showDialog('edit', scope.row)">编辑</el-button>
              <el-button size="mini" @click="$router.push({path: `/plug/${scope.row.id}/commodity${$route.query.userId ? '?userId=' + $route.query.userId : ''}`})">商品</el-button>
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

      <el-dialog :title="`${mode === 'add' ? '新增' : '编辑'}插件大类`" :visible.sync="dialogVisible.plug" width="400px" center>
        <el-form size="mini" label-width="100px" center>
          <el-form-item label="标题">
            <el-input v-model="mainTable.form.title" />
          </el-form-item>
          <el-form-item label="LOGO">
            <div
              v-loading="loading"
              class="upload-source"
              element-loading-text="上传中"
              element-loading-spinner="el-icon-loading"
            >
              <div v-if="!mainTable.form.logo" class="upload-source-tip" @click="fakeUploadClick('img')">
                <i class="el-icon-plus" />
              </div>
              <img v-else style="width:100%;height:100%" :src="mainTable.form.logo" alt="" @click="fakeUploadClick('img')">
            </div>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="mainTable.form.type">
              <el-option v-for="(value, key) in map.type" :key="key" :value="key" :label="value" />
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button size="mini" @click="dialogVisible.plug =false">取消</el-button>
          <el-button size="mini" type="primary" @click="handleSubmit">提交</el-button>
        </div>
      </el-dialog>
      <input type="file" style="visibility: hidden;" class="img" @change="uploadSource">
    </div>
  </div>
</template>

<script>
import { queryPlugClassify, updatePlugClassify, deletePlugClassify } from '@/api/plug'
import { uploadSource } from '@/api/source'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      map: {
        type: {
          ds: '抖音',
          ks: '快手',
          yk: '云控'
        }
      },
      mode: '',
      dialogVisible: {
        plug: false
      },
      loading: false,
      mainTable: {
        loading: false,
        array: [],
        row: {},
        multipleSelection: [],
        form: {
          logo: '',
          title: '',
          type: ''
        },
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      }
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    handleSelectionChange(val) {
      this.mainTable.multipleSelection = val
    },
    fakeUploadClick(className) {
      const fileInput = document.querySelector(`input[type=file].${className}`)
      fileInput.click()
    },
    uploadSource(e) {
      const { files } = e.target
      if (files.length) {
        this.loading = true
        const formData = new FormData()
        formData.append('file', files[0])
        uploadSource(formData).then(res => {
          this.mainTable.form.logo = res.result
        }).finally(() => {
          this.loading = false
        })
      }
    },
    deleteAdmin() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的插件大类')
        return
      }
      this.$confirm('确定要删除这些插件大类吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.multipleSelection.forEach(log => {
          ids.push(log.id)
        })
        ids = ids.join(',')
        deletePlugClassify({
          ids
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
      })
    },
    showDialog(mode, item) {
      this.mainTable.row = item || {}
      this.$tool.initForm(this.mainTable.form)
      if (mode === 'edit') {
        this.$tool.copyObj(this.mainTable.form, item)
      }
      this.dialogVisible.plug = true
      this.mode = mode
    },
    async handleSubmit() {
      const _form = Object.assign({ id: this.mainTable.row.id }, this.mainTable.form)

      updatePlugClassify(_form, this.mode).then(res => {
        this.getMainTableData()
        this.$message.success(res.message)
        this.dialogVisible.plug = false
      })
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      queryPlugClassify(_form).then(res => {
        const { result = {}} = res
        this.mainTable.pager.total = result.total || 0
        this.mainTable.array = result.records || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }
}
</script>

<style>
.upload-source{
  border-radius: 4px;
  border: 1px dashed #ccc;
  height: 100px;
  width: 100px;
  cursor: pointer;
}
.upload-source-tip{
  text-align: center;
  transform: translateY(-50%);
  position: relative;
  top: 50%;
}
</style>
