<template>
  <el-row style="height: 100%" :gutter="6">
    <el-col :span="8" style="height:100%">
      <el-card style="height: 100%;overflow:auto" :body-style="{padding: 0}">
        <div v-for="fans in mainTable.array" :key="fans.openId" class="fans-container">
          <img style="float:left" :src="fans.avatar" width="30px" height="30px" alt="">
          <span class="fans-name" :title="fans.nickname">{{ fans.nickname }}</span>
          <span class="fans-position" :title="`${fans.country} ${fans.province} ${fans.city}`">
            {{ fans.country }}
            {{ fans.province }}
            {{ fans.city }}
          </span>
        </div>
        <div v-if="mainTable.pager.hasMore" class="load-more" @click="loadMore">点击加载更多</div>
        <div v-else class="load-more">已无更多</div>
      </el-card>
    </el-col>
    <el-col :span="16" style="height:100%">
      <el-card style="height: 100%;overflow-y:auto" :body-style="{padding: '10px'}">
        <div v-if="fansData">
          <div style="padding: 15px;position:relative">
            <div class="all-fans-name">粉丝总数</div>
            <div class="all-fans-num">{{ fansData.allFansNum }}</div>
          </div>
          <el-row :gutter="10">
            <el-col v-for="chart in pieChart" :key="chart" :span="12" style="margin-bottom: 10px">
              <div :id="chart" style="width: 100%; height:300px;border: 1px solid #eee; border-radius: 4px;" />
            </el-col>
          </el-row>
          <div id="flowContributions" style="width: 100%; height:300px;" />
        </div>
        <empty v-else />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { getFansData, getFansList } from '@/api/account-of-merchant'
import echarts from 'echarts'
import { pieOption, barOption } from '../echartOption'
import Empty from '@/components/Empty'
export default {
  components: {
    Empty
  },
  data() {
    return {
      map: {
        genderDistributions: {
          1: '男性',
          2: '女性'
        },
        flowContributions: {
          'vv': '视频播放数',
          'like_cnt': '喜爱',
          'comment_cnt': '评论',
          'share_video_cnt': '分享视频'
        }
      },
      title: {
        genderDistributions: '粉丝性别分布',
        ageDistributions: '粉丝年龄分布',
        geographicalDistributions: '粉丝地域分布',
        activeDaysDistributions: '粉丝活跃天数分布',
        deviceDistributions: '粉丝设备分布',
        interestDistributions: '粉丝兴趣分布'
      },
      pieChart: [
        'genderDistributions',
        'ageDistributions',
        'geographicalDistributions',
        'activeDaysDistributions',
        'deviceDistributions',
        'interestDistributions'
      ],
      fansData: {},
      mainTable: {
        loading: false,
        array: [],
        pager: {
          cursor: 0,
          hasMore: true,
          nextCursor: 0,
          total: 0,
          count: 10
        }
      }
    }
  },
  // created() {
  //   this.getFansData()
  // },
  methods: {
    loadMore() {
      const _form = {
        cursor: this.mainTable.pager.nextCursor,
        count: this.mainTable.pager.size,
        userId: this.$route.params.userId
      }
      getFansList(_form).then(response => {
        this.mainTable.pager.nextCursor = response.cursor || 0
        this.mainTable.pager.hasMore = response.hasMore
        this.mainTable.array = this.mainTable.array.concat(response.list || [])
      }).finally(_ => {
        this.mainTable.loading = false
      })
    },
    handlePieData(data, map) {
      if (Array.isArray(data)) {
        data.forEach(item => {
          item.name = (map && map[item.item]) || item.item
          delete item.item
        })
      }
      return data
    },
    handleBarData(data) {
      const source = [
        ['贡献', '粉丝流量贡献', '总流量贡献']
      ]
      if (Array.isArray(data)) {
        data.forEach(item => {
          const _item = [this.map.flowContributions[item.flow], item.fansSum, item.allSum]
          source.push(_item)
        })
      }

      return source
    },
    async getFansData() {
      const { fansData = {}} = await getFansData({ userId: this.$route.params.userId })
      this.fansData = fansData

      this.resetEcharts()
    },
    resetEcharts() {
      const _keys = Object.keys(this.fansData)
      _keys.forEach(key => {
        if (this.pieChart.indexOf(key) > -1) {
          const _chart = echarts.init(document.querySelector(`#${key}`))
          const _data = this.handlePieData(this.fansData[key], this.map[key])
          _chart.setOption(pieOption(_data, this.title[key]))
          window.addEventListener('resize', () => {
            _chart.resize()
          })
        }
      })

      const _c = echarts.init(document.querySelector(`#flowContributions`))
      const _d = this.handleBarData(this.fansData.flowContributions)
      debugger
      _c.setOption(barOption(_d))
      window.addEventListener('resize', () => {
        _c.resize()
      })
    },
    getMainData() {
      this.mainTable.loading = true
      const _form = {
        cursor: this.mainTable.pager.cursor,
        count: this.mainTable.pager.count,
        userId: this.$route.params.userId
      }
      this.getFansData()
      getFansList(_form).then(response => {
        this.mainTable.pager.nextCursor = response.cursor || 0
        this.mainTable.pager.hasMore = response.hasMore
        this.mainTable.array = response.list || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.fans-container{
  height: 30px;
  margin: 8px 0;
  padding: 0 12px;
  border-bottom: 1px dashed #eee;
  .fans-name{
    display: inline-block;
    max-width: 50%;
    height: 30px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    line-height: 30px;
    font-size: 14px;
    padding: 0 12px;
  }
  .fans-position{
    float: right;
    max-width: 35%;
    height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    line-height: 30px;
    font-size: 12px;
    color: #ccc;
  }
}

.load-more{
  text-align: center;
  color: #ccc;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 0;
}

.all-fans-num{
  text-align: center;
  font-size: 60px;
  font-family: fantasy;
}
.all-fans-name{
  position: relative;
  z-index: 2;
}
</style>
