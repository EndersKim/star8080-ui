<template>
  <div class="star-radio-box" :class="styleClass">
    <div
      class="star-radio-option"
      v-for="(value, key) in options"
      :key="key"
      :class="{
        active: key == modelValue,
      }"
      @click="$emit('update:modelValue', key)"
    >
      {{ value }}
    </div>
  </div>
</template>
<script lang="ts">
  import './style/index.less'
  import { Props } from './types'
  import { defineComponent, useAttrs, computed } from 'vue'

  export default defineComponent({
    name: 'star-radio',
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
  .star-radio-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    box-sizing: border-box;
    min-height: 40px;
    background: #eee;
    border-radius: 20px;
    flex-wrap: wrap;
  }

  .star-radio-option {
    padding: 4px 10px;
    border-radius: 20px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background: #fff;
    }

    &.active {
      position: relative;
      color: #09f;
      font-weight: bold;
      box-sizing: border-box;

      &::after {
        position: absolute;
        left: 20%;
        display: block;
        width: 60%;
        height: 4px;
        background: var(--main-color);
        border-radius: var(--border-radius);
        opacity: 0.3;
        content: '';
      }
    }
  }
</style>
