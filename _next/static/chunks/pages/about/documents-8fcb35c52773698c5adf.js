_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"Laa+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/documents",function(){return n("xGh4")}])},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("BsWD");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),s=n("elyg"),o=n("nOHt"),i=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),a=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],o=n[1];return{href:c,as:e.as?(0,s.resolveHref)(a,e.as):o||c}}),[a,e.href,e.as]),p=f.href,d=f.as,h=e.children,b=e.replace,m=e.shallow,v=e.scroll,j=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var _=c.Children.only(h),y=_&&"object"===typeof _&&_.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),x=r(O,2),g=x[0],w=x[1],N=c.default.useCallback((function(e){g(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,g]);(0,c.useEffect)((function(){var e=w&&t&&(0,s.isLocalURL)(p),r="undefined"!==typeof j?j:n&&n.locale,a=u[p+"%"+d+(r?"%"+r:"")];e&&!a&&l(n,p,d,{locale:r})}),[d,p,w,j,t,n]);var k={ref:N,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:i,scroll:o}))}(e,n,p,d,b,m,v,j)},onMouseEnter:function(e){(0,s.isLocalURL)(p)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var E="undefined"!==typeof j?j:n&&n.locale,L=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(d,E,n&&n.locales,n&&n.domainLocales);k.href=L||(0,s.addBasePath)((0,s.addLocale)(d,E,n&&n.defaultLocale))}return c.default.cloneElement(_,k)};t.default=f},tl3V:function(e,t,n){e.exports={title:"documents_title__3tiXS",subtitle:"documents_subtitle__2tciD",highlight:"documents_highlight__1gpq9",link:"documents_link__11V1u",loaderWrapper:"documents_loaderWrapper__3igYW",loader:"documents_loader__X1W_t",left:"documents_left__1kTBc",right:"documents_right__2vTDf",anim:"documents_anim__1vEYO","ui-spinner-rotate-left":"documents_ui-spinner-rotate-left__3SoWF","ui-spinner-rotate-right":"documents_ui-spinner-rotate-right__1KGmF"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,s=r.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!s&&!f){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[d,f]};var a=n("q1tI"),c=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var o=new Map},xGh4:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("o0o1"),c=n.n(a),s=n("KQm4"),o=n("ODXe"),i=n("HaE+"),u=n("q1tI"),l=n("g4pe"),f=n.n(l),p=(n("YFqc"),n("n8Je")),d=n("tl3V"),h=n.n(d),b=n("VjyN").createClient({space:"kwjkl9590afm",accessToken:"Xf-vFH47rjCeM67rN0doBuiFm3dGtyHyeQw9dJiJDYs"});function m(){return v.apply(this,arguments)}function v(){return(v=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getEntries({content_type:"orders"});case 2:if(!(t=e.sent).items){e.next=5;break}return e.abrupt("return",t.items);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getEntries({content_type:"regulations"});case 2:if(!(t=e.sent).items){e.next=5;break}return e.abrupt("return",t.items);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getEntries({content_type:"otherDocements"});case 2:if(!(t=e.sent).items){e.next=5;break}return e.abrupt("return",t.items);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.container,n=Object(u.useState)([]),a=(n[0],n[1],Object(u.useState)([])),l=a[0],d=a[1],b=Object(u.useState)([]),v=b[0],_=b[1],O=Object(u.useState)([]),x=O[0],g=O[1],w=Object(u.useState)(!0),N=w[0],k=w[1];return Object(u.useEffect)((function(){function e(){return(e=Object(i.a)(c.a.mark((function e(){var t,n,r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([m(),j(),y()]);case 2:t=e.sent,n=Object(o.a)(t,3),r=n[0],a=n[1],i=n[2],d(Object(s.a)(r)),_(Object(s.a)(a)),g(Object(s.a)(i)),setTimeout((function(){k(!1)}),750);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.jsxs)("main",{className:t,children:[Object(r.jsx)(f.a,{children:Object(r.jsx)("title",{children:"\u0412\u0421\u041f \u0424\u041a\u0415\u041f - \u041d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u043e-\u043f\u0440\u0430\u0432\u043e\u0432\u0430 \u0431\u0430\u0437\u0430"})}),Object(r.jsx)("h1",{className:h.a.title,children:"\u041d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u043e-\u043f\u0440\u0430\u0432\u043e\u0432\u0430 \u0431\u0430\u0437\u0430"}),N?Object(r.jsxs)("div",{className:h.a.loaderWrapper,children:["\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f...",Object(r.jsxs)("span",{className:h.a.loader,children:[Object(r.jsx)("span",{className:h.a.left,children:Object(r.jsx)("span",{className:h.a.anim})}),Object(r.jsx)("span",{className:h.a.right,children:Object(r.jsx)("span",{className:h.a.anim})})]})]}):Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{className:h.a.subtitle,children:"\u041d\u0430\u043a\u0430\u0437\u0438"}),Object(r.jsx)(p.a,{documents:l,type:"server"}),Object(r.jsx)("h2",{className:h.a.subtitle,children:"\u041f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044f"}),Object(r.jsx)(p.a,{documents:v,type:"server"}),Object(r.jsx)("h2",{className:h.a.subtitle,children:"\u0406\u043d\u0448\u0456 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438"}),Object(r.jsx)(p.a,{documents:x,type:"server"}),Object(r.jsx)("h2",{className:h.a.subtitle,children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438 \u041c\u041e\u041d"})]})]})}}},[["Laa+",0,1,2,3,8]]]);