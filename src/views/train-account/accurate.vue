<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">精准养号</h3>
          <span style="font-size:12px;color:#999;margin-left: 15px">观看某一类型的抖音号视频，可以将我们养的抖音号也标记上这种类型的标签；或者为某一些抖音号的视频增加播放量</span>
        </div>
        <div class="content" style="margin-top: 0">
          <div>
            <div class="title">设备选择</div>
            <span v-if="selectArray.length">
              <el-tag size="mini">{{ selectArray[0].name }}</el-tag>
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
            <el-checkbox v-model="form.isEveryDay">每天</el-checkbox>
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
              <span style="font-size: 14px">抖音号</span>
              <div v-if="!isEdit" style="display:inline-block">
                <el-button size="mini" icon="el-icon-edit-outline" type="primary" style="padding: 4px" @click="isEdit = !isEdit" />
              </div>
              <div v-else style="display:inline-block">
                <el-button size="mini" icon="el-icon-plus" type="primary" style="padding: 4px" @click="douyinList.push({value:''})" />
                <el-button size="mini" icon="el-icon-check" type="primary" style="padding: 4px;margin-left: 0" @click="handleSaveDouyinList" />
              </div>
              <el-row class="douyin-list">
                <el-col v-for="(item, index) in douyinList" :key="index" style="margin: 4px 0">
                  <span v-if="!isEdit">
                    {{ item.value }}
                    <el-divider style="margin: 8px" />
                  </span>
                  <div v-else style="position: relative">
                    <el-input v-model="item.value" class="douyin-input" size="small" />
                    <i class="el-icon-delete douyin-input-delete" @click="douyinList.splice(index, 1)" />
                  </div>
                </el-col>
              </el-row>
              <div style="margin: 10px 0">
                <span style="font-size: 14px">观看每个抖音号视频数量</span>
                <el-input v-model="form.num" size="mini" type="number" min="1" style="width: 150px">
                  <div slot="append">个</div>
                </el-input>
              </div>
            </div>
          </div>

          <el-row :gutter="10">
            <el-col v-if="form.operType.indexOf('评论') > -1" :span="12">
              <select-source name="评论" @source="val => handleSource(val,0)" />
            </el-col>

            <el-col v-if="form.operType.indexOf('转发') > -1" :span="12">
              <select-source name="转发" @source="val => handleSource(val,1)" />
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
      isEdit: true,
      selectArray: [],
      sourceList: [],
      douyinList: [{ value: '默认账号' }],
      labelArray: ['播放', '点赞', '收藏音乐', '评论', '转发'],
      isIndeterminate: false,
      isSelectAll: false,
      form: {
        devices: '',
        type: '',
        operTime: '',
        isEveryDay: '',
        operType: [],
        content: ['', ''],
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
        name: '精准养号',
        operTime: this.form.operTime,
        type: this.form.type,
        pushType: 1,
        content: {}
      }

      _form.content = Object.assign({}, this.form)
      const { content } = _form
      content.operType = content.operType.join(',')
      content.operMsg = '精准养号'

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
