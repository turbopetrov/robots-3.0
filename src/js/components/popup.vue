<template lang="pug">
   .popup(v-if='isShow')
    .popup__body
      .popup__content
        slot
        .popup__close-btn(@click='closeBtnHandler')
</template>

<script>
export default {
  props:['isShow', 'closeBtnHandler'],
  data(){
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/scss/mixins/mixins.scss";
  @import "src/scss/ui-kit/colors.scss";
  @import "src/scss/ui-kit/popup.scss";
</style>