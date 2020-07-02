<template>
  <div class="app-container">
    <div v-if="commentList.length">
      <el-card v-for="comment in commentList" :key="comment.commentId" class="comment-card">
        <div>
          <img v-if="comment.top" src="../../static/set_top.png" alt="" class="top">
          <i :class="comment.replyVisible? 'arrow-transform':''" class="el-icon-caret-right arrow-right" @click="comment.replyVisible = !comment.replyVisible;getReplyComment(comment)" />
          <img class="arrow-right" :src="topIcon[comment.top]" width="12px" style="left: 40px" @click="topComment(comment)">
          <div style="padding: 15px 0">{{ comment.content }}</div>
          <div class="comment-time">
            <el-popover
              v-model="comment.visible"
              placement="top"
              width="300"
              trigger="click"
            >
              <el-button slot="reference" type="text" size="mini" @click="row = comment || {}">回复</el-button>
              <div>
                <el-input v-model="replayContent" type="textarea" :rows="4" />
                <el-button size="mini" @click="handleSubmit">提交</el-button>
              </div>
            </el-popover>
            {{ $tool.parseTime(comment.createTime) }}
          </div>
          <div class="comment-info">
            <span title="点赞数">
              <img src="../../static/dig.png" alt="" width="12px">
              {{ comment.diggCount }}
            </span>
            <span title="回复评论数">
              <img src="../../static/comment.png" alt="" width="12px" style="margin-left:10px">
              {{ comment.replyCommentTotal }}
            </span>
          </div>
        </div>
        <transition name="el-fade-in-linear">
          <div
            v-show="comment.replyVisible"
            v-loading="comment.loading"
            element-loading-spinner="el-icon-loading"
            class="comment-reply"
          >
            <div v-for="replyComment in comment.replyCommentList" :key="replyComment.commentId" style="padding: 4px 10px;font-size:12px" class="test" @click="topComment(replyComment,1)">
              <img v-if="replyComment.top" src="../../static/reply_top.png" width="16px" alt="">
              <el-tooltip effect="dark" :content="replyComment.content" placement="right">
                <div class="reply-comment-content">
                  {{ replyComment.content }}
                </div>
              </el-tooltip>
              <div style="float:right;color:#ccc">
                {{ $tool.parseTime(replyComment.createTime) }}
              </div>
            </div>
          </div>
        </transition>

      </el-card>
    </div>
    <empty v-else />
  </div>
</template>

<script>
import { getCommentByUser, replyComment, getReplyComment, topComment } from '@/api/comment'
import Empty from '@/components/Empty'

export default {
  components: {
    Empty
  },
  data() {
    return {
      topIcon: {
        false: require('../../static/top_icon.png'),
        true: require('../../static/top_icon_red.png')
      },
      row: {},
      replayContent: '',
      commentList: []
    }
  },
  computed: {
    accountRole() {
      return this.$store.state.douyin.userInfo.accountRole
    }
  },
  created() {
    this.getComment()
  },
  methods: {
    topComment(comment, type) {
      topComment({
        commentId: comment.commentId,
        itemId: decodeURIComponent(this.$route.params.itemId),
        userId: this.$route.params.userId,
        top: !comment.top
      }).then(res => {
        if (type) {
          this.getReplyComment(comment)
        } else {
          this.getComment()
        }
      })
    },
    handleSubmit() {
      console.log(this.row)
      replyComment({
        commentId: this.row.commentId,
        content: this.replayContent,
        itemId: decodeURIComponent(this.$route.params.itemId),
        userId: this.$route.params.userId
      }).then(res => {
        this.$message.success(res.mes)
      }).finally(_ => {
        this.getComment()
        this.replayContent = ''
      })
    },
    getReplyCommentFirstTime(comment) {
      if (comment.firstGet) {
        this.getReplyComment(comment)
      }
    },
    getReplyComment(comment) {
      comment.loading = true
      getReplyComment({
        commentId: comment.commentId,
        count: 10,
        cursor: 0,
        userId: this.$route.params.userId,
        itemId: decodeURIComponent(this.$route.params.itemId)
      }, this.accountRole).then(res => {
        const { list = [] } = res
        for (const item of this.commentList) {
          if (comment.commentId === item.commentId) {
            comment.replyCommentList = list
            comment.firstGet = false
            break
          }
        }
      }).finally(_ => {
        comment.loading = false
      })
    },
    getComment() {
      getCommentByUser({
        count: 10,
        cursor: 0,
        userId: this.$route.params.userId,
        itemId: decodeURIComponent(this.$route.params.itemId)
      }, this.accountRole).then(res => {
        const { list = [] } = res
        list.map(item => {
          item.visible = false
          item.replyCommentList = []
          item.replyVisible = false
          item.firstGet = true
          item.loading = false
        })
        this.commentList = list
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.test{
    // border: 1px solid transparent;
    border-radius: 4px;
    transition: .2s;
}
.test:hover{
    transform: scale(1.01);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.comment-card{
    margin-bottom:10px;
    position:relative;
    overflow: unset;
    min-height: 100px;
    .arrow-right{
        position:absolute;
        top:10px;
        left:15px;
        font-size:12px;
        color:#999;
        cursor:pointer;
        transition: .2s;
    }
    .arrow-transform{
        transform: rotate(90deg);
    }
    .replay{
        color: #498462;
        margin-right: 15px;
        cursor: pointer;
    }
    .comment-time{
        font-size: 12px;
        color: #ccc;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
    .comment-info{
        position: absolute;
        right: 60px;
        top: 10px;
        font-size: 12px;
    }
    .top{
        position: absolute;
        right: 0;
        top: -4px;
        width: 50px;
    }

    .comment-reply{
        background: #F2F6FC;
        margin-bottom: 20px;
        padding: 15px;
        min-height: 100px;
    }
    .reply-comment-content{
        max-width: 70%;
        display: inline-block;
        word-break:keep-all;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
}

</style>
