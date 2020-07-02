<template>
  <el-row style="height: 100%" :gutter="6">
    <el-col :span="8" style="height:100%">
      <el-card style="height: 100%" :body-style="{padding: 0}">
        <div v-for="fans in mainTable.array" :key="fans.openId" class="fans-container">
          <img style="float:left" :src="fans.avatar" width="30px" height="30px" alt="">
          <span class="fans-name">{{ fans.nickname }}</span>
          <span class="fans-position">
            {{ fans.country }}
            {{ fans.province }}
            {{ fans.city }}
          </span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16" style="height:100%">
      <el-card style="height: 100%" :body-style="{padding: 0}">
        <div id="test" style="width: 100%; height:300px" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { getFansData, getFansList } from '@/api/account-of-merchant'
import echarts from 'echarts'
import { pieOption } from '../echartOption'
export default {
  data() {
    return {
      fansData: {},
      mainTable: {
        loading: false,
        array: [],
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      }
    }
  },
  methods: {
    async getFansData() {
      const { fansData = {}} = await getFansData({ userId: this.$route.params.userId })
      this.fansData = fansData
      const _chart = echarts.init(document.querySelector('#test'))
      _chart.setOption(pieOption())
    },
    getMainData() {
      this.mainTable.loading = true
      const _form = {
        cursor: this.mainTable.pager.index - 1,
        count: this.mainTable.pager.size,
        userId: this.$route.params.userId
      }
      this.getFansData()
      getFansList(_form).then(response => {
        this.mainTable.pager.total = response.data || 0
        this.mainTable.array = response.list || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }

}
</script>

<style lang="scss">
.fans-container{
  height: 30px;
  margin: 8px 0;
  padding: 0 12px;
  border-bottom: 1px dashed #eee;
  .fans-name{
    line-height: 30px;
    font-size: 14px;
    float: left;
    padding: 0 12px;
  }
  .fans-position{
    float: right;
    line-height: 30px;
    font-size: 12px;
    color: #ccc;
  }
}

</style>
