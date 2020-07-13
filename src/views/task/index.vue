<template>
  <div style="background: #eee;min-height:100%">
    <div class="app-container">
      <div class="content-container">
        <el-form size="mini" :inline="true">
          <el-form-item>
            <el-input v-model="mainTable.filter.name" placeholder="请输入任务名称" />
          </el-form-item>
          <el-button size="mini" type="primary" icon="el-icon-search" @click="getMainTableData">搜索</el-button>
        </el-form>
      </div>
      <div class="content-container" style="padding-top: 0">
        <h3>任务列表
          <!-- <div style="float:right">
            <el-button size="mini" icon="el-icon-plus" type="primary" @click="showDialog('add')">新增</el-button>
            <el-button size="mini" icon="el-icon-delete" type="danger" @click="deleteGroupDevice">删除</el-button>
          </div> -->
        </h3>
        <el-table
          :loading="mainTable.loading"
          :data="mainTable.array"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            align="center"
          />
          <el-table-column
            align="center"
            prop="name"
            label="任务名称"
          />
          <el-table-column
            align="center"
            label="创建时间"
            prop="createTime"
          />
          <el-table-column
            align="center"
            label="执行方式"
            prop="remark"
          >
            <template slot-scope="scope">
              {{ map.type[scope.row.type] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="设备执行情况"
            prop="remark"
          >
            <template slot-scope="scope">
              {{ map.status[scope.row.status] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="200px"
          >
            <template slot-scope="scope">
              <el-button size="mini">查看执行详情</el-button>
              <el-button size="mini" @click="updateTaskAgain(scope.row.id)">重发</el-button>
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
      <el-dialog :title="`${type === 'add' ? '新建' : '编辑'}分组`" width="350px" :visible.sync="dialogVisible.deviceGroup" center>
        <el-form size="mini" label-width="100px">
          <el-form-item label="素材组名称">
            <el-input v-model="mainTable.form.name" placeholder="请输入分组昵称" />
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button size="mini" @click="dialogVisible.deviceGroup = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="handleSubmit">提 交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getTaskList, updateTaskAgain } from '@/api/task'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      type: '',
      dialogVisible: {
        deviceGroup: false
      },
      map: {
        type: {
          1: '立即执行',
          2: '手动执行',
          3: '定时执行'
        },
        pushType: {
          1: '广播',
          2: '单推',
          3: '多推'
        },
        status: {
          1: '执行成功',
          2: '执行失败',
          3: '待执行'
        }
      },
      mainTable: {
        loading: false,
        selectedArray: [],
        filter: {
          name: ''
        },
        form: {
          name: ''
        },
        array: [],
        row: {},
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
    updateTaskAgain(taskId) {
      updateTaskAgain({ taskId }).then(res => {
        this.$message.success(res.meesage)
      })
    },
    showDialog(type, item = {}) {
      this.type = type
      this.mainTable.row = item
      this.$tool.initForm(this.mainTable.form)
      if (type === 'edit') {
        this.$tool.copyObj(this.mainTable.form, item)
      }

      this.dialogVisible.deviceGroup = true
    },
    handleSelectionChange: function(val) {
      this.mainTable.selectedArray = val
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    handleSubmit() {
      const _form = Object.assign({
        id: this.mainTable.row.id
      }, this.mainTable.form)
      _form
      // updateSourceGroup(_form, this.type).then(res => {
      //   this.$message.success(res.message)
      //   this.getMainTableData()
      //   this.dialogVisible.deviceGroup = false
      // })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _filter = Object.assign({}, this.mainTable.filter)
      let _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      _form = Object.assign(_form, _filter)
      getTaskList(_form).then(response => {
        this.mainTable.pager.total = response.result.total || 0
        this.mainTable.array = response.result.records || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }
}
</script>

<style>

</style>
