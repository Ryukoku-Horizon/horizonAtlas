(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[763],{9148:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/tag/[tag]",function(){return s(1768)}])},3067:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var a=s(4848);s(6540);var l=s(1106),r=s.n(l),n=s(9965),i=s.n(n);let o=e=>{let{title:t,tags:s,curriculumId:l}=e.postData,n=e.isPagenationPage;return(0,a.jsx)(r(),{href:"/posts/curriculums/".concat(l,"/").concat(l),children:n?(0,a.jsxs)("section",{className:"mb-4 mx-5 rounded-md p-3 shadow-md hover:shadow-none hover:translate-y-1 hover:bg-neutral-50 transition-all duration-200 border",children:[(0,a.jsxs)("div",{className:"flex w-auto h-9 my-1",children:[(0,a.jsx)(i(),{src:"/horizon-atlas/notion_data/eachPage/".concat(l,"/icon.png"),alt:t,width:30,height:30,className:"relative w-8 h-auto m-0 mr-1 bottom-1"}),(0,a.jsx)("h2",{className:"text-xl font-medium mb-2 line-clamp-1",children:t})]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 mt-1",children:s.map((e,t)=>(0,a.jsx)("span",{className:"text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md",children:e},t))})]}):(0,a.jsxs)("section",{className:"mb-4 mx-5 rounded-md p-3 shadow-md hover:shadow-none hover:translate-y-1 hover:bg-neutral-50 transition-all duration-200 border",children:[(0,a.jsxs)("div",{className:"flex w-auto h-9 my-1",children:[(0,a.jsx)(i(),{src:"/horizon-atlas/notion_data/eachPage/".concat(l,"/icon.png"),alt:t,width:30,height:30,className:"w-9 h-auto m-0 mr-1 relative bottom-1"}),(0,a.jsx)("h2",{className:"text-xl font-medium mb-2 mr-1 line-clamp-1",children:t})]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 mt-1",children:s.map((e,t)=>(0,a.jsx)("span",{className:"text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md",children:e},t))})]})})}},1259:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var a=s(4848);s(6540);let l=e=>{let{numberOfPage:t,currentPage:s,setPage:l}=e,r=[];for(let e=0;e<t;e++)r.push(e+1);return 1===t?null:(0,a.jsx)("section",{className:"mb-12 lg:w-1/2 mx-auto rounded-md p-5",children:(0,a.jsx)("ul",{className:"flex items-center justify-center gap-4",children:r.map((e,t)=>s===e?(0,a.jsx)("li",{className:"bg-blue-400 text-white rounded-lg w-6 h-8 relative shadow-xl",children:(0,a.jsx)("button",{className:"absolute shadow-2xl top-2/4  left-1/4 -translate-y-2/4",children:e})},t):(0,a.jsx)("li",{className:"rounded-lg w-6 h-8 relative shadow-xl",children:(0,a.jsx)("button",{onClick:()=>{l(e),window.scrollTo({top:0,behavior:"smooth"})},className:"absolute shadow-2xl top-2/4  left-1/4 -translate-y-2/4",children:e})},t))})})}},3902:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var a=s(4848),l=s(1106),r=s.n(l),n=s(6540);let i=function(e){let{allTags:t}=e,[s,l]=(0,n.useState)(!1),[i,o]=(0,n.useState)(0);return(0,n.useEffect)(()=>{if(void 0!==window){let e=()=>{o(window.innerWidth)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}},[]),(0,a.jsxs)("section",{className:"bg-white border border-gray-200 rounded-lg p-5 shadow-lg",children:[(0,a.jsx)("div",{className:"font-semibold text-gray-800 mb-4 text-lg",children:"タグ検索"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:(s?t:t.slice(0,Math.trunc(i/100))).map((e,t)=>(0,a.jsx)(r(),{href:"/posts/tag/".concat(e),children:(0,a.jsx)("span",{className:"px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full cursor-pointer hover:bg-gray-200 transition-all",children:e})},t))}),t.length>Math.trunc(i/100)&&(0,a.jsx)("div",{className:"mt-3 flex justify-end",children:(0,a.jsx)("button",{className:"text-purple-600 hover:text-purple-700 text-sm font-medium transition-all",onClick:()=>l(!s),children:s?"view less":"view more..."})})]})}},6554:(e,t,s)=>{"use strict";s.d(t,{g:()=>a});let a=6},6944:(e,t,s)=>{"use strict";s.d(t,{DM:()=>r,O6:()=>a,Yh:()=>n,zY:()=>l});let a={title:"Home",id:"/posts"},l={title:"基礎班カリキュラム",id:"/posts/course/basic"},r={title:"検索",id:"/search"},n={title:"カリキュラム進捗度",id:"/user/progress"}},9004:(e,t,s)=>{"use strict";s.d(t,{Dc:()=>r,lg:()=>l});var a=s(6554);let l=e=>e.length%a.g!=0?Math.trunc(e.length/a.g)+1:Math.trunc(e.length/a.g),r=async(e,t)=>t.filter(t=>t.visibility.find(t=>t===e))},1768:(e,t,s)=>{"use strict";s.r(t),s.d(t,{__N_SSG:()=>h,default:()=>u});var a=s(4848),l=s(3067),r=s(1259),n=s(9004),i=s(6944),o=s(2855),d=s(3902),c=s(6540),m=s(6554),h=!0;let u=e=>{let{posts:t,currentTag:s,allTags:h}=e,[u,x]=(0,c.useState)(1),g=(0,n.lg)(t),p=m.g;return(0,a.jsx)(o.A,{headerProps:{pageNavs:[i.O6,{title:"タグ検索：".concat(s),id:"/posts/tag/".concat(s)}]},children:(0,a.jsxs)("div",{className:"h-full w-full mx-auto font-mono",children:[(0,a.jsxs)("main",{className:"mt-20 mx-5 md:mx-16 mb-3 pt-4",children:[(0,a.jsx)(d.A,{allTags:h}),(0,a.jsx)("section",{className:"pt-5",children:t.slice(p*(u-1),p*u).map((e,t)=>(0,a.jsx)("div",{children:(0,a.jsx)(l.A,{postData:e,isPagenationPage:!0})},t))})]}),(0,a.jsx)(r.A,{numberOfPage:g,currentPage:u,setPage:x})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[419,687,354,551,958,4,356,855,636,593,792],()=>t(9148)),_N_E=e.O()}]);