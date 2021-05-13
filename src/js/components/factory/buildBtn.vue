<template lang="pug">
button.btn.factory-section__btn(
  :disabled="status ? false : true",
  :class="status ? 'btn_factory_normal' : 'btn_factory_disable'",
  @click="buildRobot()"
).
  Произвести биоробота
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["status"],
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["parts"]),
  },
  methods: {
    buildRobot() {
      this.$store.commit("resetParts");
      this.$store.commit("setRoboStatus", "_ready");
      this.$store.commit("removeCoins", 10);
      this.$store.commit("showFactoryPopup");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/ui-kit/buttons/btn_factory.scss";
.factory-section__btn {
  width: 236px;
}
</style>