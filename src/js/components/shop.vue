<template lang="pug">
  section.shop-section
    .side-bar
        p.side-bar__screen-number.
            03
    h2.shop-section__heading.heading_md.
        Рынок комплектующих
    //- .shop-section__card-block
    //-   .shop-card(v-for='card in parts' :key ='card.type')
    //-     .shop-card__img-container
    //-         img.shop-card__img(:src='card.shopImg',
    //-                            :alt='card.name')
    //-     h3.shop-card__heading.heading_sm| {{card.name}}           
    //-     p.shop-card__paragraph.paragraph_sm| Стоимость {{card.buyCost}} монет
    //-     .shop-card__btn
    //-       mainBtn(type='btn_type1',
    //-              :status='card.buyCost>ballance?false:true',
    //-              @handler='buyPart(card.buyCost, card.type)'
    //-               ).
    //-         Установить
    card(cardType='shop',
        btnStatus='false',
        btnTitle='Устаановить', 
            
        )
        
</template>

<script>
import card from './UI/card.vue';
import{mapGetters} from 'vuex';
export default {
  components:{
    card
  },
  data(){
    return{
      buttonActive: 'btn_type1_normal',
      buttonDisable: 'btn_type1_disable',
    }
  },
  computed: {
    ...mapGetters(['ballance', 'parts']),    
  },
  methods:{
    buyPart(quantity, type){
      this.$store.commit('removeCoins', quantity);
      this.$store.commit('addPart', type);           
    }    
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/ui-kit/colors.scss';
@import '../../scss/ui-kit/buttons/btn_type1.scss';
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