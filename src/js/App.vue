<template lang="pug">
  #app.page
    .container_wide
      .container_slim 

</template>

<script>
export default {  
  data() {
    return {
      message: 'Polinka prosto super'
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    background: radial-gradient(82.33% 70.44% at 50% 0%, #26394D 0%, #212529 100%) no-repeat;
    display: flex;
    justify-content: center;
    height: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    padding-bottom: 40px;
    .container_wide {
      display: flex;
      flex-direction: column;
      width: 1016px;
      height: 100%;
      .container_slim {
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: space-between;
        width: 754px;
        height: 100%;
      }
    }
  }
</style>