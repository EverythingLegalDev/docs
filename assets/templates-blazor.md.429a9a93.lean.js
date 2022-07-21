import{_ as h,a as m,b as y}from"./chunks/booking-new-validation-server.7ba90827.js";import{_ as w,a as f}from"./chunks/fileupload-blazor-example.53b30276.js";import{f as b,r as v,x as q,o as l,c as u,b as n,y as A,z as x,d as e,u as o,A as T,e as a,a as C}from"./app.c4573477.js";import{I as i}from"./chunks/iconify.d216577c.js";const S={class:"w-full flex flex-col justify-center text-center"},z={id:"empty",class:"mt-4 mb-2"},P={class:"flex justify-center mb-8"},B={class:"w-70"},I={class:"w-full flex flex-col justify-center text-center"},R={class:"mb-2"},D={class:"flex justify-center text-center"},_=["href"],N={class:"bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600 dark:border-2 dark:border-pink-600 dark:hover:border-blue-600",style:{"min-width":"150px"}},M={class:"text-center font-extrabold flex items-center justify-center mb-2"},W={class:"text-4xl text-blue-400 my-3"},j=n("div",{class:"text-xl font-medium text-gray-700"},"Blazor WASM",-1),E=n("div",{class:"flex justify-center h-8"},null,-1),U={class:"archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400"},F=n("div",{class:"count mt-1 text-gray-400 text-sm"},null,-1),O=b({setup(r){const t=v("MyApp"),c=q(()=>(t.value||"MyApp")+".zip"),k=p=>`https://account.servicestack.net/archive/${p}?Name=${t.value||"MyApp"}`,d=p=>{const s=p.charCode;s>=65&&s<=90||s>=97&&s<=122||s>=48&&s<=57||s===95||p.preventDefault()};return(p,s)=>(l(),u("div",null,[n("section",S,[n("div",z,[n("div",P,[n("div",B,[A(n("input",{"onUpdate:modelValue":s[0]||(s[0]=g=>t.value=g),type:"text",placeholder:"Project Name",autocorrect:"off",spellcheck:"false",onKeypress:d,class:"mt-1 text-lg block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"},null,544),[[x,t.value]])])])])]),n("section",I,[n("div",R,[n("div",D,[n("a",{class:"archive-url hover:no-underline netcoretemplates_empty",href:k("NetCoreTemplates/blazor-wasm")},[n("div",N,[n("div",M,[n("div",W,[e(o(i),{icon:"simple-icons:blazor",class:"w-14 h-14 text-purple-500"})])]),j,E,n("span",U,T(o(c)),1),F])],8,_)])])])]))}}),$={class:"my-8 ml-20 flex flex-col items-center"},H=n("h1",null,"Blazor WebAssembly Template",-1),L=n("p",null,[a("The feature-rich Blazor WASM template is ideal for teams with strong C# skills building Line Of Business (LOB) applications. Utilizing Blazor WebAssembly (WASM) with a ServiceStack backend yields an optimal frictionless "),n("a",{href:"/api-first-development"},"API First development model"),a(" where UIs can bind directly to Typed DTOs whilst benefiting from ServiceStack's "),n("a",{href:"/validation"},"structured error handling"),a(" & rich contextual form validation binding.")],-1),V=n("p",null,[a("By utilizing ServiceStack's "),n("a",{href:"/physical-project-structure"},"decoupled project structure"),a(", combined with Blazor enabling C# on the client, we're able to get complete reuse of your APIs shared DTOs as-is to enable an end-to-end Typed API automatically free from any additional tooling or code-gen complexity.")],-1),G=n("iframe",{width:"980",height:"551",src:"https://www.youtube.com/embed/TIgjMf_vtCI",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""},null,-1),J=n("h2",{id:"getting-started",tabindex:"-1"},[a("Getting Started "),n("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#")],-1),Q=n("p",null,[a("If you have the "),n("a",{href:"/dotnet-new"},"x dotnet tool"),a(" installed you can create a new Blazor WASM Project with:")],-1),K=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"x new blazor-wasm ProjectName")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),X=n("h3",{id:"download-new-c-blazor-wasm-project",tabindex:"-1"},[a("Download new C# Blazor WASM Project "),n("a",{class:"header-anchor",href:"#download-new-c-blazor-wasm-project","aria-hidden":"true"},"#")],-1),Y=n("p",null,"Alternatively you can create & download a new Blazor Project with your preferred Project Name below:",-1),Z=C("",141),en='{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started"},{"level":3,"title":"Download new C# Blazor WASM Project","slug":"download-new-c-blazor-wasm-project"},{"level":2,"title":"Api and ApiAsync methods","slug":"api-and-apiasync-methods"},{"level":3,"title":"The ApiResult way","slug":"the-apiresult-way"},{"level":2,"title":"JSON API Client","slug":"json-api-client"},{"level":3,"title":"Public Pages & Components","slug":"public-pages-components"},{"level":3,"title":"Protected Pages & Components","slug":"protected-pages-components"},{"level":2,"title":"Benefits of Shared DTOs","slug":"benefits-of-shared-dtos"},{"level":3,"title":"TypeScript Example","slug":"typescript-example"},{"level":3,"title":"Blazor WASM Example","slug":"blazor-wasm-example"},{"level":2,"title":"ServiceStack.Blazor","slug":"servicestack-blazor"},{"level":3,"title":"Built-in Blazor and Tailwind UI Components","slug":"built-in-blazor-and-tailwind-ui-components"},{"level":3,"title":"Themable","slug":"themable"},{"level":3,"title":"Bookings CRUD","slug":"bookings-crud"},{"level":2,"title":"Blazor Trade-offs","slug":"blazor-trade-offs"},{"level":3,"title":"Improving Startup Performance","slug":"improving-startup-performance"},{"level":3,"title":"Increasing Perceived Performance","slug":"increasing-perceived-performance"},{"level":3,"title":"Improving UX with Prerendering","slug":"improving-ux-with-prerendering"},{"level":3,"title":"Prerendering Markdown Content","slug":"prerendering-markdown-content"},{"level":3,"title":"PrerenderMarkdown Task","slug":"prerendermarkdown-task"},{"level":2,"title":"ServiceStack.Blazor FileUpload Control","slug":"servicestack-blazor-fileupload-control"}],"relativePath":"templates-blazor.md"}',nn={},on=Object.assign(nn,{setup(r){return(t,c)=>(l(),u("div",null,[n("div",$,[n("div",null,[e(o(i),{icon:"simple-icons:blazor",class:"w-44 h-44 text-purple-600"})]),H]),L,V,G,J,Q,K,X,Y,e(O,{class:"pb-8"}),Z]))}});export{en as __pageData,on as default};
