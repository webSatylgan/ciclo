<script setup>
    const props = defineProps({
        title: {
           type: String,
           default: "The simplest things are often the truest…",
        },

        subTitle: {
            type: String,
            default: "Multipurpose Minimal Solution",
        }
    });
</script>

<template>
    <p>{{subTitle}}</p>
    <h2>{{title}}</h2>
</template>
