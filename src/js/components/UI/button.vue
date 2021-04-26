<template lang="pug">
  button.btn(:disabled='status?false:true'                                  
              :class = 'btnClass' 
              @click = 'btnHandler'
            )
    slot
    
</template>

<script>
export default {
  props:['btnType', 'status'],
  data(){
    return{

    }
  },
  computed:{
    btnClass(){
      return [this.btnType, 
              this.status?this.btnType+'_normal':this.btnType+'_disable'
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
  border: 2px solid;
  border-radius: 60px;
  outline: none;
  cursor: pointer;
}
</style>