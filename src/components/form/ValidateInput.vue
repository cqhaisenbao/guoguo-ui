<template>
    <div class="validate-input-container pb-2">
        <input v-if="tag !== 'textarea'" class="form-control" :class="{'is-invalid':inputRef.error}"
               v-model="inputRef.val" @blur="validateInput" :="$attrs">
        <textarea v-else class="form-control" :class="{'is-invalid':inputRef.error}"
                  v-model="inputRef.val" @blur="validateInput" :="$attrs"/>
        <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, PropType, watch} from 'vue';
import {emailReg} from './rules';

export default defineComponent({
    name: 'ValidateInput',
    props: {
        rules: Array as PropType<RulesProp>,
        modelValue: String,
        tag: {
            type: String as PropType<TagType>,
            default: 'input'
        }
    },
    inheritAttrs: false,
    setup(props) {
        const inputRef = reactive({
            val: props.modelValue || '',
            error: false,
            message: ''
        });
        watch(() => props.modelValue, (newValue) => {
            inputRef.val = newValue || '';
        });

        const validateInput = () => {
            if (props.rules) {
                const allPassed = props.rules.every(rule => {
                    let passed = true;
                    inputRef.message = rule.message;
                    switch (rule.type) {
                        case 'required':
                            passed = (inputRef.val.trim() !== '');
                            break;
                        case 'email':
                            passed = emailReg.test(inputRef.val);
                            break;
                        case 'custom':
                            passed = rule.validator ? rule.validator() : true;
                            break;
                        default:
                            break;
                    }
                    return passed;
                });
                inputRef.error = !allPassed;
                return allPassed;
            }
            return true;
        };
        return {inputRef, validateInput};
    }
});
</script>

