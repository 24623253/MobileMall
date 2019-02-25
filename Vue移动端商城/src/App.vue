<template>
  <div>
    <div class="app-init">
      <transition name="fade">
        <keep-alive exclude='goodDetails'>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>

    <footer class="footer clear" :class="{ 'leave': leave }">
      <router-link to="/home">
        <div class="footer-item">
          <p class="icon">
            <span class="iconfont icon-shouye"></span>
          </p>
          <p class="name">首页</p>
        </div>
      </router-link>

      <router-link to="/classification">
        <div class="footer-item">
          <p class="icon">
            <span class="iconfont icon-fenlei"></span>
          </p>
          <p class="name">分类</p>
        </div>
      </router-link>

      <router-link to="/shoppingcart">
        <div class="footer-item shop-car">
          <p class="icon">
            <span class="iconfont icon-gouwuche"></span>
          </p>
          <p class="name">购物车</p>
        </div>
      </router-link>

      <router-link to="/mine">
        <div class="footer-item">
          <p class="icon">
            <span class="iconfont icon-smile"></span>
          </p>
          <p class="name">我的</p>
        </div>
      </router-link>
    </footer>
  </div>

</template>

<script>
export default {
  name: "app",
  data() {
    return {
      menus: ["home", "classification", "shoppingcart", "mine"],
      isLeave: false
    };
  },
  computed: {
    leave() {
      this.isLeave = false;
      let name = this.$route.name;
      if (!this.menus.includes(name)) {
        this.isLeave = true;
      }
      return this.isLeave;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/sass/public";
@import "./assets/font/iconfont.css";
</style>
