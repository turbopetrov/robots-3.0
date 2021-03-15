export default{
  state:{
    checkedParts:{
      
    }
  },
  getters:{
    checkedParts(state){
      return state.checkedParts
    }
  },
  mutations:{
    setCheckedParts(state, object){
      state.checkedParts = object
    }
  }
}