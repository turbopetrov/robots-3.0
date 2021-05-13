<template lang="pug">
label.radio__label
  input.radio__input(
    type="radio",
    :checked="isChecked",
    v-model="currentValue",
    @change="onChange",
    :name="radioName",
    :value="radioValue"
  )
  span.radio__fake-radio
  span.radio__name.paragraph_xs.
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
.radio__label {
  display: flex;
  cursor: pointer;
}
.radio__input {
  display: none;
}
.radio__input:checked ~ .radio__fake-radio::before {
  opacity: 1;
}
.radio__fake-radio {
  position: relative;
  display: block;
  border: 2px solid $parag-color;
  border-radius: 50%;
  @include size(22px, 22px);
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: $orange-color;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.3s;
    content: "";
    @include size(16px, 16px);
  }
}
.radio__name {
  align-self: center;
  margin-left: 12px;
}
</style>