<demo>
常规用法
</demo>

<template>
    <Button class="mr-1" @click="success">成功提示</Button>
    <Button level="danger"  @click="error">错误提示</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import createMessage from "../lib/createMessage";

export default {
    components: {Button},
    setup() {
       const success=()=>{
           createMessage('这是一条成功提示','success',2000)
       }
        const error=()=>{
            createMessage('这是一条错误提示','error',2000)
        }
        return {success,error};
    }
};
</script>

