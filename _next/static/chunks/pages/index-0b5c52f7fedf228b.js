(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3893)}])},3893:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var a=t(4848),i=t(1988),n=t(6715),r=t(6540);function l(){let{loginWithRedirect:e,logout:s,isAuthenticated:t,user:l}=(0,i.WB)(),[c,o]=(0,r.useState)(!1),x="https://ryukoku-horizon.github.io/horizon-atlas",d=(0,n.useRouter)();return(0,r.useEffect)(()=>{t&&(async()=>{let e=l.profile;console.log("roles",l.given_name),e?o(!0):(alert("Horizonメンバーアカウントのみログインできます"),s({logoutParams:{returnTo:x}}))})()},[t]),(0,r.useEffect)(()=>{c&&d.push("/posts")},[c]),(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("button",{className:"flex items-center justify-center px-4 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-sm transition duration-300 hover:bg-gray-100",onClick:()=>e({authorizationParams:{redirect_uri:x,connection:"Discord-custom-auth",scope:"identify guilds"}}),children:[(0,a.jsx)("img",{src:"/horizon-atlas/discord_logo.png",alt:"discord",className:"w-5 h-5 mr-2"}),"Discordでログイン"]})})}var c=t(3368),o=t.n(c),x=t(9965),d=t.n(x),h=t(6191);function m(){return(0,a.jsxs)("div",{className:"min-h-screen text-gray-900 diagonal-bg",children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"HorizonAtlas"}),(0,a.jsx)("meta",{name:"description",content:"HorizonAtlasは、学習カリキュラムをまとめたHorizon部員専用のサービスです。"}),(0,a.jsx)("meta",{property:"og:image",content:"/horizon-atlas/app_image.png"}),(0,a.jsx)("link",{rel:"icon",href:"/horizon-atlas/favicon.ico"})]}),(0,a.jsxs)("header",{className:"bg-neutral-50 text-white py-4",children:[(0,a.jsx)("div",{className:"container mx-auto flex justify-between items-center px-4",children:(0,a.jsx)("div",{children:(0,a.jsx)(d(),{src:"/horizon-atlas/logo_.png",alt:"",width:32,height:16,className:"w-32 top-[-20px] h-auto absolute left-0"})})}),(0,a.jsx)("div",{className:"h-7"})]}),(0,a.jsxs)("main",{className:"container mx-auto px-4 py-16 text-center",children:[(0,a.jsxs)("section",{className:"py-16",children:[(0,a.jsxs)(h.P.h2,{className:"text-5xl font-bold text-gray-800",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[["W","e","l","c","o","m","e"," ","t","o"," "].map((e,s)=>(0,a.jsx)(h.P.span,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.05,delay:.1*s},children:e},s)),(0,a.jsx)(h.P.span,{className:"text-purple-700",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:1},children:"HorizonAtlas"})]}),(0,a.jsx)("p",{className:"text-lg mt-4 text-gray-600",children:"プログラミング部Horizonで使用する学習資料を簡単に閲覧、検索できます。"}),(0,a.jsx)("div",{className:"mt-8 flex justify-center",children:(0,a.jsx)(l,{})}),(0,a.jsx)("div",{className:"mt-2 text-sm text-gray-500",children:"⚠️Horizonサーバーのメンバーアカウントのみログインできます"})]}),(0,a.jsxs)("section",{id:"features",className:"py-16 px-6 bg-gray-100 rounded-xl shadow-lg",children:[(0,a.jsx)("h3",{className:"text-3xl font-bold text-gray-800",children:"Features"}),(0,a.jsxs)("ul",{className:"mt-6 space-y-4 text-lg text-gray-700",children:[(0,a.jsxs)("li",{className:"flex items-center space-x-2",children:[(0,a.jsx)("span",{className:"text-purple-700 text-xl",children:"✔️"})," ",(0,a.jsx)("span",{children:"資料のカテゴリ別整理"})]}),(0,a.jsxs)("li",{className:"flex items-center space-x-2",children:[(0,a.jsx)("span",{className:"text-purple-700 text-xl",children:"✔️"})," ",(0,a.jsx)("span",{children:"Horizon部員全員のみアクセス可能"})]}),(0,a.jsxs)("li",{className:"flex items-center space-x-2",children:[(0,a.jsx)("span",{className:"text-purple-700 text-xl",children:"✔️"})," ",(0,a.jsx)("span",{children:"最新の資料アップロードと検索機能"})]})]})]})]}),(0,a.jsx)("footer",{className:"bg-gray-200 text-gray-700 py-4 text-center",children:(0,a.jsx)("p",{className:"text-sm",children:"\xa9 20245 Ryukoku Horizon"})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[4,191,636,593,792],()=>s(2022)),_N_E=e.O()}]);