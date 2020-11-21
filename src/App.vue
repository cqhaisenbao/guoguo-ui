<template>
    <router-view/>
</template>


<script lang="ts">
    //TODO:改成装饰器写法

    import {ref, provide} from 'vue';
    import {router} from './router';
    export default {
        name: 'App',
        setup() {
            const width = document.documentElement.clientWidth;
            const menuVisible = ref(width <= 500 ? false : true);
            provide('menuVisible', menuVisible);
            router.afterEach(() => {
                if (width<=500){
                menuVisible.value = false;
                }
            });
        },
        components: {}
    };
</script>
