<template>
  <div v-if="isShow" class="no-more">
    <p>--------我也是有底线的--------</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "app-nomore",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/util";
.no-more {
  p {
    color: #666;
    margin: 0.5rem 0;
    text-align: center;
    font-size: pxToRem(14);
  }
}
</style>
