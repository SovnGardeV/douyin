<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">发布视频</h3>
        </div>
        <div class="content" style="margin-top: 0">
          <div>
            <div class="title">设备选择</div>
            <span v-if="selectArray.length">
              <el-tag size="mini">{{ selectArray[0] }}</el-tag>
              <el-tag size="mini">+{{ selectArray.length }}</el-tag>
            </span>
          </div>
          <select-device @selected="handleSelectData" />
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
              v-model="form.operTime"
              size="mini"
              :value-format="'yyyy-MM-dd HH:mm:ss'"
              type="datetime"
              placeholder="选择执行时间"
            />
            <el-checkbox v-model="form.isEveryDay">每天</el-checkbox>
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
                <div v-if="!form.remark" class="upload-source-tip" @click="fakeUploadClick">
                  <i class="el-icon-upload" />
                  <div>点击此处上传视频</div>
                </div>
                <video v-else style="width:100%;height:100%" :src="form.remark" @click="fakeUploadClick" />
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
import { uploadSource } from '@/api/source'
import { updateMoreTask } from '@/api/task'

export default {
  components: {
    SelectDevice
  },
  data() {
    return {
      loading: {
        video: false
      },
      selectArray: [],
      labelArray: ['发布视频', '创作者中心'],
      form: {
        devices: '',
        type: '',
        operTime: '',
        isEveryDay: '',
        operType: '发布视频',
        content: '',
        remark: ''
      }
    }
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
        formData.append('file', files[0])
        uploadSource(formData).then(res => {
          this.form['remark'] = res.result
        }).finally(() => {
          this.loading['video'] = false
        })
      }
    },
    handleSaveDouyinList() {
      const arr = []
      for (let i = 0; i < this.douyinList.length; i++) {
        if (this.douyinList[i].value) {
          arr.push(this.douyinList[i].value)
        } else {
          this.douyinList.splice(i, 1)
          i--
        }
      }
      this.form.tiktok = arr.join(',')
      this.isEdit = !this.isEdit
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
      const ids = []
      if (Array.isArray(val)) {
        val.forEach(item => {
          ids.push(item.id)
        })
      }
      this.selectArray = ids
    },
    handleSource(val, index) {
      this.form.content[index] = val
    },
    handleSubmit() {
      const _form = {
        devices: this.selectArray.join(','),
        name: '发布视频',
        operTime: this.form.operTime,
        type: this.form.type,
        pushType: 1,
        content: {}
      }

      _form.content = Object.assign({}, this.form)
      const { content } = _form
      content.operMsg = '发布视频'

      delete content.devices
      delete content.isEveryDay
      _form.content = JSON.stringify(content)
      updateMoreTask(_form).then(res => {
        this.$message.success(res.message)
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
  cursor: pointer;
}
.upload-source-tip{
  text-align: center;
  transform: translateY(-50%);
  position: relative;
  top: 50%;
}
</style>
