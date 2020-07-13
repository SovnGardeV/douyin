<template>
  <div class="app-contanier">
    <el-button size="mini" type="primary" @click="showDialog">新增</el-button>
    <el-table
      :loading="mainTable.loading"
      :data="mainTable.array"
      border
    >
      <el-table-column
        align="center"
        label="客服昵称"
        prop="nickname"
      />
      <el-table-column
        align="center"
        label="角色名"
        prop="roleName"
      />
      <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="deleteService(scope.row.persona_id)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <pagination
      :pager-size="mainTable.pager.size"
      :pager-index="mainTable.pager.index"
      :pager-total="mainTable.pager.total"
      @pagination-change="handlePagerChange"
    />

    <el-dialog title="创建客服" :visible.sync="dialogVisible.service" width="400px" center>
      <el-form size="mini" label-width="80px">
        <el-form-item label="客服昵称">
          <el-input v-model="mainTable.form.nickname" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="handleSubmit">提交</el-button>

      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getServiceList, addService, deleteService } from '@/api/enterprise'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      dialogVisible: {
        service: false
      },
      mainTable: {
        loading: false,
        array: [],
        form: {
          nickname: '',
          role_name: '客服'
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
    deleteService(persona_id) {
      this.$confirm('确定要删除该客服吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        deleteService({
          userId: this.$route.params.userId,
          persona_id
        }).then(response => {
          this.$message.success(response.message)
        })
      })
    },
    showDialog() {
      this.$tool.initForm(this.mainTable.form, ['role_name'])
      this.dialogVisible.service = true
    },
    handleSubmit() {
      const _form = Object.assign({
        userId: this.$route.params.userId
      }, this.mainTable.form)
      addService(_form).then(res => {
        this.$message.success(res.mes || '提交成功')
        this.getMainTableData()
        this.dialogVisible.service = false
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
        cursor: this.mainTable.pager.index - 1,
        count: this.mainTable.pager.size,
        userId: this.$route.params.userId
      }
      getServiceList(_form).then(response => {
        this.mainTable.pager.total = response.data || 0
        this.mainTable.array = response.personas || []
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
