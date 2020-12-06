<template>
    <div>
        <h1>Message 组件示例 </h1>
        <p class="description">全局消息提示，当某个页面需要向用户显示提示信息时使用，支持自定义文本。</p>
        <Demo :component="Message1Demo"/>
    </div>
</template>

<script lang="ts">
import Loader1Demo from './Loader1.demo.vue';
import Message1Demo from './Message1.demo.vue';
import Demo from './Demo.vue';

export default {
    components: {Demo, Message1Demo},
    setup() {
        return {Loader1Demo,Message1Demo};
    }
};
</script>