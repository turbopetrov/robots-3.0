export default {
  state: {
    isWalletPopupShow: false,
    currentBallance: 75,
  },
  mutations: {
    addCoins(state, quantity) {
      if (state.currentBallance + quantity > 100) {
        state.isWalletPopupShow = true;
      } else {
        state.currentBallance += quantity;
      }
    },
    removeCoins(state, quantity) {
      state.currentBallance -= quantity;
    },
    showWalletPopup(state) {
      state.isWalletPopupShow = true;
    },
    closeWalletPopup(state) {
      state.isWalletPopupShow = false;
    },
  },
  getters: {
    isWalletPopupShow(state) {
      return state.isWalletPopupShow;
    },
    ballance(state) {
      return state.currentBallance;
    },
  },
};
