<template>
  <div v-bind="attrs" class="star-pagination" :class="styleClass">
    <div class="pagination-bottons">
      <button
        class="neighbor-bottons"
        @click="setPage(modelValue - 1)"
        :disabled="modelValue <= 1"
      >
        <svg
          class="prev"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
          ></path>
        </svg>
      </button>

      <TransitionGroup name="page-buttons">
        <div v-for="item in currentPages" :key="item" class="page-button-item">
          <button
            v-if="item > 0"
            class="page-button"
            @click="setPage(item)"
            :disabled="modelValue == item"
          >
            {{ item }}
          </button>
          <button v-else class="page-button-ellipsis" disabled>
            <svg
              t="1676628763138"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4926"
              width="128"
              height="128"
            >
              <path
                d="M64 512c0-31.44 10.92-58.07 32.75-79.91 21.83-21.83 48.47-32.75 79.9-32.75 31.44 0 58.08 10.92 79.91 32.75s32.75 48.47 32.75 79.91-10.92 58.07-32.75 79.91c-21.83 21.83-48.47 32.75-79.91 32.75-31.44 0-58.07-10.91-79.9-32.75C74.92 570.07 64 543.44 64 512z m335.35 0c0-31.44 10.91-58.07 32.75-79.91 21.83-21.83 48.47-32.75 79.91-32.75 31.44 0 58.07 10.92 79.91 32.75 21.83 21.83 32.75 48.47 32.75 79.91s-10.92 58.07-32.75 79.91c-21.83 21.83-48.47 32.75-79.91 32.75-31.44 0-58.07-10.91-79.91-32.75-21.84-21.84-32.75-48.47-32.75-79.91z m335.34 0c0-31.44 10.92-58.07 32.75-79.91 21.83-21.83 48.47-32.75 79.91-32.75s58.07 10.92 79.91 32.75C949.09 453.93 960 480.56 960 512s-10.91 58.07-32.75 79.91-48.47 32.75-79.91 32.75-58.07-10.91-79.91-32.75c-21.82-21.84-32.74-48.47-32.74-79.91z"
                p-id="4927"
              ></path>
            </svg>
          </button>
        </div>
      </TransitionGroup>

      <button
        class="neighbor-bottons"
        @click="setPage(modelValue + 1)"
        :disabled="modelValue >= max"
      >
        <svg
          class="next"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
  import './style/index.less'
  import { Props } from './types'
  import { defineComponent, useAttrs, computed, defineEmits } from 'vue'

  export default defineComponent({
    name: 'star-pagination',
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

      function setPage(page) {
        ctx.emit('update:modelValue', page)
      }

      const currentPages = computed(() => {
        let pageArray: number[] = []

        if (props.max <= 9) {
          for (let i = 1; i <= props.max; i++) {
            pageArray.push(i)
          }

          return pageArray
        }

        let start = props.modelValue - 2
        if (start < 3) start = 3
        if (start + 4 > props.max - 2) start = props.max - 6

        pageArray.push(1)

        if (start > 3) {
          pageArray.push(-1)
        } else {
          pageArray.push(2)
        }

        for (let i = 0; i < 5; i++) {
          pageArray.push(start + i)
        }

        if (start + 4 < props.max - 2) {
          pageArray.push(-2)
        } else {
          pageArray.push(props.max - 1)
        }

        pageArray.push(props.max)

        return pageArray
      })

      return {
        attrs,
        styleClass,
        setPage,
        currentPages,
      }
    },
  })
</script>

<style lang="less">
  .star-pagination {
    .pagination-bottons {
      display: flex;
      align-items: center;
    }

    button {
      padding: 0;
      margin: 0 4px;
      min-width: 30px;
      height: 30px;
      color: #09f;
      background-color: rgb(0 153 255 / 8.2%);
      border: none;
      border-radius: 30px;
      cursor: pointer;
      transition: 0.2s;

      &[disabled] {
        // filter: grayscale(1);
        cursor: auto;
      }

      &:hover {
        opacity: 0.5;
      }
    }

    .page-button-item {
      display: inline-block;
      transition: all 0.3s;
    }

    .page-button {
      &[disabled] {
        color: #fff;
        background-color: #09f;
        font-weight: bold;

        &:hover {
          opacity: 1;
        }
      }
    }

    .page-button-ellipsis {
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;

      svg {
        width: 20px;
        height: 20px;
        fill: #ddd;
      }

      &:hover {
        opacity: 1;
      }
    }

    .neighbor-bottons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;

      &[disabled] {
        opacity: 0.5;
        filter: grayscale(1);

        &:hover {
          opacity: 1;
        }
      }

      svg {
        width: 20px;
        height: 20px;
        fill: #09f;

        &.prev {
          transform: rotate(180deg);
        }
      }
    }
  }

  .page-buttons-enter,
  .page-buttons-leave-to {
    opacity: 0;
    transform: scale(0);
  }

  .page-buttons-leave-active {
    position: absolute;
  }
</style>
