<template>
  <div style="background: rgb(238, 238, 238);height: 100%">
    <div class="app-container">
      <div class="content-container">
        <div style="display: flex">
          <h3 style="flex: 1;margin: 10px 0">用户列表</h3>
          <div style="margin: 10px 0">
            <!-- <el-button size="mini" type="primary" @click="showDialog('add')">新增</el-button> -->
            <el-button size="mini" type="danger" @click="deleteAdmin">删除</el-button>
          </div>
        </div>
        <el-table
          v-loading="mainTable.loading"
          :data="mainTable.array"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            align="center"
            type="selection"
          />
          <el-table-column
            align="center"
            label="用户名"
            prop="name"
          />
          <el-table-column
            align="center"
            label="头像"
            prop="account"
          >
            <template slot-scope="scope">
              <img :src="scope.row.logo" width="60" alt="">
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="手机"
            prop="phone"
          />
          <el-table-column
            align="center"
            label="QQ"
            prop="qq"
          />
          <el-table-column
            align="center"
            label="余额"
            prop="balance"
          />
          <el-table-column
            align="center"
            label="收益"
            prop="profit"
          />
          <el-table-column
            align="center"
            label="注册时间"
            prop="createTime"
          />
          <el-table-column
            align="center"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <el-row :gutter="5">
                <el-col :span="12">
                  <el-button size="mini" style="width: 100%" @click="showDialog('edit', scope.row)">编辑</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button size="mini" style="width: 100%" @click="$router.push({path: `/plug/classify?userId=${scope.row.id}`})">下单</el-button>
                </el-col>
                <el-col :span="24" style="margin-top: 5px">
                  <el-button size="mini" style="width: 100%" @click="$router.push({path: `/puser/order?id=${scope.row.id}`})">充值记录</el-button>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
        <pagination
          :pager-size="mainTable.pager.size"
          :pager-index="mainTable.pager.index"
          :pager-total="mainTable.pager.total"
          @pagination-change="handlePagerChange"
        />
      </div>

      <el-dialog :title="`${mode === 'add' ? '新增' : '编辑'}用户`" :visible.sync="dialogVisible.plug" width="400px" center>
        <el-form size="mini" label-width="100px" center>
          <el-form-item label="用户名">
            <el-input v-model="mainTable.form.name" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="mainTable.form.pwd" type="password" />
          </el-form-item>
          <el-form-item label="头像">
            <div
              v-loading="loading"
              class="upload-source"
              element-loading-text="上传中"
              element-loading-spinner="el-icon-loading"
            >
              <div v-if="!mainTable.form.logo" class="upload-source-tip" @click="fakeUploadClick('img')">
                <i class="el-icon-plus" />
              </div>
              <img v-else style="width:100%;height:100%" :src="mainTable.form.logo" alt="" @click="fakeUploadClick('img')">
            </div>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="mainTable.form.phone" />
          </el-form-item>
          <el-form-item label="QQ">
            <el-input v-model="mainTable.form.qq" />
          </el-form-item>
          <el-form-item label="余额">
            <el-input v-model="mainTable.form.balance" type="number" />
          </el-form-item>
          <el-form-item label="收益">
            <el-input v-model="mainTable.form.profit" type="number" />
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button size="mini" @click="dialogVisible.plug =false">取消</el-button>
          <el-button size="mini" type="primary" @click="handleSubmit">提交</el-button>
        </div>
      </el-dialog>
      <input type="file" style="visibility: hidden;" class="img" @change="uploadSource">
    </div>
  </div>
</template>

<script>
import { queryUserList, updateUser, deleteUser } from '@/api/normalUser'
import { uploadSource } from '@/api/source'
import { JSEncrypt } from 'jsencrypt'
import { getPublicKey } from '@/api/user'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      map: {
        type: {
          ds: '抖音',
          ks: '快手',
          yk: '云控'
        }
      },
      mode: '',
      dialogVisible: {
        plug: false
      },
      loading: false,
      mainTable: {
        loading: false,
        array: [],
        row: {},
        multipleSelection: [],
        form: {
          logo: '',
          balance: '',
          name: '',
          phone: '',
          profit: '',
          pwd: '',
          qq: ''
        },
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      }
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    handleSelectionChange(val) {
      this.mainTable.multipleSelection = val
    },
    fakeUploadClick(className) {
      const fileInput = document.querySelector(`input[type=file].${className}`)
      fileInput.click()
    },
    uploadSource(e) {
      const { files } = e.target
      if (files.length) {
        this.loading = true
        const formData = new FormData()
        formData.append('file', files[0])
        uploadSource(formData).then(res => {
          this.mainTable.form.logo = res.result
        }).finally(() => {
          this.loading = false
        })
      }
    },
    deleteAdmin() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的用户')
        return
      }
      this.$confirm('确定要删除这些用户吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.multipleSelection.forEach(log => {
          ids.push(log.id)
        })
        ids = ids.join(',')
        deleteUser({
          ids
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
      })
    },
    showDialog(mode, item) {
      this.mainTable.row = item || {}
      this.$tool.initForm(this.mainTable.form)
      if (mode === 'edit') {
        this.$tool.copyObj(this.mainTable.form, item, ['pwd'])
      }
      this.dialogVisible.plug = true
      this.mode = mode
    },
    async handleSubmit() {
      const _form = Object.assign({}, this.mainTable.form)
      if (_form.pwd) {
        const { publicKey } = await getPublicKey()
        const encrypt = new JSEncrypt()
        encrypt.setPublicKey(publicKey)
        _form.pwd = encrypt.encrypt(this.mainTable.form.pwd)
      } else {
        delete _form.pwd
      }

      updateUser(_form, this.mode).then(res => {
        this.getMainTableData()
        this.$message.success(res.message)
        this.dialogVisible.plug = false
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
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      queryUserList(_form).then(res => {
        const { result = {}} = res
        this.mainTable.pager.total = result.total || 0
        this.mainTable.array = result.records || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }
}
</script>

<style>
.upload-source{
  border-radius: 4px;
  border: 1px dashed #ccc;
  height: 100px;
  width: 100px;
  cursor: pointer;
}
.upload-source-tip{
  text-align: center;
  transform: translateY(-50%);
  position: relative;
  top: 50%;
}
</style>
