<template lang="pug">
  section.storage-section
    .side-bar
        p.side-bar__screen-number.
            04
    h2.storage-section__heading.heading_md.
        Склад
    .storage-section__card-block
      .storage-card(v-for='card in parts' :key='card.type')
        h3.storage-card__heading.heading_sm.
          {{card.name}}    
        p.storage-card__paragraph.paragraph_sm.
          Стоимость {{card.sellCost}} монет
        h3.storage-card__heading.heading_sm.
          {{card.storageValue}} шт                                             
        button.btn.storage-card__btn(:class ='(card.storageValue<1)?buttonDisable:buttonActive',
                                     :disabled='card.storageValue<1',
                                     @click='sellPart(card.type, card.sellCost)'
                                    ).
          Продать
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      buttonActive: 'btn_type2_normal',
      buttonDisable: 'btn_type2_disable',
    }
  },

  computed:{
    ...mapGetters(['ballance', 'parts'])
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
  .storage-section__card-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 60px;
  }
}
.storage-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 236px;
  .storage-card__heading {
    margin-top: 5px;
  }
  .storage-card__paragraph {
    margin-top: 15px;
  }
  .storage-card__btn {
    margin-top: 36px;
  }
}
</style>