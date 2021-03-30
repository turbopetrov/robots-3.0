export default {
  state: {
    currentBallance: 75,
  },
  mutations: {
    addCoins(state, quantity) {
      if (state.currentBallance + quantity > 100) {
        alert('test');
      } else {
        state.currentBallance += quantity;
      }
    },
    removeCoins(state, quantity) {
      state.currentBallance -= quantity;
    },
  },
  getters: {
    ballance(state) {
      return state.currentBallance;
    },
  },
};
