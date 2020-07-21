<template>
  <div class="app-contanier">
    <el-button size="mini" type="danger" @click="deleteLog">删除</el-button>
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
        label="操作"
        prop="logContent"
      />
      <el-table-column
        align="center"
        label="IP地址"
        prop="ip"
      />
      <el-table-column
        align="center"
        label="运营商"
        prop="city"
      />
      <el-table-column
        align="center"
        label="操作系统"
        prop="os"
      />
      <el-table-column
        align="center"
        label="操作时间"
        prop="createTime"
      />
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
import { getLogList, deleteLog } from '@/api/system'
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
          index: 0,
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
    deleteLog() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的操作记录')
        return
      }
      this.$confirm('确定要删除这些 操作记录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.multipleSelection.forEach(log => {
          ids.push(log.id)
        })
        ids = ids.join(',')
        deleteLog({
          ids
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
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
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      getLogList(_form).then(res => {
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
