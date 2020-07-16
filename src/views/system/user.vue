<template>
  <div class="app-contanier">
    <el-row :gutter="10" style="margin-bottom: 10px">
      <el-col v-for="(value,key) in map.port" :key="key" :span="6">
        <el-card>
          <div slot="header"><h3>{{ value }}</h3></div>
          <div>
            <span style="line-height: 29px">{{ data[key] }}</span>
            <el-popover
              v-if="key==='name'"
              style="float: right"
              placement="right"
              width="170"
              trigger="click"
            >
              <div style="width:150px;height:150px">
                <img width="100%" height="100%" :src="qrCode" alt="">
              </div>
              <el-button slot="reference" size="mini" icon="el-icon-mobile-phone" type="primary" @click.native="getQrCode">绑定设备</el-button>
            </el-popover>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-table
      ref="mainTable"
      :loading="mainTable.loading"
      :data="mainTable.array"
      border
    >
      <el-table-column
        align="center"
        label="端口ID"
        prop="id"
      />
      <el-table-column
        align="center"
        label="开通时间"
        prop="createTime"
      />
      <el-table-column
        align="center"
        label="到期时间"
        prop="expiredTime"
      />
      <el-table-column
        align="center"
        label="绑定设备编号"
        prop="deviceId"
      />
      <el-table-column
        align="center"
        label="端口使用状态"
      >
        <template slot-scope="scope">
          {{ map.status[scope.row.status] }}
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
</template>

<script>
import { getPortList } from '@/api/system'
import { getIndexData } from '@/api/device'
import { getQrCode } from '@/api/merchant'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      qrCode: '',
      map: {
        status: {
          1: '使用中',
          0: '空闲'
        },
        port: {
          name: '商户名称',
          all_count: '端口总数',
          no_use_count: '空闲端口数',
          use_count: '已使用端口数'
        }
      },
      data: {},
      mainTable: {
        loading: false,
        multipleSelection: [],
        array: [],
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
    getQrCode() {
      getQrCode().then(res => {
        if (res.code !== 200) return
        this.qrCode = res.result
      })
    },
    handleSelectionChange(val) {
      this.mainTable.multipleSelection = val
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
      getIndexData().then(res => {
        const { result } = res
        this.data = result
      })
      getPortList(_form).then(res => {
        const { result } = res
        this.mainTable.pager.total = result.total || 0
        this.mainTable.array = result.records || []
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
