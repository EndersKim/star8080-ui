<template>
  <div>
    <h1>快速开始</h1>
    <p>使用npm进行安装：</p>
    <pre><code>{{ `npm install star8080-ui` }}</code></pre>
    <p>按需导入：</p>
    <pre><code>{{ `import { AsideNav } from 'star8080-ui'` }}</code></pre>
    <p>使用组件：</p>
    <pre><code>{{ `<template>
    <AsideNav :nav="nav_data"></AsideNav>
</template>

<script lang="ts" setup>
import { AsideNav } from 'star8080-ui'
import { reactive, ref } from 'vue';
const nav_data = reactive([
    { title: "组件文档", link:"/components" },

    { title: "基础组件", children:[
        { title: "按钮", link:"/components/button" },
        { title: "图标", link:"/components/icon" },
    ]},
])
</script>` }}</code></pre>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less"></style>
