<template>
  <div>
    <h1>头像</h1>

    <h2>基本用法</h2>
    <p>
      使用 src 属性指定头像的图片地址，使用 size 指定头像的大小，支持
      small、middle 和 large 三种大小，默认为 middle 大小。
    </p>
    <Avatar
      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.gZGw2wxU4Ehf5MfyT0QBlwHaHa?w=166&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
      size="small"
    ></Avatar>
    <Avatar
      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.gZGw2wxU4Ehf5MfyT0QBlwHaHa?w=166&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
    ></Avatar>
    <Avatar
      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.gZGw2wxU4Ehf5MfyT0QBlwHaHa?w=166&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
      size="large"
    ></Avatar>
    <br />
    <pre><code v-text="code"></code></pre>

    <h2>设置头像名称</h2>
    <p>
      我们建议用户在使用头像的同时指定 name
      属性，这样当头像地址失效时或者没有提供头像地址时，会使用 name 作为头像：
    </p>
    <Avatar name="User"></Avatar>
    <br />
    <pre><code v-text="code1"></code></pre>
    <p>
      当头像地址失效时或者没有提供头像地址时，若没有指定 name
      属性，则会使用默认头像：
    </p>
    <Avatar></Avatar>
    <br />
    <pre><code v-text="code2"></code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Avatar } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const code = ref(`<Avatar src="..." size="small"></Avatar>
<Avatar src="..."></Avatar>
<Avatar src="..." size="large"></Avatar>`)

  const code1 = ref(`<Avatar name="User"></Avatar>`)
  const code2 = ref(`<Avatar></Avatar>`)
</script>

<style lang="less"></style>
