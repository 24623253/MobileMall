<template>
  <div>
    <app-header mode="mode-one" title="分类"></app-header>
    <div class="app-init app-init-reset">
      <div class="list-navbar" ref="listNavbar">
        <ul ref="listNavbarUl">
          <li v-for="(item,index) of navList" :key="index" @click="switchNavbar(item.id,index,$event)">
            <a :class="{active:item.isActive}" :ref="item.id+'-'+index">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div @scroll="wrapScroll()" class="list-wrap" ref="listWrap">
        <div v-for="(item,index) of wrap" :key="index" :id="item.id" :ref="item.id" class="list-item">
          <div class="list-item-img">
            <router-link to="/">
              <img :src="item.headerImg" v-lazy="item.headerImg" />
            </router-link>
          </div>
          <div class="list-item-content">
            <div v-for="(item,index) of item.list" :key="index" class="list-item-content-item">
              <p class="list-item-content-title">-- {{item.title}} --</p>
              <div class="list-item-content-list">
                <div v-for="(item,index) of item.data" :key="index" class="product fl">
                  <router-link to="/">
                    <div class="img">
                      <img :src="item.img" v-lazy="item.img" />
                    </div>
                    <div class="name">{{item.des}}</div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <app-nomore :isShow="true"></app-nomore>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import api from "../../constant/api";
export default {
  data() {
    return {
      recordIndex: 0,
      navList: [],
      wrap: [],
      wrapHeight: 0,
      scrollPosition: 0,
      navbarScrollPosition: 0,
      navbarCanScrollDistence: 0,
      navItemHeight: 0
    };
  },
  methods: { 
    switchNavbar(id, index, e) {
      if (index != this.recordIndex) {
        this.navList[index].isActive = true;
        this.navList[this.recordIndex].isActive = false;
        this.recordIndex = index;
      }
      //将右侧列表滚动到相应的位置并记录位置
      this.$refs.listWrap.scrollTop = this.$refs[id][0].offsetTop;
      this.scrollPosition = this.$refs[id][0].offsetTop;

      //滚动左侧列表
      if (!this.navItemHeight) {
        this.navItemHeight = e.target.clientHeight;
      }
      if (!this.navbarCanScrollDistence) {
        this.navbarCanScrollDistence =
          this.$refs.listNavbarUl.clientHeight -
          this.$refs.listNavbar.clientHeight;
      }
      if (
        e.target.offsetTop >=
        parseInt(this.navList.length / 2) * this.navItemHeight
      ) {
        this.$refs.listNavbar.scrollTop = this.navbarCanScrollDistence;
        this.navbarScrollPosition = this.navbarCanScrollDistence;
      } else {
        this.$refs.listNavbar.scrollTop = -this.navbarCanScrollDistence;
        this.navbarScrollPosition = -this.navbarCanScrollDistence;
      }
    },
    wrapScroll() {
      if (!this.wrapHeight) {
        this.wrapHeight = this.$refs["wrap1"][0].clientHeight;
      }
      setTimeout(() => {
        let multiple = parseInt(
          this.$refs.listWrap.scrollTop / this.wrapHeight
        );
        if (multiple != this.recordIndex) {
          this.navList[multiple].isActive = true;
          this.navList[this.recordIndex].isActive = false;
          this.recordIndex = multiple;
        }

        if (!this.navbarCanScrollDistence) {
          this.navbarCanScrollDistence =
            this.$refs.listNavbarUl.clientHeight -
            this.$refs.listNavbar.clientHeight;
        }

        let target = this.$refs["wrap" + (multiple + 1) + "-" + multiple][0];
        if (!this.navItemHeight) {
          this.navItemHeight = target.clientHeight;
        }
        if (
          target.offsetTop >=
          parseInt(this.navList.length / 2) * this.navItemHeight
        ) {
          this.$refs.listNavbar.scrollTop = this.navbarCanScrollDistence;
          this.navbarScrollPosition = this.navbarCanScrollDistence;
        } else {
          this.$refs.listNavbar.scrollTop = -this.navbarCanScrollDistence;
          this.navbarScrollPosition = -this.navbarCanScrollDistence;
        }
        this.scrollPosition = this.$refs.listWrap.scrollTop;
      }, 200);
    }
  },
  mounted() {
    this.axios.get(api.navbarList).then(res => {
      this.navList = res.data.list;
      this.navList[0].isActive = true;
      this.axios.get(api.wrapList).then(res => {
        this.wrap = res.data.list;
      });
    });
  },
  activated() {
    this.$refs.listNavbar.scrollTop = this.navbarScrollPosition;
    this.$refs.listWrap.scrollTop = this.scrollPosition;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/util";
.app-init-reset {
  overflow: hidden;
  .list-navbar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: pxToRem(80);
    border-right: 1px solid #efefef;
    overflow-y: auto;
    background-color: #fefefe;
    ul {
      -webkit-overflow-scrolling: touch;
      padding: pxToRem(10) 0;
      li {
        height: pxToRem(47);
        line-height: pxToRem(47);
        overflow: hidden;
        text-align: center;
        a {
          transition: -webkit-transform 0.1s linear;
          transform-origin: center center;
          transform: scale(0.76);
          -webkit-transition: -webkit-transform 0.1s linear;
          -webkit-transform-origin: center center;
          -webkit-transform: scale(0.76);
          font-size: pxToRem(18);
          display: block;
          color: #3c3c3c;
        }
      }
      li a.active {
        transform: scale(1);
        -webkit-transform: scale(1);
        color: #fb7d34;
      }
    }
    ul::-webkit-scrollbar {
      display: none;
    }
  }
  .list-wrap {
    position: absolute;
    left: pxToRem(80);
    right: 0;
    top: 0;
    bottom: 0;
    padding: 2px pxToRem(16);
    background-color: #fff;
    overflow-y: auto;
    .list-item {
      .list-item-img {
        img {
          width: 100%;
          height: pxToRem(104);
        }
      }
      .list-item-content {
        .list-item-content-title {
          height: pxToRem(66);
          line-height: pxToRem(66);
          margin-top: pxToRem(10);
          font-size: pxToRem(15);
          text-align: center;
        }
        .list-item-content-list {
          overflow: hidden;
          .product {
            width: 33.33%;
            text-align: center;
            margin-top: pxToRem(10);
            margin-bottom: pxToRem(15);
            overflow: hidden;
            .img {
              width: pxToRem(52);
              height: pxToRem(52);
              margin: 0 auto;
              background: #fff;
              overflow: hidden;
            }
            .name {
              margin-top: pxToRem(14);
              white-space: nowrap;
              font-size: pxToRem(12);
              color: rgba(0, 0, 0, 0.54);
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
}
</style>
