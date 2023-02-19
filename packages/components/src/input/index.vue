<template>
  <div class="star-input-box" :class="styleClass">
    <input
      v-bind="attrs"
      class="star-input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script lang="ts">
  import './style/index.less'
  import { Props } from './types'
  import { defineComponent, useAttrs, computed } from 'vue'

  export default defineComponent({
    name: 'star-input',
    props: Props,
    emits: ['update:modelValue'],
    setup(props, ctx) {
      const attrs = useAttrs()

      const styleClass = computed(() => {
        return {
          // [`star-badge-${props.tooltip}`]: props.tooltip,
          // 'pagination-open': props.modelValue,
        }
      })

      return {
        attrs,
        styleClass,
      }
    },
  })
</script>

<style lang="less">
  .star-input {
    display: block;
    padding: 0 20px;
    width: 280px;
    max-width: 100%;
    height: 40px;
    box-sizing: border-box;
    font-size: 16px;
    color: #000;
    background: #eee;
    border: 2px #0000 solid;
    border-radius: 20px;
    transition: all 0.2s;
  }

  .star-input[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }

  .star-input::input-placeholder {
    color: #000;
    opacity: 0.5;
  }

  .star-input:focus {
    border-color: #09f;
    outline: none;
  }
</style>
