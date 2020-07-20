<template>
  <div class="app-contanier">
    <el-button size="mini" @click="showDialog">新增</el-button>
    <el-button size="mini" type="danger" @click="deleteAdmin">删除</el-button>
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
        label="ID"
        prop="id"
      />
      <el-table-column
        align="center"
        label="账号"
        prop="account"
      />
      <el-table-column
        align="center"
        label="超级管理员"
        prop="account"
      >
        <template slot-scope="scope">
          {{ map.isSuperAdmin[scope.row.isSuperAdmin] }}
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :pager-size="mainTable.pager.size"
      :pager-index="mainTable.pager.index"
      :pager-total="mainTable.pager.total"
      @pagination-change="handlePagerChange"
    />

    <el-dialog title="新增系统管理员" :visible.sync="dialogVisible.admin">
      <el-form size="mini" label-width="100px" center>
        <el-form-item label="账号">
          <el-input v-model="mainTable.form.account" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="mainTable.form.password" type="password" />
        </el-form-item>
        <el-form-item label="系统管理员">
          <el-select v-model="mainTable.form.isSuperAdmin">
            <el-option
              v-for="(value, key) in map.isSuperAdmin"
              :key="key"
              :value="key"
              :label="value"
            >
              {{ value }}
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="handleSubmit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getAdminList, addAdmin, deleteAdmin } from '@/api/system'
import Pagination from '@/components/Pagination'
import { JSEncrypt } from 'jsencrypt'
import { getPublicKey } from '@/api/user'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      map: {
        isSuperAdmin: {
          1: '否',
          2: '是'
        }
      },
      dialogVisible: {
        admin: false
      },
      mainTable: {
        loading: false,
        array: [],
        multipleSelection: [],
        form: {
          isSuperAdmin: '',
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
        this.$message.info('请选择要删除的管理员')
        return
      }
      this.$confirm('确定要删除这些管理员吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.multipleSelection.forEach(log => {
          ids.push(log.id)
        })
        ids = ids.join(',')
        deleteAdmin({
          ids
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
      })
    },
    showDialog() {
      this.dialogVisible.admin = true
    },
    async handleSubmit() {
      const { publicKey } = await getPublicKey()
      const _form = Object.assign({}, this.mainTable.form)

      const encrypt = new JSEncrypt()
      encrypt.setPublicKey(publicKey)
      _form.password = encrypt.encrypt(this.mainTable.form.password)

      addAdmin(_form).then(res => {
        this.getMainTableData()
        this.$message(res.message)
        this.dialogVisible.admin = false
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
        pageNo: 1,
        pageSize: 10
      }
      getAdminList(_form).then(res => {
        this.mainTable.pager.total = res.data || 0
        this.mainTable.array = res.rows || []
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
