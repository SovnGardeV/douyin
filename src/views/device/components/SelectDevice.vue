<template>
  <div style="margin: 10px 0">
    <el-radio-group v-model="group" size="mini" style="margin-bottom: 10px" :disabled="unbindDevice || levingDevice" @change="handleChange">
      <el-radio-button :label="false">设备</el-radio-button>
      <el-radio-button :label="true">设备组</el-radio-button>
    </el-radio-group>
    <el-checkbox v-if="needScreen" v-model="unbindDevice" style="margin-left: 15px" @change="handleScreen">筛选
      <span style="color: #ccc; font-size: 12px; margin-left: 10px">提示：筛选未绑定基础信息的设备</span>
    </el-checkbox>
    <el-checkbox v-if="needLeving" v-model="levingDevice" style="margin-left: 15px" @change="handleLeving">筛选
      <span style="color: #ccc; font-size: 12px; margin-left: 10px">提示：筛选正在参与直播活动的商户设备</span>
    </el-checkbox>
    <el-table
      v-if="!unbindDevice && !levingDevice && !group"
      max-height="300"
      :data="deviceList"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        align="center"
      />
      <el-table-column
        align="center"
        label="设备号"
        prop="id"
      />
      <el-table-column
        align="center"
        label="设备名"
        prop="name"
      />
      <el-table-column
        align="center"
        label="型号"
        prop="model"
      />
      <el-table-column
        align="center"
        label="分组名"
        prop="groupName"
      />
    </el-table>

    <el-table
      v-if="!unbindDevice && !levingDevice && group"
      max-height="300"
      :data="deviceGroupList"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        align="center"
      />
      <el-table-column
        align="center"
        label="分组ID"
        prop="id"
      />
      <el-table-column
        align="center"
        label="分组名"
        prop="name"
      />
    </el-table>

    <el-table
      v-if="unbindDevice"
      max-height="300"
      :data="unBindDeviceList"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        align="center"
      />
      <el-table-column
        align="center"
        label="设备号"
        prop="id"
      />
      <el-table-column
        align="center"
        label="型号"
        prop="model"
      />
    </el-table>

    <el-table
      v-if="levingDevice"
      max-height="300"
      :data="levingDeviceList"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        align="center"
      />
      <el-table-column
        align="center"
        label="设备号"
        prop="id"
      />
      <el-table-column
        align="center"
        label="型号"
        prop="model"
      />
    </el-table>
  </div>
</template>

<script>
import { getMerchantDeviceList, getDeviceMap, getNoInfo, getLeving } from '@/api/device'
export default {
  name: 'SelectDevice',
  props: {
    needScreen: {
      type: Boolean,
      default: false
    },
    needLeving: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      group: false,
      unbindDevice: false,
      levingDevice: false,
      isFirstGainDevice: true,
      isFirstGainDeviceGroup: true,
      isFirstGainunbindDevice: true,
      isFirstGainLevingDevice: true,
      selectedArray: [],
      deviceList: [],
      deviceGroupList: [],
      unBindDeviceList: [],
      levingDeviceList: []

    }
  },
  computed: {
    type() {
      return 'device'
    }
  },
  created() {
    this.getDeviceList()
  },
  methods: {
    handleChange(val) {
      this.getDeviceList()
    },
    handleSelectionChange(val) {
      this.selectedArray = val
      const arr = []
      val.forEach(item => {
        if (this.group) {
          arr.push(item.name)
        } else {
          arr.push(item.id)
        }
      })
      this.$emit('selected', arr)
      this.$emit('isgroup', this.unbindDevice || this.levingDevice ? false : this.group)
    },
    handleScreen(val) {
      if (val) {
        this.getNoInfo()
      }
    },
    handleLeving(val) {
      if (val) {
        this.getNoInfo()
      }
    },
    getNoInfo() {
      if (this.isFirstGainunbindDevice) {
        getNoInfo().then(res => {
          this.unBindDeviceList = res.result
          this.isFirstGainunbindDevice = false
        })
      }
    },
    getLeving() {
      if (this.isFirstGainLevingDevice) {
        getLeving().then(res => {
          this.levingDeviceList = res.result
          this.isFirstGainLevingDevice = false
        })
      }
    },
    getDeviceList() {
      if (this.isFirstGainDevice || this.isFirstGainDeviceGroup) {
        const _api = {
          false: getMerchantDeviceList,
          true: getDeviceMap
        }
        _api[this.group]().then(res => {
          if (this.group) {
            this.deviceGroupList = this.handleGroupMap(res.result)
            this.isFirstGainDeviceGroup = false
          } else {
            this.deviceList = res.result
            this.isFirstGainDevice = false
          }
        })
      }
    },
    handleGroupMap(res) {
      if (Array.isArray(res)) {
        const _obj = res.reduce((total, currentTarget) => {
          return Object.assign(total, currentTarget)
        }, {})

        const _keys = Object.keys(_obj)
        const arr = []
        _keys.forEach(key => {
          arr.push({
            name: _obj[key],
            id: key
          })
        })
        return arr
      }
      return []
    }
  }
}
</script>

<style>

</style>
