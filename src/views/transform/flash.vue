<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">多闪群发</h3>
          <el-link type="danger" style="float:right" href="http://qny.zsgnlyjt.cn//多闪群发的使用说明.docx" target="_blank">说明文档</el-link>
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
            ref="selectDevice"
            @selected="handleSelectData"
            @isgroup="val => {
              form.group = val
            }"
          />
        </div>

        <div class="content">
          <div class="title">
            任务参数
          </div>
          <div style="margin: 10px 0">
            <span style="font-size:14px;margin-right: 10px">群发对象</span>
            <el-select v-model="form.operType" size="mini">
              <el-option value="未发送" label="未发送" />
              <el-option value="全部" label="全部" />
              <el-option value="备注区间" label="备注区间" />
            </el-select>
            <div v-if="form.operType === '备注区间'" style="display: inline">
              <span style="font-size:14px;margin-right: 10px">操作区间</span>
              <el-input v-model="form.operatorNum[0]" style="width: 100px" size="mini" type="number" min="0" :max="form.operatorNum[1]" />
              ~
              <el-input v-model="form.operatorNum[1]" :min="form.operatorNum[0]" style="width: 100px" size="mini" type="number" />
            </div>
            <div v-else style="display: inline">
              <span style="font-size:14px;margin-right: 10px">操作个数</span>

              <el-input v-model="form.num" type="number" :min="1" size="mini" style="width: 150px" />
            </div>
          </div>
          <el-row :gutter="10">
            <el-col :span="12">
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

export default {
  components: {
    SelectDevice,
    SelectSource
  },
  data() {
    return {
      selectArray: [],
      sourceList: [],
      labelArray: ['播放', '点赞', '关注', '收藏音乐', '评论', '转发', '随机评论点赞'],
      isIndeterminate: false,
      isSelectAll: false,
      form: {
        devices: '',
        group: false,
        type: '',
        operTime: '',
        operType: '全部',
        operatorNum: ['', ''],
        content: {
          messages: []
        },
        // obj: '全部',
        num: ''
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
    handleSource(val, index) {
      this.form.content[index] = val
    },
    handleSubmit() {
      const _form = {
        devices: this.selectArray,
        group: this.form.group,
        name: '多闪群发',
        operTime: this.form.operTime,
        type: this.form.type
      }

      const _content = {
        packageNames: 'my.maya.android',
        operType: this.form.operType,
        operMsg: '多闪群发',
        content: this.form.content,
        type: this.form.type,
        operTime: this.form.operTime
      }

      if (this.form.operType === '备注区间') {
        _content.operatorNum = this.form.operatorNum
      } else {
        _content.num = this.form.num
      }

      handleTask(_form, _content, res => {
        this.$message.success(res.message)
        Object.assign(this.$data, this.$options.data())
        this.$refs['selectDevice'].init()
      }, 'messages')
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
