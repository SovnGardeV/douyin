<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">精准涨粉</h3>
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
              :disabled="form.isDay === true"
              :value-format="'yyyy-MM-dd HH:mm:ss'"
              type="datetime"
              placeholder="选择执行时间"
            />
            <el-checkbox v-model="form.isDay">每天</el-checkbox>
          </div>
        </div>
        <div class="content">
          <div class="title">
            任务内容
            <el-checkbox v-model="isSelectAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
          </div>
          <el-checkbox-group v-model="form.operType" @change="handleCheckedChange">
            <el-checkbox v-for="item in labelArray" :key="item" :label="item" />
          </el-checkbox-group>
        </div>
        <div class="content">
          <div class="title">任务参数</div>
          <div>
            <div>
              <select-douyin
                ref="douyin"
                name="抖音号"
              />
              <div style="margin: 10px 0">
                <span style="font-size: 14px">观看每个抖音号视频数量</span>
                <el-input v-model="form.num" size="mini" type="number" min="1" style="width: 150px">
                  <div slot="append">个</div>
                </el-input>
              </div>
            </div>
          </div>

          <el-row :gutter="10">
            <el-col v-if="form.operType.join(',').indexOf('私信') > -1" :span="12">
              <select-source name="私信" @source="val => handleSource(val,'messages')" />
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
import SelectDouyin from '@/components/SelectDouyin'
import { updateMoreTask } from '@/api/task'

export default {
  components: {
    SelectDevice,
    SelectSource,
    SelectDouyin
  },
  data() {
    return {
      isEdit: true,
      selectArray: '',
      sourceList: [],
      douyinList: [{ value: '默认账号' }],
      labelArray: ['关注指定抖音号的粉丝', '关注指定抖音号的关注', '关注可能感兴趣的人', '私信指定抖音号的粉丝', '私信指定抖音号的关注', '私信可能感兴趣的人'],
      isIndeterminate: false,
      isSelectAll: false,
      form: {
        devices: '',
        isGroup: false,
        type: '',
        operTime: '',
        isDay: '',
        operType: [],
        content: {
          messages: []
        },
        tiktok: '',
        num: ''
      }
    }
  },
  methods: {
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
      this.selectArray = val
    },
    handleSource(val, type) {
      this.form.content[type] = val
    },
    handleSubmit() {
      const _form = {
        devices: this.selectArray.join(','),
        isGroup: this.form.isGroup,
        isDay: this.form.isDay,
        name: '精准涨粉',
        operTime: this.form.operTime,
        type: this.form.type,
        pushType: 1,
        content: {}
      }

      _form.content = Object.assign({}, this.form)
      const { content } = _form
      content.operType = content.operType.join(',')
      content.operMsg = '精准涨粉'
      content.tiktok = this.$refs['douyin'].handleSaveDouyinList()

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
