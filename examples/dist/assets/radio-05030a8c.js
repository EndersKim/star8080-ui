import{R as t}from"./index-e6ab8c4d.js";import{e as d,s as l,o as u,c as r,a as e,t as s,b as i,u as c}from"./index-40a23a51.js";const p=e("h1",null,"单选框",-1),m=e("p",null,"单选框适合选项少的情况。",-1),_=e("br",null,null,-1),f=e("pre",null,[e("code",null,s(`<Radio
  v-model="radioValue"
  :options="{ cd: '成都', sh: '上海', bj: '北京' }"
/>`))],-1),B=d({name:"radio",setup(V){const o=l("cd");return l(""),l(""),(h,a)=>(u(),r("div",null,[p,m,e("p",null," 使用 v-model 为单选框绑定值，使用 options 为单选框指定选项，现在绑定的值为："+s(o.value),1),i(c(t),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n),options:{cd:"成都",sh:"上海",bj:"北京"}},null,8,["modelValue"]),_,f]))}});export{B as default};
