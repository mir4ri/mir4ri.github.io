_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"1ZRW":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return u}));var r=n("nKUr"),o=n("YFqc"),a=n.n(o),c=n("rpTo"),i=n.n(c),u=!0;t.default=function(e){var t=e.items;return Object(r.jsxs)("main",{children:[Object(r.jsx)("h1",{className:i.a.title,children:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f"}),t.map((function(e){return Object(r.jsx)(a.a,{href:"/about/department/".concat(e.sys.id),children:Object(r.jsx)("a",{className:i.a.link,children:e.fields.title})},e.sys.id)}))]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),c=n("elyg"),i=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,_=e.replace,b=e.shallow,h=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=a.Children.only(v),g=y&&"object"===typeof y&&y.ref,k=(0,u.useIntersection)({rootMargin:"200px"}),w=r(k,2),E=w[0],L=w[1],M=a.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);(0,a.useEffect)((function(){var e=L&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof m?m:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,L,m,t,n]);var N={ref:M,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i}))}(e,n,d,p,_,b,h,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var j="undefined"!==typeof m?m:n&&n.locale,C=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(p,j,n&&n.locales,n&&n.domainLocales);N.href=C||(0,c.addBasePath)((0,c.addLocale)(p,j,n&&n.defaultLocale))}return a.default.cloneElement(y,N)};t.default=f},mMUa:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/department",function(){return n("1ZRW")}])},rpTo:function(e,t,n){e.exports={title:"about_title__2OkPi",subtitle:"about_subtitle__2hUiC",aboutCollege:"about_aboutCollege__1Nv0P",personsAndDocuments:"about_personsAndDocuments__2kPdr",persons:"about_persons__1fJ6j",documentsLink:"about_documentsLink__BHYiv",link:"about_link__PF1NX"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("q1tI"),a=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["mMUa",0,1,2,3]]]);