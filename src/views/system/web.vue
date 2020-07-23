<template>
  <div class="app-contanier">
    <el-row :gutter="15">
      <el-col :span="5">
        <div v-for="(value,key) in map.type" :key="key" class="type-item" :class="activeItem === key ? 'active-item' : ''" @click="activeItem = key; getMainTableData()">
          {{ value }}
        </div>
      </el-col>
      <el-col :span="19">
        <div style="text-align: right;margin-bottom: 10px">
          <el-button size="mini" type="primary" @click="showDialog('add')">新增</el-button>
          <el-button size="mini" type="danger" @click="deleteSystemSource">删除</el-button>
        </div>
        <el-table
          ref="mainTable"
          v-loading="mainTable.loading"
          :data="mainTable.array"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            align="center"
          />
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
          <!-- <el-table-column
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
          </el-table-column> -->
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
              <el-button size="mini" @click="showDialog('edit', scope.row)">编辑</el-button>
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

    <el-dialog :title="`${type === 'add' ? '新增' : '编辑'}系统素材`" :visible.sync="dialogVisible.source" center width="500px">
      <el-form v-loading="mainTable.formLoading" size="mini" label-width="80px" center>
        <el-form-item label="标题">
          <el-input v-model="mainTable.form.title" />
        </el-form-item>
        <el-form-item label="资源">
          <input id="system-source" type="file" @change="uploadSource">
        </el-form-item>
        <el-form-item label="单位">
          <el-input v-model="mainTable.form.unit" disabled />
        </el-form-item>
        <el-form-item label="下载链接">
          <el-input v-model="mainTable.form.downloadUrl" disabled>
            <a v-if="mainTable.form.downloadUrl" slot="append" title="点击下载素材" :href="mainTable.form.downloadUrl" target="_blank" rel="noopener noreferrer">
              <el-button>下载</el-button>
            </a>
          </el-input>

        </el-form-item>
        <el-form-item label="资源包大小">
          <el-input v-model="mainTable.form.size" disabled type="number" min="1" />
        </el-form-item>
        <el-form-item label="文案内容">
          <el-input v-model="mainTable.form.textContent" type="textarea" :rows="4" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" size="mini" @click="handleSubmit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getSystemSourceTypeBySort, getSystemSourceByType, getSystemSourceTextById, updateSystemSource, uploadSystemSource, deleteSystemSource } from '@/api/system'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      type: '',
      activeItem: '1',
      dialogVisible: {
        source: false
      },
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
        formLoading: false,
        multipleSelection: [],
        array: [],
        row: {},
        form: {
          title: '',
          downloadUrl: '',
          type: '',
          unit: '',
          sort: '',
          size: '',
          textContent: ''
        },
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
    deleteSystemSource() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的系统素材')
        return
      }
      this.$confirm('确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = []
        this.mainTable.multipleSelection.forEach(item => {
          ids.push(item.id)
        })
        ids = ids.join(',')
        deleteSystemSource({ ids }).then(res => {
          this.$message.success(res.message)
          this.getMainTableData()
        })
      })
    },
    async showDialog(type, item = {}) {
      this.mainTable.formLoading = true
      this.dialogVisible.source = true
      this.type = type
      this.mainTable.row = item || {}
      this.$tool.initForm(this.mainTable.form)
      if (type === 'edit') {
        const { result } = await getSystemSourceTextById({ id: item.id })
        this.$tool.copyObj(this.mainTable.form, result)
      }
      this.mainTable.formLoading = false
    },
    uploadSource(e) {
      const { files } = e.target
      if (files.length) {
        this.mainTable.formLoading = true
        const formData = new FormData()
        formData.append('file', files[0])
        uploadSystemSource(formData).then(res => {
          this.mainTable.form.downloadUrl = res.result.download_url
          this.mainTable.form.unit = res.result.unit
          this.mainTable.form.size = res.result.size
        }).finally(() => {
          this.mainTable.formLoading = false
        })
      }
    },
    handleSubmit() {
      const _form = Object.assign({
        id: this.mainTable.row.id
      }, this.mainTable.form)
      _form.type = this.activeItem
      _form.sort = 2
      updateSystemSource(_form, this.type).then(res => {
        this.$message.success(res.message)
        this.dialogVisible.source = false
        this.getMainTableData()
      })
    },
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
      getSystemSourceTypeBySort({ sort: 2 }).then(res => {
        this.typeList = res.result || []
      })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index - 1,
        pageSize: this.mainTable.pager.size,
        type: this.activeItem,
        sort: 2
      }
      getSystemSourceByType(_form).then(res => {
        this.mainTable.pager.total = res.data || 0
        this.mainTable.array = res.rows || []
      }).finally(_ => {
        this.mainTable.loading = false
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
