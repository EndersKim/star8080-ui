<template>
  <div v-bind="attrs" class="star-collapse" :class="styleClass">
    <div
      class="star-collapse-title"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <slot name="title"></slot>
      <svg
        class="star-collapse-arrow"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
        ></path>
      </svg>
    </div>

    <Transition name="collapse">
      <div class="star-collapse-content-box" :style="{ height: contentHeight }">
        <div class="star-collapse-content" ref="content">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts">
  import './style/index.less'
  import { Props } from './types'
  import {
    defineComponent,
    useAttrs,
    computed,
    ref,
    onMounted,
    watch,
  } from 'vue'

  export default defineComponent({
    name: 'star-collapse',
    props: Props,
    setup(props) {
      const attrs = useAttrs()

      const styleClass = computed(() => {
        return {
          // [`star-badge-${props.tooltip}`]: props.tooltip,
          'collapse-open': props.modelValue,
        }
      })

      onMounted(() => {
        if (props.modelValue) {
          contentHeight.value = 'auto'
        } else {
          contentHeight.value = '0px'
        }
      })

      watch(
        () => props.modelValue,
        (newValue) => {
          if (newValue) {
            contentHeight.value = getComputedStyle(content.value).height
            setTimeout(() => {
              contentHeight.value = 'auto'
            }, 300)
          } else {
            contentHeight.value = getComputedStyle(content.value).height
            requestAnimationFrame(() => {
              contentHeight.value = '0px'
            })
          }
        }
      )

      const contentHeight = ref('auto')

      const content = ref(null)

      return {
        attrs,
        styleClass,
        open,
        contentHeight,
        content,
      }
    },
  })
</script>

<style lang="less">
  .star-collapse {
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 10px;
  }

  .star-collapse-title {
    position: relative;
    padding: 10px 20px;
    padding-right: 50px;
    transition: 0.3s;
    // border: 1px solid #ddd;
    border-top: 1px solid #fff0;
    border-bottom: 1px solid #fff0;
    cursor: pointer;

    .star-collapse-arrow {
      position: absolute;
      top: 50%;
      right: 20px;
      width: 20px;
      height: 20px;
      fill: #aaa;
      transform: translateY(-50%) rotate(90deg);
      transition: 0.3s;

      .collapse-open & {
        transform: translateY(-50%) rotate(270deg);
      }
    }

    &:hover {
      background-color: #eee;
    }

    .collapse-open & {
      border-bottom: 1px solid #ddd;
    }
  }

  .star-collapse-content-box {
    overflow: hidden;
    transition: 0.3s;
  }

  .star-collapse-content {
    padding: 10px 20px;

    // border: 1px solid #ddd;
    // border-radius: 4px;

    box-sizing: border-box;
  }

  .collapse-enter-active,
  .collapse-leave-active {
    overflow: hidden;
    transition: 0.3s;
  }

  .collapse-enter-from,
  .collapse-leave-to {
    height: 0;
  }

  // .collapse-enter-to,
  // .collapse-leave-from {
  //   // height: 100px;
  // }
</style>
