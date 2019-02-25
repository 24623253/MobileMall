<template>
  <div>
    <app-header mode="mode-two"></app-header>
    <div class="app-init app-init-reset">
      <pull-refresh @load="getData">
      <app-swiper :list="list"></app-swiper>
      <div class="ui-flex wrap align-center justify-space-between home-header">
        <div class="home-header-menu">
          <router-link to="/">
            <div class="home-header-menu-icon">
              <img src="/static/images/logo.png">
            </div>
            <span class="home-header-menu-info">新品</span>
          </router-link>
        </div>
        <div class="home-header-menu">
          <router-link to="/">
            <div class="home-header-menu-icon">
              <img src="/static/images/logo.png">
            </div>
            <span class="home-header-menu-info">手机</span>
          </router-link>
        </div>
        <div class="home-header-menu">
          <router-link to="/">
            <div class="home-header-menu-icon">
              <img src="/static/images/logo.png">
            </div>
            <span class="home-header-menu-info">电视</span>
          </router-link>
        </div>
        <div class="home-header-menu">
          <router-link to="/">
            <div class="home-header-menu-icon">
              <img src="/static/images/logo.png">
            </div>
            <span class="home-header-menu-info">电脑</span>
          </router-link>
        </div>
        <div class="home-header-menu">
          <router-link to="/">
            <div class="home-header-menu-icon">
              <img src="/static/images/logo.png">
            </div>
            <span class="home-header-menu-info">家电</span>
          </router-link>
        </div>
        <div class="home-header-menu">
          <router-link to="/">
            <div class="home-header-menu-icon">
              <img src="/static/images/logo.png">
            </div>
            <span class="home-header-menu-info">路由</span>
          </router-link>
        </div>
        <div class="home-header-menu">
          <router-link to="/">
            <div class="home-header-menu-icon">
              <img src="/static/images/logo.png">
            </div>
            <span class="home-header-menu-info">智能</span>
          </router-link>
        </div>
        <div class="home-header-menu">
          <router-link to="/">
            <div class="home-header-menu-icon">
              <img src="/static/images/logo.png">
            </div>
            <span class="home-header-menu-info">儿童</span>
          </router-link>
        </div>
        <div class="home-header-menu">
          <router-link to="/">
            <div class="home-header-menu-icon">
              <img src="/static/images/logo.png">
            </div>
            <span class="home-header-menu-info">电源</span>
          </router-link>
        </div>
        <div class="home-header-menu">
          <router-link to="/classification">
            <div class="home-header-menu-icon">
              <img src="/static/images/logo.png">
            </div>
            <span class="home-header-menu-info">分类</span>
          </router-link>
        </div>
      </div>
      <div class="toutiao">
        <home-roll :list="rollList" :intervalTime="2000"></home-roll>
      </div>
      <div class="ui-flex wrap justify-space-between home-recommend">
        <div class="home-recommend-item">
          <router-link to="/">
            <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/13ab9babfa04b7dfda54ad58ee7911a7.jpg?thumb=1&w=358&h=508">
          </router-link>
        </div>
        <div class="ui-flex wrap justify-space-between home-recommend-item home-recommend-reset">
          <router-link to="/">
            <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d43803f20c8c53b840ce90f8e8869eec.jpg?thumb=1&w=358&h=252">
          </router-link>
          <router-link to="/">
            <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/22fb1734aa79d4ae26e92f63bf14ada3.jpg?thumb=1&w=358&h=252">
          </router-link>
        </div>
      </div>
      <div class="tips">
        <router-link to="/">
          <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c1c94b98d8401bf42fb771ff22faf50b.jpg?thumb=1&w=720&h=280">
        </router-link>
      </div>
      <div class="selected">
        <div class="selected-title">
          <router-link to="/">
            <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9b126f79cc101813ce3f524f58105e4b.jpg?thumb=1&w=720&h=440">
          </router-link>
        </div>
        <div class="ui-flex wrap align-center justify-space-between selected-info">
          <div class="good-item">
            <div class="goods-img-box">
              <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792">
            </div>
            <div class="goods-info">
              <div class="goods-name no-wrap">红米5</div>
              <div class="goods-price price">749起</div>
            </div>
          </div>
          <div class="good-item">
            <div class="goods-img-box">
              <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/850d316b25648c9862c7c22aefba9280.jpg?thumb=1&w=360&h=360">
            </div>
            <div class="goods-info">
              <div class="goods-name no-wrap">红米Note 5</div>
              <div class="goods-price price">1099起</div>
            </div>
          </div>
          <div class="good-item">
            <div class="goods-img-box">
              <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/29604ec81af943804efa172682c110be.jpg?thumb=1&w=720&h=792">
            </div>
            <div class="goods-info">
              <div class="goods-name no-wrap">红米Note 5A 标准版</div>
              <div class="goods-price price">649起</div>
            </div>
          </div>
          <div class="good-item">
            <div class="goods-img-box">
              <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792">
            </div>
            <div class="goods-info">
              <div class="goods-name no-wrap">红米5 Plus</div>
              <div class="goods-price price">949起</div>
            </div>
          </div>
        </div>
      </div>
      <app-nomore :isShow="true"></app-nomore>
      </pull-refresh>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import homeRoll from "./components/home-roll";
import api from "../../constant/api";

export default {
  data() {
    return {
      list: [],
      //测试数据
      rollList: [
        {
          info:
            "睡觉之前坚持两件事情，不知不觉就瘦了。胎儿出生体重越接近这个数，说明越聪明！"
        },
        { info: "胎儿出生体重越接近这个数，说明越聪明！" },
        { info: "卫生间这样装过时了，18年流行这种。" },
        { info: "三款骁龙845手机即将发布！难选" }
      ]
    };
  },
  components: { homeRoll },
  methods: {
    getData(resolve) {
      this.axios.get(api.banner).then(res => {
        if (res.status == "200") {
          this.list = res.data.banner;
          if (resolve) {
            setTimeout(() => {
              resolve();
            }, 1500);
          }
          // 另外一种写法
          // resolve && resolve();
        }
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/util";
.home-header {
  padding-top: pxToRem(15);
  background-color: #fff;
  .home-header-menu {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 49.5%;
    flex: 0 1 20%;
    overflow: hidden;
    text-align: center;
    .home-header-menu-icon {
      img {
        border-radius: 50%;
        width: 1.2rem;
        height: 1.2rem;
      }
    }
    .home-header-menu-info {
      font-size: pxToRem(12);
      vertical-align: super;
      color: #000;
    }
  }
}
.home-recommend {
  margin-top: pxToRem(8);
  background-color: #fff;
  .home-recommend-item {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 50%;
    flex: 0 1 49.5%;
  }
  .home-recommend-reset {
    flex-direction: column;
  }
}
.tips {
  margin-top: pxToRem(8);
  height: pxToRem(145);
}
.selected {
  margin-top: pxToRem(8);
  background-color: #fff;
  .selected-title {
    height: pxToRem(229);
  }
}
.toutiao {
  margin-top: pxToRem(8);
  padding: 0 pxToRem(20);
  background-color: #fff;
}
</style>
