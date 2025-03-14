<script setup>

import SlideLayout from "@/components/ui/slideLayout.vue";
</script>

<template>
    <slide-layout html-class="slide-10">
        <div class="slide-10__item">
            <img src="@/assets/imgs/slide-10__item-1.jpg" alt="">
            <h3>Design 01</h3>
            <p>Rapidiously harness mission process
                and backward communities.</p>
        </div>
        <div class="slide-10__item">
            <img src="@/assets/imgs/slide-10__item-2.jpg" alt="">
            <h3>Design 02</h3>
            <p>Rapidiously harness mission process
                and backward communities.</p>
        </div>
        <div class="slide-10__item">
            <img src="@/assets/imgs/slide-10__item-3.jpg" alt="">
            <h3>Design 03</h3>
            <p>Rapidiously harness mission process
                and backward communities.</p>
        </div>
    </slide-layout>
</template>

<style scoped>

    ::v-deep(.slide-10__container) {
        display: flex;
    }

    .slide-10__item {
        width: 33%;
        height: 100vh;
    }

    .slide-10__item img {
        display: block;
        width: 100%;
        max-height: 620px;
        height: 100%;
    }

    .slide-10__item h3 {
        margin-top: 60px;
    }

    .slide-10__item p {
        margin-top: 30px;
    }
</style>