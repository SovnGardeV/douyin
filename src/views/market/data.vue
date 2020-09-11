<template>
  <div style="background: #eee;height: 100%; overflow-y:auto">
    <div class="app-container">
      <el-card>
        <div slot="header">
          <h3 style="margin: 0;display:inline-block">营销数据</h3>
        </div>
        <el-tabs @tab-click="handleTabClick">
          <el-tab-pane label="筛选">
            <el-steps direction="vertical" :active="activeStep">
              <el-step title="搜索用户或视频">
                <div slot="description" style="padding: 10px 0">
                  <el-radio-group v-model="mainTable.type" size="mini" style="margin-bottom: 10px">
                    <el-radio-button :label="1">用户</el-radio-button>
                    <el-radio-button :label="2">视频</el-radio-button>
                  </el-radio-group>
                  <el-radio-group v-show="mainTable.type === 2" v-model="videos.type" style="margin-left: 20px">
                    <el-radio label="word">关键词</el-radio>
                    <el-radio label="code">城市</el-radio>
                  </el-radio-group>
                  <div v-show="videos.type === 'code' && mainTable.type !== 1">
                    <el-select v-model="videos.filter.code" size="mini" placeholder="请选择城市" @change="getCityVideo">
                      <el-option v-for="city in cityList" :key="city.code" :value="city.code" :label="city.name">{{ city.name }}</el-option>
                    </el-select>
                  </div>
                  <div v-show="videos.type === 'word' || mainTable.type === 1">
                    <el-input v-model="mainTable.keyWord" size="mini" placeholder="关键词" style="width: unset" @keyup.enter="searchByKey">
                      <el-button slot="append" icon="el-icon-search" @click.native="searchByKey" />
                    </el-input>
                  </div>
                </div>
              </el-step>
              <el-step title="选择用户或视频">
                <div slot="description" style="padding: 10px 0">
                  <div v-show="activeStep === 2">
                    <span style="color: green">✔</span> 已选择用户或视频
                  </div>
                  <transition name="el-fade-in-linear">
                    <div v-show="activeStep < 2">
                      <div id="user-list" v-loading="users.loading" style="padding: 10px;border-radius: 4px; border: 1px solid #eee;max-height: 300px; overflow-y: auto;margin-bottom: 10px">
                        <div v-if="users.list.length">
                          <el-row :gutter="5">
                            <el-col v-for="user in users.list" :key="user.uid" style="width: 110px;height:200px">
                              <div :class="users.select.uid === user.uid ? 'selected-icon' : ''" class="market-content-container" @click="selectUser(user)">
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
                                <div>
                                  <div>
                                    关注数：{{ $tool.handleNumber(user.followingCount) }}
                                  </div>
                                  <div>
                                    粉丝数：{{ $tool.handleNumber(user.followerCount) }}
                                  </div>
                                </div>
                              </div>
                            </el-col>
                          </el-row>
                          <div style="text-align:center; color: #ccc;margin: 15px 0">
                            <span style="cursor:pointer" @click="loadMoreByKey('user-list')">{{ users.hasMore ? '点击加载更多' : '已无更多' }}</span>
                          </div>
                        </div>
                        <empty v-else />
                      </div>
                      <div id="video-list" v-loading="videos.loading" style="padding: 10px;border-radius: 4px; border: 1px solid #eee;max-height: 530px; overflow-y: auto">
                        <div v-if="videos.list.length">
                          <el-row :gutter="5">
                            <el-col v-for="video in videos.list" :key="video.videoId" style="width: 150px;height:325px">
                              <div :class="videos.select.videoId === video.videoId ? 'selected-icon' : ''" class="market-content-container" @click="videos.select = video">
                                <a :href="video.share_url" target="_blank">
                                  <i class="el-icon-video-play fix-play-icon" />
                                </a>
                                <img width="100%" height="243" :src="video.cover" alt="">
                                <div class="text-overflow" style="font-size:16px" :title="video.share_title">
                                  {{ video.share_title }}
                                </div>
                                <div>
                                  <div>
                                    评论数：{{ $tool.handleNumber(video.statistics.comment_count) }}
                                  </div>
                                  <div>
                                    点赞数：{{ $tool.handleNumber(video.statistics.digg_count) }}
                                  </div>
                                </div>
                              </div>
                            </el-col>
                          </el-row>
                          <div style="text-align:center; color: #ccc;margin: 15px 0">
                            <span style="cursor:pointer" @click="loadMoreByKey('video-list')">{{ videos.hasMore ? '点击加载更多' : '已无更多' }}</span>
                          </div>
                        </div>
                        <empty v-else />
                      </div>
                    </div>
                  </transition>
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
                    <el-button size="mini" icon="el-icon-refresh" type="primary" style="float:right" @click="mainTable.attention = '';activeStep = 1">
                      重新选择
                    </el-button>
                  </div>
                  <div>
                    <div style="margin: 25px 0">标签：
                      <el-tag
                        v-for="tag in dynamicTags"
                        :key="tag"
                        size="middle"
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
                        size="mini"
                        style="width: 100px"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                      />
                      <el-button v-show="dynamicTags.length === 0" v-else class="button-new-tag" size="mini" icon="el-icon-plus" @click="showInput">新增标签</el-button>
                    </div>
                    <div style="margin: 25px 0">
                      爬取数量：
                      <el-input v-model="form.count" type="number" min="0" size="mini" style="width: unset" />
                    </div>
                  </div>
                </div>
              </el-step>
            </el-steps>
            <div style="text-align: center">
              <el-button size="small" type="primary" @click="saveData">保存筛选数据</el-button>
              <el-button size="small" @click="Object.assign($data, $options.data())">重置</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="日志">
            <el-table v-loading="subTable.loading" border :data="subTable.array">
              <el-table-column
                align="center"
                label="爬取数量"
                prop="num"
              />
              <el-table-column
                align="center"
                label="已爬取数量"
                prop="realNum"
              />
              <el-table-column
                align="center"
                label="爬取进度"
              >
                <template slot-scope="scope">
                  {{ map.speed[scope.row.speed] }}
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                label="使用标签"
                prop="tag"
              />
              <el-table-column
                align="center"
                label="爬取详情"
                prop="detail"
              />
              <el-table-column
                align="center"
                label="开始爬取时间"
                prop="createTime"
              />
              <el-table-column
                align="center"
                label="更新时间"
                prop="updateTime"
              />
              <el-table-column
                align="center"
                label="操作"
              >
                <template slot-scope="scope">
                  <el-button size="mini" @click="screenAgain(scope.row.id)">继续爬粉</el-button>
                  <el-button type="danger" size="mini" @click="killLog(scope.row.id)">删除进程</el-button>
                </template>
              </el-table-column>
            </el-table>
            <pagination
              :pager-size="subTable.pager.size"
              :pager-index="subTable.pager.index"
              :pager-total="subTable.pager.total"
              @pagination-change="handlePagerChange"
            />
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import { searchByKey, getVideoByUserId, queryUserList, screen, getYuserLogList, getCityCode, getCityVideo, screenAgain, killLog } from '@/api/yuser'
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
      cityList: [],
      inputVisible: false,
      inputValue: '',
      map: {
        gender: {
          1: '男',
          2: '女'
        },
        speed: {
          1: '执行中',
          2: '执行完毕',
          3: '进程终止'
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
        filter: {
          code: ''
        },
        type: 'word',
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
          index: 1,
          size: 10,
          total: 0
        }
      },
      form: {
        count: '',
        id: '',
        tagName: '',
        type: '',
        total: ''
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
  created() {
    this.getCityCode()
    // this.getYuserLogList()
  },
  methods: {
    killLog(id) {
      killLog({ id }).then(res => {
        this.$message.success(res.message)
      })
    },
    screenAgain(logId) {
      screenAgain({ logId }).then(res => {
        this.$message.success(res.message)
      })
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleTabClick(e) {
      if (e.label === '日志') {
        this.getYuserLogList()
      }
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
      this.subTable.pager.index = val.index
      this.subTable.pager.size = val.size
      this.getYuserLogList()
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
      let type, total
      switch (this.mainTable.attention) {
        case '用户粉丝': {
          type = 1
          total = this.users.select.followerCount
          break
        }
        case '用户关注': {
          type = 2
          total = this.users.select.followingCount
          break
        }
        case '视频评论用户': {
          type = 3
          if (this.videos.select.statistics) {
            total = this.videos.select.statistics.comment_count
          }
          break
        }
      }
      const _form = Object.assign({}, this.form)
      _form.type = type
      _form.tagName = this.dynamicTags.join(',')
      _form.total = total
      _form.id = this[type === 3 ? 'videos' : 'users'].select[type === 3 ? 'videoId' : 'uid']

      screen(_form).then(res => {
        this.$message.success(res.message)
      })
    },
    selectUser(user) {
      this.users.select = user
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
    loadMoreByKey(domName) {
      const type = this.mainTable.type === 1 ? 'users' : 'videos'
      let videoType = 'word'
      const _api = {
        word: searchByKey,
        code: getCityVideo
      }
      if (type === 'videos') {
        videoType = this.videos.type
      }
      const form = this[type]
      const dom = document.querySelector(`#${domName}`)
      dom.scrollTop = 0
      dom.style['overflow-y'] = 'hidden'
      if (!form['hasMore']) return
      form['loading'] = true
      let _form
      if (videoType === 'code') {
        _form = {
          count: 20,
          cursor: form['cursor'],
          [videoType]: this.mainTable.keyWord
        }
      } else {
        _form = {
          count: 20,
          cursor: form['cursor'],
          type: this.mainTable.type,
          word: this.mainTable.keyWord
        }
      }
      _api[videoType](_form).then(res => {
        form['list'] = form['list'].concat(res.data)
        form['cursor'] = res.cursor
        form['hasMore'] = res.has_more
        this.activeStep = 1
      }).finally(_ => {
        form['loading'] = false
        this.$nextTick(_ => {
          dom.style['overflow-y'] = 'auto'
          dom.scrollTop = dom.scrollHeight - dom.clientHeight
        })
      })
    },
    getCityCode() {
      getCityCode().then(res => {
        this.cityList = res
      })
    },
    getCityVideo(code) {
      this.videos.loading = true
      getCityVideo({ code }).then(res => {
        this.videos.list = res.data
        this.activeStep = 1
      }).finally(_ => {
        this.videos.loading = false
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
    getYuserLogList() {
      const _form = {
        pageNo: this.subTable.pager.index,
        pageSize: this.subTable.pager.size
      }
      getYuserLogList(_form).then(res => {
        this.subTable.array = res.result.records
        this.subTable.pager.total = res.result.total
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
      this.activeStep = 2
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
.selected-icon::before{
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
