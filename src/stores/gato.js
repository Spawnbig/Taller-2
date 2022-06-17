import { defineStore } from 'pinia'

export const useGatoStore = defineStore('gato',{
    state: () => {
        return{
            juego: [
                ['1','2','3'],
                ['4','5','6'],
                ['7','8','9']
            ],
            juegoPlayed: [
                [false,false,false],
                [false,false,false],
                [false,false,false]
            ]
        }
    }
})