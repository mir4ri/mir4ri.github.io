webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.jsx\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Container */ \"./components/Container/index.jsx\");\n/* harmony import */ var _components_BackLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BackLink */ \"./components/BackLink/index.jsx\");\n/* harmony import */ var _components_ScrollToTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ScrollToTop */ \"./components/ScrollToTop/index.jsx\");\n/* harmony import */ var _components_MobileNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MobileNav */ \"./components/MobileNav/index.jsx\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Menu */ \"./components/Menu/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.jsx\");\n/* harmony import */ var _index_index_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/index.module.scss */ \"./pages/index/index.module.scss\");\n/* harmony import */ var _index_index_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_index_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_slider_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/slider.css */ \"./styles/slider.css\");\n/* harmony import */ var _styles_slider_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_slider_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_Container_container_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Container/container.module.scss */ \"./components/Container/container.module.scss\");\n/* harmony import */ var _components_Container_container_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_Container_container_module_scss__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\nvar _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/pages/_app.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_mir4ri_Desktop_Mirari_prgm_FrontEnd_fkep_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar App = function App(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    isMobile: '',\n    isTablet: '',\n    isDesktop: ''\n  }),\n      device = _useState[0],\n      setDevice = _useState[1];\n\n  setIsMobile = function setIsMobile() {\n    var width = window.innerWidth;\n    var isMobile = width <= 992;\n    var hasTouch = window.matchMedia('(pointer: coarse)').matches;\n    setDevice({\n      isMobile: false,\n      isTablet: false,\n      isDesktop: false\n    });\n\n    if (isMobile) {\n      deviceState.isMobile = true;\n    } else if (hasTouch) {\n      deviceState.isTablet = true;\n    } else {\n      deviceState.isDesktop = true;\n    }\n\n    if (JSON.stringify(_this.state.device) !== JSON.stringify(deviceState)) {\n      _this.setState({\n        device: deviceState\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"theme-color\",\n        content: \"#558af1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/static/img/fav.svg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _components_Container_container_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.alignContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_BackLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _index_index_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.content,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ScrollToTop__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(App, \"ZaoItd21ZTd+xCsUyIoOwO/+bPc=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJpc1RhYmxldCIsImlzRGVza3RvcCIsImRldmljZSIsInNldERldmljZSIsInNldElzTW9iaWxlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGFzVG91Y2giLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRldmljZVN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXRlIiwic2V0U3RhdGUiLCJjb250YWluZXIiLCJhbGlnbkNvbnRhaW5lciIsInN0eWxlcyIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQztBQUNuQ0MsWUFBUSxFQUFFLEVBRHlCO0FBRW5DQyxZQUFRLEVBQUUsRUFGeUI7QUFHbkNDLGFBQVMsRUFBRTtBQUh3QixHQUFELENBREk7QUFBQSxNQUNqQ0MsTUFEaUM7QUFBQSxNQUN6QkMsU0FEeUI7O0FBTXhDQyxhQUFXLEdBQUcsdUJBQU07QUFDbEIsUUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQXJCO0FBQ0EsUUFBTVIsUUFBUSxHQUFHTSxLQUFLLElBQUksR0FBMUI7QUFDQSxRQUFNRyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixtQkFBbEIsRUFBdUNDLE9BQXhEO0FBRUFQLGFBQVMsQ0FBQztBQUNSSixjQUFRLEVBQUUsS0FERjtBQUVSQyxjQUFRLEVBQUUsS0FGRjtBQUdSQyxlQUFTLEVBQUU7QUFISCxLQUFELENBQVQ7O0FBTUEsUUFBSUYsUUFBSixFQUFjO0FBQ1pZLGlCQUFXLENBQUNaLFFBQVosR0FBdUIsSUFBdkI7QUFDRCxLQUZELE1BRU8sSUFBSVMsUUFBSixFQUFjO0FBQ25CRyxpQkFBVyxDQUFDWCxRQUFaLEdBQXVCLElBQXZCO0FBQ0QsS0FGTSxNQUVBO0FBQ0xXLGlCQUFXLENBQUNWLFNBQVosR0FBd0IsSUFBeEI7QUFDRDs7QUFFRCxRQUFJVyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFJLENBQUNDLEtBQUwsQ0FBV1osTUFBMUIsTUFBc0NVLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixXQUFmLENBQTFDLEVBQXVFO0FBQ3JFLFdBQUksQ0FBQ0ksUUFBTCxDQUFjO0FBQUViLGNBQU0sRUFBRVM7QUFBVixPQUFkO0FBQ0Q7QUFDRixHQXRCRDs7QUF3QkEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQU9FLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVFFO0FBQUssZUFBUyxFQUFFSyxtRkFBUyxDQUFDQyxjQUExQjtBQUFBLDZCQUNFLHFFQUFDLDZEQUFEO0FBQUEsZ0NBQ0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRUMsZ0VBQU0sQ0FBQ0MsT0FBdkI7QUFBQSxpQ0FDRSxxRUFBQyxTQUFELG9CQUFldEIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFnQkUscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRjtBQUFBLGtCQURGO0FBc0JELENBcEREOztHQUFNRixHOztLQUFBQSxHO0FBc0RTQSxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXInO1xuaW1wb3J0IEJhY2tMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQmFja0xpbmsnO1xuaW1wb3J0IFNjcm9sbFRvVG9wIGZyb20gJy4uL2NvbXBvbmVudHMvU2Nyb2xsVG9Ub3AnO1xuaW1wb3J0IE1vYmlsZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZU5hdic7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC9pbmRleC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc2xpZGVyLmNzcyc7XG5pbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyL2NvbnRhaW5lci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgW2RldmljZSwgc2V0RGV2aWNlXSA9IHVzZVN0YXRlKHtcbiAgICBpc01vYmlsZTogJycsXG4gICAgaXNUYWJsZXQ6ICcnLFxuICAgIGlzRGVza3RvcDogJycsXG4gIH0pO1xuICBzZXRJc01vYmlsZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IGlzTW9iaWxlID0gd2lkdGggPD0gOTkyO1xuICAgIGNvbnN0IGhhc1RvdWNoID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwb2ludGVyOiBjb2Fyc2UpJykubWF0Y2hlcztcblxuICAgIHNldERldmljZSh7XG4gICAgICBpc01vYmlsZTogZmFsc2UsXG4gICAgICBpc1RhYmxldDogZmFsc2UsXG4gICAgICBpc0Rlc2t0b3A6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICBkZXZpY2VTdGF0ZS5pc01vYmlsZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChoYXNUb3VjaCkge1xuICAgICAgZGV2aWNlU3RhdGUuaXNUYWJsZXQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXZpY2VTdGF0ZS5pc0Rlc2t0b3AgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmRldmljZSkgIT09IEpTT04uc3RyaW5naWZ5KGRldmljZVN0YXRlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldmljZTogZGV2aWNlU3RhdGUgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzU1OGFmMVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2ltZy9mYXYuc3ZnXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyLmFsaWduQ29udGFpbmVyfT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8QmFja0xpbmsgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNjcm9sbFRvVG9wIC8+XG4gICAgICB7LyogPE1vYmlsZU5hdiAvPiAqL31cbiAgICAgIHsvKiA8Rm9vdGVyIC8+ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})