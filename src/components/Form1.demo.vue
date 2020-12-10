<demo>
登录表单
</demo>

<template>
    <Login :rules="{emailRules, passwordRules}"/>
</template>

<script lang="ts">
import Login from "./form/Login.vue";
import {emailRules, passwordRules} from './form/rules';

export default {
    components: {Login},
    setup() {
        return {emailRules, passwordRules};
    }
};
</script>

<style>
.demo-component{
    display: flex;
    justify-content: flex-start;
}
</style>

