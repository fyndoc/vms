"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3127],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(a),g=n,k=c["".concat(o,".").concat(g)]||c[g]||u[g]||l;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8861:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={custom_edit_url:null,hide_table_of_contents:!1,sidebar_label:"Create Templates",title:"How to Create Templates"},i=void 0,p={unversionedId:"pim/template/create-templates",id:"pim/template/create-templates",title:"How to Create Templates",description:"Creation of a template involves the process of linking one or more categories to which the template should apply. Therefore, before creating a template, make sure you have created categories, see Category Builder to know more.",source:"@site/docs/pim/template/create-templates.md",sourceDirName:"pim/template",slug:"/pim/template/create-templates",permalink:"/vms/docs/pim/template/create-templates",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null,hide_table_of_contents:!1,sidebar_label:"Create Templates",title:"How to Create Templates"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/vms/docs/pim/template/template-builder-intro"},next:{title:"Manage Templates",permalink:"/vms/docs/pim/template/manage-templates"}},o={},m=[{value:"Template Details &amp; Attribute Selection",id:"template-details--attribute-selection",level:2},{value:"Attribute Grouping",id:"attribute-grouping",level:2},{value:"Category Mapping",id:"category-mapping",level:2}],s={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Creation of a template involves the process of linking one or more categories to which the template should apply. Therefore, before creating a template, make sure you have created categories, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/pim/category/category-builder-intro"},"Category Builder")," to know more. ")),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Master Data")," menu, go to ",(0,n.kt)("strong",{parentName:"p"},"Templates")," tab, and click ",(0,n.kt)("strong",{parentName:"p"},"Create Template"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/template-path.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 1: Templates Tab")),(0,n.kt)("br",null),(0,n.kt)("p",null,"The template creation consists of 3 sections:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#template-details--attribute-seclection"},"Template Details & Attribute Selection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#attribute-grouping"},"Attribute Grouping")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#category-mapping"},"Category Mapping"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"template-details--attribute-selection"},"Template Details & Attribute Selection"),(0,n.kt)("p",null,"This process involves naming the template, describing it, and attaching attributes to the template."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a name and description for your template."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/details.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 2a: Template Details")),(0,n.kt)("br",null),(0,n.kt)("p",{parentName:"li"},"Here, we are creating a footwear template. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/new-details.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 2b: Adding Details")),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search the relevant attributes to attach to the template. For e.g. footwear template may require attributes like boot length, arch type, etc. but not attributes such as charging time, battery capacity, etc."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/link-attributes.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 3: Linking Attributes")),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once you attach all the relevant attributes, click ",(0,n.kt)("strong",{parentName:"p"},"Next")," to proceed to the ",(0,n.kt)("a",{parentName:"p",href:"#attribute-grouping"},"Attribute Grouping")," section."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/next.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 4: Next Section")),(0,n.kt)("br",null))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"attribute-grouping"},"Attribute Grouping"),(0,n.kt)("p",null,"Attribute grouping is the process of classifying the attributes in groups. For example, attributes such as length, width, height can be included in a group called as ",(0,n.kt)("inlineCode",{parentName:"p"},"Dimensions")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Measurements"),". Whereas, attributes such as colour, material, style, pattern can be included in a group called as ",(0,n.kt)("inlineCode",{parentName:"p"},"Appearance"),". "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create Attribute Group"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/create-group.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 5: Creating Attribute Groups")),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Give a name to the group, and add the attributes to the group using the dropdown."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/group-details.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 6: Entering The Details")),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/filled-group.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 7a: Sample Details")),(0,n.kt)("br",null),(0,n.kt)("p",{parentName:"li"},"If required, you can create more such groups using ",(0,n.kt)("strong",{parentName:"p"},"Create Attribute Group")," button."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/new-group.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 7b: Adding Additional Groups")),(0,n.kt)("br",null),(0,n.kt)("p",{parentName:"li"},"Here, we have created another group called ",(0,n.kt)("inlineCode",{parentName:"p"},"Dimensions")," containing length, width, and height attributes. Click ",(0,n.kt)("strong",{parentName:"p"},"Next")," to proceed to the ",(0,n.kt)("a",{parentName:"p",href:"#category-mapping"},"Category Mapping")," section."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/next2.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 7c: Next Section")),(0,n.kt)("br",null))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"category-mapping"},"Category Mapping"),(0,n.kt)("p",null,"Category mapping is the process of adding categories to your template. Therefore, whenever your users intend to create/manage products belonging to the category tree(s), your template would be displayed. Which means, the users will be shown only those attributes that were linked to your template."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Components")," dropdown."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/map-template.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 8: Mapping Category Trees")),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Attach one or more category tree to your template. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/choose-tree.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 9: Adding Category Trees")),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create Template"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/create-template.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 10a: Saving The Template")),(0,n.kt)("br",null),(0,n.kt)("p",{parentName:"li"},"Your template would be created. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.pixelbin.io/v2/doc/original/vms/template/template-success.png",alt:"QG7"})),(0,n.kt)("center",null,(0,n.kt)("em",null,"Figure 10b: List Of Templates")),(0,n.kt)("br",null))))}u.isMDXComponent=!0}}]);