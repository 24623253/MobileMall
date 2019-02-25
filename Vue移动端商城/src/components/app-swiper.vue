<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) of list" :key="index" class="slide-height">
         <img :src="item.src" @click="$router.push('/goodDetails/'+item.id)" v-if="isDetail"  v-lazy="item.src" />
         <img :src="item.src" v-if="!isDetail" v-lazy="item.src" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "app-swiper",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    isDetail: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: {
          delay: 2000
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
.slide-height {
  height: 5rem;
  img {
    height: 100%;
  }
}
</style>
