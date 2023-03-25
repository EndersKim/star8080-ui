<template>
  <div>
    <slot></slot>
    <div
      class="star-mark"
      :style="{ 'background-image': `url(${baseURL})` }"
    ></div>
    <canvas id="canvas" ref="canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script lang="ts">
  import './waterfall.less'
  import { defineComponent, onMounted, ref } from 'vue'
  import { waterfallProps } from './type'

  // 踩坑总结，setup函数执行时，dom元素未渲染，所以
  export default defineComponent({
    name: 'star-waterfall',
    props: waterfallProps,
    setup(props) {
      let canvas = ref()
      let baseURL = ref('')
      onMounted(() => {
        console.log(canvas)
        let ctx: any = canvas.value.getContext('2d')
        ctx.font = `${props.fontSize}px`
        ctx.fillStyle = props.color
        ctx.rotate((props.rotate * Math.PI) / 180)
        ctx.fillText(props.value, 30, 40)

        baseURL.value = canvas.value.toDataURL('image/png')
      })
      return {
        baseURL,
        canvas,
      }
    },
  })
</script>
