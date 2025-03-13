<script setup>

    import Hero from "@/components/hero.vue";
    import Slide2 from "@/components/slide-2.vue";
    import Slide3 from "@/components/slide-3.vue";

    const siteModules = [
        {name: "hero", component: Hero},
        {name: "slide-2", component: Slide2},
        {name: "slide-3", component: Slide3},
    ]
</script>

<template>
    <template v-for="({name, component}) in siteModules" :key="name">
        <component :is="component" class="block" />
    </template>
</template>

<style scoped>

</style>