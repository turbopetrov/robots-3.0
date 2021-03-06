import Vue from 'vue';

export default {
  state: {
    isFactoryPopupShow: false,
    allParts: [
      {
        type: 'biomech',
        name: 'Биомеханизм',
        shopImg: '../../img/robotHand.svg',
        buyCost: 7,
        sellCost: 5,
        needToBuild: 4,
        storageValue: 0,
        factoryValue: 0,
        installed: [],
      },
      {
        type: 'processor',
        name: 'Процессор',
        shopImg: '../../img/processor.svg',
        buyCost: 5,
        sellCost: 3,
        needToBuild: 4,
        storageValue: 0,
        factoryValue: 0,
        installed: [],
      },
      {
        type: 'soul',
        name: 'Душа',
        shopImg: '../../img/face.svg',
        buyCost: 25,
        sellCost: 15,
        needToBuild: 1,
        storageValue: 0,
        factoryValue: 0,
        installed: [],
      },
    ],
  },
  getters: {
    isFactoryPopupShow(state) {
      return state.isFactoryPopupShow;
    },
    parts(state) {
      return state.allParts;
    },
    biomechPart(state) {
      return state.allParts.find((part) => part.type === 'biomech');
    },
    processorPart(state) {
      return state.allParts.find((part) => part.type === 'processor');
    },
    soulPart(state) {
      return state.allParts.find((part) => part.type === 'soul');
    },
    readyToBuildStatus(state, getters, rootState) {
      for (const i in state.allParts) {
        if (rootState.wallet.currentBallance < 10) {
          return false;
        }
        if (state.allParts[i].installed.includes(false)) {
          return false;
        }
      } return true;
    },
  },

  mutations: {
    addPart(state, type) {
      const targetPart = state.allParts.find((part) => part.type === type);
      targetPart.storageValue++;
    },
    removePart(state, type) {
      const targetPart = state.allParts.find((part) => part.type === type);
      targetPart.storageValue--;
    },
    changePartStatus(state, partProps) {
      const targetPart = state.allParts.find((part) => part.type === partProps.type);
      if (targetPart.installed[partProps.index]) {
        Vue.set(targetPart.installed, partProps.index, !targetPart.installed[partProps.index]);
        targetPart.storageValue++;
        targetPart.factoryValue--;
      } else {
        Vue.set(targetPart.installed, partProps.index, !targetPart.installed[partProps.index]);
        targetPart.storageValue--;
        targetPart.factoryValue++;
      }
    },
    resetParts(state) {
      state.allParts.map((part) => { part.factoryValue = 0; });
      state.allParts.forEach((part) => { part.installed = new Array(part.needToBuild).fill(false); });
    },
    showFactoryPopup(state) {
      state.isFactoryPopupShow = true;
    },
    closeFactoryPopup(state) {
      state.isFactoryPopupShow = false;
    },
  },
};
