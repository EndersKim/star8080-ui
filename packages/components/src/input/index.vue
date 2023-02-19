<script setup lang="ts">
  import { ref, reactive, watch, nextTick } from 'vue'

  /**
   * 组件的参数
   * modelValue: 绑定的值，表示是否打开对话框
   * title: 对话框的标题
   */

  const props = defineProps({})
</script>

<template>
  <div class="Input">
    <input />
  </div>
</template>

<style lang="less"></style>
