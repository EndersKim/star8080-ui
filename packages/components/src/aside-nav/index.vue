<template>
  <div class="aside_nav">
    <NavItem v-for="item in nav" :nav="item"></NavItem>
  </div>
</template>

<script lang="ts" setup>
  import NavItem from './NavItem.vue'

  const props = defineProps(['nav'])
</script>

<style lang="less">
  .aside_nav {
    position: sticky;
    top: var(--nav-height);
    overflow: auto;
    padding: 10px 8px;
    padding-left: 0;
    width: 240px;
    height: calc(100vh - var(--nav-height));
    border-right: 1px solid var(--border-light-color);
    flex-shrink: 0;
    box-sizing: border-box;

    .aside_nav_group {
      margin: 30px 0;
    }

    h3 {
      margin: 10px 4px;
      font-size: 16px;
      font-weight: normal;
    }

    a {
      display: block;
      padding: 8px 14px;
      margin: 4px 0;
      font-size: 15px;
      text-decoration: none;
      color: var(--text-sub-color);
      border-radius: 10px;
      transition: 0.2s;
    }

    a:hover {
      background: var(--border-light-color);
    }

    a.router-link-exact-active {
      color: var(--main-color);
      background-color: var(--main-light-color);
    }

    a:active {
      transform: scale(0.95);
    }
  }
</style>
