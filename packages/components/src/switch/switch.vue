<template>
  <div
    class="star-switch"
    :class="{
      ...styleClass,
    }"
    @click="handleChange"
  >
    <span
      class="star-switch-core"
      ref="core"
      :style="{
        'border-color': modelValue ? activeColor : inactiveColor,
        'background-color': modelValue ? activeColor : inactiveColor,
      }"
    ></span>
    <!-- 用来接收name -->
    <!-- <input type="checkbox" class="star-switch-input" :name="name" /> -->
  </div>
</template>

<script lang="ts">
  import './style/index.less'
  import { switchProps } from './types'
  import { defineComponent, computed, nextTick } from 'vue'

  export default defineComponent({
    name: 'star-switch',
    props: switchProps,
    // components: { Icon },
    setup(props, context) {
      const styleClass = computed(() => {
        return {
          'is-disabled': props.disabled,
          'is-mimicry': props.mimicry,
          'is-checked': props.modelValue,
        }
      })

      // 当单选框值改变时，触发该函数回调
      function handleChange() {
        // 更新value
        if (!props.disabled) {
          nextTick(() => {
            context.emit('update:modelValue', !props.modelValue)
            if (props.onChange) {
              props.onChange()
            }
          })
        }
      }

      return {
        handleChange,
        styleClass,
      }
    },
  })
</script>
