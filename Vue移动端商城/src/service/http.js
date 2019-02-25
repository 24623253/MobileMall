import axios from 'axios'
import store from '../store'
import router from '../router'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/static/server/data/';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    console.log(err.response);
    if (err.response) {
      switch (err.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit('logout');
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
      }
    }
    return Promise.reject(err.response.data)
  });

export default axios;