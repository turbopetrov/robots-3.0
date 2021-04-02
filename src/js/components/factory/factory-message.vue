<template lang="pug">
  p.paragraph_xs.factory-section__message.js-factoryMessage.
    {{factoryMessage}}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return {      
      
    }
  },
  computed:{
    ...mapGetters(['readyToBuildStatus', 'biomechPart','processorPart','soulPart','ballance']),
    factoryMessage(){
      if(this.readyToBuildStatus){
        return 'Можно произвести биоробота'
      }else {
        return 'Чего-то не хватает'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>