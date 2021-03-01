import Vue from 'vue';
import Vuex from 'vuex';
import wallet from './modules/wallet';
import shop from './modules/shop';
import storage from './modules/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    wallet,
    shop,
    storage,
  }
})