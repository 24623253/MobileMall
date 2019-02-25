<template>
  <div>
    <app-header mode="mode-one" title="开发中..." :isShowModeOneBack="true" :isShowModeOneSearch="false"></app-header>
    <div class="app-init app-init-reset" v-swiper='"swiperRight"'>
      <div class="development">
        <p>本商城由 Steel 开发</p>
        <p>商城 布局与功能 由本人实现，图片、布局等均来源于 <span class="color">小米商城 m.mi.com</span></p>
        <p>商城所用的到技术</p>
        <ul>
          <li>vue-cli</li>
          <li>vue 2.5.2</li>
          <li>vue-router 3.0.1</li>
          <li>vuex 3.0.1</li>
          <li>axios 0.17.1</li>
          <li>sass</li>
          <li>lodash</li>
        </ul>
        <p>联系我</p>
        <p>e-mail: steelv@yeah.net</p>
        <p>github: github.com/SteelFlying</p>
        <br>
        <p>Create on 2018/03/15</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/util";
.app-init-reset {
  margin-bottom: 0;
  .development {
    padding: 0.5rem;
    height: auto;
    font-size: pxToRem(18);
  }
}
</style>