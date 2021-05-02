<template lang="pug">
  section.title-section
    sideBar(number='01')
    .title-section__text-block
        h1.heading_xl.title-section__title.
            Фабрика по производству биороботов
        p.title-section__paragraph.paragraph_xl.
            класса "монитор-кресло"
    .title-section__img-block
        img.title-section__img(:src="robotsPath" alt="Robots")
</template>

<script>
import sideBar from './UI/sideBar.vue'
export default {
  components:{
    sideBar
  },
  data(){
    return{
      arrowPath: '../img/arrow.svg',
      robotsPath: '../img/robots_pair.png'
    }
  }
}
</script>

<style lang="scss" scoped>
  .title-section {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 120px;
  .title-section__text-block {
    display: flex;
    flex-direction: column;
  }
  .title-section__img-block {
    position: relative;
    .title-section__img {
      position: absolute;
      top: 0;
      right: -100px;
    }
  }
  .title-section__title {
    max-width: 470px;
  }
  .title-section__paragraph {
    margin-top: 23px;
  }
}
</style>