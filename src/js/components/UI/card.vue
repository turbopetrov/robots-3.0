<template lang="pug">
.card
  .card__img-container(v-if="cardType === 'shop'") 
    img.shop-card__img(:src="card.shopImg", :alt="card.img")
  h3.card__heading.heading_sm {{card.name}}
  p.card__paragraph.paragraph_sm.
    Стоимость {{(cardType==='shop')?card.buyCost:card.sellCost}} монет
  h3.card__heading_storage.heading_sm(v-if="cardType === 'storage'").
    {{card.storageValue}} шт
  btn(
    :btnType='cardType'
    :btnDisabled='btnDisabled'
    @action='btnHandler'
    ).card__btn.
    {{btnTitle}}   
</template>

<script>
import btn from "./button.vue";
import { mapGetters } from "vuex";
export default {
  props: {
    card: Object,
    cardType: String,
    btnDisabled: Boolean,
    btnTitle: String,
  },
  components: {
    btn,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["ballance", "parts"]),
    btnClass() {
      return [
        this.btnDisabled
          ? "btn_" + this.cardType + "_disable"
          : "btn_" + this.cardType + "_normal",
      ];
    },
    
  },
  methods: {
    btnHandler() {
      this.$emit("action");
    },    
  },
};
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 236px;
  &__img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 236px;
    height: 128px;
    margin-top: 60px;
  }
  &__heading {
    margin-top: 56px;
  }
  &__heading_storage {
    margin-top: 15px;
  }
  &__paragraph {
    margin-top: 5px;
  }
  &__btn {
    width: 200px;
    height: 48px;
    margin-top: 24px;
    font-weight: 500;
    font-size: 16px;
    font-family: Montserrat;
    font-style: normal;
    text-align: center;
    border: 2px solid;
    border-radius: 60px;
    outline: none;
    cursor: pointer;
  }
}
</style>