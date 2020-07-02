<template>
  <div class="app-contanier">
    <el-row>
      <el-col :span="12">
        <div class="main-title">意向用户列表</div>
        <el-input v-model="mainTable.filter.name" size="mini" style="width: unset" placeholder="请输入要查询的账号" @keyup.enter.native="getMainTableData">
          <i slot="suffix" class="el-input__icon el-icon-search" @click="getMainTableData" />
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-button size="mini" type="primary" style="float:right" @click="dialogVisible.upload = true;type = 1">标签</el-button>
      </el-col>
    </el-row>
    <el-table
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

    </el-table>

    <pagination
      :pager-size="mainTable.pager.size"
      :pager-index="mainTable.pager.index"
      :pager-total="mainTable.pager.total"
      @pagination-change="handlePagerChange"
    />

    <!-- <el-dialog title="发布内容" :visible.sync="dialogVisible.upload" width="500px">
      <el-form size="mini" label-width="110px">
        <el-form-item :label="`${typeName}标题`">
          <el-input v-model="mainTable.form.title" />
        </el-form-item>
        <el-form-item :label="typeName">
          <el-upload
            ref="fileUpload"
            element-loading-text="正在上传中，请稍候"
            class="avatar-uploader"
            action=""
            :file-list="fileList"
            :limit="1"
            :on-exceed="handleExceed"
            :before-upload="handleBeforeUpload"
            :show-file-list="true"
          >
            <el-button size="mini" type="text">选择文件</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="内容类型">
          <el-radio-group v-model="type">
            <el-radio-button :label="1">视频</el-radio-button>
            <el-radio-button :label="2">图片</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="发布的抖音号">
          <el-select
            v-model="mainTable.form.ids"
            clearable
            style="width:100%"
            multiple
            collapse-tags
            @change="test"
          >
            <el-option
              v-for="user in allUserList"
              :key="user.id"
              :label="user.name"
              :value="user.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="要@的抖音号">
          <el-select
            v-model="mainTable.form.atIds"
            style="width:100%"
            :disabled="mainTable.form.ids.length > 1"
            clearable
            multiple
            collapse-tags
          >
            <el-option
              v-for="user in fansFollowList"
              :key="user.openId"
              :label="user.nickname"
              :value="user.openId"
            />
          </el-select>
        </el-form-item>
        <el-button @click="handleSubmit">提交</el-button>
      </el-form>
    </el-dialog> -->
  </div>
</template>

<script>
import { getIntendedUser } from '@/api/enterprise'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
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
        }
      },
      mainTable: {
        filter: {
          name: ''
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
      dialogVisible: {
        upload: false
      },
      type: ''
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        userId: this.$route.params.userId,
        cursor: this.mainTable.pager.index - 1,
        count: this.mainTable.pager.size
      }
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
.avatar-border{
  float: left;
  margin: 10px 20px;
  width: 60px;
  height: 60px;
  padding: 2px;
  border-radius: 50%;
  border: 1px dashed #ccc;
  transition: .2s;
}
.avatar{
  border-radius: 50%;
  display: block;
}
.main-contanier{
  border-bottom: 1px solid #DCDFE6;
  margin: 20px 0;
}
.user-contanier{
  width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 1px solid #DCDFE6;
  position: relative;
  transition: .2s;
  &:hover{
    background: rgb(236, 245, 255);
    .avatar-border {
      transform: scale(1.1);
    }
  }
  .user-content{
    height: 100%;
    width: calc(100% - 100px);
    float: left;
    padding: 10px 20px;
    font-size: 14px;
    border-left: 1px solid #DCDFE6;
    .user-name{
      line-height: 36px;
    }
    .user-attention{
      font-size: 12px;
      color: #999;
    }
    .user-delete{
      position: absolute;
      right: 8px;
      top: 50%;
      color: red;
      font-size: 16px;
      font-weight: bold;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
}
</style>
