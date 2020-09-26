webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].jsx":
/*!*****************************!*\
  !*** ./pages/post/[id].jsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_MobileNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MobileNav */ \"./components/MobileNav/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Nav */ \"./components/Nav/index.jsx\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout/layout.scss */ \"./components/Layout/layout.scss\");\n/* harmony import */ var _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.scss */ \"./pages/post/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_9__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep/pages/post/[id].jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n // поки Next.js не пофіксить HOC\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var className = _ref.className,\n      post = _ref.post;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      copySuccess = _useState[0],\n      setCopySuccess = _useState[1];\n\n  var textAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  if (!post.id) return __jsx(\"p\", {\n    style: {\n      textAlign: \"center\",\n      fontWeight: \"bold\"\n    },\n    className: className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"\\u0423\\u043F\\u0441... \\u0422\\u0430\\u043A\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0443 \\u0449\\u0435 \\u043D\\u0435 \\u0456\\u0441\\u043D\\u0443\\u0454\", \" \", __jsx(\"button\", {\n    onClick: function onClick() {\n      return router.back();\n    },\n    style: {\n      display: \"block\",\n      margin: \"10px auto\",\n      border: \"none\",\n      background: \"none\",\n      color: \"#19b5fe\",\n      fontSize: \"16px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \"\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u0438\\u0441\\u044F \\u043D\\u0430\\u0437\\u0430\\u0434\"));\n  return __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default.a.alignContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, \"\\u0424\\u041A\\u0415\\u041F - \", post.title), __jsx(\"meta\", {\n    name: \"theme-color\",\n    content: \"#558af1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/static/img/fav.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default.a.layoutContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _components_Layout_layout_scss__WEBPACK_IMPORTED_MODULE_7___default.a.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, post.photo ? __jsx(\"img\", {\n    src: post.photo,\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.photo,\n    alt: post.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }) : undefined, __jsx(\"h2\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, post.title), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, post.text), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, post.paragraph), __jsx(\"p\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, post.end), __jsx(\"span\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, moment__WEBPACK_IMPORTED_MODULE_8___default()(post.date).locale(\"uk\").fromNow()), __jsx(\"button\", {\n    onClick: function onClick() {\n      return navigator.clipboard.writeText(\"Copy this text to clipboard\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }), __jsx(_components_MobileNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Post, \"j3CnbGj6lJTYvUeA3uJiAP4fNrI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Post;\n;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanN4P2JiZjYiXSwibmFtZXMiOlsiUG9zdCIsImNsYXNzTmFtZSIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNvcHlTdWNjZXNzIiwic2V0Q29weVN1Y2Nlc3MiLCJ0ZXh0QXJlYVJlZiIsInVzZVJlZiIsImlkIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsImJhY2siLCJkaXNwbGF5IiwibWFyZ2luIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiZm9udFNpemUiLCJjb250YWluZXIiLCJhbGlnbkNvbnRhaW5lciIsInRpdGxlIiwibGF5b3V0Q29udGFpbmVyIiwiY29udGVudCIsInBob3RvIiwic3R5bGVzIiwidW5kZWZpbmVkIiwidGV4dCIsInBhcmFncmFwaCIsImVuZCIsImRhdGUiLCJtb21lbnQiLCJsb2NhbGUiLCJmcm9tTm93IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUM2RDs7QUFFN0Q7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxTQUFzQixRQUF0QkEsU0FBc0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDcEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEb0Msa0JBRUVDLHNEQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFN0JDLFdBRjZCO0FBQUEsTUFFaEJDLGNBRmdCOztBQUdwQyxNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUVBLE1BQUksQ0FBQ1AsSUFBSSxDQUFDUSxFQUFWLEVBQ0UsT0FDRTtBQUNFLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsUUFBYjtBQUF1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QUFrQkUsTUFBbEIsQ0FBeUIsSUFBekIsRUFBK0JDLE9BQS9CLEVBREgsQ0FSRixFQVdFO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFDUEMsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4Qiw2QkFBOUIsQ0FETztBQUFBLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBZ0JFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQUZGLENBUkYsRUE2QkUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0JGLENBREY7QUFpQ0QsQ0E3REQ7O0dBQU1yQyxJO1VBQ1dJLHFEOzs7S0FEWEosSTtBQTZESjs7QUFxQmFBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdC9baWRdLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IE1vYmlsZU5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Nb2JpbGVOYXZcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvbGF5b3V0LnNjc3NcIjsgLy8g0L/QvtC60LggTmV4dC5qcyDQvdC1INC/0L7RhNGW0LrRgdC40YLRjCBIT0NcblxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbmNvbnN0IFBvc3QgPSAoeyBjbGFzc05hbWUsIHBvc3QgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2NvcHlTdWNjZXNzLCBzZXRDb3B5U3VjY2Vzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgdGV4dEFyZWFSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgaWYgKCFwb3N0LmlkKVxuICAgIHJldHVybiAoXG4gICAgICA8cFxuICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgPlxuICAgICAgICDQo9C/0YEuLi4g0KLQsNC60L7Qs9C+INC/0L7RgdGC0YMg0YnQtSDQvdC1INGW0YHQvdGD0ZR7XCIgXCJ9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMTBweCBhdXRvXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJub25lXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjMTliNWZlXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgINCS0LXRgNC90YPRgtC40YHRjyDQvdCw0LfQsNC0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9wPlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyLmFsaWduQ29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+0KTQmtCV0J8gLSB7cG9zdC50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzU1OGFmMVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2ltZy9mYXYuc3ZnXCI+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lci5sYXlvdXRDb250YWluZXJ9PlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXIuY29udGVudH0+XG4gICAgICAgICAge3Bvc3QucGhvdG8gPyAoXG4gICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5waG90b30gY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99IGFsdD17cG9zdC50aXRsZX0gLz5cbiAgICAgICAgICApIDogdW5kZWZpbmVkfVxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57cG9zdC50ZXh0fTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57cG9zdC5wYXJhZ3JhcGh9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9Pntwb3N0LmVuZH08L3A+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XG4gICAgICAgICAgICB7bW9tZW50KHBvc3QuZGF0ZSkubG9jYWxlKFwidWtcIikuZnJvbU5vdygpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChcIkNvcHkgdGhpcyB0ZXh0IHRvIGNsaXBib2FyZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1vYmlsZU5hdiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTs7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcG9zdHMgPSAoYXdhaXQgaW1wb3J0KFwiLi4vLi4vYXBpL25ld3MuanNvblwiKSkuZGVmYXVsdDtcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBpZDogc2x1Zy5pZC50b1N0cmluZygpIH0gfSkpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtczogeyBzbHVnIH0gfSkgPT4ge1xuICBjb25zdCBwb3N0cyA9IChhd2FpdCBpbXBvcnQoXCIuLi8uLi9hcGkvbmV3cy5qc29uXCIpKS5kZWZhdWx0O1xuICBjb25zdCBwb3N0ID0gcG9zdHMuZmluZCgoeCkgPT4geC5zbHVnID09PSBzbHVnKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[id].jsx\n");

/***/ })

})