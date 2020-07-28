<template>
  <div class="login-container">
    <!-- <div class="blur-mask" /> -->

    <div class="login-box">
      <el-row style="height: 100%">
        <el-col id="bg-content" :span="12">
          <div class="switch__circle" />
          <div class="switch__circle switch__circle--t" />
          <button class="line-button type3 position-center" @click="modeChange">
            {{ loginForm.loginType === 'admin' ? '商户登录入口' : '管理员登录入口' }}
          </button>
        </el-col>
        <el-col id="login-content" :span="12">
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

            <div class="title-container">
              <h3 class="title">{{ loginForm.loginType === 'admin' ? '管理员' : '商户' }}登录</h3>
            </div>

            <el-form-item prop="account">
              <div class="segment-label">
                <input v-model="loginForm.account" type="text" class="segment-input" placeholder="用户名" @keyup.enter="handleLogin">
              </div>
            </el-form-item>

            <el-form-item prop="password">
              <div class="segment-label">
                <input v-model="loginForm.password" :type="passwordType" class="segment-input" placeholder="密码" @keyup.enter="handleLogin">
                <span class="show-pwd" @click="showPwd">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
              </div>
            </el-form-item>

            <button
              id="login-button"
              :disabled="loading"
              :style="loading ? 'background:#87B2DE' : ''"
              class="segment-button"
              type="button"
              style="margin: 20px auto; display: block"
              element-loading-background="rgba(0,0,0,0.4)"
              @click="handleLogin"
            >
              <i :class="loading ? 'el-icon-loading' : 'el-icon-lock'" />
              登 录
            </button>

          </el-form>
        </el-col>
      </el-row>
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
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error('Please enter the correct user name'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatePassword = (rule, value, callback) => {
    //   if (value.length < 6) {
    //     callback(new Error('The password can not be less than 6 digits'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      loginForm: {
        account: '',
        password: '',
        safeCode: '',
        loginType: 'merchant'
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
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    modeChange() {
      this.loginForm.loginType = this.loginForm.loginType === 'admin' ? 'merchant' : 'admin'

      const bg = document.querySelector('#bg-content')
      const login = document.querySelector('#login-content')
      const circles = document.querySelectorAll('.switch__circle')
      if (this.loginForm.loginType === 'admin') {
        bg.style.transform = 'translateX(480px)'
        login.style.transform = 'translateX(-480px)'
        circles.forEach(item => {
          item.className += ' is-txr'
        })
      } else {
        bg.style.transform = 'translateX(0)'
        login.style.transform = 'translateX(0)'
        circles.forEach(item => {
          item.className = item.className.replace(' is-txr', '')
        })
      }
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

          this.$store.dispatch('user/login', _loginForm).then(() => {
            const button = document.querySelector('#login-button')
            button.innerHTML = '欢迎登录'
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
.login-container {
  height: 100%;
  width: 100%;
  background: $bg;
  overflow: hidden;

  .login-box {
    position: relative;
    width: 960px;
    max-width: 100%;
    height: 530px;
    background-color: #ecf0f3;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
    border-radius: 12px;
    overflow: hidden;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    #bg-content {
      height: 100%;
      transition: 1.5s;
      box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
      background: #ecf0f3;
      position: relative;
      z-index: 2;
      overflow: hidden;
    }
    #login-content {
      height: 100%;
      transition: 1.5s;
      box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
      background:#ecf0f3;
      position: relative;
    }

    .switch__circle{
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background-color: #ecf0f3;
        box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
        bottom: -60%;
        left: -60%;
        transition: 1.25s;
      }
      .switch__circle--t{
        top: -30%;
        left: 60%;
        width: 300px;
        height: 300px;
      }
      .is-txr {
        left: calc(100% - 400px);
      }
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 35px;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 34px;
      font-weight: 700;
      line-height: 2;
      color: #181818;
      text-align: center;
      letter-spacing: 10px;
      text-shadow: 1px 1px 1px #FFF;
    }
  }

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
.position-center{
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: block;
}
</style>
