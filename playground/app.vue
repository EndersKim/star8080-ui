<template>
  <div>
    <Link href="https://juejin.cn/post/7121381989864701982">link</Link>

    <h3>不同尺寸的头像</h3>
    <Avatar
      src="https://img.zhheo.com/i/2022/08/19/62ff32fa28da1.png"
      size="small"
    ></Avatar>
    <Avatar src="https://img.zhheo.com/i/2022/08/19/62ff32fa28da1.png"></Avatar>
    <Avatar
      src="https://img.zhheo.com/i/2022/08/19/62ff32fa28da1.png"
      size="large"
    ></Avatar>
    <h3>显示文字的头像</h3>
    <Avatar name="俞涛"></Avatar>
    <h3>默认头像</h3>
    <Avatar></Avatar>
  </div>
</template>
<script lang="ts" setup>
  import { Link, Avatar } from 'star8080-ui'
</script>
