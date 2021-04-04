<template lang="pug">
  header.header
    .logo
        img.logo__img(:src='logoPath')
    button.btn.btn_type3_normal.header__btn(@click = 'goToFactory').
      Произвести биоробота
</template>

<script>
export default {
  data(){
    return{
      logoPath: '../img/logo.svg',
    }
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