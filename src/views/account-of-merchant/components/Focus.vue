<template>
  <div class="app-contanier">
    <el-table
      :loading="mainTable.loading"
      :data="mainTable.array"
      border
    >
      <el-table-column
        align="center"
        label="头像"
      >
        <template slot-scope="scope">
          <img :src="scope.row.avatar" width="50px" height="50px" alt="">
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="昵称"
        prop="nickname"
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
  methods: {
    getMainData() {
      this.mainTable.loading = true
      const _form = {
        cursor: this.mainTable.pager.index - 1,
        count: this.mainTable.pager.size,
        userId: this.$route.params.userId
      }
      getFocusData(_form).then(response => {
        this.mainTable.pager.total = response.data || 0
        this.mainTable.array = response.list || []
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
