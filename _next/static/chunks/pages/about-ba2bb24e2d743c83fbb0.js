_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"/W3R":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("bOvJ")}])},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";var r=n("lSNA");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(a=n("Xuae"))&&a.__esModule?a:{default:a},u=n("lwAK"),s=n("FYa8"),l=n("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function b(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var l=h[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&c||!d.has(f)?(d.add(f),r[l]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:a})}))}function v(e){var t=e.children,n=(0,c.useContext)(u.AmpStateContext),r=(0,c.useContext)(s.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:b,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}v.rewind=function(){};var m=v;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},bOvJ:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("g4pe"),a=n.n(o),c=n("YFqc"),i=n.n(c),u=n("rpTo"),s=n.n(u);t.default=function(e){var t=e.container;return Object(r.jsxs)("main",{className:t,children:[Object(r.jsx)(a.a,{children:Object(r.jsx)("title",{children:"\u0412\u0421\u041f \u0424\u041a\u0415\u041f - \u041f\u0440\u043e \u043a\u043e\u043b\u0435\u0434\u0436"})}),Object(r.jsx)("h2",{className:s.a.title,children:"\u041f\u0440\u043e \u043a\u043e\u043b\u0435\u0434\u0436"}),Object(r.jsx)("p",{className:s.a.aboutCollege,children:"\u0424\u0430\u0445\u043e\u0432\u0438\u0439 \u043a\u043e\u043b\u0435\u0434\u0436 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0438\u0445 \u043f\u0440\u0438\u043b\u0430\u0434\u0456\u0432 \u0406\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043a\u0456\u0432\u0441\u044c\u043a\u043e\u0433\u043e \u043d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0435\u0445\u043d\u0456\u0447\u043d\u043e\u0433\u043e \u0443\u043d\u0456\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0443 \u043d\u0430\u0444\u0442\u0438 \u0456 \u0433\u0430\u0437\u0443 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u044e \u041a\u0430\u0431\u0456\u043d\u0435\u0442\u0443 \u041c\u0456\u043d\u0456\u0441\u0442\u0440\u0456\u0432 \u0423\u043a\u0440\u0430\u0457\u043d\u0438 \u2116 526 \u0432\u0456\u0434 29 \u0442\u0440\u0430\u0432\u043d\u044f 1997 \u0440\u043e\u043a\u0443 \u0442\u0430 \u043d\u0430\u043a\u0430\u0437\u043e\u043c \u041c\u0456\u043d\u0456\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u043e\u0441\u0432\u0456\u0442\u0438 \u0423\u043a\u0440\u0430\u0457\u043d\u0438 \u2116 218 \u0432\u0456\u0434 20.06.1997 \u0440\u043e\u043a\u0443 \u043d\u0430 \u0431\u0430\u0437\u0456 \u0406\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043a\u0456\u0432\u0441\u044c\u043a\u043e\u0433\u043e \u0442\u0435\u0445\u043d\u0456\u043a\u0443\u043c\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0438\u0445 \u043f\u0440\u0438\u043b\u0430\u0434\u0456\u0432, \u044f\u043a\u0438\u0439 \u043b\u0456\u043a\u0432\u0456\u0434\u043e\u0432\u0430\u043d\u043e."}),Object(r.jsx)("p",{className:s.a.aboutCollege,children:"\u0406\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043a\u0456\u0432\u0441\u044c\u043a\u0438\u0439 \u0432\u0435\u0447\u0456\u0440\u043d\u0456\u0439 \u0442\u0435\u0445\u043d\u0456\u043a\u0443\u043c \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0438\u0445 \u043f\u0440\u0438\u043b\u0430\u0434\u0456\u0432 \u0431\u0443\u043b\u043e \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u041c\u0456\u043d\u0456\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043e\u043c \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u0440\u043e\u043c\u0438\u0441\u043b\u043e\u0432\u043e\u0441\u0442\u0456 \u043a\u043e\u043b\u0438\u0448\u043d\u044c\u043e\u0457 \u0434\u0435\u0440\u0436\u0430\u0432\u0438 (\u043d\u0430\u043a\u0430\u0437 \u2116 499-\u0414\u0421\u041c \u0432\u0456\u0434 26 \u0441\u0435\u0440\u043f\u043d\u044f \u0432 1981 \u0440\u043e\u0446\u0456), \u0430 1988 \u0440\u043e\u0446\u0456 \u043d\u0430\u043a\u0430\u0437\u043e\u043c \u0446\u044c\u043e\u0433\u043e \u0436 \u041c\u0456\u043d\u0456\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u2116 921 \u0432\u0456\u0434 08 \u0433\u0440\u0443\u0434\u043d\u044f \u0442\u0435\u0445\u043d\u0456\u043a\u0443\u043c \u0431\u0443\u043b\u043e \u0440\u0435\u043e\u0440\u0433\u0430\u043d\u0456\u0437\u043e\u0432\u0430\u043d\u043e \u0432 \u0434\u0435\u043d\u043d\u0438\u0439 \u0406\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043a\u0456\u0432\u0441\u044c\u043a\u0438\u0439 \u0442\u0435\u0445\u043d\u0456\u043a\u0443\u043c \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0438\u0445 \u043f\u0440\u0438\u043b\u0430\u0434\u0456\u0432, 29 \u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430 1991 \u0440\u043e\u043a\u0443 \u043d\u0430\u043a\u0430\u0437\u043e\u043c \u041c\u0456\u043d\u0456\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0432\u0438\u0449\u043e\u0457 \u043e\u0441\u0432\u0456\u0442\u0438 \u0423\u043a\u0440\u0430\u0457\u043d\u0438 \u2116 231 \u0442\u0435\u0445\u043d\u0456\u043a\u0443\u043c \u043f\u0456\u0434\u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u0430\u043d\u0438\u0439 \u041c\u0456\u043d\u0456\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0443 \u0432\u0438\u0449\u043e\u0457 \u043e\u0441\u0432\u0456\u0442\u0438 \u0423\u043a\u0440\u0430\u0457\u043d\u0438."}),Object(r.jsx)("p",{className:s.a.aboutCollege,children:"\u0424\u0430\u0445\u043e\u0432\u0438\u0439 \u043a\u043e\u043b\u0435\u0434\u0436 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0438\u0445 \u043f\u0440\u0438\u043b\u0430\u0434\u0456\u0432 \u0406\u0424\u041d\u0422\u0423\u041d\u0413\u0443 \u2013 \u0446\u0435 \u0441\u0443\u0447\u0430\u0441\u043d\u0438\u0439 \u043d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0438\u0439 \u0437\u0430\u043a\u043b\u0430\u0434 \u0432 \u044f\u043a\u043e\u043c\u0443 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u0432\u0441\u0456 \u0443\u043c\u043e\u0432\u0438 \u0434\u043b\u044f \u043f\u0456\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0444\u0430\u0445\u043e\u0432\u043e\u0433\u043e \u043c\u043e\u043b\u043e\u0434\u0448\u043e\u0433\u043e \u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0430, \u044f\u043a\u0438\u0439 \u0437\u0434\u0430\u0442\u0435\u043d \u0432\u0438\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0446\u0456\u044e \u043d\u0430 \u0440\u0438\u043d\u043a\u0443 \u043f\u0440\u0430\u0446\u0456."}),Object(r.jsxs)("section",{className:s.a.personsAndDocuments,children:[Object(r.jsxs)("div",{className:s.a.persons,children:[Object(r.jsx)("h3",{className:s.a.subtitle,children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043a\u043e\u043b\u0435\u0434\u0436\u0443"}),Object(r.jsxs)("div",{className:s.a.documentsLink,children:[Object(r.jsx)(i.a,{href:"/about/administration",children:Object(r.jsx)("a",{children:"\u0414\u0438\u0440\u0435\u043a\u0446\u0456\u044f"})}),Object(r.jsx)(i.a,{href:"/about/commissions",children:Object(r.jsx)("a",{children:"\u0426\u0438\u043a\u043b\u043e\u0432\u0456 \u043a\u043e\u043c\u0456\u0441\u0456\u0457"})}),Object(r.jsx)(i.a,{href:"/about/department",children:Object(r.jsx)("a",{children:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f"})}),Object(r.jsx)(i.a,{href:"/about/library",children:Object(r.jsx)("a",{children:"\u0411\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0430"})})]})]}),Object(r.jsxs)("div",{className:s.a.documents,children:[Object(r.jsx)("h3",{className:s.a.subtitle,children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438"}),Object(r.jsxs)("div",{className:s.a.documentsLink,children:[Object(r.jsx)(i.a,{href:"/about/publicInformation",children:Object(r.jsx)("a",{children:"\u041f\u0443\u0431\u043b\u0456\u0447\u043d\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"})}),Object(r.jsx)(i.a,{href:"/about/documents",children:Object(r.jsx)("a",{children:"\u041d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u043e-\u043f\u0440\u0430\u0432\u043e\u0432\u0430 \u0431\u0430\u0437\u0430"})})]})]})]})]})}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),c=n("elyg"),i=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,b=e.replace,v=e.shallow,m=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var j=a.Children.only(h),O=j&&"object"===typeof j&&j.ref,g=(0,u.useIntersection)({rootMargin:"200px"}),_=r(g,2),x=_[0],w=_[1],M=a.default.useCallback((function(e){x(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,x]);(0,a.useEffect)((function(){var e=w&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,w,y,t,n]);var k={ref:M,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i}))}(e,n,d,p,b,v,m,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var C="undefined"!==typeof y?y:n&&n.locale,P=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(p,C,n&&n.locales,n&&n.domainLocales);k.href=P||(0,c.addBasePath)((0,c.addLocale)(p,C,n&&n.defaultLocale))}return a.default.cloneElement(j,k)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},rpTo:function(e,t,n){e.exports={title:"about_title__2OkPi",subtitle:"about_subtitle__2hUiC",aboutCollege:"about_aboutCollege__1Nv0P",personsAndDocuments:"about_personsAndDocuments__2kPdr",persons:"about_persons__1fJ6j",documentsLink:"about_documentsLink__BHYiv",link:"about_link__PF1NX"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("q1tI"),a=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["/W3R",0,1,2,3]]]);