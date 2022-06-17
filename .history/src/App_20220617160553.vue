<template>

<div class="tablaGato">
<div class="parent">
<div class="div1">F</div>
<div class="div2"> s</div>
<div class="div3">s </div>
<div class="div4"> s</div>
<div class="div5">s </div>
<div class="div6">s </div>
<div class="div7">s </div>
<div class="div8">s </div>
<div class="div9"> s</div>
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
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
border: 2px solid red;
}

.div1 { grid-area: 1 / 1 / 2 / 2; 
border: 2px solid red;}
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 2 / 1 / 3 / 2; }
.div5 { grid-area: 2 / 2 / 3 / 3; }
.div6 { grid-area: 2 / 3 / 3 / 4; }
.div7 { grid-area: 3 / 1 / 4 / 2; }
.div8 { grid-area: 3 / 2 / 4 / 3; }
.div9 { grid-area: 3 / 3 / 4 / 4; } 
</style>
