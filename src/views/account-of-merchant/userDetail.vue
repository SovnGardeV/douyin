<template>
  <div style="height: 100%" class="video-data-container">
    <el-tabs v-model="activeName" type="card" style="height: 100%" @tab-click="handleClick">
      <el-tab-pane label="综合数据" name="integratesData" class="user-pane">
        <integrates-data ref="integratesData" />
      </el-tab-pane>
      <el-tab-pane label="视频数据" name="videoData" class="user-pane">
        <video-data ref="videoData" />
      </el-tab-pane>
      <el-tab-pane label="粉丝数据" name="fans" class="user-pane">
        <fans ref="fans" />
      </el-tab-pane>
      <el-tab-pane label="关注数据" name="focus" class="user-pane">
        <focus ref="focus" />
      </el-tab-pane>
    </el-tabs>
    <el-tabs />
  </div>
</template>

<script>
import IntegratesData from './components/IntegratesData'
import Fans from './components/Fans'
import Focus from './components/Focus'
import VideoData from './components/VideoData'
export default {
  name: 'UserDetail',
  components: {
    IntegratesData,
    Fans,
    Focus,
    VideoData
  },
  data() {
    return {
      activeName: 'integratesData',
      firstClick: {
        integratesData: true,
        videoData: true,
        fans: true,
        focus: true,
        card: true
      }
    }
  },
  mounted() {
    this.handleClick({ name: 'integratesData' })
  },
  methods: {
    handleClick(tab) {
      if (this.firstClick[tab.name]) {
        this.firstClick[tab.name] = false
        this.$nextTick(_ => {
          this.$refs[tab.name].getMainData()
        })
      } else {
        if (tab.name === 'integratesData') {
          this.$refs[tab.name].resetEcharts()
        }
      }
    }
  }

}
</script>

<style lang="scss">
.video-data-container{
    .el-tabs__content{
        height: 100% !important;
    }
    .user-pane{
        padding: 0 12px 10px;
        overflow:auto;
        height:calc(100% - 60px)
    }
}

</style>
