<template lang="pug">
label.checkbox__label
  input.checkbox__input(
    type="checkbox",
    v-model='value',
    :true-value='trueValue',
    :false-value='falseValue'
    @change='onChange'
  )
  span.checkbox__fake-checkbox
  span.checkbox__text.
    {{label}}
</template>

<script>
export default {
  props:{
    label: String,
    trueValue:Number,
    falseValue:Number,
  },
  data() {
    return {
      value:null
    };
  },
  methods:{
    onChange(){
      this.$emit('getValue', this.value)
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../scss/ui-kit/colors.scss';
.checkbox__label {
  display: flex;
}

.checkbox__text {
  color: $white-color;
  font: 16px/100%;
  font-weight: 500;
  font-family: Montserrat;
  font-style: normal;
}

.checkbox__fake-checkbox {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: 1px solid $white-color;
  transition: 0.2s;
  &:hover {
    border-color: $grey-color;
  }
}
.checkbox__input {
  display: none;
}

.checkbox__fake-checkbox::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 12px;
  background-image: url('../../../img/check.svg');
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.1s;
  content: "";
}
.checkbox__input:checked ~ .checkbox__fake-checkbox::before {
  opacity: 1;
}

</style>