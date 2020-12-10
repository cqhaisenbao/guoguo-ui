<template>
    <teleport to="body">
        <div class="container" :class="classObject" v-if="isVisible">
            <svg v-if="classObject.success" class="icon-left" :class="classObject">
                <use xlink:href="#icon-success"></use>
            </svg>
            <svg v-if="classObject.error" class="icon-left" :class="classObject">
                <use xlink:href="#icon-error"></use>
            </svg>
            <svg v-if="classObject.warning" class="icon-left" :class="classObject">
                <use xlink:href="#icon-jinggao"></use>
            </svg>
            <span>{{ message }}</span>
            <button type="button" class="close" aria-label="Close" @click.prevent="hide">
                <svg>
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </button>
        </div>
    </teleport>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';

export default defineComponent({
    props: {
        message: String,
        type: {
            type: String as PropType<MessageType>,
            default: 'default'
        }
    },
    emits: ['close-message'],
    setup(props, context) {
        const isVisible = ref(true);
        const classObject = {
            'success': props.type === 'success',
            'error': props.type === 'error',
            'warning': props.type === 'warning'
        };
        const hide = () => {
            isVisible.value = false;
            context.emit('close-message', true);
        };
        return {classObject, isVisible, hide};
    }
});

</script>

<style lang="scss" scoped>
.close {
    background: none;
    border: none;

    svg {
        width: 17px;
        height: 17px;
        fill: #666666;
    }
}

.container {
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 102;
    padding: 1rem;
    border-radius: 0.25rem;

    &.success {
        color: rgba(0, 0, 0, .85);
        background: #f6ffed;
        border: 1px solid #b7eb8f;
    }

    &.error {
        color: rgba(0, 0, 0, .65);
        background: #fff1f0;
        border: 1px solid #ffa39e;
    }

    &.warning {
        color: rgba(0, 0, 0, .65);
        background: #fffbe6;
        border: 1px solid #ffe58f;
    }

    .icon-left {
        width: 14px;
        height: 14px;

        &.success {
            fill: #52c41a;
        }

        &.error {
            fill: #f5222d;
        }

        &.warning {
            fill: #faad14;
            width: 16px;
            height: 16px;
        }
    }

    span {
        flex-grow: 1;
        padding-left: 15px;
    }
}
</style>