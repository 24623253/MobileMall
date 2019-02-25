<template>
  <div class="pull-refresh" ref="pullRefresh">
    <div class="tip-box">  
      <div>{{tipInfo}}</div>  
    </div>  
    <div ref="refresh" class="refresh-box">  
      <slot></slot>  
    </div>  
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "app-pull-refresh",
  data() {
    return {
      startY: "",
      endY: "",
      pullDistance: 0,
      tipInfo: "",
      el: null
    };
  },
  methods: {
    // 绑定touch事件
    bindTouchEvent() {
      this.el.addEventListener("touchstart", this.touchStart);
      this.el.addEventListener("touchmove", this.touchMove);
      this.el.addEventListener("touchend", this.touchEnd);
    },
    // 开始touch，记录手指在y轴的位置
    // @param e:touchStart事件对象
    touchStart(e) {
      let touch = e.changedTouches[0];
      this.startY = touch.clientY;
      this.tipInfo = "下拉刷新";
      this.el.className = "refresh-box";
    },
    // touch过程的监听，记录移动的距离
    // @param e:touchMove事件对象
    touchMove(e) {
      let touch = e.changedTouches[0];
      // 获取下拉的距离
      let move = touch.clientY - this.startY;
      // 这里主要是让内容区随着下拉操作而往下滚动
      // move<100是设置一个下拉距离的上限,不能一直可以下拉，用户体验不好
      // 这里下拉操作主要是显示出顶上的一层tipInfo
      if (move > 0 && move < 100) {
        this.el.style.marginTop = move + "px";
        // 记录下拉的距离，为后面页面归位提供数据
        this.pullDistance = move;
        // 下拉到一定距离提示可以松手
        if (move > 50) {
          this.tipInfo = "松开即可刷新";
        }
      }
    },
    // touch结束(松开手指)的监听
    // @param e:touchEnd事件对象
    touchEnd(e) {
      let touch = e.changedTouches[0];
      this.endY = touch.clientY;
      if (this.pullDistance > 50) {
        this.tipInfo = "数据加载中...";
        //提交触发父组件的加载数据的方法
        //要在父组件数据加载完成后才能将页面归位,所以把resolve通过事件参数传给父组件
        new Promise(resolve => {
          this.$emit("load", resolve);
        }).then(() => {
          this.resetBox();
        });
      } else {
        this.resetBox();
      }
    },
    // 将页面归位
    // 将移动的距离（pullDistance）还原
    resetBox() {
      if (this.pullDistance > 0) {
        this.el.className += " trans";
        this.el.style.marginTop = 0;
      }
      this.tipInfo = "下拉刷新";
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.el = this.$refs.refresh;
      this.bindTouchEvent();
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/util";
.pull-refresh {
  position: relative;
  height: 100%;
  overflow-y: scroll;
  .tip-box {
    position: absolute;
    width: 100%;
    line-height: pxToRem(40);
    height: pxToRem(40);
    text-align: center;
    font-size: pxToRem(14);
  }
  .refresh-box {
    position: absolute;
    width: 100%;
  }
  .trans {
    transition: margin-top 0.4s;
  }
}
</style>
