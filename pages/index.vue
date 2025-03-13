<script setup>

    import Hero from "@/components/hero.vue";
    import Slide2 from "@/components/slide-2.vue";
    import Slide3 from "@/components/slide-3.vue";
    import Slide4 from "@/components/slide-4.vue";
    import Slide5 from "@/components/slide-5.vue";
    import Slide6 from "@/components/slide-6.vue";

    const siteModules = [
        {name: "hero", component: Hero},
        {name: "slide-2", component: Slide2},
        {name: "slide-3", component: Slide3},
        {name: "slide-4", component: Slide4},
        {name: "slide-5", component: Slide5},
        {name: "slide-6", component: Slide6},
    ]
</script>

<template>
    <template v-for="({name, component}) in siteModules" :key="name">
        <component :is="component" class="block" />
    </template>
</template>

<style scoped>

</style>