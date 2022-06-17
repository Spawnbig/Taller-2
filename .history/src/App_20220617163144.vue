<template>
<div class="parent">  
<div class="div1 celda text-center align-middle" v-on:click="printTable()">{{gato.juego[0][0]}}</div>
<div class="div2 celda text-center align-middle" v-on:click="printTable()">{{gato.juego[0][1]}}</div>
<div class="div3 celda text-center align-middle" v-on:click="printTable()">{{gato.juego[0][2]}}</div>
<div class="div4 celda text-center align-middle" v-on:click="printTable()">{{gato.juego[1][0]}}</div>
<div class="div5 celda text-center align-middle" v-on:click="printTable()">{{gato.juego[1][1]}}</div>
<div class="div6 celda text-center align-middle" v-on:click="printTable()">{{gato.juego[1][2]}}</div>
<div class="div7 celda text-center align-middle" v-on:click="printTable()">{{gato.juego[2][0]}}</div>
<div class="div8 celda text-center align-middle" v-on:click="printTable()">{{gato.juego[2][1]}}</div>
<div class="div9 celda text-center align-middle" v-on:click="printTable()">{{gato.juego[2][2]}}</div>
</div> 
</template>

<script>
import { useGatoStore } from './stores/gato'

export default{ 

  data(){
    return {
      currentPlayer: 'X',
      gato : useGatoStore()
    }
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
