webpackHotUpdate_N_E("pages/index",{

/***/ "./components/News/index.jsx":
/*!***********************************!*\
  !*** ./components/News/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _news_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.module.scss */ \"./components/News/news.module.scss\");\n/* harmony import */ var _news_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_news_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/components/News/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar News = function News(_ref) {\n  var title = _ref.title,\n      excerpt = _ref.excerpt,\n      category = _ref.category,\n      date = _ref.date;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _news_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.post,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      className: _news_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _news_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,\n      children: excerpt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _news_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tag,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _news_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.category,\n        children: category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _news_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.date,\n        children: moment__WEBPACK_IMPORTED_MODULE_1___default()(date).locale(\"uk\").calendar()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzL2luZGV4LmpzeD9lYjkyIl0sIm5hbWVzIjpbIk5ld3MiLCJ0aXRsZSIsImV4Y2VycHQiLCJjYXRlZ29yeSIsImRhdGUiLCJwb3N0U3R5bGUiLCJwb3N0IiwidGV4dCIsInRhZyIsIm1vbWVudCIsImxvY2FsZSIsImNhbGVuZGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXdDO0FBQUEsTUFBckNDLEtBQXFDLFFBQXJDQSxLQUFxQztBQUFBLE1BQTlCQyxPQUE4QixRQUE5QkEsT0FBOEI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ25ELHNCQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBUyxDQUFDQyxJQUExQjtBQUFBLDRCQU1FO0FBQUksZUFBUyxFQUFFRCx3REFBUyxDQUFDSixLQUF6QjtBQUFBLGdCQUFpQ0E7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0U7QUFBRyxlQUFTLEVBQUVJLHdEQUFTLENBQUNFLElBQXhCO0FBQUEsZ0JBQStCTDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFRRTtBQUFLLGVBQVMsRUFBRUcsd0RBQVMsQ0FBQ0csR0FBMUI7QUFBQSw4QkFDRTtBQUFNLGlCQUFTLEVBQUVILHdEQUFTLENBQUNGLFFBQTNCO0FBQUEsa0JBQXNDQTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLGlCQUFTLEVBQUVFLHdEQUFTLENBQUNELElBQTNCO0FBQUEsa0JBQ0dLLDZDQUFNLENBQUNMLElBQUQsQ0FBTixDQUFhTSxNQUFiLENBQW9CLElBQXBCLEVBQTBCQyxRQUExQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQWxCRDs7S0FBTVgsSTtBQW9CU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3MvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgcG9zdFN0eWxlIGZyb20gXCIuL25ld3MubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgTmV3cyA9ICh7IHRpdGxlLCBleGNlcnB0LCBjYXRlZ29yeSwgZGF0ZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZS5wb3N0fT5cbiAgICAgIHsvKiB7cHJvcHMucG9zdC5waG90byA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RTdHlsZS5pbWd9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wb3N0LnBob3RvfSBhbHQ9e1widGl0bGVJbWdcIn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogdW5kZWZpbmVkfSAqL31cbiAgICAgIDxoMiBjbGFzc05hbWU9e3Bvc3RTdHlsZS50aXRsZX0+e3RpdGxlfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9e3Bvc3RTdHlsZS50ZXh0fT57ZXhjZXJwdH08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cG9zdFN0eWxlLnRhZ30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cG9zdFN0eWxlLmNhdGVnb3J5fT57Y2F0ZWdvcnl9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Bvc3RTdHlsZS5kYXRlfT5cbiAgICAgICAgICB7bW9tZW50KGRhdGUpLmxvY2FsZShcInVrXCIpLmNhbGVuZGFyKCl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/News/index.jsx\n");

/***/ })

})