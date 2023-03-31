import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import {useCounterStore} from "./store/store";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
// import Button from "primevue/button";
// import Column from "primevue/column";
// import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import router from "@/router/router";

const pinia = createPinia()
const app = createApp(App)

// app.component('Button', Button)
app.component('DataTable', DataTable)
// app.component('Column', Column)
// app.component('Dialog', Dialog)
app.component('InputText', InputText)

app.use(pinia)
app.use(useCounterStore())
app.use(PrimeVue)
app.use(router)
app.mount('#app')

