<template lang="pug">
.factory-section__radio-block
  .radio.factory-section__radio
    h3.radio__title.heading_xs.
      Тип биоробота            
    .radio__item
      radioBtn(
        v-for="roboType in roboTypes",
        :key="roboType.id",
        :isChecked="roboType.isChecked",
        radioName="type",
        :radioValue="roboType.type",
        @setRadioValue="setRoboType"
      )
  .radio.factory-section__radio
    h3.radio__title.heading_xs.
      Стабилизатор
    .radio__item
      radioBtn(
        v-for="roboGender in roboGenders",
        :key="roboGender.id",
        :isChecked="roboGender.isChecked",
        radioName="gender",
        :radioValue="roboGender.gender",
        @setRadioValue="setRoboGender"
      )
</template>

<script>
import radioBtn from "../UI/radioBtn.vue";
export default {
  components: {
    radioBtn,
  },
  data() {
    return {
      roboTypes: [
        { type: "Front", isChecked: true, id: 1 },
        { type: "Design", isChecked: false, id: 2 },
      ],
      roboGenders: [
        { gender: "Male", isChecked: true, id: 1 },
        { gender: "Female", isChecked: false, id: 2 },
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
.radio + .radio {
  margin-top: 32px;
}
.radio__item {
  display: flex;
}
.radio__label + .radio__label {
  margin-left: 35px;
}
.factory-section__radio-block {
  display: flex;
  flex-direction: column;
  margin-top: 65px;
}
.radio__title {
  margin-bottom: 20px;
}
</style>