<template>
    <button class="guoguo-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="guoguo-loadingIndicator"></span>
        <slot/>
    </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
    props: {
        size: {
            type: String,
            default: 'normal'
        },
        level: {
            type: String,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const {size, level} = props;
        const classes = computed(() => {
            return {
                [`guoguo-size-${size}`]: size,
                [`guoguo-level-${level}`]: level
            };
        });
        return {classes};
    }
};
</script>

<style lang="scss">
@import "src/assets/style/index";

$h: 38px;
$blue: #40a9ff;
$radius: 4px;
$red: #e84545;
$grey: grey;
$main-color: #3f51b5;
$success-color: #00b8a9;
$warning-color: #fdb827;
.guoguo-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 15px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: $bgColor;
    color: $textColor;
    border: $border;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;

    & + & {
        margin-left: 8px;
    }

    &:hover {
        color: #222831;
        background: #eee;
        border-color: #222831;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &.guoguo-size-big {
        font-size: 20px;
        height: 46px;
        padding: 0 16px;
    }

    &.guoguo-size-small {
        font-size: 14px;
        height: 28px;
        padding: 0 7px;
    }

    &.guoguo-button {
        &.guoguo-level-main {
            background: $main-color;
            color: white;
            border-color: $main-color;

            &:hover,
            &:focus {
                background: darken($main-color, 15%);
                border-color: darken($blue, 10%);
            }
        }

        &.guoguo-level-danger {
            background: $red;
            border-color: $red;
            color: white;

            &:hover,
            &:focus {
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }

        &.guoguo-level-success {
            background: $success-color;
            border-color: $success-color;
            color: white;

            &:hover,
            &:focus {
                background: darken($success-color, 10%);
                border-color: darken($success-color, 10%);
            }
        }

        &.guoguo-level-warning {
            background: $warning-color;
            border-color: $warning-color;
            color: white;

            &:hover,
            &:focus {
                background: darken($warning-color, 13%);
                border-color: darken($warning-color, 10%);
            }
        }
    }

    &[disabled] {
        cursor: not-allowed;
        color: $grey;

        &:hover {
            border-color: $grey;
        }
    }


    > .guoguo-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $main-color $main-color $main-color transparent;
        border-style: solid;
        border-width: 2px;
        animation: guoguo-spin 1s infinite linear;
    }
}

@keyframes guoguo-spin {
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
}
</style>
