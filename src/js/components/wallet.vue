<template lang="pug">
  section.wallet-section
    .side-bar
        p.side-bar__screen-number.
            02
    .wallet-section__title-block
        h2.wallet-section__title.heading_md.
            Кошелек криптовалют
    .wallet-section__coins-block
        .coins-block__coins                     
            img.coins-block__coins-item(:src="coinPath", v-for='coin in ballance' alt="Монетка")                       
        .paragraph_md.coins-block__coins-quantity.
            {{ballance}} biorobo {{message}}
                     
    .wallet-section__action-block
        button.action-block__btn(@click="getCoins(getCoinsValue)").
            Нацыганить
        label.action-block__checkbox-label.checkbox.wallet-section__checkbox
            input.checkbox__input(type="checkbox", v-model="getCoinsValue", :true-value='5', :false-value="1")
            span.checkbox__fake-checkbox
            span.action-block__checkbox-text.
                Цыганить по 5 монет
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      coinPath: "../img/coin.png",        
      getCoinsValue: 1,          
    }
  },
  methods:{
    getCoins(quantity){ 
      ((this.ballance+quantity)>100)
        ?alert('test'):this.$store.commit('addCoins', quantity);       
    },    
  },
  computed:{
    message(){ 
      const varWords = [' монета',' монеты', ' монет' ];
      let n = this.ballance;
      return varWords[
       (n %= 100, 20 > n && n > 4) ? 2
         :[2,0,1,1,1,2][ (n %= 10, n < 5) ? n : 5]
      ]      
    },
    ...mapGetters(['ballance']),
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/ui-kit/colors.scss';
@import "../../scss/ui-kit/checkbox.scss";
  .wallet-section {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 110px;
    &__coins-block{
      margin-top: 60px;
    }
  } 
  .coins-block__coins {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
  .coins-block__coins-item {
    margin-bottom: 5px;
    margin-left: -7px;
    &:last-child {
      margin-left: 0;
    }
  } 
  .coins-block__coins-quantity {
    margin-top: 43px;
  }

  //----------------- Action Block---------------//

  .action-block__checkbox-label {
  display: flex;
}
.action-block__checkbox-text {
  color: $white-color;  
  font: 16px/150% Montserrat;
  font-weight: 500;
  font-style: normal;  
}
.wallet-section__action-block {
  display: flex;
  margin-top: 43px;
}
.action-block__btn {
  margin-right: 23px;
  padding: 0;
  color: $orange-color;
  font: 16px/150% Montserrat; 
  font-weight: 500;  
  font-style: normal;
  background-color: transparent;
  border: 0px;
  border-bottom: 1px solid $orange-color;
  outline: none;
  cursor: pointer;  
}  
</style>
