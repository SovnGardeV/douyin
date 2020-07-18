<template>
  <div>
    <div style="padding: 10px ">
      <span style="font-size:14px">{{ name }}</span>:
      <div style="display: inline-block">
        <el-radio-group v-model="isGroup" size="mini">
          <el-radio-button :label="false">素材</el-radio-button>
          <el-radio-button :label="true">素材组</el-radio-button>
        </el-radio-group>
        <div v-if="!isGroup" style="display: inline-block">
          <el-select v-model="sourceItem" size="mini">
            <el-option v-for="(item, index) in allSourceList" :key="index" :label="item" :value="item" />
          </el-select>
          <el-button size="mini" icon="el-icon-plus" type="primary" @click="appendContent(sourceItem)" />
        </div>
        <div v-else style="display: inline-block">
          <el-select v-model="sourceGroupItem" size="mini">
            <el-option v-for="(value, key) in sourceMap" :key="key" :label="value" :value="value" />
          </el-select>
          <el-button size="mini" icon="el-icon-plus" type="primary" @click="appendGroupContent(sourceGroupItem)" />
        </div>
      </div>
    </div>
    <div class="source-box">
      <div v-for="(item,index) in content" :key="index" class="source-content">
        <i class="el-icon-close" style="position: absolute; right: 10px; top: 10px" @click="content.splice(index, 1)" />
        <div style="width: 90%">
          <div style="word-break: break-all">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSource, getSourceMap } from '@/api/source'
export default {
  name: 'SelectSource',
  props: {
    name: {
      type: String,
      required: true
    },
    group: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isGroup: false,
      content: [],
      sourceItem: '',
      sourceGroupItem: '',
      sourceList: [],
      allSourceList: [],
      sourceMap: {}
    }
  },
  created() {
    this.getSourceMap()
    this.getAllSource()
    // this.getSource()
  },
  methods: {
    getSourceMap() {
      getSourceMap().then(res => {
        const { result } = res
        const _map = result.reduce((total, currentIndex) => {
          return Object.assign(total, currentIndex)
        })
        this.sourceMap = _map
      })
    },
    async getAllSource() {
      const res = await getSource()
      this.allSourceList = res.result || []
    },
    async getSource(groupName) {
      const res = await getSource({ groupName })
      this.sourceList = res.result || []
    },
    async appendGroupContent(val) {
      await this.getSource(val)
      this.firstGetSourceList = false
      if (this.sourceList.length === 0) this.$message.info('该素材组为空')
      this.content = this.content.concat(this.sourceList)

      this.$emit('source', this.content)
    },
    appendContent(val) {
      this.content.push(val)

      this.$emit('source', this.content)
    }
  }
}
</script>

<style lang="scss" scoped>
.source-box {
    width:100%;
    height: 300px;
    overflow-y:auto;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 10px;
}
.source-content{
    width: 100%;
    border-radius: 4px;
    background: #303133;
    margin-bottom: 10px;
    padding: 10px;
    color: #fff;
    position: relative;
}
</style>
