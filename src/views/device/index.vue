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
            label="分组名称"
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
            label="监听状态"
          >
            <template slot-scope="scope">
              {{ map[scope.row.listenerStatus] }}
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
            label="坐标"
            prop="remark"
          />
          <el-table-column
            align="center"
            label="操作"
            width="160px"
          >
            <template slot-scope="scope">
              <el-button size="mini" @click="showDialog('add', scope.row)">详情</el-button>
              <el-button v-if="role === 'admin'" size="mini" type="danger" @click="unbind(scope.row.id)">解绑</el-button>
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
          <el-row :gutter="5">
            <el-col :span="12">
              <el-form-item label="CPU架构">
                <el-input v-model="mainTable.addForm.cpu" :disabled="isEditDeviceInfo" />
              </el-form-item>
              <el-form-item label="特征码">
                <el-input v-model="mainTable.addForm.features" :disabled="isEditDeviceInfo" />
              </el-form-item>
              <el-form-item label="厂商">
                <el-input v-model="mainTable.addForm.firm" :disabled="isEditDeviceInfo" />
              </el-form-item>
              <el-form-item label="分配状态">
                <el-radio-group v-model="mainTable.addForm.distributionStatus" :disabled="isEditDeviceInfo">
                  <el-radio label="1">已分配</el-radio>
                  <el-radio label="0">未分配</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="设备安装软件版本">
                <el-input v-model="mainTable.addForm.edition" :disabled="isEditDeviceInfo" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="型号">
                <el-input v-model="mainTable.addForm.model" :disabled="isEditDeviceInfo" />
              </el-form-item>
              <el-form-item label="OS版本">
                <el-input v-model="mainTable.addForm.osEdition" :disabled="isEditDeviceInfo" />
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="mainTable.addForm.phone" :disabled="isEditDeviceInfo" />
              </el-form-item>
              <el-form-item label="序列号">
                <el-input v-model="mainTable.addForm.serialNumber" :disabled="isEditDeviceInfo" />
              </el-form-item>
              <el-form-item label="是否许需要root">
                <el-radio-group v-model="mainTable.addForm.root" :disabled="isEditDeviceInfo">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer">
          <el-button size="mini" @click="dialogVisible.add = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="handleSubmit">提 交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getDeviceList, updateDevice, getDeviceMap, groupDevice, unbind, queryDeviceInfo } from '@/api/device'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
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
        queryDeviceInfo({ id: item.id }).then(res => {
          this.mainTable.addForm = res.result || {}
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
