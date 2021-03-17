import Vue from 'vue';
import Vuex from 'vuex';
import wallet from './modules/wallet';
import storage from './modules/storage';
import factory from './modules/factory/factory';
import parts from './modules/parts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    wallet,
    storage,
    factory,
    parts,
  },
});
