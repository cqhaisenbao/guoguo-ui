<demo>
注册表单
</demo>

<template>
    <Signup :rules="{emailRules,nameRules, passwordRules}"/>
</template>

<script lang="ts">
import Signup from "./form/Signup.vue";
import {emailRules, nameRules, passwordRules} from './form/rules';

export default {
    components: {Signup},
    setup() {
        return {emailRules, passwordRules, nameRules};
    }
};
</script>

