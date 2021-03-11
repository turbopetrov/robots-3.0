<template lang="pug">
.factory-section__parts-block
  svgSprite
  .factory-section__parts-container.js-factory-bar(data-type="biomech")
    label.parts(v-for='part in 4')
      input.js-checkBox.parts__checkbox(type="checkbox", disabled)
      span.js-fakeCheckBox.parts__fake-checkbox(class='_disable')
        svg.parts__img
          use(xlink:href="#1")
  .factory-section__parts-container.js-factory-bar(data-type="processor")
    label.parts(v-for='part in 4') 
      input.js-checkBox.parts__checkbox(type="checkbox", disabled)
      span.js-fakeCheckBox.parts__fake-checkbox(class='_disable')
        svg.parts__img
          use(xlink:href="#2")
  .factory-section__parts-container.js-factory-bar(data-type="soul")
    label.parts
      input.js-checkBox.parts__checkbox(type="checkbox", disabled)
      span.js-fakeCheckBox.parts__fake-checkbox(class='_disable')
        svg.parts__img
          use(xlink:href="#3")
</template>

<script>
import svgSprite from "./svg-sprites.vue";
export default {
  components: {
    svgSprite,
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/mixins/mixins.scss";
@import "src/scss/ui-kit/colors.scss";
@import "../../../scss/ui-kit/parts.scss";
.factory-section__parts-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 232px;
  margin-top: 65px;
  .factory-section__parts-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;
  }
}
</style>