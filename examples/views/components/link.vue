<template>
  <div>
    <h1>链接</h1>

    <p>使用 type 属性指定连接的类型：</p>
    <Link type="primary">主要链接</Link>
    <Link type="success">成功链接</Link>
    <Link type="info">信息链接</Link>
    <Link type="warning">警告链接</Link>
    <Link type="danger">危险链接</Link>
    <br /><br />
    <pre><code v-text="code"></code></pre>

    <p>使用 disabled 属性来禁用链接：</p>
    <Link type="primary" disabled>主要链接</Link>
    <Link type="success" disabled>成功链接</Link>
    <Link type="info" disabled>信息链接</Link>
    <Link type="warning" disabled>警告链接</Link>
    <Link type="danger" disabled>危险链接</Link>
    <br /><br />
    <pre><code v-text="code2"></code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Link } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const code = ref(`<Link type="primary">主要链接</Link>
<Link type="success">主要链接</Link>
<Link type="info">主要链接</Link>
<Link type="warning">主要链接</Link>
<Link type="danger">主要链接</Link>`)

  const code2 = ref(`<Link type="primary" disabled>主要链接</Link>
<Link type="success" disabled>成功链接</Link>
<Link type="info" disabled>信息链接</Link>
<Link type="warning" disabled>警告链接</Link>
<Link type="danger" disabled>危险链接</Link>`)
</script>

<style lang="less"></style>
