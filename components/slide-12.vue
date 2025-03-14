<script setup>

import SlideLayout from "@/components/ui/slideLayout.vue";
</script>

<template>
    <slide-layout html-class="slide-12">
        <div class="slide-12__item">
            <h2>80</h2>
            <p>Business Projects</p>
        </div>
        <div class="slide-12__item">
            <h2>55</h2>
            <p>Business Projects</p>
        </div>
        <div class="slide-12__item">
            <h2>95</h2>
            <p>Business Projects</p>
        </div>
    </slide-layout>
</template>

<style>
    .slide-12__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        width: 100%;

        padding: 240px;
        background: url("@/assets/imgs/slide-12.png");
    }

    .slide-12__item {
        max-width: 220px;
        width: 100%;
        text-align: center;
    }
    
    .slide-12__item > * {
        color: var(--accent);
    }
</style>