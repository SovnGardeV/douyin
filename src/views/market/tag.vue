<template>
  <div class="app-contanier">
    <div style="margin:10px 0;text-align:right">
      <el-button size="mini" type="primary" @click="showDialog('add')">新增</el-button>
      <el-button size="mini" type="danger" @click="deleteTags">删除</el-button>
    </div>
    <el-table
      ref="mainTable"
      v-loading="mainTable.loading"
      :data="mainTable.array"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        align="center"
        type="selection"
      />
      <el-table-column
        align="center"
        label="标签名"
        prop="name"
      />
      <el-table-column
        align="center"
        label="营销用户总数"
        prop="num"
      />
      <el-table-column
        align="center"
        label="未冻结数"
        prop="useNum"
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

    <el-dialog :title="`${type==='add' ? '新增':'编辑'}标签`" :visible.sync="dialogVisible.tag" center width="400px">
      <el-form v-loading="mainTable.formLoading" element-loading-text="上传中" size="mini" label-width="100px" center>
        <el-form-item label="标签名">
          <el-input v-model="mainTable.form.tagName" />
        </el-form-item>
        <el-form-item v-if="role === 'admin'" label="营销用户总数">
          <el-input v-model="mainTable.form.tagName" />
        </el-form-item>
        <el-form-item v-if="role === 'admin'" label="未冻结数">
          <el-input v-model="mainTable.form.tagName" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button size="small" type="primary" @click="handleSubmit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getTagList, updateTag, deleteTags } from '@/api/yuser'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      type: '',
      dialogVisible: {
        tag: false
      },
      mainTable: {
        loading: false,
        formLoading: false,
        multipleSelection: [],
        array: [],
        row: {},
        form: {
          tagName: '',
          useNum: '',
          num: ''
        },
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      }
    }
  },
  computed: {
    role() {
      return localStorage.getItem('loginType')
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    deleteTags() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的标签')
        return
      }
      this.$confirm('确定要删除这些标签吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.multipleSelection.forEach(app => {
          ids.push(app.id)
        })
        ids = ids.join(',')
        deleteTags({
          ids
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
      })
    },
    handleSubmit() {
      const _form = Object.assign({
        id: this.mainTable.row.id
      }, this.mainTable.form)
      updateTag(_form, this.type).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
        this.dialogVisible.tag = false
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
    showDialog(type, item = {}) {
      this.type = type
      this.mainTable.row = item
      this.$tool.initForm(this.mainTable.form)
      if (type === 'edit') {
        this.$tool.copyObj(this.mainTable.form, item)
        Object.assign(this.mainTable.form, { tagName: item.name })
      }

      this.dialogVisible.tag = true
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      getTagList(_form).then(res => {
        const { result } = res
        this.mainTable.pager.total = result.total || 0
        this.mainTable.array = result.records || []
        // this.mainTable.array = [{}]
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }
}
</script>

<style>
.app-contanier{
    padding: 20px;
    height: 100%;
    overflow: auto;
}
</style>
