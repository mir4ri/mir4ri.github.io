webpackHotUpdate_N_E("pages/about/regulations",{

/***/ "./pages/about/regulations/index.jsx":
/*!*******************************************!*\
  !*** ./pages/about/regulations/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout/index.jsx\");\n/* harmony import */ var _subpages_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subpages.scss */ \"./pages/about/subpages.scss\");\n/* harmony import */ var _subpages_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_subpages_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Accordion */ \"./components/Accordion/index.jsx\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/pages/about/regulations/index.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n // import regulations from \"../../../api/regulations.json\";\n\n\n\nvar client = __webpack_require__(/*! contentful */ \"./node_modules/contentful/dist/es-modules/contentful.js\").createClient({\n  space: \"kwjkl9590afm\",\n  accessToken: \"Xf-vFH47rjCeM67rN0doBuiFm3dGtyHyeQw9dJiJDYs\"\n});\n\nvar Budget = function Budget(_ref) {\n  _s();\n\n  var className = _ref.className;\n\n  function fetchEntries() {\n    return _fetchEntries.apply(this, arguments);\n  }\n\n  function _fetchEntries() {\n    _fetchEntries = Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var entries;\n      return _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return client.getEntries({\n                content_type: \"publicInformation\"\n              });\n\n            case 2:\n              entries = _context2.sent;\n\n              if (!entries.items) {\n                _context2.next = 5;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", entries.items);\n\n            case 5:\n              console.log(\"Error getting Entries for \".concat(contentType.name, \".\"));\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _fetchEntries.apply(this, arguments);\n  }\n\n  var _useState = useState([]),\n      _useState2 = Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState, 2),\n      docs = _useState2[0],\n      setDocuments = _useState2[1];\n\n  useEffect(function () {\n    function getDocumets() {\n      return _getDocumets.apply(this, arguments);\n    }\n\n    function _getDocumets() {\n      _getDocumets = Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var allDocs;\n        return _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetchEntries();\n\n              case 2:\n                allDocs = _context.sent;\n                setDocuments(Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allDocs));\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _getDocumets.apply(this, arguments);\n    }\n\n    getDocumets();\n  }, []);\n  return __jsx(\"main\", {\n    className: className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"\\u0424\\u041A\\u0415\\u041F - \\u041F\\u043E\\u043B\\u043E\\u0436\\u0435\\u043D\\u043D\\u044F\")), __jsx(\"h2\", {\n    className: _subpages_scss__WEBPACK_IMPORTED_MODULE_7___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, \"\\u041F\\u043E\\u043B\\u043E\\u0436\\u0435\\u043D\\u043D\\u044F\"), __jsx(_components_Accordion__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    documents: docs,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Budget, \"d7yl27J8+W9rpqWlGIlnC9AAdSw=\");\n\n_c = Budget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Budget));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Budget\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQvcmVndWxhdGlvbnMvaW5kZXguanN4PzEyNmEiXSwibmFtZXMiOlsiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwicHJvY2VzcyIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJCdWRnZXQiLCJjbGFzc05hbWUiLCJmZXRjaEVudHJpZXMiLCJnZXRFbnRyaWVzIiwiY29udGVudF90eXBlIiwiZW50cmllcyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnRUeXBlIiwibmFtZSIsInVzZVN0YXRlIiwiZG9jcyIsInNldERvY3VtZW50cyIsInVzZUVmZmVjdCIsImdldERvY3VtZXRzIiwiYWxsRG9jcyIsInN0eWxlcyIsInRpdGxlIiwid2l0aExheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMkVBQUQsQ0FBUCxDQUFzQkMsWUFBdEIsQ0FBbUM7QUFDaERDLE9BQUssRUFBRUMsY0FEeUM7QUFFaERDLGFBQVcsRUFBRUQsNkNBQStDRTtBQUZaLENBQW5DLENBQWY7O0FBS0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLFdBQ2pCQyxZQURpQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2VEFDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDd0JULE1BQU0sQ0FBQ1UsVUFBUCxDQUFrQjtBQUN0Q0MsNEJBQVksRUFBRTtBQUR3QixlQUFsQixDQUR4Qjs7QUFBQTtBQUNRQyxxQkFEUjs7QUFBQSxtQkFJTUEsT0FBTyxDQUFDQyxLQUpkO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQUk0QkQsT0FBTyxDQUFDQyxLQUpwQzs7QUFBQTtBQUtFQyxxQkFBTyxDQUFDQyxHQUFSLHFDQUF5Q0MsV0FBVyxDQUFDQyxJQUFyRDs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURnQztBQUFBO0FBQUE7O0FBQUEsa0JBU0hDLFFBQVEsQ0FBQyxFQUFELENBVEw7QUFBQTtBQUFBLE1BU3pCQyxJQVR5QjtBQUFBLE1BU25CQyxZQVRtQjs7QUFXaENDLFdBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsV0FERDtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4VEFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN3QmIsWUFBWSxFQURwQzs7QUFBQTtBQUNRYyx1QkFEUjtBQUVFSCw0QkFBWSxDQUFDLHlKQUFJRyxPQUFMLEVBQVo7O0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYztBQUFBO0FBQUE7O0FBS2RELGVBQVc7QUFDWixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FDRTtBQUFNLGFBQVMsRUFBRWQsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUZBREYsQ0FERixFQUlFO0FBQUksYUFBUyxFQUFFZ0IscURBQU0sQ0FBQ0MsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFKRixFQUtFLE1BQUMsNkRBQUQ7QUFBVyxhQUFTLEVBQUVOLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGO0FBU0QsQ0E1QkQ7O0dBQU1aLE07O0tBQUFBLE07QUE4QlMscUVBQUFtQixrRUFBVSxDQUFDbkIsTUFBRCxDQUF6QiIsImZpbGUiOiIuL3BhZ2VzL2Fib3V0L3JlZ3VsYXRpb25zL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB3aXRoTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3VicGFnZXMuc2Nzc1wiO1xuXG4vLyBpbXBvcnQgcmVndWxhdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2FwaS9yZWd1bGF0aW9ucy5qc29uXCI7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0FjY29yZGlvblwiO1xuXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKS5jcmVhdGVDbGllbnQoe1xuICBzcGFjZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOLFxufSk7XG5cbmNvbnN0IEJ1ZGdldCA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRW50cmllcygpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICAgY29udGVudF90eXBlOiBcInB1YmxpY0luZm9ybWF0aW9uXCIsXG4gICAgfSk7XG4gICAgaWYgKGVudHJpZXMuaXRlbXMpIHJldHVybiBlbnRyaWVzLml0ZW1zO1xuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYCk7XG4gIH1cblxuICBjb25zdCBbZG9jcywgc2V0RG9jdW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERvY3VtZXRzKCkge1xuICAgICAgY29uc3QgYWxsRG9jcyA9IGF3YWl0IGZldGNoRW50cmllcygpO1xuICAgICAgc2V0RG9jdW1lbnRzKFsuLi5hbGxEb2NzXSk7XG4gICAgfVxuICAgIGdldERvY3VtZXRzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+0KTQmtCV0J8gLSDQn9C+0LvQvtC20LXQvdC90Y88L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7Qn9C+0LvQvtC20LXQvdC90Y88L2gyPlxuICAgICAgPEFjY29yZGlvbiBkb2N1bWVudHM9e2RvY3N9IC8+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExheW91dChCdWRnZXQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about/regulations/index.jsx\n");

/***/ })

})