<template>
  <div style="background: rgb(238, 238, 238);height: 100%">
    <div class="app-container">
      <div class="content-container">
        <h3>插件订单</h3>
        <el-table
          v-loading="mainTable.loading"
          :data="mainTable.array"
          border
        >
          <el-table-column
            align="center"
            label="下单账号"
            prop="userId"
          />
          <el-table-column
            align="center"
            label="商品名"
            prop="plugName"
          />
          <el-table-column
            align="center"
            label="购买数量"
            prop="num"
          />
          <el-table-column
            align="center"
            label="单价"
            prop="price"
          />
          <el-table-column
            align="center"
            label="总价"
            prop="totalPrice"
          />
          <el-table-column
            align="center"
            label="订单状态"
          >
            <template slot-scope="scope">
              {{ map.status[scope.row.status] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="支付时间"
            prop="payTime"
          />
          <el-table-column
            align="center"
            label="作品连接"
            prop="url"
          />
          <el-table-column
            align="center"
            label="评论内容"
            prop="remark1"
          />
          <el-table-column
            align="center"
            label="创建时间"
            prop="createTime"
          />
          <el-table-column
            align="center"
            label="处理状态"
          >
            <template slot-scope="scope">
              {{ map.result[scope.row.result] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="审核员"
            prop="updateBy"
          />
          <el-table-column
            align="center"
            label="操作"
          >
            <template slot-scope="scope">
              <el-button size="mini" @click="handleOrder(scope.row.id)">处理</el-button>
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
    </div>
  </div>
</template>

<script>
import { queryMealOrder, updateMealOrder } from '@/api/plug'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      map: {
        result: {
          0: '未到账',
          1: '待处理',
          2: '已处理',
          3: '有异常'
        },
        status: {
          0: '待支付',
          1: '已支付'
        }
      },
      mode: '',
      dialogVisible: {
        plug: false
      },
      loading: false,
      mainTable: {
        loading: false,
        array: [],
        row: {},
        multipleSelection: [],
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
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    updateMealOrder(orderId) {
      updateMealOrder({ orderId }).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
      })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      queryMealOrder(_form).then(res => {
        const { result = {}} = res
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
