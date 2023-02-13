<template>
  <span
    v-bind="attrs"
    class="star-tooltip"
    :class="styleClass"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <slot></slot>
    <div class="star-tooltip-dropdown-wrapper">
      <Transition name="tooltip-dropdown">
        <div class="star-tooltip-dropdown" v-if="open">
          <span>{{ tip }}</span>
        </div>
      </Transition>
    </div>
  </span>
</template>
<script lang="ts">
  import './style/index.less'
  import { Props } from './types'
  import { defineComponent, useAttrs, computed, ref } from 'vue'
  export default defineComponent({
    name: 'star-tooltip',
    props: Props,
    setup(props) {
      const attrs = useAttrs()

      const styleClass = computed(() => {
        return {
          // [`star-badge-${props.tooltip}`]: props.tooltip,
          'tooltip-open': open,
        }
      })

      const open = ref(false)

      return {
        attrs,
        styleClass,
        open,
      }
    },
  })
</script>

<style lang="less">
  .star-tooltip {
    position: relative;
    display: inline-block;
  }

  .star-tooltip-dropdown-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .star-tooltip-dropdown {
    padding: 8px 12px;
    margin-top: 4px;
    width: max-content;
    font-size: 14px;
    text-align: center;
    color: #fff;
    background-color: #111a;
    border-radius: 10px;
  }

  .tooltip-dropdown-enter-active,
  .tooltip-dropdown-leave-active {
    transition: 0.3s;
  }

  .tooltip-dropdown-enter-from,
  .tooltip-dropdown-leave-to {
    opacity: 0;
    transform: translateY(-50%) scale(0);
  }

  .tooltip-dropdown-enter-to,
  .tooltip-dropdown-leave-from {
    opacity: 1;
  }
</style>
