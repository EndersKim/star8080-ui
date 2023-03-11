<template>
  <div>
    <Link href="https://juejin.cn/post/7121381989864701982">link</Link>

    <h3>分页：现在是第 {{ page }} 页</h3>

    <Pagination v-model="page" :max="5"></Pagination>

    <h3>很多页的分页：现在是第 {{ page2 }} 页</h3>

    <Pagination v-model="page2" :max="100"></Pagination>

    <h3>折叠面板</h3>

    <Collapse v-model="open_collapse">
      <template #title>点击展开/收起</template>
      <div>这是折叠的内容</div>
    </Collapse>

    <h3>初始打开的折叠面板</h3>

    <Collapse v-model="open_collapse2">
      <template #title>点击展开/收起</template>
      <div>这是折叠的内容</div>
    </Collapse>

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

    <br />
    <Switch v-model="test" mimicry disabled />
  </div>
</template>
<script lang="ts" setup>
  import {
    Link,
    Avatar,
    Badge,
    Tooltip,
    Collapse,
    Pagination,
    Switch,
  } from 'star8080-ui'

  import { ref } from 'vue'

  const open_collapse = ref(false)
  const open_collapse2 = ref(true)

  const page = ref(1)
  const page2 = ref(1)

  let test = ref(true)
</script>
