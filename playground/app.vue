<template>
  <div>
    <Link href="https://juejin.cn/post/7121381989864701982">link</Link>

    <h3>文字提示</h3>

    <Tooltip tip="文字提示">
      <div style="padding: 10px; background-color: #ddd">把鼠标放在我上面</div>
    </Tooltip>

    <h3>徽标</h3>

    <Badge>
      <div style="width: 60px; height: 60px; background-color: #aaa"></div>
    </Badge>

    <h3>带有数字的徽标</h3>

    <Badge :num="20">
      <div style="width: 60px; height: 60px; background-color: #aaa"></div>
    </Badge>

    <h3>带有涟漪效果的徽标</h3>

    <Badge ripple>
      <div style="width: 60px; height: 60px; background-color: #aaa"></div>
    </Badge>

    <br />

    <Badge :num="2" ripple>
      <div style="width: 60px; height: 60px; background-color: #aaa"></div>
    </Badge>

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
  import { Link, Avatar, Badge, Tooltip } from 'star8080-ui'
</script>
