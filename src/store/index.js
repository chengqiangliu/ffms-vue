import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      username: '',
      role: '',
    },
    masterData: {
      goodsTypeList: [],
      bankTypeList: [],
      cardTypeList: [],
      currencyList: [],
    },
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = { ...userInfo };
    },
    setMasterData(state, masterData) {
      state.masterData = { ...masterData };
    },
  },
  getters: {
    userInfo: (state) => state.userInfo,
    masterData: (state) => state.masterData,
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
});
