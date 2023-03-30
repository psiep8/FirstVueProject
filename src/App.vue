<template>
    <FirstTable/>
</template>

<script>

import FirstTable from "@/components/FirstTable.vue";

export default {
    name: 'App',
    components: {
        FirstTable,
    }
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
