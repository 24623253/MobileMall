<template>
  <div>
    <app-header mode="mode-one" title="注册" :isShowModeOneBack="true" :isShowModeOneSearch="false"></app-header>
    <div class="app-init" v-swiper='"swiperRight"'>
      <div class="input-wrapper">
        <div class="input-box">
          <label>
            <input type="text" v-model="username" placeholder="请输入您的用户名" />
          </label>        
        </div>
        <div class="input-box">
          <label>
            <input class="input-box-password" type="password" v-model="password" placeholder="请输入您的密码" />
          </label>
        </div>
        <div class="input-box">
          <label>
            <input class="input-box-password" type="password" v-model="re_password" placeholder="请再次输入您的密码" />
          </label>
        </div>
        <div class="input-tips">
          <p v-for="(item,index) of errTips" v-if="item.error" :key="index">{{item.msg}}</p>
        </div>
        <button @click="register" class="input-btn">注册</button>
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
      re_password: "",
      errTips: [
        { error: false, msg: "用户名不能为空！" },
        { error: false, msg: "密码不能为空！" },
        { error: false, msg: "确认密码不能为空！" },
        { error: false, msg: "两次输入的密码不一样！" }
      ]
    };
  },
  methods: {
    register() {
      if (
        this.username &&
        this.password &&
        this.re_password &&
        this.password == this.re_password
      ) {
        let params = {
          username: this.username,
          password: this.password
        };
        this.axios.get(api.register).then(res => {
          this.$router.push({
            path: "/home"
          });
        });
      }
      !this.username
        ? (this.errTips[0].error = true)
        : (this.errTips[0].error = false);
      !this.password
        ? (this.errTips[1].error = true)
        : (this.errTips[1].error = false);
      !this.re_password
        ? (this.errTips[2].error = true)
        : (this.errTips[2].error = false);
      this.password != this.re_password
        ? (this.errTips[3].error = true)
        : (this.errTips[3].error = false);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
