webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n/* harmony import */ var _index_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.scss */ \"./pages/index/index.scss\");\n/* harmony import */ var _index_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/client/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar mdComponents = {\n  h1: function h1(props) {\n    return __jsx(\"h1\", Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      style: {\n        color: \"#141414\"\n      }\n    }, props, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 18\n      }\n    }));\n  },\n  a: function a(props) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 5\n      }\n    }, __jsx(\"a\", Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      className: _index_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link\n    }, props, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }\n    })));\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"MDXProvider\"], {\n    components: mdComponents,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 3\n    }\n  }, __jsx(Component, Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_client_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  })));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIm1kQ29tcG9uZW50cyIsImgxIiwicHJvcHMiLCJjb2xvciIsImEiLCJzdHlsZXMiLCJsaW5rIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsSUFBRSxFQUFFLFlBQUNDLEtBQUQ7QUFBQSxXQUFXO0FBQUksV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFUO0FBQVgsT0FBcUNELEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBWDtBQUFBLEdBRGU7QUFFbkJFLEdBQUMsRUFBRSxXQUFDRixLQUFEO0FBQUEsV0FDRCxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRUcsd0RBQU0sQ0FBQ0M7QUFBckIsT0FBK0JKLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixDQURDO0FBQUE7QUFGZ0IsQ0FBckI7QUFRZTtBQUFBLE1BQUdLLFNBQUgsUUFBR0EsU0FBSDtBQUFBLE1BQWNDLFNBQWQsUUFBY0EsU0FBZDtBQUFBLFNBQ2IsTUFBQyx5REFBRDtBQUFhLGNBQVUsRUFBRVIsWUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCw0SkFBZVEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FEYTtBQUFBLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tIFwiQG1keC1qcy9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC9pbmRleC5zY3NzXCI7XG5jb25zdCBtZENvbXBvbmVudHMgPSB7XG4gIGgxOiAocHJvcHMpID0+IDxoMSBzdHlsZT17eyBjb2xvcjogXCIjMTQxNDE0XCIgfX0gey4uLnByb3BzfSAvPixcbiAgYTogKHByb3BzKSA9PiAoXG4gICAgPExpbms+XG4gICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSB7Li4ucHJvcHN9IC8+XG4gICAgPC9MaW5rPlxuICApLFxufTtcbmV4cG9ydCBkZWZhdWx0ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IChcbiAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e21kQ29tcG9uZW50c30+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L01EWFByb3ZpZGVyPlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})