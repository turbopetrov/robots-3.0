<template lang="pug">
  .factory-section__radio-block
          .radio.factory-section__radio
            h3.heading_xs.radio__title.
             Тип биоробота            
            .radio__item
                label.radio__label
                    input.radio__input(v-model='currentType'
                                      @change='setRoboType(currentType)'                                       
                                       type="radio" checked 
                                       name= 'type' 
                                       value= 'Front' )
                    span.radio__fake-radio
                    span.radio__name.radio__name_1.paragraph_xs= 'Front'
                label.radio__label
                    input.radio__input(v-model='currentType'                                      
                                      @change='setRoboType(currentType)'
                                      type="radio" 
                                      name= 'type' 
                                      value= 'Design')
                    span.radio__fake-radio
                    span.radio__name.radio__name_2.paragraph_xs= 'Design'

          .radio.factory-section__radio
            h3.heading_xs.radio__title= 'Стаблизатор'
            
            .radio__item
                label.radio__label
                    input.radio__input(v-model='currentGender'                                      
                                      @change='setRoboGender(currentGender)'
                                      type="radio" checked 
                                      name= 'gender' 
                                      value= 'Male' )
                    span.radio__fake-radio
                    span.radio__name.radio__name_1.paragraph_xs= 'Male'
                label.radio__label
                    input.radio__input(v-model='currentGender'                                      
                                      @change='setRoboGender(currentGender)'
                                      type="radio" 
                                      name= 'gender' 
                                      value= 'Female')
                    span.radio__fake-radio
                    span.radio__name.radio__name_2.paragraph_xs= 'Female'
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      currentType: 'Front',
      currentGender: 'Male'
    }
  },
  computed:{
    ...mapGetters(['roboType', 'roboGender','selectedRobot']) 
  },
  methods:{   
    setRoboGender(gender){
      this.$store.commit('setRoboGender', gender)
    },
    setRoboType(type){
      this.$store.commit('setRoboType', type)
    },

  }
}
</script>

<style lang="scss" scoped>
.factory-section__radio-block {
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  .factory-section__radio + .factory-section__radio {
    margin-top: 35px;
  }
}
</style>