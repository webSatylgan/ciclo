<script setup>

import SlideLayout from "@/components/ui/slideLayout.vue";
import TitleLayout from "@/components/ui/titleLayout.vue";
</script>

<template>
    <slide-layout html-class="slide-5">
        <div class="slide-5__text">
            <title-layout />
            <p>Dramatically maximize principle-centered
                models through focused materials. Assertively
                build fully researched best practices via go
                forward "outside the box" thinking.</p>
        </div>
        <div class="slide-5__imgs">
            <img src="@/assets/imgs/slide-5-1.jpg" alt="">
            <img src="@/assets/imgs/slide-5-2.jpg" alt="">
        </div>
    </slide-layout>
</template>

<style scoped>

    ::v-deep(.slide-5__container) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 25px;
        width: 100%;
    }

    .slide-5__text {
        max-width: 550px;
        width: 100%;
    }

    .slide-5__text p {
        margin-top: 130px;
    }

    .slide-5__imgs {
        max-width: 720px;
        height: 100vh;
    }

    .slide-5__imgs img {
        width: 100%;
        height: 50%;
    }
</style>