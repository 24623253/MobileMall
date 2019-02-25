<template>
  <div class="header">
    <div v-if="mode=='mode-one'">
      <p class="title">{{ title }}</p>
      <span v-if="isShowModeOneBack" @click="$router.go(-1)" class="iconfont icon-backer myicon lf"></span>
      <span v-if="isShowModeOneSearch" @click="$router.push('/search')" class="iconfont icon-sousuo-copy myicon lr"></span>
    </div>
    
    <div v-if="mode=='mode-two'">
      <img v-if="!isShowModeTwoBack" src="/static/images/logo.png" class="myicon logo" />
      <span v-if="isShowModeTwoBack" @click="$router.go(-1)" class="iconfont icon-backer myicon lf"></span>
      <div v-if="!isShowModeTwoBack" class="search" @click="$router.push('/search')">
        <span class="iconfont icon-sousuo-copy"></span>
        搜索商品名称
      </div>
      <div v-if="isShowModeTwoBack" class="search">
        <input v-autofocus type="text" placeholder="搜索商品名称" class="search-input" />
      </div>
      <span v-if="!isShowModeTwoBack" @click="$router.push('/mine')" class="iconfont icon-smile myicon user"></span>
      <span v-if="isShowModeTwoBack" class="iconfont icon-sousuo-copy myicon lr"></span>
    </div>

    <div v-if="mode=='mode-three'">
      <span @click="$router.go(-1)" class="iconfont icon-backer myicon lf"></span>
      <span class="iconfont icon-jia myicon lr"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "app-header",
  props: {
    mode: {
      type: String,
      default: "mode-one"
    },
    title: {
      type: String,
      default: "标题"
    },
    isShowModeOneBack: {
      type: Boolean,
      default: false
    },
    isShowModeOneSearch: {
      type: Boolean,
      default: true
    },
    isShowModeTwoBack: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/util";
.header {
  height: $headerHeight;
  background-color: #f2f2f2;
  font-size: pxToRem(14);
  color: #666666;
  text-align: center;
  position: absolute;
  width: 100%;
  z-index: 99;
  .title {
    margin-top: 0.3rem;
    font-size: pxToRem(16);
  }
  .search {
    position: relative;
    top: 0.15rem;
    margin: 0 1.5rem;
    line-height: pxToRem(20);
    border-radius: 5px;
    padding: 0.15rem;
    background-color: #fff;
    text-align: left;
    .search-input {
      width: 100%;
      font-size: pxToRem(14);
      line-height: pxToRem(20);
      border: none;
    }
  }
  .myicon {
    position: absolute;
    width: pxToRem(30);
    line-height: pxToRem(42);
    color: #919191;
    top: 0;
    font-size: 0.58rem;
  }
  .logo {
    width: pxToRem(30);
    margin-left: 0.4rem;
    top: pxToRem(10);
    left: 0;
    height: auto;
  }
  .user {
    width: pxToRem(30);
    margin-right: 0.4rem;
    right: 0;
  }
  .lf {
    left: pxToRem(8);
  }
  .lr {
    right: pxToRem(14);
  }
}
</style>
