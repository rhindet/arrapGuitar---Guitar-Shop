import{b as c}from"/build/_shared/chunk-MRIAVZOX.js";import{g as r,n as u}from"/build/_shared/chunk-V6CUAHDB.js";import{d as o,g as s}from"/build/_shared/chunk-B7AP56NU.js";u();var a=o(s());function l({post:i}){let{contenido:e,imagen:n,titulo:m,url:d,publishedAt:p}=i;return(0,a.jsxs)("article",{className:"post",children:[(0,a.jsx)("img",{src:n.data.attributes.formats.small.url,alt:`imagen blog ${m}`,className:"imagen"}),(0,a.jsxs)("div",{className:"contenido",children:[(0,a.jsx)("h3",{children:m}),(0,a.jsx)("p",{className:"fecha",children:c(p)}),(0,a.jsx)("p",{className:"resumen",children:e}),(0,a.jsx)(r,{className:"enlace",to:`/blog/${d}`,children:"Leer Post"})]})]})}var t=o(s());function f({posts:i}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:"heading",children:"Blog"}),(0,t.jsx)("div",{className:"blog",children:i.map(e=>(0,t.jsx)(l,{post:e.attributes},e.id))})]})}export{f as a};
