<template>
  <div>
    <h1>输入框</h1>

    <p>使用 v-model 为输入框绑定值：</p>
    <Input v-model="inputValue" />
    <br />
    <pre><code>{{ `<Input v-model="inputValue" />` }}</code></pre>

    <p>使用 placeholder 为输入框指定占位符：</p>
    <Input v-model="inputValue1" placeholder="搜索" />
    <br />
    <pre><code>{{ `<Input v-model="inputValue1" placeholder="搜索" />` }}</code></pre>

    <p>使用 disabled 禁用输入框：</p>
    <Input v-model="inputValue2" placeholder="搜索" disabled />
    <br />
    <pre><code>{{ `<Input v-model="inputValue1" placeholder="搜索" disabled />` }}</code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Input } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const inputValue = ref('')
  const inputValue1 = ref('')
  const inputValue2 = ref('')
</script>

<style lang="less"></style>
