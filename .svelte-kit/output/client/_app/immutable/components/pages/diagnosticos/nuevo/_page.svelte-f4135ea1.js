import{S as ie,i as oe,s as re,k as P,a as B,q,l as y,m as T,c as N,r as z,h as _,n as g,b as I,C as v,u as ce,A as te,K as ye,o as Ee,B as je,E as we,L as Y,M as Pe,v as A,e as se,w as K,x as L,N as fe,f as w,g as Z,d as x,t as M,y as F,O as Ie,P as Ve}from"../../../../chunks/index-a15a9088.js";import{d as De}from"../../../../chunks/store-99c3c2ac.js";import{g as Me}from"../../../../chunks/navigation-81fc9461.js";import{a as ae}from"../../../../chunks/index-c00af6b7.js";function de(o,e,l){const t=o.slice();return t[4]=e[l],t}function pe(o){let e,l,t;return{c(){e=P("div"),l=P("img"),this.h()},l(n){e=y(n,"DIV",{class:!0});var i=T(e);l=y(i,"IMG",{src:!0,class:!0,alt:!0}),i.forEach(_),this.h()},h(){je(l.src,t="/img/bot.svg")||g(l,"src",t),g(l,"class","w-100 h-100"),g(l,"alt","logo bot"),g(e,"class","chatbot__boticon rounded-circle pr-2 align-self-start svelte-1dz19xr")},m(n,i){I(n,e,i),v(e,l)},d(n){n&&_(e)}}}function me(o){let e,l=o[0].opciones,t=[];for(let n=0;n<l.length;n+=1)t[n]=_e(de(o,l,n));return{c(){e=P("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=y(n,"DIV",{class:!0});var i=T(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(_),this.h()},h(){g(e,"class","chatbot__options d-flex pt-1 svelte-1dz19xr")},m(n,i){I(n,e,i);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(n,i){if(i&3){l=n[0].opciones;let s;for(s=0;s<l.length;s+=1){const c=de(n,l,s);t[s]?t[s].p(c,i):(t[s]=_e(c),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(n){n&&_(e),we(t,n)}}}function _e(o){let e,l=o[4]+"",t,n,i,s;function c(){return o[2](o[4])}return{c(){e=P("button"),t=q(l),n=B(),this.h()},l(p){e=y(p,"BUTTON",{class:!0});var h=T(e);t=z(h,l),n=N(h),h.forEach(_),this.h()},h(){g(e,"class","btn btn-outline-secondary")},m(p,h){I(p,e,h),v(e,t),v(e,n),i||(s=Y(e,"click",Pe(c)),i=!0)},p(p,h){o=p,h&1&&l!==(l=o[4]+"")&&ce(t,l)},d(p){p&&_(e),i=!1,s()}}}function Te(o){let e,l,t,n,i=o[0].contenido+"",s,c,p,h,r=o[0].esPregunta&&pe(),f=o[0].opciones!=null&&me(o);return{c(){e=P("div"),r&&r.c(),l=B(),t=P("div"),n=P("div"),s=q(i),p=B(),f&&f.c(),this.h()},l(m){e=y(m,"DIV",{class:!0});var u=T(e);r&&r.l(u),l=N(u),t=y(u,"DIV",{});var $=T(t);n=y($,"DIV",{class:!0});var D=T(n);s=z(D,i),D.forEach(_),p=N($),f&&f.l($),$.forEach(_),u.forEach(_),this.h()},h(){g(n,"class",c="chatbot__message btn btn-outline-primary text-wrap text-start "+(o[0].esPregunta?"":"fw-bold")),g(e,"class",h="container mb-3 d-flex flex-row "+(o[0].esPregunta?"":"justify-content-end"))},m(m,u){I(m,e,u),r&&r.m(e,null),v(e,l),v(e,t),v(t,n),v(n,s),v(t,p),f&&f.m(t,null)},p(m,[u]){m[0].esPregunta?r||(r=pe(),r.c(),r.m(e,l)):r&&(r.d(1),r=null),u&1&&i!==(i=m[0].contenido+"")&&ce(s,i),u&1&&c!==(c="chatbot__message btn btn-outline-primary text-wrap text-start "+(m[0].esPregunta?"":"fw-bold"))&&g(n,"class",c),m[0].opciones!=null?f?f.p(m,u):(f=me(m),f.c(),f.m(t,null)):f&&(f.d(1),f=null),u&1&&h!==(h="container mb-3 d-flex flex-row "+(m[0].esPregunta?"":"justify-content-end"))&&g(e,"class",h)},i:te,o:te,d(m){m&&_(e),r&&r.d(),f&&f.d()}}}function He(o,e,l){const t=ye();let{mensaje:n={esPregunta:!1,contenido:"",opciones:[],opcionElegida:""}}=e;function i(c){l(0,n.opcionElegida=c,n),t("elegirOpcion",{opcionElegida:c})}Ee(async()=>{n.esPregunta&&n.contenido==="Bienvenido!"&&t("pasarSgtePregunta")});const s=c=>i(c);return o.$$set=c=>{"mensaje"in c&&l(0,n=c.mensaje)},[n,i,s]}class W extends ie{constructor(e){super(),oe(this,e,He,Te,re,{mensaje:0})}}function he(o,e,l){const t=o.slice();return t[26]=e[l],t}function ge(o){let e,l,t=(o[6]=!1)+"",n,i;return e=new W({props:{mensaje:{contenido:"Ingrese o elija un dato v\xE1lido",esPregunta:!0}}}),{c(){A(e.$$.fragment),l=B(),n=q(t)},l(s){K(e.$$.fragment,s),l=N(s),n=z(s,t)},m(s,c){L(e,s,c),I(s,l,c),I(s,n,c),i=!0},p(s,c){(!i||c&64)&&t!==(t=(s[6]=!1)+"")&&ce(n,t)},i(s){i||(w(e.$$.fragment,s),i=!0)},o(s){M(e.$$.fragment,s),i=!1},d(s){F(e,s),s&&_(l),s&&_(n)}}}function Be(o){let e,l;return e=new W({props:{mensaje:o[26]}}),{c(){A(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,n){L(e,t,n),l=!0},p(t,n){const i={};n&2&&(i.mensaje=t[26]),e.$set(i)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function Ne(o){let e,l;return e=new W({props:{mensaje:o[26]}}),e.$on("elegirOpcion",o[9]),e.$on("sgtePregunta",o[10]),{c(){A(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,n){L(e,t,n),l=!0},p(t,n){const i={};n&2&&(i.mensaje=t[26]),e.$set(i)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function be(o){let e,l,t,n,i,s=o[6]&&ge(o);const c=[Ne,Be],p=[];function h(r,f){return r[26].opciones&&r[26].opciones.length>0?0:1}return l=h(o),t=p[l]=c[l](o),{c(){s&&s.c(),e=B(),t.c(),n=se()},l(r){s&&s.l(r),e=N(r),t.l(r),n=se()},m(r,f){s&&s.m(r,f),I(r,e,f),p[l].m(r,f),I(r,n,f),i=!0},p(r,f){r[6]?s?(s.p(r,f),f&64&&w(s,1)):(s=ge(r),s.c(),w(s,1),s.m(e.parentNode,e)):s&&(Z(),M(s,1,1,()=>{s=null}),x());let m=l;l=h(r),l===m?p[l].p(r,f):(Z(),M(p[m],1,1,()=>{p[m]=null}),x(),t=p[l],t?t.p(r,f):(t=p[l]=c[l](r),t.c()),w(t,1),t.m(n.parentNode,n))},i(r){i||(w(s),w(t),i=!0)},o(r){M(s),M(t),i=!1},d(r){s&&s.d(r),r&&_(e),p[l].d(r),r&&_(n)}}}function ve(o){let e,l;return e=new W({props:{mensaje:{contenido:"Muchas gracias por responder las preguntas!",esPregunta:!0}}}),{c(){A(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,n){L(e,t,n),l=!0},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function $e(o){let e,l;return e=new W({props:{mensaje:{contenido:"Se han generado los resultados!",esPregunta:!0}}}),{c(){A(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,n){L(e,t,n),l=!0},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function ke(o){let e,l,t,n;return{c(){e=P("button"),l=q("Ver resultados"),this.h()},l(i){e=y(i,"BUTTON",{type:!0,class:!0});var s=T(e);l=z(s,"Ver resultados"),s.forEach(_),this.h()},h(){g(e,"type","button"),g(e,"class","btn btn-primary w-100 mt-3")},m(i,s){I(i,e,s),v(e,l),t||(n=Y(e,"click",Pe(o[11])),t=!0)},p:te,d(i){i&&_(e),t=!1,n()}}}function Oe(o){let e,l,t,n,i,s,c,p,h,r,f,m,u,$,D,O,C,U,S,J,X,Q;c=new W({props:{mensaje:{contenido:"Bienvenido!",esPregunta:!0}}});let R=o[1],k=[];for(let a=0;a<R.length;a+=1)k[a]=be(he(o,R,a));const le=a=>M(k[a],1,1,()=>{k[a]=null});let E=o[2]&&o[0]!==0&&ve(),j=o[3]&&$e(),V=o[2]&&o[0]!==0&&ke(o);return{c(){e=P("div"),l=P("div"),t=P("h2"),n=q("Chatbot"),i=B(),s=P("div"),A(c.$$.fragment),p=B();for(let a=0;a<k.length;a+=1)k[a].c();h=B(),E&&E.c(),r=B(),j&&j.c(),f=B(),m=P("div"),u=P("input"),$=B(),D=P("button"),O=P("img"),U=B(),V&&V.c(),S=se(),this.h()},l(a){e=y(a,"DIV",{class:!0});var d=T(e);l=y(d,"DIV",{class:!0});var b=T(l);t=y(b,"H2",{class:!0});var H=T(t);n=z(H,"Chatbot"),H.forEach(_),b.forEach(_),i=N(d),s=y(d,"DIV",{class:!0});var G=T(s);K(c.$$.fragment,G),p=N(G);for(let ne=0;ne<k.length;ne+=1)k[ne].l(G);h=N(G),E&&E.l(G),r=N(G),j&&j.l(G),G.forEach(_),f=N(d),m=y(d,"DIV",{class:!0});var ee=T(m);u=y(ee,"INPUT",{class:!0,placeholder:!0}),$=N(ee),D=y(ee,"BUTTON",{class:!0});var ue=T(D);O=y(ue,"IMG",{src:!0,class:!0,alt:!0}),ue.forEach(_),ee.forEach(_),d.forEach(_),U=N(a),V&&V.l(a),S=se(),this.h()},h(){g(t,"class","h3 text-white m-0"),g(l,"class","chatbot__header p-3 text-white bg-primary"),g(s,"class","chatbot__messages py-2 flex-grow-1 overflow-scroll svelte-14un3ta"),g(u,"class","form-control"),g(u,"placeholder","Ingrese un dato"),je(O.src,C="/img/send_48px.png")||g(O,"src",C),g(O,"class","w-100"),g(O,"alt","logo de enviar"),g(D,"class","chatbot__send btn btn-primary rounded-circle ms-2 d-flex align-items-center svelte-14un3ta"),g(m,"class","chatbot__footer d-flex flex-row p-2 align-items-center border-top"),g(e,"class","chatbot rounded overflow-hidden d-flex flex-column mt-3 border border-primary mx-1 svelte-14un3ta")},m(a,d){I(a,e,d),v(e,l),v(l,t),v(t,n),v(e,i),v(e,s),L(c,s,null),v(s,p);for(let b=0;b<k.length;b+=1)k[b].m(s,null);v(s,h),E&&E.m(s,null),v(s,r),j&&j.m(s,null),o[13](s),v(e,f),v(e,m),v(m,u),fe(u,o[4]),v(m,$),v(m,D),v(D,O),I(a,U,d),V&&V.m(a,d),I(a,S,d),J=!0,X||(Q=[Y(u,"input",o[14]),Y(u,"keydown",o[7]),Y(D,"click",o[8])],X=!0)},p(a,[d]){if(d&1602){R=a[1];let b;for(b=0;b<R.length;b+=1){const H=he(a,R,b);k[b]?(k[b].p(H,d),w(k[b],1)):(k[b]=be(H),k[b].c(),w(k[b],1),k[b].m(s,h))}for(Z(),b=R.length;b<k.length;b+=1)le(b);x()}a[2]&&a[0]!==0?E?d&5&&w(E,1):(E=ve(),E.c(),w(E,1),E.m(s,r)):E&&(Z(),M(E,1,1,()=>{E=null}),x()),a[3]?j?d&8&&w(j,1):(j=$e(),j.c(),w(j,1),j.m(s,null)):j&&(Z(),M(j,1,1,()=>{j=null}),x()),d&16&&u.value!==a[4]&&fe(u,a[4]),a[2]&&a[0]!==0?V?V.p(a,d):(V=ke(a),V.c(),V.m(S.parentNode,S)):V&&(V.d(1),V=null)},i(a){if(!J){w(c.$$.fragment,a);for(let d=0;d<R.length;d+=1)w(k[d]);w(E),w(j),J=!0}},o(a){M(c.$$.fragment,a),k=k.filter(Boolean);for(let d=0;d<k.length;d+=1)M(k[d]);M(E),M(j),J=!1},d(a){a&&_(e),F(c),we(k,a),E&&E.d(),j&&j.d(),o[13](null),a&&_(U),V&&V.d(a),a&&_(S),X=!1,Ie(Q)}}}function Re(o,e,l){let t,n=-1,i="",s,c=[],p,h=!1,r=!1,f,m,u,$,D=!1,O=!0,C=999;Ee(async()=>{const a=await ae.get("http://localhost:10002/diagnosticos/especialidades");a.status===200&&a.data&&(f=[...a.data.items],c.push({esPregunta:!0,contenido:"Elija una especialidad",opciones:f.map(d=>d.nombre),opcionElegida:""}),U())});function U(){l(1,c)}async function S(a){(a.key==="Enter"||a.keyCode===13)&&await Q(i)}async function J(){await Q(i)}async function X(a){await Q(a.detail.opcionElegida)}async function Q(a){if(c.push({esPregunta:!1,contenido:a}),l(1,c[c.length-2].opciones=[],c),O){if(!f.map(H=>H.nombre).includes(a)){c.push({esPregunta:!0,contenido:"Elija una especialidad",opciones:f.map(H=>H.nombre),opcionElegida:""});return}m=f.find(H=>H.nombre===a).id,u=a;const b=await ae.get(`http://localhost:10002/diagnosticos/preguntas?espId=${m}&take=30`);b.status===200&&b.data&&(p=b.data.items.map(H=>({idEspecialidad:m,idPregunta:H.id,pregunta:H.contenido,opciones:H.opciones.map(G=>G.valor),respuesta:""})),l(12,C=p.length),O=!1),l(0,n++,n),R()}else t&&(p[n].opciones.includes(a)?(p[n].respuesta=a,l(0,n++,n),R(),n===C&&(l(2,h=!0),await k())):(l(6,r=!0),R()));l(4,i="")}function R(){n<C&&(c.push({esPregunta:!0,contenido:p[n].pregunta,opciones:p[n].opciones,opcionElegida:""}),U())}async function k(){const a={paciente_id:11,especialidad_id:m,detallesdiagnostico:p.map(d=>({pregunta_id:d.idPregunta,respuesta:d.respuesta}))};console.log(a),ae.post("http://localhost:10002/diagnosticos",a).then(d=>{d.status===200&&($=d.data,console.log($),l(3,D=!0))}).catch(d=>console.log(d))}function le(){De.set({id:$.id,especialidad:u,fecha:$.fecha,posiblesEnfermedades:$.posiblesEnfermedades}),Me("/diagnosticos/resultados")}function E(){setTimeout(()=>{s.scrollTo({top:s.scrollHeight,left:0,behavior:"smooth"})},10)}function j(a){Ve[a?"unshift":"push"](()=>{s=a,l(5,s)})}function V(){i=this.value,l(4,i)}return o.$$.update=()=>{o.$$.dirty&4097&&(t=n>=0&&n<C),o.$$.dirty&14&&(c.length>0&&c[c.length-1].esPregunta||D||h)&&E()},[n,c,h,D,i,s,r,S,J,X,R,le,C,j,V]}class Ce extends ie{constructor(e){super(),oe(this,e,Re,Oe,re,{})}}function Ge(o){let e,l,t,n,i,s,c,p,h,r,f,m;return f=new Ce({}),{c(){e=P("h1"),l=q("Generar diagn\xF3stico"),t=B(),n=P("h4"),i=q("Responda las preguntas planteadas"),s=B(),c=P("hr"),p=B(),h=P("div"),r=P("div"),A(f.$$.fragment),this.h()},l(u){e=y(u,"H1",{class:!0});var $=T(e);l=z($,"Generar diagn\xF3stico"),$.forEach(_),t=N(u),n=y(u,"H4",{class:!0});var D=T(n);i=z(D,"Responda las preguntas planteadas"),D.forEach(_),s=N(u),c=y(u,"HR",{class:!0}),p=N(u),h=y(u,"DIV",{class:!0});var O=T(h);r=y(O,"DIV",{class:!0});var C=T(r);K(f.$$.fragment,C),C.forEach(_),O.forEach(_),this.h()},h(){g(e,"class","text-center mt-4"),g(n,"class","text-center"),g(c,"class","col-md-4 mx-auto"),g(r,"class","col col-md-6"),g(h,"class","row justify-content-center")},m(u,$){I(u,e,$),v(e,l),I(u,t,$),I(u,n,$),v(n,i),I(u,s,$),I(u,c,$),I(u,p,$),I(u,h,$),v(h,r),L(f,r,null),m=!0},p:te,i(u){m||(w(f.$$.fragment,u),m=!0)},o(u){M(f.$$.fragment,u),m=!1},d(u){u&&_(e),u&&_(t),u&&_(n),u&&_(s),u&&_(c),u&&_(p),u&&_(h),F(f)}}}class Ae extends ie{constructor(e){super(),oe(this,e,null,Ge,re,{})}}export{Ae as default};
