<template>
  <div>
    <div style="display:inline-block">
      <el-button icon="el-icon-upload" size="mini" style="padding: 4px" type="primary" @click="fakeUploadClick">导入</el-button>
      <el-button size="mini" icon="el-icon-plus" type="primary" style="padding: 4px" @click="douyinList.push({value:''})" />
      <span class="tips">
        <a href="http://qny.fulifmk.cn//抖音号-序列号批量导入模板.docx">导入模板</a>
      </span>
    </div>
    <el-row class="douyin-list">
      <el-col v-for="(item, index) in douyinList" :key="index" style="margin: 4px 0">
        <div style="position: relative">
          <el-row :gutter="5">
            <el-col :span="12">
              <el-input v-model="item.key" class="douyin-input" size="small" placeholder="抖音号" />
            </el-col>
            <el-col :span="12">
              <el-input v-model="item.value" class="douyin-input" size="small" placeholder="视频序号" />
            </el-col>
          </el-row>
          <i class="el-icon-delete douyin-input-delete" @click="douyinList.splice(index, 1)" />
        </div>
      </el-col>
    </el-row>
    <input type="file" style="visibility: hidden;" @change="uploadSource">
  </div>
</template>

<script>
import { readFile } from '@/api/source'
export default {
  data() {
    return {
      douyinList: [{ key: '', value: '' }],
      tiktok: ''
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
        this.loading = true
        const formData = new FormData()
        formData.append('file', files[0])
        readFile(formData).then(res => {
          const { result } = res
          const arr = []
          if (Array.isArray(result)) {
            result.forEach(item => {
              const [key, value] = item.split(',')
              arr.push({ key, value })
            })
          }
          this.handleEmptyItem()
          this.douyinList = this.douyinList.concat(arr)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    handleEmptyItem() {
      for (let i = 0; i < this.douyinList.length; i++) {
        if (!this.douyinList[i].value && !this.douyinList[i].key) {
          this.douyinList.splice(i, 1)
          i--
        }
      }
    },
    handleSaveDouyinList() {
      const obj = {}
      for (let i = 0; i < this.douyinList.length; i++) {
        if (this.douyinList[i].key && this.douyinList[i].value) {
          obj[this.douyinList[i].key] = this.douyinList[i].value
        } else {
          this.douyinList.splice(i, 1)
          i--
        }
      }
      this.tiktok = obj
      return this.tiktok
    }
  }
}
</script>

<style lang="scss" scoped>
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
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #F56C6C;
}
.tips{
  font-size: 12px;
  color: rgb(64, 158, 255);
  margin-left: 20px;
}
</style>
