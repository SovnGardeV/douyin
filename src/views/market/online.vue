<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">直播互动</h3>
          <el-link type="danger" style="float:right" href="http://qny.fulifmk.cn//同城营销的使用说明.docx" target="_blank">说明文档</el-link>
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
            :need-leving="true"
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
            <el-checkbox v-model="isSelectAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
          </div>
          <el-checkbox-group v-model="form.operType" @change="handleCheckedChange">
            <el-checkbox v-for="item in labelArray" :key="item" :disabled="item === '播放'" :label="item" />
          </el-checkbox-group>
        </div>
        <div class="content">
          <div class="title">任务参数</div>
          <div>
            <div>
              <div style="margin: 10px 0">
                <span style="font-size: 14px">直播停留时间</span>
                <el-input v-model="form.timeInterval[0]" size="mini" type="number" min="1" :max="form.timeInterval[1]" style="width: 150px">
                  <div slot="append">分</div>
                </el-input>
                ~
                <el-input v-model="form.timeInterval[1]" size="mini" type="number" :min="form.timeInterval[0] || 1" style="width: 150px">
                  <div slot="append">分</div>
                </el-input>
              </div>
              <div style="margin: 10px 0">
                <span style="font-size: 14px">直播间微信口令</span>
                <el-input v-model="form.tiktok" size="mini" style="width: 150px" />
              </div>
              <div v-if="form.operType.join(',').indexOf('关注榜') > -1" style="margin: 10px 0">
                <span style="font-size: 14px">关注榜序数区间</span>
                <el-input v-model="form.serialNumber[0]" size="mini" type="number" min="1" :max="form.serialNumber[1]" style="width: 150px" />
                ~
                <el-input v-model="form.serialNumber[1]" size="mini" type="number" :min="form.serialNumber[0] || 1" style="width: 150px" />
              </div>
            </div>
          </div>

          <el-row :gutter="10">
            <el-col v-if="form.operType.join(',').indexOf('评论') > -1" :span="12">
              <select-source name="评论" @source="val => handleSource(val,'comments')" />
            </el-col>
            <el-col v-if="form.operType.join(',').indexOf('转发') > -1" :span="12">
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
import { handleTask } from '@/utils/handleTask'

export default {
  components: {
    SelectDevice,
    SelectSource
  },
  data() {
    return {
      citys,
      isEdit: true,
      selectArray: [],
      sourceList: [],
      douyinList: [{ value: '默认账号' }],
      labelArray: ['播放', '加热度', '送礼物', '关注', '评论', '关注榜', '加入粉丝团', '查看购物车'],
      isIndeterminate: false,
      isSelectAll: false,
      form: {
        devices: '',
        group: false,
        type: 1,
        operTime: '',
        operType: ['播放'],
        tiktok: '',
        content: {
          comments: [],
          shares: []
        },
        timeInterval: ['', ''],
        serialNumber: ['', '']
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
        name: '直播互动',
        operTime: this.form.operTime,
        type: this.form.type
      }
      const _content = {
        operType: this.form.operType,
        operMsg: '直播互动',
        content: this.form.content,
        type: this.form.type,
        operTime: this.form.operTime,
        timeInterval: this.form.timeInterval,
        serialNumber: this.form.operType.indexOf('关注榜') > -1 ? this.form.serialNumber : undefined,
        tiktok: this.form.tiktok
      }

      handleTask(_form, _content, res => {
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
