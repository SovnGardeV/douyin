<template>
  <div class="dashboard-container">
    <el-row :gutter="10" style="margin-bottom: 10px">
      <el-col v-for="(value, key) in map.douyin" :key="key" style="width: 20%; text-align: center">
        <div class="data-container">
          <div>{{ value }}</div>
          <div :id="key" class="data-value">{{ data[key] || 0 }}</div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col v-for="(value, key) in map.port" :key="key" :span="8" style="text-align: center">
        <div class="data-container">
          <div>{{ value }}</div>
          <div :id="key" class="data-value">{{ data[key] || 0 }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getIndexData } from '@/api/device'
import { numRunFun } from '@/utils/index'
import randomcolor from 'randomcolor'

export default {
  name: 'Dashboard',
  data() {
    return {
      map: {
        douyin: {
          fansNum: '总粉丝数',
          followNum: '总关注数',
          praiseNum: '总点赞数',
          likeNum: '总喜欢数',
          videoNum: '总视频数'
        },
        port: {
          all_count: '端口总数',
          no_use_count: '空闲端口数',
          use_count: '已使用端口数'
        }
      },
      data: {}
    }
  },
  created() {
    this.getIndexData()
  },
  methods: {
    getIndexData() {
      getIndexData().then(res => {
        const { result } = res
        const _keys = Object.keys(result)
        _keys.forEach(key => {
          if (document.querySelector(`#${key}`)) {
            const dom = document.querySelector(`#${key}`)
            const lineColor = randomcolor({
              luminosity: 'light',
              hue: 'blue'
            })

            dom.style.color = lineColor

            numRunFun(0, result[key], dom)
          }
        })

        this.data = result
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.data-container {
  border-radius: 4px;
  padding: 10px;
  border: 1px solid #eee;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  // background: #ecf0f3;
  transition: .2s;
}
.data-value{
  font-family: fantasy;
  font-size: 48px;
  line-height: 80px;
}
</style>
