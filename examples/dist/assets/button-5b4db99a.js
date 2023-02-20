import{B as t}from"./index-e6ab8c4d.js";import{e as r,s as l,o as B,c as y,b as n,w as e,u as o,a as u,t as d,d as s}from"./index-40a23a51.js";const h=u("h1",null,"按钮",-1),f=u("p",null,"使用 type 属性来指定按钮类型：",-1),b=s("默认按钮"),m=s("主要按钮"),g=s("成功按钮"),x=s("信息按钮"),C=s("警告按钮"),w=s("危险按钮"),v=s("文字按钮"),z=u("br",null,null,-1),N=u("br",null,null,-1),V=["textContent"],k=u("p",null,"使用 plain 属性指定按钮为朴素样式：",-1),D=s("朴素按钮"),E=s("主要按钮"),S=s("成功按钮"),T=s("信息按钮"),j=s("警告按钮"),q=s("危险按钮"),A=u("br",null,null,-1),F=u("br",null,null,-1),G=["textContent"],H=u("p",null,"使用 round 属性指定按钮为圆角样式：",-1),I=s("圆角按钮"),J=s("主要按钮"),K=s("成功按钮"),L=s("信息按钮"),M=s("警告按钮"),O=s("危险按钮"),P=u("br",null,null,-1),Q=u("br",null,null,-1),R=["textContent"],U=u("p",null,"使用 disabled 属性来禁用按钮：",-1),W=s("禁用按钮"),X=s("主要按钮"),Y=s("成功按钮"),Z=s("信息按钮"),$=s("警告按钮"),tt=s("危险按钮"),nt=u("br",null,null,-1),et=u("br",null,null,-1),ot=["textContent"],st=u("p",null,"使用 size 属性指定按钮的大小：",-1),ut=s("默认按钮"),lt=s("中等按钮"),dt=s("小型按钮"),_t=s("超小按钮"),it=u("br",null,null,-1),at=u("br",null,null,-1),ct=["textContent"],ft=r({name:"button",setup(pt){const _=l(`<Button>默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="info">信息按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="danger">危险按钮</Button>
<Button type="text">文字按钮</Button>`),i=l(`<Button plain>朴素按钮</Button>
<Button type="primary" plain>主要按钮</Button>
<Button type="success" plain>成功按钮</Button>
<Button type="info" plain>信息按钮</Button>
<Button type="warning" plain>警告按钮</Button>
<Button type="danger" plain>危险按钮</Button>`),a=l(`<Button round>圆角按钮</Button>
<Button type="primary" round>主要按钮</Button>
<Button type="success" round>成功按钮</Button>
<Button type="info" round>信息按钮</Button>
<Button type="warning" round>警告按钮</Button>
<Button type="danger" round>危险按钮</Button>`),c=l(`<Button disabled>禁用按钮</Button>
<Button type="primary" disabled>主要按钮</Button>
<Button type="success" disabled>成功按钮</Button>
<Button type="info" disabled>信息按钮</Button>
<Button type="warning" disabled>警告按钮</Button>
<Button type="danger" disabled>危险按钮</Button>`),p=l(`<Button>默认按钮</Button>
<Button size="medium">中等按钮</Button>
<Button size="small">小型按钮</Button>
<Button size="mini">超小按钮</Button>`);return(rt,Bt)=>(B(),y("div",null,[h,f,n(o(t),null,{default:e(()=>[b]),_:1}),n(o(t),{type:"primary"},{default:e(()=>[m]),_:1}),n(o(t),{type:"success"},{default:e(()=>[g]),_:1}),n(o(t),{type:"info"},{default:e(()=>[x]),_:1}),n(o(t),{type:"warning"},{default:e(()=>[C]),_:1}),n(o(t),{type:"danger"},{default:e(()=>[w]),_:1}),n(o(t),{type:"text"},{default:e(()=>[v]),_:1}),z,N,u("pre",null,[u("code",{textContent:d(_.value)},null,8,V)]),k,n(o(t),{plain:""},{default:e(()=>[D]),_:1}),n(o(t),{type:"primary",plain:""},{default:e(()=>[E]),_:1}),n(o(t),{type:"success",plain:""},{default:e(()=>[S]),_:1}),n(o(t),{type:"info",plain:""},{default:e(()=>[T]),_:1}),n(o(t),{type:"warning",plain:""},{default:e(()=>[j]),_:1}),n(o(t),{type:"danger",plain:""},{default:e(()=>[q]),_:1}),A,F,u("pre",null,[u("code",{textContent:d(i.value)},null,8,G)]),H,n(o(t),{round:""},{default:e(()=>[I]),_:1}),n(o(t),{type:"primary",round:""},{default:e(()=>[J]),_:1}),n(o(t),{type:"success",round:""},{default:e(()=>[K]),_:1}),n(o(t),{type:"info",round:""},{default:e(()=>[L]),_:1}),n(o(t),{type:"warning",round:""},{default:e(()=>[M]),_:1}),n(o(t),{type:"danger",round:""},{default:e(()=>[O]),_:1}),P,Q,u("pre",null,[u("code",{textContent:d(a.value)},null,8,R)]),U,n(o(t),{disabled:""},{default:e(()=>[W]),_:1}),n(o(t),{type:"primary",disabled:""},{default:e(()=>[X]),_:1}),n(o(t),{type:"success",disabled:""},{default:e(()=>[Y]),_:1}),n(o(t),{type:"info",disabled:""},{default:e(()=>[Z]),_:1}),n(o(t),{type:"warning",disabled:""},{default:e(()=>[$]),_:1}),n(o(t),{type:"danger",disabled:""},{default:e(()=>[tt]),_:1}),nt,et,u("pre",null,[u("code",{textContent:d(c.value)},null,8,ot)]),st,n(o(t),null,{default:e(()=>[ut]),_:1}),n(o(t),{size:"medium"},{default:e(()=>[lt]),_:1}),n(o(t),{size:"small"},{default:e(()=>[dt]),_:1}),n(o(t),{size:"mini"},{default:e(()=>[_t]),_:1}),it,at,u("pre",null,[u("code",{textContent:d(p.value)},null,8,ct)])]))}});export{ft as default};
