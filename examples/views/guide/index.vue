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
import { reactive } from 'vue';

const nav_data = reactive([
    { title: "使用指南", link:"/components" },
    { title: "安装", link:"/components" },
    { title: "快速开始", link:"/components" },

    { title: "使用", children:[
        { title: "主题色", link:"/components/button" },
        { title: "暗黑模式", link:"/components/button" },
        { title: "国际化", link:"/components/button" },
    ]},

    { title: "贡献", children:[
        { title: "提交反馈", link:"/components/aside-nav" },
        { title: "帮助翻译", link:"/components/aside-nav" },
        { title: "参与开发", link:"/components/aside-nav" },
    ]},

])
</script>

<style lang="less" scoped>
.container {
    display: flex;

    .main {
        flex: 1;
        padding: 10px 30px;
        padding-right: 0;


        p, ul, ol{
            line-height: 1.9;
            word-wrap: break-word;
            overflow-wrap: break-word;
            text-align:justify;
            font-size: 16px;
            color: var(--text-color);
            fill: var(--text-color);
            margin: 16px 0;
        }

        h1, h2, h3, h4, h5, h6{
            
            word-wrap: break-word;
            overflow-wrap: break-word;
            margin: 16px 0;

            margin-top: 24px;
        }

    }
}
</style>