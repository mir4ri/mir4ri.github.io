webpackHotUpdate_N_E("pages/index",{

/***/ "./components/News/index.jsx":
/*!***********************************!*\
  !*** ./components/News/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.scss */ \"./components/News/news.scss\");\n/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_news_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep/components/News/index.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n// import moment from \"moment\";\n\n\nvar News = function News(props) {\n  // console.log(props.date);\n  return __jsx(\"div\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, props.post.photo ? __jsx(\"div\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.img,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: props.post.photo,\n    alt: \"titleImg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  })) : undefined, __jsx(\"h2\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, props.post.title), __jsx(\"p\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, props.post.text), __jsx(\"div\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tag,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.category,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, props.post.category), __jsx(\"span\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, props.post.date)));\n};\n\n_c = News;\n\nNews.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var query, moment;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref.query;\n            _context.next = 3;\n            return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! moment */ \"./node_modules/moment/moment.js\", 7));\n\n          case 3:\n            moment = _context.sent[\"default\"]();\n            return _context.abrupt(\"return\", {\n              date: moment.locale(\"uk\").fromNow(),\n              post: posts[query.id]\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}(); // \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzL2luZGV4LmpzeD9lYjkyIl0sIm5hbWVzIjpbIk5ld3MiLCJwcm9wcyIsInBvc3RTdHlsZSIsInBvc3QiLCJwaG90byIsImltZyIsInVuZGVmaW5lZCIsInRpdGxlIiwidGV4dCIsInRhZyIsImNhdGVnb3J5IiwiZGF0ZSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwibW9tZW50IiwibG9jYWxlIiwiZnJvbU5vdyIsInBvc3RzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLGlEQUFTLENBQUNDLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsS0FBSyxDQUFDRSxJQUFOLENBQVdDLEtBQVgsR0FDQztBQUFLLGFBQVMsRUFBRUYsaURBQVMsQ0FBQ0csR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFSixLQUFLLENBQUNFLElBQU4sQ0FBV0MsS0FBckI7QUFBNEIsT0FBRyxFQUFFLFVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURELEdBSUdFLFNBTE4sRUFNRTtBQUFJLGFBQVMsRUFBRUosaURBQVMsQ0FBQ0ssS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQ04sS0FBSyxDQUFDRSxJQUFOLENBQVdJLEtBQTVDLENBTkYsRUFPRTtBQUFHLGFBQVMsRUFBRUwsaURBQVMsQ0FBQ00sSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQlAsS0FBSyxDQUFDRSxJQUFOLENBQVdLLElBQTFDLENBUEYsRUFRRTtBQUFLLGFBQVMsRUFBRU4saURBQVMsQ0FBQ08sR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFUCxpREFBUyxDQUFDUSxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDVCxLQUFLLENBQUNFLElBQU4sQ0FBV08sUUFBakQsQ0FERixFQUVFO0FBQU0sYUFBUyxFQUFFUixpREFBUyxDQUFDUyxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDVixLQUFLLENBQUNFLElBQU4sQ0FBV1EsSUFBN0MsQ0FGRixDQVJGLENBREY7QUFlRCxDQWpCRDs7S0FBTVgsSTs7QUFtQk5BLElBQUksQ0FBQ1ksZUFBTDtBQUFBLCtMQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsaUJBQVQsUUFBU0EsS0FBVDtBQUFBO0FBQUEsbUJBQ0MsbUlBREQ7O0FBQUE7QUFDZkMsa0JBRGU7QUFBQSw2Q0FFZDtBQUNMSCxrQkFBSSxFQUFFRyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CQyxPQUFwQixFQUREO0FBRUxiLGtCQUFJLEVBQUVjLEtBQUssQ0FBQ0osS0FBSyxDQUFDSyxFQUFQO0FBRk4sYUFGYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJLENBUUE7OztBQUVlbEIsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3MvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgcG9zdFN0eWxlIGZyb20gXCIuL25ld3Muc2Nzc1wiO1xuXG5jb25zdCBOZXdzID0gKHByb3BzKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHByb3BzLmRhdGUpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGUucG9zdH0+XG4gICAgICB7cHJvcHMucG9zdC5waG90byA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZS5pbWd9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wb3N0LnBob3RvfSBhbHQ9e1widGl0bGVJbWdcIn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogdW5kZWZpbmVkfVxuICAgICAgPGgyIGNsYXNzTmFtZT17cG9zdFN0eWxlLnRpdGxlfT57cHJvcHMucG9zdC50aXRsZX08L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPXtwb3N0U3R5bGUudGV4dH0+e3Byb3BzLnBvc3QudGV4dH08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlLnRhZ30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cG9zdFN0eWxlLmNhdGVnb3J5fT57cHJvcHMucG9zdC5jYXRlZ29yeX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cG9zdFN0eWxlLmRhdGV9Pntwcm9wcy5wb3N0LmRhdGV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5OZXdzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgbW9tZW50ID0gKGF3YWl0IGltcG9ydChcIm1vbWVudFwiKSkuZGVmYXVsdCgpO1xuICByZXR1cm4ge1xuICAgIGRhdGU6IG1vbWVudC5sb2NhbGUoXCJ1a1wiKS5mcm9tTm93KCksXG4gICAgcG9zdDogcG9zdHNbcXVlcnkuaWRdLFxuICB9O1xufTtcblxuLy8gXG5cbmV4cG9ydCBkZWZhdWx0IE5ld3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/News/index.jsx\n");

/***/ })

})