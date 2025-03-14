<script setup>

import SlideLayout from "@/components/ui/slideLayout.vue";
import TitleLayout from "@/components/ui/titleLayout.vue";
</script>

<template>
    <slide-layout html-class="slide-9">
        <div class="slide-9__grid">
            <img src="@/assets/imgs/slide-9__item-1.jpg" alt="">
            <div class="slide-9__grid-text">
                <h3>Design 01</h3>
                <p>Rapidiously harness mission process
                    and backward communities.</p>
            </div>
            <img src="@/assets/imgs/slide-9__item-2.jpg" alt="">
            <div class="slide-9__grid-text">
                <h3>Design 02</h3>
                <p>Rapidiously harness mission process
                    and backward communities.</p>
            </div>
        </div>
        <div class="slide-9__title">
            <title-layout title="Main Projects" sub-title="Minimal Solution" />
        </div>
    </slide-layout>
</template>

<style scoped>

    ::v-deep(.slide-9__container){
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        width: 100%;
    }

    .slide-9__grid {
        display: grid;
        grid-template:  auto auto / 1fr 1fr;
        justify-content: center;
        max-width: 960px;
        max-height: 100vh;
    }

    .slide-9__grid img {
        max-width: 480px;
        max-height: 50vh;
        width: 100%;
    }

    .slide-9__grid-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        max-width: 480px;
    }

    .slide-9__grid-text:nth-child(2) {
        text-align: right;
    }

    .slide-9__grid img:nth-child(3) {
        order: 4;
    }

    .slide-9__title {
        max-width: 400px;
        width: 100%;
        transform: rotate(-90deg);
        text-align: center;
    }
</style>