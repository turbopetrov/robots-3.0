export default {
  state:{
    currentBallance: 1
  },
  mutations:{
    addCoins (state, quantity) {
      state.currentBallance+=quantity      
    },
    removeCoins(state, quantity){
      state.currentBallance-=quantity
    }
  },
  getters:{
    ballance(state){
      return state.currentBallance
    }
  },
}