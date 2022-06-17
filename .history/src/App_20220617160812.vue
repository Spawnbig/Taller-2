<template>

<div class="tablaGato">
<div class="parent">

</div> 
</div>

</template>

<script>
import { useGatoStore } from './stores/gato'

export default{ 

  data(){
    return {
      gato : useGatoStore()
    }
  },
  mounted(){
    this.printTable()
  }, 
  methods:{
    printTable(){
      console.log(this.gato.juego)
    }
  }
}
</script>


<style>
.parent {
display: grid;
grid-template-columns: repeat(3, 100px);
grid-template-rows: repeat(3, 100px);
grid-column-gap: 0px;
grid-row-gap: 0px;
}  
</style>
