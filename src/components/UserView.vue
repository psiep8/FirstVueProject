<template>
    <br/>
    <div>
        <FirstTable :items="items" :columns="tableColumns" :actions="tableActions" @edit-item="onEditItem"
                    @delete-item="onDeleteItem" @insert-item="onInsertItem"/>
    </div>
</template>

<script>


import FirstTable from "@/table/FirstTable.vue";
import {useCounterStore} from "@/store/store";
// import Dialog from "primevue/dialog";
// import InputText from "primevue/inputtext";

export default {
    name: 'UserView',
    components: {
        FirstTable,
        // Dialog,
        // InputText
    },
    data() {
        return {
            tableColumns: [
                {header: "Nome", field: "name"},
                {header: "Username", field: "username"},
                {header: "Email", field: "email"},
            ],
            tableActions: [
                {header: "Modifica", field: "edit"},
                {header: "Elimina", field: "delete"},
            ],
            items: []
        }
    },
    methods: {
        onEditItem(rowData) {
            console.log("modifica", rowData)
        },
        onInsertItem(rowData) {
            console.log("aggiungi", rowData)
        },
        onDeleteItem(rowData) {
            console.log("elimina", rowData)
        },
    },
    setup() {
        const store = useCounterStore();
        return {
            store,
        };
    },

    async mounted() {
        await this.store.fetchItems();
        this.items = this.store.getItems;
        console.log(this.items)
    },
}
</script>

<style>
#app {
    font-family: "Baloo Da 2", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
