<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">搜索涨粉</h3>
          <el-link type="danger" style="float:right" href="http://qny.zsgnlyjt.cn//搜索营销的使用说明.docx" target="_blank">说明文档</el-link>
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
            <div>
              <div style="margin: 10px 0">
                <span style="font-size: 14px">搜索内容</span>
                <el-input v-model="form.search" size="mini" style="width:unset" />
              </div>
              <div style="margin: 10px 0">
                <span style="font-size: 14px">涨粉类别</span>
                <el-select v-model="form.otherType" filterable size="mini">
                  <el-option
                    label="视频作者"
                    value="视频作者"
                  />
                </el-select>
              </div>
              <div style="margin: 10px 0">
                <span style="font-size: 14px">操作抖音号视频个数</span>
                <el-input v-model="form.num" size="mini" type="number" min="1" style="width: 150px">
                  <div slot="append">个</div>
                </el-input>
              </div>
              <!-- <div style="margin: 10px 0">
                <span style="font-size: 14px">操作内容个数</span>
                <el-input v-model="form.operatorNum" size="mini" type="number" min="1" style="width: 150px">
                  <div slot="append">个</div>
                </el-input>
              </div> -->
            </div>
          </div>

          <el-row :gutter="10">
            <el-col v-if="form.operType.join(',').indexOf('评论') > -1" :span="12">
              <select-source name="评论" @source="val => handleSource(val,'comments')" />
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
      labelArray: ['播放', '点赞', '关注', '查看主页', '收藏音乐', '评论'],
      isIndeterminate: false,
      isSelectAll: false,
      form: {
        devices: '',
        group: false,
        type: '',
        operTime: '',
        search: '',
        operType: ['播放'],
        content: {
          comments: []
        },
        otherType: '',
        operatorNum: '',
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
        name: '搜索涨粉',
        operTime: this.form.operTime,
        type: this.form.type
      }

      const _content = {
        operType: this.form.operType,
        operMsg: '搜索涨粉',
        content: this.form.content,
        type: this.form.type,
        operTime: this.form.operTime,
        num: this.form.num,
        otherType: this.form.otherType,
        search: this.form.search
        // operatorNum: this.form.operatorNum
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
