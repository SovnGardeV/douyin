<template>
  <div class="app-contanier">
    <el-button size="mini" @click="showDialog('add')">新增</el-button>
    <el-button size="mini" type="danger" @click="deleteMerchant">删除</el-button>
    <el-table
      :loading="mainTable.loading"
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
        label="姓名"
        prop="name"
      />
      <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <router-link :to="`/example/index?merchantId=${scope.row.id}`">
            <el-button size="mini">用户数据</el-button>
          </router-link>
          <el-button size="mini" @click="getCollection">收藏内容</el-button>
          <el-button size="mini" type="primary" @click="showDialog('edit', scope.row)">编辑</el-button>
        </template>
      </el-table-column>

    </el-table>
    <pagination
      :pager-size="mainTable.pager.size"
      :pager-index="mainTable.pager.index"
      :pager-total="mainTable.pager.total"
      @pagination-change="handlePagerChange"
    />

    <el-dialog title="新增商户" :visible.sync="dialogVisible.merchant">
      <el-form size="mini" label-width="80px">
        <el-form-item label="商户名">
          <el-input v-model="mainTable.form.name" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="mainTable.form.password" type="password" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="mainTable.form.phone" />
        </el-form-item>
        <el-button @click="handleSubmit">提交</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getMerchantList, addMerchant, editMerchant, getCollection, deleteMerchant } from '@/api/merchant'
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
        merchant: false
      },
      mainTable: {
        loading: false,
        multipleSelection: [],
        array: [],
        row: {},
        form: {
          name: '',
          password: '',
          phone: ''
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
    getCollection() {
      getCollection({ type: 1 }).then(res => {

      })
    },
    handleSelectionChange(val) {
      this.mainTable.multipleSelection = val
    },
    deleteMerchant() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的商户')
        return
      }
      this.$confirm('确定要删除这些商户吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.multipleSelection.forEach(log => {
          ids.push(log.id)
        })
        ids = ids.join(',')
        deleteMerchant({
          ids
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
      })
    },
    showDialog(type, item) {
      this.type = type
      this.mainTable.row = item || {}
      if (type === 'edit') {
        this.$tool.copyObj(this.mainTable.form, item)
      }
      this.dialogVisible.merchant = true
    },
    async handleSubmit() {
      const _api = {
        'add': addMerchant,
        'edit': editMerchant
      }
      const { publicKey } = await getPublicKey()
      const _form = Object.assign({
        id: this.mainTable.row.id
      }, this.mainTable.form)

      const encrypt = new JSEncrypt()
      encrypt.setPublicKey(publicKey)
      if (this.mainTable.form.password !== this.mainTable.row.password) {
        _form.password = encrypt.encrypt(this.mainTable.form.password)
      }

      _api[this.type](_form).then(res => {
        this.getMainTableData()
        this.$message(res.message)
        this.dialogVisible.merchant = false
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
      getMerchantList(_form).then(response => {
        this.mainTable.pager.total = response.data || 0
        this.mainTable.array = response.rows || []
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
}
</style>
