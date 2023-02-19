<template>
  <div class="aside_nav_item">
    <template class="title" v-if="nav.children">
      <div class="aside_nav_group">
        <h3>{{ nav.title }}</h3>
        <NavItem v-for="item in nav.children" :nav="item"></NavItem>
      </div>
    </template>
    <template class="link" v-else-if="nav.link">
      <RouterLink :to="nav.link" class="aside_nav_link">{{
        nav.title
      }}</RouterLink>
    </template>
  </div>
</template>

<script lang="ts" setup>
  import NavItem from './NavItem.vue'
  const props = defineProps(['nav'])
</script>
