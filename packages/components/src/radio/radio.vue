<template>
  <label
    class="star-radio"
    :class="{
      'is-checked': label == modelValue,
      ...styleClass
    }"
  >
    <span class="star-radio_input">
      <span class="star-radio_inner"></span>
      <input
        type="radio"
        @change="handleChange"
        class="star-radio_original"
        :disabled="styleClass.is-disabled"
        :value="label"
      />
    </span>
    <span class="star-radio_label">
      <slot />
      <!-- 如果slot没传内容，就直接展示label -->
      <template v-if="!hasSlot">{{label}}</template>
    </span>
  </label>
</template>

<script lang="ts">
import "./style/index.less";
import { defineComponent, computed, ref } from "vue";
import { radioProps } from "./types";
import { nextTick } from "vue";
// import Icon from '../Icon/icon.vue'

export default defineComponent({
  name: "star-radio",
  props: radioProps,
  // components: { Icon },
  setup(props, context) {
    const label = props.label;
    let hasSlot : boolean = true;

    const styleClass = computed(() => {
      return {
        "is-border": props.border,
        "is-disabled": props.disabled,
        [`star-radio--${props.size}`]: props.size,
      };
    });

    // 判断是否有slot
    if (context.slots.default == undefined){
        hasSlot = false;
    }

    // 当单选框值改变时，触发该函数回调
    function handleChange() {
      // 提交label值到该组件双向绑定的value上
      nextTick(() => context.emit("update:modelValue", label));
    }

    return {
      label,
      styleClass,
      hasSlot,
      handleChange,
    };
  },
});
</script>