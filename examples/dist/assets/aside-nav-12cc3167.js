import{A as o}from"./index-e6ab8c4d.js";import{e as a,f as i,s,o as l,c,a as t,b as r,u as p,t as d}from"./index-40a23a51.js";const m=t("h1",null,"侧边导航",-1),u=t("p",null,"可以通过传入一个数组来快速生成侧边导航，数组的每个元素为一个导航项。",-1),v=t("p",null," 导航项通过 title 属性指定标题，通过 link 属性指定路径，通过 children 属性指定子导航。 ",-1),_=["textContent"],x=a({name:"aside-nav",setup(f){const e=i([{title:"组件文档",link:"/components"},{title:"基础组件",children:[{title:"按钮",link:"/components/button"},{title:"图标",link:"/components/icon"}]}]),n=s(`<template>
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
<\/script>`);return(h,k)=>(l(),c("div",null,[m,u,v,t("div",null,[r(p(o),{nav:e},null,8,["nav"])]),t("pre",null,[t("code",{textContent:d(n.value)},null,8,_)])]))}});export{x as default};
