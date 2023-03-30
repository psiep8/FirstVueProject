import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import {useCounterStore} from "./store/store";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";

import "primevue/resources/primevue.min.css";

import "primeicons/primeicons.css";


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(useCounterStore())

app.mount('#app')

app.use(PrimeVue)