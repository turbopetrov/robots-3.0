<template lang="pug">
  section.storage-section
    sideBar(number='04')
    h2.storage-section__heading.heading_md.
        Склад
    .card-block
      card(
          v-for='card in parts'
          :card='card'
          :key='card.type'       
          cardType='storage'
          :btnDisabled='card.storageValue<1'
          btnTitle='Продать'
          @action='sellPart(card.type, card.sellCost)'
          )  
</template>

<script>
import sideBar from './UI/sideBar.vue';
import card from './UI/card.vue'
import {mapGetters} from 'vuex';
export default {
  components:{
    card,
    sideBar
  },
  data(){
    return{
      buttonActive: 'btn_type2_normal',
      buttonDisable: 'btn_type2_disable',
    }
  },

  computed:{
    ...mapGetters(['ballance', 'parts']),
   
  },
  methods:{
    sellPart(partType, sellCost){ 
      if(this.ballance+sellCost>100){
        this.$store.commit('showWalletPopup')
      }else{
        this.$store.commit('addCoins', sellCost);
        this.$store.commit('removePart', partType);
      }            
    }
  }
}
</script>

<style lang="scss" scoped>
.storage-section {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
 .card-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;    
  } 
}
</style>