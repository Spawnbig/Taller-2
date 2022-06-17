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
import { ref, reactive } from 'vue'

export default{ 
  setup() {
    let number = 1
    const refNumber = ref(1)
    const reactiveNumber = reactive({ count: 1 })
    setInterval(() => {
      number += 1
      refNumber.value += 1
      reactiveNumber.count += 1
    }, 1000)
    return { number, refNumber, reactiveNumber }
  },
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


<style scoped>
.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 70px;
  font-weight: bold;
  line-height: 34px;
  height: 100px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 100px;
}
</style>
