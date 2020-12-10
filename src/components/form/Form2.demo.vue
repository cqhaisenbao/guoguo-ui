<demo>
注册表单
</demo>

<template>
    <Signup :rules="{emailRules,nameRules, passwordRules}"/>
</template>

<script lang="ts">
import Signup from "./Signup.vue";
import {emailRules, nameRules, passwordRules} from './rules';

export default {
    components: {Signup},
    setup() {
        return {emailRules, passwordRules, nameRules};
    }
};
</script>

