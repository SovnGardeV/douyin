<template>
  <div class="app-contanier">
    <div style="margin:10px 0;text-align:right">
      <el-button v-if="role === 'admin'" size="mini" type="primary" @click="showDialog('add')">新增</el-button>
      <el-button v-if="role === 'admin'" size="mini" type="danger" @click="deleteAPP">删除</el-button>
    </div>
    <el-table
      ref="mainTable"
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
        label="软件名"
        prop="name"
      />
      <el-table-column
        align="center"
        label="设备名"
        prop="systemModel"
      />
      <el-table-column
        align="center"
        label="设备版本"
        prop="deviceVersion"
      />
      <el-table-column
        align="center"
        label="软件版本"
        prop="deviceVersion"
      >
        <template slot-scope="scope">
          {{ map.type[scope.row.type] }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="说明"
        prop="mes"
      />
      <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <a :href="scope.row.url" target="_blank">
            <el-button size="mini" type="success">下载</el-button>
          </a>
          <el-button v-if="role === 'admin'" size="mini" @click="showDialog('edit', scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :pager-size="mainTable.pager.size"
      :pager-index="mainTable.pager.index"
      :pager-total="mainTable.pager.total"
      @pagination-change="handlePagerChange"
    />

    <el-dialog :title="`${type==='add' ? '新增':'编辑'}软件`" :visible.sync="dialogVisible.app" center width="500px">
      <el-form v-loading="mainTable.formLoading" element-loading-text="上传中" size="mini" label-width="100px" center>
        <el-form-item label="软件名">
          <el-input v-model="mainTable.form.name" />
        </el-form-item>
        <el-form-item label="apk版本">
          <el-input v-model="mainTable.form.version" />
        </el-form-item>
        <el-form-item label="设备名">
          <el-input v-model="mainTable.form.deviceVersion" />
        </el-form-item>
        <el-form-item label="设备版本">
          <el-input v-model="mainTable.form.systemModel" />
        </el-form-item>
        <el-form-item label="软件版本">
          <el-select v-model="mainTable.form.type">
            <el-option
              v-for="(value, key) in map.type"
              :key="key"
              :value="key"
              :label="value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="说明">
          <el-input v-model="mainTable.form.mes" type="textarea" :rows="3" />
        </el-form-item>
        <el-form-item label="下载地址">
          <el-input v-model="mainTable.form.url" disabled />
          <input type="file" @change="uploadSource">
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button size="small" type="primary" @click="handleSubmit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getAPPList, uploadSystemSource, updateAPP, deleteAPP } from '@/api/system'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      type: '',
      map: {
        type: {
          dy: '抖音',
          yk: '云控',
          ds: '多闪'
        }
      },
      dialogVisible: {
        app: false
      },
      mainTable: {
        loading: false,
        formLoading: false,
        multipleSelection: [],
        array: [],
        row: {},
        form: {
          mes: '',
          name: '',
          url: '',
          version: '',
          deviceVersion: '',
          systemModel: '',
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
  computed: {
    role() {
      return localStorage.getItem('loginType')
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    deleteAPP() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的APP')
        return
      }
      this.$confirm('确定要删除这些APP吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.multipleSelection.forEach(app => {
          ids.push(app.id)
        })
        ids = ids.join(',')
        deleteAPP({
          ids
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
      })
    },
    fakeUploadClick() {
      const fileInput = document.querySelector('input[type=file]')
      fileInput.click()
    },
    uploadSource(e) {
      const { files } = e.target
      if (files.length) {
        this.mainTable.formLoading = true
        const formData = new FormData()
        formData.append('file', files[0])
        uploadSystemSource(formData).then(res => {
          this.mainTable.form.url = res.result.download_url
        }).finally(() => {
          this.mainTable.formLoading = false
        })
      }
    },
    handleSubmit() {
      const _form = Object.assign({
        id: this.mainTable.row.id
      }, this.mainTable.form)
      updateAPP(_form, this.type).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
        this.dialogVisible.app = false
      })
    },
    handleSelectionChange(val) {
      this.mainTable.multipleSelection = val
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    showDialog(type, item = {}) {
      this.type = type
      this.mainTable.row = item
      this.$tool.initForm(this.mainTable.form)
      if (type === 'edit') {
        this.$tool.copyObj(this.mainTable.form, item)
      }

      this.dialogVisible.app = true
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index - 1,
        pageSize: this.mainTable.pager.size
      }
      getAPPList(_form).then(res => {
        const { result } = res
        this.mainTable.pager.total = result.total || 0
        this.mainTable.array = result.records || []
        // this.mainTable.array = [{}]
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }
}
</script>

<style>
.app-contanier{
    padding: 20px;
    height: 100%;
    overflow: auto;
}
</style>
