<template lang="pug">
   .popup(v-if='isShow')
    .popup__body
      .popup__content
        .popup__img-block
          img(
            v-if='type==="wallet"'
            src="src/img/coin.png"
            )
        .popup__text-block
          h3.popup__title.heading_md.
            {{title}}
          p.popup__paragraph.heading_sm.
            {{paragraph}}
        .popup__close-btn(@click='closeBtnHandler')
</template>

<script>
export default {
  props:['type','title','paragraph','isShow', 'closeBtnHandler'],
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