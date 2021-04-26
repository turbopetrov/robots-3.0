<template lang="pug">
  .card-block
    .card(v-for='card in parts' :key ='card.type')
      .card__img-container(v-if='cardType==="shop"')  
        img.shop-card__img(
          :src='card.shopImg',
          :alt='card.img'
        )
      h3.card__heading.heading_sm| {{card.name}}
      p.card__paragraph.paragraph_sm.
        Стоимость {{(cardType==='shop')?card.buyCost:card.sellCost}} монет
      h3.card__heading.heading_sm(v-if='cardType==="storage"').
        {{card.storageValue}} шт
      mainBtn.card__btn(
              :btnType='cardType',
              :status='btnStatus',
              :btnTitle='btnTitle',                            
              )
      

</template>

<script>
import mainBtn from './button.vue';
import{mapGetters} from 'vuex';
export default {
  props:['cardType', 'btnStatus', 'btnTitle', ],
  components:{
    mainBtn
  },
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters(['ballance', 'parts']),
    
  }
}
</script>

<style lang="scss" scoped>
  .card-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
  }
  
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 236px;
    &__img-container{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 236px;
      height: 128px;
      margin-top: 60px;
    }
    &__heading{
      margin-top: 56px;
    }
    &__paragraph{
      margin-top: 5px;
    }
    &__btn{
      margin-top: 36px;
    }
  }

</style>