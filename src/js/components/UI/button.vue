<template lang="pug">
button.btn(:disabled="btnDisabled", :class="btnClass", @click="handler") 
  slot
</template>

<script>
export default {
  props: {
    btnType: String,
    btnDisabled: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    btnClass() {
      return [
        this.btnDisabled
          ? "btn_" + this.btnType + "_disable"
          : "btn_" + this.btnType + "_normal",
      ];
    },
  },
  methods: {
    handler() {
      this.$emit("action");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  font-weight: 500;
  font-size: 16px;
  font-family: Montserrat;
  font-style: normal;
  text-align: center;
  border: 2px solid inherit;
  border-radius: 60px;
  outline: none;
  cursor: pointer;
}
</style>