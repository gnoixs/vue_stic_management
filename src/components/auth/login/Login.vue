<template>
  <div class="login">
    <h2>管理端登录</h2>
    <form method="post" action="/auth/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="username" required="required" v-model="User.user_name"/>
          <label class="control-label" for="username">用户名</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group margin-bottom-less">
        <div class="input-group">
          <input type="password" id="password" required="required" v-model="User.user_passwd"/>
          <label class="control-label" for="password">密码</label><i class="bar"></i>
        </div>
      </div>
      <p class="warning" v-text="errorMsg" :style="{visibility: !errorMsg}"></p>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit" @click.prevent.stop="onsubmit" :disabled="!isRightInput">
          登录
        </button>
        <router-link class='link' :to="{name: 'Signup'}">创建账户</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  //import Modals from '@/components/ui/modals/Modals'
  import axios from 'axios'
  export default {
    name: 'login',
    data () {
      return {
        User: {         // 用户对象，存储用户名和密码
          user_name: '',
          user_passwd: ''
        },
        isRightInput: true,    // 是不是可以正确提交
        errorMsg: ''
      }
    },
    methods: {
      // 提交数据
      onsubmit () {
        console.log(1);
        axios.post('http://adm.leyoule1.com/api/authenticate',
          this.User
        ).then((res) => {
          console.log(res.status);
          console.log(res.data)
        }).catch((err) => console.log(err));
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../sass/variables';
  @import '../../../../node_modules/bootstrap/scss/mixins/breakpoints';
  @import '../../../../node_modules/bootstrap/scss/variables';

  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }
    // password text
    .margin-bottom-less {
      margin-bottom: 0.75rem;
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;
    .down-container {
      margin-top: 3.125rem;
    }
    .warning {
      color: red;
      font-size: 0.95rem;
      font-family: serif;
      position: absolute;
    }
  }
</style>
