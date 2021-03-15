<template lang="pug">

.factory-section__parts-block
  h3.heading_sm|{{currentCheckedParts}}  
  svgSprite  
  .factory-section__parts-container
    label.parts(v-for='(part,index) in 4')
      input.parts__checkbox(type="checkbox"
                            :value='index'
                            :disabled='(index>biomechValue-1)?true:false'
                            :checked='(index>biomechValue-1)?false:null'
                            v-model='currentCheckedParts.biomechChecked'
                            @change='setPartStatus(currentCheckedParts)'
                            )     
      span.parts__fake-checkbox(:class='(index>biomechValue-1)?partDisabled:partActive')
        svg.parts__img
          use(xlink:href="#1")
  .factory-section__parts-container
    label.parts(v-for='(part, index) in 4') 
      input.parts__checkbox(type="checkbox"
                            :value='index'
                            :disabled='(index>processorValue-1)?true:false'
                            :checked='(index>processorValue-1)?false:null'
                            v-model='currentCheckedParts.processorChecked'
                            @change='setPartStatus(currentCheckedParts)'
                            )
      span.parts__fake-checkbox(:class='(index>processorValue-1)?partDisabled:partActive')
        svg.parts__img
          use(xlink:href="#2")
  .factory-section__parts-container
    label.parts(v-for='(part,index) in 1')
      input.parts__checkbox(type="checkbox"
                            :value='index'
                            :disabled='(index>soulValue-1)?true:false'
                            :checked='(index>soulValue-1)?false:null'
                            v-model='currentCheckedParts.soulChecked'
                            @change='setPartStatus(currentCheckedParts)'
                            )
      span.parts__fake-checkbox(:class='(index>soulValue-1)?partDisabled:partActive')
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
      currentCheckedParts:{
        biomechChecked:[],
        processorChecked:[],
        soulChecked:[],
      }
    }
  },
  computed:{
    ...mapGetters(['storageCards', 'checkedParts']),
    biomechValue(){
      let biomechCard = this.storageCards.find(card=>card.partType === 'biomech');
      return biomechCard.partValue
    },
    processorValue(){
      let processorCard = this.storageCards.find(card=>card.partType === 'processor');
      return processorCard.partValue
    },
    soulValue(){
      let soulCard = this.storageCards.find(card=>card.partType === 'soul');
      return soulCard.partValue
    },  
    
  }, 
  methods:{
    setPartStatus(object){
      this.$store.commit('setCheckedParts', object)
    }
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