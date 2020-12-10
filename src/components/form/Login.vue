<template>
    <div class="login-page mx-auto w-400">
        <validate-form @form-submit="onFormSubmit">
            <div class="mb-3">
                <label class="form-label">邮箱地址</label>
                <validate-input :rules="rules.emailRules" v-model="emailVal" placeholder="请输入邮箱地址"/>
            </div>
            <div class="mb-3">
                <label class="form-label">密码</label>
                <validate-input :rules="rules.passwordRules" v-model="passwordVal" placeholder="请输入密码" type="password"/>
            </div>
            <template #submit>
                <Button  level="main" type="submit">登录</Button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {emailRules, passwordRules} from './rules';
import ValidateForm from "./ValidateForm.vue";
import ValidateInput from "./ValidateInput.vue";
import Button from "../../lib/Button.vue";

export default defineComponent({
    components: {Button, ValidateInput, ValidateForm},
    props: {
        rules: {
            type: Object,
            required: true
        }
    },
    setup() {
        const emailVal = ref('');
        const passwordVal = ref('');
        const onFormSubmit = (result: boolean) => {
            if (result) {
                const payload = {
                    email: emailVal.value,
                    password: passwordVal.value
                };
                alert('这是收集到的表单信息:' + '邮箱' + payload.email + ",密码" + payload.password);
            }
        };
        return {emailRules, emailVal, passwordVal, passwordRules, onFormSubmit};
    }
});
</script>