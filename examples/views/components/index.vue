<template>
  <div class="container content">
    <AsideNav :nav="nav_data"></AsideNav>
    <div class="main">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { AsideNav } from 'star8080-ui'
  import { reactive } from 'vue'

  const nav_data = reactive([
    { title: '组件文档', link: '/components' },

    {
      title: '基础组件',
      children: [
        { title: '按钮', link: '/components/button' },
        { title: '链接', link: '/components/link' },
        { title: '图标', link: '/components/icon' },
      ],
    },

    {
      title: '页面组件',
      children: [{ title: '侧边导航', link: '/components/aside-nav' }],
    },

    {
      title: '表单组件',
      children: [
        { title: '输入框-', link: '/components/input' },
        { title: '数字输入框-', link: '/components/input-num' },
        { title: '单选框-', link: '/components/radio' },
        { title: '选择器-', link: '/components/select' },
        // { title: '日期和时间选择器', link: '/components/icon' },
      ],
    },

    {
      title: '数据展示组件',
      children: [
        // { title: '表格-', link: '/components/table' },
        { title: '头像', link: '/components/avatar' },
        { title: '折叠面板', link: '/components/collapse' },
        { title: '分页', link: '/components/pagination' },
        // { title: '结果-', link: '/components/result' },
        { title: '标记', link: '/components/badge' },
      ],
    },

    {
      title: '反馈组件',
      children: [
        { title: '对话框', link: '/components/dialog' },
        // { title: '消息提示-', link: '/components/message' },
        { title: '文字提示', link: '/components/tooltip' },
        // { title: '弹出框-', link: '/components/popover' },
      ],
    },
  ])
</script>

<style lang="less">
  .container {
    display: flex;

    .main {
      flex: 1;
      padding: 10px 30px;
      padding-right: 0;

      p,
      ul,
      ol {
        margin: 16px 0;
        font-size: 16px;
        text-align: justify;
        color: var(--text-color);
        line-height: 1.9;
        word-wrap: break-word;
        overflow-wrap: break-word;
        fill: var(--text-color);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        word-wrap: break-word;
        overflow-wrap: break-word;
        margin: 16px 0;
        margin-top: 24px;
      }

      h1 {
        margin-bottom: 30px;
      }

      pre {
        padding: 10px 20px;
        background: var(--section-bg);
        border-radius: 10px;
        line-height: 1.8;
      }

      code,
      kbd {
        padding: 2px 5px;
        font-family: var(--font-mono);
        background: var(--section-bg);
        border-radius: 4px;
      }

      kbd {
        font-size: 12px;
        border: 1px solid var(--border-light-color);
      }

      pre code {
        padding: 0;
        font-size: 15px;
        background: #fff0;
      }
    }
  }
</style>
