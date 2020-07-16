<template>
  <div>
    <el-table
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
  </div>
</template>

<script>
import { getMerchantDeviceList } from '@/api/device'
export default {
  name: 'SelectDevice',
  data() {
    return {
      selectedArray: [],
      deviceList: []
    }
  },
  created() {
    this.getDeviceList()
  },
  methods: {
    handleSelectionChange: function(val) {
      this.selectedArray = val
      this.$emit('selected', val)
    },
    getDeviceList() {
      getMerchantDeviceList().then(res => {
        this.deviceList = res.result
      })
    }
  }
}
</script>

<style>

</style>
