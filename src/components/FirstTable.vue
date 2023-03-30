<template>
    <div>
        <div>
            <h1>La mia tabella</h1>
            <Button icon="pi pi-plus-circle" severity="info" rounded outlined aria-label="User"
                    @click="addItem('')" label="Aggiungi nuovo utente"/>
            <div><br/>

                <DataTable :value="items" show-gridlines tableStyle="min-width: 50rem">
                    <Column v-for="col of column" :key="col.field" :field="col.field" :header="col.header"></Column>
                    <Column v-for="act of actions" :key="act.field" :field="act.field" :header="act.header">
                        <template #body="rowData">
                            <div>
                                <div v-if="act.field==='edit'">
                                    <Button icon="pi pi-user-edit" severity="info" rounded outlined aria-label="User"
                                            @click="editItem(rowData); showEditDialog=true"/>
                                </div>
                                <div v-if="act.field==='delete'">
                                    <Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel"
                                            @click="deleteItem(rowData); showDeleteDialog=true"/>
                                </div>
                            </div>
                        </template>
                    </Column>
                    <Dialog v-model="showEditDialog" header="Modifica" :visible="showEditDialog" :closable="false"
                            :modal="true">
                        <div class="p-field"
                             style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                            <div class="flex flex-column gap-2">
                                <label for="name">Nome </label>
                                <InputText id="name" aria-describedby="username-help"/>
                            </div>
                            <br/>
                            <div class="flex flex-column gap-2">
                                <label for="username">Username </label>
                                <InputText id="username" aria-describedby="username-help"/>
                            </div>
                            <br/>
                            <div class="flex flex-column gap-2">
                                <label for="email">Email </label>
                                <InputText id="email" aria-describedby="username-help"/>
                            </div>
                            <Button icon="pi pi-check" aria-label="Filter" label="Modifica" class="p-button-rounded"
                                    style="margin-top: 1rem;"/>
                        </div>
                    </Dialog>
                    <Dialog v-model="showDeleteDialog" header="Elimina" :visible="showDeleteDialog"
                            :closable="false" :modal="true">
                        Ciao sto eliminando
                    </Dialog>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
import {useCounterStore} from "@/store/store";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

export default {
    components: {
        DataTable,
        Column,
        Button,
        Dialog,
        InputText
    },

    data() {
        return {
            editingItem: null,
            showDeleteDialog: false,
            showEditDialog: false,
            items: [],
            column: [
                {header: "Nome", field: "name"},
                {header: "Username", field: "username"},
                {header: "Email", field: "email"},
            ],
            actions: [
                {header: "Modifica", field: "edit"},
                {header: "Elimina", field: "delete"},
            ]
        };
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
    },

    methods: {
        editItem(rowData) {
            console.log("Hai cliccato su 'Modifica' per:", rowData);
            // this.editingItem = rowData.data;
        },
        deleteItem(rowData) {
            console.log("Hai cliccato su 'Elimina' per:", rowData);
        },
        addItem(rowData) {
            console.log("Hai cliccato su 'Aggiungi' per:", rowData);
        },

    },
};
</script>

<style scoped></style>
