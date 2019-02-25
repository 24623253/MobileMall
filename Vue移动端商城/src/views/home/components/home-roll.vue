<template>
  <div class="roll-wrap">
    <ul class="roll-content" :style="{ top }">
      <li v-for="(item,index) of list" :key="index">
        <router-link to="/">{{item.info}}</router-link>  
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "home-roll",
  data() {
    return {
      activeIndex: 0
    };
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    intervalTime: {
      type: Number,
      default: 3000
    }
  },
  computed: {
    top() {
      return -this.activeIndex * 1 + "rem";
    }
  },
  mounted() {
    setInterval(() => {
      if (this.activeIndex < this.list.length - 1) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    }, this.intervalTime);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/util";
.roll-wrap {
  position: relative;
  height: 1rem;
  width: 100%;
  overflow: hidden;
  .roll-content {
    position: absolute;
    transition: top 0.5s;
    width: 100%;
    will-change: top;
    li {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      overflow: hidden;
      font-size: pxToRem(12);
      white-space: nowrap;
      text-overflow: ellipsis;
      a {
        color: #000;
      }
    }
  }
}
</style>
