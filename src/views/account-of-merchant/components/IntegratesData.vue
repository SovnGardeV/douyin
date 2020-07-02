<template>
  <el-row :gutter="10">
    <el-col v-for="(value,key) in map.data" :key="key" :span="key === '7' ? 24 : 12" style="margin-bottom:10px">
      <el-card class="intergrate-data-card">
        <div slot="header" style="position:relative">
          <img :src="map.data[key].icon" class="title-icon" alt="">
          <span style="margin-left: 40px">{{ map.data[key].name }}</span>
          <div class="date-type-container">
            <el-select
              v-model="map.data[key].dateType"
              class="date-type-select"
              size="mini"
              @change="(val) => handleSelectChange(key, val)"
            >
              <el-option v-for="(dateValue,dateKey) in map.dateType" :key="dateKey" :value="dateKey" :label="dateValue" />
            </el-select>
          </div>
        </div>
        <div :id="`intergrate-data_${key}`" :style="`height:${key === '7' ? '450px' : '350px'}`" style="width:100%;" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { getUserData } from '@/api/account-of-merchant'
import echarts from 'echarts'
import { stackedLineOption } from '../echartOption'
import { handleEchartsData } from '@/utils/index'

export default {
  name: 'IntegratesData',
  data() {
    return {
      map: {
        dateType: {
          7: '最近7天',
          15: '最近15天',
          30: '最近30天'
        },
        data: {
          1: {
            name: '视频情况',
            icon: require('../../../static/Charts_2.png'),
            dateType: '7',
            map: {
              xData: { date: '日期' },
              yData: {
                new_issue: '发布内容数',
                total_issue: '内容总数',
                new_play: '新增视频播放'
              }
            }
          },
          2: {
            name: '粉丝数',
            icon: require('../../../static/Group_2.png'),
            dateType: '7',
            map: {
              xData: { date: '日期' },
              yData: {
                total_fans: '总粉丝数',
                new_fans: '新粉丝数'
              }
            }
          },
          3: { name: '点赞数',
            icon: require('../../../static/Like_1_.png'),
            dateType: '7',
            map: {
              xData: { date: '日期' },
              yData: {
                new_like: '新增点赞'
              }
            }},
          4: { name: '评论数',
            icon: require('../../../static/Chat.png'),
            dateType: '7',
            map: {
              xData: { date: '日期' },
              yData: {
                new_comment: '新增评论'
              }
            }},
          5: { name: '分享数',
            icon: require('../../../static/Share.png'),
            dateType: '7',
            map: {
              xData: { date: '日期' },
              yData: {
                new_share: '新增分享'
              }
            }},
          6: { name: '主页访问数',
            icon: require('../../../static/Tap.png'),
            dateType: '7',
            map: {
              xData: { date: '日期' },
              yData: {
                profile_uv: '当日个人主页访问人数'
              }
            }}
        }
      },
      loading: false,
      intergrateData: {}
    }
  },
  methods: {
    async handleSelectChange(key) {
      const _form = {
        date_type: this.map.data[key].dateType,
        type: key,
        userId: this.$route.params.userId
      }

      const { result_list = [] } = await getUserData(_form)
      this.intergrateData[key] = {
        initData: handleEchartsData(result_list, this.map.data[key].map),
        initMethod: stackedLineOption
      }

      const { xData, yData } = this.intergrateData[key].initData
      this.initChart(`intergrate-data_${key}`, this.intergrateData[key].initMethod(xData, yData))
    },
    initChart(elm, option) {
      const _chart = echarts.init(document.getElementById(elm))
      _chart.setOption(option)
    },
    async getMainData() {
      this.loading = true
      for (let i = 1; i < 7; i++) {
        const _form = {
          date_type: this.map.data[i].dateType,
          type: i,
          userId: this.$route.params.userId
        }

        const { result_list = [] } = await getUserData(_form)

        this.intergrateData[i] = {
          initData: handleEchartsData(result_list, this.map.data[i].map),
          initMethod: stackedLineOption
        }
      }
      await this.$forceUpdate() // 强制渲染

      for (let i = 1; i < 7; i++) {
        const { xData, yData } = this.intergrateData[i].initData
        // 初始化echarts
        if (document.querySelector(`#intergrate-data_${i}`)) this.initChart(`intergrate-data_${i}`, this.intergrateData[i].initMethod(xData, yData))
      }

      this.loading = false
    }
  }

}
</script>

<style lang="scss">
.intergrate-data-card{
    padding: 0;
}
.title-icon{
  width: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.date-type-container{
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  .date-type-select{
    width: 100px;
  }
}

</style>
