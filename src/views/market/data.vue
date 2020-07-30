<template>
  <div style="background: #eee;height: 100%; overflow-y:auto">
    <div class="app-container">
      <el-card>
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">营销数据</h3>
        </div>
        <el-steps direction="vertical" :active="activeStep">
          <el-step title="搜索用户或视频">
            <div slot="description" style="padding: 10px 0">
              <el-radio-group v-model="mainTable.type" size="mini" style="margin-bottom: 10px">
                <el-radio-button :label="1">用户</el-radio-button>
                <el-radio-button :label="2">视频</el-radio-button>
              </el-radio-group>
              <div>
                <el-input v-model="mainTable.keyWord" size="mini" placeholder="关键词" style="width: unset" @keyup.enter="searchByKey">
                  <el-button slot="append" icon="el-icon-search" @click.native="searchByKey" />
                </el-input>
              </div>
            </div>
          </el-step>
          <el-step title="选择用户或视频">
            <div slot="description" style="padding: 10px 0">
              <div id="user-list" v-loading="users.loading" style="padding: 10px;border-radius: 4px; border: 1px solid #eee;max-height: 300px; overflow-y: auto;margin-bottom: 10px">
                <div v-if="users.list.length">
                  <el-row :gutter="5">
                    <el-col v-for="user in users.list" :key="user.uid" style="width: 80px;height:127px">
                      <div :class="users.select.uid === user.uid ? 'selected' : ''" class="market-content-container" @click="selectUser(user)">
                        <img width="100%" :src="user.cover" alt="">
                        <div class="text-overflow" style="font-size:16px" :title="user.nickname">
                          {{ user.nickname }}
                        </div>
                        <div>
                          <div style="width: 45%;display: inline-block">
                            <i class="el-icon-s-custom" :style="user.gender === 1 ? 'color: #409EFF': 'color:#ffb6c1'" />
                          </div>
                          <div style="width: 45%;display: inline-block;color: #ccc">
                            <span>{{ user.age }}</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <div style="text-align:center; color: #ccc;margin: 15px 0">
                    <span style="cursor:pointer" @click="loadMoreByKey">{{ users.hasMore ? '点击加载更多' : '已无更多' }}</span>
                  </div>
                </div>
                <empty v-else />
              </div>
              <div v-loading="videos.loading" style="padding: 10px;border-radius: 4px; border: 1px solid #eee;max-height: 530px; overflow-y: auto">
                <el-row v-if="videos.list.length" :gutter="5">
                  <el-col v-for="video in videos.list" :key="video.videoId" style="width: 150px;height:285px">
                    <div :class="videos.select.videoId === video.videoId ? 'selected' : ''" class="market-content-container" @click="videos.select = video; activeStep = 2">
                      <a :href="video.share_url" target="_blank">
                        <i class="el-icon-video-play fix-play-icon" />
                      </a>
                      <img width="100%" height="243" :src="video.cover" alt="">
                      <div class="text-overflow" style="font-size:16px" :title="video.share_title">
                        {{ video.share_title }}
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <empty v-else />
              </div>
            </div>
          </el-step>
          <el-step title="选择筛选区间">
            <div slot="description" style="padding: 10px 0">
              <div>
                <el-radio-group v-model="mainTable.attention" size="mini" style="margin-bottom: 10px" @change="getTableData">
                  <el-radio-button label="用户粉丝" />
                  <el-radio-button label="用户关注" />
                  <el-radio-button label="视频评论用户" />
                </el-radio-group>
                <el-button size="mini" icon="el-icon-refresh" type="primary" style="float:right" @click="getTableData(mainTable.attention)">
                  重新获取
                </el-button>
              </div>
              <el-table
                v-loading="subTable.loading"
                border
                :data="subTable.array"
              >
                <el-table-column
                  align="center"
                  label="昵称"
                  prop="nickname"
                />
                <el-table-column
                  align="center"
                  label="性别"
                >
                  <template slot-scope="scope">
                    {{ map.gender[scope.row.gender] }}
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="地区"
                >
                  <template slot-scope="scope">
                    {{ scope.row.country }} {{ scope.row.province }} {{ scope.row.city }}
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="作品数"
                  prop="awemeCount"
                />
                <el-table-column
                  align="center"
                  label="关注数"
                  prop="followingCount"
                />
                <el-table-column
                  align="center"
                  label="粉丝数"
                  prop="followerCount"
                />
              </el-table>
              <pagination
                :pager-size="subTable.pager.size"
                :pager-index="subTable.pager.index"
                :pager-total="subTable.pager.total"
                @pagination-change="handlePagerChange"
              />
              <div style="margin: 25px 0">
                <el-form size="mini">
                  <el-form-item label="年龄">
                    <el-input v-model="form.begin_age" type="number" min="0" style="width: 80px" /> ~
                    <el-input v-model="form.end_age" type="number" :min="form.begin_age" style="width: 80px" />
                  </el-form-item>
                  <el-form-item label="性别">
                    <el-radio-group v-model="form.gender">
                      <el-radio :label="1">男</el-radio>
                      <el-radio :label="2">女</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="地域">
                    <el-input v-model="form.country" placeholder="国家" style="width: 150px" />
                    <el-input v-model="form.province" placeholder="省" style="width: 150px" />
                    <el-input v-model="form.city" placeholder="市" style="width: 150px" />
                    <el-input v-model="form.district" placeholder="区" style="width: 150px" />
                  </el-form-item>
                  <!-- <el-form-item label="数据顺序">
                    <el-radio-group v-model="form.asc">
                      <el-radio :label="1">先入库</el-radio>
                      <el-radio :label="0">后入库</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="数据量">
                    <el-input v-model="form.num" type="number" min="0" style="width:90px" />
                  </el-form-item> -->
                  <el-button size="mini" type="primary" @click="queryUserList">筛选</el-button>
                </el-form>
              </div>
            </div>
          </el-step>
          <el-step title="添加标签">
            <div slot="description" style="padding: 10px 0">
              <div>筛选出用户 {{ finallyForm.total }} 名</div>
              <div>
                <el-tag
                  v-for="tag in dynamicTags"
                  :key="tag"
                  style="margin-right:6px"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)"
                >
                  {{ tag }}
                </el-tag>
                <el-input
                  v-if="inputVisible"
                  ref="saveTagInput"
                  v-model="inputValue"
                  class="input-new-tag"
                  size="small"
                  style="width: 100px"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm"
                />
                <el-button v-else class="button-new-tag" size="small" icon="el-icon-plus" @click="showInput">新增标签</el-button>
              </div>
            </div>
          </el-step>
        </el-steps>
        <div style="text-align: center">
          <el-button size="small" type="primary" @click="saveData">保存筛选数据</el-button>
          <el-button size="small" @click="Object.assign($data, $options.data())">重置</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { searchByKey, getVideoByUserId, getFollower, getFollowing, getCommentByVideoId, queryUserList, saveSelect } from '@/api/yuser'
import Pagination from '@/components/Pagination'
import Empty from '@/components/Empty'

export default {
  components: {
    Pagination,
    Empty
  },
  data() {
    return {
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      map: {
        gender: {
          1: '男',
          2: '女'
        }
      },
      users: {
        list: [],
        select: {},
        loading: false,
        hasMore: true,
        cursor: 0
      },
      videos: {
        list: [],
        select: {},
        loading: false,
        hasMore: true,
        cursor: 0
      },
      activeStep: 0,
      mainTable: {
        type: 1,
        keyWord: '',
        attention: ''
      },
      subTable: {
        loading: false,
        array: [],
        pager: {
          index: 0,
          total: 0
        }
      },
      form: {
        tableName: '',
        begin_age: '',
        city: '',
        country: '',
        district: '',
        end_age: '',
        gender: '',
        province: ''
        // asc: '',
        // num: ''
      },
      finallyForm: {
        total: 0,
        tableName: '',
        tagName: '',
        ids: '',
        result: []
      }
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      const inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    handlePagerChange(val) {
      this.getTableData(this.mainTable.attention)
    },
    queryUserList() {
      queryUserList(this.form).then(res => {
        const { result } = res
        const _array = []
        if (Array.isArray(result)) {
          result.forEach(item => {
            _array.push(item.shortId)
          })
        }
        this.finallyForm.result = _array || []
        this.finallyForm.total = res.result.length
        this.finallyForm.tableName = this.form.tableName
        this.activeStep = 3
      })
    },
    saveData() {
      const _form = Object.assign({}, this.finallyForm)
      _form.tagName = this.dynamicTags.join(',')
      _form.ids = _form.result.join(',')
      delete _form.total
      delete _form.result

      saveSelect(_form).then(res => {
        this.$message.success(res.message)
      })
    },
    selectUser(user) {
      this.users.select = user
      this.activeStep = 2
      this.getVideoByUserId(user.uid)
    },
    searchByKey() {
      const type = this.mainTable.type === 1 ? 'users' : 'videos'
      const form = this[type]
      form['loading'] = true
      form['cursor'] = 0
      const _form = {
        count: 20,
        cursor: form['cursor'],
        type: this.mainTable.type,
        word: this.mainTable.keyWord
      }
      searchByKey(_form).then(res => {
        form['list'] = res.data
        form['cursor'] = res.cursor
        form['hasMore'] = res.has_more
        this.activeStep = 1
      }).finally(_ => {
        form['loading'] = false
      })
    },
    loadMoreByKey() {
      const type = this.mainTable.type === 1 ? 'users' : 'videos'
      const form = this[type]
      const dom = document.querySelector('#user-list')
      dom.scrollTop = 0
      dom.style['overflow-y'] = 'hidden'
      if (!form['hasMore']) return
      form['loading'] = true
      const _form = {
        count: 20,
        cursor: form['cursor'],
        type: this.mainTable.type,
        word: this.mainTable.keyWord
      }
      searchByKey(_form).then(res => {
        form['list'] = form['list'].concat(res.data)
        form['cursor'] = res.cursor
        form['hasMore'] = res.has_more
        this.activeStep = 1
        this.$nextTick(_ => {
          dom.style['overflow-y'] = 'auto'
          dom.scrollTop = dom.scrollHeight - dom.clientHeight
        })
      }).finally(_ => {
        form['loading'] = false
      })
    },
    getVideoByUserId(user_id) {
      this.videos.loading = true
      getVideoByUserId({ user_id }).then(res => {
        this.videos.list = res.data
      }).finally(_ => {
        this.videos.loading = false
      })
    },
    getCommentByVideoId(videoId) {
      getCommentByVideoId({ cursor: 0, videoId }).then(res => {
        this.subTable.array = res.data
      })
    },
    getTableData(val) {
      if (!val) return

      if (!this.users.select.uid && (val === '用户粉丝' || val === '用户关注')) {
        this.$message.info('请先选择一个用户')
        return
      } else if (!this.videos.select.videoId && val === '视频评论用户') {
        this.$message.info('请先选择一个视频')
        return
      }

      this.subTable.loading = true
      const config = {
        '用户粉丝': {
          api: getFollower,
          params: 'user_id'
        },
        '用户关注': {
          api: getFollowing,
          params: 'user_id'
        },
        '视频评论用户': {
          api: getCommentByVideoId,
          params: 'videoId'
        }
      }

      config[val].api({
        tableName: this.form.tableName,
        cursor: this.subTable.pager.index,
        [config[val].params]: config[val].params === 'user_id' ? this.users['select'].uid : this.video['select'].videoId
      }).then(res => {
        this.form.tableName = res.tableName
        this.subTable.array = res.data
        this.subTable.pager.total = res.total
        this.subTable.pager.index = res.cursor
      }).finally(_ => {
        this.subTable.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.market-content-container{
  position: relative;
  transition: .2s;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 3px;
}
.selected::before{
  content: '✔';
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50%;
  background: green;
  color: #fff;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.fix-play-icon{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: rgba(255,255,255,.6);
  font-size: 48px;
}
</style>
