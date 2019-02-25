<template>
  <div class="good-details">
    <app-header mode="mode-three"></app-header>
    <div class="app-init app-init-reset" v-swiper='"swiperRight"'>
      <pull-refresh @load="getData">
        <app-swiper :list="details.banner" :isDetail="false"></app-swiper>
        <div class="content">
          <div class="hot">
            <img :src="details.hot">
          </div>
          <div class="title-box">
            <h3>{{ details.title }}</h3>
            <p style="color:#ff4a00">{{ details.bigContent }}</p>
            <p style="color: #757575"> {{ details.smallContent }} </p>

            <div class="press">
              <span class="money" v-if="details.money">￥{{ details.money }}</span>
              <span class="no-money" v-if="details.noMoney">￥{{ details.noMoney }}</span>
              <span class="tips" v-for="item of details.tips" :key="item">{{ item }}</span>
            </div>
          </div>

          <div class="touch-item-box">
            <div class="touch-item">
              <span class="key">已选</span>
              {{ details.chouse }}
            </div>
            <div class="touch-item">
              <span class="key">送至</span>
              <span v-for="item of details.address" :key="item">{{ item }}</span>
            </div>
          </div>

          <div class="touch-item-box">
            <div class="touch-item">
              <span class="key">配件</span>
            </div>
          </div>

          <div class="p-box">
            <img v-for="item of details.pBox" :key="item" v-lazy="item">
          </div>

          <app-nomore :isShow="true"></app-nomore>
        </div>
      </pull-refresh>
    </div>
    <div class="detail-footer">
      <div class="left-box fl">
        <div class="item" @click="$router.push('/home')">
          <p>
            <span class="iconfont icon-shouye"></span>
          </p>
          <p class="name">首页</p>
        </div>
        <div class="item cursom-shopcar" @click="$router.push('/shoppingcart')">
          <p>
            <span class="iconfont icon-gouwuche"></span>
          </p>
          <p class="name">购物车</p>
        </div>
      </div>
      <div @click="addToShopcar" class="right-box shop-car fl">
        加入购物车
        <span class="bool bool-animate" ref="bool"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import api from "../../constant/api";
import shopcar from "../../service/shopcar";

export default {
  name: "goodDetails",
  data() {
    return {
      id: "",
      details: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    getData(resolve) {
      this.axios.get(`${api.goodDetails}${this.id}.json`).then(res => {
        this.details = res.data;
        if (resolve) {
          resolve();
        }
      });
    },
    //判断元素在数组中是否存在
    isExist(id, arr) {
      let i = arr.length;
      while (i--) {
        if (arr[i].id === id) {
          return [true, i];
        }
      }
      return [false];
    },
    addToShopcar() {
      if (!this.$store.state.token) {
        this.$router.push({
          path: "/login",
          query: { redirect: `/goodDetails/${this.id}` }
        });
        return;
      }
      let shopcarList = shopcar.getInfo();
      console.log(shopcarList);
      if (shopcarList.length == 0) {
        this.details.checked = false;
        this.details.count = 1;
        shopcarList.push(this.details);
      } else {
        if (this.isExist(this.details.id, shopcarList)[0]) {
          if(shopcarList[this.isExist(this.details.id, shopcarList)[1]].count<5){
            shopcarList[this.isExist(this.details.id, shopcarList)[1]].count++;
          }
        } else {
          this.details.count = 1;
          this.details.checked = false;
          shopcarList.push(this.details);
        }
      }
      shopcar.setInfo(shopcarList);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/util";
.good-details {
  .title-box {
    background-color: #fff;
    margin-bottom: 0.2rem;
    padding: 0.2rem 0.4rem;
    font-size: pxToRem(12);
    h3 {
      font-size: 0.5rem;
      line-height: 1.5em;
      font-weight: normal;
      color: #333;
    }
    p {
      padding-top: 0.1rem;
    }
    .press {
      padding-top: 0.2rem;
      .money {
        color: #ff6700;
        font-size: 0.56rem;
        font-weight: 700;
      }
      .no-money {
        margin-left: 0.16rem;
        color: rgba(0, 0, 0, 0.54);
        text-decoration: line-through;
      }
      .tips {
        display: inline-block;
        line-height: 1em;
        padding: 0.2em;
        color: #fff;
        font-size: 0.3rem;
        background: #ff6700;
        margin-left: 0.2rem;
        border-radius: 2px;
        position: relative;
        top: -0.05rem;
      }
    }
  }
  .detail-footer {
    bottom: 0px;
    height: $footerHeight;
    background-color: #ffffff;
    position: absolute;
    width: 100%;
    -webkit-box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    .left-box {
      width: 40%;
      height: $footerHeight;
      text-align: center;
      .item {
        width: 50%;
        float: left;
        border-right: 1px solid #f5f5f5;
        height: $footerHeight;
        color: rgba(0, 0, 0, 0.54);
        font-size: 0.32rem;
      }
      .item .iconfont {
        font-size: 0.56rem;
        display: inline-block;
        padding-top: 0.2rem;
        padding-bottom: 0.05rem;
      }
      .cursom-shopcar {
        position: relative;
      }
      .num {
        position: absolute;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        line-height: 0.7rem;
        text-align: center;
        background-color: #f95c52;
        color: #fff;
        right: 0;
        top: 0.1rem;
      }
      .full {
        font-size: 0.3rem;
      }
    }
    .right-box {
      height: $footerHeight;
      line-height: $footerHeight;
      text-align: center;
      color: #fff;
      font-size: 0.45rem;
      background-color: #ff6700;
      width: 60%;
    }
    .shop-car {
      position: relative;
      .bool {
        position: absolute;
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        background-color: #f2f2f2;
        left: 50%;
        top: 50%;
        margin-left: -0.2rem;
        margin-top: -0.2rem;
        border-radius: 50%;
        display: none;
      }
    }
  }
}
</style>
