<template>
  <div>
    <h1>文字提示</h1>

    <p>
      使用文字提示可以告知用户按钮的作用或者对内容进行更加具体的解释。当用户鼠标放在按钮等元素上时，会使用小型弹出框提示用户。
    </p>
    <p>
      在默认插槽中插入需要提示的按钮或者其他元素，然后使用 tip
      属性指定文字提示的内容。
    </p>

    <Tooltip tip="文字提示">
      <div style="padding: 10px; background-color: #ddd">把鼠标放在我上面</div>
    </Tooltip>
    <br /><br />
    <pre><code>{{ `<Tooltip tip="文字提示">
  <div style="padding: 10px; background-color: #ddd;">把鼠标放在我上面</div>
</Tooltip>` }}</code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Tooltip } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const page = ref(1)
  const page2 = ref(10)
</script>

<style lang="less"></style>
