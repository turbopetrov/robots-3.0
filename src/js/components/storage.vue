<template lang="pug">
  section.storage-section
    .side-bar
        p.side-bar__screen-number.
            04
    h2.storage-section__heading.heading_md.
        Склад
    .storage-section__card-block
      .storage-card(:data-name='card.dataName', v-for='card in storageCards')
        h3.storage-card__heading.heading_sm.
          {{card.name}}    
        p.storage-card__paragraph.paragraph_sm.
          Стоимость {{card.sellCost}} монет
        h3.storage-card__heading.heading_sm.
          {{card.partValue}} шт                                             
        button.btn.btn_type2_disable.storage-card__btn('disabled' = true).
          Продать
</template>

<script>
export default {
  data(){
    return{
      storageCards: [
        {
          name: 'Биомеханизм',
          partValue: 0,
          sellCost: 5,         
          dataName: 'biomech',          
        },
        {
          name: 'Процессор',
          partValue: 0,
          sellCost: 3,           
          dataName: 'processor',          
        },
        {
          name: 'Душа',
          partValue: 0,
          sellCost: 15,          
          dataName: 'soul',           
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.storage-section {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  .storage-section__card-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 60px;
  }
}
.storage-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 236px;
  .storage-card__heading {
    margin-top: 5px;
  }
  .storage-card__paragraph {
    margin-top: 15px;
  }
  .storage-card__btn {
    margin-top: 36px;
  }
}
</style>