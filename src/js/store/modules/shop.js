export default {
  state:{
    allShopCards: [
      {
        name: 'Биомеханизм',
        cost: 7,
        imagePath: '../../img/robotHand.svg',
        partType: 'biomech',                  
      },
      {
        name: 'Процессор',
        cost: 5,
        imagePath: '../../img/processor.svg', 
        partType: 'processor',                
      },
      {
        name: 'Душа',
        cost: 25,
        imagePath: '../../img/face.svg',
        partType: 'soul',                  
      },
    ]
  }, 
  getters:{
   shopCards(state){
     return  state.allShopCards
   }
  },
}