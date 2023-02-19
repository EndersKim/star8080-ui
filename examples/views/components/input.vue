<template>
  <div>
    <h1>输入框</h1>

    <p>使用 type 为对话框指定属性</p>

    <pre><code v-text="code"></code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Input } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const code = ref(``)
</script>

<style lang="less"></style>
