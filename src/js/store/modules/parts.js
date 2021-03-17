export default {
  state: {
    allParts: [
      {
        type: 'biomech',
        name: 'Биомеханизм',
        shopImg: '../../img/robotHand.svg',
        buyCost: 7,
        sellCost: 5,
        needToBuild: 4,
        storageValue: 0,
        factoryValue: [false, false, false, false],
      },
      {
        type: 'processor',
        name: 'Процессор',
        shopImg: '../../img/processor.svg',
        buyCost: 5,
        sellCost: 3,
        needToBuild: 4,
        storageValue: 0,
        factoryValue: [false, false, false, false],
      },
      {
        type: 'soul',
        name: 'Душа',
        shopImg: '../../img/face.svg',
        buyCost: 25,
        sellCost: 15,
        needToBuild: 1,
        storageValue: 0,
        factoryValue: [false, false, false, false],
      },
    ],
  },
  getters: {
    parts(state) {
      return state.allParts;
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
  },
};
