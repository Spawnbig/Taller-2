<template>

<h1 class="text-center">Jugador Actual : {{currentPlayer}}</h1>
<div class="parent mt-4">  
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
<div class="container-btn">
  <h1 v-if="empate" class="text-center mt-4">Empate</h1>
  <h1 v-if="ganador" class="text-center mt-4">GANADOR JUGADOR {{this.jugadorGanador}}</h1>
  <button v-if="ganador || empate" @click="reload()" type="button" class="btn btn-info">Reset</button>
</div>

</template>

<script>
import { useGatoStore } from './stores/gato'

export default{ 

  data(){
    return {
      currentPlayer: 'X',
      gato : useGatoStore(),
      ganador : false,
      jugadorGanador : '',
      empate : false
    }
  },
  methods:{
    play(fil,col){
      if(!this.gato.juegoPlayed[fil][col] && !this.ganador){
        this.gato.juego[fil][col] = this.currentPlayer; 
        this.gato.juegoPlayed[fil][col] = true;
        this.verificarGanador();
        this.verificarJugadas();
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
    },
    verificarJugadas(){
      let flag = true
      for (let f = 0; f < 3; f++){
        for(let c = 0; c < 3; c++){
          if(this.gato.juegoPlayed[f][c] != true){
            flag = false
          }
        }
      }
      this.empate = flag;
    },
    reload(){
      window.location.reload();
    }
  }
}
</script>


<style>

#app {
  background:#FFAD41;
}
html {
   background:#FFAD41;
}

.celda{
  outline: black solid 2px;

}
.parent {
display: grid;
grid-template-columns: repeat(3, 100px);
grid-template-rows: repeat(3, 100px);
grid-column-gap: 0px;
grid-row-gap: 0px;
text-align: center;
padding-left: 40%;
}

.div1 {background: #40B4C6; grid-area: 1 / 1 / 2 / 2; }
.div2 {background: #40B4C6; grid-area: 1 / 2 / 2 / 3; }
.div3 { background: #40B4C6;grid-area: 1 / 3 / 2 / 4; }
.div4 { background: #40B4C6;grid-area: 2 / 1 / 3 / 2; }
.div5 {background: #40B4C6; grid-area: 2 / 2 / 3 / 3; }
.div6 {background: #40B4C6;grid-area: 2 / 3 / 3 / 4; }
.div7 {background: #40B4C6; grid-area: 3 / 1 / 4 / 2; }
.div8 {background: #40B4C6; grid-area: 3 / 2 / 4 / 3; }
.div9 {background: #40B4C6; grid-area: 3 / 3 / 4 / 4; } 


.container-btn{
  text-align: center;
}

</style>
