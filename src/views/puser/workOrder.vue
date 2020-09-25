<template>
  <div style="background: rgb(238, 238, 238);height: 100%">
    <div class="app-container">
      <div class="content-container">
        <div style="display: flex">
          <h3 style="flex: 1;margin: 10px 0">工单记录</h3>
          <div style="margin: 10px 0">
            <el-button size="mini" type="danger" @click="deleteAdmin">删除</el-button>
          </div>
        </div>
        <el-table
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
            label="用户账号"
            prop="userId"
          />
          <el-table-column
            align="center"
            label="工单类型"
          >
            <template slot-scope="scope">
              {{ map.type[scope.row.type] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="问题描述"
            prop="msg"
          />
          <el-table-column
            align="center"
            label="创建时间"
            prop="createTime"
          />
          <el-table-column
            align="center"
            label="工单状态"
          >
            <template slot-scope="scope">
              {{ map.status[scope.row.status] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="处理人"
            prop="updateBy"
          />
          <el-table-column
            align="center"
            label="处理时间"
            prop="updateTime"
          />
          <el-table-column
            align="center"
            label="操作"
            width="180"
          >
            <template slot-scope="scope">
              <el-button size="mini" @click="showDialog('edit', scope.row)">编辑</el-button>
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

      <el-dialog :title="`${mode === 'add' ? '新增' : '编辑'}工单`" :visible.sync="dialogVisible.plug" width="400px" center>
        <el-form size="mini" label-width="100px" center>
          <el-form-item label="工单类型">
            <el-select v-model="mainTable.form.type">
              <el-option v-for="(value, key) in map.type" :key="key" :value="key" :label="value" />
            </el-select>
          </el-form-item>
          <el-form-item label="问题描述">
            <el-input v-model="mainTable.form.msg" type="textarea" />
          </el-form-item>
          <el-form-item label="工单状态">
            <el-select v-model="mainTable.form.status">
              <el-option v-for="(value, key) in map.status" :key="key" :value="key" :label="value" />
            </el-select>
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
import { queryWorkOrderList, updateWorkOrder, deleteWorkOrder } from '@/api/normalUser'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      map: {
        type: {
          1: '业务补单',
          2: '卡密错误',
          3: '充值没到账',
          4: '订单中途改了密码',
          5: '其他问题'
        },
        status: {
          0: '待处理',
          1: '已处理'
        }
      },
      mode: '',
      dialogVisible: {
        plug: false,
        order: false
      },
      loading: false,
      mainTable: {
        loading: false,
        array: [],
        row: {},
        multipleSelection: [],
        form: {
          msg: '',
          status: '',
          type: ''
        },
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
    deleteAdmin() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的工单记录')
        return
      }
      this.$confirm('确定要删除这些工单记录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.multipleSelection.forEach(log => {
          ids.push(log.id)
        })
        ids = ids.join(',')
        deleteWorkOrder({
          ids
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
      })
    },
    showDialog(mode, item) {
      this.mainTable.row = item || {}
      this.$tool.initForm(this.mainTable.form)
      if (mode === 'edit') {
        this.$tool.copyObj(this.mainTable.form, item)
      }
      this.dialogVisible.plug = true
      this.mode = mode
    },
    async handleSubmit() {
      const _form = Object.assign({ id: this.mainTable.row.id }, this.mainTable.form)
      updateWorkOrder(_form, this.mode).then(res => {
        this.getMainTableData()
        this.$message.success(res.message)
        this.dialogVisible.plug = false
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
      queryWorkOrderList(_form).then(res => {
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
