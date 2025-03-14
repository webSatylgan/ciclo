<script setup>

    import Hero from "@/components/hero.vue";
    import Slide2 from "@/components/slide-2.vue";
    import Slide3 from "@/components/slide-3.vue";
    import Slide4 from "@/components/slide-4.vue";
    import Slide5 from "@/components/slide-5.vue";
    import Slide6 from "@/components/slide-6.vue";
    import Slide7 from "@/components/slide-7.vue";
    import Slide8 from "@/components/slide-8.vue";
    import Slide9 from "@/components/slide-9.vue";
    import Slide10 from "@/components/slide-10.vue";
    import Slide11 from "@/components/slide-11.vue";

    const siteModules = [
        {name: "hero", component: Hero},
        {name: "slide-2", component: Slide2},
        {name: "slide-3", component: Slide3},
        {name: "slide-4", component: Slide4},
        {name: "slide-5", component: Slide5},
        {name: "slide-6", component: Slide6},
        {name: "slide-7", component: Slide7},
        {name: "slide-8", component: Slide8},
        {name: "slide-9", component: Slide9},
        {name: "slide-10", component: Slide10},
        {name: "slide-11", component: Slide11},
    ]
</script>

<template>
    <template v-for="({name, component}, index) in siteModules" :key="name">
        <component :is="component" class="block" />
    </template>
</template>

<style scoped>

</style>