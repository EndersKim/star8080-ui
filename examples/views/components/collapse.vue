<template>
  <div>
    <h1>折叠面板</h1>

    <p>
      使用 v-model 绑定一个布尔值，来表示折叠面板的开启与关闭。将 v-model
      的值设为 true 使折叠面板默认打开。
    </p>
    <p>
      使用 #title 插槽来插入折叠面板的标题内容，使用默认插槽来插入折叠的内容。
    </p>

    <Collapse v-model="open_collapse">
      <template #title>点击展开/收起</template>
      <div>这是折叠的内容</div>
    </Collapse>
    <br />
    <pre><code v-text="code"></code></pre>

    <br />

    <Collapse v-model="open_collapse2">
      <template #title>点击展开/收起</template>
      <div>这是默认打开的折叠面板（这是折叠的内容）</div>
    </Collapse>
    <br />
    <pre><code v-text="code1"></code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Collapse } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const open_collapse = ref(false)
  const open_collapse2 = ref(true)

  const code = ref(`<Collapse v-model="open_collapse">
  <template #title>点击展开/收起</template>
  <div>这是折叠的内容</div>
</Collapse>`)

  const code1 = ref(`<Collapse v-model="open_collapse2">
  <template #title>点击展开/收起</template>
  <div>这是默认打开的折叠面板（这是折叠的内容）</div>
</Collapse>`)
</script>

<style lang="less"></style>
