import { defineStore } from 'pinia'

export const useGatoStore = defineStore('gato',{
    state: () => {
        return{
            juego: [
                ['1','2','3'],
                ['4','5','6'],
                ['7','8','9']
            ]
        }
    },
    getters:{
        cell0: (state) => state.juego[0][0] 
    }
})