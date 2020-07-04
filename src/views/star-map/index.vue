<template>
  <div class="app-container">
    <div v-for="item in mainTable.array" :key="item.unique_id">
      <div>{{ item.rank }}</div>
    </div>
  </div>
</template>

<script>
import { getHost } from '@/api/star-map'
export default {
  data() {
    return {
      mainTable: {
        array: []
      }
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    getMainTableData() {
      getHost({ type: 1 }).then(res => {
        this.mainTable.array = [
          {
            'rank': 0,
            'nick_name': 'string',
            'tags': [
              'string'
            ],
            'follower': 0,
            'score': 80.6,
            'unique_id': 'string'
          }
        ]
      })
    }
  }
}
</script>

<style>

</style>
