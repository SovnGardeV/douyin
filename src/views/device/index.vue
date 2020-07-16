<template>
  <div style="background: #eee;min-height:100%">
    <div class="app-container">
      <div v-if="role !== 'admin'" class="content-container">
        <el-form size="mini" :inline="true">
          <el-form-item>
            <el-input v-model="mainTable.filter.name" placeholder="请输入设备名称" />
          </el-form-item>
          <el-form-item>
            <el-select v-model="mainTable.filter.groupName" placeholder="请选择设备分组" clearable>
              <el-option
                v-for="(value, key) in map.device"
                :key="key"
                :label="value"
                :value="value"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="mainTable.filter.workStatus" placeholder="请选择工作状态" clearable>
              <el-option
                v-for="(value, key) in map.workStatus"
                :key="key"
                :label="value"
                :value="key"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="mainTable.filter.status" placeholder="请选择在线情况" clearable>
              <el-option
                v-for="(value, key) in map.status"
                :key="key"
                :label="value"
                :value="key"
              />
            </el-select>
          </el-form-item>
          <el-button size="mini" type="primary" icon="el-icon-search" @click="getMainTableData">搜索</el-button>
        </el-form>
      </div>
      <div class="content-container" style="padding-top: 0">
        <h3>设备管理
          <div v-if="role !== 'admin'" style="float:right">
            <!-- <el-button size="mini" icon="el-icon-plus" type="primary" @click="showDialog('add')">新增</el-button> -->
            <el-button size="mini" icon="el-icon-box" type="primary" @click="showDialog('group')">分组</el-button>
            <el-popover
              placement="left"
              width="170"
              trigger="click"
            >
              <div style="width:150px;height:150px">
                <img width="100%" height="100%" :src="qrCode" alt="">
              </div>
              <el-button slot="reference" size="mini" icon="el-icon-mobile-phone" type="primary" @click.native="getQrCode">绑定设备</el-button>
            </el-popover>
          </div>
        </h3>
        <el-table
          :loading="mainTable.loading"
          :data="mainTable.array"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            align="center"
          />
          <el-table-column
            v-if="role !== 'admin'"
            align="center"
            prop="name"
            label="设备名称"
          >
            <template slot-scope="scope">
              {{ scope.row.name }}
              <i class="el-icon-edit-outline" style="cursor:pointer" @click="showDialog('edit', scope.row)" />
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="型号"
            prop="model"
          />
          <el-table-column
            align="center"
            label="分组"
            prop="groupName"
          />
          <el-table-column
            align="center"
            label="工作状态"
          >
            <template slot-scope="scope">
              {{ map.workStatus[scope.row.workStatus] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="在线情况"
          >
            <template slot-scope="scope">
              {{ map.status[scope.row.status] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            fixed="right"
            width="160px"
          >
            <template slot-scope="scope">
              <el-button size="mini" @click="showDialog('add', scope.row)">详情</el-button>
              <el-button size="mini" type="danger" @click="unbind(scope.row.id)">解绑</el-button>
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

      <el-dialog :title="`编辑设备名`" width="350px" :visible.sync="dialogVisible.edit" center>
        <el-form size="mini" label-width="80px">
          <el-form-item label="设备名称">
            <el-input v-model="mainTable.editForm.name" placeholder="请输入设备昵称" />
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button size="mini" @click="dialogVisible.edit = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="handleSubmit">提 交</el-button>
        </div>
      </el-dialog>

      <el-dialog :title="`设备分组`" width="350px" :visible.sync="dialogVisible.group" center>
        <el-form size="mini" label-width="80px">
          <el-form-item label="分组名称">
            <el-select v-model="mainTable.groupForm.groupName" placeholder="请选择设备分组" clearable>
              <el-option
                v-for="(value, key) in map.device"
                :key="key"
                :label="value"
                :value="value"
              />
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button size="mini" @click="dialogVisible.group = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="handleDeviceGroup">提 交</el-button>
        </div>
      </el-dialog>

      <el-dialog :title="`设备详情`" width="600px" :visible.sync="dialogVisible.add" center>
        <el-form size="mini" label-width="80px">
          <div style="border: 1px solid #eee; border-radius: 4px; padding:0 6px;margin-bottom:10px">
            <h2 style="margin: 10px 0">设备信息</h2>
            <el-row :gutter="5">
              <el-col :span="12">
                <el-form-item label="设备编号">
                  <span>{{ mainTable.addForm.id }}</span>
                </el-form-item>
                <el-form-item label="设备分组">
                  <span>{{ mainTable.addForm.groupName }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="设备名">
                  <span>{{ mainTable.addForm.name }}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <div style="border: 1px solid #eee; border-radius: 4px; padding:0 6px;margin-bottom:10px">
            <h2 style="margin: 10px 0">抖音信息</h2>
            <el-row :gutter="5">
              <el-col :span="8">
                <el-form-item label="抖音号">
                  <span>{{ mainTable.addForm.douyinId }}</span>
                </el-form-item>
                <el-form-item label="喜欢数">
                  <span>{{ mainTable.addForm.likeNum }}</span>
                </el-form-item>
                <el-form-item label="视频数">
                  <span>{{ mainTable.addForm.videoNum }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="抖音昵称">
                  <span>{{ mainTable.addForm.douyinName }}</span>
                </el-form-item>
                <el-form-item label="关注数">
                  <span>{{ mainTable.addForm.followNum }}</span>
                </el-form-item>
                <el-form-item label="抖音头像">
                  <div style="width: 60px; height:60px;border:1px solid #f0f0f0;border-radius: 4px">
                    <img style="width:100%;height:100%" :src="mainTable.addForm.icon" alt="">
                  </div>
                </el-form-item>

              </el-col>
              <el-col :span="8">
                <el-form-item label="粉丝数">
                  <span>{{ mainTable.addForm.fansNum }}</span>
                </el-form-item>
                <el-form-item label="点赞数">
                  <span>{{ mainTable.addForm.praiseNum }}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <div style="border: 1px solid #eee; border-radius: 4px; padding:0 6px">
            <h2 style="margin: 10px 0">手机信息</h2>
            <el-row :gutter="5">
              <el-col :span="12">
                <el-form-item label="型号">
                  <span>{{ mainTable.addForm.model }}</span>
                </el-form-item>
                <el-form-item label="状态">
                  <span
                    :style="
                      mainTable.addForm.status ? 'color:#67C23A' : 'color:#909399'
                    "
                  >
                    <i class="el-icon-info" />
                    {{ map.status[mainTable.addForm.status] }}
                  </span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="手机号">
                  <span>{{ mainTable.addForm.phone }}</span>
                </el-form-item>
                <el-form-item label="工作状态">
                  <span>{{ map.workStatus[mainTable.addForm.workStatus] }}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-form>
        <!-- <div slot="footer">
          <el-button size="mini" @click="dialogVisible.add = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="handleSubmit">提 交</el-button>
        </div> -->
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getDeviceList, updateDevice, getDeviceMap, groupDevice, unbind, getMerchantDeviceInfo } from '@/api/device'
import { getQrCode } from '@/api/merchant'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      qrCode: '',
      type: '',
      isEditDeviceInfo: true,
      map: {
        device: {},
        status: {
          0: '离线',
          1: '在线'
        },
        workStatus: {
          0: '未工作',
          1: '工作中'
        },
        listenerStatus: {
          0: '未监听',
          1: '已监听'
        }
      },
      dialogVisible: {
        add: false,
        edit: false,
        group: false
      },
      mainTable: {
        loading: false,
        selectedArray: [],
        filter: {
          name: '',
          groupName: '',
          workStatus: '',
          status: ''
        },
        editForm: {
          name: ''
        },
        addForm: {
          cpu: '',
          distributionStatus: '',
          edition: '',
          features: '',
          firm: '',
          model: '',
          osEdition: '',
          phone: '',
          remark: '',
          root: '',
          serialNumber: ''
        },
        groupForm: {
          groupName: ''
        },
        array: [],
        row: {},
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      }
    }
  },
  computed: {
    role() {
      return localStorage.getItem('loginType')
    }
  },
  created() {
    this.getDeviceMap()
    this.getMainTableData()
  },
  methods: {
    getQrCode() {
      getQrCode().then(res => {
        if (res.code !== 200) return
        this.qrCode = res.result
      })
    },
    unbind(id) {
      this.$confirm('确定要解绑吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        unbind({ id }).then(res => {
          this.$message.success(res.message)
          this.getMainTableData()
        })
      })
    },
    handleDeviceGroup() {
      if (!this.mainTable.selectedArray.length) {
        this.$message.info('请选择要分组的设备')
        return
      }

      let ids = []
      this.mainTable.selectedArray.forEach(item => {
        ids.push(item.id)
      })
      ids = ids.join(',')
      groupDevice({ ids, groupName: this.mainTable.groupForm.groupName }).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
        this.dialogVisible.group = false
      })
    },
    showDialog(type, item = {}) {
      this.type = type
      this.mainTable.row = item
      this.$tool.initForm(this.mainTable[`${type}Form`])
      if (type === 'edit') {
        this.$tool.copyObj(this.mainTable[`${type}Form`], item)
      } else if (type === 'add') {
        getMerchantDeviceInfo({ id: item.id }).then(res => {
          this.mainTable.addForm = Object.assign(res.data, res.count) || {}
        })
      }
      this.dialogVisible[type] = true
    },
    handleSelectionChange: function(val) {
      this.mainTable.selectedArray = val
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    handleSubmit() {
      const _form = Object.assign({
        id: this.mainTable.row.id
      }, this.mainTable[`${this.type}Form`])
      updateDevice(_form, this.type).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
        this.dialogVisible[this.type] = false
      })
    },
    async getDeviceMap() {
      const { result } = await getDeviceMap()
      // const _result = {}
      const _resutlt = result.reduce((total, currentValud) => {
        return Object.assign(total, currentValud)
      }, {})
      this.map.device = _resutlt || {}
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _filter = Object.assign({}, this.mainTable.filter)
      let _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      _form = Object.assign(_form, _filter)
      getDeviceList(_form).then(response => {
        this.mainTable.pager.total = response.result.total || 0
        this.mainTable.array = response.result.records || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }
}
</script>

<style>

</style>
