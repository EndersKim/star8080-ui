<script setup lang="ts">
  import { ref, reactive, watch, nextTick } from 'vue'

  /**
   * 组件的参数
   * modelValue: 绑定的值，表示是否打开对话框
   * title: 对话框的标题
   */

  const props = defineProps(['modelValue', 'title'])

  /**
   * 关闭对话框的事件
   * 要关闭或者打开对话框，直接修改modelValue即可
   */

  const emit = defineEmits(['update:modelValue'])

  /**
   * 监听对话框内的滚动
   */

  const data = reactive({
    on_top: true, // 对话框内滚动条是否在顶部
  })

  const dialog_content_container = ref(null)

  watch(
    () => props.modelValue,
    (new_val) => {
      if (new_val) {
        nextTick(() => {
          data.on_top = true
          dialog_content_container.value.addEventListener(
            'scroll',
            listen_scroll
          )
        })
      } else {
        dialog_content_container.value.removeEventListener(
          'scroll',
          listen_scroll
        )
      }
    }
  )

  function listen_scroll() {
    let scroll_top = dialog_content_container.value.scrollTop

    if (scroll_top > 10) {
      data.on_top = false
    } else {
      data.on_top = true
    }
  }
</script>

<template>
  <div class="Dialog">
    <Teleport to="#app">
      <transition name="dialog">
        <div class="dialog_body" v-if="modelValue">
          <div
            class="dialog_overlay"
            @click="emit('update:modelValue', false)"
          ></div>
          <div class="dialog_wrapper">
            <div class="dialog_box" ref="dialog_box">
              <div
                class="dialog_title_container"
                :class="{ on_top: data.on_top }"
                v-if="title"
              >
                <h2>{{ title }}</h2>
                <div
                  class="dialog_close"
                  @click="emit('update:modelValue', false)"
                >
                  <svg
                    t="1656216329802"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2199"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                      fill=""
                      p-id="2200"
                    ></path>
                    <path
                      d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                      fill=""
                      p-id="2201"
                    ></path>
                    <path
                      d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                      fill=""
                      p-id="2202"
                    ></path>
                    <path
                      d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                      fill=""
                      p-id="2203"
                    ></path>
                    <path
                      d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                      fill=""
                      p-id="2204"
                    ></path>
                    <path
                      d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                      fill=""
                      p-id="2205"
                    ></path>
                    <path
                      d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                      fill=""
                      p-id="2206"
                    ></path>
                    <path
                      d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                      fill=""
                      p-id="2207"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                class="dialog_content_container"
                ref="dialog_content_container"
                :class="{ hide_title: !title }"
              >
                <div class="dialog_content">
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<style lang="less">
  :root {
    --dialog-z-index: 1000;
    --max-window: 2560px;
    --padding-width: 20px;
    --border-radius: 20px;
    --dialog-back-color: #00000080;
    --dialog-color: #fff;
    --dialog-shadow: 0 0 20px 0 #3a3a3a61;
  }

  .dark {
    --dialog-back-color: #1b1b1b80;
    --dialog-color: #333;
    --dialog-shadow: 0 0 20px 0 #222;
  }

  .dialog_body {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .dialog_wrapper {
    position: relative;
    display: flex;
    overflow: hidden;
    margin: 50px var(--padding-width);
    max-width: calc(var(--max-content) - var(--padding-width) * 2);
    max-height: calc(100% - 100px);
    background: var(--dialog-color);
    border-radius: var(--border-radius);
    box-shadow: var(--dialog-shadow);
  }

  /* ********************************************** dialog_close ********************************************** */

  .dialog_close {
    position: absolute;
    top: 13px;
    right: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background: #eee;
    border-radius: 50%;
    transition: 0.2s;
    cursor: pointer;
    fill: #2222226b;

    svg {
      width: 60%;
      height: 60%;
      fill: inherit;
    }
  }

  .dialog_close:hover {
    background: rgb(255 107 107);
    fill: #fff;
  }

  .dialog_close:active {
    transform: scale(0.8);
  }

  /* ********************************************** dialog_box ********************************************** */

  .dialog_box {
    z-index: 1;
    display: flex;
    max-width: 100%;
    max-height: 100%;
    flex-direction: column;
  }

  /* ********************************************** dialog_title_container ********************************************** */

  .dialog_title_container {
    position: absolute;
    display: flex;
    padding: 10px 20px;
    width: 100%;
    height: 50px;
    transition: 0.5s;
    flex-shrink: 0;
    border-bottom: 1px solid #d1d1d1;
    box-sizing: border-box;

    h2 {
      padding: 0 26px;
      width: 100%;
      font-size: 18px;
      text-align: center;
      white-space: nowrap;
      transition: 0.5s;
      line-height: 30px;
    }
  }

  .dialog_title_container.on_top {
    border-bottom: 1px solid #fff0;

    h2 {
      margin-left: -26px;
      width: 0%;
      font-size: 24px;
      line-height: 50px;
    }
  }

  /* ********************************************** dialog_content_container ********************************************** */

  .dialog_content_container {
    overflow: auto;
    padding: 20px;
    margin-top: 50px;
  }

  .dialog_content_container.hide_title {
    margin-top: 0;
  }

  /* ************************************* dialog_overlay ************************************* */

  .dialog_overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--dialog-back-color);
  }

  /* ************************************* dialog 动画 ************************************* */

  .dialog-enter-active,
  .dialog-leave-active {
    transition: 0.3s;

    .dialog_overlay {
      transition: 0.3s;
    }

    .dialog_wrapper {
      transition: 0.3s;
    }
  }

  .dialog-enter-from,
  .dialog-leave-to {
    .dialog_overlay {
      opacity: 0;
    }

    .dialog_wrapper {
      opacity: 0;
      transform: scale(1.05);
    }
  }

  .dialog-leave-to .dialog_wrapper {
    transform: scale(0.95);
  }
</style>
