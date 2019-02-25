<template>
  <div>
    <app-header mode="mode-one" title="登录" :isShowModeOneBack="true" :isShowModeOneSearch="false"></app-header>
    <div class="app-init" v-swiper='"swiperRight"'>
      <div class="input-wrapper">
        <div class="input-box">
          <label>
            <input type="text" v-model="username" placeholder="请输入您的用户名" />
          </label>        
        </div>
        <div class="input-box">
          <label>
            <input v-if="!isShowPassword" ref="password" class="input-box-password" type="password" v-model="password" placeholder="请输入您的密码" />
            <input v-if="isShowPassword" ref="password" class="input-box-password" type="text" v-model="password" placeholder="请输入您的密码" />
            <div v-if="isShowPasswordSwitch" class="passwor-switch">
              <span v-if="!isShowPassword" @click="switchPassword">显示</span>
              <span v-if="isShowPassword" @click="switchPassword">隐藏</span>
            </div>
          </label>
        </div>
        <div class="input-tips">
          <p v-for="(item,index) of errTips" v-if="item.error" :key="index">{{item.msg}}</p>
        </div>
        <button @click="login" class="input-btn">登录</button>
        <div class="input-other">
          <router-link to="/register"><span>立即注册</span></router-link>
          <span>|</span>
          <router-link to="/development"><span class="forget-password">忘记密码</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import api from "../../constant/api";

export default {
  data() {
    return {
      username: "",
      password: "",
      isShowPasswordSwitch: false,
      isShowPassword: false,
      errTips: [
        { error: false, msg: "用户名不能为空！" },
        { error: false, msg: "密码不能为空！" }
      ]
    };
  },
  methods: {
    switchPassword() {
      this.$refs.password.blur();
      this.isShowPassword = !this.isShowPassword;
    },
    login() {
      if (this.username && this.password) {
        let params = {
          username: this.username,
          password: this.password
        };
        this.axios.get(api.login).then(res => {
          this.$store.commit("login", { token: "123456" });
          let path = this.$route.query.redirect || "/";
          this.$router.push(path);
        });
      }
      !this.username
        ? (this.errTips[0].error = true)
        : (this.errTips[0].error = false);
      !this.password
        ? (this.errTips[1].error = true)
        : (this.errTips[1].error = false);
    }
  },
  watch: {
    password: {
      handler: function(val, oldVal) {
        val
          ? (this.isShowPasswordSwitch = true)
          : (this.isShowPasswordSwitch = false);
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>