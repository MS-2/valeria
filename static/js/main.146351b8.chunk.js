(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),o=a(54),i=a(9),u=a.n(i),s=a(21),m=a(50),p=a(17),d=a(6),E=a(11),h=a.n(E),f=a(28),b=a(10),g=a(38),A=a(3),v=a(53),O=a(110),j=a(111),C=a(112),k=a(22),w=a(31);h.a.defaults.baseURL="https://valeria-server.herokuapp.com/";var x=Object(n.createContext)(),y=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(d.a)(o,2),s=i[0],m=i[1],E=Object(n.useState)(""),f=Object(d.a)(E,2),b=f[0],g=f[1],A=Object(n.useState)(""),v=Object(d.a)(A,2),O=v[0],j=v[1],C=Object(n.useState)({}),k=Object(d.a)(C,2),y=k[0],S=k[1],B=Object(n.useState)([]),N=Object(d.a)(B,2),I=N[0],U=N[1],D=Object(n.useState)([]),R=Object(d.a)(D,2),M=R[0],W=R[1],T=Object(n.useState)(""),q=Object(d.a)(T,2),Q=q[0],V=q[1],J=Object(n.useState)(!0),G=Object(d.a)(J,2),X=G[0],F=G[1],z=Object(n.useState)([]),Y=Object(d.a)(z,2),L=Y[0],P=Y[1],Z=Object(n.useState)(),K=Object(d.a)(Z,2),H=K[0],_=K[1];s&&X&&h.a.get("api/user/"+Q).then((function(e){S(e.data),F(!1)})).catch((function(e){window.location.href="/valeria"})),Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("api/company");case 2:return t=e.sent,W(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),c(!1)}),[l]),Object(n.useEffect)((function(){var e=localStorage.getItem("token");if(e){m(!0),g(e);var t=Object(w.a)(e);V(t.id),console.log("true")}else console.log("false")}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("api/user");case 2:return t=e.sent,U(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),c(!1)}),[l]),Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("api/role");case 2:return t=e.sent,P(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),c(!1)}),[l]);return r.a.createElement(x.Provider,{value:{open:H,setopen:_,user:y,setuser:S,id:Q,setid:V,err:O,seterr:j,token:b,settoken:g,isAuth:s,setisAuth:m,cleanERROR:function(){j("")},logout:function(){m(!1),g(""),S({}),V(""),localStorage.removeItem("token"),console.log("/valeria"),window.location.href="/valeria"},users:I,setusers:U,setcompanys:W,setfetch:c,fetch:l,companys:M,rols:L}},e.children)},S=a(20),B=a(19),N=a(113),I=a(109),U=(a(79),a(85),a(87),a(25),Object(b.i)((function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),l=a[0],c=a[1],o=Object(n.useContext)(x),i=o.logout,u=e.history,s=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{fixed:!0},r.a.createElement(S.e,null,r.a.createElement(S.f,null,r.a.createElement(S.d,{icon:"menu",onClick:function(){return c(!l)}}),r.a.createElement(S.g,null,"Home Valeria+",JSON.stringify(s.pathname))),r.a.createElement(S.f,{alignEnd:!0},r.a.createElement(S.b,{onClick:function(){return u.push("/")},icon:"home"}),r.a.createElement(S.b,{icon:"settings"})))),r.a.createElement(S.c,null),r.a.createElement(B.a,{modal:!0,open:l,onClose:function(){return c(!1)}},r.a.createElement(B.c,null,r.a.createElement(B.e,null,"Bienvenido : ",o.user.name),r.a.createElement(B.d,null,"correo : ",o.user.email," ")),r.a.createElement(B.b,null,r.a.createElement(N.a,null,r.a.createElement(I.a,{onClick:function(){return u.push("/empresa/crear")}},"registrar empresa"),r.a.createElement(I.a,{onClick:function(){return u.push("/usuario/crear")}},r.a.createElement(I.b,{icon:"person"}),"registrar usuario"),r.a.createElement(I.a,{onClick:function(){return u.push("/usuario/lista")}},r.a.createElement(I.b,{icon:"list"}),"lista de usuarios"),r.a.createElement(I.a,{onClick:function(){return i()}},"cerrar sesion")))))}))),D=(a(95),a(97),a(99),function(){var e=Object(n.useContext)(x),t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),i=Object(d.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)(""),E=Object(d.a)(p,2),f=E[0],b=E[1];return r.a.createElement("div",{className:"content content-full-width content-inverse-mode "},r.a.createElement("div",{className:"login login-with-news-feed"},r.a.createElement("div",{className:"news-feed"},r.a.createElement("div",{className:"news-image",style:{backgroundImage:"url(".concat("data:image/png;base64,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",")")}}),r.a.createElement("div",{className:"news-caption"},r.a.createElement("h4",{className:"caption-title"},r.a.createElement("b",null,"Quattro")," Admin App"),r.a.createElement("p",null,"Sistema Integral de Gesti\xf3n"))),r.a.createElement("div",{className:"right-content"},r.a.createElement("div",{className:"login-header"},r.a.createElement("div",{className:"brand"},r.a.createElement("span",{className:"logo"})," ",r.a.createElement("b",null,"Quattro")," S.A.",r.a.createElement("small",null,"Sistema Integral de Gesti\xf3n")),r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"fa fa-sign-in"}))),r.a.createElement("div",{className:"login-content"},r.a.createElement("form",{className:"margin-bottom-0",onSubmit:function(t){t.preventDefault(),c("Aguarde!"),m("Autenticando..."),b("alert-info show");var a,n=new FormData(t.target),r={},l=Object(s.a)(n.entries());try{for(l.s();!(a=l.n()).done;){var o=a.value;r[o[0]]=o[1]}}catch(i){l.e(i)}finally{l.f()}h.a.post("api/auth/signin",r).then((function(t){console.log(e),e.setisAuth(!0),e.settoken(t.data.token);var a=Object(w.a)(t.data.token);e.setid(a.id),localStorage.setItem("token",t.data.token)})).catch((function(e){c("Atenci\xf3n! "),m(e.response.data.msg),b("alert-warning show")}))}},r.a.createElement("div",{className:f+" alert fade m-b-15 p-t-10 p-b-10",id:"msg_alert"},r.a.createElement("strong",{id:"msg_title"},l),r.a.createElement("span",{id:"msg_text"},u)),r.a.createElement("div",{className:"form-group m-b-15"},r.a.createElement("input",{type:"email",name:"email",className:"form-control form-control-lg",placeholder:"Email Address",required:!0,autoComplete:"username",defaultValue:"admin@localhost"})),r.a.createElement("div",{className:"form-group m-b-15"},r.a.createElement("input",{type:"password",name:"pass",className:"form-control form-control-lg",placeholder:"Password",required:!0,autoComplete:"current-password",defaultValue:"admin"})),r.a.createElement("div",{className:"checkbox checkbox-css m-b-30"},r.a.createElement("input",{type:"checkbox",id:"remember_me_checkbox",value:""}),r.a.createElement("label",{htmlFor:"remember_me_checkbox"},"Remember Me")),r.a.createElement("div",{className:"login-buttons"},r.a.createElement("button",{type:"submit",className:"btn btn-success btn-block btn-lg"},"Sign me in")),r.a.createElement("div",{className:"m-t-20 m-b-40 p-b-40 text-inverse"}),r.a.createElement("hr",null),r.a.createElement("p",{className:"text-center text-grey-darker"},"\xa9 Quattro S.A. todos los derechos reservados 2020"))))))});var R=function(){var e=Object(n.useContext)(x),t={headers:{"x-access-token":e.token}},a=Object(n.useState)(),l=Object(d.a)(a,2),c=l[0],o=l[1],i=function(){var a=Object(p.a)(u.a.mark((function a(n){var r,l,c,i,p,d;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),l=new FormData(n.target),r=l.entries(),Object(m.a)(r),c=r,i=Object(s.a)(l.entries());try{for(i.s();!(p=i.n()).done;)d=p.value,c[d[0]]=d[1]}catch(u){i.e(u)}finally{i.f()}h.a.post("api/company",{empresa:c},t).then((function(t){o("empresa creado con exito");var a=t.data;e.setcompanys(a),e.setfetch(!0)})).catch((function(e){o("error faltan datos : "+e.response.data)}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{style:{backgroundColor:"pink",borderRadius:20,margin:10}},r.a.createElement(A.a,{onSubmit:i,style:{margin:40}},c?r.a.createElement("div",{style:{backgroundColor:"green",color:"white"}},c):null,r.a.createElement(A.a.Group,{controlId:"name"},r.a.createElement(A.a.Label,null,"Nombre Comercial"),r.a.createElement(A.a.Control,{type:"text",name:"name",placeholder:"Enter name",defaultValue:"origo"})),r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:v.a,controlId:"rsocial"},r.a.createElement(A.a.Label,null,"Razon social:"),r.a.createElement(A.a.Control,{type:"text",name:"rsocial",placeholder:"razon social",defaultValue:"chocolates"})),r.a.createElement(A.a.Group,{as:v.a,controlId:"nit"},r.a.createElement(A.a.Label,null,"NIT:"),r.a.createElement(A.a.Control,{type:"text",name:"nit",placeholder:"numero de identificacion tributaria",defaultValue:"123456"}))),r.a.createElement(A.a.Group,{controlId:"direccion"},r.a.createElement(A.a.Label,null,"Direccion"),r.a.createElement(A.a.Control,{type:"text",name:"direccion",placeholder:"1234 Main St",defaultValue:"colpayo 849 piso 1 apt 4"})),r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Group,{as:v.a,controlId:"city"},r.a.createElement(A.a.Label,null,"Ciudad"),r.a.createElement(A.a.Control,{placeholder:"ciudad",name:"city",defaultValue:"buenos aires"})),r.a.createElement(A.a.Group,{as:v.a,controlId:"formGridState"},r.a.createElement(A.a.Label,null,"Estado"),r.a.createElement(A.a.Control,{as:"select",defaultValue:"Choose..."},r.a.createElement("option",null,"Elegir..."),r.a.createElement("option",null,"..."))),r.a.createElement(A.a.Group,{as:v.a,controlId:"formGridZip"},r.a.createElement(A.a.Label,null,"Zip"),r.a.createElement(A.a.Control,{placeholder:"zipcode",name:"zip",defaultValue:"1405"}))),r.a.createElement(A.a.Group,{controlId:"email-e"},r.a.createElement(A.a.Label,null,"Correo Electronico de la Empresa"),r.a.createElement(A.a.Control,{type:"email",placeholder:"Enter email",name:"email-e",defaultValue:"company@gmail.com"})),r.a.createElement(A.a.Group,{controlId:"Telefono Empresarial"},r.a.createElement(A.a.Label,null,"Telefono Fijo"),r.a.createElement(A.a.Control,{type:"tel",placeholder:"telefono de la empresa",name:"telefono",defaultValue:"1121607577"})),r.a.createElement(k.a,{variant:"primary",type:"submit"},"Guardar")),r.a.createElement("pre",null,JSON.stringify(e.companys,null,2)))},M=function(){var e=Object(n.useContext)(x),t={headers:{"x-access-token":e.token}},a=Object(n.useState)(""),l=Object(d.a)(a,2),c=l[0],i=l[1],m=Object(n.useState)([]),E=Object(d.a)(m,2),f=E[0],b=E[1],g=Object(n.useState)(!1),v=Object(d.a)(g,2),O=v[0],j=v[1],C=Object(n.useState)(!1),w=Object(d.a)(C,2),y=(w[0],w[1],function(){var a=Object(p.a)(u.a.mark((function a(n){var r,l,c,o,m;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),r=new FormData(n.target),l={},c=Object(s.a)(r.entries());try{for(c.s();!(o=c.n()).done;)m=o.value,l[m[0]]=m[1]}catch(u){c.e(u)}finally{c.f()}h.a.post("api/user",l,t).then((function(t){e.setfetch(!0),i("usuario : "+t.data.name+"creado con exito")})).catch((function(e){i(e.response.data.message)}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()),S=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n,l,c,i,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=new FormData(t.target),n={},l=Object(s.a)(a.entries());try{for(l.s();!(c=l.n()).done;)i=c.value,n[i[0]]=i[1]}catch(u){l.e(u)}finally{l.f()}console.log("put",n),m=function(){return r.a.createElement("div",null,r.a.createElement(A.a.Label,null,n.rotulo),r.a.createElement(A.a.Control,{type:"text",placeholder:"nuevo input",name:n.rotulo,required:"on"===n.check}))},console.log(f),b((function(e){return[].concat(Object(o.a)(e),[r.a.createElement(m,null)])})),j(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b((function(e){return f.splice(t,1,e[t])})),console.log(f);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){return r.a.createElement(A.a,{onSubmit:y,style:{margin:40,padding:40}},r.a.createElement("div",null,"campos basicos de registros puedes a\xf1adir campos personalizados que seran a\xf1adidos al perfil del usuario"),r.a.createElement(A.a.Label,null,"Nombre de pila"),r.a.createElement(A.a.Control,{type:"text",placeholder:"Nombre",name:"name",required:!0,maxlength:"64"}),r.a.createElement(A.a.Label,null,"Correo Electronico "),r.a.createElement(A.a.Control,{type:"email",placeholder:"@example.com",name:"email",required:!0,maxlength:"64"}),r.a.createElement(A.a.Label,null,"Contrase\xf1a"),r.a.createElement(A.a.Control,{type:"password",placeholder:"8-16 caracteres alfanumericos",name:"pass",required:!0,maxlength:"16"}),f?f.map((function(e,t){return r.a.createElement("div",null,e," ",r.a.createElement("button",{onClick:function(e){e.preventDefault(),B(t)}},"eliminar"))})):null,r.a.createElement(A.a.Label,null,"La Informacion suministrada es de caracter personal"),r.a.createElement(k.a,{block:!0,variant:"primary",type:"submit"},"crear usuario"))},I=function(e){return r.a.createElement("div",null,r.a.createElement(A.a,{onSubmit:S},r.a.createElement(A.a.Label,null,"rotulo"),r.a.createElement(A.a.Control,{type:"text",placeholder:"rotulo",name:"rotulo",required:!0}),r.a.createElement(A.a.Check,{type:"checkbox",label:"Es un campo requerido?",name:"check"}),r.a.createElement(k.a,{type:"submit"},"a\xf1adir Input")))};return r.a.createElement("div",null,r.a.createElement("div",{style:{margin:40,backgroundColor:"yellow",borderRadius:14}},O?null:r.a.createElement(N,null)),O?r.a.createElement(I,null):null,O?r.a.createElement("button",{onClick:function(){return j(!1)}},"volver atras"):r.a.createElement("button",{onClick:function(){return j(!0)}},"crear nuevo input"),c?r.a.createElement("div",{style:{backgroundColor:"green",color:"white"}},c):null,r.a.createElement("pre",null,JSON.stringify(e.users,["_id","email","name"],1)))},W=function(e){var t=Object(n.useContext)(x),a=t.companys,l=t.users,c=t.rols,o=e.history,i=Object(n.useState)([]),u=Object(d.a)(i,2),s=(u[0],u[1],a.map((function(e){return r.a.createElement("button",{key:e._id,style:{margin:5,borderStyle:"solid",backgroundColor:"pink",width:300,height:150}},r.a.createElement("div",{onClick:function(){return o.push("/empresa/"+e._id)}},r.a.createElement("div",null,e.empresa.name),r.a.createElement("div",null,"id : ",e._id)))})));return r.a.createElement("div",null,r.a.createElement("pre",null,r.a.createElement("h1",null,"EMPRESAS"),JSON.stringify(a,["_id","name","empresa","nit"],2)),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},s)),r.a.createElement("pre",null,r.a.createElement("h1",null,"USUARIOS"),JSON.stringify(l,["_id","email"],1)),r.a.createElement("pre",null,r.a.createElement("h1",null,"ROLES"),JSON.stringify(c,null,1)))},T=function(){var e=Object(n.useContext)(x).users,t=Object(n.useState)("email"),a=Object(d.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)("_id"),i=Object(d.a)(o,2),u=i[0],s=i[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),E=p[0],h=p[1],b=Object(n.useState)([]),v=Object(d.a)(b,2),O=v[0],j=v[1];Object(n.useEffect)((function(){j(e.filter((function(e){return e.email.includes(E)})))}),[E]);var C=function(){return O.map((function(e,t){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement(f.b,{to:"/usuario/lista/"+e._id},e.email)),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e._id)))}))};return r.a.createElement("div",{style:{margin:10}},r.a.createElement("div",null,r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Label,null,"buscar por email"),r.a.createElement(A.a.Control,{type:"search",placeholder:"buscar...",onChange:function(e){return h(e.target.value)},width:"50%",style:{width:"40%"}})),r.a.createElement("input",{type:"checkbox",onChange:function(e){return function(e){c(e?"":"email")}(e.target.checked)}}),r.a.createElement("span",null,"email"),r.a.createElement("input",{type:"checkbox",onChange:function(e){return function(e){s(e?"":"_id")}(e.target.checked)}}),r.a.createElement("span",null,"_id")),r.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"email"),r.a.createElement("th",null,"nombre"),r.a.createElement("th",null,"agun otro dato"))),r.a.createElement(C,null)),r.a.createElement("pre",null,r.a.createElement("h1",null,"USUARIOS"),JSON.stringify(O,[u,l],1)))};function q(e){var t=Object(n.useContext)(x),a=Object(b.h)().userId,l={headers:{"x-access-token":t.token}},c=Object(n.useState)(!1),o=Object(d.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)({}),E=Object(d.a)(m,2),f=E[0],w=E[1],y=Object(n.useState)(),S=Object(d.a)(y,2),B=S[0],N=(S[1],Object(n.useState)([])),I=Object(d.a)(N,2),U=I[0],D=I[1],R=Object(n.useState)(""),M=Object(d.a)(R,2),W=M[0],T=M[1],q=Object(n.useState)(""),Q=Object(d.a)(q,2),V=Q[0],J=(Q[1],Object(n.useState)(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))),G=Object(d.a)(J,2),X=G[0],F=(G[1],Object(n.useState)([])),z=Object(d.a)(F,2),Y=(z[0],z[1]),L=Object(b.g)();Object(n.useEffect)((function(){Y(U.filter((function(e){return e.includes(V)})))}),[V]),Object(n.useEffect)((function(){console.log(W)}),[W]),Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.get("api/user/"+a).then((function(e){var t=e.data;w(t),D(t.role)})).catch((function(e){console.log(e.response.data)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),s(!1)}),[i]),Object(n.useEffect)((function(){}),[X]);return r.a.createElement("div",{style:{display:"flex",width:"100%",height:"150vh",flexWrap:"wrap"}},r.a.createElement("div",{style:{flex:1,textAlign:"center"}},r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement(v.a,null,r.a.createElement(j.a,{onClick:function(){return console.log("foto")},src:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",roundedCircle:!0}))),r.a.createElement(O.a,{style:{marginTop:10}},r.a.createElement(v.a,null,r.a.createElement("h2",null,"  ",f.name)))),r.a.createElement(g.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Email:"),r.a.createElement("th",null,f.email))))),r.a.createElement("div",{style:{flex:1,backgroundColor:"pink"}},"      ","lista de roles:       ",W,r.a.createElement("div",{style:{backgroundColor:"crimson",margin:10,borderRadius:14}},r.a.createElement("div",null,r.a.createElement("h3",null,U.map((function(e){return r.a.createElement(C.a,{pill:!0,variant:"warning"},e,"-",r.a.createElement("spam",{style:{color:"red"},onClick:function(){var n;"admin"===e?T("no puedes eliminar el admin"):(T(""),"admin"!==(n=e)&&h.a.patch("api/user/remove/"+a,{role:n},l).then((function(e){T(""),t.setfetch(!0),s(!0)})).catch((function(e){T(e.response.data.message)})))}},"x"))}))))),r.a.createElement("div",null,r.a.createElement(A.a.Group,{onChange:function(e){return function(e){h.a.patch("api/user/"+a,{role:e},l).then((function(e){t.setfetch(!0),s(!0),T("")})).catch((function(e){T(e.response.data.message),console.log(e.response.data.message)}))}(e.target.value)},value:B,style:{width:"50%",margin:3}},r.a.createElement(A.a.Control,{as:"select",custom:!0},r.a.createElement("option",{disabled:"disabled"},"--a\xf1adir roles/pulsar x roja para eliminar--"),t.rols.map((function(e,t){return r.a.createElement("option",null,e.name)}))))),r.a.createElement("div",{style:{backgroundColor:"green",marginBottom:10}},r.a.createElement(A.a.Group,{onChange:function(e){return n=e.target.value,void h.a.patch("api/user/adduser/"+a,{id:n},l).then((function(e){t.setfetch(!0),console.log("usuario actualizado : ",e.data),s(!0)})).catch((function(e){T(e.response.data.message)}));var n}},r.a.createElement(A.a.Label,null,"selecciona un usuario para vincular a este usuario"),r.a.createElement(A.a.Control,{as:"select",custom:!0},t.users.map((function(e,t){return r.a.createElement("option",{value:e._id},e.name)})))),r.a.createElement(k.a,{onClick:function(){return t.setopen(!t.open)}},"doble tap para desplegar la lista de relaciones")),r.a.createElement("div",{style:{backgroundColor:"yellow"}},r.a.createElement("h4",null,"empresas: ",JSON.stringify(f.companys)),r.a.createElement("h4",null,"empresas: ",JSON.stringify(f,["companys"]))),r.a.createElement(k.a,{onClick:function(){return e=a,console.log(e),void h.a.delete("api/user/"+e,l).then((function(e){t.setfetch(!0),L.push("/"),T("")})).catch((function(e){T(e.response.data),console.log(e)}));var e},variant:"danger"},"eliminar el usuario actual")))}function Q(e){var t=Object(n.useContext)(x),a=Object(b.g)(),l=a.location.pathname.slice(15),c=Object(n.useState)(!0),o=Object(d.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)([]),E=Object(d.a)(m,2),f=E[0],g=E[1],A=Object(n.useState)(!1),v=Object(d.a)(A,2),O=v[0],j=v[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("api/user/"+l).then((function(e){var t=e.data.users;console.log(t),g(t)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),j(!0)}),[O]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{dir:"rtl",modal:!0,open:i,onClose:function(){return s(!1)}},r.a.createElement(B.c,{dir:"ltr"},r.a.createElement(B.e,null,"relaciones")),r.a.createElement(B.b,{dir:"ltr"},r.a.createElement(N.a,null,O?f.map((function(e,n){return r.a.createElement(I.a,{onClick:function(){return function(e){t.setfetch(!0),a.push("/usuario/lista/"+e._id),t.setopen(!1)}(e)}},e.name)})):"Loading..."))))}function V(){var e=Object(n.useContext)(x),t=Object(b.h)().id;console.log(t);e.token;return r.a.createElement("div",null,"otra cosa")}var J=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],l=(t[1],Object(n.useContext)(x));return l.isAuth?l.isAuth&&!a?r.a.createElement(f.a,{basename:"/valeria"},r.a.createElement(U,null),l.open?r.a.createElement(Q,{context:l.users}):null,r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:W}),r.a.createElement(b.b,{exact:!0,path:"/empresa/crear",component:R}),r.a.createElement(b.b,{exact:!0,path:"/usuario/crear",component:M}),r.a.createElement(b.b,{exact:!0,path:"/usuario/lista",component:T}),r.a.createElement(b.b,{path:"/usuario/lista/:userId",children:r.a.createElement(q,null)}),r.a.createElement(b.b,{path:"/empresa/:id",children:r.a.createElement(V,null)}),r.a.createElement(b.b,{component:function(){return r.a.createElement("div",null,"no found")}}))):l.isAuth&&a?r.a.createElement("div",null,"company"):r.a.createElement("div",null,"NotFoundfound"):r.a.createElement(f.a,{basename:"/valeria"},r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:D}),r.a.createElement(b.b,{component:function(){return r.a.createElement(b.a,{to:"/"})}})))},G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(101);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null,r.a.createElement(J,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){var t=new URL("/valeria",window.location.href);if(console.log(t),t.origin!==window.location.origin)return void console.log("yalhallo");window.addEventListener("load",(function(){var t="".concat("/valeria","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(t,e)}))}}()},99:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.146351b8.chunk.js.map