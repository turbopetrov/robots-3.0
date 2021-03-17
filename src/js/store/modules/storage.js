export default {
  state: {
    allStorageCards: [
      {
        name: 'Биомеханизм',
        partValue: 0,
        sellCost: 5,
        partType: 'biomech',
      },
      {
        name: 'Процессор',
        partValue: 0,
        sellCost: 3,
        partType: 'processor',
      },
      {
        name: 'Душа',
        partValue: 0,
        sellCost: 15,
        partType: 'soul',
      },
    ],
  },

  mutations: {
    addPart(state, type) {
      const targetPart = state.allStorageCards.find((card) => card.partType === type);
      targetPart.partValue++;
    },
    removePart(state, type) {
      const targetPart = state.allStorageCards.find((card) => card.partType === type);
      targetPart.partValue--;
    },
  },

  getters: {
    storageCards(state) {
      return state.allStorageCards;
    },
  },
};
