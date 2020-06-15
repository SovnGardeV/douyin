<template>
  <div class="app-contanier">
    <el-card>
      <div>上升词
        <el-tag v-for="words in topWord" :key="words.hotLevel" size="mini" @click="word = words.sentence">
          {{ words.sentence }}
        </el-tag>
      </div>
      <div>时事热点词
        <el-tag v-for="words in hotWord" :key="words.hotLevel" size="mini" @click="word = words.sentence">
          {{ words.sentence }}
        </el-tag>
      </div>
    </el-card>
    <el-card>
      热点词聚合视频
      <el-tag v-show="word">{{ word }}</el-tag>
      <div v-for="video in hotVideo" :key="video.itemId">
        <img :src="video.cover" alt="" width="120px" height="120px">
      </div>
    </el-card>
  </div>
</template>

<script>
import { getHotWord, getTopWord, getHotVideo } from '@/api/video'
export default {
  data() {
    return {
      hotWord: [],
      topWord: [],
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
    this.getHotWord()
    this.getTopWord()
  },
  methods: {
    getHotWord() {
      getHotWord().then(res => {
        this.hotWord = res.list || []
      })
    },
    getTopWord() {
      getTopWord({
        count: 10,
        cursor: 1
      }).then(res => {
        this.topWord = res.list || []
      })
    },
    getHotVideo() {
      getHotVideo({
        word: this.word
      }).then(res => {
        this.hotVideo = res.list
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
