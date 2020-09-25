<template>
  <div style="background: rgb(238, 238, 238);height: 100%">
    <div class="app-container">
      <div class="content-container">
        <div style="display: flex">
          <h3 style="flex: 1;margin: 10px 0">通知公告</h3>
          <div style="margin: 10px 0">
            <el-button size="mini" type="primary" @click="showDialog('add')">新增</el-button>
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
            label="标题"
            prop="title"
          />
          <el-table-column
            align="center"
            label="消息类型"
            prop="account"
          >
            <template slot-scope="scope">
              {{ map.msgCategory[scope.row.msgCategory] }}
            </template>
          </el-table-column>
          <el-table-column
            :show-overflow-tooltip="true"
            align="center"
            label="消息内容"
            prop="msgContent"
          />
          <el-table-column
            align="center"
            label="信息摘要"
            prop="msgAbstract"
          />
          <el-table-column
            align="center"
            label="通告对象类型"
          >
            <template slot-scope="scope">
              {{ map.msgType[scope.row.msgType] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="发布时间"
            prop="sendTime"
          />
          <el-table-column
            align="center"
            label="发布人"
            prop="sender"
          />
          <el-table-column
            align="center"
            label="发布状态"
          >
            <template slot-scope="scope">
              {{ map.sendStatus[scope.row.sendStatus] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="创建时间"
            prop="createTime"
          />
          <el-table-column
            align="center"
            label="创建人"
            prop="createBy"
          />
          <el-table-column
            align="center"
            label="操作"
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

      <el-dialog :title="`${mode === 'add' ? '新增' : '编辑'}通知公告`" :visible.sync="dialogVisible.plug" width="400px" center>
        <el-form size="mini" label-width="100px" center>
          <el-form-item label="标题">
            <el-input v-model="mainTable.form.title" />
          </el-form-item>
          <el-form-item label="消息类型">
            <el-select v-model="mainTable.form.msgCategory">
              <el-option v-for="(value, key) in map.msgCategory" :key="key" :value="key" :label="value" />
            </el-select>
          </el-form-item>
          <el-form-item label="消息内容">
            <el-input v-model="mainTable.form.msgContent" type="textarea" />
          </el-form-item>
          <el-form-item label="信息摘要">
            <el-input v-model="mainTable.form.msgAbstract" />
          </el-form-item>
          <el-form-item label="通告对象类型">
            <el-select v-model="mainTable.form.msgType">
              <el-option v-for="(value, key) in map.msgType" :key="key" :value="key" :label="value" />
            </el-select>
          </el-form-item>
          <el-form-item v-show="mainTable.form.msgType === 'user'" label="通告用户">
            <el-select v-model="mainTable.form.userIds" multiple collapse-tags>
              <el-option v-for="(value, key) in map.userIds" :key="key" :value="key" :label="value" />
            </el-select>
          </el-form-item>
          <el-form-item label="发布状态">
            <el-select v-model="mainTable.form.sendStatus">
              <el-option v-for="(value, key) in map.sendStatus" :key="key" :value="key" :label="value" />
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
import { queryNoticeList, updateNotice, deleteNotice, queryPuserMap } from '@/api/normalUser'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      map: {
        msgCategory: {
          1: '通知公告',
          2: '系统消息',
          3: '轮播图消息'
        },
        msgType: {
          user: '指定用户',
          all: '全体用户',
          merchant: '所有商户',
          proxyuser: '所有代理商'
        },
        sendStatus: {
          0: '未发布',
          1: '已发布'
        },
        userIds: {}
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
        form: {
          msgAbstract: '',
          msgCategory: '',
          msgContent: '',
          msgType: '',
          sendStatus: '',
          userIds: [],
          title: ''
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
    this.queryPuserMap()
    this.getMainTableData()
  },
  methods: {
    handleSelectionChange(val) {
      this.mainTable.multipleSelection = val
    },
    deleteAdmin() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的公告或通知')
        return
      }
      this.$confirm('确定要删除这些公告或通知吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.multipleSelection.forEach(log => {
          ids.push(log.id)
        })
        ids = ids.join(',')
        deleteNotice({
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
        if (item.userIds) this.mainTable.form.userIds = item.userIds.split(',')
      }
      this.dialogVisible.plug = true
      this.mode = mode
    },
    async handleSubmit() {
      const _form = Object.assign({ id: this.mainTable.row.id }, this.mainTable.form)

      if (_form.msgType === 'user') {
        _form.userIds = _form.userIds.join && _form.userIds.join(',')
      } else {
        delete _form.userIds
      }
      updateNotice(_form, this.mode).then(res => {
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
    queryPuserMap() {
      queryPuserMap().then(res => {
        const { result = [] } = res
        const _map = {}
        if (Array.isArray(result)) {
          result.forEach(item => {
            const _keys = Object.keys(item)
            _keys.forEach(key => {
              _map[key] = item[key]
            })
          })
        }
        this.map.userIds = _map || {}
      })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      queryNoticeList(_form).then(res => {
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
.upload-source{
  border-radius: 4px;
  border: 1px dashed #ccc;
  height: 100px;
  width: 100px;
  cursor: pointer;
}
.upload-source-tip{
  text-align: center;
  transform: translateY(-50%);
  position: relative;
  top: 50%;
}
</style>
