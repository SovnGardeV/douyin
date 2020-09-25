<template>
  <div style="background: rgb(238, 238, 238);height: 100%">
    <div class="app-container">
      <div class="content-container">
        <div style="display: flex">
          <h3 style="flex: 1; margin: 10px 0">充值记录</h3>
          <div style="margin: 10px 0">
            <el-button v-if="$route.query.id" size="mini" type="primary" @click="showDialog">充值</el-button>
          </div>
        </div>
        <el-table
          v-loading="mainTable.loading"
          :data="mainTable.array"
          border
        >
          <el-table-column
            align="center"
            label="充值用户"
            prop="userId"
          />
          <el-table-column
            align="center"
            label="订单类型"
          >
            <template slot-scope="scope">
              {{ map.type[scope.row.type] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="金额"
            prop="amount"
          />
          <el-table-column
            align="center"
            label="实际金额"
            prop="realMoney"
          />
          <el-table-column
            align="center"
            label="提现手续费"
            prop="fees"
          />
          <el-table-column
            align="center"
            label="支付方式"
          >
            <template slot-scope="scope">
              {{ map.payType[scope.row.payType] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="支付时间"
            prop="createTime"
          />
          <el-table-column
            align="center"
            label="订单状态"
          >
            <template slot-scope="scope">
              {{ map.orderStatus[scope.row.orderStatus] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="审核员"
            prop="updateBy"
          />
          <el-table-column
            align="center"
            label="审核时间"
            prop="updateTime"
          />
          <el-table-column
            align="center"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <div v-if="scope.row.orderStatus === 0">
                <el-button size="mini" @click="verify(scope.row.id, 1)">通过</el-button>
                <el-popover
                  placement="left"
                  width="160"
                  trigger="click"
                >
                  <el-input v-model="scope.row.reason" size="mini" type="textarea" />
                  <div style="text-align:right">
                    <el-button size="mini" type="text" @click="verify(scope.row.id, 2, scope.row.reason)">确定</el-button>
                  </div>
                  <el-button slot="reference" size="mini" type="danger">驳回</el-button>
                </el-popover>
              </div>
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
      <el-dialog :title="`充值`" :visible.sync="dialogVisible.plug" width="400px" center>
        <el-form size="mini" label-width="100px" center>
          <el-form-item label="充值账号">
            <span>{{ $route.query.id }}</span>
          </el-form-item>
          <el-form-item label="充值金额">
            <el-input v-model="mainTable.form.money" type="number" min="0" />
          </el-form-item>
          <el-form-item label="支付方式">
            <el-select v-model="mainTable.form.payType">
              <el-option v-for="(value, key) in map.payType" :key="key" :value="key" :label="value" />
            </el-select>
          </el-form-item>
          <el-form-item label="充值备注">
            <el-input v-model="mainTable.form.remark" type="textarea" />
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button size="mini" @click="dialogVisible.plug =false">取消</el-button>
          <el-button size="mini" type="primary" @click="handleSubmit">提交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { queryUserOrderList, updateOrder, recharge } from '@/api/normalUser'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      map: {
        payType: {
          1: '支付宝',
          2: '微信'
        },
        orderStatus: {
          0: '待审核',
          1: '通过',
          2: '驳回'
        },
        type: {
          1: '充值',
          2: '提现'
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
        form: {
          userId: this.$route.query.id,
          money: '',
          payType: '',
          remark: ''
        },
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
    copy(val, msg) {
      let hiddenInput = document.querySelector('.hidden-input')
      if (!hiddenInput) {
        hiddenInput = document.createElement('input')
        hiddenInput.value = val
        hiddenInput.className = 'hidden-input'
        document.body.appendChild(hiddenInput)
      }

      hiddenInput.select()
      document.execCommand('copy')
      this.$message.success(msg)
      hiddenInput.remove()
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    showDialog() {
      this.$tool.initForm(this.mainTable.form, ['userId'])
      this.dialogVisible.plug = true
    },
    async handleSubmit() {
      const _form = Object.assign({}, this.mainTable.form)

      recharge(_form).then(res => {
        this.getMainTableData()
        // this.$message.success(res.message)
        this.copy(res.data, '充值成功，已复制收款码地址')
        this.dialogVisible.plug = false
      })
    },
    verify(id, status, reason) {
      updateOrder({ id, status, reason }).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
      })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size,
        userId: this.$route.query.id
      }
      queryUserOrderList(_form).then(res => {
        if (Array.isArray(res.data)) {
          res.data.forEach(item => {
            item.reason = ''
          })
        }
        this.mainTable.pager.total = res.data || 0
        this.mainTable.array = res.rows || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }
}
</script>

<style>
</style>
