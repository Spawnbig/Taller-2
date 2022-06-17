import { defineStore } from 'pinia'

export const useGatoStore = defineStore('gato',{
    state: () => {
        return{
            juego: [
                [' ',' ',' '],
                [' ',' ',' '],
                [' ',' ',' ']
            ]
        }
    }
})