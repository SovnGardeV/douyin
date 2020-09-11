<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">刷热门视频</h3>
          <span style="font-size:12px;color:#999;margin-left: 15px">用于批量播放、点赞、评论、转发同一个视频</span>
          <el-link type="danger" style="float:right" href="http://qny.zsgnlyjt.cn//热门视频的使用说明.docx" target="_blank">说明文档</el-link>
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
            任务内容
            <el-checkbox v-model="isSelectAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
          </div>
          <el-checkbox-group v-model="form.operType" @change="handleCheckedChange">
            <el-checkbox v-for="item in labelArray" :key="item" :disabled="item === '播放'" :label="item" />
          </el-checkbox-group>
        </div>
        <div class="content">
          <div class="title">
            任务参数
          </div>
          <el-tabs v-model="tabLabel" type="border-card">
            <el-tab-pane label="指定抖音号">
              <select-douyin-video
                ref="orderDouyin"
              />
              <div style="margin: 10px 0">
                <span style="font-size:14px;margin-right: 10px">观看视频时间</span>
                <el-input v-model="form.timeInterval[0]" :min="1" type="number" :max="form.timeInterval[1]" size="mini" style="width: 150px" />
                ~
                <el-input v-model="form.timeInterval[1]" type="number" :min="form.timeInterval[0] || 1" size="mini" style="width: 150px" />
              </div>
            </el-tab-pane>
            <el-tab-pane label="指定UID">
              <select-douyin
                ref="uid"
                name="用户UID"
              />
              <div style="margin: 10px 0">
                <span style="font-size:14px;margin-right: 10px">视频序号</span>
                <el-input v-model="form.serialNumber" :min="1" size="mini" style="width: 150px" />
              </div>
              <div style="margin: 10px 0">
                <span style="font-size:14px;margin-right: 10px">观看视频时间</span>
                <el-input v-model="form.timeInterval[0]" :min="1" type="number" :max="form.timeInterval[1]" size="mini" style="width: 150px" />
                ~
                <el-input v-model="form.timeInterval[1]" type="number" :min="form.timeInterval[0] || 1" size="mini" style="width: 150px" />
              </div>
            </el-tab-pane>
            <el-tab-pane label="链接">
              <select-douyin
                ref="videoUrl"
                name="视频链接"
              />
              <div style="margin: 10px 0">
                <span style="font-size:14px;margin-right: 10px">观看视频时间</span>
                <el-input v-model="form.timeInterval[0]" :min="1" type="number" :max="form.timeInterval[1]" size="mini" style="width: 150px" />
                ~
                <el-input v-model="form.timeInterval[1]" type="number" :min="form.timeInterval[0] || 1" size="mini" style="width: 150px" />
              </div>
            </el-tab-pane>
          </el-tabs>

          <el-row :gutter="10">
            <el-col v-if="form.operType.join(',').indexOf('评论') > -1" :span="12">
              <select-source name="评论" @source="val => handleSource(val,'comments')" />
            </el-col>
            <el-col v-if="form.operType.join(',').indexOf('转发') > -1" :span="12">
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
import SelectDouyin from '@/components/SelectDouyin'
import SelectDouyinVideo from '@/components/SelectDouyinVideo'

export default {
  components: {
    SelectDevice,
    SelectDouyin,
    SelectDouyinVideo,
    SelectSource
  },
  data() {
    return {
      tabLabel: '',
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
        day: false,
        operType: ['播放'],
        content: {
          comments: [],
          shares: []
        },
        tiktok: '',
        timeInterval: ['', ''],
        serialNumber: ''
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
    handleTaskParams() {
      const _object = {}
      switch (this.tabLabel) {
        case '0': {
          const userList = this.$refs['orderDouyin'].handleSaveDouyinList()
          _object.tiktok = Object.keys(userList).join('|')
          _object.serialNumber = Object.values(userList).join('|')
          break
        }
        case '1': {
          _object.tiktok = this.$refs['uid'].handleSaveDouyinList()
          _object.serialNumber = this.form.serialNumber
          break
        }
        case '2': {
          _object.tiktok = this.$refs['videoUrl'].handleSaveDouyinList()
          break
        }
      }
      return _object
    },
    handleSubmit() {
      const _form = {
        devices: this.selectArray,
        group: this.form.group,
        name: '刷热门视频',
        operTime: this.form.operTime,
        type: this.form.type
      }

      const _content = Object.assign(this.handleTaskParams(), {
        operType: this.form.operType,
        operMsg: '刷热门视频',
        content: this.form.content,
        type: this.form.type,
        operTime: this.form.operTime,
        timeInterval: this.form.timeInterval
      })

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
