<template>
  <div style="background: #eee; height: 100%">
    <div class="app-container">
      <div class="content-container">
        <el-form size="mini" :inline="false">
          <el-form-item label="达人热榜类型">
            <el-radio-group v-model="mainTable.filter.type" @change="getMainTableData">
              <el-radio :label="1">星图指数榜</el-radio>
              <el-radio :label="2">涨粉指数榜</el-radio>
              <el-radio :label="3">性价比指数榜</el-radio>
              <el-radio :label="4">种草指数榜</el-radio>
              <el-radio :label="5">精选指数榜</el-radio>
              <el-radio :label="6">传播指数榜</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="榜单类型">
            <el-radio-group v-model="mainTable.filter.ty">
              <el-radio :label="1">电影</el-radio>
              <el-radio :label="2">电视剧</el-radio>
              <el-radio :label="3">综艺</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
      <div class="content-container">
        <div v-for="user in mainTable.array" :key="user.unique_id" @click="getDetailInfo(user.unique_id)">
          {{ user.nick_name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHost, getScore2 } from '@/api/star-map'
export default {
  data() {
    return {
      mainTable: {
        filter: {
          type: 1,
          ty: 1
        },
        array: []
      }
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    async getDetailInfo(userId) {
      const b = await getScore2({ uniqueId: userId })
      console.log(b)
    },
    getMainTableData() {
      getHost({ type: this.mainTable.filter.type }).then(res => {
        this.mainTable.array = res.list
      })
    }
  }
}
</script>

<style>

</style>
