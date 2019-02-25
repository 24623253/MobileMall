import Vue from 'vue'
import Vuex from 'vuex'

import tokenService from '../service/token'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    login(state, data) {
      tokenService.setInfo(data);
      state.token = data.token;
    },
    logout(state) {
      tokenService.removeInfo();
      state.token = null;
    }
  }
})