<template>
    <div class="login-page mx-auto p-3 w-400">
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
                <button type="submit" class="btn btn-primary btn-block btn-large">登录</button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {emailRules, passwordRules} from './rules';
import ValidateForm from "./ValidateForm.vue";
import ValidateInput from "./ValidateInput.vue";

export default defineComponent({
    components: {ValidateInput, ValidateForm},
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