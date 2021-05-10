<template lang="pug">
section.wallet-section
  sideBar(number="02")
  .wallet-section__title-block
    h2.wallet-section__title.heading_md.
      Кошелек криптовалют
  .wallet-section__coins-block
    .coins-block__coins 
      img.coins-block__coins-item(
        src="src/img/coin.png",
        v-for="coin in ballance",
        alt="Монетка"
      ) 
    .paragraph_md.coins-block__coins-quantity.
      {{ballance}} biorobo {{walletMessage}}         
  .wallet-section__action-block
    button.action-block__btn(@click="getCoins(getCoinsValue)").
      Нацыганить
    checkbox(
      label="Цыганить по 5 монет",
      :trueValue=5,
      :falseValue=1,
      @getValue="setGetCoinsValue"
    ) 
</template>

<script>
import checkbox from "./UI/checkbox.vue";
import wordForm from "../utils/functions.js";
import sideBar from "./UI/sideBar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    sideBar,
    checkbox,
  },
  data() {
    return {
      getCoinsValue: 1,
    };
  },
  methods: {
    setGetCoinsValue(value) {
      this.getCoinsValue = value;
    },
    getCoins(quantity) {
      this.$store.commit("addCoins", quantity);
    },
  },
  computed: {
    ...mapGetters(["ballance", "walletMessage"]),
    walletMessage() {
      return wordForm([" монета", " монеты", " монет"], this.ballance);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/ui-kit/colors.scss";
.wallet-section {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  &__coins-block {
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
