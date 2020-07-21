<template>
  <div class="app-container">
    <el-table
      v-loading="mainTable.loading"
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
import { getHotPoi } from '@/api/poi'

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
    this.getMainData()
  },
  methods: {
    getMainData() {
      this.mainTable.loading = true
      const _form = {
        type: 1
      }
      getHotPoi(_form).then(response => {
        this.mainTable.array = response.list || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }
}
</script>

<style>

</style>
