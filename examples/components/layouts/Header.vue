<template>
    <header>
        <div class="header_content content">
            <div class="logo">
                Star UI
            </div>

            <div class="nav">
                <RouterLink to="/">主页</RouterLink>
                <RouterLink to="/guide">指南</RouterLink>
                <RouterLink to="/components">组件</RouterLink>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
// import { Button } from 'star8080-ui'
</script>

<style lang="less">
header {
    border-bottom: 1px solid var(--border-light-color);
    height: var(--nav-height);
    position: sticky;
    top: 0;
    background-color: var(--page-bg);
    z-index: 10000;

    box-sizing: border-box;
}

.header_content {
    height: inherit;
    display: flex;
    align-items: center;

    .logo {
        font-size: 25px;
        color: var(--main-color);
        font-weight: bolder;
    }

    .nav {
        margin-left: auto;

        a {
            color: var(--text-sub-color);
            text-decoration: none;
            margin-left: 20px;
        }

        a.router-link-active {
            color: var(--main-color);
        }
    }
}
</style>