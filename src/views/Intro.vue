<template>
    <div class="wrapper">
        <article class="markdown-body" v-html="md">
        </article>
    </div>
</template>

<script>
    import md from '../markdown/intro.md'

    export default {
        data() {
            return {md}
        }
    }
</script>

<style lang="scss" scoped>
    //样式穿透
    .wrapper ::v-deep(.markdown-body) {
        line-height: 165%;
    }
</style>
