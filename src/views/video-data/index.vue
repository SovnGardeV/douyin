<template>
  <div class="app-contanier">
    <el-row :gutter="6" style="height:100%">
      <el-col :span="8" style="height:100%">
        <el-card style="height:100%;overflow:auto" :body-style="{padding: 0}">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane name="top" style="padding-left:12px">
              <span slot="label">
                <img src="../../static/top.png" width="14px" alt=""> 上升词
              </span>
              <div v-for="words in topWord.array" :key="words.hotLevel" class="key-word" @click="word = words.sentence">
                <span class="word-sentence" :title="words.sentence">
                  {{ words.sentence }}
                </span>
                <span style="float:right;margin-right:10px;color:#fe2270;font-weight:bold">{{ $tool.handleNumber(words.hotLevel) }}</span>
                <img :class="words.label" :src="map.label[words.label]" width="24px" alt="">
              </div>
              <div v-if="topWord.pager.hasMore" class="load-more" @click="loadMoreTopWorld">
                点击加载更多
              </div>
              <div v-else class="load-more">已无更多</div>
            </el-tab-pane>
            <el-tab-pane name="hot" style="padding-left:12px">
              <span slot="label">
                <img src="../../static/fire.png" width="14px" alt=""> 时事热点词
              </span>
              <div v-for="words in hotWord" :key="words.hotLevel" class="key-word" @click="word = words.sentence">
                <span class="word-sentence" :title="words.sentence">
                  {{ words.sentence }}
                </span>
                <span style="float:right;margin-right:10px;color:#fe2270;font-weight:bold">{{ $tool.handleNumber(words.hotLevel) }}</span>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="16" style="height:100%">
        <el-card style="height:100%;overflow:auto">
          <div>
            <span class="main-title">热点词聚合视频</span>
            <el-tag v-show="word">{{ word }}</el-tag>
          </div>

          <el-row v-if="hotVideo.length" v-loading="loading" :gutter="10">
            <el-col v-for="video in hotVideo" :key="video.itemId" style="postion:relative" :xl="4" :lg="6" :sm="8">
              <el-card shadow="hover" :body-style="{ padding: '0px' }" class="video-card">
                <i class="el-icon-star-off video-delete-button" @click="handleCollection(video.itemId)" />
                <div>
                  <a :href="video.shareUrl" target="__blank">
                    <img :src="video.cover" width="100%" alt="">
                  </a>
                </div>
                <div class="video-info">
                  <div style="margin-bottom: 10px">
                    <span class="info-title" :title="video.title">{{ video.title }}</span>
                    <!-- <i class="el-icon-s-data load-more" @click="handleRoute(video.itemId)" /> -->
                  </div>
                  <div class="info-tips">
                    <el-row :gutter="2">
                      <el-col v-for="(value, key) in video.statistics" :key="key" style="padding: 2px 0" :span="12" :title="map.statistics[key]">
                        <i style="margin-right:6px" :class="map.icon[key]" />{{ $tool.handleNumber(value) }}
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <empty v-else />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getTopWord, getHotVideo } from '@/api/video'
import { collection } from '@/api/merchant'
import Empty from '@/components/Empty'
export default {
  components: {
    Empty
  },
  data() {
    return {
      activeName: 'top',
      loading: false,
      map: {
        label: {
          'NUMBER_0': '',
          'NUMBER_1': require('../../static/xin.png'),
          'NUMBER_2': require('../../static/tui.png'),
          'NUMBER_3': require('../../static/hot.png'),
          'NUMBER_4': require('../../static/bao.png'),
          'NUMBER_5': require('../../static/shoufa.png')
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
      hotWord: [],
      topWord: {
        array: [],
        total: 0,
        pager: {
          count: 10,
          cursor: 0,
          hasMore: true
        }
      },
      hotVideo: [],
      word: ''
    }
  },
  watch: {
    word: {
      handler() {
        this.getHotVideo()
      }
    }
  },
  created() {
    this.getTopWord()
  },
  methods: {
    handleCollection(itemId) {
      collection({
        collection: itemId,
        merchantId: 1,
        type: 1
      }).then(res => {
        this.$message.success(res.message)
        this.getHotVideo()
      })
    },
    loadMoreTopWorld() {
      if (this.topWord.pager.hasMore) {
        getTopWord(this.topWord.pager).then(res => {
          const { hasMore, cursor } = res
          this.topWord.array = this.$tool.duplicateRemove(this.topWord.array.concat(res.topList), 'sentence')
          this.topWord.pager.hasMore = hasMore
          this.topWord.pager.cursor = cursor
        })
      }
    },
    getTopWord() {
      getTopWord(this.topWord.pager).then(res => {
        const { hasMore, hotList = [], topList = [], cursor } = res
        this.topWord.array = topList
        // this.topWord.array[0].label = 'NUMBER_1'
        // this.topWord.array[1].label = 'NUMBER_2'
        // this.topWord.array[2].label = 'NUMBER_3'
        // this.topWord.array[3].label = 'NUMBER_4'
        // this.topWord.array[4].label = 'NUMBER_5'
        this.hotWord = hotList
        this.topWord.pager.hasMore = hasMore
        this.topWord.pager.cursor = cursor
      })
    },
    getHotVideo() {
      this.loading = true
      getHotVideo({
        word: this.word
      }).then(res => {
        this.hotVideo = res.list
      }).finally(_ => {
        this.loading = false
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.NUMBER_5{
  width: 30px;
  position: relative;
  top: 2px;
}
.app-contanier{
    padding: 20px;
    height: 100%;
    overflow: auto;
}
.load-more{
  text-align: center;
  line-height: 40px;
  font-size: 12px;
  color: #ccc;
  cursor: pointer;
}
.key-word{
  cursor: pointer;
  font-size: 12px;
  margin: 10px 3px;
  line-height: 24px;
}
.video-card{
  margin-bottom:10px;
  transform: scale(0.9);
  transition: .2s;
  &:hover{
    transform: scale(1);
  }

  .video-delete-button{
    position: absolute;
    right: 6px;
    top: 6px;
    color: #fff;
    font-size: 20px;
    // font-weight: bold;
  }

  .video-info{
    padding: 16px;
    color: #000;
    .info-title{
      display: inline-block;
      white-space: nowrap;
      width: 100%;
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
  background:url('../../assets/waves.png') no-repeat;
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

.word-sentence{
  display: inline-block;
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
  margin-right: 15px;
  font-size:14px;
}
</style>
