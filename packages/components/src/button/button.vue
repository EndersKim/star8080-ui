<template>
  <button class="star-button" :class="styleClass">
    <!-- <Icon
      v-if="iconFont.iconName && iconFont.iconPosition != 'right'"
      :name="iconFont.iconName"
    /> -->
    <span class="star-button-text" v-if="slots.default">
      <slot />
    </span>
    <!-- <Icon
      v-if="iconFont.iconPosition == 'right' && iconFont.iconName"
      :name="iconFont.iconName"
    /> -->
  </button>
</template>

<script lang="ts">
  import './style/index.less'
  import { defineComponent, computed, useSlots } from 'vue'
  import { buttonProps } from './types'
  // import Icon from '../Icon/icon.vue'

  export default defineComponent({
    name: 'star-button',
    props: buttonProps,
    // components: { Icon },
    setup(props) {
      const styleClass = computed(() => {
        return {
          [`star-button--${props.type}`]: props.type,
          [`star-button--${props.size}`]: props.size,
          'is-plain': props.plain,
          'is-round': props.round,
          'is-disabled': props.disabled,
        }
      })

      //图标
      const iconFont = computed(() => {
        const iconName = props.icon
        const iconPosition = props.iconPosition
        return {
          iconName,
          iconPosition,
        }
      })

      const slots = useSlots()

      return {
        styleClass,
        // Icon,
        iconFont,
        slots,
      }
    },
  })
</script>
