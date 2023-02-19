<template>
  <div>
    <h1>标记</h1>

    <p>使用标记组件包裹元素，会在元素右上角显示标记，默认样式为小红点：</p>

    <Badge>
      <div style="width: 60px; height: 60px; background-color: #aaa"></div>
    </Badge>
    <br /><br />
    <pre><code>{{ `<Badge>
  <div style="width: 60px; height: 60px; background-color: #aaa;"></div>
</Badge>` }}</code></pre>

    <p>使用 num 属性指定标记的数字：</p>

    <Badge :num="20">
      <div style="width: 60px; height: 60px; background-color: #aaa"></div>
    </Badge>
    <br /><br />
    <pre><code>{{ `<Badge :num="20">
  <div style="width: 60px; height: 60px; background-color: #aaa;"></div>
</Badge>` }}</code></pre>

    <p>使用 ripple 属性为标记添加涟漪效果：</p>

    <Badge ripple>
      <div style="width: 60px; height: 60px; background-color: #aaa"></div>
    </Badge>
    <br /><br />
    <pre><code>{{ `<Badge ripple>
  <div style="width: 60px; height: 60px; background-color: #aaa;"></div>
</Badge>` }}</code></pre>

    <br /><br />

    <Badge :num="20" ripple>
      <div style="width: 60px; height: 60px; background-color: #aaa"></div>
    </Badge>
    <br /><br />
    <pre><code>{{ `<Badge :num="20" ripple>
  <div style="width: 60px; height: 60px; background-color: #aaa;"></div>
</Badge>` }}</code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Badge } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const page = ref(1)
  const page2 = ref(10)
</script>

<style lang="less"></style>
