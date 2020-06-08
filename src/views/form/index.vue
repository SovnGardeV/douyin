<template>
  <div class="table-container">
    <el-table
      ref="mainTable"
      v-loading="mainTable.loading"
      class=""
      :data="mainTable.array"
      element-loading-text="加载中，请稍候"
      element-loading-spinner="el-icon-loading"
      border
      stripe
      fit
      highlight-current-row
    >
      <!-- <el-table-column type="selection" /> -->
      <!-- <el-table-column align="center" label="渠道信息" prop="orderId" /> -->
      <el-table-column align="center" label="订单号">
        <template slot-scope="scope">
          <div class="over-hide" :title="`订单号:${scope.row.orderId}`">订单号:{{ scope.row.orderId }}</div>
          <div class="over-hide" :title="`外部订单号:${scope.row.outId}`">外部订单号:{{ scope.row.outId }}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="收款金额" prop="earnMonry">
        <template slot-scope="scope">
          <div>{{ $tool.division(scope.row.earnMonry) }}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="确认方式">
        <template slot-scope="scope">
          {{ map.userPassType[scope.row.userPassType] }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="是否正常回调">
        <template slot-scope="scope">
          <!-- <div>{{ map.orderStatus[scope.row.orderStatus] }}</div> -->
          <div>{{ map.payStatus[scope.row.payStatus] }}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="收款时间" prop="remitTime" />
      <el-table-column align="center" label="回调次数" prop="backNum" />
      <el-table-column align="center" label="回调时间" prop="backTime" />
      <!-- <el-table-column align="center" label="过期时间" prop="pastTime" /> -->
      <el-table-column align="center" label="备注" prop="remark" />

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
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

