<script setup>

import SlideLayout from "@/components/ui/slideLayout.vue";
import TitleLayout from "@/components/ui/titleLayout.vue";
</script>

<template>
    <slide-layout html-class="slide-8">
        <img src="@/assets/imgs/slide-8.jpg" alt="">
        <div class="slide-8__content">
            <title-layout />
            <div class="slide-8__count flex">
                <div>
                    <h3>80</h3>
                    <p>Design Sprint</p>
                </div>
                <div>
                    <h3>75</h3>
                    <p>Figma Themes</p>
                </div>
            </div>
        </div>
    </slide-layout>
</template>

<style scoped>

    ::v-deep(.slide-8__container) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }

    .slide-8__container > img {
        width: 45%;
        height: 100vh;
    }

    .slide-8__content {
        max-width: 500px;
        width: 100%;

        margin-left: auto;
    }

    .slide-8__count {
        max-width: 415px;
        width: 100%;
        margin-top: 190px;
    }

    .slide-8__count div {
        max-width: 180px;
        width: 100%;
    }

    .slide-8__count div h3 {
        font-size: 3.75rem;
    }
</style>