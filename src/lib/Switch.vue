<template>
    <button class="guoguo-switch" @click="toggle" :class="{'guoguo-checked':value}" :disabled="disabled">
        <span></span>
    </button>
</template>

<script lang="ts">

export default {
    props: {
        value: {
            type: Boolean
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:value', !props.value);
        };
        return {toggle};
    }

};

</script>

<style lang="scss">
@import "src/assets/style/index";

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
        background: #3f51b5;

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
