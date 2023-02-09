<template>
  <a v-bind="attrs" class="star-link" :class="styleClass">
    <slot />
  </a>
</template>
<script lang="ts">
  import './style/index.less'
  import { linkProps } from './types'
  import { defineComponent, useAttrs, computed } from 'vue'
  export default defineComponent({
    name: 'star-link',
    props: linkProps,
    setup(props) {
      const attrs = useAttrs()
      const styleClass = computed(() => {
        return {
          [`star-link--${props.type}`]: props.type,
          'is-disabled': props.disabled,
          'is-underline': props.underline,
        }
      })
      return {
        attrs,
        styleClass,
      }
    },
  })
</script>
