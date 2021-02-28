<template lang="pug">
  section.shop-section
    .side-bar
        p.side-bar__screen-number.
            03
    h2.shop-section__heading.heading_md.
        Рынок комплектующих
    .shop-section__card-block
      .shop-card(v-for='(card, index) of shopCards' :key ='card.dataName')
        .shop-card__img-container
            img.shop-card__img(:src='card.imagePath', :alt='card.name')
        h3.shop-card__heading.heading_sm| {{card.name}}           
        p.shop-card__paragraph.paragraph_sm| Стоимость {{card.cost}} монет        
        button.btn.shop-card__btn(:class ='(card.cost>ballance)?buttonDisable:buttonActive',
                                  :disabled='card.cost>ballance',
                                  @click='removeCoins(card.cost)').
            Установить  
</template>

<script>
import{mapGetters} from 'vuex';
export default {
  data(){
    return{
      buttonActive: 'btn_type1_normal',
      buttonDisable: 'btn_type1_disable',
    }
  },
  computed: {
    ...mapGetters(['shopCards', 'ballance']),    
  },
  methods:{
    removeCoins(quantity){
      this.$store.commit('removeCoins', quantity);      
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