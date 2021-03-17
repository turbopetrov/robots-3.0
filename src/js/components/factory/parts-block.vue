
<template lang="pug">

.factory-section__parts-block  
  svgSprite  
  .factory-section__parts-container
    label.parts(v-for='(part,index) in 4')
      input.parts__checkbox(type="checkbox")     
      span.parts__fake-checkbox
        svg.parts__img
          use(xlink:href="#1")
  .factory-section__parts-container
    label.parts(v-for='(part, index) in 4') 
      input.parts__checkbox(type="checkbox")
      span.parts__fake-checkbox
        svg.parts__img
          use(xlink:href="#2")
  .factory-section__parts-container
    label.parts(v-for='(part,index) in 1')
      input.parts__checkbox(type="checkbox")
      span.parts__fake-checkbox
        svg.parts__img
          use(xlink:href="#3")
</template>

<script>
import svgSprite from "./svg-sprites.vue";
import {mapGetters} from 'vuex';
export default {
  components: {
    svgSprite,
  },
  data(){
    return{      
      partActive: '_active',
      partDisabled: '_disable',
      
    }
  },
  computed:{
    ...mapGetters(['parts']),
        
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
