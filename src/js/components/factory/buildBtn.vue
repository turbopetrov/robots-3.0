<template lang="pug">
  button.btn.factory-section__btn(:disabled='status?false:true'
                                  :class = 'status?btnActive:btnDisabled' 
                                  @click = "buildRobot()" 
                                  ).
    Произвести биоробота
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  props:['status'],
  data(){
    return{
      btnDisabled:'btn_type3_disable',
      btnActive: 'btn_type3_normal',
    }
  },

  computed:{
    ...mapGetters(['parts']),
    
  },
  methods:{
    buildRobot(){
      this.$store.commit('resetParts');
      this.$store.commit('setRoboStatus', '_ready');
      this.$store.commit('removeCoins', 10);
      this.$store.commit('showFactoryPopup')
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/mixins/mixins.scss";
@import "src/scss/ui-kit/colors.scss";
@import "src/scss/ui-kit/buttons/btn_type3.scss";
  .factory-section__btn {
    width: 236px;
    }
</style>