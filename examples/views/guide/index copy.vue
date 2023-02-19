<template>
    <div class="container content">
        <div class="aside">
            <RouterLink to="/guide">使用指南</RouterLink>
            <RouterLink to="/guide/button">安装</RouterLink>
            <RouterLink to="/guide/button">快速开始</RouterLink>
            <h3>使用</h3>
            <RouterLink to="/guide/icon">主题色</RouterLink>
            <RouterLink to="/guide/icon">暗黑模式</RouterLink>
            <RouterLink to="/guide/icon">国际化</RouterLink>
            <h3>贡献</h3>
            <RouterLink to="/guide/icon">提交反馈</RouterLink>
            <RouterLink to="/guide/icon">帮助翻译</RouterLink>
            <RouterLink to="/guide/icon">参与开发</RouterLink>
        </div>
        <div class="main">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.container {
    display: flex;
    

    .aside {
        --scrollbar-thumb: #fff0;
        
        border-right: 1px solid var(--border-light-color);
        width: 240px;
        flex-shrink: 0;
        height: calc(100vh - var(--nav-height));
        position: sticky;
        top: var(--nav-height);
        overflow: auto;

        padding: 10px 8px;
        padding-left: 0;

        box-sizing: border-box;

        h3 {
            font-size: 16px;
            // padding: 4px 10px;

            margin: 10px 4px;
            margin-top: 30px;
            // color: var(--text-sub-color);
            font-weight: normal;
        }

        h3:first-child {
            margin-top: 10px;
        }

        a {
            display: block;
            
            border-radius: 10px;
            margin: 4px 0;
            padding: 8px 14px;
            color: var(--text-sub-color);
            text-decoration: none;

            transition: .2s;

            font-size: 15px;
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

    .aside:hover {
        --scrollbar-thumb: #bbb8;
    }

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