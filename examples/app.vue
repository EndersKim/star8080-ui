<template>
  <div id="app">
    <Header></Header>
    <main>
      <RouterView></RouterView>
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
  import Header from './components/layouts/Header.vue'
  import Footer from './components/layouts/Footer.vue'
</script>

<style lang="less">
  @import url('https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css');

  * {
    padding: 0;
    margin: 0;
    font-family: '—apple-system', 'HarmonyOS_Regular', system-ui, 'Segoe UI',
      Rototo, Emoji, Helvetica, Arial, sans-serif;
  }

  :root {
    --page-bg: #fff;
    --section-bg: #f5f5fa;
    --text-color: #020d1e;
    --text-sub-color: #020d1e88;
    --text-light-color: #020d1e44;
    --border-light-color: #0002;
    --main-color: #09f;
    --main-light-color: rgb(0 153 255 / 13%);
  }

  .dark {
    --page-bg: #181818;
    --section-bg: #333;
    --text-color: #fff;
    --text-sub-color: #f0f4f888;
    --text-light-color: #f0f4f844;
    --border-light-color: #fff2;
  }

  :root {
    --scrollbar-thumb: #bbb8;
    --scrollbar-thumb-hover: #999a;
    --scrollbar-thumb-active: #777;
  }

  .dark {
    --scrollbar-thumb: #9998;
    --scrollbar-thumb-hover: #bbba;
    --scrollbar-thumb-active: #ddd;
  }

  *::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  *::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb) content-box;
    border: 5px solid transparent;
    border-radius: 8px;
    transition: all 0.5s;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-thumb-hover);
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: var(--scrollbar-thumb-active);
  }

  :root {
    --nav-height: 60px;
  }

  main {
    min-height: calc(100vh - var(--nav-height));
  }

  :root {
    --max-content: 1200px;
    --max-content: min(1440px, 80vw);
  }

  @media (max-width: 1600px) {
    :root {
      --max-content: max(1200px, 80vw);
    }
  }

  .content {
    margin: 0 auto;
    width: 90%;
    max-width: var(--max-content);
  }
</style>
