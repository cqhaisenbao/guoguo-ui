<template>
    <div>
        <!--Switch有个value是双向绑定的，也可以叫自动监听-->
        <Switch v-model:value="bool"/>
    </div>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue';
    import {ref} from 'vue';

    export default {
        components: {Switch},
        setup() {
            const bool = ref(true);
            return {bool};
        }
    };
</script>

<style lang="scss" scoped>

</style>