<template>
    <div>
        <button class="guoguo-switch" @click="toggle" :class="{'guoguo-checked':checked}">
            <span></span>
        </button>
    </div>
</template>

<script lang="ts">

    export default {
        data(){
            return{
                checked:false
            }
        },
        methods:{
            toggle(){
                this.checked = !this.checked;
            }
        }
    };


</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    .guoguo-switch {
        height: $h;
        width: $h * 2;
        border: none;
        background: #bfbfbf;
        border-radius: $h/2;
        position: relative;

        > span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2 / 2;
            transition: all 250ms;
        }

        &.guoguo-checked {
            background: #1890ff;

            > span {
                left: calc(100% - #{$h2} - 2px);
            }
        }

        &:focus {
            outline: none;
        }

        &:active {
            > span {
                width: $h2 + 4px;
            }
        }

        &.guoguo-checked:active {
            > span {
                width: $h2 + 4px;
                margin-left: -4px;
            }
        }
    }
</style>