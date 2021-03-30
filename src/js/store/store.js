import Vue from 'vue';
import Vuex from 'vuex';
import wallet from './modules/wallet';
import robotSelect from './modules/robotSelect';
import parts from './modules/parts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    wallet,
    robotSelect,
    parts,
  },
});
