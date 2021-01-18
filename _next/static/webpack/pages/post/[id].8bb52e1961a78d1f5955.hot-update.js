webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].jsx":
/*!*****************************!*\
  !*** ./pages/post/[id].jsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_MobileNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MobileNav */ \"./components/MobileNav/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Nav */ \"./components/Nav/index.jsx\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout/layout.scss */ \"./components/Layout/layout.scss\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.scss */ \"./pages/post/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_10__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/client/pages/post/[id].jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n // поки Next.js не пофіксить HOC\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var className = _ref.className,\n      post = _ref.post;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"https://www.mir4ri.github.io\".concat(router.asPath)),\n      copySuccess = _useState[0],\n      setCopySuccess = _useState[1];\n\n  if (!post.id) return __jsx(\"p\", {\n    style: {\n      textAlign: \"center\",\n      fontWeight: \"bold\"\n    },\n    className: className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"\\u0423\\u043F\\u0441... \\u0422\\u0430\\u043A\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0443 \\u0449\\u0435 \\u043D\\u0435 \\u0456\\u0441\\u043D\\u0443\\u0454\", \" \", __jsx(\"button\", {\n    onClick: function onClick() {\n      return router.back();\n    },\n    style: {\n      display: \"block\",\n      margin: \"10px auto\",\n      border: \"none\",\n      background: \"none\",\n      color: \"#19b5fe\",\n      fontSize: \"16px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u0438\\u0441\\u044F \\u043D\\u0430\\u0437\\u0430\\u0434\"));\n  return __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8___default.a.alignContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, \"\\u0424\\u041A\\u0415\\u041F - \", post.title), __jsx(\"meta\", {\n    name: \"theme-color\",\n    content: \"#558af1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/static/img/fav.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8___default.a.layoutContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_8___default.a.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, post.photo ? __jsx(\"img\", {\n    src: post.photo,\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.photo,\n    alt: post.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }) : undefined, __jsx(\"h2\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, post.title), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, post.text), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, post.paragraph), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, post.end), __jsx(\"div\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.shareButtons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"FacebookShareButton\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"FacebookIcon\"], {\n    size: 30,\n    borderRadius: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"FacebookMessengerShareButton\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"FacebookMessengerIcon\"], {\n    size: 30,\n    borderRadius: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 15\n    }\n  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"TelegramShareButton\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"TelegramIcon\"], {\n    size: 30,\n    borderRadius: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 15\n    }\n  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"TwitterShareButton\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"TwitterIcon\"], {\n    size: 30,\n    borderRadius: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"ViberShareButton\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_3__[\"ViberIcon\"], {\n    size: 30,\n    borderRadius: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }))), __jsx(\"span\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, moment__WEBPACK_IMPORTED_MODULE_9___default()(post.date).locale(\"uk\").fromNow()), __jsx(_components_MobileNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Post, \"jQiC48zbvLNwMMBrW221dYing6o=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanN4P2JiZjYiXSwibmFtZXMiOlsiUG9zdCIsImNsYXNzTmFtZSIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImFzUGF0aCIsImNvcHlTdWNjZXNzIiwic2V0Q29weVN1Y2Nlc3MiLCJpZCIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJiYWNrIiwiZGlzcGxheSIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmQiLCJjb2xvciIsImZvbnRTaXplIiwiY29udGFpbmVyIiwiYWxpZ25Db250YWluZXIiLCJ0aXRsZSIsImxheW91dENvbnRhaW5lciIsImNvbnRlbnQiLCJwaG90byIsInN0eWxlcyIsInVuZGVmaW5lZCIsInRleHQiLCJwYXJhZ3JhcGgiLCJlbmQiLCJzaGFyZUJ1dHRvbnMiLCJkYXRlIiwibW9tZW50IiwibG9jYWxlIiwiZnJvbU5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7Q0FDNkQ7O0FBRTdEO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsU0FBc0IsUUFBdEJBLFNBQXNCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG9DLGtCQUVFQyxzREFBUSx1Q0FDYkYsTUFBTSxDQUFDRyxNQURNLEVBRlY7QUFBQSxNQUU3QkMsV0FGNkI7QUFBQSxNQUVoQkMsY0FGZ0I7O0FBTXBDLE1BQUksQ0FBQ04sSUFBSSxDQUFDTyxFQUFWLEVBQ0UsT0FDRTtBQUNFLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsUUFBYjtBQUF1QkMsZ0JBQVUsRUFBRTtBQUFuQyxLQURUO0FBRUUsYUFBUyxFQUFFVixTQUZiO0FBQUE7QUFBQTtBQUFB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QUFBQSxJQTFDRixDQUZGLENBUkYsRUF1REUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkRGLENBREY7QUEyREQsQ0F4RkQ7O0dBQU1sQyxJO1VBQ1dJLHFEOzs7S0FEWEosSTs7QUFvSFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdC9baWRdLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEZhY2Vib29rU2hhcmVCdXR0b24sXG4gIEZhY2Vib29rTWVzc2VuZ2VyU2hhcmVCdXR0b24sXG4gIFRlbGVncmFtU2hhcmVCdXR0b24sXG4gIFR3aXR0ZXJTaGFyZUJ1dHRvbixcbiAgVmliZXJTaGFyZUJ1dHRvbixcbiAgRmFjZWJvb2tJY29uLFxuICBGYWNlYm9va01lc3Nlbmdlckljb24sXG4gIFR3aXR0ZXJJY29uLFxuICBUZWxlZ3JhbUljb24sXG4gIFZpYmVySWNvbixcbn0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgTW9iaWxlTmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01vYmlsZU5hdlwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2XCI7XG5pbXBvcnQgY29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9sYXlvdXQuc2Nzc1wiOyAvLyDQv9C+0LrQuCBOZXh0LmpzINC90LUg0L/QvtGE0ZbQutGB0LjRgtGMIEhPQ1xuXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcblxuY29uc3QgUG9zdCA9ICh7IGNsYXNzTmFtZSwgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY29weVN1Y2Nlc3MsIHNldENvcHlTdWNjZXNzXSA9IHVzZVN0YXRlKFxuICAgIGBodHRwczovL3d3dy5taXI0cmkuZ2l0aHViLmlvJHtyb3V0ZXIuYXNQYXRofWBcbiAgKTtcblxuICBpZiAoIXBvc3QuaWQpXG4gICAgcmV0dXJuIChcbiAgICAgIDxwXG4gICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+XG4gICAgICAgINCj0L/RgS4uLiDQotCw0LrQvtCz0L4g0L/QvtGB0YLRgyDRidC1INC90LUg0ZbRgdC90YPRlHtcIiBcIn1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IGF1dG9cIixcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiMxOWI1ZmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAg0JLQtdGA0L3Rg9GC0LjRgdGPINC90LDQt9Cw0LRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3A+XG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXIuYWxpZ25Db250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7QpNCa0JXQnyAtIHtwb3N0LnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNTU4YWYxXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvaW1nL2Zhdi5zdmdcIj48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyLmxheW91dENvbnRhaW5lcn0+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lci5jb250ZW50fT5cbiAgICAgICAgICB7cG9zdC5waG90byA/IChcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LnBob3RvfSBjbGFzc05hbWU9e3N0eWxlcy5waG90b30gYWx0PXtwb3N0LnRpdGxlfSAvPlxuICAgICAgICAgICkgOiB1bmRlZmluZWR9XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9Pntwb3N0LnRleHR9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9Pntwb3N0LnBhcmFncmFwaH08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3Bvc3QuZW5kfTwvcD5cbiAgICAgICAgICB7LyogPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlCdG59XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGBtaXI0cmkuZ2l0aHViLmlvJHtyb3V0ZXIuYXNQYXRofWApO1xuICAgICAgICAgICAgICBzZXRDb3B5U3VjY2VzcyhcItCf0L7RgdC40LvQsNC90L3RjyDRgdC60L7Qv9GW0LnQvtCy0LDQvdC+XCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXtjb3B5U3VjY2Vzc31cbiAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNoYXJlQnV0dG9uc30+XG4gICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBzaXplPXszMH0gYm9yZGVyUmFkaXVzPXszfSAvPlxuICAgICAgICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxuXG4gICAgICAgICAgICA8RmFjZWJvb2tNZXNzZW5nZXJTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPEZhY2Vib29rTWVzc2VuZ2VySWNvbiBzaXplPXszMH0gYm9yZGVyUmFkaXVzPXszfSAvPlxuICAgICAgICAgICAgPC9GYWNlYm9va01lc3NlbmdlclNoYXJlQnV0dG9uPlxuXG4gICAgICAgICAgICA8VGVsZWdyYW1TaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPFRlbGVncmFtSWNvbiBzaXplPXszMH0gYm9yZGVyUmFkaXVzPXszfSAvPlxuICAgICAgICAgICAgPC9UZWxlZ3JhbVNoYXJlQnV0dG9uPlxuXG4gICAgICAgICAgICA8VHdpdHRlclNoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICA8VHdpdHRlckljb24gc2l6ZT17MzB9IGJvcmRlclJhZGl1cz17M30gLz5cbiAgICAgICAgICAgIDwvVHdpdHRlclNoYXJlQnV0dG9uPlxuXG4gICAgICAgICAgICA8VmliZXJTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPFZpYmVySWNvbiBzaXplPXszMH0gYm9yZGVyUmFkaXVzPXszfSAvPlxuICAgICAgICAgICAgPC9WaWJlclNoYXJlQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XG4gICAgICAgICAgICB7bW9tZW50KHBvc3QuZGF0ZSkubG9jYWxlKFwidWtcIikuZnJvbU5vdygpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8TW9iaWxlTmF2IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gKGF3YWl0IGltcG9ydChcIi4uLy4uL2FwaS9uZXdzLmpzb25cIikpLmRlZmF1bHQ7XG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgaWQ6IHNsdWcuaWQudG9TdHJpbmcoKSB9IH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBwb3N0cyA9IChhd2FpdCBpbXBvcnQoXCIuLi8uLi9hcGkvbmV3cy5qc29uXCIpKS5kZWZhdWx0O1xuICBjb25zdCBwb3N0ID0gcG9zdHMuZmluZCgoeCkgPT4geC5pZCA9PSBwYXJhbXMuaWQpOyAvLyAqIHguaWQgU3RyaW5nLCBwYXJhbXMuaWQgTnVtYmVyXG5cbiAgaWYgKCFwb3N0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[id].jsx\n");

/***/ })

})