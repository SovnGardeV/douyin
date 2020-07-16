<template>
  <div class="app-contanier">
    <el-row :gutter="15">
      <el-col :span="5">
        <div v-for="(value,key) in map.type" :key="key" class="type-item" :class="activeItem === key ? 'active-item' : ''" @click="activeItem = key; getMainTableData()">
          {{ value }}
        </div>
      </el-col>
      <el-col :span="19">
        <el-table
          ref="mainTable"
          :loading="mainTable.loading"
          :data="mainTable.array"
          border
        >
          <el-table-column
            align="center"
            label="标题"
            prop="title"
          />
          <el-table-column
            align="center"
            label="类型"
          >
            <template slot-scope="scope">
              {{ map.type[scope.row.type] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="分类"
          >
            <template slot-scope="scope">
              {{ map.sort[scope.row.sort] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="资源包大小"
            prop="size"
          />
          <el-table-column
            align="center"
            label="单位"
            prop="unit"
          />
          <el-table-column
            align="center"
            label="文案内容"
          >
            <template slot-scope="scope">
              <el-popover
                placement="left"
                width="300"
                trigger="click"
              >
                <div v-if="textContent">{{ textContent }}</div>
                <div v-else style="text-align:center;color: #ccc">暂无数据</div>
                <el-button slot="reference" type="text" size="mini" @click.native="getSystemSourceTextById(scope.row.id)">详情</el-button>
              </el-popover>

            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="更新时间"
            prop="createTime"
          />
          <el-table-column
            align="center"
            label="操作"
          >
            <template slot-scope="scope">
              <a :href="scope.row.downloadUrl" target="_blank">
                <el-button size="mini" type="success">下载</el-button>
              </a>
            </template>
          </el-table-column>
        </el-table>
        <pagination
          :pager-size="mainTable.pager.size"
          :pager-index="mainTable.pager.index"
          :pager-total="mainTable.pager.total"
          @pagination-change="handlePagerChange"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getSystemSourceTypeBySort, getSystemSourceByType, getSystemSourceTextById } from '@/api/system'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      activeItem: '1',
      typeList: [],
      map: {
        type: {
          1: '每日热点素材',
          2: '抖音运营思路资料',
          3: '剧本资料',
          4: '影视',
          5: '摄影',
          6: '文案'
        },
        sort: {
          1: '系统素材库',
          2: '网站资源链接库'
        }
      },
      mainTable: {
        loading: false,
        multipleSelection: [],
        array: [],
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      }
    }
  },
  created() {
    this.getTypeMap()
    this.getMainTableData()
  },
  methods: {
    handleSelectionChange(val) {
      this.mainTable.multipleSelection = val
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getSystemSourceTextById(id) {
      getSystemSourceTextById({ id }).then(res => {
        this.textContent = res.result
      })
    },
    getTypeMap() {
      getSystemSourceTypeBySort({ sort: 1 }).then(res => {
        this.typeList = res.result || []
      })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size,
        type: this.activeItem
      }
      getSystemSourceByType(_form).then(res => {
        this.mainTable.pager.total = res.data || 0
        this.mainTable.array = res.rows || []
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-contanier{
    padding: 20px;
    height: 100%;
    overflow: auto;
}
.type-item{
    box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: .2s;
    font-size: 14px;
    &:hover{
        transform: scale(1.05);
    }
}
.active-item{
    color: #fff;
    background: #161823;
}
</style>
