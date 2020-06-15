<template>
  <div class="app-contanier">
    <dir>视频列表</dir>
    <el-button size="mini" type="primary" @click="dialogVisible.uploadVideo = true">发布视频</el-button>
    <el-row :gutter="10">
      <el-col v-for="video in mainTable.array" :key="video.itemId" style="width:20%;postion:relative">
        <div>
          <i class="el-icon-close" @click="deleteVideo(video.itemId)" />
          <div class="video-card">
            <div>
              <a :href="video.shareUrl" target="__blank">
                <img style="border-radius:4px" :src="video.cover" width="100%" alt="">
              </a>
            </div>
            <div class="video-info" @click="handleRoute(video.itemId)">
              {{ video.title }}
              {{ video.statistics.commentCount }}
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="视频综合数据" width="1150px" :visible.sync="dialogVisible.videoDetailData">
      <el-row
        v-loading="videoDetailData.loading"
        element-loading-text="加载中，请稍候"
        element-loading-spinner="el-icon-loading"
        :gutter="6"
      >
        <el-col v-for="(value, key) in videoDetailData.total" :key="key" style="width: 20%">
          <el-card>
            {{ map.total[key] }}: {{ value }}
          </el-card>
        </el-col>
      </el-row>
      <div id="video-detail-data" />
    </el-dialog>

    <el-dialog title="发布视频" :visible.sync="dialogVisible.uploadVideo">
      <el-form size="mini">
        <el-form-item label="视频标题">
          <el-input v-model="mainTable.form.title" />
        </el-form-item>
        <el-form-item label="视频">
          <el-upload
            ref="videoUpload"
            element-loading-text="正在上传中，请稍候"
            class="avatar-uploader"
            action=""
            :file-list="fileList"
            :limit="1"
            :on-exceed="handleExceed"
            :before-upload="handleBeforeUpload"
            :show-file-list="true"
          >
            <i class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-button @click="handleSubmit">提交</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getVideoList, getVideoData, uploadVideo, deleteVideo } from '@/api/video'
import echarts from 'echarts'
import { stackedLineOption } from './echartOption'

export default {
  data() {
    return {
      uploadLoading: false,
      fileList: [],
      map: {
        total: {
          avg_play_duration: '平均播放时间',
          total_comment: '总评论数',
          total_like: '总喜欢数',
          total_play: '总播放数',
          total_share: '总分享数'
        }
      },
      dialogVisible: {
        videoDetailData: false,
        uploadVideo: false
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
  created() {
    this.getMainTableData()
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

        const _data = this.handleVideoData(arr)
        const xData = _data.date
        delete _data.date
        const yData = _data
        const map = {
          comment: '评论数',
          like: '喜欢数',
          play: '播放数',
          share: '分享数'
        }

        const _chart = echarts.init(document.querySelector('#video-detail-data'))
        _chart.setOption(stackedLineOption(xData, yData, map))
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
    handleBeforeUpload(files) {
      this.fileList = [files]
      return false
    },
    handleExceed(files) {
      this.fileList = [files[0]]
    },
    handleSubmit() {
      const formData = new FormData()
      formData.append('file', this.fileList[0])
      formData.append('title', this.mainTable.form.title)
      formData.append('atIds', this.$route.params.userId)
      formData.append('ids', this.$route.params.userId)

      uploadVideo(formData).then(response => {
        console.log()
        debugger
      }).finally(_ => {
        this.uploadLoading = false
      })
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        cursor: 0,
        count: 10,
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
#video-detail-data{
  width: 100%;
  height: 400px;
}
</style>
