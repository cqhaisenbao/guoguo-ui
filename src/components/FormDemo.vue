<template>
    <div>
        <h1>Form 组件示例 </h1>
        <Demo :component="Form1"/>
        <Demo :component="Form2"/>
    </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Form1 from './Form1.demo.vue';
import Form2 from './Form2.demo.vue'

export default {
    components: {Demo,},
    setup() {
        return {Form1,Form2};
    }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    > h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        > pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>
