<template>
  <div v-loading="loading" class="app-contanier">
    <el-row :gutter="10">
      <el-col v-for="(value,key) in intergrateData" :key="key" :span="key === '7' ? 24 : 12" style="margin-bottom:10px">
        <el-card class="intergrate-data-card">
          <div slot="header">{{ map.dataName[key] }}</div>
          <div :id="`intergrate-data_${key}`" :style="`height:${key === '7' ? '450px' : '350px'}`" style="width:100%;" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getUserData } from '@/api/account-of-merchant'
import echarts from 'echarts'
import { stackedLineOption, basicLineOption } from './echartOption'

export default {
  data() {
    return {
      map: {
        dataName: {
          1: '视频情况',
          2: '粉丝数',
          3: '点赞数',
          4: '评论数',
          5: '分享数',
          6: '主页访问数',
          7: '综合分析'
        },
        dataInitMethod: {

        }
      },
      loading: false,
      intergrateData: {}
    }
  },
  mounted() {
    this.getMainTableData()
  },
  methods: {
    initChart(elm, option) {
      const _chart = echarts.init(document.getElementById(elm))
      _chart.setOption(option)
    },
    dealWithData(data) {
      if (Array.isArray(data)) {
        console.log()
      }
    },
    async getMainTableData() {
      this.loading = true
      const _intergrateData = {
        initData: {},
        initMethod: stackedLineOption
      }
      // 获取所有综合数据
      for (let i = 1; i < 7; i++) {
        const _form = {
          date_type: 7,
          type: i,
          userId: this.$route.params.userId
        }

        const { result_list = [] } = await getUserData(_form)

        if ([6, 3, 4, 5].indexOf(i) > -1) {
          _intergrateData.initData[[this.map.dataName[i]]] = result_list
        } else {
          this.intergrateData[i] = {
            initData: result_list,
            initMethod: basicLineOption
          }
        }
      }
      this.intergrateData[7] = _intergrateData

      await this.$forceUpdate() // 强制渲染

      for (let i = 1; i < 8; i++) {
        // 初始化echarts
        if (document.querySelector(`#intergrate-data_${i}`)) this.initChart(`intergrate-data_${i}`, this.intergrateData[i].initMethod())
      }

      this.loading = false
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

.intergrate-data-card{
    padding: 0;
}
</style>
