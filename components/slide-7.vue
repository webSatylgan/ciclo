<script setup>

import SlideLayout from "@/components/ui/slideLayout.vue";
</script>

<template>
    <slide-layout html-class="slide-7">
        <div class="slide-7__item flex">
            <img src="@/assets/imgs/slide-6__item-1.svg" alt="">
            <div class="slide-7__item-text">
                <h3>Connection</h3>
                <p>Rapidiously harness mission process improvements
                    and backward-compatible communities.</p>
            </div>
        </div>
        <div class="slide-7__item flex">
            <img src="@/assets/imgs/slide-6__item-2.svg" alt="">
            <div class="slide-7__item-text">
                <h3>Creativity</h3>
                <p>Rapidiously harness mission process improvements
                    and backward-compatible communities.</p>
            </div>
        </div>
        <div class="slide-7__item flex">
            <img src="@/assets/imgs/slide-6__item-3.svg" alt="">
            <div class="slide-7__item-text">
                <h3>Support Center</h3>
                <p>Rapidiously harness mission process improvements
                    and backward-compatible communities.</p>
            </div>
        </div>
        <img src="@/assets/imgs/slide-7.jpg" alt="">
    </slide-layout>
</template>

<style scoped>
    .slide-7 {
        position: relative;
    }

    .slide-7__item {
        max-width: 720px;
        margin-top: 60px;
        gap: 50px;
    }

    .slide-7__item img {
        width: 60px;
        height: 60px;
    }

    .slide-7__item-text p {
        margin-top: 32px;
    }

    .slide-7__container > img {
        width: 35%;
        height: 100vh;

        position: absolute;
        right: 0;
        top: 0;
    }
</style>