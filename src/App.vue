<template>

<h1 class="text-center">Jugador Actual : {{currentPlayer}}</h1>
<div class="parent">  
<div class="div1 celda" v-on:click="play(0,0)">{{gato.juego[0][0]}}</div>
<div class="div2 celda" v-on:click="play(0,1)">{{gato.juego[0][1]}}</div>
<div class="div3 celda" v-on:click="play(0,2)">{{gato.juego[0][2]}}</div>
<div class="div4 celda" v-on:click="play(1,0)">{{gato.juego[1][0]}}</div>
<div class="div5 celda" v-on:click="play(1,1)">{{gato.juego[1][1]}}</div>
<div class="div6 celda" v-on:click="play(1,2)">{{gato.juego[1][2]}}</div>
<div class="div7 celda" v-on:click="play(2,0)">{{gato.juego[2][0]}}</div>
<div class="div8 celda" v-on:click="play(2,1)">{{gato.juego[2][1]}}</div>
<div class="div9 celda" v-on:click="play(2,2)">{{gato.juego[2][2]}}</div>
</div> 
<h1 v-if="ganador" class="text-center">GANADOR JUGADOR {{this.jugadorGanador}}</h1>
</template>

<script>
import { useGatoStore } from './stores/gato'

export default{ 

  data(){
    return {
      currentPlayer: 'X',
      gato : useGatoStore(),
      ganador : false,
      jugadorGanador : ''
    }
  },
  methods:{
    play(fil,col){
      if(!this.gato.juegoPlayed[fil][col] && !this.ganador){
        this.gato.juego[fil][col] = this.currentPlayer; 
        this.gato.juegoPlayed[fil][col] = true;
        this.verificarGanador();
        this.currentPlayer = (this.currentPlayer == 'X') ? 'O' : 'X';
      }
    },
    verificarGanador(){
      this.verificarHorizontalVertical()
      this.verificarDiagonales()
    },
    verificarHorizontalVertical(){
      for(let i = 0; i < 3; i++){
        if ((this.gato.juego[i][0] == this.currentPlayer) && 
        (this.gato.juego[i][1] == this.currentPlayer) && (this.gato.juego[i][2] == this.currentPlayer)  ){
          this.ganador = true
          this.jugadorGanador = this.currentPlayer
        }
        if ((this.gato.juego[0][i] == this.currentPlayer) && 
        (this.gato.juego[1][i] == this.currentPlayer) && (this.gato.juego[2][i] == this.currentPlayer)  ){
          this.ganador = true
          this.jugadorGanador = this.currentPlayer
        }
      }
    },
    verificarDiagonales(){
      if ((this.gato.juego[0][0] == this.currentPlayer) && 
        (this.gato.juego[1][1] == this.currentPlayer) && (this.gato.juego[2][2] == this.currentPlayer)  ){
          this.ganador = true
          this.jugadorGanador = this.currentPlayer
      }
      if ((this.gato.juego[0][2] == this.currentPlayer) && 
        (this.gato.juego[1][1] == this.currentPlayer) && (this.gato.juego[2][0] == this.currentPlayer)  ){
          this.ganador = true
          this.jugadorGanador = this.currentPlayer
      }
    }
  }
}
</script>


<style>
.celda{
  outline: black solid 1px;
  vertical-align: middle;
}
.parent {
display: grid;
grid-template-columns: repeat(3, 100px);
grid-template-rows: repeat(3, 100px);
grid-column-gap: 0px;
grid-row-gap: 0px;
text-align: center;
padding-left: 42%;
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
