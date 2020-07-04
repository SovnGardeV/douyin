<template>
  <div class="app-contanier">
    <el-form ref="filter" size="mini" :inline="true" class="filter-container">
      <el-form-item label="类型">
        <el-select v-model="mainTable.filter.actionType">
          <el-option v-for="(value, key) in map.actionType" :key="key" :label="value" :value="key">{{ value }}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <el-select v-model="mainTable.filter.leadsLevel" clearable>
          <el-option v-for="(value, key) in map.leadsLevel" :key="key" :label="value" :value="key">{{ value }}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker
          v-model="mainTable.filter.time"
          align="right"
          size="mini"
          :editable="false"
          clearable
          unlink-panels
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-button icon="el-icon-search" size="mini" type="primary" @click="getMainTableData">查询</el-button>
    </el-form>
    <el-row>
      <el-col :span="12">
        <div class="main-title">意向用户列表</div>
      </el-col>
      <el-col :span="12">
        <el-button size="mini" type="primary" style="float:right" @click="dialogVisible.tag = true">标签</el-button>
      </el-col>
    </el-row>
    <el-table
      style="margin-top: 15px"
      :loading="mainTable.loading"
      :data="mainTable.array"
      border
    >
      <el-table-column
        align="center"
        label="头像"
      >
        <template slot-scope="scope">
          <img :src="scope.row.avatar" width="50px" height="50px" alt="">
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="昵称"
        prop="nickname"
      />
      <el-table-column
        align="center"
        label="电话"
        prop="telephone"
      />
      <el-table-column
        align="center"
        label="微信"
        prop="wechat"
      />
      <el-table-column
        align="center"
        label="城市"
        prop="city"
      />
      <el-table-column
        align="center"
        label="性别"
      >
        <template slot-scope="scope">
          {{ map.gender[scope.row.gender] }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="用户状态"
      >
        <template slot-scope="scope">
          {{ map.leadsLevel[scope.row.leadsLevel] }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="标签"
      >
        <template slot-scope="scope">
          <el-tag v-for="tag in scope.row.tagList" :key="tag.tagId">{{ tag.tagName }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="是否关注本企业号"
      >
        <template slot-scope="scope">
          <div style="font-size: 24px" :style="'color:' + (scope.row.isFollow?'#67C23A':'#F56C6C')">
            <i :class="scope.row.isFollow ? 'el-icon-success' : 'el-icon-error'" />
          </div>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        label="操作"
      >
        <el-popover
          placement="left"
          width="900"
          trigger="click"
        >
          <el-table :data="repayTable.array">
            <el-table-column
              prop="actionFlag"
              align="center"
              label="订单号"
            />
            <el-table-column
              prop="actionSource"
              align="center"
              label="订单号"
            />
            <el-table-column
              align="center"
              label="分类"
            >
              <template slot-scope="rscope">
                {{ map.actionType[rscope.row.actionType] }}
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="金额"
            >
              <template slot-scope="rscope">
                {{ $tool.parseTime(rscope.row.createTime) }}
              </template>
            </el-table-column>
          </el-table>
          <el-button slot="reference" plain type="primary" size="mini" @click="getRepayTableData(scope.row.openId)">互动记录</el-button>
        </el-popover>
      </el-table-column>

    </el-table>

    <pagination
      :pager-size="mainTable.pager.size"
      :pager-index="mainTable.pager.index"
      :pager-total="mainTable.pager.total"
      @pagination-change="handlePagerChange"
    />

    <el-drawer
      :visible.sync="dialogVisible.tag"
      :direction="'rtl'"
      :with-header="false"
    >
      <div style="padding:10px">
        <div style="margin-bottom: 15px">
          <el-input v-model="tagDrawer.form.name" size="mini" clearable @keyup.enter.native="addTag">
            <el-button slot="append" size="mini" type="primary" @click="addTag">新增</el-button>
          </el-input>

        </div>
        <div v-if="tagDrawer.array.length" v-loading="tagDrawer.loading">
          <div v-for="tag in tagDrawer.array" :key="tag.tagId" style="height: 32px;margin: 8px 0" class="before-line">
            <el-tag effect="plain">
              <span v-if="!tag.inputIsShow">{{ tag.tagName }}</span>
              <el-input v-else :ref="tag.tagId" v-model="tag.tagName" style="width:90px" size="mini" @blur="handleSubmit(tag)" />
            </el-tag>
            <div style="float:right; line-height:32px">
              <i style="color:#409EFF" class="el-icon-edit-outline" @click="editTag(tag)" />
              <i style="color:#fe6c6f" class="el-icon-close" @click="deleteTag(tag.tagId)" />
            </div>
          </div>
        </div>
        <empty v-else />
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { getIntendedUser, getTagList, addTag, editTag, deleteTag, getUserByAction } from '@/api/enterprise'
import Pagination from '@/components/Pagination'
import Empty from '@/components/Empty'

export default {
  components: {
    Pagination,
    Empty
  },
  data() {
    return {
      map: {
        gender: {
          0: '未知',
          1: '男',
          2: '女'
        },
        leadsLevel: {
          '-1': '没兴趣',
          '0': '了解',
          '1': '有兴趣',
          '2': '有意愿',
          '10': '已转化'
        },
        actionType: {
          0: '全部',
          1: '私信互动',
          2: '组件互动',
          3: '主页互动'
        }
      },
      dialogVisible: {
        tag: false
      },
      tagDrawer: {
        array: [],
        row: {},
        loading: false,
        form: {
          name: ''
        }
      },
      repayTable: {
        array: []
      },
      mainTable: {
        filter: {
          actionType: '0',
          leadsLevel: '',
          time: []
        },
        loading: false,
        array: [],
        form: {
          title: '',
          atIds: '',
          ids: '',
          file: ''
        },
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      },
      type: ''
    }
  },
  created() {
    this.getTagList()
    this.getMainTableData()
  },
  methods: {
    deleteTag(tagId) {
      this.$confirm('确定要删除该标签吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        deleteTag({
          tagId,
          userId: this.$route.params.userId
        }).then(res => {
          this.getTagList()
        })
      })
    },
    addTag() {
      addTag({
        userId: this.$route.params.userId,
        name: this.tagDrawer.form.name
      }).then(res => {
        this.tagDrawer.form.name = ''
        this.getTagList()
      })
    },
    handleSubmit(tag) {
      if (tag.beforeUpdateName === tag.tagName) {
        tag.inputIsShow = false
        return
      }
      editTag({
        userId: this.$route.params.userId,
        name: tag.tagName,
        tagId: this.tagDrawer.row.tagId
      }).then(res => {
        this.getTagList()
      }).catch(() => {
        tag.inputIsShow = false
        tag.tagName = tag.beforeUpdateName
      })
    },
    editTag(tag) {
      this.tagDrawer.row = tag || {}
      tag.inputIsShow = true
      this.$nextTick(() => {
        if (this.$refs[tag.tagId]) {
          this.$refs[tag.tagId][0].focus()
        }
      })
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getTagList() {
      this.tagDrawer.loading = true
      getTagList({
        count: 20,
        cursor: 1,
        userId: this.$route.params.userId
      }).then(res => {
        const { list = [] } = res
        list.forEach(tag => {
          tag.inputIsShow = false
          tag.beforeUpdateName = tag.tagName
        })
        this.tagDrawer.array = list || []
      }).finally(() => {
        this.tagDrawer.loading = false
      })
    },
    getRepayTableData(to_user_openId) {
      getUserByAction({
        count: 20,
        cursor: 1,
        to_user_openId,
        userId: this.$route.params.userId
      }).then(res => {
        this.repayTable.array = res.list || []
      })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _filter = Object.assign({}, this.mainTable.filter)
      if (Array.isArray(_filter.time) && _filter.time.length === 2) {
        _filter.startTime = 0
        _filter.endTime = 0
      }
      delete _filter.time
      let _form = {
        userId: this.$route.params.userId,
        cursor: this.mainTable.pager.index,
        count: this.mainTable.pager.size
      }
      _form = Object.assign(_form, _filter)
      getIntendedUser(_form).then(response => {
        this.mainTable.pager.total = response.data || 0
        this.mainTable.array = response.users || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }

}
</script>

<style lang="scss">
.app-contanier{
    padding: 20px;
    height: 100%;
    overflow: auto;
}
.before-line::before{
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: #eee;
  position: relative;
  top: -4px;
}
</style>
