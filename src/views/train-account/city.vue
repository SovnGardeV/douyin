<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">同城养号</h3>
          <span style="font-size:12px;color:#999;margin-left: 15px">将在设定时间内，模拟人工使用软件，随机在同城页面进行查看主页、点赞、评论、转发</span>
          <el-link type="danger" style="float:right" href="http://qny.zsgnlyjt.cn//同城养号的使用说明.docx" target="_blank">说明文档</el-link>
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
            <el-checkbox v-for="item in labelArray" :key="item" :disabled="item === '播放'" :label="item" />
          </el-checkbox-group>
        </div>
        <div class="content">
          <div class="title">任务参数</div>
          <div>
            <el-row>
              <span style="font-size:14px;margin-right: 10px">持续时间</span>
              <el-input v-model="form.continueTime[0]" size="mini" style="width: 150px">
                <span slot="append">分钟</span>
              </el-input>
              ~
              <el-input v-model="form.continueTime[1]" size="mini" style="width: 150px">
                <span slot="append">分钟</span>
              </el-input>
            </el-row>
          </div>

          <el-row :gutter="10">
            <el-col v-if="form.operType.indexOf('评论') > -1" :span="12">
              <select-source name="评论" @source="val => handleSource(val,'comments')" />
            </el-col>

            <el-col v-if="form.operType.indexOf('转发') > -1" :span="12">
              <select-source name="转发" @source="val => handleSource(val,'shares')" />
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

export default {
  components: {
    SelectDevice,
    SelectSource
  },
  data() {
    return {
      selectArray: [],
      sourceList: [],
      labelArray: ['播放', '点赞', '关注', '查看主页', '收藏音乐', '评论', '转发'],
      isIndeterminate: false,
      isSelectAll: false,
      form: {
        devices: '',
        group: false,
        type: '',
        operTime: '',
        day: false,
        operType: ['播放'],
        continueTime: ['', ''],
        content: {
          comments: [],
          shares: []
        }
      }
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.form.operType = val ? this.labelArray : ['播放']
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
    handleSource(val, type) {
      this.form.content[type] = val
    },
    handleSubmit() {
      const _form = {
        devices: this.selectArray,
        group: this.form.group,
        name: '同城养号',
        operTime: this.form.operTime,
        type: this.form.type
      }

      const _content = {
        operType: this.form.operType,
        operMsg: '同城养号',
        content: this.form.content,
        type: this.form.type,
        operTime: this.form.operTime,
        continueTime: this.form.continueTime
      }

      handleTask(_form, _content, res => {
        this.$message.success(res.message)
        Object.assign(this.$data, this.$options.data())
        this.$refs['selectDevice'].init()
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
