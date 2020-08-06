<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">发布视频</h3>
          <el-link type="danger" style="float:right" href="http://qny.fulifmk.cn//视频橱窗管理的使用说明.doc" target="_blank">说明文档</el-link>
        </div>
        <div class="content" style="margin-top: 0">
          <div>
            <div class="title">设备选择</div>
            <span v-if="selectArray.length">
              <el-tag size="mini">{{ selectArray[0] }}</el-tag>
              <el-tag size="mini">+{{ selectArray.length }}</el-tag>
            </span>
          </div>
          <select-device
            @selected="handleSelectData"
            @isgroup="val => {
              form.group = val
            }"
          />
        </div>
        <div class="content">
          <div class="title">
            执行时间
          </div>
          <el-radio-group v-model="form.type" size="mini">
            <el-radio-button :label="1">立即执行</el-radio-button>
            <el-radio-button :label="3">定时执行</el-radio-button>
          </el-radio-group>
          <div v-show="form.type === 3" style="margin-top: 15px">
            <el-date-picker
              v-if="!form.day"
              v-model="form.operTime"
              size="mini"
              :value-format="'yyyy-MM-dd HH:mm:ss'"
              type="datetime"
              placeholder="选择执行时间"
            />
            <el-time-picker
              v-else
              v-model="form.operTime"
              size="mini"
              :value-format="'HH:mm:ss'"
              placeholder="选择执行时间"
            />
            <el-checkbox v-model="form.day" @change="form.operTime = ''">每天</el-checkbox>
          </div>
        </div>
        <div class="content">
          <div class="title">
            任务内容
          </div>
          <el-radio-group v-model="form.operType">
            <el-radio v-for="item in labelArray" :key="item" :label="item" />
          </el-radio-group>
        </div>
        <div class="content">
          <div class="title">任务参数</div>
          <div>
            <div
              v-loading="loading.video"
              class="upload-source"
              element-loading-text="正在上传，请稍候"
              element-loading-spinner="el-icon-loading"
            >
              <div class="upload-source" style="width: 100%; border:none">
                <div v-if="!form.remark" class="upload-source-tip">
                  <div style="cursor: pointer;" @click="fakeUploadClick">
                    <i class="el-icon-upload" />
                    <div>点击此处上传视频</div>
                  </div>
                  <div style="margin: 10px 0;color:#ccc;font-size: 14px">或</div>
                  <div>从素材库选择视频
                    <!-- <el-button size="mini" type="primary">选择</el-button> -->
                    <el-select v-model="form.remark" size="mini">
                      <el-option v-for="video in videoSource" :key="video.id" :label="video.name" :value="video.sourceContent" />
                    </el-select>
                  </div>
                </div>
                <div v-else style="width:100%;height:100%;position:relative">
                  <video style="width:100%;height:100%" :src="form.remark" />
                  <i class="el-icon-close" style="position:absolute;right:10px; top: 10px" @click="form.remark = ''" />
                  <a :href="form.remark" target="_blank">
                    <i class="el-icon-video-play" style="position:absolute;left:50%; top: 50%;transform: translate(-50%,-50%);font-size:48px" />
                  </a>
                </div>
              </div>
            </div>
            <el-input v-model="form.content" type="textarea" style="width:50%; margin: 10px 0" :rows="4" placeholder="请输入视频描述" />
            <input
              type="file"
              style="visibility: hidden;position: absolute"
              @change="uploadSource"
            >
          </div>

        </div>
        <div style="text-align: center">
          <el-button size="medium" type="primary" @click="handleSubmit">提 交</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import SelectDevice from '@/views/device/components/SelectDevice'
import { uploadSource, getVideoSource } from '@/api/source'
import { updateMoreTask } from '@/api/task'
import pinyin from 'pinyin'

export default {
  components: {
    SelectDevice
  },
  data() {
    return {
      videoSource: [],
      loading: {
        video: false
      },
      selectArray: [],
      labelArray: ['发布视频'],
      form: {
        devices: '',
        group: false,
        type: '',
        operTime: '',
        day: false,
        operType: '发布视频',
        content: '',
        remark: ''
      }
    }
  },
  created() {
    this.getVideoSource()
  },
  methods: {
    fakeUploadClick() {
      const fileInput = document.querySelector('input[type=file]')
      fileInput.click()
    },
    uploadSource(e) {
      const { files } = e.target
      if (files.length) {
        this.loading['video'] = true
        const formData = new FormData()
        const file = files[0]
        const fileNameSplit = file.name.split('.')

        const fileSuffix = fileNameSplit[fileNameSplit.length - 1]
        fileNameSplit.splice(fileNameSplit.length - 1, 1)
        const fileName = pinyin(fileNameSplit.join('.'), {
          style: pinyin.STYLE_NORMAL
        }).join('')
        const fileType = file.type
        const newFile = new File(files, `${fileName}.${fileSuffix}`, { type: fileType })
        formData.append('file', newFile)
        uploadSource(formData).then(res => {
          this.form['remark'] = res.result
        }).finally(() => {
          this.loading['video'] = false
        })
      }
    },
    handleCheckAllChange(val) {
      this.form.operType = val ? this.labelArray : []
      this.isIndeterminate = false
    },
    handleCheckedChange(value) {
      const checkedCount = value.length
      this.isSelectAll = checkedCount === this.labelArray.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.labelArray.length
    },
    handleSelectData(val) {
      this.selectArray = val
    },
    handleSource(val, index) {
      this.form.content[index] = val
    },
    handleSubmit() {
      const _form = {
        devices: this.selectArray.join(','),
        group: this.form.group,
        day: this.form.day,
        name: '发布视频',
        operTime: this.form.operTime,
        type: this.form.type,
        pushType: 1,
        more: false,
        tag: false,
        content: {}
      }

      _form.content = Object.assign({}, this.form)
      const { content } = _form
      content.operMsg = '发布视频'

      delete content.devices
      delete content.day
      _form.content = JSON.stringify(content)
      updateMoreTask(_form).then(res => {
        this.$message.success(res.message)
        Object.assign(this.$data, this.$options.data())
      })
    },
    getVideoSource() {
      getVideoSource().then(res => {
        this.videoSource = res.result
      })
    }
  }
}
</script>

<style scoped lang="scss">
.title{
  margin: 8px 0;
}
.content{
  margin: 30px 0;
}
.douyin-list{
    padding:10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-height: 240px;
    overflow-y: auto;
    margin-top: 10px;
    width: 50%;
}
.el-divider--horizontal{
    margin: 8px 0 !important;
}
.douyin-input{
    position: relative;
    width: 92%;
}
.douyin-input-delete{
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    color: #F56C6C;
}
.upload-source{
  border-radius: 4px;
  border: 1px dashed #ccc;
  height: 180px;
  width: 50%;
}
.upload-source-tip{
  text-align: center;
  transform: translateY(-50%);
  position: relative;
  top: 50%;
}
</style>
