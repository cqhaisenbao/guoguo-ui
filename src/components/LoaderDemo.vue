<template>
    <div>
        <h1>Loader 组件示例 </h1>
        <p class="description">用于页面和区块的加载中状态。当页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。本示例通过setTimeout实现加载完成效果。</p>
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