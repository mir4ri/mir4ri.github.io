webpackHotUpdate_N_E("pages/index",{

/***/ "./components/News/index.jsx":
/*!***********************************!*\
  !*** ./components/News/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.scss */ \"./components/News/news.scss\");\n/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_news_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/kep/components/News/index.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n// import moment from \"moment\";\n\n\nvar News = function News(props) {\n  // console.log(props.date);\n  return __jsx(\"div\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.post,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, props.post.photo ? __jsx(\"div\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.img,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: props.post.photo,\n    alt: \"titleImg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  })) : undefined, __jsx(\"h2\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, props.post.title), __jsx(\"p\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, props.post.text), __jsx(\"div\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tag,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.category,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, props.post.category), __jsx(\"span\", {\n    className: _news_scss__WEBPACK_IMPORTED_MODULE_3___default.a.date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, props.post.date)));\n};\n\n_c = News;\n\nNews.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var query, moment;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref.query;\n            _context.next = 3;\n            return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! moment */ \"./node_modules/moment/moment.js\", 7));\n\n          case 3:\n            moment = _context.sent[\"default\"]();\n            return _context.abrupt(\"return\", {\n              date: moment.format(\"dddd D MMMM YYYY\"),\n              post: posts[query.id]\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}(); // .locale(\"uk\").fromNow()\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzL2luZGV4LmpzeD9lYjkyIl0sIm5hbWVzIjpbIk5ld3MiLCJwcm9wcyIsInBvc3RTdHlsZSIsInBvc3QiLCJwaG90byIsImltZyIsInVuZGVmaW5lZCIsInRpdGxlIiwidGV4dCIsInRhZyIsImNhdGVnb3J5IiwiZGF0ZSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwibW9tZW50IiwiZm9ybWF0IiwicG9zdHMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsaURBQVMsQ0FBQ0MsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixLQUFLLENBQUNFLElBQU4sQ0FBV0MsS0FBWCxHQUNDO0FBQUssYUFBUyxFQUFFRixpREFBUyxDQUFDRyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVKLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxLQUFyQjtBQUE0QixPQUFHLEVBQUUsVUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsR0FJR0UsU0FMTixFQU1FO0FBQUksYUFBUyxFQUFFSixpREFBUyxDQUFDSyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDTixLQUFLLENBQUNFLElBQU4sQ0FBV0ksS0FBNUMsQ0FORixFQU9FO0FBQUcsYUFBUyxFQUFFTCxpREFBUyxDQUFDTSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCUCxLQUFLLENBQUNFLElBQU4sQ0FBV0ssSUFBMUMsQ0FQRixFQVFFO0FBQUssYUFBUyxFQUFFTixpREFBUyxDQUFDTyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUVQLGlEQUFTLENBQUNRLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0NULEtBQUssQ0FBQ0UsSUFBTixDQUFXTyxRQUFqRCxDQURGLEVBRUU7QUFBTSxhQUFTLEVBQUVSLGlEQUFTLENBQUNTLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0NWLEtBQUssQ0FBQ0UsSUFBTixDQUFXUSxJQUE3QyxDQUZGLENBUkYsQ0FERjtBQWVELENBakJEOztLQUFNWCxJOztBQW1CTkEsSUFBSSxDQUFDWSxlQUFMO0FBQUEsK0xBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxpQkFBVCxRQUFTQSxLQUFUO0FBQUE7QUFBQSxtQkFDQyxtSUFERDs7QUFBQTtBQUNmQyxrQkFEZTtBQUFBLDZDQUVkO0FBQ0xILGtCQUFJLEVBQUVHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLGtCQUFkLENBREQ7QUFFTFosa0JBQUksRUFBRWEsS0FBSyxDQUFDSCxLQUFLLENBQUNJLEVBQVA7QUFGTixhQUZjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEksQ0FRQTs7O0FBRWVqQixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmV3cy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBwb3N0U3R5bGUgZnJvbSBcIi4vbmV3cy5zY3NzXCI7XG5cbmNvbnN0IE5ld3MgPSAocHJvcHMpID0+IHtcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuZGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZS5wb3N0fT5cbiAgICAgIHtwcm9wcy5wb3N0LnBob3RvID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlLmltZ30+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnBvc3QucGhvdG99IGFsdD17XCJ0aXRsZUltZ1wifSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiB1bmRlZmluZWR9XG4gICAgICA8aDIgY2xhc3NOYW1lPXtwb3N0U3R5bGUudGl0bGV9Pntwcm9wcy5wb3N0LnRpdGxlfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9e3Bvc3RTdHlsZS50ZXh0fT57cHJvcHMucG9zdC50ZXh0fTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3N0U3R5bGUudGFnfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwb3N0U3R5bGUuY2F0ZWdvcnl9Pntwcm9wcy5wb3N0LmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwb3N0U3R5bGUuZGF0ZX0+e3Byb3BzLnBvc3QuZGF0ZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk5ld3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCBtb21lbnQgPSAoYXdhaXQgaW1wb3J0KFwibW9tZW50XCIpKS5kZWZhdWx0KCk7XG4gIHJldHVybiB7XG4gICAgZGF0ZTogbW9tZW50LmZvcm1hdChcImRkZGQgRCBNTU1NIFlZWVlcIiksXG4gICAgcG9zdDogcG9zdHNbcXVlcnkuaWRdLFxuICB9O1xufTtcblxuLy8gLmxvY2FsZShcInVrXCIpLmZyb21Ob3coKVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/News/index.jsx\n");

/***/ })

})