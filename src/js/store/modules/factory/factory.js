import radio from  './factory__radio';
import parts from './factory__parts';

export default {
  modules:{
    radio,
    parts,
  },

  state: {
    f_title: 'test'
  },

  getters:{
    title(state){
      return state.f_title
    }
  },

  mutations:{

  },
}