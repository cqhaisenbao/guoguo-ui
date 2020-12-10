<demo>
常规用法
</demo>

<template>
    <div class="msgWrapper">
    <Button class="mr-1" @click="success">成功提示</Button>
    <Button class="mr-1" @click="danger">警告提示</Button>
    <Button level="danger" @click="error">错误提示</Button>
    </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import createMessage from "./createMessage";

export default {
    components: {Button},
    setup() {
        const success = () => {
            createMessage('这是一条成功提示', 'success', 3000);
        };
        const error = () => {
            createMessage('这是一条错误提示', 'error', 3000);
        };
        const danger = () => {
            createMessage('这是一条警告提示', 'warning', 3000);
        };
        return {success, error, danger};
    }
};
</script>

<style lang="scss" scoped>
.msgWrapper {
    margin-bottom: -12px;
    button {
        margin-bottom: 12px;
        margin-left: 0;
        margin-right: 8px;
    }
}
</style>