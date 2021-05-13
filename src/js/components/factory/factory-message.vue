<template lang="pug">
  p.paragraph_xs.
    {{factoryMessage}}
</template>

<script>
import wordForm from '../../utils/wordForm.js';
import { mapGetters } from 'vuex'
export default {
  data(){return {}},
  computed:{
    ...mapGetters(['readyToBuildStatus', 'parts', 'ballance']),
    factoryMessage(){  
      const basicMessage = 'Для производства биоробота вам не хватает ';  
      switch (this.messageArr.length) {
      case 0:
        return 'Можно произвести биоробота';
      case 1:
        return basicMessage + this.messageArr[0];
      case 2:
        return `${basicMessage + this.messageArr[0]} и ${this.messageArr[1]}`;
      case 3:
        return `${basicMessage + this.messageArr[0]}, ${this.messageArr[1]} и ${this.messageArr[2]}`;
      case 4:
        return `${basicMessage + this.messageArr[0]}, ${this.messageArr[1]}, ${this.messageArr[2]} и ${this.messageArr[3]}`;
      }      
    },
    messageArr(){
      let array = [];
      for(let i in this.parts){
        let part = this.parts[i];
        let partNeed = part.installed.filter((j)=>{return j===false}).length;
        if (part.type === 'soul'){
          (partNeed === 0)
            ?null:array.push(partNeed+wordForm([' души',' душ',''], partNeed))
        }else{
          (partNeed === 0)
            ?null:array.push(partNeed+wordForm([` ${part.name.toLowerCase() + 'а'}`, ` ${part.name.toLowerCase() + 'ов'}`, ''], partNeed))
        }    
      }
      let coinsNeed = 10 - this.ballance;
      (coinsNeed<=0)
        ?null:array.push(coinsNeed+wordForm([' монеты', ' монет', ' монет'], coinsNeed));
      return array
    }
  }
}

</script>

<style lang="scss" scoped>
  
</style>