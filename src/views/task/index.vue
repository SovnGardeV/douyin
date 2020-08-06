<template>
  <div style="background: #eee;height:100%">
    <div class="app-container">
      <div class="content-container">
        <el-form size="mini" :inline="true">
          <el-form-item>
            <el-select v-model="mainTable.filter.name" placeholder="请选择任务名称" clearable>
              <el-option v-for="item in taskNameList" :key="item" :value="item" :label="item" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="mainTable.filter.status" placeholder="请选择执行情况" clearable>
              <el-option v-for="(value, key) in map.status" :key="key" :value="key" :label="value" />
            </el-select>
          </el-form-item>
          <el-button size="mini" type="primary" icon="el-icon-search" @click="getMainTableData">搜索</el-button>
        </el-form>
      </div>
      <div class="content-container" style="padding-top: 0">
        <h3>任务列表
          <div style="float:right">
            <!-- <el-button size="mini" icon="el-icon-plus" type="primary" @click="showDialog('add')">新增</el-button> -->
            <el-button v-if="role === 'admin'" size="mini" icon="el-icon-delete" type="danger" @click="deleteTask">删除</el-button>
          </div>
        </h3>
        <el-tabs v-model="mainTable.filter.type" @tab-click="getMainTableData">
          <el-tab-pane label="立即执行任务" name="1">
            <el-table
              v-loading="mainTable.loading"
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
                prop="operMsg"
                label="任务名称"
              />
              <el-table-column
                align="center"
                prop="operType"
                label="任务类型"
              />
              <el-table-column
                align="center"
                prop="speed"
                label="任务总进度"
              />
              <!-- <el-table-column
                align="center"
                prop="num"
                label="执行设备数"
              /> -->
              <el-table-column
                align="center"
                label="创建时间"
                prop="createTime"
              />
              <!-- <el-table-column
                align="center"
                label="执行方式"
                prop="remark"
              >
                <template slot-scope="scope">
                  {{ map.type[scope.row.type] }}
                </template>
              </el-table-column> -->
              <el-table-column
                align="center"
                label="执行时间"
                prop="operTime"
              />
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
                width="170px"
              >
                <template slot-scope="scope">
                  <el-row :gutter="5" style="margin-bottom:5px">
                    <el-col :span="24">
                      <el-button style="width:100%" size="mini" @click="getTaskDetail(scope.row.id)">查看执行详情</el-button>
                    </el-col>
                  </el-row>
                  <el-row :gutter="5">
                    <el-col :span="10">
                      <el-button style="width:100%" size="mini" @click="updateTaskAgain(scope.row.id)">重发</el-button>
                    </el-col>
                    <el-col :span="14">
                      <el-button style="width:100%" size="mini" type="danger" @click="closeTask(scope.row.id)">强制结束</el-button>
                    </el-col>
                  </el-row>
                </template>
              </el-table-column>
            </el-table>
            <pagination
              :pager-size="mainTable.pager.size"
              :pager-index="mainTable.pager.index"
              :pager-total="mainTable.pager.total"
              @pagination-change="handlePagerChange"
            />
          </el-tab-pane>
          <el-tab-pane label="定时执行任务" name="3">
            <el-table
              v-loading="mainTable.loading"
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
                prop="operMsg"
                label="任务名称"
              />
              <el-table-column
                align="center"
                prop="operType"
                label="任务类型"
              />
              <el-table-column
                align="center"
                prop="speed"
                label="任务总进度"
              />
              <!-- <el-table-column
                align="center"
                prop="num"
                label="执行设备数"
              /> -->
              <el-table-column
                align="center"
                label="创建时间"
                prop="createTime"
              />
              <el-table-column
                align="center"
                label="执行时间"
                prop="operTime"
              />
              <el-table-column
                align="center"
                label="每日任务"
              >
                <template slot-scope="scope">
                  {{ scope.row.isDay ? '是' : '否' }}
                </template>
              </el-table-column>
              <!-- <el-table-column
                align="center"
                label="执行方式"
                prop="remark"
              >
                <template slot-scope="scope">
                  {{ map.type[scope.row.type] }}
                </template>
              </el-table-column> -->
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
                  <el-row :gutter="5" style="margin-bottom:5px">
                    <el-col :span="24">
                      <el-button style="width:100%" size="mini" @click="getTaskDetail(scope.row.id)">查看执行详情</el-button>
                    </el-col>
                  </el-row>
                  <el-row :gutter="5" style="margin-bottom:5px">
                    <el-col :span="10">
                      <el-button style="width:100%" size="mini" @click="updateTaskAgain(scope.row.id)">重发</el-button>
                    </el-col>
                    <el-col :span="14">
                      <el-button style="width:100%" size="mini" type="danger" @click="closeTask(scope.row.id)">强制结束</el-button>
                    </el-col>
                  </el-row>
                  <el-row v-if="role === 'admin'" :gutter="5">
                    <el-col :span="12">
                      <el-button style="width:100%" size="mini" @click="handleTask('pause', scope.row.id)">暂停定时</el-button>
                    </el-col>
                    <el-col :span="12">
                      <el-button style="width:100%" size="mini" @click="handleTask('resume', scope.row.id)">恢复定时</el-button>
                    </el-col>
                  </el-row>
                </template>
              </el-table-column>
            </el-table>
            <pagination
              :pager-size="mainTable.pager.size"
              :pager-index="mainTable.pager.index"
              :pager-total="mainTable.pager.total"
              @pagination-change="handlePagerChange"
            />
          </el-tab-pane>
        </el-tabs>
      </div>
      <el-dialog :title="`任务详情`" width="800px" :visible.sync="dialogVisible.taskDetail" center>
        <el-table
          :data="taskDetail"
          border
        >
          <el-table-column
            align="center"
            label="设备名"
            prop="deviceId"
          />
          <el-table-column
            align="center"
            label="执行时间"
            prop="operTime"
          />
          <el-table-column
            align="center"
            label="结束时间"
            prop="endTime"
          >
            <template slot-scope="scope">
              {{ $tool.parseTime(scope.row.endTime) }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="执行数量"
            prop="successNum"
          />
          <el-table-column
            align="center"
            label="持续时间"
            prop="continueTime"
          />
          <el-table-column
            align="center"
            label="任务响应"
          >
            <template slot-scope="scope">
              {{ scope.row.code === 200 ? '成功' : scope.row.code === 0 ? '待执行' : '失败' }}
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getTaskList, getTaskDetailInfo, updateTaskAgain, closeTask, pauseTask, resumeTask, deleteTask } from '@/api/task'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      type: '',
      taskNameList: [
        '随机养号',
        '同城养号',
        '精准养号',
        '精准涨粉',
        '同城涨粉',
        '搜索涨粉',
        '导入涨粉',
        '取关互关',
        '批量关注',
        '刷热门视频',
        '群发消息',
        '多闪群发'
      ],
      taskDetail: [],
      dialogVisible: {
        taskDetail: false
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
          3: '待执行',
          4: '执行中',
          5: '强制关闭',
          6: '执行完毕'
        }
      },
      mainTable: {
        loading: false,
        selectedArray: [],
        filter: {
          name: '',
          status: '',
          type: '1'
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
  computed: {
    role() {
      return localStorage.getItem('loginType')
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    deleteTask() {
      if (!this.mainTable.selectedArray.length) {
        this.$message.info('请选择要删除的任务')
        return
      }
      this.$confirm('确定要删除这些任务吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.selectedArray.forEach(app => {
          ids.push(app.id)
        })
        ids = ids.join(',')
        deleteTask({
          ids
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
      })
    },
    handleTask(type, taskId) {
      const _api = {
        pause: pauseTask,
        resume: resumeTask
      }

      _api[type]({ taskId }).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
      })
    },
    closeTask(taskId) {
      this.$confirm('确定要强制关闭该任务吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        closeTask({
          taskId
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
      })
    },
    updateTaskAgain(taskId) {
      updateTaskAgain({ taskId }).then(res => {
        this.$message.success(res.message || '操作成功')
        this.getMainTableData()
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
    getTaskDetail(taskId) {
      getTaskDetailInfo({ taskId }).then(res => {
        const { result } = res
        this.taskDetail = result
        this.dialogVisible.taskDetail = true
      })
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
