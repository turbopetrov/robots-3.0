<template lang="pug">
  button.btn(:disabled='status?false:true'                                  
              :class = 'btnClass' 
              @click = 'btnHandler'
            ).
    {{btnTitle}}
    
</template>

<script>
export default {
  props:['btnType', 'status', 'btnTitle'],
  data(){
    return{

    }
  },
  computed:{
    btnClass(){
      return [
        this.status?'btn_'+this.btnType+'_normal':'btn_'+this.btnType+'_disable'
        ]
    }
  },
  methods:{
    btnHandler(){
      this.$emit('handler')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../scss/ui-kit/colors.scss';
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