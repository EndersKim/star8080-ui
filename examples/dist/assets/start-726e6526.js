import{_ as n,o,c as s,a as t,t as e}from"./index-40a23a51.js";const l={},i=t("h1",null,"快速开始",-1),a=t("p",null,"使用npm进行安装：",-1),c=t("pre",null,[t("code",null,e("npm install star8080-ui"))],-1),r=t("p",null,"按需导入：",-1),p=t("pre",null,[t("code",null,e("import { AsideNav } from 'star8080-ui'"))],-1),_=t("p",null,"使用组件：",-1);function d(u,m){return o(),s("div",null,[i,a,c,r,p,_,t("pre",null,[t("code",null,e(`<template>
    <AsideNav :nav="nav_data"></AsideNav>
</template>

<script lang="ts" setup>
import { AsideNav } from 'star8080-ui'
import { reactive, ref } from 'vue';
const nav_data = reactive([
    { title: "组件文档", link:"/components" },

    { title: "基础组件", children:[
        { title: "按钮", link:"/components/button" },
        { title: "图标", link:"/components/icon" },
    ]},
])
<\/script>`),1)])])}const f=n(l,[["render",d]]);export{f as default};
