<template>
  <div>
    <span style="font-size: 14px">{{ name }}</span>
    <div v-if="!isEdit" style="display:inline-block">
      <el-button size="mini" icon="el-icon-edit-outline" type="primary" style="padding: 4px" @click="isEdit = !isEdit" />
    </div>
    <div v-else style="display:inline-block">
      <el-button size="mini" icon="el-icon-plus" type="primary" style="padding: 4px" @click="douyinList.push({value:''})" />
      <el-button size="mini" icon="el-icon-check" type="primary" style="padding: 4px;margin-left: 0" @click="handleSaveDouyinList" />
    </div>
    <el-row class="douyin-list">
      <el-col v-for="(item, index) in douyinList" :key="index" style="margin: 4px 0">
        <span v-if="!isEdit">
          {{ item.value }}
          <el-divider style="margin: 8px" />
        </span>
        <div v-else style="position: relative">
          <el-input v-model="item.value" class="douyin-input" size="small" />
          <i class="el-icon-delete douyin-input-delete" @click="douyinList.splice(index, 1)" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      douyinList: [{ value: '默认账号' }],
      isEdit: true,
      tiktok: ''
    }
  },
  methods: {
    handleSaveDouyinList() {
      const arr = []
      for (let i = 0; i < this.douyinList.length; i++) {
        if (this.douyinList[i].value) {
          arr.push(this.douyinList[i].value)
        } else {
          this.douyinList.splice(i, 1)
          i--
        }
      }
      this.tiktok = arr.join(',')
      this.isEdit = !this.isEdit
      this.$emit('douyin', this.tiktok)
    }
  }
}
</script>

<style lang="scss" scoped>
.douyin-list{
    padding:10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-height: 240px;
    overflow-y: auto;
    margin-top: 10px;
    width: 50%;
}
.el-divider--horizontal{
    margin: 8px 0 !important;
}
.douyin-input{
    position: relative;
    width: 92%;
}
.douyin-input-delete{
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    color: #F56C6C;
}
</style>
