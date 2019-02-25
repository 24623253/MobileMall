import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import token from '../service/token'

// import Login from '../views/login'
// import Register from '../views/register'
// import Home from '../views/home'
// import Classification from '../views/classification'
// import Shoppingcart from '../views/shoppingcart'
// import Mine from '../views/mine'
// import Search from '../views/search'
// import GoodDetails from '../views/goodDetails'
// import Development from '../views/development'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    // 路由懒加载
    component: resolve => {
      require(['@/views/login/index.vue'], resolve)
    }
  },
  {
    path: '/register',
    name: 'register',
    component: resolve => {
      require(['@/views/register/index.vue'], resolve)
    }
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => {
      require(['@/views/home/index.vue'], resolve)
    }
  },
  {
    path: '/classification',
    name: 'classification',
    component: resolve => {
      require(['@/views/classification/index.vue'], resolve)
    }
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    meta: {
      requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
    },
    component: resolve => {
      require(['@/views/shoppingcart/index.vue'], resolve)
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: resolve => {
      require(['@/views/mine/index.vue'], resolve)
    }
  },
  {
    path: '/search',
    name: 'search',
    component: resolve => {
      require(['@/views/search/index.vue'], resolve)
    }
  },
  {
    path: '/goodDetails/:id',
    name: 'goodDetails',
    component: resolve => {
      require(['@/views/goodDetails/index.vue'], resolve)
    }
  },
  {
    path: '/development',
    name: 'development',
    component: resolve => {
      require(['@/views/development/index.vue'], resolve)
    }
  }
];

// 页面刷新时，重新赋值token
if (token.getInfo()) {
  store.commit('login', token.getInfo());
}

const router = new Router({
  routes
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.state.token) {  // 判断该路由是否需要登录权限
    next({
      path: '/login',
      query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    });
  } else {
    next();
  }
})

export default router;