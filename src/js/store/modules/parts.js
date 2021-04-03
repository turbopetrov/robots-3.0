import Vue from 'vue';

export default {
  state: {
    allParts: [
      {
        type: 'biomech',
        name: 'биомеханизм',
        shopImg: '../../img/robotHand.svg',
        buyCost: 7,
        sellCost: 5,
        needToBuild: 4,
        storageValue: 0,
        factoryValue: 0,
        installed: new Array(4).fill(false),
      },
      {
        type: 'processor',
        name: 'процессор',
        shopImg: '../../img/processor.svg',
        buyCost: 5,
        sellCost: 3,
        needToBuild: 4,
        storageValue: 0,
        factoryValue: 0,
        installed: new Array(4).fill(false),
      },
      {
        type: 'soul',
        name: 'душа',
        shopImg: '../../img/face.svg',
        buyCost: 25,
        sellCost: 15,
        needToBuild: 1,
        storageValue: 0,
        factoryValue: 0,
        installed: Array(1).fill(false),
      },
    ],
  },
  getters: {
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
    readyToBuildStatus(state,getters, rootState) {
      for (const i in state.allParts) {
        if (rootState.wallet.currentBallance < 10) {
          return false;
          break;
        }
        if (state.allParts[i].installed.includes(false)) {
          return false;
          break;
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
      state.allParts.forEach((part) => { part.factoryValue = 0; });
      for (const i in state.allParts) {
        const part = state.allParts[i];
        part.installed = new Array(part.needToBuild).fill(false);
      }
    },
  },
};
