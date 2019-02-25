<template>
  <div>
    <app-header mode="mode-one" title="购物车"></app-header>
    <div class="app-init app-init-reset">
      <pull-refresh @load="getData">
      <div class="shopcar">
        <ul>
          <li v-for="(item,index) of list" :key="index">
            <div class="fl check">
              <input type="checkbox" v-model="item.checked" @change="total" />
            </div>
            <div @click="$router.push('/goodDetails/'+item.id)" class="fl img">
              <img :src="item.banner[0].src" />
            </div>
            <div class="fl des">
              <p class="info">{{item.title}}</p>
              <p class="price">售价：{{item.money}}元</p>
              <increase-decrease :index="index" :initValue="item.count" :minValue="1" :maxValue="5" @getValue="getValue"></increase-decrease>
            </div>
            <div @click="deleteGood(index)" class="delete">
              <span class="iconfont icon-del"></span>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="listTip" class="shopcart-img">
        <router-link to="/">
          <img src="/static/images/empty-car.png" />
        </router-link>
      </div>
      <div class="shopcart-img">
        <img src="/static/images/guess-love.jpg" />
      </div>
      <div class="ui-flex wrap align-center justify-space-between">
        <div v-for="(item,index) of guessList" :key="index" @click="$router.push('/goodDetails/'+item.id)" class="good-item">
          <div class="goods-img-box">
            <img :src="item.src">
          </div>
          <div class="goods-info">
            <div class="goods-name no-wrap">{{item.title}}</div>
            <div class="goods-price price">{{item.money}}</div>
          </div>
        </div>
      </div>
      <app-nomore :isShow="true"></app-nomore>
      </pull-refresh>
    </div>
    <div class="ui-flex align-center justify-space-between settlement">
      <div class="ui-flex align-center justify-space-between item bg0">
        <p class="num">共{{counts}}件 金额：</p>
        <p><span class="price">{{totalPrice}}</span>元</p>
      </div>
      <div @click="$router.push('classification')" class="ui-flex align-center justify-space-between item bg1">继续购物</div>
      <div class="ui-flex align-center justify-space-between item bg2">去结算</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import api from "../../constant/api";
import shopcar from "../../service/shopcar";
import increaseDecrease from "./components/increase-decrease";

export default {
  data() {
    return {
      list: [],
      listTip: true,
      guessList: [],
      totalPrice: 0,
      counts: 0
    };
  },
  components: { increaseDecrease },
  methods: {
    getData(resolve) {
      this.list = [];
      this.list = shopcar.getInfo();
      console.log(this.list);
      this.total();
      if (this.list.length) {
        this.listTip = false;
      } else {
        this.listTip = true;
      }
      this.axios.get(api.goodsList).then(res => {
        this.guessList = res.data.list;
        if (resolve) {
          resolve();
        }
      });
    },
    getValue(arr) {
      this.list[arr[0]].count = arr[1];
      shopcar.setInfo(this.list);
      this.total();
    },
    deleteGood(index) {
      this.list.splice(index, 1);
      if (this.list.length) {
        this.listTip = false;
      } else {
        this.listTip = true;
      }
      shopcar.setInfo(this.list);
      this.total();
    },
    total() {
      this.totalPrice = 0;
      this.counts = 0;
      this.list.map(item => {
        if (item.checked) {
          this.totalPrice += item.money * item.count;
        }
        this.counts += item.count;
      });
      shopcar.setInfo(this.list);
    }
  },
  activated() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/util";
.shopcar {
  background-color: #fff;
  overflow: hidden;
  ul {
    li {
      position: relative;
      padding: pxToRem(12);
      border-bottom: 1px solid #f6f6f6;
      overflow: hidden;
      .check {
        width: pxToRem(20);
        height: pxToRem(20);
        margin-top: 0.8rem;
        margin-right: 0.3rem;
        input {
          width: 100%;
          height: 100%;
          -webkit-appearance: checkbox;
        }
      }
      .img {
        width: pxToRem(91);
        height: pxToRem(91);
      }
      .des {
        width: pxToRem(190);
        margin-left: 0.3rem;
        .info {
          margin-top: 0.1rem;
          font-size: pxToRem(15);
          color: #666;
        }
        .price {
          margin-top: 0.1rem;
          margin-bottom: 0.2rem;
          font-size: pxToRem(12);
          color: #999;
        }
      }
      .delete {
        position: absolute;
        bottom: pxToRem(12);
        right: pxToRem(12);
        span {
          font-size: pxToRem(24);
        }
      }
    }
  }
}
.shopcart-img {
  height: pxToRem(62);
}
.ui-flex {
  width: 100%;
}
.app-init-reset {
  margin-bottom: 2 * $footerHeight;
}
.settlement {
  position: absolute;
  bottom: $footerHeight;
  left: 0;
  height: $footerHeight;
  background-color: #fff;
  font-size: pxToRem(18);
  .item {
    flex: 1;
    height: 100%;
    justify-content: center;
  }
  .bg0 {
    flex-direction: column;
    color: #999;
    font-size: pxToRem(16);
    .price {
      color: #ff5722;
      font-size: pxToRem(20);
    }
  }
  .bg1 {
    background-color: #f4f4f4;
  }
  .bg2 {
    background-color: #ff6700;
    color: #fff;
  }
}
</style>
