<script setup>

import SlideLayout from "@/components/ui/slideLayout.vue";
import TitleLayout from "@/components/ui/titleLayout.vue";
</script>

<template>
    <slide-layout html-class="slide-3">
        <img src="@/assets/imgs/slide-3.jpg" alt="">
        <div class="slide-3__text">
            <title-layout />
            <div class="slide-3__bars">
                <div class="slide-3__progress-bar">
                    <div class="flex">
                        <p>Design</p>
                        <p><95%</p>
                    </div>
                    <span style="--progress: 95%"></span>
                </div>
                <div class="slide-3__progress-bar">
                    <div class="flex">
                        <p>Projects</p>
                        <p><60%</p>
                    </div>
                    <span style="--progress: 60%"></span>
                </div>
            </div>
        </div>
    </slide-layout>
</template>

<style scoped>
    .slide-3 {
        position: relative;
    }

    .slide-3__container > img {
        max-width: 35%;
        height: 100vh;

        position: absolute;
        left: 0;
        top: 0;
    }

    .slide-3__text {
        max-width: 720px;
        width: 100%;

        margin-left: auto;
    }

    ::v-deep(.slide-3__text h2) {
        max-width: 470px;
        margin-top: 32px;
    }

    .slide-3__bars {
        width: 100%;
        margin-top: 120px;
    }

    .slide-3__progress-bar {
        width: 100%;
        margin-top: 75px;
    }

    .slide-3__progress-bar .flex p:last-child {
        color: var(--primary);
        font-weight: 700;
    }

    .slide-3__progress-bar span {
        display: block;
        width: 100%;
        height: 10px;
        margin-top: 15px;

        background: rgba(28, 31, 37, 0.1);


        position: relative;
    }

    .slide-3__progress-bar span::after {
        content: "";
        display: block;
        width: var(--progress);
        height: 10px;

        background: var(--primary);

        position: absolute;
        left: 0;
        top: 0;
    }
</style>