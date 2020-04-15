import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      username: '',
      role: '',
    },
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = { ...userInfo };
    },
  },
  getters: {
    userInfo: (state) => state.userInfo,
  },
  actions: {
  },
  modules: {
  },
});
