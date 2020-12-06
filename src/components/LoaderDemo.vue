<template>
    <div>
        <h1>Loader 组件示例 </h1>
        <p class="description">用于页面和异步请求的加载中状态，本示例通过setTimeout实现异步请求完成效果。</p>
        <Demo :component="Loader1Demo"/>
    </div>
</template>

<script lang="ts">
import Loader1Demo from './Loader1.demo.vue';
import Demo from './Demo.vue';

export default {
    components: {Demo,},
    setup() {
        return {Loader1Demo};
    }
};
</script>