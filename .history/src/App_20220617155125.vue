<template>
<div class="m-3">
    Board
    <div>No Ref: {{ number + 1 }}</div>
    <div>Ref: {{ refNumber }}</div>
    <div>Reactive: {{ reactiveNumber }}</div>
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

</style>
