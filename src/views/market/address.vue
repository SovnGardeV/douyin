<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">通讯录涨粉</h3>
          <!-- <el-link type="danger" style="float:right" href="http://qny.fulifmk.cn//同城营销的使用说明.docx" target="_blank">说明文档</el-link> -->
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
            ref="selectDevice"
            @selected="handleSelectData"
            @isgroup="val => {
              form.group = val
            }"
          />
        </div>
        <div class="content">
          <div class="title">
            任务内容
            <el-checkbox v-model="isSelectAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
          </div>
          <el-checkbox-group v-model="form.operType" @change="handleCheckedChange">
            <el-checkbox v-for="item in labelArray" :key="item" :disabled="item === '关注'" :label="item" />
          </el-checkbox-group>
        </div>
        <div class="content">
          <div class="title">任务参数</div>
          <div>
            <div>
              <div>
                <el-button icon="el-icon-upload" size="mini" type="primary" :loading="loading" @click="fakeUploadClick">导入</el-button>
                <el-link type="danger" href="http://qny.fulifmk.cn//通讯录导入示例模板.docx">模板文档</el-link>
                <div style="font-size: 14px;float:right;">
                  <span>未使用数：
                    <b style="font-size: 24px">{{ users[0] }}</b>
                  </span>
                  <span style="margin-left: 20px">已使用数：
                    <b style="font-size: 24px">{{ users[1] }}</b>
                  </span>
                </div>
                <input type="file" style="visibility: hidden;" @change="uploadSource">

                <div style="margin: 10px 0;font-size:14px">
                  <span>通讯录信息数量：</span>
                  <el-input v-model="form.addressNum" size="mini" type="number" min="1" style="width:unset" />
                  <el-checkbox v-model="form.avg" style="margin-left: 15px">平均分配</el-checkbox>
                </div>
              </div>
            </div>
          </div>

          <el-row :gutter="10">
            <el-col v-if="form.operType.join(',').indexOf('私信') > -1" :span="12">
              <select-source :is-messages="true" name="私信" @source="val => handleSource(val,'messages')" />
            </el-col>
          </el-row>

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
import SelectSource from '@/views/source/components/SelectSource'
import { handleTask } from '@/utils/handleTask'
import { phoneUserReadFile, phoneUserQueryNumber, phoneUserGetObj } from '@/api/source'

export default {
  components: {
    SelectDevice,
    SelectSource
  },
  data() {
    return {
      loading: false,
      selectArray: [],
      labelArray: ['关注', '私信'],
      isIndeterminate: false,
      isSelectAll: false,
      users: {
        0: 0,
        1: 0
      },
      form: {
        devices: '',
        group: false,
        type: '',
        avg: false,
        operTime: '',
        operType: ['关注'],
        content: {
          messages: []
        },
        addressNum: ''
      }
    }
  },
  created() {
    this.queryNumber()
  },
  methods: {
    queryNumber() {
      phoneUserQueryNumber().then(res => {
        const { result = [] } = res
        if (Array.isArray(result) && result.length) {
          result.forEach(item => {
            this.users[item.code] = item.num
          })
        }
      })
    },
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
        phoneUserReadFile(formData).then(res => {
          const { result } = res
          if (Array.isArray(result) && result.length) {
            result.forEach(item => {
              this.users[item.code] = item.num
            })
          }
        }).finally(() => {
          this.loading = false
        })
      }
    },
    handleCheckAllChange(val) {
      this.form.operType = val ? this.labelArray : ['关注']
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
    async handleSubmit() {
      const _res = await phoneUserGetObj({
        num: this.form.addressNum,
        useNum: this.users[0]
      }) || {}
      const _form = {
        devices: this.selectArray,
        group: this.form.group,
        name: '通讯录涨粉',
        operTime: this.form.operTime,
        type: this.form.type,
        plugId: _res.data,
        avg: this.form.avg ? 1 : 0,
        phone: true
      }

      const _content = {
        operType: this.form.operType,
        operMsg: '通讯录涨粉',
        content: this.form.content,
        type: this.form.type,
        operTime: this.form.operTime,
        obj: _res.rows
      }

      handleTask(_form, _content, res => {
        this.$message.success(res.message)
        Object.assign(this.$data, this.$options.data())
        this.$refs['selectDevice'].init()
        this.queryNumber()
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
</style>
