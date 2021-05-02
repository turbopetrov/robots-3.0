<template lang="pug">
  header.header
    .logo
      img.logo__img(src="src/img/logo.svg")
    btn(
      btnType='factory'
      btnDisabled=false
      @action='goToFactory'
      ).
      Произвести биоробота
</template>

<script>
import btn from './UI/button.vue'
export default {
  components:{
    btn
  },
  data(){
    return{}
  },
  methods:{
    goToFactory(){
      window.scrollTo(0,1800);
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    height: 96px;
  .btn {
    width: 236px;
    height: 48px;
  }
}
</style>