<template>
  <div style="background: rgb(238, 238, 238);height: 100%">
    <div class="app-container">
      <div class="content-container">
        <div style="display: flex">
          <h3 style="flex: 1;margin: 10px 0">插件商品</h3>
          <div style="margin: 10px 0">
            <el-button size="mini" type="primary" @click="showDialog('add')">新增</el-button>
            <el-button size="mini" type="danger" @click="deleteAdmin">删除</el-button>
          </div>
        </div>
        <el-table
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
            label="商品名"
            prop="name"
          />
          <el-table-column
            align="center"
            label="应用包名"
            prop="packageNames"
          />
          <el-table-column
            align="center"
            label="价格"
            prop="price"
          />
          <el-table-column
            align="center"
            label="数量"
            prop="num"
          />
          <el-table-column
            align="center"
            label="是否可下单"
          >
            <template slot-scope="scope">
              {{ map.code[scope.row.code] }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            :width="$route.query.userId ? '180' : ''"
          >
            <template slot-scope="scope">
              <el-button size="mini" @click="showDialog('edit', scope.row)">编辑</el-button>
              <el-button v-if="$route.query.userId" size="mini" @click="showOrder(scope.row.id)">创建订单</el-button>
            </template>
          </el-table-column>
        </el-table>
        <pagination
          :pager-size="mainTable.pager.size"
          :pager-index="mainTable.pager.index"
          :pager-total="mainTable.pager.total"
          @pagination-change="handlePagerChange"
        />
      </div>

      <el-dialog :title="`${mode === 'add' ? '新增' : '编辑'}插件商品`" :visible.sync="dialogVisible.plug" width="400px" center>
        <el-form size="mini" label-width="100px" center>
          <el-form-item label="商品名">
            <el-input v-model="mainTable.form.name" />
          </el-form-item>
          <el-form-item label="应用包名">
            <el-input v-model="mainTable.form.packageNames" />
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="mainTable.form.price" type="number" />
          </el-form-item>
          <el-form-item label="数量">
            <el-input v-model="mainTable.form.num" type="number" />
          </el-form-item>
          <el-form-item label="是否可下单">
            <el-select v-model="mainTable.form.code">
              <el-option v-for="(value, key) in map.code" :key="key" :value="key" :label="value" />
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button size="mini" @click="dialogVisible.plug =false">取消</el-button>
          <el-button size="mini" type="primary" @click="handleSubmit">提交</el-button>
        </div>
      </el-dialog>

      <el-dialog title="创建插件订单" :visible.sync="dialogVisible.order" width="400px" center>
        <el-form size="mini" label-width="100px" center>
          <el-form-item label="数量">
            <el-input v-model="mainTable.orderForm.num" type="number" />
          </el-form-item>
          <el-form-item label="链接">
            <el-input v-model="mainTable.orderForm.url" />
          </el-form-item>
          <el-form-item label="评论内容">
            <el-input v-model="mainTable.orderForm.content" />
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button size="mini" @click="dialogVisible.order =false">取消</el-button>
          <el-button size="mini" type="primary" @click="handleOrder">提交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { queryPluginList, updatePlugin, deletePlugin, addMealOrder } from '@/api/plug'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      map: {
        code: {
          1: '是',
          2: '否'
        }
      },
      mode: '',
      dialogVisible: {
        plug: false,
        order: false
      },
      loading: false,
      mainTable: {
        loading: false,
        array: [],
        row: {},
        multipleSelection: [],
        form: {
          code: '',
          name: '',
          num: '',
          packageNames: '',
          price: '',
          typeId: this.$route.params.id
        },
        orderForm: {
          userId: this.$route.query.userId,
          plugId: '',
          num: '',
          content: '',
          url: ''
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
    this.getMainTableData()
  },
  methods: {
    handleSelectionChange(val) {
      this.mainTable.multipleSelection = val
    },
    deleteAdmin() {
      if (!this.mainTable.multipleSelection.length) {
        this.$message.info('请选择要删除的插件商品')
        return
      }
      this.$confirm('确定要删除这些插件商品吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        let ids = []
        this.mainTable.multipleSelection.forEach(log => {
          ids.push(log.id)
        })
        ids = ids.join(',')
        deletePlugin({
          ids
        }).then(response => {
          this.$message.success(response.message)
          this.getMainTableData()
        })
      })
    },
    showOrder(plugId) {
      this.$tool.initForm(this.mainTable.orderForm, ['userId'])
      this.mainTable.orderForm.plugId = plugId
      this.dialogVisible.order = true
    },
    showDialog(mode, item) {
      this.mainTable.row = item || {}
      this.$tool.initForm(this.mainTable.form, ['typeId'])
      if (mode === 'edit') {
        this.$tool.copyObj(this.mainTable.form, item)
      }
      this.dialogVisible.plug = true
      this.mode = mode
    },
    handleOrder() {
      addMealOrder(this.mainTable.orderForm).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
      })
    },
    async handleSubmit() {
      const _form = Object.assign({ id: this.mainTable.row.id }, this.mainTable.form)
      updatePlugin(_form, this.mode).then(res => {
        this.getMainTableData()
        this.$message.success(res.message)
        this.dialogVisible.plug = false
      })
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      queryPluginList(_form).then(res => {
        const { result = {}} = res
        this.mainTable.pager.total = result.total || 0
        this.mainTable.array = result.records || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }
}
</script>

<style>
</style>
