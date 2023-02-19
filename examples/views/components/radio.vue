<template>
  <div>
    <h1>单选框</h1>

    <p>单选框适合选项少的情况。</p>
    <p>
      使用 v-model 为单选框绑定值，使用 options
      为单选框指定选项，现在绑定的值为：{{ radioValue }}
    </p>
    <Radio
      v-model="radioValue"
      :options="{ cd: '成都', sh: '上海', bj: '北京' }"
    />
    <br />
    <pre><code>{{ `<Radio
  v-model="radioValue"
  :options="{ cd: '成都', sh: '上海', bj: '北京' }"
/>` }}</code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Radio } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const radioValue = ref('cd')
  const inputValue1 = ref('')
  const inputValue2 = ref('')
</script>

<style lang="less"></style>
