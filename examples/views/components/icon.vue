<template>
  <div>
    <h1>图标</h1>

    <p>Star UI 提供了丰富的图标资源。</p>

    <p>使用 name 属性指定图标：</p>
    <Icon name="discount"></Icon>
    <pre><code>{{ `<Icon name="discount"></Icon>` }}</code></pre>

    <p>使用 dot 属性为图标加上小红点：</p>
    <Icon name="discount" dot></Icon>
    <pre><code>{{ `<Icon name="discount"></Icon>` }}</code></pre>

    <p>使用 dot 属性和 badge 属性为图标加上具有内容的小红点：</p>
    <Icon name="discount" dot badge="10"></Icon>
    <pre><code>{{ `<Icon name="discount"></Icon>` }}</code></pre>

    <p>使用 color 属性为图标指定颜色：</p>
    <Icon name="discount" color="red"></Icon>
    <pre><code>{{ `<Icon name="discount"></Icon>` }}</code></pre>

    <p>所有图标：</p>
    <table class="icon-table">
      <tr>
        <th>图标</th>
        <th>name</th>
      </tr>
      <tr v-for="item in iconNames">
        <td><Icon :name="item"></Icon></td>
        <td>{{ item }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const iconNames = reactive([
    'discount',
    'direction-left',
    'download',
    'electronics',
    'drag',
    'elipsis',
    'export',
    'explain',
    'edit',
    'eye-close',
    'email',
    'error',
    'favorite',
    'file-common',
    'file-delete',
    'file-add',
    'film',
    'fabulous',
    'file',
    'folder-close',
    'filter',
    'good',
    'hide',
    'home',
    'history',
    'file-open',
    'forward',
    'import',
    'image-text',
    'keyboard-26',
    'keyboard-9',
    'link',
    'layout',
    'fullscreen-shrink',
    'lock',
    'layers',
  ])

  const code = ref(``)
</script>

<style lang="less">
  .icon-table {
    border: 1px solid #ddd;

    td,
    th {
      padding: 4px 20px;
      border: 1px solid #ddd;
    }
  }
</style>
