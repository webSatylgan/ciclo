<script setup>
    import SlideLayout from "@/components/ui/slideLayout.vue";
    import TitleLayout from "@/components/ui/titleLayout.vue";

    const title = "Make things as simple possible but no simpler";
</script>

<template>
    <slide-layout html-class="slide-4">
        <title-layout :title="title" />
        <div class="slide-4__feature flex">
            <div class="slide-4__item">
                <img src="@/assets/imgs/slide-4__item-1.svg" alt="">
                <h3>Cloud System</h3>
                <p>Completely reintermediate extensible infomediaries whereas vortals. </p>
            </div>
            <div class="slide-4__item">
                <img src="@/assets/imgs/slide-4__item-2.svg" alt="">
                <h3>Security</h3>
                <p>Completely reintermediate extensible infomediaries whereas vortals. </p>
            </div>
            <div class="slide-4__item">
                <img src="@/assets/imgs/slide-4__item-3.svg" alt="">
                <h3>Easy to Customize</h3>
                <p>Completely reintermediate extensible infomediaries whereas vortals. </p>
            </div>
        </div>
    </slide-layout>
</template>

<style scoped>
    ::v-deep(.slide-4__container h2) {
        max-width: 885px;
    }

    .slide-4__feature {
        margin-top: 150px;
        gap: 25px;
    }

    .slide-4__item {
        max-width: 450px;
        width: 100%;
    }

    .slide-4__item img {
        width: 48px;
        height: 48px;
    }

    .slide-4__item h3 {
        margin-top: 25px;
    }

    .slide-4__item p {
        margin-top: 32px;
    }
</style>