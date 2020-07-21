<template>
  <div class="app-contanier">
    <el-row>
      <el-col :span="12">
        <div class="main-title">抖音号列表</div>
        <el-input v-model="mainTable.filter.name" size="mini" style="width: unset" placeholder="请输入要查询的账号" @keyup.enter.native="getMainTableData">
          <i slot="suffix" class="el-input__icon el-icon-search" @click="getMainTableData" />
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-button size="mini" type="primary" style="float:right" @click="showDouyin">发布抖音</el-button>
        <el-button size="mini" style="float:right" @click="add">用户授权</el-button>
      </el-col>
    </el-row>
    <el-row v-loading="mainTable.loading" class="main-contanier">
      <div v-if="mainTable.array.length !== 0">
        <el-col v-for="user in mainTable.array" :key="user.id" :span="24">
          <div class="user-contanier">
            <div class="avatar-border">
              <img class="avatar" :src="user.icon" width="54px" height="54px" name="avatar" alt="">
            </div>
            <div class="user-content">
              <div style="float:left">
                <div class="user-name">
                  {{ user.name }}
                  <i class="el-icon-s-custom" :style="user.gender ? 'color: #409EFF': 'color:#ffb6c1'" />
                </div>
                <div class="user-attention">
                  <span>粉丝数:{{ user.attentionNum }}</span>
                </div>
              </div>
              <div style="float:right;margin-right: 10px;line-height:60px">
                <el-dropdown v-if="user.accountRole" trigger="click">
                  <el-button size="mini">
                    企业号<i class="el-icon-arrow-down el-icon--right" />
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <router-link
                        :to="{
                          path:`/interact/card/${user.id}?name=${user.name}`
                        }"
                      >
                        消息卡片
                      </router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <router-link
                        :to="{
                          path:`/enterprise/intended/${user.id}?name=${user.name}`
                        }"
                      >
                        意向用户
                      </router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <router-link
                        :to="{
                          path:`/enterprise/service/${user.id}?name=${user.name}`
                        }"
                      >
                        客服管理
                      </router-link>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <router-link
                  :to="{
                    path:`/example/integrates/${user.id}?name=${user.name}`
                  }"
                  @click.native="saveUserInfo(user)"
                >
                  <el-button type="primary" icon="el-icon-s-unfold" size="mini">查看详情</el-button>
                </router-link>
              </div>
              <i class="el-icon-close user-delete" @click="deleteItem(user.userId)" />
            </div>
          </div>
        </el-col>
      </div>
      <empty v-else />
    </el-row>

    <pagination
      :pager-size="mainTable.pager.size"
      :pager-index="mainTable.pager.index"
      :pager-total="mainTable.pager.total"
      @pagination-change="handlePagerChange"
    />

    <el-dialog title="发布抖音" :visible.sync="dialogVisible.upload" width="500px" center>
      <el-form ref="form" size="mini" label-width="110px" :model="mainTable.form" :rules="rules">
        <el-form-item :label="`${typeName}标题`" prop="title">
          <el-input v-model="mainTable.form.title" />
        </el-form-item>
        <el-form-item :label="typeName" prop="file">
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
        <el-form-item label="发布的抖音号" prop="ids">
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

      </el-form>
      <div slot="footer">
        <el-button @click="handleSubmit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getUserList, getAllUserList, oauthCode, getFansFollow } from '@/api/account-of-merchant'
import { uploadVideo, uploadImage } from '@/api/video'
import { deleteAccountInMerchant } from '@/api/merchant'
import Pagination from '@/components/Pagination'
import Empty from '@/components/Empty'

export default {
  components: {
    Pagination,
    Empty
  },
  data() {
    return {
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        file: [
          { required: true, message: '请选择文件', trigger: 'change' }
        ],
        ids: [
          { required: true, message: '请选择要发布的抖音号', trigger: 'change' }
        ]
      },
      allUserList: [],
      fansFollowList: [],
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
          index: 0,
          total: 0,
          size: 10
        }
      },
      dialogVisible: {
        upload: false
      },
      type: '',
      uploadLoading: false,
      fileList: []
    }
  },
  computed: {
    typeName() {
      return this.type === 1 ? '视频' : '图片'
    }
  },
  created() {
    this.getAllUserList()
    this.getMainTableData()
  },
  methods: {
    showDouyin() {
      this.dialogVisible.upload = true
      this.type = 1
      this.$tool.initForm(this.mainTable.form)
      this.$nextTick(_ => {
        this.$refs['form'].clearValidate()
      })
    },
    saveUserInfo(user) {
      this.$store.commit('douyin/SET_USERINFO', user)
      localStorage.setItem('douyinUser', user)
    },
    test(val) {
      if (Array.isArray(val) && val.length === 1) {
        this.getFansFollow(val[0])
      } else {
        this.fansFollowList = []
        this.mainTable.form.atIds = ''
      }
    },
    add() {
      oauthCode().then(res => {
        location.href = res.result
      })
    },
    deleteItem(userId) {
      this.$confirm('确定要删除该抖音号吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        deleteAccountInMerchant({
          merchantId: this.$route.query.merchantId,
          userId
        }).then(response => {
          this.$message.success(response.message)
        })
      })
    },
    handleBeforeUpload(files) {
      this.fileList = [files]
      this.mainTable.form.file = 'file'
      return false
    },
    handleExceed(files) {
      this.fileList = [files[0]]
    },
    handleSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          const _api = {
            1: uploadVideo,
            2: uploadImage
          }
          const formData = new FormData()
          formData.append('file', this.fileList[0])
          formData.append('title', this.mainTable.form.title)
          formData.append('ids', this.mainTable.form.ids.join(','))
          if (this.mainTable.form.atIds) formData.append('atIds', this.mainTable.form.atIds.join(','))

          _api[this.type](formData).then(response => {
            this.$message.success(response.message)
            this.dialogVisible.upload = false
          }).finally(_ => {
            this.uploadLoading = false
          })
        }
      })
    },
    handleExpand(row, expandedRows) {
      this.expands = []
      if (expandedRows.length > 0) {
        row ? this.expands.push(row.id) : ''
      }
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getAllUserList() {
      getAllUserList().then(res => {
        this.allUserList = res.result || []
      })
    },
    getFansFollow(userId) {
      getFansFollow({
        userId,
        cursor: 0,
        count: 20
      }).then(res => {
        const { followList = [], fansList = [] } = res
        this.fansFollowList = this.$tool.duplicateRemove(followList.concat(fansList), 'openId')
      })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        merchantId: this.$route.query.merchantId,
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      getUserList(_form).then(response => {
        this.mainTable.pager.total = response.data || 0
        this.mainTable.array = response.rows || []
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
