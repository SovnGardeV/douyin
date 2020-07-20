<template>
  <div style="margin: 10px 0">
    <el-radio-group v-model="group" size="mini" style="margin-bottom: 10px" @change="handleChange">
      <el-radio-button :label="false">设备</el-radio-button>
      <el-radio-button :label="true">设备组</el-radio-button>
    </el-radio-group>
    <el-table
      v-if="!group"
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
      v-else
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
  </div>
</template>

<script>
import { getMerchantDeviceList, getDeviceMap } from '@/api/device'
export default {
  name: 'SelectDevice',
  data() {
    return {
      group: false,
      isFirstGainDevice: true,
      isFirstGainDeviceGroup: true,
      selectedArray: [],
      deviceList: [],
      deviceGroupList: []
    }
  },
  created() {
    this.getDeviceList()
  },
  methods: {
    handleChange(val) {
      this.getDeviceList()
    },
    handleSelectionChange: function(val) {
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
      this.$emit('isgroup', this.group || false)
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
