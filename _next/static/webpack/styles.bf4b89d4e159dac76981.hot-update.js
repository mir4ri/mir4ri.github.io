webpackHotUpdate("styles",{

/***/ "./pages/post/styles.scss":
/*!********************************!*\
  !*** ./pages/post/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"photo":"_2LOrxuB2sO1MlZ3D8OvxcR","title":"ZwFlEHAiy2BQExBsf9yB1","text":"ap2FDx8aHJUSXjMd87vG2","date":"_5zvjXWVQkzbENS5CXNF-D"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1596895711138");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.bf4b89d4e159dac76981.hot-update.js.map