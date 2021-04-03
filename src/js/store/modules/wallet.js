export default {
  state: {
    isWalletPopupShow:false,
    currentBallance: 75,
  },
  mutations: {
    addCoins(state, quantity) {
      if (state.currentBallance + quantity > 100) {
        state.isWalletPopupShow=true;
      } else {
        state.currentBallance += quantity;
      }
    },
    removeCoins(state, quantity) {
      state.currentBallance -= quantity;
    },
    showWalletPopup(state){
      state.isWalletPopupShow = true;
    },
    closeWalletPopup(state){
      state.isWalletPopupShow = false;
    }
  },
  getters: {
    isWalletPopupShow(state){
      return state.isWalletPopupShow
    },
    ballance(state) {
      return state.currentBallance;
    },
    walletMessage(state) {
      const varWords = [' монета', ' монеты', ' монет'];
      let n = state.currentBallance;
      return varWords[
        (n %= 100, n < 20 && n > 4) ? 2
          : [2, 0, 1, 1, 1, 2][(n %= 10, n < 5) ? n : 5]
      ];
    },
  },
};
