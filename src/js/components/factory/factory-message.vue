<template lang="pug">
  p.paragraph_xs.factory-section__message.
    {{factoryMessage}}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){return {}},
  computed:{
    ...mapGetters(['readyToBuildStatus', 'biomechPart','processorPart','soulPart','ballance']),
  
    factoryMessage(){
      let messageArr = [];
      const basicMessage = 'Для производства биоробота вам не хватает ';
      (this.biomechNeedMessage===null)
        ?null:messageArr.push(this.biomechNeedMessage);
      (this.processorNeedMessage===null)
        ?null:messageArr.push(this.processorNeedMessage);
      (this.soulNeedMessage===null)
        ?null:messageArr.push(this.soulNeedMessage);
      (this.coinsNeedMessage===null)
        ?null:messageArr.push(this.coinsNeedMessage);
      switch (messageArr.length) {
      case 0:
        return 'Можно произвести биоробота';
      case 1:
        return basicMessage + messageArr[0];
      case 2:
        return `${basicMessage + messageArr[0]} и ${messageArr[1]}`;
      case 3:
        return `${basicMessage + messageArr[0]}, ${messageArr[1]} и ${messageArr[2]}`;
      case 4:
        return `${basicMessage + messageArr[0]}, ${messageArr[1]}, ${messageArr[2]} и ${messageArr[3]}`;
      }
      
    },
    
    biomechNeedMessage(){
      let biomechNeed = this.biomechPart.installed.filter((i)=>{return i===false}).length;
      switch (biomechNeed) {
        case 0:
          return null;
        case 1:
          return biomechNeed+' '+this.biomechPart.name+'а';
        default:
          return biomechNeed+' '+this.biomechPart.name+'ов';
      }
    },

    processorNeedMessage(){
      let processorNeed = this.processorPart.installed.filter((i)=>{return i===false}).length;
      switch (processorNeed) {
        case 0:
          return null;
        case 1:
          return processorNeed+' '+this.processorPart.name+'а';
        default:
          return processorNeed+' '+this.processorPart.name+'ов';
      }
    },

    soulNeedMessage(){
      let soulNeed = this.soulPart.installed.filter((i)=>{return i===false}).length;
      switch (soulNeed) {
        case 0:
          return null;
        case 1:
          return soulNeed+' '+'души';
        default:
          return soulNeed+' '+'душ';
      }
    },

    coinsNeedMessage(){
      let coinsNeed = 10 - this.ballance;
      if(coinsNeed<=0){
        return null;
      }else if(coinsNeed === 1){
        return '1 монеты'
      }else return 'монет'        
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>