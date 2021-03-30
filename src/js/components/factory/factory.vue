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
      robotImg
    .factory-section__btn-block
      buildBtn(:status='readyToBuildStatus')
    .factory-section__message-block
      p.paragraph_xs.factory-section__message.js-factoryMessage.
        Для производства биоробота не хватает биомеханизмов, процессоров, души и монет
</template>

<script>
import radioBlock from "./radio-block.vue";
import partsBlock from "./parts-block.vue";
import buildBtn from "./buildBtn.vue";
import robotImg from "./robotImg.vue";
import {mapGetters} from 'vuex';
export default {
  components: {
    radioBlock,
    partsBlock,
    buildBtn,
    robotImg,
  },
  data(){
    return{
    }
  },

  computed:{
    ...mapGetters(['selectedRobot', 'parts', 'ballance','readyToBuildStatus']),
    imgDisable(){
      return 'src/img/' + this.selectedRobot+ '_disable.png'
    },
    imgActive(){
      return 'src/img/' + this.selectedRobot+ '_active.png'
    },    
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
  .factory-section__btn-block {
  display: flex;
  margin-top: 61px;
  
  .factory-section__img-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;    
  }
  .factory-section__robot-img{
      user-select:none;
    }  
.factory-section__message-block {
  margin-top: 61px;
  padding-bottom: 23px;
  }

  
}
  
}
</style>