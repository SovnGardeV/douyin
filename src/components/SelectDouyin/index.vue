<template>
  <div>
    <span style="font-size: 14px">{{ name }}</span>
    <el-button v-loading="loading" size="mini" style="padding: 4px" type="primary" icon="el-icon-upload" @click="fakeUploadClick">导入</el-button>
    <div style="display:inline-block">
      <el-button size="mini" icon="el-icon-plus" type="primary" style="padding: 4px" @click="douyinList.push({value:''})" />
    </div>
    <span class="tips">仅支持txt格式,每一行为一条内容</span>

    <el-row class="douyin-list">
      <el-col v-for="(item, index) in douyinList" :key="index" style="margin: 4px 0">
        <div style="position: relative">
          <el-input v-model="item.value" class="douyin-input" size="small" placeholder="请输入" />
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
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      douyinList: [{ value: '' }],
      loading: false,
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
              arr.push({ value: item })
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
        if (!this.douyinList[i].value) {
          this.douyinList.splice(i, 1)
          i--
        }
      }
    },
    handleSaveDouyinList() {
      const arr = []
      this.handleEmptyItem()
      this.douyinList.forEach(item => {
        arr.push(item.value)
      })
      this.tiktok = arr.join('|')
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
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    color: #F56C6C;
}
.tips{
  font-size: 12px;
  color: #ccc;
  margin-left: 20px;
}
</style>
