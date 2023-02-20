import{S as a}from"./index-e6ab8c4d.js";import{e as u,s as o,o as c,c as d,a as e,t as s,b as r,u as p}from"./index-40a23a51.js";const i=e("h1",null,"选择器",-1),m=e("p",null,"选择器适合选项多的情况。",-1),_=e("br",null,null,-1),f=e("pre",null,[e("code",null,s(`<Select
  v-model="selectValue"
  :options="{ cd: '成都', sh: '上海', bj: '北京' }"
/>`))],-1),S=u({name:"select",setup(V){const l=o("cd");return o(""),o(""),(h,t)=>(c(),d("div",null,[i,m,e("p",null," 和单选框类似使用 v-model 为选择器绑定值，使用 options 为选择器指定选项，现在绑定的值为："+s(l.value),1),r(p(a),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=n=>l.value=n),options:{cd:"成都",sh:"上海",bj:"北京"}},null,8,["modelValue"]),_,f]))}});export{S as default};
