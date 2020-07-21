<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left" :inline-message="true">

      <div class="title-container">
        <h3 class="title">登录菜单</h3>
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

      <div style="text-align: center">
        <el-radio-group v-model="loginForm.loginType">
          <el-radio :label="'merchant'">商户</el-radio>
          <el-radio :label="'admin'">管理员</el-radio>
        </el-radio-group>
      </div>

      <button
        v-loading.fullscreen.lock="loading"
        class="segment-button red"
        type="button"
        style="margin: 20px 0"
        element-loading-background="rgba(0,0,0,0.4)"
        @click="handleLogin"
      >
        <i class="el-icon-lock" />
        登 录
      </button>

      <!-- <el-form-item>
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.account"
          placeholder="账号"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item>
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item> -->

      <!-- <el-form-item>
        <span class="svg-container">
          <svg-icon icon-class="link" />
        </span>
        <el-input v-model="loginForm.safeCode" placeholder="安全口令" />
      </el-form-item> -->

      <!-- <el-form-item>
        <span class="svg-container">
          <svg-icon icon-class="tree" />
        </span>
        <el-select v-model="loginForm.loginType" class="el-select-login-fix" clearable placeholder="用户类型">
          <el-option value="merchant" label="商户">商户</el-option>
          <el-option value="admin" label="管理员">管理员</el-option>
        </el-select>
      </el-form-item> -->

      <!-- <el-button v-loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button> -->

      <!-- <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div> -->

    </el-form>
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
            this.$router.push({ path: '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
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
$bg:#EBECF0;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
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
      font-size: 26px;
      color: #BABECC;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
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
</style>
