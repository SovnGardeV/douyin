<template>
  <div style="background: #eee;height:100%">
    <div class="app-container">
      <div class="content-container">
        <el-form size="mini" :inline="true">
          <el-form-item>
            <el-select v-model="mainTable.filter.merchantId" placeholder="请选择商户" clearable>
              <el-option
                v-for="(value, key) in map.merchant"
                :key="key"
                :label="value"
                :value="key"
              />
            </el-select>
          </el-form-item>
          <el-button size="mini" type="primary" icon="el-icon-search" @click="getMainTableData">搜索</el-button>
        </el-form>
      </div>
      <div class="content-container" style="padding-top: 0">
        <h3>设备黑名单
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
            label="归属商户"
          >
            <template slot-scope="scope">
              {{ map.merchant[scope.row.merchantId] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="设备imei"
            prop="id"
          />
          <el-table-column
            align="center"
            label="设备号"
            prop="deviceId"
          />
          <el-table-column
            align="center"
            label="拉黑时间"
            prop="createTime"
          />
          <el-table-column
            align="center"
            label="操作人"
            prop="createBy"
          />
          <el-table-column
            align="center"
            label="操作"
            fixed="right"
          >
            <template slot-scope="scope">
              <el-button size="mini" @click="blackDelete(scope.row.id)">解除</el-button>
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
import { queryBlackList, blackDelete } from '@/api/device'
import { getMerchantMap } from '@/api/merchant'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      qrCode: '',
      type: '',
      isEditDeviceInfo: true,
      map: {
        merchant: {}
      },
      mainTable: {
        loading: false,
        selectedArray: [],
        filter: {
          merchantId: ''
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
    this.getMerchantMap()
    this.getMainTableData()
  },
  methods: {
    blackDelete(id) {
      this.$confirm('确定要解除黑名单吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        blackDelete({ id }).then(res => {
          this.$message.success(res.message)
          this.getMainTableData()
        })
      })
    },
    getMerchantMap() {
      getMerchantMap().then(res => {
        const { result = [] } = res
        result.forEach(item => {
          this.map.merchant[item.id] = item.name
        })
      })
    },
    handleSelectionChange: function(val) {
      this.mainTable.selectedArray = val
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _filter = Object.assign({}, this.mainTable.filter)
      let _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      _form = Object.assign(_form, _filter)
      queryBlackList(_form).then(response => {
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
.el-table__expanded-cell{
  padding: 0 !important;
}
</style>
