<template lang="pug">
  section.shop-section
    .side-bar
        p.side-bar__screen-number.
            03
    h2.shop-section__heading.heading_md.
        Рынок комплектующих
    .shop-section__card-block
      .shop-card(:data-name= 'card.dataName', v-for='card in shopCards')
        .shop-card__img-container
            img.shop-card__img(:src='card.imagePath', :alt='card.name')
        h3.shop-card__heading.heading_sm| {{card.name}}    
        p.shop-card__paragraph.paragraph_sm| Стоимость {{card.cost}} монет        
        button.btn.btn_type1_disable.shop-card__btn('disabled' = true).
            Установить  
</template>

<script>
export default {
  data(){
    return{
      shopCards: [
        {
          name: 'Биомеханизм',
          cost: 7,
          imagePath: '../../img/robotHand.svg',
          dataName: 'biomech',          
        },
        {
          name: 'Процессор',
          cost: 5,
          imagePath: '../../img/processor.svg', 
          dataName: 'processor',          
        },
        {
          name: 'Душа',
          cost: 25,
          imagePath: '../../img/face.svg',
          dataName: 'soul',           
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/ui-kit/colors.scss';
.shop-section {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  &__card-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
  }
}  
.shop-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 236px;
  .shop-card__img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 236px;
    height: 128px;
    margin-top: 60px;    
    .shop-card__img {
      width: 100%;
      height: auto;
    }
  }
  .shop-card__heading {
    margin-top: 25px;
  }
  .shop-card__paragraph {
    margin-top: 5px;
  }
  .shop-card__btn {
    margin-top: 36px;
  }
}
</style>