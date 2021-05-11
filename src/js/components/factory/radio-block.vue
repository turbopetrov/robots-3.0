<template lang="pug">
.factory-section__radio-block
  .radio.factory-section__radio
    h3.heading_xs.radio__title.
      Тип биоробота            
    .radio__item
      radioBtn(
        v-for='roboType in roboTypes' 
        :key='roboType.id'       
        :isChecked='roboType.isChecked'         
        radioName='type'
        :radioValue='roboType.type'               
        @setRadioValue='setRoboType'
        )
  .radio.factory-section__radio
    h3.heading_xs.radio__title. 
      Стабилизатор
    .radio__item
      radioBtn(
        v-for='roboGender in roboGenders' 
        :key='roboGender.id'       
        :isChecked='roboGender.isChecked'         
        radioName='gender'
        :radioValue='roboGender.gender'               
        @setRadioValue='setRoboGender'
        )
</template>

<script>
import radioBtn from '../UI/radioBtn.vue';
export default {
  components:{
    radioBtn,
  },
  data() {
    return {
      roboTypes:[
        {type:'Front', isChecked: true, id:1},
        {type:'Design', isChecked: false, id:2}
      ],
      roboGenders:[
        {gender:'Male', isChecked:true, id:1},
        {gender:'Female', isChecked:false, id:2},
      ],      
    };
  },  
  methods: {
    setRoboGender(gender) {
      this.$store.commit("setRoboGender", gender);
    },
    setRoboType(type) {
      this.$store.commit("setRoboType", type);
    },
  },
};
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