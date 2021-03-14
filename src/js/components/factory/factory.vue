<template lang="pug">
section.factory-section
  .side-bar
    p.side-bar__screen-number.
      05
  .factory-section__grid-container
    .factory-section__title-block
      h2.heading_md.factory-section__heading.
        Производство
    radioBlock
    partsBlock 
    .factory-section__img-block
      img.factory-section__robot-img(:src="imgDisable")
    .factory-section__btn-block
      button.js-buildBtn.btn.btn_type3_disable.factory-section__btn(
        disabled="true"
      ).
        Произвести за 10 монет
    .factory-section__message-block
      p.paragraph_xs.factory-section__message.js-factoryMessage.
        Для производства биоробота не хватает биомеханизмов, процессоров, души и монет
</template>

<script>
import radioBlock from "./radio-block.vue";
import partsBlock from "./parts-block.vue";
import {mapGetters} from 'vuex';
export default {
  components: {
    radioBlock,
    partsBlock,
  },
  data(){
    return{
    }
  },

  computed:{
    ...mapGetters(['selectedRobot']),
    imgDisable(){
      return 'src/img/' + this.selectedRobot+ '_disable.png'
    }
    
  }
};
</script>

<style lang="scss" scoped>
.factory-section {
  position: relative;
  margin-top: 100px;
  .factory-section__grid-container {
  display: grid;
  grid-template-areas:
    "title title title"
    "radio parts robot"
    "btn message robot";
  grid-template-columns: repeat(3, 1fr);
  max-width: 100%;
}
  .factory-section__heading {
    grid-area: title;
  }
  .factory-section__radio-block {
    grid-area: radio;
  }
  .factory-section__parts-block {
    grid-area: parts;
  }
  .factory-section__img-block {
    grid-area: robot;
  }
  .factory-section__btn-block {
    grid-area: btn;
  }
  .factory-section__message-block {
    grid-area: message;
  }
  
}
</style>