<template>
    <div class="signup-page mx-auto w-400">
        <validate-form @form-submit="onFormSubmit">
            <div class="mb-3">
                <label class="form-label">邮箱地址</label>
                <validate-input :rules="rules.emailRules" v-model="formData.email" placeholder="请输入邮箱地址" type="text"/>
            </div>
            <div class="mb-3">
                <label class="form-label">昵称</label>
                <validate-input :rules="rules.nameRules" v-model="formData.nickName" placeholder="请输入昵称" type="text"/>
            </div>
            <div class="mb-3">
                <label class="form-label">密码</label>
                <validate-input type="password" placeholder="请输入密码" :rules="rules.passwordRules" v-model="formData.password"/>
            </div>
            <div class="mb-3">
                <label class="form-label">重复密码</label>
                <validate-input type="password" placeholder="请再次密码" :rules="repeatPasswordRules"
                                v-model="formData.repeatPassword"/>
            </div>
            <template #submit>
                <Button level="main" type="submit">登录</Button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import ValidateForm from "./ValidateForm.vue";
import ValidateInput from "./ValidateInput.vue";
import Button from "../../lib/Button.vue";

export default defineComponent({
    props: {
        rules: {
            type: Object,
            required: true
        }
    },
    components: {ValidateInput, ValidateForm,Button},
    setup() {
        const formData = reactive({
            email: '',
            nickName: '',
            password: '',
            repeatPassword: ''
        });

        const repeatPasswordRules: RulesProp = [
            {type: 'required', message: '重复密码不能为空'},
            {
                type: 'custom',
                validator: () => {return formData.password === formData.repeatPassword;},
                message: '两次输入的密码不相同'
            },
        ];
        const onFormSubmit = (result: boolean) => {
            if (result) {
                const payload = {
                    email: formData.email,
                    password: formData.password,
                    nickName: formData.nickName
                };
            }
        };
        return {repeatPasswordRules, formData, onFormSubmit};
    }
});
</script>

<style>
.w-400 {
    max-width: 400px;
    margin-left: 1px !important;
}
</style>
