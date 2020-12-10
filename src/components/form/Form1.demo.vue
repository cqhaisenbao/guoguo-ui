<demo>
登录表单
</demo>

<template>
    <Login :rules="{emailRules, passwordRules}"/>
</template>

<script lang="ts">
import Login from "./Login.vue";
import {emailRules, passwordRules} from './rules';

export default {
    components: {Login},
    setup() {
        return {emailRules, passwordRules};
    }
};
</script>

