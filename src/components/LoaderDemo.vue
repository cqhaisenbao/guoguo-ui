<template>
    <div>
        <h1>Loader 组件示例 </h1>
        <Demo :component="Loader1Demo"/>
    </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue';
import Loader1Demo from './Loader1.demo.vue'
import Demo from './Demo.vue';

export default {
    components: {
        Demo,
    },
    setup() {
        return {Switch1Demo,Loader1Demo};
    }
};
</script>

<style lang="scss" scoped>

</style>
