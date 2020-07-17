<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">导入涨粉</h3>
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
          </div>
        </div>
        <div class="content">
          <div class="title">
            任务内容
          </div>
          <el-radio-group v-model="form.operType">
            <el-radio v-for="item in labelArray" :key="item" :label="item" />
          </el-radio-group>
          <div v-if="form.operType === '互动'" style="margin-top: 15px">
            <el-checkbox v-model="isSelectAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
            <el-checkbox-group v-model="form.operTypeOther" @change="handleCheckedChange">
              <el-checkbox v-for="item in labelOhterArray" :key="item" :disabled="item === '播放'" :label="item" />
            </el-checkbox-group>
          </div>
        </div>
        <div class="content">
          <div class="title">任务参数</div>
          <div v-if="form.operType === '关注指定用户'">
            <div style="margin: 10px 0">
              <span style="font-size: 14px">视频播放数量</span>
              <el-input v-model="form.playNum[0]" :max="form.playNum[1]" size="mini" type="number" min="1" style="width: 150px">
                <div slot="append">次</div>
              </el-input>
              ~
              <el-input v-model="form.playNum[1]" size="mini" type="number" :min="form.playNum[0] || 1" style="width: 150px">
                <div slot="append">次</div>
              </el-input>
              <span style="font-size: 14px">停留时间</span>
              <el-input v-model="form.timeInterval[0]" :max="form.timeInterval[1]" size="mini" type="number" min="1" style="width: 150px">
                <div slot="append">秒</div>
              </el-input>
              ~
              <el-input v-model="form.timeInterval[1]" size="mini" type="number" :min="form.timeInterval[0] || 1" style="width: 150px">
                <div slot="append">秒</div>
              </el-input>
            </div>
            <div style="margin: 10px 0">
              <span style="font-size: 14px">操作个数</span>
              <el-input v-model="form.num" size="mini" type="number" min="1" style="width: 150px">
                <div slot="append">个</div>
              </el-input>
            </div>
          </div>

          <div v-if="form.operType === '信息补充'">
            <div style="margin: 10px 0">
              <span style="font-size: 14px">操作个数</span>
              <el-input v-model="form.num" size="mini" type="number" min="1" style="width: 150px">
                <div slot="append">个</div>
              </el-input>
            </div>
          </div>

          <el-row v-if="form.operType === '互动'" :gutter="10">
            <div style="margin: 10px 0">
              <span style="font-size: 14px">操作个数</span>
              <el-input v-model="form.num" size="mini" type="number" min="1" style="width: 150px">
                <div slot="append">个</div>
              </el-input>
            </div>
            <el-col v-if="form.operTypeOther.join(',').indexOf('评论') > -1" :span="12">
              <select-source name="评论" @source="val => handleSource(val,'comments')" />
            </el-col>
            <el-col v-if="form.operTypeOther.join(',').indexOf('转发') > -1" :span="12">
              <select-source name="转发" @source="val => handleSource(val,'shares')" />
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
import citys from '@/utils/city'
import { updateMoreTask } from '@/api/task'

export default {
  components: {
    SelectDevice,
    SelectSource
  },
  data() {
    return {
      citys,
      isEdit: true,
      selectArray: '',
      sourceList: [],
      douyinList: [{ value: '默认账号' }],
      labelArray: ['关注指定用户', '信息补充', '互动'],
      labelOhterArray: ['播放', '点赞', '关注', '转发', '收藏音乐', '评论'],
      isIndeterminate: false,
      isSelectAll: false,
      form: {
        devices: '',
        isGroup: false,
        type: '',
        operTime: '',
        isDay: '',
        operType: '关注指定用户',
        operTypeOther: ['播放'],
        content: {
          comments: [],
          shares: []
        },
        playNum: ['', ''],
        timeInterval: ['', ''],
        num: ''
      }
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.form.operTypeOther = val ? this.labelOhterArray : ['播放']
      this.isIndeterminate = false
    },
    handleCheckedChange(value) {
      const checkedCount = value.length
      this.isSelectAll = checkedCount === this.labelOhterArray.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.labelOhterArray.length
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
        isGroup: this.form.isGroup,
        name: '导入涨粉',
        operTime: this.form.operTime,
        type: this.form.type,
        pushType: 1,
        content: {}
      }

      _form.content = Object.assign({}, this.form)
      const { content } = _form
      content.operMsg = '导入涨粉'
      if (content.operType === '互动') content.operType = content.operTypeOther.join(',')

      content.content = {}
      const _keys = Object.keys(this.form.content)
      _keys.forEach(key => {
        content.content[key] = this.form.content[key].join('|')
      })

      delete content.devices
      delete content.isDay
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
</style>
