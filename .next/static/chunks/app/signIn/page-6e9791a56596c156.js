(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[979],{1608:function(e,t,r){Promise.resolve().then(r.bind(r,3387))},3387:function(e,t,r){"use strict";var n=r(7437),a=r(4752),o=r(7648),s=r(9376),i=r(2265),l=r(5172);r(9604);var c=r(1118),u=r(8575),f=r(738);t.default=()=>{let e=(0,u.v9)(e=>e.logIn.value.errorCodes),[t,r]=(0,i.useState)(!1),[p,d]=(0,i.useState)(""),[b,m]=(0,i.useState)(null),[v,g]=(0,i.useState)(""),[h,y]=(0,i.useState)(""),j=new a.hJ,O=(0,s.useRouter)();(0,i.useEffect)(()=>{var e;null===(e=localStorage)||void 0===e||e.setItem("user",JSON.stringify(b))},[b]);let w=async()=>{let e=await (0,a.rh)(l.I8,j);O.push("/"),m(e.user)},x=async t=>{t.preventDefault();try{let e=await (0,a.e5)(l.I8,v,h);O.push("/"),m(e.user)}catch(t){if(console.log(t),t instanceof f.ZR){let n=e[t.code];n?(r(!0),d(n)):(r(!0),d("Unknown error"))}else r(!0),d("Unknown error")}};return(0,n.jsx)("div",{className:"logIn-container ",children:(0,n.jsxs)("div",{className:"logIn-field text-center shadow p-3 d-block",children:[(0,n.jsxs)("form",{onSubmit:x,children:[(0,n.jsx)("h4",{className:"pb-1",children:"Sign In"}),(0,n.jsx)("div",{className:"py-3 d-flex align-items-center justify-content-center",children:(0,n.jsx)("input",{className:"d-inline-block ms-1",placeholder:"Enter your email",value:v,onChange:e=>g(e.target.value),type:"text",required:!0})}),(0,n.jsx)("div",{className:"password-container py-3 d-flex align-items-center justify-content-center",children:(0,n.jsx)("input",{className:"d-inline-block ms-1",type:"password",placeholder:"Password",value:h,onChange:e=>y(e.target.value),required:!0})}),t?(0,n.jsx)("div",{className:"errorContainer  text-start pb-0",children:(0,n.jsx)("p",{className:"ms-2",children:p})}):"",(0,n.jsx)("button",{className:"logIn-button btn mt-2 btn-primary btn-lg d-bloc m-auto w-50 text-center",children:"Sign in"})]}),(0,n.jsx)("hr",{}),(0,n.jsx)("button",{onClick:w,className:"googleButton btn btn-light",children:(0,n.jsx)(c.JM8,{})}),(0,n.jsxs)("p",{className:"mt-2",children:["Dont have an account? ",(0,n.jsx)(o.default,{href:"/log-in",children:"Log In"})]})]})})}},5172:function(e,t,r){"use strict";r.d(t,{I8:function(){return s}});var n=r(738),a=r(4752);let o=(0,n.ZF)({apiKey:"AIzaSyCHBlABdPpSZLn9xYiEujdvrPbtl03gTPI",authDomain:"greenclean-73a11.firebaseapp.com",databaseURL:"https://greenclean-73a11-default-rtdb.europe-west1.firebasedatabase.app",projectId:"greenclean-73a11",storageBucket:"greenclean-73a11.appspot.com",messagingSenderId:"570684011225",appId:"1:570684011225:web:7145b783e28898785284c8"}),s=(0,a.v0)(o)},9376:function(e,t,r){"use strict";var n=r(5475);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},9604:function(){},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),s=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:a,size:o,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s),f=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[202,533,680,146,273,575,971,117,744],function(){return e(e.s=1608)}),_N_E=e.O()}]);