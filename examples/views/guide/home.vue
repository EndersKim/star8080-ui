<template>
    <div>
        <h1>使用指南</h1>
        <p>本文介绍了 Star UI 的详细用法。</p>
        <div class="article_nav">
            <div class="prev">
                <span class="article_nav_tag">上一篇</span>
                <span class="article_nav_title">/</span>
            </div>
            <div class="next">
                <span class="article_nav_tag">下一篇</span>
                <span class="article_nav_title">安装</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less">
.article_nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;

    .article_nav_tag {
        color: var(--text-sub-color);
        font-size: 14px;
    }

    .article_nav_title {
        display: block;
        margin-top: 10px;
    }
}

.article_nav>*{
    padding: 20px;
    border: 1px solid var(--border-light-color);
    border-radius: 10px;
}
</style>