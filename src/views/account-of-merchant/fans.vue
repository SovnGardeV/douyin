<template>
  <div class="app-contanier">
    <el-card />
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
import { getFansData, getFansList } from '@/api/account-of-merchant'
export default {
  data() {
    return {
      fansData: {},
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
    this.getFansData()
    this.getMainTableData()
  },
  methods: {
    async getFansData() {
      const { fansData = {}} = await getFansData({ userId: this.$route.params.userId })
      this.fansData = fansData
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        cursor: 1,
        count: 10,
        userId: this.$route.params.userId
      }
      getFansList(_form).then(response => {
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
