(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[238],{3437:function(e,t,r){Promise.resolve().then(r.bind(r,6539))},6539:function(e,t,r){"use strict";var n=r(7437),a=r(2265);r(2423);var o=r(5172),s=r(4752),l=r(9376),i=r(7648),c=r(1118),u=r(738),f=r(8575);t.default=()=>{let e=(0,f.v9)(e=>e.logIn.value.errorCodes),[t,r]=(0,a.useState)(!1),[p,d]=(0,a.useState)(""),[b,m]=(0,a.useState)(null),[v,g]=(0,a.useState)(""),[h,y]=(0,a.useState)(""),j=new s.hJ,O=(0,l.useRouter)();(0,a.useEffect)(()=>{var e;null===(e=localStorage)||void 0===e||e.setItem("user",JSON.stringify(b))},[b]);let w=async()=>{let e=await (0,s.rh)(o.I8,j);O.push("/"),m(e.user)},x=async t=>{t.preventDefault();try{let e=await (0,s.Xb)(o.I8,v,h);m(e.user),O.push("/")}catch(t){if(console.log(t),t instanceof u.ZR){let n=e[t.code];n?(r(!0),d(n)):(r(!0),d("Unknown error"))}else r(!0),d("Unknown error")}};return(0,n.jsx)("div",{className:"logIn-container ",children:(0,n.jsxs)("div",{className:"logIn-field text-center shadow p-3 d-block",children:[(0,n.jsxs)("form",{onSubmit:x,children:[(0,n.jsx)("h4",{className:"pb-1",children:"Log In"}),(0,n.jsx)("div",{className:"py-3 d-flex  align-items-center justify-content-center",children:(0,n.jsx)("input",{className:"d-inline-block ms-1",placeholder:"Enter your email",name:"email",value:v,onChange:e=>g(e.target.value),type:"text",required:!0})}),(0,n.jsx)("div",{className:"password-container py-3 d-flex align-items-center justify-content-center",children:(0,n.jsx)("input",{className:"d-inline-block ms-1",placeholder:"Password",type:"password",value:h,onChange:e=>y(e.target.value),required:!0})}),t?(0,n.jsx)("div",{className:"errorContainer  text-start pb-0",children:(0,n.jsx)("p",{className:"ms-2",children:p})}):"",(0,n.jsx)("button",{className:"logIn-button btn mt-4 btn-primary btn-lg d-bloc m-auto w-50 text-center",children:"Log in"})]}),(0,n.jsx)("hr",{}),(0,n.jsx)("button",{onClick:w,className:"googleButton btn btn-light",children:(0,n.jsx)(c.JM8,{})}),(0,n.jsxs)("p",{className:"mt-2",children:["Already have an account? ",(0,n.jsx)(i.default,{href:"/signIn",children:"Sign In"})]})]})})}},5172:function(e,t,r){"use strict";r.d(t,{I8:function(){return s}});var n=r(738),a=r(4752);let o=(0,n.ZF)({apiKey:"AIzaSyCHBlABdPpSZLn9xYiEujdvrPbtl03gTPI",authDomain:"greenclean-73a11.firebaseapp.com",databaseURL:"https://greenclean-73a11-default-rtdb.europe-west1.firebasedatabase.app",projectId:"greenclean-73a11",storageBucket:"greenclean-73a11.appspot.com",messagingSenderId:"570684011225",appId:"1:570684011225:web:7145b783e28898785284c8"}),s=(0,a.v0)(o)},9376:function(e,t,r){"use strict";var n=r(5475);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},2423:function(){},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),s=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:a,size:o,title:i}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s),f=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[850,533,680,146,273,575,971,117,744],function(){return e(e.s=3437)}),_N_E=e.O()}]);