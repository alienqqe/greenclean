(()=>{var e={};e.id=979,e.ids=[979],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},4026:e=>{"use strict";e.exports=require("string_decoder")},7360:e=>{"use strict";e.exports=require("url")},8061:e=>{"use strict";e.exports=require("node:assert")},2761:e=>{"use strict";e.exports=require("node:async_hooks")},2254:e=>{"use strict";e.exports=require("node:buffer")},27:e=>{"use strict";e.exports=require("node:console")},6005:e=>{"use strict";e.exports=require("node:crypto")},5714:e=>{"use strict";e.exports=require("node:diagnostics_channel")},5673:e=>{"use strict";e.exports=require("node:events")},8849:e=>{"use strict";e.exports=require("node:http")},2725:e=>{"use strict";e.exports=require("node:http2")},7503:e=>{"use strict";e.exports=require("node:net")},8846:e=>{"use strict";e.exports=require("node:perf_hooks")},9630:e=>{"use strict";e.exports=require("node:querystring")},4492:e=>{"use strict";e.exports=require("node:stream")},1764:e=>{"use strict";e.exports=require("node:tls")},1041:e=>{"use strict";e.exports=require("node:url")},7261:e=>{"use strict";e.exports=require("node:util")},3746:e=>{"use strict";e.exports=require("node:util/types")},4086:e=>{"use strict";e.exports=require("node:worker_threads")},5628:e=>{"use strict";e.exports=require("node:zlib")},6313:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>x,tree:()=>c}),r(7175),r(5607),r(996);var s=r(170),n=r(5002),a=r(3876),i=r.n(a),o=r(6299),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["signIn",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7175)),"C:\\Users\\Yevhenii\\Desktop\\cleaning-company\\app\\signIn\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,9066))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5607)),"C:\\Users\\Yevhenii\\Desktop\\cleaning-company\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,9066))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\Yevhenii\\Desktop\\cleaning-company\\app\\signIn\\page.tsx"],d="/signIn/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/signIn/page",pathname:"/signIn",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5167:(e,t,r)=>{Promise.resolve().then(r.bind(r,3690)),Promise.resolve().then(r.bind(r,8589))},415:(e,t,r)=>{Promise.resolve().then(r.bind(r,6826))},8935:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6624,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,2257,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},3690:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var s=r(7247);function n(){return s.jsx(s.Fragment,{})}r(8964)},1711:(e,t,r)=>{"use strict";r.d(t,{I8:()=>i});var s=r(8132),n=r(5816);let a=(0,s.ZF)({apiKey:"AIzaSyCHBlABdPpSZLn9xYiEujdvrPbtl03gTPI",authDomain:"greenclean-73a11.firebaseapp.com",databaseURL:"https://greenclean-73a11-default-rtdb.europe-west1.firebasedatabase.app",projectId:"greenclean-73a11",storageBucket:"greenclean-73a11.appspot.com",messagingSenderId:"570684011225",appId:"1:570684011225:web:7145b783e28898785284c8"}),i=(0,n.v0)(a)},8589:(e,t,r)=>{"use strict";r.d(t,{ReduxProvider:()=>x});var s=r(7247),n=r(4577),a=r(5816);let i=JSON.parse('{"auth/invalid-email":"Invalid login","auth/weak-password":"Password must contain at least 6 characters","auth/email-already-in-use":"Account with this email is already registered. Sign in","auth/invalid-credential":"Password is not correct. Try again"}'),o={value:{user:localStorage.getItem("user"),errorCodes:i}},l=(0,n.oM)({name:"logIn",initialState:o,reducers:{logOut(e,t){(0,a.w7)(t.payload)}}}),{logOut:c}=l.actions,u=l.reducer,d=(0,n.xC)({reducer:{logIn:u}});var p=r(3102);function x({children:e}){return s.jsx(p.zt,{store:d,children:e})}},6826:(e,t,r)=>{"use strict";r.d(t,{default:()=>p});var s=r(7247),n=r(5816),a=r(9906),i=r(4178),o=r(8964),l=r(1711);r(9686);var c=r(9704),u=r(3102),d=r(8132);let p=()=>{let e=(0,u.v9)(e=>e.logIn.value.errorCodes),[t,r]=(0,o.useState)(!1),[p,x]=(0,o.useState)(""),[m,g]=(0,o.useState)(null),[h,v]=(0,o.useState)(""),[b,f]=(0,o.useState)(""),y=new n.hJ,P=(0,i.useRouter)();(0,o.useEffect)(()=>{localStorage.setItem("user",JSON.stringify(m))},[m]);let j=async()=>{let e=await (0,n.rh)(l.I8,y);P.push("/"),g(e.user)},q=async t=>{t.preventDefault();try{let e=await (0,n.e5)(l.I8,h,b);P.push("/"),g(e.user)}catch(t){if(console.log(t),t instanceof d.ZR){let s=e[t.code];s?(r(!0),x(s)):(r(!0),x("Unknown error"))}else r(!0),x("Unknown error")}};return s.jsx("div",{className:"logIn-container ",children:(0,s.jsxs)("div",{className:"logIn-field text-center shadow p-3 d-block",children:[(0,s.jsxs)("form",{onSubmit:q,children:[s.jsx("h4",{className:"pb-1",children:"Sign In"}),s.jsx("div",{className:"py-3 d-flex align-items-center justify-content-center",children:s.jsx("input",{className:"d-inline-block ms-1",placeholder:"Enter your email",value:h,onChange:e=>v(e.target.value),type:"text",required:!0})}),s.jsx("div",{className:"password-container py-3 d-flex align-items-center justify-content-center",children:s.jsx("input",{className:"d-inline-block ms-1",type:"password",placeholder:"Password",value:b,onChange:e=>f(e.target.value),required:!0})}),t?s.jsx("div",{className:"errorContainer  text-start pb-0",children:s.jsx("p",{className:"ms-2",children:p})}):"",s.jsx("button",{className:"logIn-button btn mt-2 btn-primary btn-lg d-bloc m-auto w-50 text-center",children:"Sign in"})]}),s.jsx("hr",{}),s.jsx("button",{onClick:j,className:"googleButton btn btn-light",children:s.jsx(c.JM8,{})}),(0,s.jsxs)("p",{className:"mt-2",children:["Dont have an account? ",s.jsx(a.default,{href:"/log-in",children:"Log In"})]})]})})}},5607:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(2051),n=r(6694),a=r.n(n),i=r(1512),o=r.n(i);r(7453);var l=r(5347);let c=(0,l.createProxy)(String.raw`C:\Users\Yevhenii\Desktop\cleaning-company\app\AddBootstrap.js#default`);r(3440);let u=(0,l.createProxy)(String.raw`C:\Users\Yevhenii\Desktop\cleaning-company\app\redux\provider.tsx#ReduxProvider`);function d({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:`${a().variable} ${o().variable}`,children:[s.jsx(c,{}),s.jsx(u,{children:e})]})})}},7175:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(2051);r(6269);let n=(0,r(5347).createProxy)(String.raw`C:\Users\Yevhenii\Desktop\cleaning-company\app\signIn\SignInPage.tsx#default`),a=()=>s.jsx(n,{})},9066:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(4564);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)("/cleaning-company",e.params,"favicon.ico")+""}]},3440:()=>{},9686:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[379,356,151,740],()=>r(6313));module.exports=s})();