<template>
  <div class="app-contanier">
    <div style="margin: 10px 0; text-align: right">
      <el-button size="mini" type="primary" @click="showDialog('add')">新增</el-button>
      <el-button size="mini" type="danger" @click="deleteAdmin">删除</el-button>
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
        label="登录账号"
        prop="account"
      />
      <el-table-column
        align="center"
        label="代理商"
        prop="id"
      />
      <el-table-column
        align="center"
        label="端口总数"
        prop="portNum"
      />
      <el-table-column
        align="center"
        label="创建时间"
        prop="createTime"
      />
      <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button size="mini" @click="showDialog('editPwd',scope.row)">修改密码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :pager-size="mainTable.pager.size"
      :pager-index="mainTable.pager.index"
      :pager-total="mainTable.pager.total"
      @pagination-change="handlePagerChange"
    />

    <el-dialog :title="`${type === 'add' ? '新增' : '编辑'}代理商`" :visible.sync="dialogVisible.proxy" width="400px">
      <el-form size="mini" label-width="100px" center>
        <el-form-item v-show="type === 'add'" label="账号">
          <el-input v-model="mainTable.form.account" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="mainTable.form.password" type="password" />
        </el-form-item>
        <el-form-item v-show="type === 'add'" label="端口总数">
          <el-input v-model="mainTable.form.portNum" type="number" min="0" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="handleSubmit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getProxyList, updateProxy, deleteProxy } from '@/api/system'
import Pagination from '@/components/Pagination'
import { JSEncrypt } from 'jsencrypt'
import { getPublicKey } from '@/api/user'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      type: '',
      dialogVisible: {
        proxy: false
      },
      mainTable: {
        loading: false,
        array: [],
        row: {},
        multipleSelection: [],
        form: {
          portNum: '',
          account: '',
          password: ''
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
    deleteAdmin() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的代理商')
        return
      }
      this.$confirm('确定要删除这些代理商吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.multipleSelection.forEach(log => {
          ids.push(log.id)
        })
        ids = ids.join(',')
        deleteProxy({
          ids
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
      })
    },
    showDialog(type, item = {}) {
      this.type = type
      this.mainTable.row = item
      this.$tool.initForm(this.mainTable.form)
      this.dialogVisible.proxy = true
    },
    async handleSubmit() {
      const { publicKey } = await getPublicKey()
      let _form = {}

      const encrypt = new JSEncrypt()
      encrypt.setPublicKey(publicKey)
      _form.pwd = encrypt.encrypt(this.mainTable.form.password)

      if (this.type === 'add') {
        _form = Object.assign(_form, this.mainTable.form)
        _form.password = _form.pwd
        delete _form.pwd
      } else {
        _form.id = this.mainTable.row.id
      }

      updateProxy(_form, this.type).then(res => {
        this.getMainTableData()
        this.$message.success(res.message)
        this.dialogVisible.proxy = false
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
        pageNo: this.mainTable.pager.index - 1,
        pageSize: this.mainTable.pager.size
      }
      getProxyList(_form).then(res => {
        const { result } = res
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
.app-contanier{
    padding: 20px;
    height: 100%;
    overflow: auto;
}
</style>
