webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Container */ \"./components/Container/index.jsx\");\n/* harmony import */ var _components_BackLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BackLink */ \"./components/BackLink/index.jsx\");\n/* harmony import */ var _components_ScrollToTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ScrollToTop */ \"./components/ScrollToTop/index.jsx\");\n/* harmony import */ var _components_MobileNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MobileNav */ \"./components/MobileNav/index.jsx\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Menu */ \"./components/Menu/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var _index_index_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/index.module.scss */ \"./pages/index/index.module.scss\");\n/* harmony import */ var _index_index_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_index_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_slider_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/slider.css */ \"./styles/slider.css\");\n/* harmony import */ var _styles_slider_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_slider_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_Container_container_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Container/container.module.scss */ \"./components/Container/container.module.scss\");\n/* harmony import */ var _components_Container_container_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_Container_container_module_scss__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\nvar _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/pages/_app.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar App = function App(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    isMobile: '',\n    isTablet: '',\n    isDesktop: ''\n  }),\n      device = _useState[0],\n      setDevice = _useState[1];\n\n  var setCurrentDevice = function setCurrentDevice() {\n    var width = window.innerWidth;\n    var isMobile = width <= 992;\n    var hasTouch = window.matchMedia('(pointer: coarse)').matches;\n    setDevice({\n      isMobile: false,\n      isTablet: false,\n      isDesktop: false\n    });\n\n    if (isMobile) {\n      setDevice(_objectSpread(_objectSpread({}, device), {}, {\n        isMobile: true\n      }));\n    } else if (hasTouch) {\n      setDevice.isTablet(true);\n    } else {\n      setDevice.isDesktop(true);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setCurrentDevice();\n    window.addEventListener('resize', setCurrentDevice());\n  }, [window.addEventListener('resize', setCurrentDevice())]);\n  console.log(device);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"theme-color\",\n        content: \"#558af1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/static/img/fav.svg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _components_Container_container_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.alignContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_BackLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _index_index_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.content,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ScrollToTop__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(App, \"avfm6N4FVrTR56vTsibRka3fRSg=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJpc1RhYmxldCIsImlzRGVza3RvcCIsImRldmljZSIsInNldERldmljZSIsInNldEN1cnJlbnREZXZpY2UiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoYXNUb3VjaCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJhbGlnbkNvbnRhaW5lciIsInN0eWxlcyIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQztBQUNuQ0MsWUFBUSxFQUFFLEVBRHlCO0FBRW5DQyxZQUFRLEVBQUUsRUFGeUI7QUFHbkNDLGFBQVMsRUFBRTtBQUh3QixHQUFELENBREk7QUFBQSxNQUNqQ0MsTUFEaUM7QUFBQSxNQUN6QkMsU0FEeUI7O0FBT3hDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixRQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBckI7QUFDQSxRQUFNUixRQUFRLEdBQUdNLEtBQUssSUFBSSxHQUExQjtBQUNBLFFBQU1HLFFBQVEsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLG1CQUFsQixFQUF1Q0MsT0FBeEQ7QUFFQVAsYUFBUyxDQUFDO0FBQ1JKLGNBQVEsRUFBRSxLQURGO0FBRVJDLGNBQVEsRUFBRSxLQUZGO0FBR1JDLGVBQVMsRUFBRTtBQUhILEtBQUQsQ0FBVDs7QUFNQSxRQUFJRixRQUFKLEVBQWM7QUFDWkksZUFBUyxpQ0FBTUQsTUFBTjtBQUFjSCxnQkFBUSxFQUFFO0FBQXhCLFNBQVQ7QUFDRCxLQUZELE1BRU8sSUFBSVMsUUFBSixFQUFjO0FBQ25CTCxlQUFTLENBQUNILFFBQVYsQ0FBbUIsSUFBbkI7QUFDRCxLQUZNLE1BRUE7QUFDTEcsZUFBUyxDQUFDRixTQUFWLENBQW9CLElBQXBCO0FBQ0Q7QUFDRixHQWxCRDs7QUFvQkFVLHlEQUFTLENBQUMsWUFBTTtBQUNkUCxvQkFBZ0I7QUFDaEJFLFVBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NSLGdCQUFnQixFQUFsRDtBQUNELEdBSFEsRUFHTixDQUFDRSxNQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUixnQkFBZ0IsRUFBbEQsQ0FBRCxDQUhNLENBQVQ7QUFLQVMsU0FBTyxDQUFDQyxHQUFSLENBQVlaLE1BQVo7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUU7QUFBSyxlQUFTLEVBQUVhLG1GQUFTLENBQUNDLGNBQTFCO0FBQUEsNkJBQ0UscUVBQUMsNkRBQUQ7QUFBQSxnQ0FDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFFQyxnRUFBTSxDQUFDQyxPQUF2QjtBQUFBLGlDQUNFLHFFQUFDLFNBQUQsb0JBQWVyQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQWdCRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUEsa0JBREY7QUFzQkQsQ0F4REQ7O0dBQU1GLEc7O0tBQUFBLEc7QUEwRFNBLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJztcbmltcG9ydCBCYWNrTGluayBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tMaW5rJztcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tICcuLi9jb21wb25lbnRzL1Njcm9sbFRvVG9wJztcbmltcG9ydCBNb2JpbGVOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2JpbGVOYXYnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgvaW5kZXgubW9kdWxlLnNjc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3NsaWRlci5jc3MnO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IFtkZXZpY2UsIHNldERldmljZV0gPSB1c2VTdGF0ZSh7XG4gICAgaXNNb2JpbGU6ICcnLFxuICAgIGlzVGFibGV0OiAnJyxcbiAgICBpc0Rlc2t0b3A6ICcnLFxuICB9KTtcblxuICBjb25zdCBzZXRDdXJyZW50RGV2aWNlID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgaXNNb2JpbGUgPSB3aWR0aCA8PSA5OTI7XG4gICAgY29uc3QgaGFzVG91Y2ggPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHBvaW50ZXI6IGNvYXJzZSknKS5tYXRjaGVzO1xuXG4gICAgc2V0RGV2aWNlKHtcbiAgICAgIGlzTW9iaWxlOiBmYWxzZSxcbiAgICAgIGlzVGFibGV0OiBmYWxzZSxcbiAgICAgIGlzRGVza3RvcDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgIHNldERldmljZSh7IC4uLmRldmljZSwgaXNNb2JpbGU6IHRydWUgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNUb3VjaCkge1xuICAgICAgc2V0RGV2aWNlLmlzVGFibGV0KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXREZXZpY2UuaXNEZXNrdG9wKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEN1cnJlbnREZXZpY2UoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0Q3VycmVudERldmljZSgpKTtcbiAgfSwgW3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRDdXJyZW50RGV2aWNlKCkpXSk7XG5cbiAgY29uc29sZS5sb2coZGV2aWNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM1NThhZjFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9pbWcvZmF2LnN2Z1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lci5hbGlnbkNvbnRhaW5lcn0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEJhY2tMaW5rIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTY3JvbGxUb1RvcCAvPlxuICAgICAgey8qIDxNb2JpbGVOYXYgLz4gKi99XG4gICAgICB7LyogPEZvb3RlciAvPiAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})