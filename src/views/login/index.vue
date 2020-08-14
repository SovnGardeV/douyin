<template>
  <div style="width: 100%; height: 100%; overflow: hidden">
    <div class="overlay" />
    <div class="login-container" />
    <div class="login">
      <div class="left-content">
        <div>
          <img src="../../static/logo.png" width="28px" alt="">
          <div style="display: inline-block;margin-left: 8px">
            <div class="title">泓瑞云控</div>
            <div class="sub-title">HONG RUI YUN KONG</div>
          </div>
        </div>
        <h1 class="title-tip">账号登录</h1>
        <el-form ref="loginForm" :model="loginForm" size="small" :rules="loginRules" style="margin: 40px 0">
          <el-form-item prop="account" class="form-item">
            <i class="el-icon-user item-icon" />
            <input v-model="loginForm.account" type="text" class="login-input">
          </el-form-item>
          <el-form-item prop="password" class="form-item">
            <i class="el-icon-lock item-icon" />
            <input v-model="loginForm.password" type="password" class="login-input">
          </el-form-item>
          <button class="login-button" :disabled="loading" @click="handleLogin">
            <i v-show="loading" class="el-icon-loading" />
            登录
          </button>
        </el-form>
      </div>
      <div class="right-content">
        <div class="right-content-container">
          <transition-group name="el-fade-in-linear">
            <img v-for="item in loginType" v-show="item.isShow" :key="item.value" :src="item.icon" width="220" class="login-type-icon" alt="">
          </transition-group>
          <div class="text">
            <i class="el-icon-arrow-left login-arrow login-arrow-left-animation" @click="handleLoginType('left')" />
            <div style="display: inline-block;text-align:center; transition: .2s" onselectstart="return false;" class="success-text">
              <div>{{ loginType[loginTypeIndex].cname }}</div>
              <div style="font-size: 18px;line-height:28px">{{ loginType[loginTypeIndex].ename }}</div>
            </div>
            <i class="el-icon-arrow-right login-arrow login-arrow-right-animation" @click="handleLoginType('right')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import { getPublicKey } from '@/api/user'
import { JSEncrypt } from 'jsencrypt'

export default {
  name: 'Login',
  data() {
    return {
      loginTypeIndex: 0,
      loginType: [
        {
          cname: '管理员',
          ename: 'ADMIN',
          icon: require('../../static/admin.png'),
          value: 'admin',
          isShow: true
        },
        {
          cname: '商户',
          ename: 'MERCHANT',
          icon: require('../../static/merchant.png'),
          value: 'merchant',
          isShow: false
        },
        {
          cname: '代理商',
          ename: 'PROXY',
          icon: require('../../static/proxy.png'),
          value: 'proxyuser',
          isShow: false
        }
      ],
      loginForm: {
        account: '',
        password: '',
        safeCode: ''
      },
      loginRules: {
        account: [{ required: true, trigger: 'blur', message: '用户名必填' }],
        password: [{ required: true, trigger: 'blur', message: '密码必填' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  computed: {
    loginTypeValue() {
      return this.loginType[this.loginTypeIndex].value
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleLoginType(pos) {
      this.loginType.forEach(item => {
        item.isShow = false
      })
      if (pos === 'left') {
        if (this.loginTypeIndex === 0) {
          this.loginTypeIndex = 2
        } else {
          this.loginTypeIndex--
        }
      } else {
        if (this.loginTypeIndex === 2) {
          this.loginTypeIndex = 0
        } else {
          this.loginTypeIndex++
        }
      }
      this.loginType[this.loginTypeIndex].isShow = true
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.loading = true
          const { publicKey } = await getPublicKey()
          const _loginForm = Object.assign({}, this.loginForm)

          const encrypt = new JSEncrypt()
          encrypt.setPublicKey(publicKey)
          _loginForm.password = encrypt.encrypt(this.loginForm.password)
          _loginForm.safeCode = (_loginForm.safeCode && encrypt.encrypt(this.loginForm.safeCode)) || ''
          _loginForm.loginType = this.loginTypeValue

          this.$store.dispatch('user/login', _loginForm).then(() => {
            const rightContent = document.querySelector('.right-content')
            const rightContentContainer = document.querySelector('.right-content-container')
            const text = document.querySelector('.success-text')
            const loginArrow = document.querySelectorAll('.login-arrow')
            const logo = document.querySelectorAll('.login-type-icon')
            rightContent.style.width = '840px'
            rightContentContainer.style.width = '100%'
            rightContent.style['border-radius'] = '8px'
            text.innerHTML = '欢迎回来'
            loginArrow.forEach(item => {
              item.style.display = 'none'
            })
            logo.forEach(item => {
              item.style.transform = 'translate(-50%, -70%)'
            })
            setTimeout(() => {
              this.loading = false
              this.$router.push({ path: '/' })
            }, 2000)
          }).catch(() => {
            this.loading = false
          })
          // setTimeout(() => {
          //   this.loading = false
          // }, 5000)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#EBECF0;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

.el-select-login-fix{
  width: 92%;
  .el-input.el-input--suffix{
    width: 100%;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  // .el-form-item {
  //   border: 1px solid rgba(255, 255, 255, 0.1);
  //   background: rgba(0, 0, 0, 0.1);
  //   border-radius: 5px;
  //   color: #454545;
  // }
}
</style>

<style lang="scss" scoped>
$bg:#ecf0f3;
$dark_gray:#889aa4;
$light_gray:#eee;
.el-form-item__error{
  top: 70% !important;
}
@keyframes bg {
  from {
    background-position: bottom right;
  } to {
    background-position: bottom left;
  }
}
@keyframes overlay {
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
}
@keyframes overlayLogin {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  } to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
.overlay{
  animation: overlay 1.5s .5s forwards;
  background-attachment: fixed,fixed;
  background-image: url('../../static/overlay-pattern.png'),url('../../static/overlay.svg');
  background-position: top left,center center;
  background-repeat: repeat,no-repeat;
  background-size: auto,cover;
  height: 100%;
  left: 0;
  opacity: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
.login-container {
  height: 100%;
  position: relative;
  background-color: #348cb2;
  background-image: url('../../static/bg.jpg');
  background-position: bottom left;
  background-repeat: repeat-x;
  background-size: 1200px auto;
  width: 3600px;
  overflow: hidden;
  animation: bg 60s linear infinite;

  .show-pwd {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.login{
  animation: overlayLogin 1.5s .5s forwards;
  width: 800px;
  height: 400px;
  border-radius: 8px;
  background: rgba(255,255,255, .9);
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -40%);
  padding: 30px;
  box-shadow: 1px 1px 5px 8px rgba(0,0,0,.1);
}
.left-content{
  width: 340px;
}
.right-content{
  width: 260px;
  height: 500px;
  background: #87c3dd;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  position: absolute;
  right: 0;
  top: -50px;
  transition: .8s;

  &::before{
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-right: 140px solid #87c3dd;
    border-top: 500px solid transparent;
    position: absolute;
    right: 260px;
  }

  .right-content-container{
    width: 400px;
    height: 500px;
    position: absolute;
    right: 0;
    top: 0;
    .text{
      color: #fff;
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 34px;
      font-weight: bold;
    }
    .login-type-icon{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-33%, -70%);
    }

  }
}
.title{
  font-family: Microsoft YaHei, "微软雅黑";
}
.sub-title{
  font-size: 12px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 20px;
  color: #ccc;
}
.login-arrow{
  position: relative;
  top: -12px;
  cursor: pointer;
  transition: .2s;
}
.login-arrow-left-animation {
  animation: light-left 2.4s infinite;
}
.login-arrow-right-animation {
  animation: light-right 2.4s infinite;
}
.login-button{
  border-radius: 30px;
  margin-top: 15px;
  width: 100%;
  text-align: center;
  padding: 15px;
  border: none;
  background: linear-gradient(to bottom right,#87c3dd, #aac8d4 );
  // background: #87c3dd;
  transition: .3s;
  color: #fff;
  outline: unset;
  box-shadow: 3px 3px 1px 1px rgba(0,0,0,.1);

  &:active{
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.1);
  }
}
.title-tip{
  font-family: Microsoft YaHei, "微软雅黑";
  letter-spacing: 4px;
  font-weight: normal;
  position: absolute;
  right: 320px;
  top: 0;
  color: #348cb2;
}
.login-input{
  border-radius: 30px;
  width: 100%;
  padding: 15px 40px 15px;
  margin: 4px 0;
  border: 1px solid transparent;
  outline: unset;
  transition: .3s;
  box-sizing: border-box;
  &:focus{
    border: 1px solid #87c3dd;
  }
}
.item-icon{
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 26px;
  color: rgba(#348cb2, .4);
  transition: .3s;
}
@keyframes light-left {
  0% {
    left: 0;
    opacity: 1;
  }
  50% {
    left: -10px;
    opacity: .4;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}
@keyframes light-right {
  0% {
    right: 0;
    opacity: 1;
  }
  50% {
    right: -10px;
    opacity: .4;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}
</style>
