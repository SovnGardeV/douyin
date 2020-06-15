<template>
  <div class="app-contanier">
    <dir>视频综合数据</dir>
    <el-row :gutter="10">
      <el-col v-for="video in mainTable.array" :key="video.itemId" style="width:20%;postion:relative">
        <div>
          <i class="el-icon-close" />
          <div class="video-card">
            <div>
              <img style="border-radius:4px" :src="video.cover" width="100%" alt="">
            </div>
            <div class="video-info">
              {{ video.title }}
              {{ video.statistics.commentCount }}
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getVideoData } from '@/api/video'
export default {
  data() {
    return {
      mainTable: {
        loading: false,
        array: [],
        total: {}
      }
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        date_type: 7,
        itemId: decodeURIComponent(this.$route.query.itemId),
        userId: this.$route.params.userId
      }
      getVideoData(_form).then(response => {
        this.mainTable.array = response.arr || []
        this.mainTable.total = response.total || {}
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
  background: #304156;
  border-radius: 4px;
  transform: scale(0.9);
  transition: .2s;
  &:hover{
    transform: scale(1);
  }

  .video-info{
    padding: 8px;
    color: #FFF;
  }
}
</style>
