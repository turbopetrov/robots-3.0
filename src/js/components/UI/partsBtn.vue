<template lang="pug">
.factory-section__parts-container
  button.parts._disabled(
    v-for="(part, index) in targetPart.needToBuild",
    :disabled="index + 1 > targetPart.storageValue + targetPart.factoryValue ? true : false",
    :class="[index + 1 > targetPart.storageValue + targetPart.factoryValue ? '' : '_active', targetPart.installed[index] ? '_installed' : '']",
    @click="changePartStatus(targetPart.type, index)"
  ) 
    svg.parts__img
      use(:xlink:href="'#' + targetPart.type")
</template>
  
<script>
import { mapGetters } from "vuex";
export default {
  props: ["type", "targetPart", "partHandler"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "biomechPart",
      "processorPart",
      "soulPart",
      "readyToBuildStatus",
    ]),
  },
  methods: {
    changePartStatus(type, index) {
      this.$store.commit("changePartStatus", { type, index });
      if (this.readyToBuildStatus === true) {
        this.$store.commit("setRoboStatus", "_active");
      } else this.$store.commit("setRoboStatus", "_disable");
    },
  },
};
</script>

<style lang="scss" scoped>
.parts {
  width: 48px;
  height: 48px;
  border: 2px solid $grey-color;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  &__img {
    width: 100%;
    height: 100%;
  }
}
.parts__img {
  width: 100%;
  height: 100%;
  fill: $light-grey-color;
}
._disabled {
  background-color: $grey-color;
  border-color: $grey-color;
  cursor: default;
  .parts__img {
    fill: $light-grey-color;
  }
}
._active {
  background-color: transparent;
  border-color: $white-color;
  cursor: pointer;
  .parts__img {
    fill: $white-color;
  }
}
._installed {
  background-color: transparent;
  border-color: $orange-color;
  .parts__img {
    fill: $orange-color;
  }
}
</style>