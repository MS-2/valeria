(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=a(11),i=a.n(o),u=a(21),s=a(48),m=a(19),p=a(7),d=a(10),f=a.n(d),E=a(26),b=a(9),h=a(36),v=a(3),g=a(52),O=a(107),y=a(108),j=a(109),w=a(23);f.a.defaults.baseURL="https://valeria-server.herokuapp.com/";var k=Object(n.createContext)(),C=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),u=Object(p.a)(o,2),s=u[0],d=u[1],E=Object(n.useState)(""),b=Object(p.a)(E,2),h=b[0],v=b[1],g=Object(n.useState)(""),O=Object(p.a)(g,2),y=O[0],j=O[1],w=Object(n.useState)({}),C=Object(p.a)(w,2),x=C[0],S=C[1],I=Object(n.useState)([]),L=Object(p.a)(I,2),G=L[0],N=L[1],A=Object(n.useState)([]),R=Object(p.a)(A,2),W=R[0],_=R[1],J=Object(n.useState)(""),V=Object(p.a)(J,2),P=V[0],B=V[1],D=Object(n.useState)(!0),F=Object(p.a)(D,2),T=F[0],U=F[1],z=Object(n.useState)([]),M=Object(p.a)(z,2),Z=M[0],H=M[1],K=Object(n.useState)(),$=Object(p.a)(K,2),q=$[0],Q=$[1];s&&T&&f.a.get("api/user/"+P).then((function(e){S(e.data),U(!1)})).catch((function(e){console.log(e)})),Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("api/company");case 2:return t=e.sent,_(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),c(!1)}),[l]),Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("api/user");case 2:return t=e.sent,N(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),c(!1)}),[l]),Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("api/role");case 2:return t=e.sent,H(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),c(!1)}),[l]);return r.a.createElement(k.Provider,{value:{open:q,setopen:Q,user:x,setuser:S,id:P,setid:B,err:y,seterr:j,token:h,settoken:v,isAuth:s,setisAuth:d,cleanERROR:function(){j("")},logout:function(){d(!1),v(""),S({}),B("")},users:G,setusers:N,setcompanys:_,setfetch:c,fetch:l,companys:W,rols:Z}},e.children)},x=a(20),S=a(18),I=a(110),L=a(106),G=(a(77),a(83),a(85),a(24),Object(b.i)((function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),l=a[0],c=a[1],o=Object(n.useContext)(k),i=o.logout,u=e.history,s=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{fixed:!0},r.a.createElement(x.e,null,r.a.createElement(x.f,null,r.a.createElement(x.d,{icon:"menu",onClick:function(){return c(!l)}}),r.a.createElement(x.g,null,"Home Valeria+",JSON.stringify(s.pathname))),r.a.createElement(x.f,{alignEnd:!0},r.a.createElement(x.b,{onClick:function(){return u.push("/")},icon:"home"}),r.a.createElement(x.b,{icon:"settings"})))),r.a.createElement(x.c,null),r.a.createElement(S.a,{modal:!0,open:l,onClose:function(){return c(!1)}},r.a.createElement(S.c,null,r.a.createElement(S.e,null,"Bienvenido : ",o.user.name),r.a.createElement(S.d,null,"correo : ",o.user.email," ")),r.a.createElement(S.b,null,r.a.createElement(I.a,null,r.a.createElement(L.a,{onClick:function(){return u.push("/empresa/crear")}},"registrar empresa"),r.a.createElement(L.a,{onClick:function(){return u.push("/usuario/crear")}},r.a.createElement(L.b,{icon:"person"}),"registrar usuario"),r.a.createElement(L.a,{onClick:function(){return u.push("/usuario/lista")}},r.a.createElement(L.b,{icon:"list"}),"lista de usuarios"),r.a.createElement(L.a,{onClick:function(){return i()}},"cerrar sesion")))))}))),N=(a(93),a(95),a(51)),A=function(){var e=Object(n.useContext)(k),t=Object(n.useState)(),a=Object(p.a)(t,2),l=a[0],c=a[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a,n=new FormData(t.target),r={},l=Object(u.a)(n.entries());try{for(l.s();!(a=l.n()).done;){var o=a.value;r[o[0]]=o[1]}}catch(i){l.e(i)}finally{l.f()}f.a.post("api/auth/signin",r).then((function(t){e.setisAuth(!0),e.settoken(t.data.token);var a=Object(N.a)(t.data.token);e.setid(a.id)})).catch((function(e){c(e.response.data.msg),console.log(e.response.data.msg)}))}},r.a.createElement("input",{type:"email",name:"email",defaultValue:"admin@localhost"}),r.a.createElement("input",{type:"password",name:"pass",autoComplete:"true",defaultValue:"admin"}),r.a.createElement("button",null,"Log In"),l,r.a.createElement("div",null,"hola."))};var R=function(){var e=Object(n.useContext)(k),t={headers:{"x-access-token":e.token}},a=Object(n.useState)(),l=Object(p.a)(a,2),c=l[0],o=l[1],d=function(){var a=Object(m.a)(i.a.mark((function a(n){var r,l,c,m,p,d;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),l=new FormData(n.target),r=l.entries(),Object(s.a)(r),c=r,m=Object(u.a)(l.entries());try{for(m.s();!(p=m.n()).done;)d=p.value,c[d[0]]=d[1]}catch(i){m.e(i)}finally{m.f()}f.a.post("api/company",{empresa:c},t).then((function(t){o("empresa creado con exito");var a=t.data;e.setcompanys(a),e.setfetch(!0)})).catch((function(e){o("error faltan datos : "+e.response.data)}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{style:{backgroundColor:"pink",borderRadius:20,margin:10}},r.a.createElement(v.a,{onSubmit:d,style:{margin:40}},c?r.a.createElement("div",{style:{backgroundColor:"green",color:"white"}},c):null,r.a.createElement(v.a.Group,{controlId:"name"},r.a.createElement(v.a.Label,null,"Nombre Comercial"),r.a.createElement(v.a.Control,{type:"text",name:"name",placeholder:"Enter name",defaultValue:"origo"})),r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Group,{as:g.a,controlId:"rsocial"},r.a.createElement(v.a.Label,null,"Razon social:"),r.a.createElement(v.a.Control,{type:"text",name:"rsocial",placeholder:"razon social",defaultValue:"chocolates"})),r.a.createElement(v.a.Group,{as:g.a,controlId:"nit"},r.a.createElement(v.a.Label,null,"NIT:"),r.a.createElement(v.a.Control,{type:"text",name:"nit",placeholder:"numero de identificacion tributaria",defaultValue:"123456"}))),r.a.createElement(v.a.Group,{controlId:"direccion"},r.a.createElement(v.a.Label,null,"Direccion"),r.a.createElement(v.a.Control,{type:"text",name:"direccion",placeholder:"1234 Main St",defaultValue:"colpayo 849 piso 1 apt 4"})),r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Group,{as:g.a,controlId:"city"},r.a.createElement(v.a.Label,null,"Ciudad"),r.a.createElement(v.a.Control,{placeholder:"ciudad",name:"city",defaultValue:"buenos aires"})),r.a.createElement(v.a.Group,{as:g.a,controlId:"formGridState"},r.a.createElement(v.a.Label,null,"Estado"),r.a.createElement(v.a.Control,{as:"select",defaultValue:"Choose..."},r.a.createElement("option",null,"Elegir..."),r.a.createElement("option",null,"..."))),r.a.createElement(v.a.Group,{as:g.a,controlId:"formGridZip"},r.a.createElement(v.a.Label,null,"Zip"),r.a.createElement(v.a.Control,{placeholder:"zipcode",name:"zip",defaultValue:"1405"}))),r.a.createElement(v.a.Group,{controlId:"email-e"},r.a.createElement(v.a.Label,null,"Correo Electronico de la Empresa"),r.a.createElement(v.a.Control,{type:"email",placeholder:"Enter email",name:"email-e",defaultValue:"company@gmail.com"})),r.a.createElement(v.a.Group,{controlId:"Telefono Empresarial"},r.a.createElement(v.a.Label,null,"Telefono Fijo"),r.a.createElement(v.a.Control,{type:"tel",placeholder:"telefono de la empresa",name:"telefono",defaultValue:"1121607577"})),r.a.createElement(w.a,{variant:"primary",type:"submit"},"Guardar")),r.a.createElement("pre",null,JSON.stringify(e.companys,null,2)))},W=function(){var e=Object(n.useContext)(k),t={headers:{"x-access-token":e.token}},a=Object(n.useState)(""),l=Object(p.a)(a,2),c=l[0],o=l[1],s=function(){var a=Object(m.a)(i.a.mark((function a(n){var r,l,c,s,m;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),r=new FormData(n.target),l={},c=Object(u.a)(r.entries());try{for(c.s();!(s=c.n()).done;)m=s.value,l[m[0]]=m[1]}catch(i){c.e(i)}finally{c.f()}f.a.post("api/user",l,t).then((function(t){e.setfetch(!0),o("usuario : "+t.data.name+"creado con exito")})).catch((function(e){o(e.response.data.message)}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),d=function(){var a=Object(m.a)(i.a.mark((function a(n){var r,l,c,o,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),r=new FormData(n.target),l={},c=Object(u.a)(r.entries());try{for(c.s();!(o=c.n()).done;)s=o.value,l[s[0]]=s[1]}catch(i){c.e(i)}finally{c.f()}f.a.post("api/role",l,t).then((function(t){e.setfetch(!0)})).catch((function(e){console.log(e.response)}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{style:{display:"flex",width:"100%",flexWrap:"wrap"}},r.a.createElement("div",{style:{flex:1,backgroundColor:"pink"}},r.a.createElement(v.a,{onSubmit:s,style:{margin:40}},r.a.createElement(v.a.Group,{controlId:"name"},r.a.createElement(v.a.Label,null,"Nombre completo"),r.a.createElement(v.a.Control,{type:"text",placeholder:"Nombre completo",name:"name"})),r.a.createElement(v.a.Group,{controlId:"email"},r.a.createElement(v.a.Label,null,"Email address"),r.a.createElement(v.a.Control,{type:"email",placeholder:"Enter email",name:"email"}),r.a.createElement(v.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(v.a.Group,{controlId:"pass"},r.a.createElement(v.a.Label,null,"Password"),r.a.createElement(v.a.Control,{type:"password",placeholder:"Password",name:"pass"})),r.a.createElement(v.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(v.a.Check,{type:"checkbox",label:"Check me out"})),r.a.createElement(w.a,{block:!0,variant:"primary",type:"submit"},"crear usuario")),c?r.a.createElement("div",{style:{backgroundColor:"green",color:"white"}},c):null,r.a.createElement("pre",null,JSON.stringify(e.users,["_id","email","name"],1))),r.a.createElement("div",{style:{flex:1,backgroundColor:"greenyellow"}},r.a.createElement(v.a,{onSubmit:d},r.a.createElement(v.a.Group,{controlId:"name",style:{margin:40}},r.a.createElement(v.a.Label,null,"nombre del rol"),r.a.createElement(v.a.Control,{type:"text",name:"name"}),r.a.createElement(v.a.Text,{className:"text-muted"},"Introduzca nombre descriptivo para el rol")),r.a.createElement(v.a.Group,{controlId:"description"},r.a.createElement(v.a.Label,null,"description"),r.a.createElement(v.a.Control,{type:"text",placeholder:"description",name:"description"})),r.a.createElement(w.a,{block:!0,variant:"success",type:"submit"},"Submit")),r.a.createElement("pre",null,"roles",JSON.stringify(e.rols,["name","description"],1))))},_=function(e){var t=Object(n.useContext)(k),a=t.companys,l=t.users,c=t.rols,o=e.history,i=a.map((function(e){return r.a.createElement("button",{key:e._id,style:{margin:5,borderStyle:"solid",backgroundColor:"pink",width:300,height:150}},r.a.createElement("div",{onClick:function(){return o.push("/empresa/"+e._id)}},r.a.createElement("div",null,e.empresa.name),r.a.createElement("div",null,"id : ",e._id)))}));return r.a.createElement("div",null,r.a.createElement("pre",null,r.a.createElement("h1",null,"EMPRESAS"),JSON.stringify(a,["_id","name","empresa","nit"],2)),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},i)),r.a.createElement("pre",null,r.a.createElement("h1",null,"USUARIOS"),JSON.stringify(l,["_id","email"],1)),r.a.createElement("pre",null,r.a.createElement("h1",null,"ROLES"),JSON.stringify(c,null,1)))},J=function(){var e=Object(n.useContext)(k).users,t=Object(n.useState)("email"),a=Object(p.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)("_id"),i=Object(p.a)(o,2),u=i[0],s=i[1],m=Object(n.useState)(""),d=Object(p.a)(m,2),f=d[0],b=d[1],g=Object(n.useState)([]),O=Object(p.a)(g,2),y=O[0],j=O[1];Object(n.useEffect)((function(){j(e.filter((function(e){return e.email.includes(f)})))}),[f]);var w=function(){return y.map((function(e,t){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement(E.b,{to:"/usuario/lista/"+e._id},e.email)),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e._id)))}))};return r.a.createElement("div",{style:{margin:10}},r.a.createElement("div",null,r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"buscar por email"),r.a.createElement(v.a.Control,{type:"search",placeholder:"buscar...",onChange:function(e){return b(e.target.value)},width:"50%",style:{width:"40%"}})),r.a.createElement("input",{type:"checkbox",onChange:function(e){return function(e){c(e?"":"email")}(e.target.checked)}}),r.a.createElement("span",null,"email"),r.a.createElement("input",{type:"checkbox",onChange:function(e){return function(e){s(e?"":"_id")}(e.target.checked)}}),r.a.createElement("span",null,"_id")),r.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"email"),r.a.createElement("th",null,"nombre"),r.a.createElement("th",null,"agun otro dato"))),r.a.createElement(w,null)),r.a.createElement("pre",null,r.a.createElement("h1",null,"USUARIOS"),JSON.stringify(y,[u,l],1)))};function V(e){var t=Object(n.useContext)(k),a=Object(b.h)().userId,l={headers:{"x-access-token":t.token}},c=Object(n.useState)(!1),o=Object(p.a)(c,2),u=o[0],s=o[1],d=Object(n.useState)({}),E=Object(p.a)(d,2),C=E[0],x=E[1],S=Object(n.useState)(),I=Object(p.a)(S,2),L=I[0],G=(I[1],Object(n.useState)([])),N=Object(p.a)(G,2),A=N[0],R=N[1],W=Object(n.useState)(""),_=Object(p.a)(W,2),J=_[0],V=_[1],P=Object(n.useState)(""),B=Object(p.a)(P,2),D=B[0],F=(B[1],Object(n.useState)(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))),T=Object(p.a)(F,2),U=T[0],z=(T[1],Object(n.useState)([])),M=Object(p.a)(z,2),Z=(M[0],M[1]),H=Object(b.g)();Object(n.useEffect)((function(){Z(A.filter((function(e){return e.includes(D)})))}),[D]),Object(n.useEffect)((function(){console.log(J)}),[J]),Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get("api/user/"+a).then((function(e){var t=e.data;x(t),R(t.role)})).catch((function(e){console.log(e.response.data)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),s(!1)}),[u]),Object(n.useEffect)((function(){}),[U]);return r.a.createElement("div",{style:{display:"flex",width:"100%",height:"150vh",flexWrap:"wrap"}},r.a.createElement("div",{style:{flex:1,textAlign:"center"}},r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{onClick:function(){return console.log("foto")},src:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",roundedCircle:!0}))),r.a.createElement(O.a,{style:{marginTop:10}},r.a.createElement(g.a,null,r.a.createElement("h2",null,"  ",C.name)))),r.a.createElement(h.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Email:"),r.a.createElement("th",null,C.email))))),r.a.createElement("div",{style:{flex:1,backgroundColor:"pink"}},"      ","lista de roles:       ",J,r.a.createElement("div",{style:{backgroundColor:"crimson",margin:10,borderRadius:14}},r.a.createElement("div",null,r.a.createElement("h3",null,A.map((function(e){return r.a.createElement(j.a,{pill:!0,variant:"warning"},e,"-",r.a.createElement("spam",{style:{color:"red"},onClick:function(){var n;"admin"===e?V("no puedes eliminar el admin"):(V(""),"admin"!==(n=e)&&f.a.patch("api/user/remove/"+a,{role:n},l).then((function(e){V(""),t.setfetch(!0),s(!0)})).catch((function(e){V(e.response.data.message)})))}},"x"))}))))),r.a.createElement("div",null,r.a.createElement(v.a.Group,{onChange:function(e){return function(e){f.a.patch("api/user/"+a,{role:e},l).then((function(e){t.setfetch(!0),s(!0),V("")})).catch((function(e){V(e.response.data.message),console.log(e.response.data.message)}))}(e.target.value)},value:L,style:{width:"50%",margin:3}},r.a.createElement(v.a.Control,{as:"select",custom:!0},r.a.createElement("option",{disabled:"disabled"},"--a\xf1adir roles/pulsar x roja para eliminar--"),t.rols.map((function(e,t){return r.a.createElement("option",null,e.name)}))))),r.a.createElement("div",{style:{backgroundColor:"green",marginBottom:10}},r.a.createElement(v.a.Group,{onChange:function(e){return n=e.target.value,void f.a.patch("api/user/adduser/"+a,{id:n},l).then((function(e){t.setfetch(!0),console.log("usuario actualizado : ",e.data),s(!0)})).catch((function(e){V(e.response.data.message)}));var n}},r.a.createElement(v.a.Label,null,"selecciona un usuario para vincular a este usuario"),r.a.createElement(v.a.Control,{as:"select",custom:!0},t.users.map((function(e,t){return r.a.createElement("option",{value:e._id},e.name)})))),r.a.createElement(w.a,{onClick:function(){return t.setopen(!t.open)}},"doble tap para desplegar la lista de relaciones")),r.a.createElement("div",{style:{backgroundColor:"yellow"}},r.a.createElement("h4",null,"empresas: ",JSON.stringify(C.companys)),r.a.createElement("h4",null,"empresas: ",JSON.stringify(C,["companys"]))),r.a.createElement(w.a,{onClick:function(){return e=a,console.log(e),void f.a.delete("api/user/"+e,l).then((function(e){t.setfetch(!0),H.push("/"),V("")})).catch((function(e){V(e.response.data),console.log(e)}));var e},variant:"danger"},"eliminar el usuario actual")))}function P(e){var t=Object(n.useContext)(k),a=Object(b.g)(),l=a.location.pathname.slice(15),c=Object(n.useState)(!0),o=Object(p.a)(c,2),u=o[0],s=o[1],d=Object(n.useState)([]),E=Object(p.a)(d,2),h=E[0],v=E[1],g=Object(n.useState)(!1),O=Object(p.a)(g,2),y=O[0],j=O[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("api/user/"+l).then((function(e){var t=e.data.users;console.log(t),v(t)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),j(!0)}),[y]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{dir:"rtl",modal:!0,open:u,onClose:function(){return s(!1)}},r.a.createElement(S.c,{dir:"ltr"},r.a.createElement(S.e,null,"relaciones")),r.a.createElement(S.b,{dir:"ltr"},r.a.createElement(I.a,null,y?h.map((function(e,n){return r.a.createElement(L.a,{onClick:function(){return function(e){t.setfetch(!0),a.push("/usuario/lista/"+e._id),t.setopen(!1)}(e)}},e.name)})):"Loading..."))))}function B(){var e=Object(n.useContext)(k),t=Object(b.h)().id;console.log(t);e.token;return r.a.createElement("div",null,"otra cosa")}var D=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],l=(t[1],Object(n.useContext)(k));return l.isAuth?l.isAuth&&!a?r.a.createElement(E.a,{basename:"/valeria"},r.a.createElement(G,null),l.open?r.a.createElement(P,{context:l.users}):null,r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:_}),r.a.createElement(b.b,{exact:!0,path:"/empresa/crear",component:R}),r.a.createElement(b.b,{exact:!0,path:"/usuario/crear",component:W}),r.a.createElement(b.b,{exact:!0,path:"/usuario/lista",component:J}),r.a.createElement(b.b,{path:"/usuario/lista/:userId",children:r.a.createElement(V,null)}),r.a.createElement(b.b,{path:"/empresa/:id",children:r.a.createElement(B,null)}),r.a.createElement(b.b,{component:function(){return r.a.createElement("div",null,"no found")}}))):l.isAuth&&a?r.a.createElement("div",null,"company"):r.a.createElement("div",null,"NotFoundfound"):r.a.createElement(E.a,{basename:"/valeria"},r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:A}),r.a.createElement(b.b,{component:function(){return r.a.createElement(b.a,{to:"/"})}})))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(98);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null,r.a.createElement(D,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){var t=new URL("/valeria",window.location.href);if(console.log(t),t.origin!==window.location.origin)return void console.log("yalhallo");window.addEventListener("load",(function(){var t="".concat("/valeria","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[99,1,2]]]);
//# sourceMappingURL=main.f0903384.chunk.js.map