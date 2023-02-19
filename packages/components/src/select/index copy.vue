<template>
  <div class="star-select-box" :class="styleClass">
    <div class="star-select" @click="open_action" ref="select">
      <span class="text">{{ options[modelValue] }} {{ open }}</span>
      <svg
        class="star-select-arrow"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
        ></path>
      </svg>
    </div>

    <div
      class="select_dropdown"
      ref="dropdown"
      :style="{
        top: dropdown_y + 'px',
        left: dropdown_x + 'px',
        width: dropdown_width + 'px',
      }"
      v-if="open"
    >
      <transition name="form_dropdown_overlay">
        <div
          class="dropdown_overlay full"
          @click="close_action"
          v-show="open_dropdown"
        ></div>
      </transition>

      <transition name="form_dropdown">
        <div class="dropdown_box" ref="dropdown_box" v-show="open_dropdown">
          <div
            class="label form_item"
            v-for="(option, key) in options"
            :key="key"
            :class="{
              active: key == value,
              disable: option.disable,
            }"
            @click="click_option(option, key)"
          >
            <span class="text">{{ display_option(option) }}</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
  import './style/index.less'
  import { Props } from './types'
  import { defineComponent, useAttrs, computed, ref, nextTick } from 'vue'

  export default defineComponent({
    name: 'star-select',
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

      const open = ref(false)

      const open_action = function () {
        open.value = true
      }

      const select = ref(null)
      const dropdown = ref(null)

      const dropdown_x = ref(0)
      const dropdown_y = ref(0)
      const dropdown_width = ref(0)
      const dropdown_height = ref(0)

      const caculate = function () {
        let element = select.value

        let window_width = window.innerWidth
        let window_height = window.innerHeight

        dropdown_x.value = element.getBoundingClientRect().x
        ;(dropdown_y.value =
          element.getBoundingClientRect().y +
          element.getBoundingClientRect().height),
          (dropdown_width.value = element.getBoundingClientRect().width)

        nextTick(() => {
          dropdown_height.value = dropdown.value.getBoundingClientRect().height

          if (dropdown_x.value + dropdown_width.value > window_width) {
            dropdown_x.value = window_width - dropdown_width.value
            if (dropdown_x.value < 0) dropdown_x.value = 0
          }

          if (dropdown_y.value + dropdown_height.value > window_height) {
            dropdown_y.value = window_height - dropdown_height.value
          }
        })
      }

      return {
        attrs,
        styleClass,
        open_action,
        open,
        caculate,
        select,
        dropdown,
      }
    },
  })
</script>

<style lang="less">
  .star-select-box {
    position: relative;
    padding: 0 20px;
    line-height: 40px;
    min-height: 40px;
    background: #eee;
    border-radius: 20px;
    box-sizing: border-box;
  }

  .star-select-arrow {
    position: absolute;
    top: 50%;
    right: 20px;
    width: 20px;
    height: 20px;
    fill: #aaa;
    transform: translateY(-50%) rotate(90deg);
    transition: 0.3s;
  }
</style>
