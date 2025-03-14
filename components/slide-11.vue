<script setup>

import SlideLayout from "@/components/ui/slideLayout.vue";
</script>

<template>
    <slide-layout html-class="slide-11">
        <img src="@/assets/imgs/slide-11.jpg" alt="">
        <div class="slide-11__content">
            <div class="slide-11__item">
                <h3>Project 01</h3>
                <p>Rapidiously harness mission process
                    and backward communities.</p>
            </div>
            <div class="slide-11__item">
                <h3>Project 02</h3>
                <p>Rapidiously harness mission process
                    and backward communities.</p>
            </div>
            <div class="slide-11__item">
                <h3>Project 02</h3>
                <p>Rapidiously harness mission process
                    and backward communities.</p>
            </div>
        </div>
    </slide-layout>
</template>

<style>

    .slide-11 {
        position: relative;
    }

    .slide-11__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 20px;
    }

    .slide-11__container::after {
        content: "";
        width: 35%;
        height: 100vh;

        background: rgba(196, 196, 196, 0.3);

        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }

    .slide-11__container > img {
        max-width: 720px;
    }

    .slide-11__content {
        max-width: 470px;
        width: 100%;
    }

    .slide-11__item:not(:first-child) {
        margin-top: 60px;
    }

    .slide-11__item p {
        margin-top: 32px;
    }
</style>