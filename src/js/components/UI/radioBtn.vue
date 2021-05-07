<template lang="pug">
label.radio__label
  input.radio__input(
    type="radio"
    :checked='isChecked'          
    v-model='currentValue' 
    @change='onChange'        
    :name="radioName"
    :value="radioValue"
  )
  span.radio__fake-radio
  span.radio__name.radio__name_1.paragraph_xs.
    {{radioValue}}      
</template>

<script>
export default {
  props: {   
    isChecked: Boolean,  
    radioName: String,
    radioValue: String,       
  },
  data() {
    return {
      currentValue: null,  
    };
  },
  methods: {
    onChange() {
      this.$emit("setRadioValue", this.currentValue);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>