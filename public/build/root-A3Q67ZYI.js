import{a as Z,c as y,d as n,e as x,f as w,g,h as A,i as M,j as k,l as C,n as E}from"/build/_shared/chunk-V6CUAHDB.js";import{d as s,f as H,g as c}from"/build/_shared/chunk-B7AP56NU.js";var f=s(H());E();var b="/build/_assets/index-J5GI7LRS.css";x();var z="/build/_assets/logo-YZ2KDQEU.svg";x();var L="/build/_assets/carrito-2445OMQO.png";var l=s(c()),S=()=>{let t=Z();return(0,l.jsxs)("nav",{className:"navegacion",children:[(0,l.jsx)(n,{to:"/",className:t.pathname==="/"?"active":"",children:"Inicio"}),(0,l.jsx)(n,{to:"/nosotros",className:t.pathname==="/nosotros"?"active":"",children:"Nosotros"}),(0,l.jsx)(n,{to:"/guitarras",className:t.pathname==="/guitarras"?"active":"",children:"Tienda"}),(0,l.jsx)(n,{to:"/blog",className:t.pathname==="/blog"?"active":"",children:"Blog"}),(0,l.jsx)(n,{to:"/carrito",children:(0,l.jsx)("img",{src:L,alt:"carrito de compras"})})]})},p=S;var m=s(c()),K=()=>(0,m.jsx)("header",{className:"header",children:(0,m.jsxs)("div",{className:"contenedor barra",children:[(0,m.jsx)(n,{to:"/",children:(0,m.jsx)("img",{className:"logo",src:z,alt:"Imagen logo"})}),(0,m.jsx)(p,{})]})}),N=K;var d=s(c()),_=()=>(0,d.jsx)("footer",{className:"footer",children:(0,d.jsxs)("div",{className:"contenedor contenido",children:[(0,d.jsx)(p,{}),(0,d.jsxs)("p",{className:"copyright",children:["Todos los derechos reservados ",new Date().getFullYear()]})]})}),V=_;var a=s(c());function B(){return{charset:"utf-8",title:"GuitarLa - Remix",viewport:"width=device-width,initial-scale=1"}}function D(){return[{rel:"stylesheet",href:"https://necolas.github.io/normalize.css/8.0.1/normalize.css"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"},{rel:"stylesheet",href:b}]}function T(){var u;let t=typeof window!="undefined"?(u=JSON.parse(localStorage.getItem("carrito")))!=null?u:[]:null,[o,h]=(0,f.useState)(t);return(0,f.useEffect)(()=>{localStorage.setItem("carrito",JSON.stringify(o))},[o]),(0,a.jsx)(v,{children:(0,a.jsx)(y,{context:{agregarCarrito:r=>{if(o.some(i=>i.id===r.id)){let i=o.map(e=>(e.id===r.id&&(e.cantidad=r.cantidad),e));h(i)}else h([...o,r])},carrito:o,actualizarCantidad:r=>{let i=o.map(e=>(e.id===r.id&&(e.cantidad=r.cantidad),e));h(i)},eliminarGuitarra:r=>{let i=o.filter(e=>e.id!==r);h(i)}}})})}function v({children:t}){return(0,a.jsxs)("html",{lang:"es",children:[(0,a.jsxs)("head",{children:[(0,a.jsx)(M,{}),(0,a.jsx)(A,{})]}),(0,a.jsxs)("body",{children:[(0,a.jsx)(N,{}),t,(0,a.jsx)(V,{}),(0,a.jsx)(k,{}),(0,a.jsx)(C,{})]})]})}function F(){let t=w();return(0,a.jsxs)(v,{children:[(0,a.jsxs)("p",{className:"error",children:[t.status,t.statusText]}),(0,a.jsx)(g,{className:"error-enlace",to:"/",children:"Talvez quieras volver a la pagina principal"})]})}function J({error:t}){return(0,a.jsxs)(v,{children:[(0,a.jsxs)("p",{className:"error",children:[t.status,t.statusText]}),(0,a.jsx)(g,{className:"error-enlace",to:"/",children:"Talvez quieras volver a la pagina principal"})]})}export{F as CatchBoundary,J as ErrorBoundary,T as default,D as links,B as meta};
