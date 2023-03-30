import {defineStore} from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('userStore', {
    state: () => ({
        items: []
    }),
    getters: {
        getItems: (state) => state.items
    },
    actions: {
        async fetchItems() {
            await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    this.items = response.data
                }).catch(error => {
                    console.log(error + "")
                })
        }
    }
})