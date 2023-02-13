<template>
  <div v-bind="attrs" class="star-avatar" :class="styleClass">
    <img
      :src="$props.src"
      v-if="$props.src && !imgError"
      @error="imgError = true"
    />

    <div class="text-box" v-else-if="$props.name">
      <p>{{ $props.name.slice(0, 1) }}</p>
    </div>

    <svg
      v-else
      class="not_login"
      t="1649069469972"
      viewBox="0 0 591 591"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="8086"
      width="591px"
      height="591px"
    >
      <g>
        <path
          class="fil0"
          d="M564.981 591l-538.962 0c-0.048,-1.823 -0.079,-3.649 -0.079,-5.483 0,-99.69 70.226,-184.973 169.614,-219.828 27.129,25.437 61.958,40.731 99.946,40.731 37.988,0 72.817,-15.293 99.946,-40.73 99.388,34.855 169.614,120.137 169.614,219.827 0,1.834 -0.032,3.66 -0.079,5.483z"
        />
        />
        <ellipse
          class="fil0"
          cx="295.5"
          cy="229.099"
          rx="122.126"
          ry="138.17"
        />
      </g>
    </svg>
  </div>
</template>
<script lang="ts">
  import './style/index.less'
  import { Props } from './types'
  import { defineComponent, useAttrs, computed, ref } from 'vue'
  export default defineComponent({
    name: 'star-avatar',
    props: Props,
    setup(props) {
      const attrs = useAttrs()
      const styleClass = computed(() => {
        return {
          [`star-avatar-${props.size}`]: props.size,
        }
      })
      const imgError = ref(false)
      return {
        attrs,
        styleClass,
        imgError,
      }
    },
  })
</script>

<style lang="less">
  .star-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 2px solid #8883;
    border-radius: 50%;

    &.star-avatar-small {
      width: 30px;
      height: 30px;
    }

    &.star-avatar-middle {
      width: 40px;
      height: 40px;
    }

    &.star-avatar-large {
      width: 60px;
      height: 60px;
    }

    img {
      width: 96%;
      height: 96%;
      background: #fff;
      border-radius: 50%;
    }

    svg {
      width: 96%;
      height: 96%;
      border-radius: 50%;
      fill: #888;
    }

    .text-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 96%;
      height: 96%;
      background: #aaa;
      border-radius: 50%;

      p {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
</style>
