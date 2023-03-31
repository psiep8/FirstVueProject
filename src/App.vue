<template>

    <div class="menubar-container">
        <Menubar :model="menuItems" class="p-menubar"/>
    </div>
    <Suspense>
        <RouterView/>
    </Suspense>
</template>

<script>

import Menubar from 'primevue/menubar';

export default {
    components: {
        Menubar
    },
    data() {
        return {
            menuItems: [
                {label: 'Homepage', to: '/'},
                {label: 'Utenti', to: '/users'},
                {label: 'Link 2', to: '/pagina2'}
            ]
        };
    }
};
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

.menubar-container {
    width: 80%; /* Imposta la larghezza del container */
    margin: 0 auto; /* Centra il container orizzontalmente */
    justify-content: center; /* Centra orizzontalmente i link */
    align-items: center; /* Centra verticalmente i link */
}

.p-menubar {
    display: flex; /* Crea un contenitore flessibile per i link */
    justify-content: center; /* Centra orizzontalmente i link */
    align-items: center; /* Centra verticalmente i link */
}

</style>
