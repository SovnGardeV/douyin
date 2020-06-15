<template>
  <div class="app-contanier">
    <el-button size="mini">新增</el-button>
    <el-table
      :loading="mainTable.loading"
      :data="mainTable.array"
      border
    >
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
      <!-- <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button size="mini" @click="deleteItem(scope.row.)">删除</el-button>
        </template>
      </el-table-column> -->

    </el-table>
  </div>
</template>

<script>
import { getMerchantList } from '@/api/merchant'
export default {
  data() {
    return {
      mainTable: {
        loading: false,
        array: [],
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
