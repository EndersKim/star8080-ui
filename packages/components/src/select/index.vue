<template>
  <div
    class="star-select-box"
    :class="{
      open: open,
    }"
  >
    <div class="star-select" @click="open_action">
      {{ options[modelValue] }}
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

    <Teleport to="body">
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
            class="dropdown_overlay"
            @click="close_action"
            v-show="open_dropdown"
          ></div>
        </transition>

        <transition name="form_dropdown">
          <div class="dropdown_box" ref="dropdown_box" v-show="open_dropdown">
            <div
              class="label star-select"
              v-for="(option, key) in options"
              :key="key"
              :class="{
                active: key == modelValue,
              }"
              @click="click_option(option, key)"
            >
              {{ option }}
            </div>
          </div>
        </transition>
      </div>
    </Teleport>
  </div>
</template>

<script>
  export default {
    components: {},

    props: ['modelValue', 'options'],

    data() {
      return {
        open: false,

        open_dropdown: false,

        dropdown_x: 0,
        dropdown_y: 0,
        dropdown_width: 0,
        dropdown_height: 0,
      }
    },

    methods: {
      open_action() {
        this.open = true
        this.$nextTick(() => {
          this.caculate()
          window.addEventListener('resize', this.caculate)

          this.open_dropdown = true
        })
      },

      close_action() {
        this.open_dropdown = false
        window.removeEventListener('resize', this.caculate)
        setTimeout(() => {
          this.open = false
        }, 300)
      },

      click_option(option, key) {
        this.$emit('update:modelValue', key)
        this.close_action()
      },

      caculate() {
        let element = this.$el

        let window_width = window.innerWidth
        let window_height = window.innerHeight

        this.dropdown_x = element.getBoundingClientRect().x
        ;(this.dropdown_y =
          element.getBoundingClientRect().y +
          element.getBoundingClientRect().height),
          (this.dropdown_width = element.getBoundingClientRect().width)

        this.$nextTick(() => {
          let dropdown = this.$refs.dropdown

          this.dropdown_height = dropdown.getBoundingClientRect().height

          if (this.dropdown_x + this.dropdown_width > window_width) {
            this.dropdown_x = window_width - this.dropdown_width
            if (this.dropdown_x < 0) this.dropdown_x = 0
          }

          if (this.dropdown_y + this.dropdown_height > window_height) {
            this.dropdown_y = window_height - this.dropdown_height
          }
        })
      },
    },
  }
</script>

<style lang="less">
  .star-select-box {
    position: relative;
    padding: 0 24px;
    line-height: 40px;
    min-height: 40px;
    background: #eee;
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.2s;
  }

  .star-select-box:hover {
    background: #ddd;
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

  .open .star-select-arrow {
    transform: translateY(-50%) rotate(270deg);
  }

  .dropdown_overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .select_dropdown {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10000;
    padding-top: 8px;
    width: 100%;
  }

  .select_dropdown .dropdown_box {
    overflow: auto;
    padding: 6px;
    max-width: 100vw;
    max-height: 100vh;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 20px 0 #3a3a3a61;
  }

  .select_dropdown .label {
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
    background: none;
    border-radius: var(--border-radius);
    line-height: 36px;
  }

  .select_dropdown .label:hover {
    cursor: pointer;
    background: #eee;
  }

  .select_dropdown .label.active {
    color: var(--main-color);
    font-weight: bold;
  }

  .form_dropdown-enter-active,
  .form_dropdown-leave-active {
    transition: 0.2s;
  }

  .form_dropdown-enter-from,
  .form_dropdown-leave-to {
    opacity: 0;
    transform: translateY(-25%) scaleY(0.5) scaleX(0.8);
  }

  .form_dropdown-enter-to,
  .form_dropdown-leave-from {
    opacity: 1;
  }

  .form_dropdown_overlay-enter-active,
  .form_dropdown_overlay-leave-active {
    transition: 0.2s;
  }

  .form_dropdown_overlay-enter-from,
  .form_dropdown_overlay-leave-to {
    opacity: 0;
  }

  .form_dropdown_overlay-enter-to,
  .form_dropdown_overlay-leave-from {
    opacity: 1;
  }
</style>
