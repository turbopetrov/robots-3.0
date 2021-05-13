<template lang="pug">
  .side-bar
    p.side-bar__screen-number.
      {{number}}
    .side-bar__scroll(v-if='number==="01"')
      p.
        скролл            
      img(src='src/img/arrow.svg')
</template>

<script>
export default {
  props:{
    number: String
  },
  data(){
    return{}
  },
}
</script>

<style lang="scss" scoped>  
  .side-bar {
    position: absolute;
    top: 0;
    left: -130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 24px;
    color: $grey-color;    
    @extend %paragraph;
    font-size: 12px;
    line-height: 200%;
    text-transform: uppercase;
  &__screen-number {
    display: block;
    margin-top: 11px;    
    text-align: center;
   
  }
  &__scroll {
    display: flex;
    flex-direction: column;
    margin-top: 114px;
    p {
      margin-top: 12px;
      transform: rotate(90deg);
    }
    img {
      height: 17px;
      margin-top: 24px;
    }
  }
}
.title-section {
  .side-bar {
    &__screen-number {
      margin-top: 28px;
    }
  }
}
</style>