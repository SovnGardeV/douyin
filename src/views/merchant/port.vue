<template>
  <div style="background: #eee;height:100%">
    <div class="app-contanier">
      <div class="content-container">
        <el-form size="mini" :inline="true">
          <el-form-item>
            <el-select v-model="mainTable.filter.status" clearable placeholder="请选择分配状态">
              <el-option v-for="(value, key) in map.status" :key="key" :value="key" :label="value" />
            </el-select>
          </el-form-item>
          <el-button size="mini" type="primary" icon="el-icon-search" @click="getMainTableData">搜索</el-button>
        </el-form>
        <div style="position: absolute; top: 15px; right: 15px">
          可用端口数：<span style="font-family: fantasy;font-size:28px">{{ mainTable.count }}</span>
        </div>
      </div>
      <div class="content-container">
        <div style="text-align:right; margin-bottom: 10px">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-box"
            @click="showDialog('dist')"
          >分配</el-button>
          <el-button size="mini" type="primary" icon="el-icon-plus" @click="showDialog('add')">新增</el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="deleteMerchantPort">删除</el-button>
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
            label="端口号"
            prop="id"
          />
          <el-table-column
            align="center"
            label="商户名"
            prop="name"
          />
          <el-table-column
            align="center"
            label="设备号"
            prop="deviceId"
          />
          <el-table-column
            align="center"
            label="分配状态"
          >
            <template slot-scope="scope">
              <span :style="scope.row.status === 1 ? 'color: #F56C6C' : 'color: #67C23A'" style="line-height: 20px">
                <i style="font-size: 20px">●</i> {{ map.status[scope.row.status] }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="端口码地址"
          >
            <template slot-scope="scope">
              <el-popover
                trigger="click"
                placement="left"
                width="150px"
              >
                <div>
                  <img width="150px" height="150px" :src="scope.row.qrUrl" alt="">
                </div>
                <el-button slot="reference" type="text">查看</el-button>
              </el-popover>
            </template>
          </el-table-column>

        </el-table>
        <pagination
          :pager-size="mainTable.pager.size"
          :pager-index="mainTable.pager.index"
          :pager-total="mainTable.pager.total"
          @pagination-change="handlePagerChange"
        />

        <el-dialog :title="`${type === 'add' ? '新增' : '分配'}端口`" width="400px" :visible.sync="dialogVisible.port" center>
          <el-form size="mini" label-width="80px" center>
            <el-form-item v-if="type === 'dist'" label="商户">
              <el-select
                v-model="mainTable.form.merchantId"
                clearable
              >
                <el-option v-for="merchant in merchantList" :key="merchant.id" :label="merchant.name" :value="merchant.id" />
              </el-select>
            </el-form-item>
            <el-form-item label="数量">
              <el-input v-model="mainTable.form.num" />
            </el-form-item>
          </el-form>
          <div slot="footer">
            <el-button type="primary" size="mini" @click="handleSubmit">提交</el-button>
          </div>
        </el-dialog>
      </div>

    </div>
  </div>

</template>

<script>
import { getPortList, addPort, deleteMerchantPort, addMerchantPort } from '@/api/device'
import { getAllMerchantList } from '@/api/merchant'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      type: '',
      map: {
        deviceArray: [],
        status: {
          1: '已分配',
          0: '未分配'
        }
      },
      merchantList: [],
      dialogVisible: {
        port: false
      },
      mainTable: {
        loading: false,
        count: '',
        multipleSelection: [],
        array: [],
        filter: {
          status
        },
        row: {},
        form: {
          merchantId: '',
          num: ''
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
    this.getAllMerchantList()
    this.getMainTableData()
  },
  methods: {
    deleteMerchantPort() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的端口')
        return
      }
      this.$confirm('确定要删除这些端口吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        const ids = []
        this.mainTable.multipleSelection.forEach(item => {
          ids.push(item.id)
        })
        deleteMerchantPort({
          ids: ids.join(',')
        }).then(res => {
          this.$message.success(res.message)
          this.dialogVisible.port = false
          this.getMainTableData()
        })
      })
    },
    handleSelectionChange(val) {
      this.mainTable.multipleSelection = val
    },
    handleSubmit() {
      if (this.type === 'dist') {
        const _form = Object.assign({}, this.mainTable.form)
        addMerchantPort(_form).then(res => {
          this.$message.success(res.message)
          this.getMainTableData()
          this.dialogVisible.port = false
        })
      }
      if (this.type === 'add') {
        addPort({ num: this.mainTable.form.num }).then(res => {
          this.$message.success(res.message)
          this.getMainTableData()
          this.dialogVisible.port = false
        })
      }
    },
    showDialog(type, item) {
      this.type = type
      this.mainTable.row = item || {}
      this.$tool.initForm(this.mainTable.form)
      this.dialogVisible.port = true
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getAllMerchantList() {
      getAllMerchantList().then(res => {
        this.merchantList = res.result
      })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = Object.assign({
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }, this.mainTable.filter)
      getPortList(_form).then(response => {
        const { rows = [], data = 0, count } = response
        this.mainTable.pager.total = data || 0
        this.mainTable.array = rows || []
        this.mainTable.count = count
      }).finally(_ => {
        this.mainTable.loading = false
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
