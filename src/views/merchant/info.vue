<template>
  <div class="app-container">
    <div style="margin: 10px 0">
      <el-button type="danger" size="mini">删除</el-button>
    </div>
    <el-table
      v-loading="mainTable.loaidng"
      :data="mainTable.array"
      border
    >
      <el-table-column
        align="center"
        label="抖音号"
        prop="shortId"
      />
      <el-table-column
        align="center"
        label="昵称"
        prop="name"
      />
      <el-table-column
        align="center"
        label="头像"
      >
        <template slot-scope="scope">
          <img v-show="scope.row.head" width="40" height="40" :src="scope.row.head" alt="">
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="简介"
        prop="sign"
      />
      <el-table-column
        align="center"
        label="地址"
        prop="site"
      />
      <el-table-column
        align="center"
        label="使用状态"
      >
        <template slot-scope="scope">
          {{ map.code[scope.row.code] }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="showDialog('edit', scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :pager-size="mainTable.pager.size"
      :pager-index="mainTable.pager.index"
      :pager-total="mainTable.pager.total"
      @pagination-change="handlePagerChange"
    />
  </div>
</template>

<script>
import { getInfoList } from '@/api/merchant'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      mainTable: {
        loading: false,
        array: [],
        row: {},
        pager: {
          index: 1,
          size: 10,
          total: 0
        }
      }
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    showDialog() {

    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      getInfoList(_form).then(response => {
        const { result } = response
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

</style>
