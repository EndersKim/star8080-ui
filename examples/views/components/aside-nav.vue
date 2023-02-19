<template>
  <div>
    <h1>侧边导航</h1>

    <p>可以通过传入一个数组来快速生成侧边导航，数组的每个元素为一个导航项。</p>
    <p>
      导航项通过 title 属性指定标题，通过 link 属性指定路径，通过 children
      属性指定子导航。
    </p>
    <div>
      <AsideNav :nav="nav_data"></AsideNav>
    </div>

    <pre><code v-text="code"></code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { AsideNav } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const nav_data = reactive([
    { title: '组件文档', link: '/components' },

    {
      title: '基础组件',
      children: [
        { title: '按钮', link: '/components/button' },
        { title: '图标', link: '/components/icon' },
      ],
    },
  ])

  const code = ref(
    `<template>
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
<\/script>`
  )
</script>

<style lang="less"></style>
