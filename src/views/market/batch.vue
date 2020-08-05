<template>
  <div style="background: #eee;height:100%;overflow-y:auto">
    <div class="app-container">
      <el-card style="height:100%;overflow-y: auto">
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">批量涨粉</h3>
          <el-link type="danger" style="float:right" href="http://qny.fulifmk.cn//批量营销的使用说明.doc" target="_blank">说明文档</el-link>
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
          <div v-if="form.operType === '互动'" style="margin-top: 15px">
            <el-checkbox v-model="isSelectAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
            <el-checkbox-group v-model="form.operTypeOther" @change="handleCheckedChange">
              <el-checkbox v-for="item in labelOhterArray" :key="item" :disabled="item === '播放'" :label="item" />
            </el-checkbox-group>
          </div>
          <div style="margin: 10px 0">
            <el-radio-group v-model="isForce">
              <el-radio label="关注后强制私信" />
              <el-radio label="强制私信" />
            </el-radio-group>
          </div>
        </div>
        <div class="content">
          <div class="title">
            条件筛选
          </div>
          <div>
            <el-form :inline="true" size="mini">
              <el-form-item>
                <el-select v-model="searchForm.asc" size="mini" placeholder="数据顺序" clearable>
                  <el-option value="1" label="先入库">先入库</el-option>
                  <el-option value="0" label="后入库">后入库</el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="searchForm.gender" size="mini" placeholder="性别" clearable>
                  <el-option value="1" label="男">男</el-option>
                  <el-option value="2" label="女">女</el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="searchForm.type" size="mini" placeholder="粉丝数" clearable>
                  <el-option value="1" label="粉丝数小于200">粉丝数小于200</el-option>
                  <el-option value="3" label="粉丝数在200-500">粉丝数在200-500</el-option>
                  <el-option value="2" label="粉丝数大于500">粉丝数大于500</el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-input v-model="searchForm.begin_age" min="1" :max="searchForm.end_age" placeholder="年龄" class="fix-input-left" />
                <span class="middle">至</span>
                <el-input v-model="searchForm.end_age" :min="searchForm.begin_age" class="fix-input-right" />
              </el-form-item>
              <el-form-item>
                <el-input v-model="searchForm.country" placeholder="国家" />
              </el-form-item>
              <el-form-item>
                <el-input v-model="searchForm.province" placeholder="省份" />
              </el-form-item>
              <el-form-item>
                <el-input v-model="searchForm.city" placeholder="城市" />
              </el-form-item>
              <el-form-item>
                <el-input v-model="searchForm.district" placeholder="区" />
              </el-form-item>
              <el-form-item>
                <el-input v-model="searchForm.num" type="number" min="0" placeholder="选取数据量" />
              </el-form-item>
            </el-form>
          </div>
          <el-table
            ref="mainTable"
            v-loading="mainTable.loading"
            :data="mainTable.array"
            border
            @row-click="handleCurrentChange"
            @select-all="handleSelectAll"
          >
            <el-table-column
              type="selection"
              align="center"
            />
            <el-table-column
              align="center"
              label="标签名"
              prop="name"
            />
            <el-table-column
              align="center"
              label="营销用户总数"
              prop="num"
            />
            <el-table-column
              align="center"
              label="未冻结数"
              prop="useNum"
            />
            <el-table-column
              align="center"
              label="操作"
            >
              <template slot-scope="scope">
                <el-popover
                  placement="left"
                  width="440"
                  trigger="click"
                >
                  <div :id="`gender-${scope.row.id}`" style="width: 200px;height:200px;display:inline-block" />
                  <div :id="`type-${scope.row.id}`" style="width: 200px;height:200px;display:inline-block" />
                  <el-button slot="reference" size="mini" @click.stop="showDialog(scope.row)">详情</el-button>
                </el-popover>
                <el-button size="mini" type="warning" @click.stop="unForzen(scope.row)">解冻</el-button>
              </template>
            </el-table-column>
          </el-table>
          <pagination
            :pager-size="mainTable.pager.size"
            :pager-index="mainTable.pager.index"
            :pager-total="mainTable.pager.total"
            @pagination-change="handlePagerChange"
          />
          <div style="text-align:center">
            <el-button size="small" type="primary" @click="getShortIds">筛选</el-button>
            <div style="margin: 20px 0">
              <span>筛选结果：
                <i v-if="searchLoading" class="el-icon-loading" />
                <span v-else>{{ searchResult.length }}</span>
              </span>
              <span>设备数：
                {{ selectArray.length }}
              </span>
              <el-checkbox v-model="form.avg" style="margin-left: 15px">平均分配</el-checkbox>
              <div style="font-size:12px;color:#ccc;margin:8px 0">筛选抖音号数量不得小于所选设备数</div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="title">任务参数</div>
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

          <el-row :gutter="10">
            <el-col v-if="form.operType === '互动'&&form.operTypeOther.indexOf('评论') > -1" :span="12">
              <select-source name="评论" @source="val => handleSource(val,'comments')" />
            </el-col>
            <el-col v-if="form.operType === '互动'&&form.operTypeOther.indexOf('转发') > -1" :span="12">
              <select-source name="转发" @source="val => handleSource(val,'shares')" />
            </el-col>
            <el-col v-if="isForce" :span="12">
              <select-source :is-messages="true" name="私信" @source="val => handleSource(val,'messages')" />
              <!-- <div style="margin: 10px 0">
                <span style="font-size: 14px">停留时间</span>
                <el-input v-model="form.letterTime[0]" size="mini" type="number" min="1" :max="form.letterTime[1]" style="width: 150px">
                  <div slot="append">秒</div>
                </el-input>
                ~
                <el-input v-model="form.letterTime[1]" size="mini" type="number" :min="form.letterTime[0] || 1" style="width: 150px">
                  <div slot="append">秒</div>
                </el-input>
              </div> -->
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
import echarts from 'echarts'
import { pieOption } from '@/views/account-of-merchant/echartOption'
import SelectDevice from '@/views/device/components/SelectDevice'
import SelectSource from '@/views/source/components/SelectSource'
import Pagination from '@/components/Pagination'
import { handleTask } from '@/utils/handleTask'
import { getTagList, getTagDetail, unForzen, getShortIds } from '@/api/yuser'

export default {
  components: {
    SelectDevice,
    SelectSource,
    Pagination
  },
  data() {
    return {
      isTag: true,
      isForce: '',
      isEdit: true,
      selectArray: [],
      sourceList: [],
      douyinList: [{ value: '默认账号' }],
      labelArray: ['关注指定用户', '互动'],
      labelOhterArray: ['播放', '点赞', '关注', '转发', '收藏音乐', '评论'],
      isIndeterminate: false,
      isSelectAll: false,
      mainTable: {
        loading: false,
        formLoading: false,
        multipleSelection: [],
        array: [],
        row: {},
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      },
      searchLoading: false,
      searchResult: [],
      searchForm: {
        tagName: '',
        asc: '',
        begin_age: '',
        city: '',
        country: '',
        district: '',
        end_age: '',
        gender: '',
        num: '',
        province: '',
        type: ''
      },
      form: {
        devices: '',
        group: false,
        type: '',
        avg: false,
        operTime: '',
        operType: '',
        operTypeOther: ['播放'],
        content: {
          comments: [],
          shares: [],
          messages: []
        },
        tiktok: '',
        playNum: ['', ''],
        timeInterval: ['', '']
        // letterTime: ['', ''],
      }
    }
  },
  watch: {
    searchForm: {
      handler(val) {
        this.isTag = true
        const _keys = Object.keys(val)
        _keys.forEach(key => {
          if (key !== 'tagName' && this.searchForm[key]) this.isTag = false
        })
      },
      deep: true
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    showDialog(tag) {
      getTagDetail({ tagName: tag.name }).then(res => {
        const { result } = res
        const gender = {
          '未知': result['0'] || 0,
          '男': result['1'] || 0,
          '女': result['2'] || 0
        }
        const { lt_200, gt_500, content } = result
        const type = {
          '<200': lt_200 || 0,
          '>500': gt_500 || 0,
          '>200且<500': content || 0
        }
        const _genderChart = echarts.init(document.querySelector(`#gender-${tag.id}`))
        _genderChart.setOption(pieOption(this.handlePieData(gender), '性别', '20'))
        const _typeChart = echarts.init(document.querySelector(`#type-${tag.id}`))
        _typeChart.setOption(pieOption(this.handlePieData(type), '粉丝数', '20'))
      })
    },
    handlePieData(obj) {
      const _array = []
      const _keys = Object.keys(obj)
      _keys.forEach(key => {
        _array.push({
          name: key,
          value: obj[key]
        })
      })
      return _array
    },
    unForzen(tag) {
      unForzen({ tagName: tag.name }).then(res => {
        this.$message.success(res.message)
      })
    },
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
    handleSource(val, type) {
      this.form.content[type] = val
    },
    handleSelectAll() {
      this.$refs['mainTable'].clearSelection()
      this.mainTable.row = {}
    },
    handleCurrentChange(val) {
      this.$refs['mainTable'].clearSelection()
      this.$refs['mainTable'].toggleRowSelection(val, true)
      this.mainTable.row = val
      this.searchForm.tagName = val.name
    },
    getShortIds() {
      if (!this.searchForm.tagName) {
        this.$message.info('请选择标签')
        return
      }
      this.searchLoading = true
      const _form = Object.assign({}, this.searchForm)
      getShortIds(_form).then(res => {
        const { result = [] } = res
        this.searchResult = result
      }).finally(_ => {
        this.searchLoading = false
      })
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index - 1,
        pageSize: this.mainTable.pager.size
      }
      getTagList(_form).then(res => {
        const { result } = res
        this.mainTable.pager.total = result.total || 0
        this.mainTable.array = result.records || []
        // this.mainTable.array = [{}]
      }).finally(_ => {
        this.mainTable.loading = false
      })
    },
    handleObjData(arr, id) {
      const _array = []
      if (Array.isArray(arr)) {
        arr.forEach(item => {
          _array.push(arr[id])
        })
      }
      return _array
    },
    handleOperType() {
      let operType = this.form.operType
      if (this.form.operType === '互动') operType = this.form.operTypeOther.join(',')
      if (this.isForce) operType += `,${this.isForce}`
      return operType
    },
    handleSubmit() {
      const _form = {
        devices: this.selectArray,
        group: this.form.group,
        name: '批量涨粉',
        operTime: this.form.operTime,
        type: this.form.type,
        tag: this.isTag,
        avg: this.form.avg ? 1 : 0,
        tagName: this.searchForm.tagName,
        more: true
      }

      const _content = {
        operType: this.handleOperType(),
        operMsg: '批量涨粉',
        content: this.form.content,
        type: this.form.type,
        operTime: this.form.operTime,
        playNum: this.form.playNum,
        timeInterval: this.form.timeInterval,
        // letterTime: this.form.letterTime,
        tiktok: this.searchResult.join('|')
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
.fix-input-left{
    width: 100px;
    margin-right: -6px;
}
.fix-input-right{
    width: 100px;
    margin-left: -6px;

}
.middle{
    border-top: 1px solid #DCDFE6;
    border-bottom: 1px solid #DCDFE6;
    background: #eee;
    line-height: 26px;
    display: inline-block;
    background-color: #F5F7FA;
    color: #909399;
    padding: 0 12px;
}
</style>
