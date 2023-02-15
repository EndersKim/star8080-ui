<template>
  <span v-bind="attrs" class="star-badge" :class="styleClass">
    <slot></slot>
    <div class="badge-num" v-if="num">
      <span>{{ num }}</span>
      <div class="ripple-item"></div>
      <div class="ripple-item ripple-item-2"></div>
    </div>
    <div class="badge-point" v-else>
      <div class="ripple-item"></div>
      <div class="ripple-item ripple-item-2"></div>
    </div>
  </span>
</template>
<script lang="ts">
  import './style/index.less'
  import { Props } from './types'
  import { defineComponent, useAttrs, computed, ref } from 'vue'
  export default defineComponent({
    name: 'star-badge',
    props: Props,
    setup(props) {
      const attrs = useAttrs()

      const styleClass = computed(() => {
        return {
          // [`star-badge-${props.ripple}`]: props.ripple,
          'star-badge-ripple': props.ripple,
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
  .star-badge {
    position: relative;
    display: inline-block;

    .badge-num {
      position: absolute;
      top: -12px;
      right: -12px;
      padding: 2px 6px;
      font-size: 12px;
      color: #fff;
      background-color: red;
      border: 2px solid #fff;
      border-radius: 20px;
    }

    .badge-point {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 10px;
      height: 10px;
      background-color: red;
      border: 2px solid #fff;
      border-radius: 50%;
    }

    &.star-badge-ripple {
      .ripple-item {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 1px solid red;
        border-radius: inherit;
        animation: ripple 3s linear infinite;
      }

      .ripple-item-2 {
        animation-delay: 0.8s;
      }
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(0.5);
      opacity: 0.5;
    }

    70% {
      transform: scale(3);
      opacity: 0;
    }

    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
</style>
