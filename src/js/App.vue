<template lang="pug">
#app.page
  .container_wide
    app__header
    .container_slim 
      app__title
      app__wallet
      app__shop
      app__storage
      app__factory
  popup(
    type="wallet",
    title="Количество монет ограничено",
    paragraph="Вы не можете нацыганить более 100 монет biorobo",
    :isShow="isWalletPopupShow",
    :closeBtnHandler="closeWalletPopup"
  ) 
  popup(
    type="factory",
    title="Биоробот произведен",
    paragraph="Поздравляем! Вы произвели биоробота",
    :isShow="isFactoryPopupShow",
    :closeBtnHandler="closeFactoryPopup"
  ) 
</template>

<script>
import app__header from "./components/header.vue";
import app__title from "./components/title-section.vue";
import app__wallet from "./components/wallet.vue";
import app__shop from "./components/shop.vue";
import app__storage from "./components/storage.vue";
import app__factory from "./components/factory/factory.vue";
import popup from "./components/UI/popup.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    app__header,
    app__title,
    app__wallet,
    app__shop,
    app__storage,
    app__factory,
    popup,
  },
  data() {
    return {};
  },
  created: function () {
    this.$store.commit("resetParts");
  },
  computed: {
    ...mapGetters(["isWalletPopupShow", "isFactoryPopupShow"]),
  },

  methods: {
    closeWalletPopup() {
      this.$store.commit("closeWalletPopup");
    },
    closeFactoryPopup() {
      this.$store.commit("closeFactoryPopup");
      this.$store.commit("setRoboStatus", "_disable");
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  padding-bottom: 40px;
  background: radial-gradient(82.33% 70.44% at 50% 0%, #26394d 0%, #212529 100%)
    no-repeat;
  .container_wide {
    display: flex;
    flex-direction: column;
    width: 1016px;
    height: 100%;
    .container_slim {
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: space-between;
      width: 754px;
      height: 100%;
    }
  }
}
</style>