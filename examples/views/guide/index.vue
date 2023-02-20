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
    { title: '使用指南', link: '/guide' },
    { title: '安装', link: '/guide/install' },
    { title: '快速开始', link: '/guide/start' },

    {
      title: '使用',
      children: [
        { title: '主题色', link: '/guide/theme' },
        { title: '暗色模式', link: '/guide/dark' },
        { title: '国际化', link: '/guide/i18n' },
      ],
    },

    {
      title: '贡献',
      children: [
        { title: '提交反馈', link: '/guide/feedback' },
        { title: '参与开发', link: '/guide/contribute' },
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
