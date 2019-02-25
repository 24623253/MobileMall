import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 导入amfe-flexible
import 'amfe-flexible'

// http请求插件
import axios from './service/http'
// 图片懒加载插件
import VueLazyload from 'vue-lazyload'

// 注册全局指令
import swiperback from '@/directives/swiperback'
import autofocus from '@/directives/autofocus'
Vue.directive('swiper', swiperback);
Vue.directive('autofocus', autofocus);

// 全局组件
import '@/components'

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;

// 安装图片懒加载插件
Vue.use(VueLazyload)

// 创建 Vue 实例
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


