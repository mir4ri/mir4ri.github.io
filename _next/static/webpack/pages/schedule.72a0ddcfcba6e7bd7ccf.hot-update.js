webpackHotUpdate_N_E("pages/schedule",{

/***/ "./components/Accordion/index.jsx":
/*!****************************************!*\
  !*** ./components/Accordion/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./components/Accordion/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/components/Accordion/index.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // type: server || static\n\nvar Accordion = function Accordion(_ref) {\n  var documents = _ref.documents,\n      type = _ref.type;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.accordion_list,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, documents.map(function (document) {\n    return __jsx(\"li\", {\n      className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.accordion_list_item,\n      key: document.sys.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }\n    }, __jsx(AccordionItem, {\n      title: document.fields.title,\n      link: document.fields.link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 15\n      }\n    }));\n  })));\n};\n\n_c = Accordion;\n\nvar AccordionItem = function AccordionItem(_ref2) {\n  _s();\n\n  var title = _ref2.title,\n      link = _ref2.link;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      accordionState = _useState[0],\n      toggleAccordion = _useState[1];\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.accordion_item, \", \").concat(accordionState && _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.accordion_item__opened),\n    onClick: function onClick() {\n      toggleAccordion(!accordionState);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.accordion_item__line,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.accordion_item__icon,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }), __jsx(\"h3\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.accordion_item__title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, title)), __jsx(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.accordion_item__inner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.accordion_item__content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, accordionState && __jsx(\"iframe\", {\n    src: link,\n    loading: \"lazy\",\n    width: \"100%\",\n    height: \"550px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(AccordionItem, \"/u8Gp486ArFgLN05/EydpS8dAcw=\");\n\n_c2 = AccordionItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Accordion\");\n$RefreshReg$(_c2, \"AccordionItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24vaW5kZXguanN4PzlmYzIiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiZG9jdW1lbnRzIiwidHlwZSIsImFjY29yZGlvbiIsImFjY29yZGlvbl9saXN0IiwibWFwIiwiZG9jdW1lbnQiLCJhY2NvcmRpb25fbGlzdF9pdGVtIiwic3lzIiwiaWQiLCJmaWVsZHMiLCJ0aXRsZSIsImxpbmsiLCJBY2NvcmRpb25JdGVtIiwidXNlU3RhdGUiLCJhY2NvcmRpb25TdGF0ZSIsInRvZ2dsZUFjY29yZGlvbiIsImFjY29yZGlvbl9pdGVtIiwiYWNjb3JkaW9uX2l0ZW1fX29wZW5lZCIsImFjY29yZGlvbl9pdGVtX19saW5lIiwiYWNjb3JkaW9uX2l0ZW1fX2ljb24iLCJhY2NvcmRpb25faXRlbV9fdGl0bGUiLCJhY2NvcmRpb25faXRlbV9faW5uZXIiLCJhY2NvcmRpb25faXRlbV9fY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXlCO0FBQUEsTUFBdEJDLFNBQXNCLFFBQXRCQSxTQUFzQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUMsa0RBQVMsQ0FBQ0MsY0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxTQUFTLENBQUNJLEdBQVYsQ0FBYyxVQUFDQyxRQUFELEVBQWM7QUFDM0IsV0FDRTtBQUFJLGVBQVMsRUFBRUgsa0RBQVMsQ0FBQ0ksbUJBQXpCO0FBQThDLFNBQUcsRUFBRUQsUUFBUSxDQUFDRSxHQUFULENBQWFDLEVBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGFBQUQ7QUFDRSxXQUFLLEVBQUVILFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQkMsS0FEekI7QUFFRSxVQUFJLEVBQUVMLFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQkUsSUFGeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFRRCxHQVRBLENBREgsQ0FERixDQURGO0FBZ0JELENBakJEOztLQUFNWixTOztBQW1CTixJQUFNYSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLFFBQXFCO0FBQUE7O0FBQUEsTUFBbEJGLEtBQWtCLFNBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLElBQVcsU0FBWEEsSUFBVzs7QUFBQSxrQkFDQ0Usc0RBQVEsQ0FBQyxLQUFELENBRFQ7QUFBQSxNQUNsQ0MsY0FEa0M7QUFBQSxNQUNsQkMsZUFEa0I7O0FBRXpDLFNBQ0U7QUFDRSxhQUFTLFlBQUtiLGtEQUFTLENBQUNjLGNBQWYsZUFDUEYsY0FBYyxJQUFJWixrREFBUyxDQUFDZSxzQkFEckIsQ0FEWDtBQUlFLFdBQU8sRUFBRSxtQkFBTTtBQUNiRixxQkFBZSxDQUFDLENBQUNELGNBQUYsQ0FBZjtBQUNELEtBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUssYUFBUyxFQUFFWixrREFBUyxDQUFDZ0Isb0JBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRWhCLGtEQUFTLENBQUNpQixvQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSSxhQUFTLEVBQUVqQixrREFBUyxDQUFDa0IscUJBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaURWLEtBQWpELENBRkYsQ0FSRixFQVlFO0FBQUssYUFBUyxFQUFFUixrREFBUyxDQUFDbUIscUJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRW5CLGtEQUFTLENBQUNvQix1QkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixjQUFjLElBQ2I7QUFBUSxPQUFHLEVBQUVILElBQWI7QUFBbUIsV0FBTyxFQUFDLE1BQTNCO0FBQWtDLFNBQUssRUFBQyxNQUF4QztBQUErQyxVQUFNLEVBQUMsT0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREYsQ0FaRixDQURGO0FBc0JELENBeEJEOztHQUFNQyxhOztNQUFBQSxhO0FBMEJTYix3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWNjb3JkaW9uL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYWNjb3JkaW9uIGZyb20gXCIuL3N0eWxlLnNjc3NcIjtcbi8vIHR5cGU6IHNlcnZlciB8fCBzdGF0aWNcbmNvbnN0IEFjY29yZGlvbiA9ICh7IGRvY3VtZW50cywgdHlwZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2FjY29yZGlvbi5hY2NvcmRpb25fbGlzdH0+XG4gICAgICAgIHtkb2N1bWVudHMubWFwKChkb2N1bWVudCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY2NvcmRpb24uYWNjb3JkaW9uX2xpc3RfaXRlbX0ga2V5PXtkb2N1bWVudC5zeXMuaWR9PlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVxuICAgICAgICAgICAgICAgIHRpdGxlPXtkb2N1bWVudC5maWVsZHMudGl0bGV9XG4gICAgICAgICAgICAgICAgbGluaz17ZG9jdW1lbnQuZmllbGRzLmxpbmt9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEFjY29yZGlvbkl0ZW0gPSAoeyB0aXRsZSwgbGluayB9KSA9PiB7XG4gIGNvbnN0IFthY2NvcmRpb25TdGF0ZSwgdG9nZ2xlQWNjb3JkaW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake2FjY29yZGlvbi5hY2NvcmRpb25faXRlbX0sICR7XG4gICAgICAgIGFjY29yZGlvblN0YXRlICYmIGFjY29yZGlvbi5hY2NvcmRpb25faXRlbV9fb3BlbmVkXG4gICAgICB9YH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgdG9nZ2xlQWNjb3JkaW9uKCFhY2NvcmRpb25TdGF0ZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthY2NvcmRpb24uYWNjb3JkaW9uX2l0ZW1fX2xpbmV9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2FjY29yZGlvbi5hY2NvcmRpb25faXRlbV9faWNvbn0gLz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17YWNjb3JkaW9uLmFjY29yZGlvbl9pdGVtX190aXRsZX0+e3RpdGxlfTwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthY2NvcmRpb24uYWNjb3JkaW9uX2l0ZW1fX2lubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FjY29yZGlvbi5hY2NvcmRpb25faXRlbV9fY29udGVudH0+XG4gICAgICAgICAge2FjY29yZGlvblN0YXRlICYmIChcbiAgICAgICAgICAgIDxpZnJhbWUgc3JjPXtsaW5rfSBsb2FkaW5nPVwibGF6eVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjU1MHB4XCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Accordion/index.jsx\n");

/***/ })

})