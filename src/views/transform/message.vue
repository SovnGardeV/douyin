<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">群发消息</h3>
        </div>
        <div class="content" style="margin-top: 0">
          <div style="margin: 5px 0">
            <div class="title" style="display:inline-block">设备选择</div>
            <span v-if="selectArray.length">
              <el-tag size="mini">{{ selectArray[0] }}</el-tag>
              <el-tag v-show="selectArray.length > 1" size="mini">+{{ selectArray.length }}</el-tag>
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
          </div>
        </div>
        <div class="content">
          <div class="title">
            任务参数
          </div>
          <div style="margin: 10px 0">
            <span style="font-size:14px;margin-right: 10px">群发对象</span>
            <el-select v-model="form.obj" size="mini">
              <el-option value="我的关注" label="我的关注" />
              <el-option value="我的粉丝" label="我的粉丝" />
            </el-select>
            <span style="font-size:14px;margin-right: 10px">操作个数</span>

            <el-input v-model="form.num" type="number" :min="1" size="mini" style="width: 150px" />
          </div>
          <el-row :gutter="10">
            <el-col :span="12">
              <select-source name="私信" @source="val => handleSource(val,1)" />
            </el-col>
          </el-row>

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
import { updateMoreTask } from '@/api/task'

export default {
  components: {
    SelectDevice,
    SelectSource
  },
  data() {
    return {
      selectArray: [],
      sourceList: [],
      labelArray: ['播放', '点赞', '关注', '收藏音乐', '评论', '转发', '评论随机点赞'],
      isIndeterminate: false,
      isSelectAll: false,
      form: {
        devices: '',
        type: '',
        operTime: '',
        isEveryDay: '',
        operType: ['播放'],
        content: ['', ''],
        obj: '',
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
        name: '群发消息',
        operTime: this.form.operTime,
        type: this.form.type,
        pushType: 1,
        content: {}
      }

      _form.content = Object.assign({ packageNames: 'my.maya.android' }, this.form)
      const { content } = _form
      content.operType = content.operType.join(',')
      content.operMsg = '群发消息'

      let _sourceList = [[], []]
      if (Array.isArray(this.form.content[0])) {
        this.form.content[0].forEach(item => {
          if (typeof item === 'object') {
            _sourceList[0].push(JSON.stringify(item))
          } else {
            _sourceList[0].push(item)
          }
        })
      }

      if (Array.isArray(this.form.content[1])) {
        this.form.content[1].forEach(item => {
          if (typeof item === 'object') {
            _sourceList[1].push(JSON.stringify(item))
          } else {
            _sourceList[1].push(item)
          }
        })
      }

      _sourceList[0] = _sourceList[0].join('\n')
      _sourceList[1] = _sourceList[1].join('\n')
      _sourceList = _sourceList.join('|')

      content.content = _sourceList
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
</style>
