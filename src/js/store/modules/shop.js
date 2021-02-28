export default {
  state:{
    allShopCards: [
      {
        name: 'Биомеханизм',
        cost: 7,
        imagePath: '../../img/robotHand.svg',
        dataName: 'biomech',
        id: 1,          
      },
      {
        name: 'Процессор',
        cost: 5,
        imagePath: '../../img/processor.svg', 
        dataName: 'processor',  
        id: 2,        
      },
      {
        name: 'Душа',
        cost: 25,
        imagePath: '../../img/face.svg',
        dataName: 'soul',
        id: 3,           
      },
    ]
  },
  mutations:{
    
  },
  getters:{
   shopCards(state){
     return  state.allShopCards
   }
  },
}