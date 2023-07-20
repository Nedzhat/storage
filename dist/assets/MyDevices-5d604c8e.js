import{f as y,r as b,j as e,B as g,c as M,u as F,a as f,g as v,b as l,C as A,A as O,T as i,d as E,e as I,h as _,F as c,H as C,M as N,i as L,k as W}from"./index-3a2a18b5.js";import{M as q,a as K,b as P,c as U,d as V,e as G,B as J,S as Q,f as X,u as Y}from"./index.esm-20ceedfc.js";import{u as R,T as Z,a as $,b as S,c as ee,d as x}from"./chunk-BLRPLYZO-1ecb9afa.js";import"./index-eaa72e81.js";var T=y((s,t)=>{const{icon:n,children:r,isRound:o,"aria-label":a,...u}=s,d=n||r,p=b.isValidElement(d)?b.cloneElement(d,{"aria-hidden":!0,focusable:!1}):null;return e.jsx(g,{padding:"0",borderRadius:o?"full":void 0,ref:t,"aria-label":a,...u,children:p})});T.displayName="IconButton";var se=y((s,t)=>{const n=R();return e.jsx(M.thead,{...s,ref:t,__css:n.thead})}),h=y(({isNumeric:s,...t},n)=>{const r=R();return e.jsx(M.th,{...t,ref:n,__css:r.th,"data-is-numeric":s})});const ne=({selectedDevice:s,isOpen:t,onClose:n})=>{const r=F();f(v);const o=a=>{r(E(a)),n()};return e.jsx(l,{children:e.jsxs(q,{isOpen:t,onClose:n,children:[e.jsx(K,{}),e.jsxs(P,{children:[e.jsx(U,{children:"Return device for sorting table"}),e.jsx(V,{}),e.jsx(G,{children:s&&e.jsxs(l,{children:[e.jsxs(A,{gap:"30px",py:3,children:[e.jsx(O,{size:"35px"}),e.jsx(J,{size:"35px"}),e.jsx(Q,{size:"35px"})]}),e.jsx(i,{fontWeight:"bold",children:s.name}),e.jsx(i,{fontSize:"sm",color:"second",children:s.type}),e.jsx(i,{fontSize:"sm",children:s.info}),e.jsxs(i,{color:"second",children:["S/N: ",s.sn]})]})}),e.jsxs(X,{children:[e.jsx(g,{colorScheme:"blue",mr:3,onClick:n,children:"Close"}),e.jsx(g,{onClick:()=>{o(s.id)},variant:"ghost",children:"I'm return device"})]})]})]})})},te=()=>{const[s,t]=b.useState(null),{isOpen:n,onOpen:r,onClose:o}=Y(),a=f(v),u=f(I),d=_(u,a.email),p=j=>{t(j),r()};return e.jsxs(l,{children:[e.jsx(ne,{selectedDevice:s,isOpen:n,onClose:o}),e.jsx(c,{justifyContent:"space-between",p:8,children:e.jsx(C,{size:"lg",children:"My Equipment"})}),e.jsx(c,{flexWrap:"wrap",px:8,gap:"15px",children:d.length>0?d.map(j=>{const{id:w,name:B,info:D,sn:z,type:k,project:H}=j;return e.jsxs(c,{flexDirection:"column",justifyContent:"space-around",w:"32%",bg:"white",p:3,borderRadius:"12px",boxShadow:"0px 0px 24px rgba(50, 59, 75, 0.15)",children:[e.jsxs(c,{justifyContent:"space-between",children:[e.jsx(N,{size:30,color:"main"}),e.jsx(T,{onClick:()=>{p(j)},variant:"outline",colorScheme:"#323b4b","aria-label":"Delete",size:"sm",icon:e.jsx(L,{}),_hover:{bg:"main",color:"white"}})]}),e.jsxs(c,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(i,{fontWeight:"bold",children:B}),e.jsx(i,{fontSize:"sm",color:"second",children:k})]}),e.jsx(i,{fontSize:"sm",children:D}),e.jsxs(i,{fontSize:"sm",children:["Project: ",H]}),e.jsxs(i,{color:"second",children:["S/N: ",z]})]},w)}):e.jsxs(c,{flexDirection:"column",justifyContent:"space-around",w:"32%",bg:"white",p:3,borderRadius:"12px",h:"120px",children:[e.jsx(W,{size:30,color:"main"}),e.jsx(i,{fontWeight:"bold",children:"Empty"})]})})]})},m=[{name:"MacBook",action:"Take",date:"02.05.2023",location:"From location",sn:"C02DCKB4ML7H"},{name:"MacBook",action:"Return",date:"01.05.2023",location:"Sorting Table",sn:"C02DCKB4ML7H"},{name:"Raspberry Pi",action:"Return",date:"01.05.2023",location:"Sorting Table",sn:"40077419010397231840"},{name:"Kingston DDR4-2400",action:"Take",date:"02.05.2023",location:"From location",sn:"BF673969"},{name:"MacBook",action:"Return",date:"01.05.2023",location:"Sorting Table",sn:"BF673969"},{name:"Raspberry Pi",action:"Return",date:"01.05.2023",location:"Sorting Table",sn:"40077419010397231840"}],ie=()=>e.jsx(l,{p:8,children:e.jsxs(l,{bg:"white",borderRadius:"12px",p:8,boxShadow:"0px 0px 24px rgba(50, 59, 75, 0.15)",children:[e.jsx(C,{size:"lg",children:"History"}),e.jsxs(Z,{children:[e.jsxs($,{variant:"striped",colorScheme:"#323b4b",children:[e.jsx(se,{children:e.jsxs(S,{children:[e.jsx(h,{children:"Name"}),e.jsx(h,{children:"Action"}),e.jsx(h,{children:"Date"}),e.jsx(h,{children:"Location"}),e.jsx(h,{children:"Serial Number"})]})}),e.jsx(ee,{children:m.length>0&&m.map(({name:s,action:t,date:n,location:r,sn:o},a)=>e.jsxs(S,{children:[e.jsx(x,{children:s}),e.jsx(x,{children:t}),e.jsx(x,{children:n}),e.jsx(x,{children:r}),e.jsx(x,{children:o})]},a))})]}),m.length===0&&e.jsx(i,{textAlign:"center",color:"second",fontSize:"3xl",mt:4,children:"Here will be history of your equipment"})]})]})}),le=()=>e.jsxs(l,{as:"section",bg:"bgColor",w:"60%",minH:"100vh",h:"auto",children:[e.jsx(te,{}),e.jsx(ie,{})]});export{le as default};