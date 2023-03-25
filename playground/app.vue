<!-- eslint-disable prettier/prettier -->
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
      <div style="padding: 10px; background-color: #ddd;">把鼠标放在我上面</div>
    </Tooltip>

    <h3>徽标</h3>

    <Badge>
      <div style="width: 60px; height: 60px; background-color: #aaa;"></div>
    </Badge>

    <h3>带有数字的徽标</h3>

    <Badge :num="20">
      <div style="width: 60px; height: 60px; background-color: #aaa;"></div>
    </Badge>

    <h3>带有涟漪效果的徽标</h3>

    <Badge ripple>
      <div style="width: 60px; height: 60px; background-color: #aaa;"></div>
    </Badge>

    <br />

    <Badge :num="2" ripple>
      <div style="width: 60px; height: 60px; background-color: #aaa;"></div>
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

    <Scrollbar :height="400">
      <ul>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>888</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
        <li>777</li>
        <li>666</li>
        <li>666</li>
        <li>666</li>
      </ul>
    </Scrollbar>

    <br />
    <!-- <Input></Input> -->
    <!-- <Switch v-model="test" mimicry /> -->
    <Waterfall value="star"></Waterfall>
    <!-- <Select></Select> -->

    <Casader :option="options" v-model="selectedValue"></Casader>
  </div>
  <!-- <testtest></testtest> -->
</template>
<script lang="ts" setup>
  import { log } from 'console'
  import {
    Link,
    Input,
    Avatar,
    Badge,
    Tooltip,
    Collapse,
    Pagination,
    Switch,
    Select,
    Waterfall,
    Scrollbar,
    Casader,
  } from 'star8080-ui'

  import { reactive, ref, watch } from 'vue'
  import testtest from './test.vue'

  const open_collapse = ref(false)
  const open_collapse2 = ref(true)

  const page = ref(1)
  const page2 = ref(1)

  let test = ref(true)
  const options = reactive([
    {
      value: '电子产品',
      label: '电子产品',
      children: [
        {
          label: '1',
          value: '手机',
          children: [
            {
              label: '1',
              value: '小米',
            },
            {
              label: '1',
              value: '华为',
            },
            {
              label: '1',
              value: '苹果',
            },
          ],
        },
        {
          label: '1',
          value: '电脑',
          children: [
            {
              label: '1',
              value: '联想',
            },
            {
              label: '1',
              value: '戴尔',
            },
            {
              label: '1',
              value: '惠普',
            },
          ],
        },
      ],
    },
    {
      label: '2',
      value: '服装',
      children: [
        {
          label: '2',
          value: '男装',
          children: [
            {
              label: '2',
              value: '衬衫',
            },
            {
              label: '2',
              value: '裤子',
            },
            {
              label: '2',
              value: '外套',
            },
          ],
        },
        {
          label: '2',
          value: '女装',
          children: [
            {
              label: '2',
              value: '连衣裙',
            },
            {
              label: '2',
              value: '半身裙',
            },
            {
              label: '2',
              value: 'T恤',
            },
          ],
        },
      ],
    },
  ])
  const selectedValue = ref('')
  watch(selectedValue, () => {
    console.log(selectedValue)
  })
</script>
