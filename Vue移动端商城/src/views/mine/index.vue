<template>
  <div>
    <div class="app-init app-init-reset app-init-reset-noscroll">
      <header>
          <div class="ui-flex align-center">
            <router-link to="/login">
              <div class="img">
                <img src="/static/images/avatar.png">
              </div>
            </router-link>
            <div class="name" v-if="!getTokenStatus">登录/注册</div>
            <div @click="loginout" class="name" v-else>退出</div>
          </div>
      </header>
      <div class="order touch-item-box">
        <router-link to="/development">
          <div class="touch-item">
            <span class="key">我的订单</span>
            <span class="fr">全部订单</span>
          </div>
        </router-link>
        <ul class="ui-flex align-center justify-space-between order-menu">
          <li>
            <router-link to="/development">
              <div class="iconfont icon-daishouhuo order-menu-icon"></div>
              <span>待付款</span>
            </router-link>
          </li>
          <li>
            <router-link to="/development">
              <div class="iconfont icon-daishouhuo order-menu-icon"></div>
              <span>待收货</span>
            </router-link>
          </li>
          <li>
            <router-link to="/development">
              <div class="iconfont icon-daishouhuo order-menu-icon"></div>
              <span>退换修</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="touch-item-box">
        <router-link to="/development">
          <div class="touch-item">
            <span class="key">会员中心</span>
          </div>
        </router-link>
        <router-link to="/development">
          <div class="touch-item">
            <span class="key">我的优惠</span>
          </div>
        </router-link>
      </div>
      <div class="touch-item-box">
        <router-link to="/development">
          <div class="touch-item">
            <span class="key">服务中心</span>
          </div>
        </router-link>
        <router-link to="/development">
          <div class="touch-item">
            <span class="key">小米之家</span>
          </div>
        </router-link>
      </div>
      <div class="touch-item-box">
        <router-link to="/development">
          <div class="touch-item">
            <span class="key">F码通道</span>
          </div>
        </router-link>
      </div>
      <div class="touch-item-box">
         <router-link to="/development">
          <div class="touch-item">
            <span class="key">设置</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template> 

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  computed: {
    getTokenStatus() {
      return this.$store.state.token;
    }
  },
  methods: {
    loginout() {
      this.$store.commit("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/util";
header {
  height: pxToRem(84);
  padding: pxToRem(16) 0;
  background: url("/static/images/mine-bg.png") center 0 #f37d0f;
  background-size: auto 100%;
  .img {
    width: pxToRem(50);
    height: pxToRem(50);
    margin: 0 pxToRem(8) 0 pxToRem(17);
    border-radius: 100%;
    border: 3px solid hsla(0, 0%, 100%, 0.4);
  }
  .name {
    color: #fff;
    font-size: pxToRem(16);
  }
}
.touch-item-box {
  .touch-item {
    padding-left: 1.5rem;
    .key {
      color: #000;
      font-size: pxToRem(16);
    }
    .fr {
      margin-right: 0.8rem;
    }
  }
  .touch-item:before {
    font-family: "iconfont";
    content: "\e622";
    position: absolute;
    left: pxToRem(26);
    color: #3e3e3e;
    font-size: pxToRem(20);
  }
  .touch-item:after {
    right: 0.4rem;
  }
}
.order {
  .touch-item:before {
    content: "";
  }
  .touch-item {
    padding-left: 0.4rem;
    border-bottom: 1px solid #d9d9d9;
  }
  .order-menu {
    height: pxToRem(88);
    padding: 0 pxToRem(42);
    background-color: #fff;
    font-size: pxToRem(14);
    .order-menu-icon {
      text-align: center;
      font-size: pxToRem(20);
    }
    li {
      a {
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
}
</style>
