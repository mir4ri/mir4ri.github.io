webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].jsx":
/*!*****************************!*\
  !*** ./pages/post/[id].jsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_MobileNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MobileNav */ \"./components/MobileNav/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Nav */ \"./components/Nav/index.jsx\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout/layout.scss */ \"./components/Layout/layout.scss\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.scss */ \"./pages/post/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_9__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep/pages/post/[id].jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n // поки Next.js не пофіксить HOC\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var className = _ref.className,\n      post = _ref.post;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      copySuccess = _useState[0],\n      setCopySuccess = _useState[1];\n\n  var textAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  if (!post.id) return __jsx(\"p\", {\n    style: {\n      textAlign: \"center\",\n      fontWeight: \"bold\"\n    },\n    className: className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"\\u0423\\u043F\\u0441... \\u0422\\u0430\\u043A\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0443 \\u0449\\u0435 \\u043D\\u0435 \\u0456\\u0441\\u043D\\u0443\\u0454\", \" \", __jsx(\"button\", {\n    onClick: function onClick() {\n      return router.back();\n    },\n    style: {\n      display: \"block\",\n      margin: \"10px auto\",\n      border: \"none\",\n      background: \"none\",\n      color: \"#19b5fe\",\n      fontSize: \"16px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \"\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u0438\\u0441\\u044F \\u043D\\u0430\\u0437\\u0430\\u0434\"));\n  return __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default.a.alignContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, \"\\u0424\\u041A\\u0415\\u041F - \", post.title), __jsx(\"meta\", {\n    name: \"theme-color\",\n    content: \"#558af1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/static/img/fav.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default.a.layoutContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default.a.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, post.photo ? __jsx(\"img\", {\n    src: post.photo,\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo,\n    alt: post.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }) : undefined, __jsx(\"h2\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, post.title), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, post.text), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, post.paragraph), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, post.end), __jsx(\"span\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, moment__WEBPACK_IMPORTED_MODULE_8___default()(post.date).locale(\"uk\").fromNow()), __jsx(\"button\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.copyBtn,\n    onClick: function onClick() {\n      return navigator.clipboard.writeText(\"mir4ri.github.io\".concat(router.asPath));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, \"https://www.mir4ri.github.io\", router.asPath), __jsx(_components_MobileNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Post, \"j3CnbGj6lJTYvUeA3uJiAP4fNrI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Post;\n;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanN4P2JiZjYiXSwibmFtZXMiOlsiUG9zdCIsImNsYXNzTmFtZSIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNvcHlTdWNjZXNzIiwic2V0Q29weVN1Y2Nlc3MiLCJ0ZXh0QXJlYVJlZiIsInVzZVJlZiIsImlkIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsImJhY2siLCJkaXNwbGF5IiwibWFyZ2luIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiZm9udFNpemUiLCJjb250YWluZXIiLCJhbGlnbkNvbnRhaW5lciIsInRpdGxlIiwibGF5b3V0Q29udGFpbmVyIiwiY29udGVudCIsInBob3RvIiwic3R5bGVzIiwidW5kZWZpbmVkIiwidGV4dCIsInBhcmFncmFwaCIsImVuZCIsImRhdGUiLCJtb21lbnQiLCJsb2NhbGUiLCJmcm9tTm93IiwiY29weUJ0biIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFzUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FDNkQ7O0FBRTdEO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsU0FBc0IsUUFBdEJBLFNBQXNCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG9DLGtCQUVFQyxzREFBUSxDQUFDLEVBQUQsQ0FGVjtBQUFBLE1BRTdCQyxXQUY2QjtBQUFBLE1BRWhCQyxjQUZnQjs7QUFHcEMsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBMUI7QUFFQSxNQUFJLENBQUNQLElBQUksQ0FBQ1EsRUFBVixFQUNFLE9BQ0U7QUFDRSxTQUFLLEVBQUU7QUFBRUMs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LENBQUM2QixJQUFOLENBQU4sQ0FBa0JFLE1BQWxCLENBQXlCLElBQXpCLEVBQStCQyxPQUEvQixFQURILENBUkYsRUFXRTtBQUNFLGFBQVMsRUFBRVIsbURBQU0sQ0FBQ1MsT0FEcEI7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUNQQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLDJCQUFpRG5DLE1BQU0sQ0FBQ29DLE1BQXhELEVBRE87QUFBQSxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBTStCcEMsTUFBTSxDQUFDb0MsTUFOdEMsQ0FYRixFQW1CRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsQ0FGRixDQVJGLEVBZ0NFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhDRixDQURGO0FBb0NELENBaEVEOztHQUFNdkMsSTtVQUNXSSxxRDs7O0tBRFhKLEk7QUFnRUo7O0FBcUJhQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW2lkXS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBNb2JpbGVOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTW9iaWxlTmF2XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcbmltcG9ydCBjb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dC5zY3NzXCI7IC8vINC/0L7QutC4IE5leHQuanMg0L3QtSDQv9C+0YTRltC60YHQuNGC0YwgSE9DXG5cbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG5jb25zdCBQb3N0ID0gKHsgY2xhc3NOYW1lLCBwb3N0IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtjb3B5U3VjY2Vzcywgc2V0Q29weVN1Y2Nlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHRleHRBcmVhUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGlmICghcG9zdC5pZClcbiAgICByZXR1cm4gKFxuICAgICAgPHBcbiAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgID5cbiAgICAgICAg0KPQv9GBLi4uINCi0LDQutC+0LPQviDQv9C+0YHRgtGDINGJ0LUg0L3QtSDRltGB0L3Rg9GUe1wiIFwifVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggYXV0b1wiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwibm9uZVwiLFxuICAgICAgICAgICAgY29sb3I6IFwiIzE5YjVmZVwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICDQktC10YDQvdGD0YLQuNGB0Y8g0L3QsNC30LDQtFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lci5hbGlnbkNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPtCk0JrQldCfIC0ge3Bvc3QudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM1NThhZjFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9pbWcvZmF2LnN2Z1wiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXIubGF5b3V0Q29udGFpbmVyfT5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyLmNvbnRlbnR9PlxuICAgICAgICAgIHtwb3N0LnBob3RvID8gKFxuICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucGhvdG99IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfSBhbHQ9e3Bvc3QudGl0bGV9IC8+XG4gICAgICAgICAgKSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwb3N0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3Bvc3QudGV4dH08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3Bvc3QucGFyYWdyYXBofTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57cG9zdC5lbmR9PC9wPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxuICAgICAgICAgICAge21vbWVudChwb3N0LmRhdGUpLmxvY2FsZShcInVrXCIpLmZyb21Ob3coKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29weUJ0bn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGBtaXI0cmkuZ2l0aHViLmlvJHtyb3V0ZXIuYXNQYXRofWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgaHR0cHM6Ly93d3cubWlyNHJpLmdpdGh1Yi5pb3tyb3V0ZXIuYXNQYXRofVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxNb2JpbGVOYXYgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gKGF3YWl0IGltcG9ydChcIi4uLy4uL2FwaS9uZXdzLmpzb25cIikpLmRlZmF1bHQ7XG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgaWQ6IHNsdWcuaWQudG9TdHJpbmcoKSB9IH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pID0+IHtcbiAgY29uc3QgcG9zdHMgPSAoYXdhaXQgaW1wb3J0KFwiLi4vLi4vYXBpL25ld3MuanNvblwiKSkuZGVmYXVsdDtcbiAgY29uc3QgcG9zdCA9IHBvc3RzLmZpbmQoKHgpID0+IHguc2x1ZyA9PT0gc2x1Zyk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[id].jsx\n");

/***/ })

})