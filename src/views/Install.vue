<template>
    <article class="markdown-body" v-html="md">
    </article>
</template>

<script>
    import md from '../markdown/install.md';

    export default {
        data() {
            return {md}
        }
    }
</script>

<style lang="scss" scoped>
    //样式穿透
    .markdown-body ::v-deep(pre) {
        background: #333333;
        color: #ffffff;
    }
</style>
