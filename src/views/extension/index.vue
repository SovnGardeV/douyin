<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">批量关注</h3>
          <span style="font-size:12px;color:#999;margin-left: 15px">用于批量关注同一个抖音号</span>
          <el-link type="danger" style="float:right" href="http://qny.fulifmk.cn//账号推广、取关的使用说明.docx" target="_blank">说明文档</el-link>
        </div>
        <div class="content" style="margin-top: 0">
          <div style="margin: 5px 0">
            <div class="title" style="display:inline-block">设备选择</div>
            <span v-if="selectArray.length">
              <el-tag size="mini">{{ selectArray[0] }}</el-tag>
              <el-tag v-show="selectArray.length > 1" size="mini">+{{ selectArray.length }}</el-tag>
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
              v-model="form.operTime"
              size="mini"
              :value-format="'yyyy-MM-dd HH:mm:ss'"
              type="datetime"
              placeholder="选择执行时间"
            />
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
          <select-douyin
            ref="douyin"
            name="抖音号"
          />

          <div v-if="form.operType === '重复关注'">
            <div style="margin: 10px 0">
              <span style="font-size: 14px">视频播放数量</span>
              <el-input v-model="form.playNum[0]" size="mini" type="number" :max="form.playNum[1]" min="1" style="width: 150px">
                <div slot="append">次</div>
              </el-input>
              ~
              <el-input v-model="form.playNum[1]" size="mini" type="number" :min="form.playNum[0] || 1" style="width: 150px">
                <div slot="append">次</div>
              </el-input>
            </div>

            <div style="margin: 10px 0">
              <span style="font-size: 14px">停留时间</span>
              <el-input v-model="form.timeInterval[0]" size="mini" type="number" min="1" :max="form.timeInterval[1]" style="width: 150px">
                <div slot="append">秒</div>
              </el-input>
              ~
              <el-input v-model="form.timeInterval[1]" size="mini" type="number" :min="form.timeInterval[0] || 1" style="width: 150px">
                <div slot="append">秒</div>
              </el-input>
            </div>
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
import { updateMoreTask } from '@/api/task'
import SelectDouyin from '@/components/SelectDouyin'

export default {
  components: {
    SelectDevice,
    SelectDouyin
  },
  data() {
    return {
      selectArray: [],
      sourceList: [],
      labelArray: ['关注', '取消关注', '重复关注'],
      isIndeterminate: false,
      isSelectAll: false,
      form: {
        devices: '',
        group: false,
        type: '',
        operTime: '',
        operType: '',
        tiktok: '',
        timeInterval: ['', ''],
        playNum: ['', '']
      }
    }
  },
  methods: {
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
        name: '批量关注',
        operTime: this.form.operTime,
        type: this.form.type,
        pushType: 1,
        more: false,
        tag: false,
        content: {}
      }

      _form.content = Object.assign({}, this.form)
      const { content } = _form
      content.operMsg = '批量关注'
      content.tiktok = this.$refs['douyin'].handleSaveDouyinList()

      if (this.form.operType === '重复关注') {
        content.playNum = content.playNum.join('|')
        content.timeInterval = content.timeInterval.join('|')
      } else {
        delete content.playNum
        delete content.timeInterval
      }

      delete content.devices
      delete content.group
      _form.content = JSON.stringify(content)

      updateMoreTask(_form).then(res => {
        this.$message.success(res.message)
        Object.assign(this.$data, this.$options.data())
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
</style>
