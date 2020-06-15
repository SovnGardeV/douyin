<template>
  <div class="app-contanier">
    <dir>抖音号列表</dir>
    <el-table
      ref="mainTalbe"
      :loading="mainTable.loading"
      :data="mainTable.array"
      border
      :row-key="getRowKeys"
      :expand-row-keys="expands"
      @expand-change="handleExpand"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="催收用户ID">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="催收状态">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="ID"
        prop="id"
      />
      <el-table-column
        align="center"
        label="姓名"
        prop="name"
      />
      <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <router-link
            :to="{
              path:`/example/integrates/${scope.row.id}`
            }"
          >
            <el-button size="mini">综合数据</el-button>
          </router-link>

          <router-link
            :to="{
              path:`/example/fans/${scope.row.id}`
            }"
          >
            <el-button size="mini">粉丝相关</el-button>
          </router-link>

          <router-link
            :to="{
              path:`/example/focus/${scope.row.id}`
            }"
          >
            <el-button size="mini">关注相关</el-button>
          </router-link>
          <router-link
            :to="{
              path:`/example/video/${scope.row.id}`
            }"
          >
            <el-button size="mini">视频数据</el-button>
          </router-link>
          <el-button size="mini" type="danger" @click="deleteItem(scope.row.userId)">删除</el-button>
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
import { getUserList, getUserData, getFansData, getFocusData } from '@/api/account-of-merchant'
import { deleteAccountInMerchant } from '@/api/merchant'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      mainTable: {
        loading: false,
        array: [],
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      },
      getRowKeys(row) { // 行数据的Key
        return row.id
      },
      expands: []
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    deleteItem(userId) {
      this.$confirm('确定要删除该抖音号吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        deleteAccountInMerchant({
          merchantId: this.$route.query.merchantId,
          userId
        }).then(response => {
          this.$message.success(response.message)
        })
      })
    },
    handleExpand(row, expandedRows) {
      this.expands = []
      if (expandedRows.length > 0) {
        row ? this.expands.push(row.id) : ''
      }
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getUserData(userId) {
      const _form = {
        date_type: 7,
        type: 3,
        userId
      }
      getUserData(_form).then(res => {
        console.log(res)
      })
    },
    getFansData(userId) {
      const _form = {
        count: 10,
        cursor: 1,
        userId
      }
      getFansData(_form).then(res => {
        console.log(res)
      })
    },
    getFocusData(userId) {
      const _form = {
        count: 10,
        cursor: 1,
        userId
      }
      getFocusData(_form).then(res => {
        console.log(res)
      })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        merchantId: this.$route.query.merchantId,
        pageNo: 1,
        pageSize: 10
      }
      getUserList(_form).then(response => {
        this.mainTable.pager.total = response.data || 0
        this.mainTable.array = response.rows || []
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
}
</style>
