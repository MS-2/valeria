(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=a(16),i=a.n(c),u=a(97),s=a(24),m=a(44),p=a(9),d=a(17),f=a.n(d),E=a(43),h=a(11),b=a(107),g=a(74),v=a(102),y=a(4),O=a(101),j=a(55);f.a.defaults.baseURL="https://valeria-server.herokuapp.com/";var S=Object(n.createContext)(),w=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(!1),u=Object(p.a)(c,2),m=u[0],d=u[1],E=Object(n.useState)(""),h=Object(p.a)(E,2),b=h[0],g=h[1],v=Object(n.useState)(""),y=Object(p.a)(v,2),O=y[0],j=y[1],w=Object(n.useState)({}),x=Object(p.a)(w,2),k=x[0],C=x[1],I=Object(n.useState)([]),N=Object(p.a)(I,2),A=N[0],J=N[1],L=Object(n.useState)([]),G=Object(p.a)(L,2),R=G[0],W=G[1],_=Object(n.useState)(""),V=Object(p.a)(_,2),B=V[0],P=V[1],D=Object(n.useState)(!0),U=Object(p.a)(D,2),T=U[0],F=U[1],z=Object(n.useState)([]),M=Object(p.a)(z,2),q=M[0],Z=M[1];m&&T&&f.a.get("api/user/"+B).then((function(e){C(e.data),F(!1)})).catch((function(e){console.log("responseERROR"),console.log(e)})),Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("api/company");case 2:return t=e.sent,W(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),o(!1)}),[l]),Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("api/user");case 2:return t=e.sent,J(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),o(!1)}),[l]),Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("api/role");case 2:return t=e.sent,console.log("datos rols request",t.data),Z(t.data),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),o(!1)}),[l]);return r.a.createElement(S.Provider,{value:{user:k,setuser:C,id:B,setid:P,err:O,seterr:j,token:b,settoken:g,isAuth:m,setisAuth:d,cleanERROR:function(){j("")},logout:function(){d(!1),g(""),C({}),P("")},users:A,setusers:J,setcompanys:W,setfetch:o,fetch:l,companys:R,rols:q}},e.children)},x=a(98),k=a(23),C=a(32),I=a(205),N=a(204),A=(a(131),a(137),a(139),a(40),Object(h.h)((function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),l=a[0],o=a[1],c=Object(n.useContext)(S),i=c.logout,u=e.history,s=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{fixed:!0},r.a.createElement(k.e,null,r.a.createElement(k.f,null,r.a.createElement(k.d,{icon:"menu",onClick:function(){return o(!l)}}),r.a.createElement(k.g,null,"Home Valeria+",JSON.stringify(s.pathname))),r.a.createElement(k.f,{alignEnd:!0},r.a.createElement(k.b,{onClick:function(){return u.push("/")},icon:"home"}),r.a.createElement(k.b,{icon:"settings"})))),r.a.createElement(k.c,null),r.a.createElement(C.a,{modal:!0,open:l,onClose:function(){return o(!1)}},r.a.createElement(C.c,null,r.a.createElement(C.e,null,"Bienvenido : ",c.user.name),r.a.createElement(C.d,null,"correo : ",c.user.email," "),r.a.createElement(C.d,null,"permisos : ",c.user.role," ")),r.a.createElement(C.b,null,r.a.createElement(I.a,null,r.a.createElement(N.a,{onClick:function(){return u.push("/empresa/crear")}},"registrar empresa"),r.a.createElement(N.a,{onClick:function(){return u.push("/usuario/crear")}},r.a.createElement(N.b,{icon:"person"}),"registrar usuario"),r.a.createElement(N.a,{onClick:function(){return u.push("/usuario/lista")}},r.a.createElement(N.b,{icon:"list"}),"lista de usuarios"),r.a.createElement(N.a,{onClick:function(){return i()}},"cerrar sesion")))))})));a(147),a(149);var J=function(){var e=Object(n.useContext)(S);return r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a,n=new FormData(t.target),r={},l=Object(m.a)(n.entries());try{for(l.s();!(a=l.n()).done;){var o=a.value;r[o[0]]=o[1]}}catch(c){l.e(c)}finally{l.f()}f.a.post("api/auth/signin",r).then((function(t){e.setisAuth(!0),e.settoken(t.data.token);var a=Object(x.a)(t.data.token);e.setid(a.id)})).catch((function(e){console.log(e.response.data.msg)}))}},r.a.createElement("input",{type:"email",name:"email",defaultValue:"admin@localhost"}),r.a.createElement("input",{type:"password",name:"pass",autoComplete:"true",defaultValue:"admin"}),r.a.createElement("button",null,"Log In"))},L=function(){var e=Object(n.useContext)(S),t={headers:{"x-access-token":e.token}},a=function(){var a=Object(s.a)(i.a.mark((function a(n){var r,l,o,c,s,p;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),l=new FormData(n.target),r=l.entries(),Object(u.a)(r),o=r,c=Object(m.a)(l.entries());try{for(c.s();!(s=c.n()).done;)p=s.value,o[p[0]]=p[1]}catch(i){c.e(i)}finally{c.f()}f.a.post("api/company",{empresa:o},t).then((function(t){console.log("empresa creado : ",t.data);var a=t.data;e.setcompanys(a),e.setfetch(!0)})).catch((function(e){console.log("error"),console.log(e.response.data)}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(y.a,{onSubmit:a,style:{width:"90%",margin:25}},r.a.createElement(y.a.Group,{controlId:"name"},r.a.createElement(y.a.Label,null,"Nombre Comercial"),r.a.createElement(y.a.Control,{type:"text",name:"name",placeholder:"Enter name",defaultValue:"origo"})),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Group,{as:O.a,controlId:"rsocial"},r.a.createElement(y.a.Label,null,"Razon social:"),r.a.createElement(y.a.Control,{type:"text",name:"rsocial",placeholder:"razon social",defaultValue:"chocolates"})),r.a.createElement(y.a.Group,{as:O.a,controlId:"nit"},r.a.createElement(y.a.Label,null,"NIT:"),r.a.createElement(y.a.Control,{type:"text",name:"nit",placeholder:"numero de identificacion tributaria",defaultValue:"123456"}))),r.a.createElement(y.a.Group,{controlId:"direccion"},r.a.createElement(y.a.Label,null,"Direccion"),r.a.createElement(y.a.Control,{type:"text",name:"direccion",placeholder:"1234 Main St",defaultValue:"colpayo 849 piso 1 apt 4"})),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Group,{as:O.a,controlId:"city"},r.a.createElement(y.a.Label,null,"Ciudad"),r.a.createElement(y.a.Control,{placeholder:"ciudad",name:"city",defaultValue:"buenos aires"})),r.a.createElement(y.a.Group,{as:O.a,controlId:"formGridState"},r.a.createElement(y.a.Label,null,"Estado"),r.a.createElement(y.a.Control,{as:"select",defaultValue:"Choose..."},r.a.createElement("option",null,"Elegir..."),r.a.createElement("option",null,"..."))),r.a.createElement(y.a.Group,{as:O.a,controlId:"formGridZip"},r.a.createElement(y.a.Label,null,"Zip"),r.a.createElement(y.a.Control,{placeholder:"zipcode",name:"zip",defaultValue:"1405"}))),r.a.createElement(y.a.Group,{controlId:"email-e"},r.a.createElement(y.a.Label,null,"Correo Electronico de la Empresa"),r.a.createElement(y.a.Control,{type:"email",placeholder:"Enter email",name:"email-e",defaultValue:"company@gmail.com"}),r.a.createElement(y.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(y.a.Group,{controlId:"Telefono Empresarial"},r.a.createElement(y.a.Label,null,"Telefono Fijo"),r.a.createElement(y.a.Control,{type:"tel",placeholder:"telefono de la empresa",name:"telefono",defaultValue:"1121607577"})),r.a.createElement(j.a,{variant:"primary",type:"submit"},"Guardar")),r.a.createElement("h1",null,"hola empresa"),r.a.createElement("form",{onSubmit:a},r.a.createElement("input",{type:"text",name:"name",list:"[1,2,3]"}),r.a.createElement("input",{type:"text",name:"color"}),r.a.createElement("button",null,"registrar")),r.a.createElement("pre",null,JSON.stringify(e.companys,null,2)))},G=function(){var e=Object(n.useContext)(S),t={headers:{"x-access-token":e.token}},a=function(){var a=Object(s.a)(i.a.mark((function a(n){var r,l,o,c,u;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),r=new FormData(n.target),l={},o=Object(m.a)(r.entries());try{for(o.s();!(c=o.n()).done;)u=c.value,l[u[0]]=u[1]}catch(i){o.e(i)}finally{o.f()}f.a.post("api/user",l,t).then((function(t){e.setfetch(!0),console.log("usuario creado : ",t.data)})).catch((function(e){console.log(e.response.data.message)}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),l=function(){var a=Object(s.a)(i.a.mark((function a(n){var r,l,o,c,u;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),r=new FormData(n.target),l={},o=Object(m.a)(r.entries());try{for(o.s();!(c=o.n()).done;)u=c.value,l[u[0]]=u[1]}catch(i){o.e(i)}finally{o.f()}f.a.post("api/role",l,t).then((function(t){e.setfetch(!0),console.log("rol creado : ",t.data)})).catch((function(e){console.log(e.response)}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}},r.a.createElement(y.a,{onSubmit:a,style:{width:"50%",margin:15}},r.a.createElement(y.a.Group,{controlId:"name"},r.a.createElement(y.a.Label,null,"primer nombre"),r.a.createElement(y.a.Control,{type:"text",placeholder:"Enter name",name:"name"})),r.a.createElement(y.a.Group,{controlId:"email"},r.a.createElement(y.a.Label,null,"Email address"),r.a.createElement(y.a.Control,{type:"email",placeholder:"Enter email",name:"email"}),r.a.createElement(y.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(y.a.Group,{controlId:"pass"},r.a.createElement(y.a.Label,null,"Password"),r.a.createElement(y.a.Control,{type:"password",placeholder:"Password",name:"pass"})),r.a.createElement(y.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(y.a.Check,{type:"checkbox",label:"Check me out"})),r.a.createElement(j.a,{variant:"primary",type:"submit"},"Submit")),r.a.createElement(y.a,{onSubmit:l,style:{width:"25%"}},r.a.createElement(y.a.Group,{controlId:"name"},r.a.createElement(y.a.Label,null,"nombre del rol"),r.a.createElement(y.a.Control,{type:"text",placeholder:"Enter name",name:"name"}),r.a.createElement(y.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(y.a.Group,{controlId:"description"},r.a.createElement(y.a.Label,null,"description"),r.a.createElement(y.a.Control,{type:"text",placeholder:"description",name:"description"})),r.a.createElement(j.a,{variant:"success",type:"submit"},"Submit")),r.a.createElement("div",null,r.a.createElement("pre",null,JSON.stringify(e.users,["_id","email"],1))),r.a.createElement("div",null,r.a.createElement("pre",null,"roles",JSON.stringify(e.rols,["name"],1))))},R=function(e){var t=Object(n.useContext)(S),a=t.companys,l=t.users,o=t.rols,c=e.history;console.log(t);var i=a.map((function(e){return r.a.createElement("button",{style:{margin:5,borderStyle:"solid",backgroundColor:"pink",width:300,height:150}},r.a.createElement("div",{onClick:function(){return c.push("/empresa/"+e._id)}},r.a.createElement("div",null,e.empresa.name),r.a.createElement("div",null,"id : ",e._id)))}));return r.a.createElement("div",null,r.a.createElement("pre",null,r.a.createElement("h1",null,"EMPRESAS"),JSON.stringify(a,["_id","name","createdAt"],1)),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},i)),r.a.createElement("pre",null,r.a.createElement("h1",null,"USUARIOS"),JSON.stringify(l,["_id","email"],1)),l[0].users.length>0?r.a.createElement("pre",null,r.a.createElement("h1",null,"USUARIOS"),JSON.stringify(l[0].users,["_id"],1)):r.a.createElement("div",null,"loadin...."),r.a.createElement("pre",null,r.a.createElement("h1",null,"ROLES"),JSON.stringify(o,null,1)))},W=function(){var e=Object(n.useContext)(S).users,t=Object(n.useState)("email"),a=Object(p.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)("_id"),i=Object(p.a)(c,2),u=i[0],s=i[1],m=Object(n.useState)(""),d=Object(p.a)(m,2),f=d[0],h=d[1],b=Object(n.useState)([]),g=Object(p.a)(b,2),y=g[0],O=g[1];Object(n.useEffect)((function(){O(e.filter((function(e){return e.email.includes(f)})))}),[f]);var j=function(){return y.map((function(e,t){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement(E.b,{to:"/usuario/lista/"+e._id},e.email)),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e._id)))}))};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"busqueda por email",onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{type:"checkbox",onChange:function(e){return function(e){o(e?"":"email")}(e.target.checked)}}),r.a.createElement("span",null,"email"),r.a.createElement("input",{type:"checkbox",onChange:function(e){return function(e){s(e?"":"_id")}(e.target.checked)}}),r.a.createElement("span",null,"_id")),r.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"email"),r.a.createElement("th",null,"nombre"),r.a.createElement("th",null,"agun otro dato"))),r.a.createElement(j,null)),r.a.createElement("pre",null,r.a.createElement("h1",null,"USUARIOS"),JSON.stringify(y,[u,l],1)))};function _(){var e=Object(n.useContext)(S),t=Object(h.g)().userId,a={headers:{"x-access-token":e.token}},l=Object(n.useState)(!1),o=Object(p.a)(l,2),c=o[0],u=o[1],m=Object(n.useState)({}),d=Object(p.a)(m,2),E=d[0],v=d[1],y=Object(n.useState)(),O=Object(p.a)(y,2),j=O[0],w=(O[1],Object(n.useState)([])),x=Object(p.a)(w,2),k=x[0],C=x[1],I=Object(n.useState)(""),N=Object(p.a)(I,2),A=N[0],J=(N[1],Object(n.useState)(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))),L=Object(p.a)(J,2),G=L[0],R=(L[1],Object(n.useState)([])),W=Object(p.a)(R,2),_=(W[0],W[1]);Object(n.useEffect)((function(){_(k.filter((function(e){return e.includes(A)})))}),[A]),Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get("api/user/"+t).then((function(e){var t=e.data;v(t),C(t.role)})).catch((function(e){console.log(e.response.data)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),u(!1)}),[c]),Object(n.useEffect)((function(){}),[G]);return G?r.a.createElement("div",null,"otra cosa"):r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}},r.a.createElement("div",{style:{backgroundColor:"red"}},r.a.createElement("h4",null,"usuario: ",JSON.stringify(E.name)),r.a.createElement("h4",null,"usuario: ",JSON.stringify(E.email)),r.a.createElement("h4",null,"usuario: ",JSON.stringify(E._id)),r.a.createElement("h4",null,"usuario: ",JSON.stringify(E.createdAt))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"pink"}},r.a.createElement("div",{style:{backgroundColor:"crimson",marginBottom:10}},r.a.createElement("h4",null,"roles: ",JSON.stringify(E.role)),r.a.createElement(g.b,null,k.map((function(n){return r.a.createElement(b.a,{content:n.name},r.a.createElement(g.a,{label:n,onTrailingIconInteraction:function(){return r=n,console.log("he"),void("admin"!==r&&f.a.patch("api/user/remove/"+t,{role:r},a).then((function(t){e.setfetch(!0),console.log("rol eliminado : ",t.data),u(!0)})).catch((function(e){console.log(e.response.data.message)})));var r},trailingIcon:"close"}))}))),r.a.createElement("select",{onChange:function(n){return function(n){f.a.patch("api/user/"+t,{role:n},a).then((function(t){e.setfetch(!0),console.log("usuario actualizado : ",t.data),u(!0)})).catch((function(e){console.log(e.response.data.message)}))}(n.target.value)},value:j},r.a.createElement("option",{disabled:!0,selected:!0,value:!0}," -- select an option -- "),e.rols.map((function(e,t){return r.a.createElement("option",null,e.name)})))),r.a.createElement("div",{style:{backgroundColor:"green",marginBottom:10}},r.a.createElement("h4",null,"relaciones: ",JSON.stringify(E.users,["name"])),r.a.createElement("select",{onChange:function(n){return r=n.target.value,console.log(r),console.log(t),void f.a.patch("api/user/adduser/"+t,{id:r},a).then((function(t){e.setfetch(!0),console.log("usuario actualizado : ",t.data),u(!0)})).catch((function(e){console.log(e.response.data.message)}));var r}},r.a.createElement("option",{disabled:!0,selected:!0,value:!0}," -- select an option -- "),e.users.map((function(e,t){return r.a.createElement("option",{value:e._id},e.name)})))),r.a.createElement("div",{style:{backgroundColor:"yellow"}},r.a.createElement("h4",null,"empresas: ",JSON.stringify(E.companys)),r.a.createElement("h4",null,"empresas: ",JSON.stringify(E,["companys"])))))}function V(){var e=Object(n.useContext)(S),t=Object(h.g)().id;console.log(t);e.token;return r.a.createElement("div",null,"otra cosa")}var B=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],l=(t[1],Object(n.useContext)(S));return l.isAuth?l.isAuth&&!a?r.a.createElement(E.a,{basename:"/valeria"},r.a.createElement(A,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:R}),r.a.createElement(h.b,{exact:!0,path:"/empresa/crear",component:L}),r.a.createElement(h.b,{exact:!0,path:"/usuario/crear",component:G}),r.a.createElement(h.b,{exact:!0,path:"/usuario/lista",component:W}),r.a.createElement(h.b,{path:"/usuario/lista/:userId",children:r.a.createElement(_,null)}),r.a.createElement(h.b,{path:"/empresa/:id",children:r.a.createElement(V,null)}),r.a.createElement(h.b,{component:function(){return r.a.createElement("div",null,"no found")}}))):l.isAuth&&a?r.a.createElement("div",null,"company"):r.a.createElement("div",null,"NotFoundfound"):r.a.createElement(E.a,{basename:"/valeria"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:J}),r.a.createElement(h.b,{component:function(){return r.a.createElement(h.a,{to:"/"})}})))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(193);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null,r.a.createElement(B,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){var t=new URL("/valeria",window.location.href);if(console.log(t),t.origin!==window.location.origin)return void console.log("yalhallo");window.addEventListener("load",(function(){var t="".concat("/valeria","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}},[[194,1,2]]]);
//# sourceMappingURL=main.c245b871.chunk.js.map