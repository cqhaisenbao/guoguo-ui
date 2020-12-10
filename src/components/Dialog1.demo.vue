<demo>
常规用法
</demo>
<template>
    <div>
        <Button @click="toggle">打开对话框</Button>
        <Dialog v-model:visible="open" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
            <template v-slot:title>
                <strong>加粗的标题</strong>
            </template>
            <template v-slot:content>
                <strong>Hello World</strong>
                <div>Hello World</div>
            </template>
        </Dialog>
    </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref, defineComponent} from 'vue';

export default defineComponent({
    components: {Dialog, Button},
    setup() {
        const open = ref(false);
        const toggle = () => {
            open.value = !open.value;
        };
        const f1 = () => {
            return true;
        };
        const f2 = () => {
            window.alert('这是一个关闭提醒');
        };
        return {open, toggle, f1, f2};
    }
});
</script>
