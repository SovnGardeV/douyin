<template>
  <div style="background: #eee;height:100%;">
    <div class="app-container" style="overflow:auto">
      <div style="text-align: right">
        <el-button size="mini" type="primary" @click="handleSubmit">发布任务</el-button>
      </div>
      <el-card>
        <div>
          <h4>执行方式</h4>
          <el-radio-group v-model="form.type">
            <el-radio-button :label="1">立即执行</el-radio-button>
            <el-radio-button :label="2">手动执行</el-radio-button>
            <el-radio-button :label="3">定时执行</el-radio-button>
          </el-radio-group>
          <el-date-picker
            v-show="form.type === 3"
            v-model="form.operTime"
            :value-format="'yyyy-MM-dd HH:mm:ss'"
            type="datetime"
            placeholder="选择执行时间"
          />
        </div>
      </el-card>
      <el-card style="margin-top: 10px">
        <h4>
          选择插件： {{ plugList.array[plugList.index] && plugList.array[plugList.index].operMsg }}
          <i class="el-icon-edit-outline" @click="plugList.viewInfoShow = !plugList.viewInfoShow" />
        </h4>
        <div v-infinite-scroll="plugLoad" class="select-content">
          <transition name="el-zoom-in-top">
            <el-card v-show="plugList.viewInfoShow" style="width:97%;height:96%;position:absolute;z-index:2;overflow-y:auto;">
              <div style="text-align: right">
                <i class="el-icon-close" @click="plugList.viewInfoShow = false" />
              </div>
              <el-row v-if="plugList.viewInfo.length" :gutter="10">
                <el-form size="mini" label-width="60px">
                  <el-col v-for="item in plugList.viewInfo" :key="item.key" :span="12">
                    <el-form-item :label="item.key">
                      <el-input v-model="item.keyValue" />
                    </el-form-item>
                  </el-col>
                </el-form>
              </el-row>
              <empty v-else />
            </el-card>
          </transition>

          <el-row :gutter="5">
            <el-col v-for="(plug, index) in plugList.array" :key="plug.id" :span="4">
              <el-card class="plug-card" :class="plugList.index === index ? 'plug-border' : ''" @click.native="selectPlug(index)">
                <div>
                  <img :src="plug.logo" width="50px" height="50px" alt="">
                  <div style="margin: 10px 0">{{ plug.operMsg }}</div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-card style="margin-top: 10px">
        <h4>选择设备</h4>
        <el-transfer
          v-model="deviceList.selectedArray"
          filterable
          :filter-method="filterMethod"
          :titles="['设备列表','已选设备']"
          :data="deviceList.array"
          :props="{
            key: 'id',
            label: 'name'
          }"
        />
        <!-- <div class="select-content" /> -->
      </el-card>
    </div>
  </div>
</template>

<script>
import { getPlugList } from '@/api/plug'
import { updateTask } from '@/api/task'
import { getMerchantDeviceList } from '@/api/device'
import Empty from '@/components/Empty'

export default {
  components: {
    Empty
  },
  data() {
    return {
      filterMethod(query, item) {
        return item.name.indexOf(query) > -1
      },
      form: {
        type: '',
        devices: [],
        name: '',
        plugId: '',
        pushType: 1,
        content: '',
        operTime: ''
      },
      map: {
        status: {
          0: '离线',
          1: '在线'
        },
        workStatus: {
          0: '未工作',
          1: '工作中'
        }
      },
      plugList: {
        index: -1,
        viewInfoShow: false,
        array: [],
        viewInfo: [],
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      },
      deviceList: {
        selectedArray: [],
        array: [],
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      }
    }
  },
  computed: {
    selectedPlug() {
      if (this.plugList.array[this.plugList.index]) {
        return this.plugList.array[this.plugList.index]
      }
      return {}
    }
  },
  created() {
    this.getPlugList()
    this.getDeviceList()
  },
  methods: {
    handleSubmit() {
      const _form = Object.assign({}, this.form)
      _form.name = this.selectedPlug.operMsg
      _form.plugId = this.plugList.array[this.plugList.index].id
      _form.content = {
        // content: JSON.stringify(this.plugList.viewInfo),
        packageNames: this.selectedPlug.packageNames,
        operType: this.selectedPlug.operType,
        operMsg: this.selectedPlug.operMsg,
        operTime: _form.operTime,
        type: _form.type,
        isExitThirdAPP: false,
        isAttention: false
      }
      this.plugList.viewInfo.forEach(item => {
        _form.content[item.value] = item.keyValue
      })
      _form.content = JSON.stringify(_form.content)
      _form.devices = this.deviceList.selectedArray.join(',')
      updateTask(_form).then(res => {
        this.$message.success(res.message)
      })
    },
    selectPlug(index) {
      this.plugList.index = index
      const _viewInfo = JSON.parse(this.plugList.array[index].viewInfo) || []
      if (Array.isArray(_viewInfo) && _viewInfo.length) {
        _viewInfo.forEach(item => {
          item.keyValue = ''
        })
      }
      this.plugList.viewInfo = _viewInfo
    },
    handleSelectionChange: function(val) {
      this.deviceList.selectedArray = val
    },
    getPlugList() {
      const _form = {
        pageNo: this.plugList.pager.index,
        pageSize: this.plugList.pager.size
      }
      getPlugList(_form).then(response => {
        const { total, records } = response.result
        this.plugList.pager.total = total || 0
        this.plugList.array = records || []
      })
    },
    plugLoad() {
      if (this.plugList.pager.total === this.plugList.array.length) return
      const _form = {
        pageNo: this.plugList.pager.index++,
        pageSize: this.plugList.pager.size
      }
      getPlugList(_form).then(response => {
        const { total, records } = response.result
        this.plugList.pager.total = total || 0
        this.plugList.array = this.plugList.array.concat(records || [])
      })
    },
    getDeviceList() {
      getMerchantDeviceList().then(response => {
        const { total, result } = response
        this.deviceList.pager.total = total || 0
        this.deviceList.array = result || []
      })
    }
    // deviceLoad() {
    //   if (this.deviceList.pager.total === this.deviceList.array.length) return
    //   const _form = {
    //     pageNo: this.deviceList.pager.index++,
    //     pageSize: this.deviceList.pager.size
    //   }
    //   getDeviceList(_form).then(response => {
    //     const { total, records } = response.result
    //     this.deviceList.pager.total = total || 0
    //     this.deviceList.array = this.deviceList.array.concat(records || [])
    //   })
    // }
  }
}
</script>

<style lang="scss">
.select-content{
  background: #eee;
  height:400px;
  padding: 10px;
  overflow-y: auto;
  border-radius: 4px;
  border: 1px solid #ddd;
  position: relative;
}
.plug-border{
  border: 1px solid #333;
}
.plug-card{
    text-align: center;
    height: 135px;
    position:relative;
    &:hover{
        transform: scale(1.05);
    }
}
</style>
