<template>
  <div>
    <h1>选择器</h1>
    <p>选择器适合选项多的情况。</p>
    <p>
      和单选框类似使用 v-model 为选择器绑定值，使用 options
      为选择器指定选项，现在绑定的值为：{{ selectValue }}
    </p>
    <Select
      v-model="selectValue"
      :options="{ cd: '成都', sh: '上海', bj: '北京' }"
    />
    <br />
    <pre><code>{{ `<Select
  v-model="selectValue"
  :options="{ cd: '成都', sh: '上海', bj: '北京' }"
/>` }}</code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Select } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const selectValue = ref('cd')
  const inputValue1 = ref('')
  const inputValue2 = ref('')
</script>

<style lang="less"></style>
