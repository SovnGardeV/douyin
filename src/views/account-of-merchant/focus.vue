<template>
  <div class="app-contanier">
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

    </el-table>
  </div>
</template>

<script>
import { getFocusData } from '@/api/account-of-merchant'
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
        cursor: 1,
        count: 10,
        userId: this.$route.params.userId
      }
      getFocusData(_form).then(response => {
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
