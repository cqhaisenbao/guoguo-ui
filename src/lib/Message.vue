<template>
  <teleport to="body">
    <div class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2"
      :class="classObject" v-if="isVisible">
      <span>{{message}}</span>
      <button type="button" class="close" aria-label="Close" @click.prevent="hide">
          <svg>
              <use xlink:href="#icon-guanbi"></use>
          </svg>
      </button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
export type MessageType = 'success' | 'error' | 'default'
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
    const isVisible = ref(true)
    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-primary': props.type === 'default'
    }
    const hide = () => {
      isVisible.value = false
      context.emit('close-message', true)
    }
    return {classObject, isVisible, hide}
  }
})

</script>

<style lang="scss" scoped>
.close{
    background: none;
    border: none;
    svg{
        width: 20px;
        height: 20px;
        fill: #666666;
    }
}
</style>