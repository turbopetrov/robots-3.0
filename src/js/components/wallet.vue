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
            img.jsCoin.coins-block__coins-item(:src="coinPath", alt="Монетка")                       
        .paragraph_md.coins-block__coins-quantity
            span#coinsQuantity.coinsQuantity 1 biorobo монета
                     
    .wallet-section__action-block
        button#getCoinsBtn.action-block__btn.
            Нацыганить
        label.action-block__checkbox-label.checkbox.wallet-section__checkbox 
            input#coinsCheckbox.checkbox__input(type="checkbox")
            span.checkbox__fake-checkbox
            span.action-block__checkbox-text.
                Цыганить по 5 монет
</template>

<script>
export default {
  data(){
    return{
      coinPath: "../img/coin.png"
    }
  }
}
</script>

<style lang="scss" scoped>
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
  


  
</style>
