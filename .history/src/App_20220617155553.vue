<template>
<div>hola</div>
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

</style>
