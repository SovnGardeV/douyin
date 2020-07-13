<template>
  <div style="background: #eee;min-height:100%">
    <div class="app-container">
      <div class="content-container">
        <el-form size="mini" :inline="true">
          <el-form-item>
            <el-input v-model="mainTable.filter.packageNames" placeholder="请输入插件名" />
          </el-form-item>
          <el-button size="mini" type="primary" icon="el-icon-search" @click="getMainTableData">搜索</el-button>
        </el-form>
      </div>
      <div class="content-container" style="padding-top: 0">
        <h3>插件管理
          <el-checkbox v-model="checkedAll" label="全选" style="margin-left: 20px" border size="mini" />
          <div style="float:right">

            <el-button size="mini" icon="el-icon-plus" type="primary" @click="showDialog('add')">新增</el-button>
            <el-button size="mini" icon="el-icon-delete" type="danger" @click="deleteGroupDevice">删除</el-button>
          </div>
        </h3>
        <el-row :gutter="5">
          <el-col v-for="plug in mainTable.array" :key="plug.id" :span="4">
            <el-card :class="plug.checked ? 'border-plug' : ''" class="plug-card" @click.native="plug.checked = !plug.checked">
              <el-popover placement="right" width="260">
                <div>
                  <div v-for="(value, key) in map.name" :key="key" style="margin: 5px 0" v-text="`${value}：${map.trueOrFalse[plug[key]] || plug[key]}`" />
                </div>
                <i slot="reference" class="el-icon-more plug-check" />
              </el-popover>
              <div>
                <img :src="plug.logo" width="50px" height="50px" alt="">
                <div style="margin: 10px 0">{{ plug.operMsg }}</div>
                <div>
                  <el-button size="mini" style="padding: 5px 8px" @click.stop="showDialog('edit', plug)">编辑</el-button>
                  <el-button size="mini" style="padding: 5px 8px;margin-left:2px">使用</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <pagination
          :pager-size="mainTable.pager.size"
          :pager-index="mainTable.pager.index"
          :pager-total="mainTable.pager.total"
          @pagination-change="handlePagerChange"
        />

        <el-dialog :title="`${type === 'add' ? '新建' : '编辑'}插件`" :width="mainTable.form.web === '1' ? '700px' : '350px'" :visible.sync="dialogVisible.plug" center>

          <el-row :gutter="15">
            <el-col :span="mainTable.form.web === '1' ? 12 : 24">
              <el-form size="mini" label-width="100px">
                <el-form-item label="图标">
                  <div
                    v-loading="mainTable.loading"
                    class="upload-source"
                    element-loading-text="上传中"
                    element-loading-spinner="el-icon-loading"
                  >
                    <div v-if="!mainTable.form.logo" class="upload-source-tip" @click="fakeUploadClick('img')">
                      <i class="el-icon-plus" />
                    </div>
                    <img v-else style="width:100%;height:100%" :src="mainTable.form.logo" alt="" @click="fakeUploadClick('img')">
                  </div>
                </el-form-item>
                <el-form-item label="插件名">
                  <el-input v-model="mainTable.form.operMsg" placeholder="请输入插件名" />
                </el-form-item>
                <el-form-item label="操作类型">
                  <el-input v-model="mainTable.form.operType" placeholder="请输入操作类型" />
                </el-form-item>
                <el-form-item label="应用包名">
                  <el-input v-model="mainTable.form.packageNames" placeholder="请输入应用包名" />
                </el-form-item>
                <el-form-item label="插件版本">
                  <el-input v-model="mainTable.form.edition" placeholder="请输入插件版本" />
                </el-form-item>
                <el-form-item label="需要辅助引擎">
                  <el-select v-model="mainTable.form.engine">
                    <el-option
                      v-for="(value, key) in map.trueOrFalse"
                      :key="key"
                      :value="key"
                      :label="value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="需要root">
                  <el-select v-model="mainTable.form.root">
                    <el-option
                      v-for="(value, key) in map.trueOrFalse"
                      :key="key"
                      :value="key"
                      :label="value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="需要素材">
                  <el-select v-model="mainTable.form.source">
                    <el-option
                      v-for="(value, key) in map.trueOrFalse"
                      :key="key"
                      :value="key"
                      :label="value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="需要数据源">
                  <el-select v-model="mainTable.form.dataSource">
                    <el-option
                      v-for="(value, key) in map.trueOrFalse"
                      :key="key"
                      :value="key"
                      :label="value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="设备数据过滤">
                  <el-input v-model="mainTable.form.dataFilter" placeholder="请输入设备数据过滤" />
                </el-form-item>
                <el-form-item label="需要web视图">
                  <el-select v-model="mainTable.form.web">
                    <el-option
                      v-for="(value, key) in map.trueOrFalse"
                      :key="key"
                      :value="key"
                      :label="value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="作者">
                  <el-input v-model="mainTable.form.author" placeholder="请输入作者" />
                </el-form-item>
              </el-form></el-col>
            <el-col :span="mainTable.form.web === '1' ? 12 : 0" style="max-height:610px;overflow-y:auto;">
              <el-form size="mini">
                <h4 style="margin: 0 0 20px 0">自定义web视图</h4>
                <el-form-item v-for="(item, index) in viewInfoList.array" :key="index">
                  <el-row :gutter="5">
                    <el-col :span="22">
                      <el-input v-model="item.key" style="margin-bottom: 4px" placeholder="请输入中文描述符" />
                      <el-input v-model="item.value" placeholder="请输入英文描述符" />
                    </el-col>
                    <el-col :span="2">
                      <i class="el-icon-delete" style="color:red;cursor:pointer" @click="viewInfoList.array.splice(index,1)" />

                    </el-col>
                  </el-row>
                </el-form-item>
              </el-form>
              <div style="text-align: center">
                <el-button icon="el-icon-plus" size="mini" type="primary" @click="viewInfoList.array.push({ key: '', value: '' })" />
              </div>
            </el-col>
          </el-row>

          <div slot="footer">
            <el-button size="mini" @click="dialogVisible.plug = false">取 消</el-button>
            <el-button size="mini" type="primary" @click="handleSubmit">提 交</el-button>
          </div>
          <input type="file" style="visibility:hidden;position:absolute;left:0;top:0;z-index:0" @change="uploadSource">
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { getPlugList, updatePlug, deletePlug } from '@/api/plug'
import { uploadSource } from '@/api/source'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      type: '',
      viewInfoList: {
        array: [{ key: '', value: '' }]
      },
      checkedAll: false,
      map: {
        trueOrFalse: {
          0: '否',
          1: '是'
        },
        source: {},
        type: {
          1: '文本',
          2: '图片',
          3: '视频',
          4: '链接+图片',
          5: '图片+文字',
          6: '视频+文字',
          7: '图片+文字+链接'
        },
        name: {
          operMsg: '插件名',
          operType: '操作类型',
          packageNames: '应用包名',
          id: '唯一标识',
          edition: '插件版本',
          dataSource: '需要数据源',
          engine: '需要辅助引擎',
          root: '需要root',
          source: '需要素材',
          web: '需要web视图',
          author: '作者',
          expiredTime: '到期时间'
        }
      },
      dialogVisible: {
        plug: false
      },
      mainTable: {
        loading: false,
        selectedArray: [],
        filter: {
          packageNames: ''
        },
        form: {
          author: '',
          dataFilter: '',
          dataSource: '',
          edition: '',
          engine: '',
          expiredTime: '',
          logo: '',
          operMsg: '',
          operType: '',
          packageNames: '',
          root: '',
          source: '',
          viewInfo: '',
          web: ''
        },
        array: [],
        row: {},
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      }
    }
  },
  watch: {
    checkedAll(val) {
      this.mainTable.array.forEach(item => {
        item.checked = val
      })
    }
  },
  created() {
    this.getMainTableData()
  },
  methods: {
    fakeUploadClick() {
      const fileInput = document.querySelector('input[type=file]')
      fileInput.click()
    },
    uploadSource(e) {
      const { files } = e.target
      if (files.length) {
        this.mainTable.loading = true
        const formData = new FormData()
        formData.append('file', files[0])
        uploadSource(formData).then(res => {
          this.mainTable.form['logo'] = res.result
        }).finally(() => {
          this.mainTable.loading = false
        })
      }
    },
    deleteGroupDevice() {
      this.$confirm('确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = []
        this.mainTable.array.forEach(item => {
          if (item.checked) ids.push(item.id)
        })
        ids = ids.join(',')
        deletePlug({ ids }).then(res => {
          this.$message.success(res.message)
          this.getMainTableData()
        })
      })
    },
    showDialog(type, item = {}) {
      this.type = type
      this.mainTable.row = item
      this.$tool.initForm(this.mainTable.form)
      if (type === 'edit') {
        const _keys = Object.keys(item)
        _keys.forEach(key => {
          if (typeof item[key] === 'number') item[key] = item[key].toString()
        })
        this.$tool.copyObj(this.mainTable.form, item)

        const { viewInfo } = item
        let _viewInfo
        try {
          _viewInfo = JSON.parse(viewInfo)
        } catch (err) {
          console.log(err)
        }
        this.viewInfoList.array = _viewInfo || []
      }

      this.dialogVisible.plug = true
    },
    handleSelectionChange: function(val) {
      this.mainTable.selectedArray = val
    },
    handlePagerChange(val) {
      this.mainTable.pager.index = val.index
      this.mainTable.pager.size = val.size
      this.getMainTableData()
    },
    handleSubmit() {
      const _form = Object.assign({
        id: this.mainTable.row.id
      }, this.mainTable.form)
      if (_form.web === '1') {
        _form.viewInfo = JSON.stringify(this.viewInfoList.array)
      }
      updatePlug(_form, this.type).then(res => {
        this.$message.success(res.message)
        this.getMainTableData()
        this.dialogVisible.plug = false
      })
    },
    getMainTableData() {
      this.mainTable.loading = true
      const _filter = Object.assign({}, this.mainTable.filter)
      let _form = {
        pageNo: this.mainTable.pager.index,
        pageSize: this.mainTable.pager.size
      }
      _form = Object.assign(_form, _filter)
      getPlugList(_form).then(response => {
        const { total, records } = response.result
        if (Array.isArray(records)) {
          records.forEach(item => {
            item.checked = false
          })
        }
        this.mainTable.pager.total = total || 0
        this.mainTable.array = records || []
      }).finally(_ => {
        this.mainTable.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-source{
  border-radius: 4px;
  border: 1px dashed #ccc;
  width: 80px;
  height: 80px;
  cursor: pointer;
}
.upload-source-tip{
  text-align: center;
  transform: translateY(-50%);
  position: relative;
  top: 50%;
  font-size: 36px;
}
.plug-check{
    position: absolute;
    right: 2px;
    top: 5px;
    transform: rotate(90deg);
    cursor: pointer;
}
.border-plug{
    border: 1px solid #000;
}
.plug-card{
    text-align: center;
    height: 160px;
    position:relative;
    &:hover{
        transform: scale(1.05);
    }
}
</style>
