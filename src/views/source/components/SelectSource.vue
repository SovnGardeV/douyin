<template>
  <div>
    <div style="padding: 10px ">
      <span style="font-size:14px">{{ name }}</span>:
      <el-select v-model="sourceItem" size="mini">
        <el-option v-for="(source, index) in sourceList" :key="source.id" :label="source.name" :value="index" />
      </el-select>
      <el-button size="mini" icon="el-icon-plus" type="primary" @click="appendContent(sourceItem)" />
    </div>
    <div class="source-box">
      <div v-for="(item,index) in content" :key="index" class="source-content">
        <i class="el-icon-close" style="position: absolute; right: 10px; top: 10px" @click="content.splice(index, 1)" />
        <div style="width: 90%">
          <div>{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSource } from '@/api/source'
export default {
  name: 'SelectSource',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      content: [],
      sourceItem: '',
      sourceList: []
    }
  },
  created() {
    this.getSource()
  },
  methods: {
    getSource() {
      getSource().then(res => {
        this.sourceList = res.result
      })
    },
    appendContent(val) {
      const { sourceContent, type } = this.sourceList[val]
      let _sourceContent = {}
      let _content
      try {
        _content = JSON.parse(sourceContent)
      } catch (err) {
        _content = sourceContent
      }

      switch (type) {
        case 1: {
          _sourceContent = _content
          break
        }
        case 2: {
          _sourceContent.imgUrl = _content
          break
        }
        case 3: {
          _sourceContent.videoUrl = _content
          break
        }
        default: {
          Object.assign(_sourceContent, _content)
          break
        }
      }

      this.content.push(_sourceContent)

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
