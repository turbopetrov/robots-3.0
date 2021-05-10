<template lang="pug">
section.factory-section
  sideBar(number='05')
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
      factoryMessage
</template>

<script>
import sideBar from '../UI/sideBar.vue';
import radioBlock from "./radio-block.vue";
import partsBlock from "./parts-block.vue";
import buildBtn from "./buildBtn.vue";
import robotImg from "./robotImg.vue";
import factoryMessage from "./factory-message.vue";
import {mapGetters} from 'vuex';
export default {
  components: {
    radioBlock,
    partsBlock,
    buildBtn,
    robotImg,
    factoryMessage,
    sideBar
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
   }
  .factory-section__img-block {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;    
    }
  .factory-section__robot-img{
    position: absolute;
    top: 46px;
    user-select:none;
            
    }  
  .factory-section__message-block {
    margin-top: 61px;    
   } 
}  

</style>