<template>
  <div class="app-contanier">
    <el-table
      ref="mainTable"
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
        label="软件名"
        prop="name"
      />
      <el-table-column
        align="center"
        label="说明"
        prop="mes"
      />
      <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <a :href="scope.row.url" target="_blank">
            <el-button size="mini" type="success">下载</el-button>
          </a>
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
import { getAPPList } from '@/api/system'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      mainTable: {
        loading: false,
        multipleSelection: [],
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
    handleSelectionChange(val) {
      this.mainTable.multipleSelection = val
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      getAPPList(_form).then(res => {
        const { result } = res
        this.mainTable.pager.total = result.total || 0
        this.mainTable.array = result.records || []
        // this.mainTable.array = [{}]
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
