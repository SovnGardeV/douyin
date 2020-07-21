<template>
  <div style="background: #eee;height:100%">
    <div class="app-container">
      <div class="content-container">
        <el-form size="mini" :inline="true">
          <el-form-item>
            <el-input v-model="mainTable.filter.name" placeholder="请输入分组名称" />
          </el-form-item>
          <el-button size="mini" type="primary" icon="el-icon-search" @click="getMainTableData">搜索</el-button>
        </el-form>
      </div>
      <div class="content-container" style="padding-top: 0">
        <h3>设备组管理
          <div style="float:right">
            <el-button size="mini" icon="el-icon-plus" type="primary" @click="showDialog('add')">新增</el-button>
            <el-button size="mini" icon="el-icon-delete" type="danger" @click="deleteGroupDevice">删除</el-button>
          </div>
        </h3>
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
            prop="name"
            label="分组名称"
          >
            <template slot-scope="scope">
              {{ scope.row.name }}
              <i class="el-icon-edit-outline" style="cursor:pointer" @click="showDialog('edit', scope.row)" />
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="设备数量"
            prop="num"
          />
        </el-table>
        <pagination
          :pager-size="mainTable.pager.size"
          :pager-index="mainTable.pager.index"
          :pager-total="mainTable.pager.total"
          @pagination-change="handlePagerChange"
        />
      </div>
      <el-dialog :title="`${type === 'add' ? '新建' : '编辑'}分组`" width="350px" :visible.sync="dialogVisible.deviceGroup" center>
        <el-form size="mini" label-width="80px">
          <el-form-item label="分组昵称">
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
import { getGroupDeviceList, updateGroupDevice, deleteGroupDevice } from '@/api/device'
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
    deleteGroupDevice() {
      if (!this.mainTable.selectedArray.length) {
        this.$message.info('请选择要删除的设备组')
        return
      }
      this.$confirm('确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = []
        this.mainTable.selectedArray.forEach(item => {
          ids.push(item.id)
        })
        ids = ids.join(',')
        deleteGroupDevice({ ids }).then(res => {
          this.$message.success(res.message)
          this.getMainTableData()
        })
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
      updateGroupDevice(_form, this.type).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
        this.dialogVisible.deviceGroup = false
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
      getGroupDeviceList(_form).then(response => {
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
