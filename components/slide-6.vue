<script setup>

import SlideLayout from "@/components/ui/slideLayout.vue";
import TitleLayout from "@/components/ui/titleLayout.vue";
</script>

<template>
    <slide-layout html-class="slide-6">
        <div class="slide-6__text">
            <title-layout />
        </div>
        <div class="slide-6__feature">
            <div class="slide-6__item flex">
                <img src="@/assets/imgs/slide-6__item-1.svg" alt="">
                <div class="slide-6__item-text">
                    <h3>Connection</h3>
                    <p>Rapidiously harness mission process improvements
                        and backward-compatible communities.</p>
                </div>
            </div>
            <div class="slide-6__item flex">
                <img src="@/assets/imgs/slide-6__item-2.svg" alt="">
                <div class="slide-6__item-text">
                    <h3>Creativity</h3>
                    <p>Rapidiously harness mission process improvements
                        and backward-compatible communities.</p>
                </div>
            </div>
            <div class="slide-6__item flex">
                <img src="@/assets/imgs/slide-6__item-3.svg" alt="">
                <div class="slide-6__item-text">
                    <h3>Support Center</h3>
                    <p>Rapidiously harness mission process improvements
                        and backward-compatible communities.</p>
                </div>
            </div>
        </div>
    </slide-layout>
</template>

<style scoped>
    ::v-deep(.slide-6__container) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 20px;
    }

    .slide-6__text {
        max-width: 460px;
    }

    .slide-6__feature {
        max-width: 720px;
        width: 100%;
    }

    .slide-6__item {
        margin-top: 60px;
        gap: 50px;
    }

    .slide-6__item img {
        width: 60px;
        height: 60px;
    }

    .slide-6__item-text p {
        margin-top: 32px;
    }
</style>