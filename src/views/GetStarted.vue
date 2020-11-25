<template>
    <article class="markdown-body" v-html="md">
    </article>
</template>

<script>
    import md from '../markdown/get-started.md';

    export default {
        data() {
            return {md}
        }
    }
</script>

<style lang="scss" scoped>
    .markdown-body pre {
        background: #333333;
        color: #ffffff;
    }
</style>
