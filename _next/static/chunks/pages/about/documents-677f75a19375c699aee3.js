_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("a3WO");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("a3WO");var a=n("BsWD");function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"Laa+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/documents",function(){return n("xGh4")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),o=n("elyg"),s=n("nOHt"),i=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),a=n&&n.asPath||"/",f=c.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],s=n[1];return{href:c,as:e.as?(0,o.resolveHref)(a,e.as):s||c}}),[a,e.href,e.as]),p=f.href,d=f.as,b=e.children,m=e.replace,h=e.shallow,v=e.scroll,j=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var y=c.Children.only(b),_=y&&"object"===typeof y&&y.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),g=r(O,2),x=g[0],w=g[1],E=c.default.useCallback((function(e){x(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,x]);(0,c.useEffect)((function(){var e=w&&t&&(0,o.isLocalURL)(p),r="undefined"!==typeof j?j:n&&n.locale,a=u[p+"%"+d+(r?"%"+r:"")];e&&!a&&l(n,p,d,{locale:r})}),[d,p,w,j,t,n]);var N={ref:E,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:i,scroll:s}))}(e,n,p,d,m,h,v,j)},onMouseEnter:function(e){(0,o.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var k="undefined"!==typeof j?j:n&&n.locale,S=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(d,k,n&&n.locales,n&&n.domainLocales);N.href=S||(0,o.addBasePath)((0,o.addLocale)(d,k,n&&n.defaultLocale))}return c.default.cloneElement(y,N)};t.default=f},tl3V:function(e,t,n){e.exports={title:"documents_title__3tiXS",subtitle:"documents_subtitle__2tciD",highlight:"documents_highlight__1gpq9",link:"documents_link__11V1u",loaderWrapper:"documents_loaderWrapper__3igYW",loader:"documents_loader__X1W_t",left:"documents_left__1kTBc",right:"documents_right__2vTDf",anim:"documents_anim__1vEYO","ui-spinner-rotate-left":"documents_ui-spinner-rotate-left__3SoWF","ui-spinner-rotate-right":"documents_ui-spinner-rotate-right__1KGmF"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,i=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,o=r.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),s.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!o&&!f){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[d,f]};var a=n("q1tI"),c=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var s=new Map},xGh4:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("o0o1"),c=n.n(a),o=n("KQm4");var s=n("BsWD");function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==s.return||s.return()}finally{if(a)throw c}}return n}}(e,t)||Object(s.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n("HaE+"),l=n("q1tI"),f=n("g4pe"),p=n.n(f),d=(n("YFqc"),n("n8Je")),b=n("tl3V"),m=n.n(b),h=n("VjyN").createClient({space:"kwjkl9590afm",accessToken:"Xf-vFH47rjCeM67rN0doBuiFm3dGtyHyeQw9dJiJDYs"});function v(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getEntries({content_type:"orders"});case 2:if(!(t=e.sent).items){e.next=5;break}return e.abrupt("return",t.items);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return _.apply(this,arguments)}function _(){return(_=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getEntries({content_type:"regulations"});case 2:if(!(t=e.sent).items){e.next=5;break}return e.abrupt("return",t.items);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getEntries({content_type:"otherDocements"});case 2:if(!(t=e.sent).items){e.next=5;break}return e.abrupt("return",t.items);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.container,n=Object(l.useState)([]),a=(n[0],n[1],Object(l.useState)([])),s=a[0],f=a[1],b=Object(l.useState)([]),h=b[0],j=b[1],_=Object(l.useState)([]),g=_[0],x=_[1],w=Object(l.useState)(!0),E=w[0],N=w[1];return Object(l.useEffect)((function(){function e(){return(e=Object(u.a)(c.a.mark((function e(){var t,n,r,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([v(),y(),O()]);case 2:t=e.sent,n=i(t,3),r=n[0],a=n[1],s=n[2],f(Object(o.a)(r)),j(Object(o.a)(a)),x(Object(o.a)(s)),setTimeout((function(){N(!1)}),750);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.jsxs)("main",{className:t,children:[Object(r.jsx)(p.a,{children:Object(r.jsx)("title",{children:"\u0412\u0421\u041f \u0424\u041a\u0415\u041f - \u041d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u043e-\u043f\u0440\u0430\u0432\u043e\u0432\u0430 \u0431\u0430\u0437\u0430"})}),Object(r.jsx)("h1",{className:m.a.title,children:"\u041d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u043e-\u043f\u0440\u0430\u0432\u043e\u0432\u0430 \u0431\u0430\u0437\u0430"}),E?Object(r.jsxs)("div",{className:m.a.loaderWrapper,children:["\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f...",Object(r.jsxs)("span",{className:m.a.loader,children:[Object(r.jsx)("span",{className:m.a.left,children:Object(r.jsx)("span",{className:m.a.anim})}),Object(r.jsx)("span",{className:m.a.right,children:Object(r.jsx)("span",{className:m.a.anim})})]})]}):Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{className:m.a.subtitle,children:"\u041d\u0430\u043a\u0430\u0437\u0438"}),Object(r.jsx)(d.a,{documents:s,type:"server"}),Object(r.jsx)("h2",{className:m.a.subtitle,children:"\u041f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044f"}),Object(r.jsx)(d.a,{documents:h,type:"server"}),Object(r.jsx)("h2",{className:m.a.subtitle,children:"\u0406\u043d\u0448\u0456 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438"}),Object(r.jsx)(d.a,{documents:g,type:"server"}),Object(r.jsx)("h2",{className:m.a.subtitle,children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438 \u041c\u041e\u041d"})]})]})}}},[["Laa+",0,1,2,3,8]]]);