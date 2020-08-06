<template>
  <div class="app-contanier">
    <el-button size="mini" @click="showDialog('add')">创建</el-button>
    <el-row :gutter="5">
      <el-col v-for="card in mainTable.array" :key="card.card_id" :xl="4" :lg="6" :md="8" :sm="12" :xs="24" style="margin-bottom:5px">
        <el-card class="test">
          <div style="text-align: right">
            <el-dropdown trigger="click">
              <i class="el-icon-more" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="showDialog('edit', card)">编辑</el-dropdown-item>
                <el-dropdown-item @click.native="deleteCard(card.card_id)">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>
            <img :src="map.cardType[card.card_type].icon" width="40px" height="40px" alt="">
            <div style="width: calc(100% - 50px);display:inline-block;line-height: 20px;padding-left:10px">
              <div class="text-overflow" :title="card.content.text">{{ card.content.text }}</div>
              <div class="card-type">{{ map.cardType[card.card_type].name }}</div>
            </div>
          </div>
          <hr>
          <div style="height: 150px;font-size:14px;overflow-y: auto;overflow-x:hidden">
            <div v-for="(question,index) in card.content.questions" :key="index" style="margin:8px 0">
              <el-row :gutter="5">
                <el-col :span="12" style="color: #999">
                  {{ question.name }}：
                </el-col>
                <el-col :span="12">
                  {{ question.text }}
                </el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="创建卡片" width="500px" :visible.sync="dialogVisible.card" center>
      <el-form size="mini" label-width="80px">
        <el-form-item label="问题文案">
          <el-input v-model="mainTable.form.text" />
        </el-form-item>
        <el-row v-for="(question, index) in mainTable.form.questions" :key="index" :gutter="5">
          <el-col :span="12">
            <el-form-item label="问题名">
              <el-input v-model="question.name" />
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="关键词">
              <el-input v-model="question.text" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer">
        <el-button size="mini" type="primary" @click="handleSubmit">提交</el-button>
        <el-button
          size="mini"
          @click="mainTable.form.questions.push({
            text: '',
            name:''
          })"
        >新增问题</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getCardList, updateCard, deleteCard } from '@/api/comment'
export default {
  data() {
    return {
      map: {
        cardType: {
          question_list: {
            name: '问题列表',
            icon: require('../../static/问号.png')
          },
          h5: {
            name: 'H5卡片类型',
            icon: require('../../static/h5.png')
          }
        }
      },
      dialogVisible: {
        card: false
      },
      mainTable: {
        loading: false,
        array: [],
        form: {
          text: '',
          questions: [{
            text: '',
            name: ''
          }]
        },
        row: {},
        pager: {
          index: 1,
          total: 0,
          size: 10
        }
      }
    }
  },
  created() {
    this.getMainData()
  },
  methods: {
    deleteCard(card_id) {
      this.$confirm('确定要删除该消息卡片吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        deleteCard({
          userId: this.$route.params.userId,
          card_id
        }).then(response => {
          this.$message.success(response.message || '删除成功')
          this.getMainData()
        })
      })
    },
    showDialog(type, item = {}) {
      this.initForm()
      this.mainTable.row = item
      if (type === 'edit') {
        this.$tool.copyObj(this.mainTable.form, item.content)
      }
      this.dialogVisible.card = true
    },
    initForm() {
      this.mainTable.form = {
        text: '',
        questions: [{
          text: '',
          name: ''
        }]
      }
    },
    handleSubmit() {
      const { questions } = this.mainTable.form
      for (let i = 0; i < questions.length; i++) {
        if (!questions[i].name && !questions[i].text) {
          questions.splice(i, 1)
          i--
        }
      }
      updateCard({
        card_id: this.mainTable.row.card_id,
        content: JSON.stringify(this.mainTable.form),
        userId: this.$route.params.userId
      }).then(res => {
        this.$message.success(res.mes || '提交成功')
        this.getMainData()
        this.dialogVisible.card = false
      })
    },
    getMainData() {
      this.mainTable.loading = true
      const _form = {
        cursor: this.mainTable.pager.index,
        count: this.mainTable.pager.size,
        userId: this.$route.params.userId
      }
      getCardList(_form).then(response => {
        if (Array.isArray(response.cards)) {
          response.cards.map(card => {
            try {
              card.content = JSON.parse(card.content)
            } catch (err) {
              console.log(err)
            }
          })
        }
        this.mainTable.array = response.cards || []
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
}
.card-type{
  font-size: 12px;
  color: #ccc;
}
// .test{
//   &:hover{
//     transform: rotateZ(6deg);
//   }
// }
</style>
