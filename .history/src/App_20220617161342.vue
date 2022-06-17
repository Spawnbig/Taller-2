<template>

<div class="parent text-center align-middle">  
<div class="text-center align-middle" >X </div>
<div class="text-center align-middle">X </div>
<div class="text-center align-middle">X </div>
<div class="text-center align-middle">X </div>
<div class="text-center align-middle">X </div>
<div class="text-center align-middle">X </div>
<div class="text-center align-middle">X </div>
<div class="text-center align-middle">X </div>
<div class="text-center align-middle">X </div>
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
text-align: center;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 2 / 1 / 3 / 2; }
.div5 { grid-area: 2 / 2 / 3 / 3; }
.div6 { grid-area: 2 / 3 / 3 / 4; }
.div7 { grid-area: 3 / 1 / 4 / 2; }
.div8 { grid-area: 3 / 2 / 4 / 3; }
.div9 { grid-area: 3 / 3 / 4 / 4; } 
</style>
