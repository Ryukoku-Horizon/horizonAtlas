(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{98:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/progress",function(){return a(4554)}])},6944:(e,t,a)=>{"use strict";a.d(t,{DM:()=>l,O6:()=>r,Yh:()=>i,zY:()=>s});let r={title:"Home",id:"/posts"},s={title:"基礎班カリキュラム",id:"/posts/course/basic"},l={title:"検索",id:"/search"},i={title:"カリキュラム進捗度",id:"/user/progress"}},4554:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var r=a(4848),s=a(6540);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim()};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,s.forwardRef)((e,t)=>{let{color:a="currentColor",size:r=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:o="",children:d,iconNode:u,...p}=e;return(0,s.createElement)("svg",{ref:t,...n,width:r,height:r,stroke:a,strokeWidth:c?24*Number(l)/Number(r):l,className:i("lucide",o),...p},[...u.map(e=>{let[t,a]=e;return(0,s.createElement)(t,a)}),...Array.isArray(d)?d:[d]])}),o=(e,t)=>{let a=(0,s.forwardRef)((a,r)=>{let{className:n,...o}=a;return(0,s.createElement)(c,{ref:r,iconNode:t,className:i("lucide-".concat(l(e)),n),...o})});return a.displayName="".concat(e),a},d=o("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),u=o("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),p=o("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);var h=a(1988);let m=async e=>{let t=await fetch("".concat("https://horizon-atlas-railway-production.up.railway.app","/getDrivefile/").concat(e));return await t.json()},f=async(e,t,a)=>{let r=await fetch("".concat("https://horizon-atlas-railway-production.up.railway.app","/getDrivefile/").concat(e,"/userName/").concat(a,"/").concat(t));return await r.json()};async function x(){return(await m("12ke9QhpI0icBvvCfk6Yyn7wKOeclF4_6OGdheopu-V8")).filter(e=>"TRUE"===e.published)}async function w(e,t){return await Promise.all(e.map(async e=>{let a=await f(e.fileId,t,e.userName),r=e.curriculums.split("/"),s=a.map(a=>{let s=[];for(let l of r)a[l]!==e.notAchievedText&&a[e.userName]===t?s.push({title:l,achieved:!0}):a[l]===e.notAchievedText&&a[e.userName]===t&&s.push({title:l,achieved:!1});return s}).flat();return 0===s.length&&r.map(e=>{s.push({title:e,achieved:!1})}),{title:e.title,progress:s}}))}async function g(e,t){let a=Object.keys(e)[0],r=[];return await Promise.all(e[a].map(async e=>{let a=await f(e.fileId,t,e.userName);r.push({title:e.curriculums,achieved:0!==a.length})})),{title:a,progress:r}}async function y(e){let t=await x(),a=t.filter(e=>"summary"===e.type),r=await w(a,e);for(let a of Object.entries(t.filter(e=>"single"===e.type).reduce((e,t)=>(e[t.title]||(e[t.title]=[]),e[t.title].push(t),e),{})).map(e=>{let[t,a]=e;return{[t]:a}})){let t=await g(a,e);r.push(t)}return r}var v=a(2855),N=a(6944);function b(){let{user:e}=(0,h.WB)(),[t,a]=(0,s.useState)([]),[l,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{(async function(){e&&(i(!0),a(await y(e.name.split("-")[0])),i(!1))})()},[e]),(0,r.jsx)(v.A,{headerProps:{pageNavs:[N.O6,N.Yh]},children:(0,r.jsxs)("div",{className:"min-h-screen text-gray-900 pt-24 px-5",children:[(0,r.jsxs)("div",{className:"text-center mb-10 animate-fadeIn",children:[(0,r.jsxs)("h1",{className:"text-4xl font-extrabold text-neutral-600",children:[null==e?void 0:e.name.split("-")[0],"さんの進捗度"]}),(0,r.jsx)("div",{className:"w-40 mx-auto border-b-4 border-purple-400 mt-4"})]}),l?(0,r.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,r.jsx)(d,{className:"animate-spin text-purple-400",size:48}),(0,r.jsx)("p",{className:"text-lg font-semibold text-gray-700",children:"読み込み中..."})]}):(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 p-8",children:t.map((e,t)=>(0,r.jsxs)("div",{className:"bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow",children:[(0,r.jsx)("h2",{className:"text-xl font-bold text-neutral-500 mb-4",children:e.title}),e.progress.map((e,t)=>(0,r.jsx)(j,{...e},t))]},t))})]})})}let j=e=>{let{title:t,achieved:a}=e;return(0,r.jsx)("div",{className:"mt-3 p-3 rounded-lg ".concat(a?"bg-purple-100 border-l-4 border-purple-500":"bg-gray-100 border-l-4 border-gray-400"," hover:shadow-md transition-shadow"),children:(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[a?(0,r.jsx)(u,{className:"text-purple-700",size:24}):(0,r.jsx)(p,{className:"text-gray-500",size:24}),(0,r.jsx)("span",{className:"text-base font-medium text-gray-700",children:t})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[419,687,354,551,958,4,356,855,636,593,792],()=>t(98)),_N_E=e.O()}]);