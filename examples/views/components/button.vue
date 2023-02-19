<template>
  <div>
    <h1>按钮</h1>

    <p>使用 type 属性来指定按钮类型：</p>
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="text">文字按钮</Button>
    <br /><br />
    <pre><code v-text="code1"></code></pre>

    <p>使用 plain 属性指定按钮为朴素样式：</p>
    <Button plain>朴素按钮</Button>
    <Button type="primary" plain>主要按钮</Button>
    <Button type="success" plain>成功按钮</Button>
    <Button type="info" plain>信息按钮</Button>
    <Button type="warning" plain>警告按钮</Button>
    <Button type="danger" plain>危险按钮</Button>
    <br /><br />
    <pre><code v-text="code2"></code></pre>

    <p>使用 round 属性指定按钮为圆角样式：</p>
    <Button round>圆角按钮</Button>
    <Button type="primary" round>主要按钮</Button>
    <Button type="success" round>成功按钮</Button>
    <Button type="info" round>信息按钮</Button>
    <Button type="warning" round>警告按钮</Button>
    <Button type="danger" round>危险按钮</Button>
    <br /><br />
    <pre><code v-text="code3"></code></pre>

    <p>使用 disabled 属性来禁用按钮：</p>
    <Button disabled>禁用按钮</Button>
    <Button type="primary" disabled>主要按钮</Button>
    <Button type="success" disabled>成功按钮</Button>
    <Button type="info" disabled>信息按钮</Button>
    <Button type="warning" disabled>警告按钮</Button>
    <Button type="danger" disabled>危险按钮</Button>
    <br /><br />
    <pre><code v-text="code4"></code></pre>

    <p>使用 size 属性指定按钮的大小：</p>
    <Button>默认按钮</Button>
    <Button size="medium">中等按钮</Button>
    <Button size="small">小型按钮</Button>
    <Button size="mini">超小按钮</Button>
    <br /><br />
    <pre><code v-text="code5"></code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Button } from 'star8080-ui'
  import { ref } from 'vue'

  const code1 = ref(
    `<Button>默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="info">信息按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="danger">危险按钮</Button>
<Button type="text">文字按钮</Button>`
  )
  const code2 = ref(
    `<Button plain>朴素按钮</Button>
<Button type="primary" plain>主要按钮</Button>
<Button type="success" plain>成功按钮</Button>
<Button type="info" plain>信息按钮</Button>
<Button type="warning" plain>警告按钮</Button>
<Button type="danger" plain>危险按钮</Button>`
  )
  const code3 = ref(
    `<Button round>圆角按钮</Button>
<Button type="primary" round>主要按钮</Button>
<Button type="success" round>成功按钮</Button>
<Button type="info" round>信息按钮</Button>
<Button type="warning" round>警告按钮</Button>
<Button type="danger" round>危险按钮</Button>`
  )
  const code4 = ref(
    `<Button disabled>禁用按钮</Button>
<Button type="primary" disabled>主要按钮</Button>
<Button type="success" disabled>成功按钮</Button>
<Button type="info" disabled>信息按钮</Button>
<Button type="warning" disabled>警告按钮</Button>
<Button type="danger" disabled>危险按钮</Button>`
  )
  const code5 = ref(
    `<Button>默认按钮</Button>
<Button size="medium">中等按钮</Button>
<Button size="small">小型按钮</Button>
<Button size="mini">超小按钮</Button>`
  )
</script>

<style lang="less">
  .k-button {
    margin-right: 10px;
  }
</style>
