"use strict";(self.webpackChunkdocusaurus_theme_zen=self.webpackChunkdocusaurus_theme_zen||[]).push([[162],{65:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7294),r=t(5074);function o(e){var n=e.children,t=e.fallback;return(0,r.Z)()?a.createElement(a.Fragment,null,null==n?void 0:n()):null!=t?t:null}},5939:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7294),r=t(6010),o=t(7176),l=t(1185),i=t(1085),c=t(3768);var u={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function s(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),r=t[0],o=t[1],l=(0,a.useRef)(!1),u=(0,i.Ct)(),s=u.startScroll,m=u.cancelScroll;return(0,i.RF)((function(e,t){var a=e.scrollY,r=null==t?void 0:t.scrollY;r&&(l.current?l.current=!1:a>=r?(m(),o(!1)):a<n?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,c.S)((function(e){e.location.hash&&(l.current=!0,o(!1))})),{shown:r,scrollToTop:function(){return s(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return a.createElement("button",{"aria-label":(0,o.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,u.backToTopButton,n&&u.backToTopButtonShow),type:"button",onClick:t})}},8858:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(102),r=t(7294),o=t(6010),l=t(1109),i=t(2424),c=["sidebar","toc","children"];function u(e){var n=e.sidebar,t=e.toc,u=e.children,s=(0,a.Z)(e,c),m=n&&n.items.length>0;return r.createElement(l.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(i.Z,{sidebar:n}),r.createElement("main",{className:(0,o.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},u),t&&r.createElement("div",{className:"col col--2"},t))))}},7136:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(3117),r=t(7294),o=t(7176),l=t(187);function i(e){var n=e.nextItem,t=e.prevItem;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},t&&r.createElement(l.Z,(0,a.Z)({},t,{subLabel:r.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),n&&r.createElement(l.Z,(0,a.Z)({},n,{subLabel:r.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}},3755:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7294),r=t(7176),o=t(1185),l=t(3117),i=t(102),c=t(6010),u={iconEdit:"iconEdit_Z9Sw"},s=["className"];function m(e){var n=e.className,t=(0,i.Z)(e,s);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(u.iconEdit,n),"aria-hidden":"true"},t),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){var n=e.editUrl;return a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:o.k.common.editThisPage},a.createElement(m,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},187:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7294),r=t(6010),o=t(9372);function l(e){var n=e.permalink,t=e.title,l=e.subLabel,i=e.isNext;return a.createElement(o.Z,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},t))}},468:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(3117),r=t(102),o=t(7294),l=t(6010),i=t(985),c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},u=["className"],s="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function d(e){var n=e.className,t=(0,r.Z)(e,u);return o.createElement("div",{className:(0,l.Z)(c.tableOfContents,"thin-scrollbar",n)},o.createElement(i.Z,(0,a.Z)({},t,{linkClassName:s,linkActiveClassName:m})))}},985:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(3117),r=t(102),o=t(7294),l=t(6328),i=["parentIndex"];function c(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,o=(0,r.Z)(e,i);t>=0?n[t].children.push(o):a.push(o)})),a}function u(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=u({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function s(e){var n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function m(e,n){var t,a,r=n.anchorTopOffset,o=e.find((function(e){return s(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(o))?o:null!=(a=e[e.indexOf(o)-1])?a:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,o.useRef)(0),n=(0,l.L)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function f(e){var n=(0,o.useRef)(void 0),t=d();(0,o.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,o=e.minHeadingLevel,l=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),c=m(i,{anchorTopOffset:t.current}),u=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function v(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?o.createElement("ul",{className:r?void 0:t},n.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(v,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}var g=o.memo(v),h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,s=e.linkClassName,m=void 0===s?"table-of-contents__link":s,d=e.linkActiveClassName,v=void 0===d?void 0:d,p=e.minHeadingLevel,b=e.maxHeadingLevel,E=(0,r.Z)(e,h),k=(0,l.L)(),N=null!=p?p:k.tableOfContents.minHeadingLevel,L=null!=b?b:k.tableOfContents.maxHeadingLevel,Z=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,o.useMemo)((function(){return u({toc:c(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:N,maxHeadingLevel:L});return f((0,o.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:N,maxHeadingLevel:L}}),[m,v,N,L])),o.createElement(g,(0,a.Z)({toc:Z,className:i,linkClassName:m},E))}},8661:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),r=t(6010),o=t(9372),l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){var n=e.permalink,t=e.label,i=e.count;return a.createElement(o.Z,{href:n,className:(0,r.Z)(l.tag,i?l.tagWithCount:l.tagRegular)},t,i&&a.createElement("span",null,i))}},6967:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7294),r=t(6010),o=t(7176),l=t(8661),i={tags:"tags_jXut",tag:"tag_QGVx"};function c(e){var n=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(i.tags,"padding--none","margin-left--sm")},n.map((function(e){var n=e.label,t=e.permalink;return a.createElement("li",{key:t,className:i.tag},a.createElement(l.Z,{label:n,permalink:t}))}))))}},2428:function(e,n,t){t.d(n,{C:function(){return i},n:function(){return l}});var a=t(7294),r=t(5879),o=a.createContext(null);function l(e){var n=e.children,t=e.content,r=e.isBlogPostPage,l=function(e){var n=e.content,t=e.isBlogPostPage;return(0,a.useMemo)((function(){return{metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,toc:n.toc,isBlogPostPage:t}}),[n,t])}({content:t,isBlogPostPage:void 0!==r&&r});return a.createElement(o.Provider,{value:l},n)}function i(){var e=(0,a.useContext)(o);if(null===e)throw new r.i6("BlogPostProvider");return e}},385:function(e,n,t){t.d(n,{c:function(){return u}});var a=t(7294),r=t(9966),o=["zero","one","two","few","many","other"];function l(e){return o.filter((function(n){return e.includes(n)}))}var i={locale:"en",pluralForms:l(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,r.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:l(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),i}var n,t}),[e])}function u(){var e=c();return{selectMessage:function(n,t){return function(e,n,t){var a=e.split("|");if(1===a.length)return a[0];a.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var r=t.select(n),o=t.pluralForms.indexOf(r);return a[Math.min(o,a.length-1)]}(t,n,e)}}}},7870:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(5893),r=t(7294);function o({id:e,repo:n,repoId:o,category:l,categoryId:i,mapping:c,term:u,reactionsEnabled:s,emitMetadata:m,inputPosition:d,theme:f,lang:v,loading:g}){const[h,p]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{h||(t.e(904).then(t.bind(t,904)),p(!0))}),[]),h?(0,a.jsx)("giscus-widget",{id:e,repo:n,repoid:o,category:l,categoryid:i,mapping:c,term:u,reactionsenabled:s,emitmetadata:m,inputposition:d,theme:f,lang:v,loading:g}):null}}}]);