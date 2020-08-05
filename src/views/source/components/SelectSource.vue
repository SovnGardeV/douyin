<template>
  <div>
    <div style="padding: 10px ">
      <span style="font-size:14px">{{ name }}</span>:
      <div style="display: inline-block">
        <el-radio-group v-model="group" size="mini">
          <el-radio-button :label="false">素材</el-radio-button>
          <el-radio-button :label="true">素材组</el-radio-button>
        </el-radio-group>
        <div v-if="!group" style="display: inline-block">
          <el-select v-model="sourceItem" size="mini">
            <el-option v-for="(item, index) in allSourceList" :key="index" :label="item.name" :value="index" />
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
          <div v-if="item.type === 1" style="word-break: break-all" v-html="item.sourceContent.replace(/\n/g,'<br>')" />
          <img v-else :src="item.sourceContent" width="90%" alt="[该图片无法显示]">
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
    isMessages: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      group: false,
      content: [],
      sourceItem: '',
      sourceGroupItem: '',
      sourceList: [],
      allSourceList: [],
      sourceMap: {},
      sourceGroupContentMap: {}
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
      const res = await getSource({ flag: this.isMessages })
      this.allSourceList = res.result || []
    },
    async getSource(groupName) {
      if (!this.sourceGroupContentMap[groupName]) {
        const res = await getSource({ groupName, flag: this.isMessages })
        this.sourceGroupContentMap[groupName] = res.result || []
      }

      this.sourceList = this.sourceGroupContentMap[groupName]
    },
    async appendGroupContent(val) {
      await this.getSource(val)
      this.firstGetSourceList = false
      if (this.sourceList.length === 0) this.$message.info('该素材组为空')
      this.content = this.content.concat(this.sourceList)

      this.$emit('source', this.handleSourceContent(this.content))
    },
    appendContent(val) {
      if (typeof val !== 'number') return
      this.content.push(this.allSourceList[val])
      this.$emit('source', this.handleSourceContent(this.content))
    },
    handleSourceContent(ctx) {
      const _array = []
      if (Array.isArray(ctx)) {
        ctx.forEach(item => {
          _array.push(item.sourceContent)
        })
      }
      return _array
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
