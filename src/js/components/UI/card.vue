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
      mainBtn(:btnType='cardType'
              
              )
      

</template>

<script>
import mainBtn from './button.vue';
import{mapGetters} from 'vuex';
export default {
  props:['cardType'],
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

</style>