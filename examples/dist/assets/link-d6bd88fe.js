import{L as t}from"./index-e6ab8c4d.js";import{e as c,s as d,o as r,c as p,b as n,w as s,u as i,a as e,t as l,d as o}from"./index-40a23a51.js";const u=e("h1",null,"链接",-1),y=e("p",null,"使用 type 属性指定连接的类型：",-1),k=o("主要链接"),h=o("成功链接"),L=o("信息链接"),f=o("警告链接"),b=o("危险链接"),m=e("br",null,null,-1),g=e("br",null,null,-1),x=["textContent"],w=e("p",null,"使用 disabled 属性来禁用链接：",-1),C=o("主要链接"),v=o("成功链接"),B=o("信息链接"),N=o("警告链接"),V=o("危险链接"),D=e("br",null,null,-1),E=e("br",null,null,-1),S=["textContent"],F=c({name:"link",setup(T){const a=d(`<Link type="primary">主要链接</Link>
<Link type="success">主要链接</Link>
<Link type="info">主要链接</Link>
<Link type="warning">主要链接</Link>
<Link type="danger">主要链接</Link>`),_=d(`<Link type="primary" disabled>主要链接</Link>
<Link type="success" disabled>成功链接</Link>
<Link type="info" disabled>信息链接</Link>
<Link type="warning" disabled>警告链接</Link>
<Link type="danger" disabled>危险链接</Link>`);return(j,q)=>(r(),p("div",null,[u,y,n(i(t),{type:"primary"},{default:s(()=>[k]),_:1}),n(i(t),{type:"success"},{default:s(()=>[h]),_:1}),n(i(t),{type:"info"},{default:s(()=>[L]),_:1}),n(i(t),{type:"warning"},{default:s(()=>[f]),_:1}),n(i(t),{type:"danger"},{default:s(()=>[b]),_:1}),m,g,e("pre",null,[e("code",{textContent:l(a.value)},null,8,x)]),w,n(i(t),{type:"primary",disabled:""},{default:s(()=>[C]),_:1}),n(i(t),{type:"success",disabled:""},{default:s(()=>[v]),_:1}),n(i(t),{type:"info",disabled:""},{default:s(()=>[B]),_:1}),n(i(t),{type:"warning",disabled:""},{default:s(()=>[N]),_:1}),n(i(t),{type:"danger",disabled:""},{default:s(()=>[V]),_:1}),D,E,e("pre",null,[e("code",{textContent:l(_.value)},null,8,S)])]))}});export{F as default};
