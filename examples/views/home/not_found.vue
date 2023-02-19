<template>
    <div class="home content">
        <h1>404 Not Found</h1>
        <p>页面未找到</p>
        <div class="actions">
            <RouterLink to="/guide/start">快速开始</RouterLink>
            <RouterLink to="/guide">使用指南</RouterLink>
            <RouterLink to="/components">组件文档</RouterLink>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less">
.home {
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 45px;
        color: var(--main-color);
    }

    p {
        margin-top: 18px;
        color: var(--text-sub-color);
    }

    .actions {
        margin-top: 40px;

        display: flex;

        a {
            color: var(--main-color);
            text-decoration: none;
            margin: 10px;

            display: block;
            border-radius: 40px;
            border: 1px solid var(--border-light-color);
            padding: 6px 20px;

            transition: .3s;
        }

        a:hover {
            background: var(--main-color);
            color: var(--page-bg);
        }

        a:active {
            transform: scale(0.9);
        }

    }
}
</style>