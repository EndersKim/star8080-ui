<template>
  <div>
    <h1>分页</h1>

    <p>
      分页组件提供了当前页码的显示以及数个可以点击的按钮，可以跳转到上一页、下一页或者指定的页码。
    </p>

    <p>使用 v-model 绑定一个整数值，表示当前的页码，页码从 1 开始。</p>
    <p>使用 max 绑定一个整数值，表示最大的页码。</p>

    <Pagination v-model="page" :max="5"></Pagination>
    <br />
    <pre><code>{{ `<Pagination v-model="page" :max="5"></Pagination>` }}</code></pre>

    <p>当页面数量很多时，会自动省略部分页码。</p>
    <p>
      不同于市面上常见的组件库，为了更好的用户体验，在页码变化时，分页组件的总长度不会变化，也就是说上一页和下一页按钮的位置不会变化，减少了用户误点击的可能性。
    </p>

    <Pagination v-model="page2" :max="100"></Pagination>
    <br />
    <pre><code>{{ `<Pagination v-model="page2" :max="100"></Pagination>` }}</code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Pagination } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const page = ref(1)
  const page2 = ref(10)
</script>

<style lang="less"></style>
