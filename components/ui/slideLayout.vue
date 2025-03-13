<script setup>
    const props = defineProps({
        htmlClass: String,
    });
</script>

<template>
    <div :class="htmlClass">
        <div class="container">
            <div :class="htmlClass + '__container'">
                <slot>

                </slot>
            </div>
        </div>
    </div>
</template>

<style scoped></style>