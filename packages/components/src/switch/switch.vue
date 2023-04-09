<template>
  <div class="star-switch" :class="{ ...styleClass }" @click="changeValue">
    <input type="button" class="star-switch-input" :value="modelValue" />
    <span class="star-switch-core" :class="{ 'is-checked': modelValue }">
      <div class="star-switch-action"></div>
    </span>
  </div>
</template>

<script lang="ts">
  import './style/index.less'
  import { defineComponent, computed, ref, nextTick } from 'vue'
  import { switchProps } from './types'

  export default defineComponent({
    name: 'star-switch',
    props: switchProps,
    setup(props, context) {
      const styleClass = computed(() => {
        return {
          'is-disabled': props.disabled,
          [`star-switch-${props.size}`]: props.size,
        }
      })

      const changeValue = () => {
        nextTick(() => {
          let onChange: any = props.onChange!
          onChange()
          context.emit('update:modelValue', !props.modelValue)
        })
      }
      return {
        styleClass,
        changeValue,
      }
    },
  })
</script>
