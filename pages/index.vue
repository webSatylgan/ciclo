<script setup>

    import Hero from "@/components/hero.vue";
    import Slide2 from "@/components/slide-2.vue";

    const siteModules = [
        {name: "hero", component: Hero},
        {name: "slide-2", component: Slide2},
    ]
</script>

<template>
    <template v-for="({name, component}) in siteModules" :key="name">
        <component :is="component" class="block" />
    </template>
</template>

<style scoped>

</style>