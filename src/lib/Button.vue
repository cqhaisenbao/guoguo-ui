<template>
    <button class="guoguo-button" :class="`theme-${theme}`">
        <slot/>
    </button>
</template>

<script lang="ts">
    export default {
        props: {
            theme: {
                types: String,
                default: 'button'
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>