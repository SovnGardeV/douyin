<template>
  <div>
    <el-popover
      placement="top"
      width="400"
      trigger="click"
    >
      <div>
        <!-- <span v-for="(value,key) in emojis" :key="key">{{ key }}</span> -->
        <img v-for="(value,key) in emojis" :key="key" :src="value" width="24" alt="" class="biaoqing-img" :title="key" @click="handleEmit(key,value)">
      </div>
      <i slot="reference" class="douyin-icon douyin-iconbiaoqing biaoqing-icon" />
    </el-popover>
  </div>
</template>

<script>
import emojis from '@/utils/douyinEmoji'
export default {
  name: 'SelectEmoji',
  data() {
    return {
      emojis
    }
  },
  methods: {
    handleEmit(label, icon) {
      this.$emit('get-emoji', { label: `[${label}]`, icon })
    }
  }
}
</script>

<style>
.biaoqing-img{
    cursor: pointer;
    margin: 0 4px;
}
.biaoqing-icon{
    position: absolute;
    right: 40px;
    top: 5px;
    font-size: 18px;
    cursor: pointer;
    outline: none;
}
</style>
