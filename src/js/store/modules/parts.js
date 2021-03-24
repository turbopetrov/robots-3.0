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
        factoryValue:0, 
        installed: [false, false, false, false],
      },
      {
        type: 'processor',
        name: 'Процессор',
        shopImg: '../../img/processor.svg',
        buyCost: 5,
        sellCost: 3,
        needToBuild: 4,
        storageValue: 0,
        factoryValue:0,
        installed: new Array(4).fill(false),
      },
      {
        type: 'soul',
        name: 'Душа',
        shopImg: '../../img/face.svg',
        buyCost: 25,
        sellCost: 15,
        needToBuild: 1,
        storageValue: 0,
        factoryValue:0,
        installed: new Array(4).fill(false),
      },
    ],
  },
  getters: {
    parts(state){
      return state.allParts;
    },
    biomechPart(state) {
      return state.allParts.find((part)=>part.type === 'biomech');
    },
    processorPart(state) {
      return state.allParts.find((part)=>part.type === 'processor');
    },
    soulPart(state) {
      return state.allParts.find((part)=>part.type === 'soul');
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
    changePartStatus(state, partProps){
      const targetPart=state.allParts.find((part)=>part.type === partProps.type);
      if(targetPart.installed[partProps.index]){
        targetPart.installed[partProps.index]=!targetPart.installed[partProps.index];
        targetPart.storageValue++;
        targetPart.factoryValue--;
      }else{
        targetPart.installed[partProps.index]=!targetPart.installed[partProps.index];
        targetPart.storageValue--;
        targetPart.factoryValue++;
      }
      
            
    },
    
  },
};
