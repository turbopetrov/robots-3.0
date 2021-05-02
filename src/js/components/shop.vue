<template lang="pug">
  section.shop-section
    sideBar(number='03')
    h2.shop-section__heading.heading_md.
        Рынок комплектующих
    .card-block
      card(
        v-for='card in parts'
        :card='card'
        :key='card.type'       
        cardType='shop'
        :btnDisabled='card.buyCost>ballance'
        btnTitle='Установить'
        @action='buyPart(card.buyCost, card.type)'
        )        
</template>

<script>
import sideBar from './UI/sideBar.vue';
import card from './UI/card.vue';
import{mapGetters} from 'vuex';
export default {
  components:{
    card,
    sideBar
  },
  data(){
    return{
      
    }
  },
  computed: {
    ...mapGetters(['ballance', 'parts']),    
  },
  methods:{    
    buyPart(quantity, type){
      this.$store.commit('removeCoins', quantity);
      this.$store.commit('addPart', type);           
    }, 
    test(){
      console.log('test');
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
.card-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;    
} 

</style>