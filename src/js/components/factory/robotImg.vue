<template lang="pug">
  img.factory-section__robot-img(:src= 'robotImage')
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters(['selectedRobot','roboStatus']),
    robotImage(){      
      return `src/img/${this.selectedRobot}${this.roboStatus}.png`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>