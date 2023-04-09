<template>
  <div
    ref="containerRef"
    class="star-scrollbar"
    :style="{
      height: height + 'px',
      width: width + 'px',
    }"
  >
    <!-- 可视区 -->
    <div class="star-scrollbar_view">
      <!-- 内容区 -->
      <div
        ref="contentRef"
        class="star-scrollbar_content"
        @scroll="calculateBarPosition"
      >
        <slot></slot>
      </div>
      <!-- 滚动条 -->
      <div class="star-scrollbar_barcontainer" ref="barContanierRef">
        <div
          class="star-scrollbar_bar"
          ref="barRef"
          :style="{
            height: barHeight + 'px',
            width: '6px',
            transform: 'translateY(' + barDistanceHeight + 'px)',
            backgroundColor: scrollColor,
          }"
          @mousedown.stop.prevent="moveMouse"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import './style/index.less'
  import {
    defineComponent,
    nextTick,
    reactive,
    onMounted,
    ref,
    toRefs,
  } from 'vue'
  import { scrollbarProps } from './types'

  export default defineComponent({
    name: 'star-scrollbar',
    props: scrollbarProps,
    setup(props, context) {
      const data = reactive({
        contentRef: null, // 内容HTML元素
        containerRef: null, // scrollbar元素
        barContanierRef: null, // 滚动条容器元素
        barRef: null, // 滚动条元素
        barHeight: 0, // 滚动条高度
        barDistanceHeight: 0, // 滚动条距离顶部高度
        heightRatio: 0, // 内容区和可视区的高度比
      })

      // eslint-disable-next-line vue/no-setup-props-destructure
      let viewHeight = props.height // 可视区域高度
      let contentHeight = 0 // 内容区域高度
      let isClick = false // 是否被点击
      let barContainerHeight: number // 滚动条容器高度

      onMounted(() => {
        nextTick(() => {
          computeScrollHeight()
        })
      })

      // 计算滚动条高度
      const computeScrollHeight = () => {
        let content: HTMLElement = data.contentRef!
        let barContainer: HTMLElement = data.barContanierRef!
        let containerRef: HTMLElement = data.containerRef!

        // scrollHeight 属性是一个只读属性，它返回该元素的像素高度，高度包含内边距（padding），不包含外边距（margin）、边框（border），是一个整数，单位是像素 px。
        contentHeight = content.scrollHeight
        // clientHeight 属性是一个只读属性，它返回该元素的像素高度，高度包含内边距（padding），不包含边框（border），外边距（margin）和滚动条，是一个整数，单位是像素 px。
        // scrollHeight和clientHeight区别，前者是整个元素的高度，后者是可视区域内元素的高度
        viewHeight = containerRef.clientHeight
        barContainerHeight = barContainer.scrollHeight
        data.heightRatio = viewHeight / contentHeight
        data.barHeight = data.heightRatio * barContainerHeight
      }

      // 内容滚动时，计算滚动条移动
      const calculateBarPosition = (e: any) => {
        // scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数，一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。
        // 即该元素上方不可见区域的长度
        data.barDistanceHeight = e.target.scrollTop * data.heightRatio
      }

      let moveClientY: number
      const listenMouseMove = () => {
        document.onmousemove = (e) => {
          if (isClick) {
            // 移动滑块时，判断时候到达顶部或者底部
            if (e.clientY - moveClientY > barContainerHeight - data.barHeight) {
              // 滑块到达  底部  就不在改变滑块barDistanceHeight值
              data.barDistanceHeight = barContainerHeight - data.barHeight
            } else if (e.clientY - moveClientY < 0) {
              // 滑块到达  顶部  就不在改变滑块barDistanceHeight值
              data.barDistanceHeight = 0
            } else {
              //改变滑块位置
              data.barDistanceHeight = e.clientY - moveClientY
            }
            let contentRef: HTMLElement = data.contentRef!
            // 计算出内容盒子滚出顶部的距离
            contentRef.scrollTop = data.barDistanceHeight / data.heightRatio
          }
        }
      }
      const listenMouseUp = () => {
        document.onmouseup = (e) => {
          if (isClick) {
            isClick = false
          }
        }
      }
      const moveMouse = (e: any) => {
        isClick = true
        moveClientY = e.clientY - data.barDistanceHeight
        listenMouseUp()
        listenMouseMove()
      }

      return {
        ...toRefs(data),
        calculateBarPosition,
        moveMouse,
      }
    },
  })
</script>
