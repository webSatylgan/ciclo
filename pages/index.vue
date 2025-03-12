<script setup>

    import Hero from "@/components/hero.vue";

    const siteModules = [
        {name: "hero", component: Hero}
    ]
</script>

<template>
    <template v-for="({name, component}) in siteModules" :key="name">
        <component :is="component" />
    </template>
</template>

<style scoped>

</style>