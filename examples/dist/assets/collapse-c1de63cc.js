import{C as d}from"./index-e6ab8c4d.js";import{e as m,s as t,o as v,c as C,b as u,w as o,u as p,a as e,t as _,d as i}from"./index-40a23a51.js";const h=e("h1",null,"折叠面板",-1),f=e("p",null," 使用 v-model 绑定一个布尔值，来表示折叠面板的开启与关闭。将 v-model 的值设为 true 使折叠面板默认打开。 ",-1),V=e("p",null," 使用 #title 插槽来插入折叠面板的标题内容，使用默认插槽来插入折叠的内容。 ",-1),x=i("点击展开/收起"),b=e("div",null,"这是折叠的内容",-1),B=e("br",null,null,-1),N=["textContent"],k=e("br",null,null,-1),w=i("点击展开/收起"),U=e("div",null,"这是默认打开的折叠面板（这是折叠的内容）",-1),g=e("br",null,null,-1),y=["textContent"],j=m({name:"collapse",setup(D){const s=t(!1),a=t(!0),c=t(`<Collapse v-model="open_collapse">
  <template #title>点击展开/收起</template>
  <div>这是折叠的内容</div>
</Collapse>`),r=t(`<Collapse v-model="open_collapse2">
  <template #title>点击展开/收起</template>
  <div>这是默认打开的折叠面板（这是折叠的内容）</div>
</Collapse>`);return(E,l)=>(v(),C("div",null,[h,f,V,u(p(d),{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=n=>s.value=n)},{title:o(()=>[x]),default:o(()=>[b]),_:1},8,["modelValue"]),B,e("pre",null,[e("code",{textContent:_(c.value)},null,8,N)]),k,u(p(d),{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=n=>a.value=n)},{title:o(()=>[w]),default:o(()=>[U]),_:1},8,["modelValue"]),g,e("pre",null,[e("code",{textContent:_(r.value)},null,8,y)])]))}});export{j as default};
