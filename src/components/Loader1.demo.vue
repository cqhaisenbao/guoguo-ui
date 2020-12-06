<demo>
常规用法
</demo>

<template>
    <Button @click="openLoader">打开加载提示</Button>
    <Loader v-if="isLoading" background="rgba(0,0,0, 0.8)"></Loader>
</template>

<script lang="ts">
import Loader from "../lib/Loader.vue";
import {ref} from 'vue';
import Button from "../lib/Button.vue";

export default {
    components: {Button, Loader},
    setup() {
        const isLoading = ref(false);
        const openLoader = () => {
            isLoading.value = true;
            setTimeout(() => isLoading.value = false, 3000);
        };
        return {isLoading, openLoader};
    }
};
</script>

