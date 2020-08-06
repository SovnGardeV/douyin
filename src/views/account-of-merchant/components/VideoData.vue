<template>
  <div>
    <el-row :gutter="10">
      <el-col v-for="video in mainTable.array" :key="video.itemId" style="postion:relative" :xl="3" :lg="4" :sm="6" :xs="8">
        <el-card shadow="hover" :body-style="{ padding: '0px' }" class="video-card">
          <i class="el-icon-close video-delete-button" @click="deleteVideo(video.itemId)" />
          <div>
            <a :href="video.shareUrl" target="__blank">
              <img :src="video.cover" width="100%" alt="">
            </a>
          </div>
          <div class="video-info">
            <div style="margin-bottom: 10px;postion:relative">
              <span class="info-title">
                {{ video.title }}
              </span>
              <i class="el-icon-s-data load-more" @click="handleRoute(video.itemId)" />
            </div>
            <div class="info-tips">
              <el-row :gutter="2">
                <el-col v-for="(value, key) in video.statistics" :key="key" class="info-item" :span="8" :title="map.statistics[key] + ':' + $tool.handleNumber(value)" @click.native="key === 'commentCount' ? getComment(video.itemId) : ''">
                  <i style="margin-right:6px" :class="map.icon[key]" />{{ $tool.handleNumber(value) }}
                </el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog title="视频综合数据" width="1150px" :visible.sync="dialogVisible.videoDetailData" center>
      <div
        v-loading="videoDetailData.loading"
        element-loading-text="加载中，请稍候"
        element-loading-spinner="el-icon-loading"
      >
        <el-row :gutter="6">
          <el-col v-for="(value, key) in videoDetailData.total" :key="key" style="width: 20%;text-align:center">
            <el-card class="video-detail-card">
              <div class="video-detail-describe">
                {{ map.total[key] }}
              </div>
              <span class="video-detail-math">
                {{ value }}
              </span>
            </el-card>
          </el-col>
        </el-row>
        <div id="video-detail-data" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getVideoList, getVideoData, deleteVideo } from '@/api/video'
import echarts from 'echarts'
import { stackedLineOption } from '../echartOption'
import { handleEchartsData } from '@/utils/index'

export default {
  data() {
    return {
      type: '',
      uploadLoading: false,
      fileList: [],
      map: {
        total: {
          avg_play_duration: '平均播放时间',
          total_comment: '总评论数',
          total_like: '总喜欢数',
          total_play: '总播放数',
          total_share: '总分享数'
        },
        icon: {
          commentCount: 'douyin-icon douyin-iconcomment',
          diggCount: 'douyin-icon douyin-iconcha2',
          downloadCount: 'douyin-icon douyin-iconupload_icon',
          forwardCount: 'douyin-icon douyin-iconforwardx',
          playCount: 'douyin-icon douyin-iconicon-play',
          shareCount: 'douyin-icon douyin-iconArtboardCopy'
        },
        statistics: {
          commentCount: '评论数',
          diggCount: '点赞数',
          downloadCount: '下载数',
          forwardCount: '转发数',
          playCount: '播放数',
          shareCount: '分享数'
        }
      },
      dialogVisible: {
        videoDetailData: false,
        upload: false
      },
      mainTable: {
        loading: false,
        array: [],
        form: {
          title: '',
          atIds: '',
          ids: '',
          file: ''
        },
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      },
      videoDetailData: {
        loading: false,
        array: [],
        total: {}
      }
    }
  },
  methods: {
    deleteVideo(itemId) {
      this.$confirm('确定要删除该视频吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        deleteVideo({
          itemId,
          userId: this.$route.params.userId
        }).then(response => {
          this.$message.success(response.message)
        })
      })
    },
    handleRoute(itemId) {
      this.dialogVisible.videoDetailData = true
      this.videoDetailData.loading = true
      getVideoData({
        date_type: 7,
        itemId,
        userId: this.$route.params.userId
      }).then(response => {
        const { arr = [], total = {}} = response
        this.videoDetailData.array = arr
        this.videoDetailData.total = total

        const _map = {
          xData: {
            date: '日期'
          },
          yData: {
            comment: '评论数',
            like: '喜欢数',
            play: '播放数',
            share: '分享数'
          }
        }

        const newData = handleEchartsData(arr, _map)

        const _chart = echarts.init(document.querySelector('#video-detail-data'))
        _chart.setOption(stackedLineOption(newData.xData, newData.yData))
      }).finally(_ => {
        this.videoDetailData.loading = false
      })
    },
    handleVideoData(arr) {
      const _obj = {}
      arr.forEach(item => {
        const _keys = Object.keys(item)
        _keys.forEach(key => {
          if (!_obj[key]) _obj[key] = []
          _obj[key].push(item[key])
        })
      })

      return _obj
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getComment(itemId) {
      this.$router.push(`/interact/comment/${this.$route.params.userId}/${encodeURIComponent(itemId)}`)
    },
    getMainData() {
      this.mainTable.loading = true
      const _form = {
        cursor: this.mainTable.pager.index,
        count: this.mainTable.pager.size,
        userId: this.$route.params.userId
      }
      getVideoList(_form).then(response => {
        this.mainTable.array = response.list || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }

}
</script>

<style lang="scss">
.app-contanier{
    padding: 20px;
    height: 100%;
    overflow: auto;
}
.video-card{
  margin-bottom:10px;
  transform: scale(0.9);
  transition: .2s;
  &:hover{
    transform: scale(1);
  }
  .load-more{
    position: absolute;
    right: 10px;
    cursor: pointer;
    color: #1989fa;
  }

  .video-delete-button{
    position: absolute;
    right: 6px;
    top: 6px;
    color: #fff;
    font-size: 20px;
  }

  .video-info{
    padding: 16px;
    color: #000;
    .info-title{
      display: inline-block;
      white-space: nowrap;
      width: 90%;
      overflow: hidden;
      text-overflow:ellipsis;
    }
    .info-tips{
      font-size: 14px;
      color: #ccc;
    }
  }
}
.video-detail-card {
  position:relative;
  background:url('../../../assets/waves.png') no-repeat;
  background-size: cover;
}
.video-detail-describe{
  position: absolute;
  top: 10px;
  left: 12px;
  font-size: 12px;
  color: #999;
}
.video-detail-math{
  font-weight: bold;
  font-size: 36px;
  line-height: 60px;
  color: #1989fa;
  // text-shadow: 3px 1px 6px rgb(187, 236, 255);
}
#video-detail-data{
  width: 100%;
  height: 400px;
  margin-top: 30px;
}
.info-item{
  padding: 2px 0;
  display: inline-block;
  height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
  cursor: pointer;
}
</style>
