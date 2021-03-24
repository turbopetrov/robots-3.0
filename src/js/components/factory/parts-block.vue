
<template lang="pug">

.factory-section__parts-block
  svgSprite 
  partsBtn(:targetPart = 'biomechPart')
  partsBtn(:targetPart = 'processorPart')
  partsBtn(:targetPart = 'soulPart' )
  

 
</template>

<script>
import svgSprite from "./svg-sprites.vue";
import partsBtn from "./parts-btn.vue";
import {mapGetters} from 'vuex';
export default {
  components: {
    svgSprite,
    partsBtn,
  },
  data(){
    return{      
      
      
    }
  },
  computed:{
    ...mapGetters(['biomechPart','processorPart','soulPart', 'parts']),
        
  }, 
  methods:{
    
    
  }   
}
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
