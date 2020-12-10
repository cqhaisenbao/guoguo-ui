<template>
    <form class="validata-form-container">
        <div class="myInput">
            <slot/>
        </div>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">提交</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

type ValidateFunc = () => boolean

export default defineComponent({
    name: 'ValidateForm',
    emits: ['form-submit'],
    setup(props, context) {
        let funcArr: ValidateFunc[] = [];
        const submitForm = () => {
            const result = funcArr.map(func => func()).every(result => result);
            context.emit('form-submit', result);
        };
        const callback = (func: ValidateFunc) => {
            funcArr.push(func);
        };
        return {submitForm};
    },
});
</script>

<style lang="scss" scoped>
.submit-area {
    button {
        width: 100%;
    }
}
</style>
