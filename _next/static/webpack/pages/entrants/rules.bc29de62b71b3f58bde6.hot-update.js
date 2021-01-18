webpackHotUpdate_N_E("pages/entrants/rules",{

/***/ "./pages/entrants/rules/index.jsx":
/*!****************************************!*\
  !*** ./pages/entrants/rules/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout/index.jsx\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./pages/entrants/rules/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_rulers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/rulers.json */ \"./api/rulers.json\");\nvar _api_rulers_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../api/rulers.json */ \"./api/rulers.json\", 1);\n/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Accordion */ \"./components/Accordion/index.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/client/pages/entrants/rules/index.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Rules = function Rules(_ref) {\n  var className = _ref.className;\n  return __jsx(\"main\", {\n    className: className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"\\u0424\\u041A\\u0415\\u041F - \\u041F\\u0440\\u0430\\u0432\\u0438\\u043B\\u0430 \\u043F\\u0440\\u0438\\u0439\\u043E\\u043C\\u0443 \\u0442\\u0430 \\u0456\\u043D\\u0448\\u0456 \\u043D\\u043E\\u0440\\u043C\\u0430\\u0442\\u0438\\u0432\\u043D\\u0456 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0438\"), __jsx(\"meta\", {\n    name: \"theme-color\",\n    content: \"#558af1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/static/img/fav.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  })), __jsx(\"h2\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, \"\\u041F\\u0440\\u0430\\u0432\\u0438\\u043B\\u0430 \\u043F\\u0440\\u0438\\u0439\\u043E\\u043C\\u0443 \\u0442\\u0430 \\u0456\\u043D\\u0448\\u0456 \\u043D\\u043E\\u0440\\u043C\\u0430\\u0442\\u0438\\u0432\\u043D\\u0456 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0438\"), __jsx(\"h3\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, \"\\u041F\\u0435\\u0440\\u0435\\u043B\\u0456\\u043A \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0456\\u0432 \\u0434\\u043B\\u044F \\u0432\\u0441\\u0442\\u0443\\u043F\\u0443:\"), __jsx(\"ul\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listDescribe,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"\\u043A\\u043E\\u043F\\u0456\\u044E \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0430 \\u0434\\u0435\\u0440\\u0436\\u0430\\u0432\\u043D\\u043E\\u0433\\u043E \\u0437\\u0440\\u0430\\u0437\\u043A\\u0430 \\u043F\\u0440\\u043E \\u043E\\u0441\\u0432\\u0456\\u0442\\u0443 (\\u0441\\u0432\\u0456\\u0434\\u043E\\u0446\\u0442\\u0432\\u043E \\u043F\\u0440\\u043E \\u0437\\u0434\\u043E\\u0431\\u0443\\u0442\\u0442\\u044F \\u0431\\u0430\\u0437\\u043E\\u0432\\u043E\\u0457 \\u0437\\u0430\\u0433\\u0430\\u043B\\u044C\\u043D\\u043E\\u0457 \\u0441\\u0435\\u0440\\u0435\\u0434\\u043D\\u044C\\u043E\\u0457 \\u043E\\u0441\\u0432\\u0456\\u0442\\u0438, \\u0441\\u0432\\u0456\\u0434\\u043E\\u0446\\u0442\\u0432\\u043E \\u043F\\u0440\\u043E \\u0437\\u0434\\u043E\\u0431\\u0443\\u0442\\u0442\\u044F \\u043F\\u043E\\u0432\\u043D\\u043E\\u0457 \\u0437\\u0430\\u0433\\u0430\\u043B\\u044C\\u043D\\u043E\\u0457 \\u0441\\u0435\\u0440\\u0435\\u0434\\u043D\\u044C\\u043E\\u0457 \\u043E\\u0441\\u0432\\u0456\\u0442\\u0438, \\u0434\\u0438\\u043F\\u043B\\u043E\\u043C) \\u0442\\u0430 \\u0434\\u043E\\u0434\\u0430\\u0442\\u043E\\u043A \\u0434\\u043E \\u043D\\u044C\\u043E\\u0433\\u043E;\"), __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"\\u043A\\u043E\\u043F\\u0456\\u044F \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0430, \\u0449\\u043E \\u043F\\u043E\\u0441\\u0432\\u0456\\u0434\\u0447\\u0443\\u0454 \\u043E\\u0441\\u043E\\u0431\\u0443 \\u0442\\u0430 \\u0433\\u0440\\u043E\\u043C\\u0430\\u0434\\u044F\\u043D\\u0441\\u0442\\u0432\\u043E (\\u043F\\u0430\\u0441\\u043F\\u043E\\u0440\\u0442 \\u0433\\u0440\\u043E\\u043C\\u0430\\u0434\\u044F\\u043D\\u0438\\u043D\\u0430 \\u0423\\u043A\\u0440\\u0430\\u0457\\u043D\\u0438 (ID - \\u043A\\u0430\\u0440\\u0442\\u043A\\u0430) \\u0442\\u0430 \\u0432\\u0438\\u0442\\u044F\\u0433 \\u0437 \\u0404\\u0434\\u0438\\u043D\\u043E\\u0433\\u043E \\u0434\\u0435\\u0440\\u0436\\u0430\\u0432\\u043D\\u043E\\u0433\\u043E \\u0440\\u0435\\u0454\\u0441\\u0442\\u0440\\u0443);\"), __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"\\u0434\\u043E\\u0432\\u0456\\u0434\\u043A\\u0430 \\u0434\\u043E\\u0434\\u0430\\u0442\\u043A\\u0443 13 \\u0434\\u043E \\u041F\\u0440\\u0430\\u0432\\u0438\\u043B \\u0440\\u0435\\u0454\\u0441\\u0442\\u0440\\u0430\\u0446\\u0456\\u0457 \\u043C\\u0456\\u0441\\u0446\\u044F \\u043F\\u0440\\u043E\\u0436\\u0438\\u0432\\u0430\\u043D\\u043D\\u044F \\u0442\\u0430 \\u041F\\u043E\\u0440\\u044F\\u0434\\u043A\\u0443 \\u043F\\u0435\\u0440\\u0435\\u0434\\u0430\\u0447\\u0456 \\u043E\\u0440\\u0433\\u0430\\u043D\\u0430\\u043C\\u0438 \\u0440\\u0435\\u0454\\u0441\\u0442\\u0440\\u0430\\u0446\\u0456\\u0457 \\u0456\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0456\\u0457 \\u0442\\u0430 \\u0434\\u043E \\u0404\\u0434\\u0438\\u043D\\u043E\\u0433\\u043E \\u0434\\u0435\\u0440\\u0436\\u0430\\u0432\\u043D\\u043E\\u0433\\u043E \\u0434\\u0435\\u043C\\u043E\\u0433\\u0440\\u0430\\u0444\\u0456\\u0447\\u043D\\u043E\\u0433\\u043E \\u0440\\u0435\\u0454\\u0441\\u0442\\u0440\\u0443;\"), __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"\\u043C\\u0435\\u0434\\u0438\\u0447\\u043D\\u0430 \\u0434\\u043E\\u0432\\u0456\\u0434\\u043A\\u0430 \\u0437\\u0430 \\u0444\\u043E\\u0440\\u043C\\u043E\\u044E 086-\\u043E (\\u0456\\u0437 \\u0437\\u0430\\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u043D\\u044F\\u043C \\u0433\\u0440\\u0443\\u043F\\u0438 \\u0437\\u0434\\u043E\\u0440\\u043E\\u0432\\u2019\\u044F);\"), __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \"4 \\u043A\\u043E\\u043B\\u044C\\u043E\\u0440\\u043E\\u0432\\u0438\\u0445 \\u0444\\u043E\\u0442\\u043E\\u043A\\u0430\\u0440\\u0442\\u043E\\u043A \\u0440\\u043E\\u0437\\u043C\\u0456\\u0440\\u043E\\u043C 3\\u04454 \\u0441\\u043C;\"), __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, \"\\u043A\\u043E\\u043F\\u0456\\u044F \\u0440\\u0435\\u0454\\u0441\\u0442\\u0440\\u0430\\u0446\\u0456\\u0439\\u043D\\u043E\\u0433\\u043E \\u043D\\u043E\\u043C\\u0435\\u0440\\u0430 \\u043E\\u0431\\u043B\\u0456\\u043A\\u043E\\u0432\\u043E\\u0457 \\u043A\\u0430\\u0440\\u0442\\u043A\\u0438 \\u043F\\u043B\\u0430\\u0442\\u043D\\u0438\\u043A\\u0430 \\u043F\\u043E\\u0434\\u0430\\u0442\\u043A\\u0456\\u0432 (\\u0456\\u0434\\u0435\\u043D\\u0442\\u0438\\u0444\\u0456\\u043A\\u0430\\u0446\\u0456\\u0439\\u043D\\u0438\\u0439 \\u043A\\u043E\\u0434);\"), __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, \"\\u043A\\u043E\\u043F\\u0456\\u044F \\u0432\\u0456\\u0439\\u0441\\u044C\\u043A\\u043E\\u0432\\u043E\\u0433\\u043E \\u043A\\u0432\\u0438\\u0442\\u043A\\u0430 / \\u043F\\u0440\\u0438\\u043F\\u0438\\u0441\\u043D\\u043E\\u0433\\u043E \\u0441\\u0432\\u0456\\u0434\\u043E\\u0446\\u0442\\u0432\\u0430 (\\u0434\\u043B\\u044F \\u0432\\u0441\\u0442\\u0443\\u043F\\u043D\\u0438\\u043A\\u0456\\u0432 \\u043D\\u0430 \\u0431\\u0430\\u0437\\u0456 11 \\u043A\\u043B. / \\u0437\\u0434\\u043E\\u0431\\u0443\\u0442\\u043E\\u0433\\u043E \\u041E\\u041A\\u0420);\"), __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, \"\\u0441\\u0435\\u0440\\u0442\\u0438\\u0444\\u0456\\u043A\\u0430\\u0442\\u0430(\\u0456\\u0432) \\u0437\\u043E\\u0432\\u043D\\u0456\\u0448\\u043D\\u044C\\u043E\\u0433\\u043E \\u043D\\u0435\\u0437\\u0430\\u043B\\u0435\\u0436\\u043D\\u043E\\u0433\\u043E \\u043E\\u0446\\u0456\\u043D\\u044E\\u0432\\u0430\\u043D\\u043D\\u044F (\\u0434\\u043B\\u044F \\u0432\\u0441\\u0442\\u0443\\u043F\\u043D\\u0438\\u043A\\u0456\\u0432 \\u043D\\u0430 \\u0431\\u0430\\u0437\\u0456 11 \\u043A\\u043B.);\"), __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, \"2 \\u043A\\u043E\\u043D\\u0432\\u0435\\u0440\\u0442\\u0438 \\u0437 \\u043C\\u0430\\u0440\\u043A\\u0430\\u043C\\u0438 \\u043F\\u043E \\u0423\\u043A\\u0440\\u0430\\u0457\\u043D\\u0456;\"), __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, \"\\u043F\\u0430\\u043F\\u043A\\u0430 \\u0456\\u0437 \\u0437\\u0430\\u0432\\u2019\\u044F\\u0437\\u043A\\u0430\\u043C\\u0438.\")), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, \"\\u0406\\u043D\\u0448\\u0456 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0438 \\u0430\\u0431\\u043E \\u0457\\u0445 \\u043A\\u043E\\u043F\\u0456\\u0457, \\u0449\\u043E \\u043D\\u0430\\u0434\\u0430\\u044E\\u0442\\u044C \\u043F\\u0440\\u0430\\u0432\\u043E \\u043D\\u0430 \\u0441\\u043F\\u0435\\u0446\\u0456\\u0430\\u043B\\u044C\\u043D\\u0456 \\u0443\\u043C\\u043E\\u0432\\u0438 \\u0434\\u043B\\u044F \\u0443\\u0447\\u0430\\u0441\\u0442\\u0456 \\u0432 \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0441\\u043D\\u043E\\u043C\\u0443 \\u0432\\u0456\\u0434\\u0431\\u043E\\u0440\\u0456.\"), __jsx(\"p\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.medium,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, \"\\u0417\\u0430\\u044F\\u0432\\u0430 \\u0432 \\u043F\\u0430\\u043F\\u0435\\u0440\\u043E\\u0432\\u0456\\u0439 \\u0444\\u043E\\u0440\\u043C\\u0456 \\u043F\\u043E\\u0434\\u0430\\u0454\\u0442\\u044C\\u0441\\u044F \\u0432\\u0441\\u0442\\u0443\\u043F\\u043D\\u0438\\u043A\\u043E\\u043C \\u043E\\u0441\\u043E\\u0431\\u0438\\u0441\\u0442\\u043E.\"), __jsx(\"p\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.medium,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, \"\\u041A\\u043E\\u043F\\u0456\\u0457 \\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442\\u0456\\u0432 \\u0431\\u0435\\u0437 \\u043F\\u0440\\u0435\\u0434\\u2019\\u044F\\u0432\\u043B\\u0435\\u043D\\u043D\\u044F \\u043E\\u0440\\u0438\\u0433\\u0456\\u043D\\u0430\\u043B\\u0456\\u0432 \\u043D\\u0435 \\u043F\\u0440\\u0438\\u0439\\u043C\\u0430\\u044E\\u0442\\u044C\\u0441\\u044F.\"), __jsx(\"h3\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, \"\\u0412\\u0430\\u0440\\u0442\\u0456\\u0441\\u0442\\u044C \\u043D\\u0430\\u0432\\u0447\\u0430\\u043D\\u043D\\u044F \\u043D\\u0430 2021-2022 \\u043D.\\u0440. :\"), __jsx(\"ul\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listDescribe,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, \"\\u043D\\u0430 \\u0434\\u0435\\u043D\\u043D\\u0443 \\u0444\\u043E\\u0440\\u043C\\u0443 \\u043D\\u0430\\u0432\\u0447\\u0430\\u043D\\u043D\\u044F \\xAD\\xAD- 12500 \\u0433\\u0440\\u043D.\"), __jsx(\"li\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.describeItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, \"\\u043D\\u0430 \\u0437\\u0430\\u043E\\u0447\\u043D\\u0443 \\u0444\\u043E\\u0440\\u043C\\u0443 \\u043D\\u0430\\u0432\\u0447\\u0430\\u043D\\u043D\\u044F \\xAD- 9375 \\u0433\\u0440\\u043D.\")), __jsx(\"h3\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, \"\\u041F\\u0440\\u0430\\u0432\\u0438\\u043B\\u0430 \\u043F\\u0440\\u0438\\u0439\\u043E\\u043C\\u0443 \\u0434\\u043E \\u041A\\u043E\\u043B\\u0435\\u0434\\u0436\\u0443 \\u0435\\u043B\\u0435\\u043A\\u0442\\u0440\\u043E\\u043D\\u043D\\u0438\\u0445 \\u043F\\u0440\\u0438\\u043B\\u0430\\u0434\\u0456\\u0432 \\u0406\\u0432\\u0430\\u043D\\u043E-\\u0424\\u0440\\u0430\\u043D\\u043A\\u0456\\u0432\\u0441\\u044C\\u043A\\u043E\\u0433\\u043E \\u043D\\u0430\\u0446\\u0456\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u043E\\u0433\\u043E \\u0442\\u0435\\u0445\\u043D\\u0456\\u0447\\u043D\\u043E\\u0433\\u043E \\u0443\\u043D\\u0456\\u0432\\u0435\\u0440\\u0441\\u0438\\u0442\\u0435\\u0442\\u0443 \\u043D\\u0430\\u0444\\u0442\\u0438 \\u0456 \\u0433\\u0430\\u0437\\u0443 \\u0432 2022 \\u0440\\u043E\\u0446\\u0456\"), __jsx(_components_Accordion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    documents: _api_rulers_json__WEBPACK_IMPORTED_MODULE_4__,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c = Rules;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Rules));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Rules\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50cmFudHMvcnVsZXMvaW5kZXguanN4PzQxODYiXSwibmFtZXMiOlsiUnVsZXMiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJ0aXRsZSIsInN1YnRpdGxlIiwibGlzdERlc2NyaWJlIiwiZGVzY3JpYmVJdGVtIiwibWVkaXVtIiwicnVsZXJzIiwid2l0aExheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxTQUNaO0FBQU0sYUFBUyxFQUFFQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrUkFERixFQUVFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxxQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsRUFPRTtBQUFJLGFBQVMsRUFBRUMsa0RBQU0sQ0FBQ0MsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1UEFQRixFQVVFO0FBQUksYUFBUyxFQUFFRCxrREFBTSxDQUFDRSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdLQVZGLEVBV0U7QUFBSSxhQUFTLEVBQUVGLGtEQUFNLENBQUNHLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUgsa0RBQU0sQ0FBQ0ksWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpL0JBREYsRUFNRTtBQUFJLGFBQVMsRUFBRUosa0RBQU0sQ0FBQ0ksWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxcUJBTkYsRUFVRTtBQUFJLGFBQVMsRUFBRUosa0RBQU0sQ0FBQ0ksWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrMEJBVkYsRUFlRTtBQUFJLGFBQVMsRUFBRUosa0RBQU0sQ0FBQ0ksWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2VEFmRixFQWtCRTtBQUFJLGFBQVMsRUFBRUosa0RBQU0sQ0FBQ0ksWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyTUFsQkYsRUFxQkU7QUFBSSxhQUFTLEVBQUVKLGtEQUFNLENBQUNJLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscWRBckJGLEVBeUJFO0FBQUksYUFBUyxFQUFFSixrREFBTSxDQUFDSSxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBkQXpCRixFQTZCRTtBQUFJLGFBQVMsRUFBRUosa0RBQU0sQ0FBQ0ksWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxYUE3QkYsRUFpQ0U7QUFBSSxhQUFTLEVBQUVKLGtEQUFNLENBQUNJLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUtBakNGLEVBa0NFO0FBQUksYUFBUyxFQUFFSixrREFBTSxDQUFDSSxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlIQWxDRixDQVhGLEVBK0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscWdCQS9DRixFQW1ERTtBQUFHLGFBQVMsRUFBRUosa0RBQU0sQ0FBQ0ssTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5U0FuREYsRUFzREU7QUFBRyxhQUFTLEVBQUVMLGtEQUFNLENBQUNLLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNlVBdERGLEVBeURFO0FBQUksYUFBUyxFQUFFTCxrREFBTSxDQUFDRSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlKQXpERixFQTBERTtBQUFJLGFBQVMsRUFBRUYsa0RBQU0sQ0FBQ0csWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFSCxrREFBTSxDQUFDSSxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVLQURGLEVBSUU7QUFBSSxhQUFTLEVBQUVKLGtEQUFNLENBQUNJLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0tBSkYsQ0ExREYsRUFrRUU7QUFBSSxhQUFTLEVBQUVKLGtEQUFNLENBQUNFLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ3JCQWxFRixFQXNFRSxNQUFDLDZEQUFEO0FBQVcsYUFBUyxFQUFFSSw2Q0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRFRixDQURZO0FBQUEsQ0FBZDs7S0FBTVIsSztBQTJFUyxxRUFBQVMsa0VBQVUsQ0FBQ1QsS0FBRCxDQUF6QiIsImZpbGUiOiIuL3BhZ2VzL2VudHJhbnRzL3J1bGVzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB3aXRoTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZS5zY3NzXCI7XG5cbmltcG9ydCBydWxlcnMgZnJvbSBcIi4uLy4uLy4uL2FwaS9ydWxlcnMuanNvblwiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9BY2NvcmRpb25cIjtcblxuY29uc3QgUnVsZXMgPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxuICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+0KTQmtCV0J8gLSDQn9GA0LDQstC40LvQsCDQv9GA0LjQudC+0LzRgyDRgtCwINGW0L3RiNGWINC90L7RgNC80LDRgtC40LLQvdGWINC00L7QutGD0LzQtdC90YLQuDwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzU1OGFmMVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvaW1nL2Zhdi5zdmdcIj48L2xpbms+XG4gICAgPC9IZWFkPlxuICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICDQn9GA0LDQstC40LvQsCDQv9GA0LjQudC+0LzRgyDRgtCwINGW0L3RiNGWINC90L7RgNC80LDRgtC40LLQvdGWINC00L7QutGD0LzQtdC90YLQuFxuICAgIDwvaDI+XG4gICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT7Qn9C10YDQtdC70ZbQuiDQtNC+0LrRg9C80LXQvdGC0ZbQsiDQtNC70Y8g0LLRgdGC0YPQv9GDOjwvaDM+XG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3REZXNjcmliZX0+XG4gICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpYmVJdGVtfT5cbiAgICAgICAg0LrQvtC/0ZbRjiDQtNC+0LrRg9C80LXQvdGC0LAg0LTQtdGA0LbQsNCy0L3QvtCz0L4g0LfRgNCw0LfQutCwINC/0YDQviDQvtGB0LLRltGC0YMgKNGB0LLRltC00L7RhtGC0LLQviDQv9GA0L4g0LfQtNC+0LHRg9GC0YLRj1xuICAgICAgICDQsdCw0LfQvtCy0L7RlyDQt9Cw0LPQsNC70YzQvdC+0Zcg0YHQtdGA0LXQtNC90YzQvtGXINC+0YHQstGW0YLQuCwg0YHQstGW0LTQvtGG0YLQstC+INC/0YDQviDQt9C00L7QsdGD0YLRgtGPINC/0L7QstC90L7Rl1xuICAgICAgICDQt9Cw0LPQsNC70YzQvdC+0Zcg0YHQtdGA0LXQtNC90YzQvtGXINC+0YHQstGW0YLQuCwg0LTQuNC/0LvQvtC8KSDRgtCwINC00L7QtNCw0YLQvtC6INC00L4g0L3RjNC+0LPQvjtcbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpYmVJdGVtfT5cbiAgICAgICAg0LrQvtC/0ZbRjyDQtNC+0LrRg9C80LXQvdGC0LAsINGJ0L4g0L/QvtGB0LLRltC00YfRg9GUINC+0YHQvtCx0YMg0YLQsCDQs9GA0L7QvNCw0LTRj9C90YHRgtCy0L4gKNC/0LDRgdC/0L7RgNGCINCz0YDQvtC80LDQtNGP0L3QuNC90LBcbiAgICAgICAg0KPQutGA0LDRl9C90LggKElEIC0g0LrQsNGA0YLQutCwKSDRgtCwINCy0LjRgtGP0LMg0Lcg0ITQtNC40L3QvtCz0L4g0LTQtdGA0LbQsNCy0L3QvtCz0L4g0YDQtdGU0YHRgtGA0YMpO1xuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmliZUl0ZW19PlxuICAgICAgICDQtNC+0LLRltC00LrQsCDQtNC+0LTQsNGC0LrRgyAxMyDQtNC+INCf0YDQsNCy0LjQuyDRgNC10ZTRgdGC0YDQsNGG0ZbRlyDQvNGW0YHRhtGPINC/0YDQvtC20LjQstCw0L3QvdGPINGC0LAg0J/QvtGA0Y/QtNC60YNcbiAgICAgICAg0L/QtdGA0LXQtNCw0YfRliDQvtGA0LPQsNC90LDQvNC4INGA0LXRlNGB0YLRgNCw0YbRltGXINGW0L3RhNC+0YDQvNCw0YbRltGXINGC0LAg0LTQviDQhNC00LjQvdC+0LPQviDQtNC10YDQttCw0LLQvdC+0LPQvlxuICAgICAgICDQtNC10LzQvtCz0YDQsNGE0ZbRh9C90L7Qs9C+INGA0LXRlNGB0YLRgNGDO1xuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmliZUl0ZW19PlxuICAgICAgICDQvNC10LTQuNGH0L3QsCDQtNC+0LLRltC00LrQsCDQt9CwINGE0L7RgNC80L7RjiAwODYt0L4gKNGW0Lcg0LfQsNC30L3QsNGH0LXQvdC90Y/QvCDQs9GA0YPQv9C4INC30LTQvtGA0L7QsuKAmdGPKTtcbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpYmVJdGVtfT5cbiAgICAgICAgNCDQutC+0LvRjNC+0YDQvtCy0LjRhSDRhNC+0YLQvtC60LDRgNGC0L7QuiDRgNC+0LfQvNGW0YDQvtC8IDPRhTQg0YHQvDtcbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpYmVJdGVtfT5cbiAgICAgICAg0LrQvtC/0ZbRjyDRgNC10ZTRgdGC0YDQsNGG0ZbQudC90L7Qs9C+INC90L7QvNC10YDQsCDQvtCx0LvRltC60L7QstC+0Zcg0LrQsNGA0YLQutC4INC/0LvQsNGC0L3QuNC60LAg0L/QvtC00LDRgtC60ZbQslxuICAgICAgICAo0ZbQtNC10L3RgtC40YTRltC60LDRhtGW0LnQvdC40Lkg0LrQvtC0KTtcbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpYmVJdGVtfT5cbiAgICAgICAg0LrQvtC/0ZbRjyDQstGW0LnRgdGM0LrQvtCy0L7Qs9C+INC60LLQuNGC0LrQsCAvINC/0YDQuNC/0LjRgdC90L7Qs9C+INGB0LLRltC00L7RhtGC0LLQsCAo0LTQu9GPINCy0YHRgtGD0L/QvdC40LrRltCyINC90LAg0LHQsNC30ZZcbiAgICAgICAgMTEg0LrQuy4gLyDQt9C00L7QsdGD0YLQvtCz0L4g0J7QmtCgKTtcbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpYmVJdGVtfT5cbiAgICAgICAg0YHQtdGA0YLQuNGE0ZbQutCw0YLQsCjRltCyKSDQt9C+0LLQvdGW0YjQvdGM0L7Qs9C+INC90LXQt9Cw0LvQtdC20L3QvtCz0L4g0L7RhtGW0L3RjtCy0LDQvdC90Y8gKNC00LvRjyDQstGB0YLRg9C/0L3QuNC60ZbQsiDQvdCwXG4gICAgICAgINCx0LDQt9GWIDExINC60LsuKTtcbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpYmVJdGVtfT4yINC60L7QvdCy0LXRgNGC0Lgg0Lcg0LzQsNGA0LrQsNC80Lgg0L/QviDQo9C60YDQsNGX0L3Rljs8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaWJlSXRlbX0+0L/QsNC/0LrQsCDRltC3INC30LDQsuKAmdGP0LfQutCw0LzQuC48L2xpPlxuICAgIDwvdWw+XG4gICAgPHA+XG4gICAgICDQhtC90YjRliDQtNC+0LrRg9C80LXQvdGC0Lgg0LDQsdC+INGX0YUg0LrQvtC/0ZbRlywg0YnQviDQvdCw0LTQsNGO0YLRjCDQv9GA0LDQstC+INC90LAg0YHQv9C10YbRltCw0LvRjNC90ZYg0YPQvNC+0LLQuCDQtNC70Y9cbiAgICAgINGD0YfQsNGB0YLRliDQsiDQutC+0L3QutGD0YDRgdC90L7QvNGDINCy0ZbQtNCx0L7RgNGWLlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZWRpdW19PlxuICAgICAg0JfQsNGP0LLQsCDQsiDQv9Cw0L/QtdGA0L7QstGW0Lkg0YTQvtGA0LzRliDQv9C+0LTQsNGU0YLRjNGB0Y8g0LLRgdGC0YPQv9C90LjQutC+0Lwg0L7RgdC+0LHQuNGB0YLQvi5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWVkaXVtfT5cbiAgICAgINCa0L7Qv9GW0Zcg0LTQvtC60YPQvNC10L3RgtGW0LIg0LHQtdC3INC/0YDQtdC04oCZ0Y/QstC70LXQvdC90Y8g0L7RgNC40LPRltC90LDQu9GW0LIg0L3QtSDQv9GA0LjQudC80LDRjtGC0YzRgdGPLlxuICAgIDwvcD5cbiAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PtCS0LDRgNGC0ZbRgdGC0Ywg0L3QsNCy0YfQsNC90L3RjyDQvdCwIDIwMjEtMjAyMiDQvS7RgC4gOjwvaDM+XG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3REZXNjcmliZX0+XG4gICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpYmVJdGVtfT5cbiAgICAgICAg0L3QsCDQtNC10L3QvdGDINGE0L7RgNC80YMg0L3QsNCy0YfQsNC90L3RjyDCrcKtLSAxMjUwMCDQs9GA0L0uXG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaWJlSXRlbX0+XG4gICAgICAgINC90LAg0LfQsNC+0YfQvdGDINGE0L7RgNC80YMg0L3QsNCy0YfQsNC90L3RjyDCrS0gOTM3NSDQs9GA0L0uXG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgINCf0YDQsNCy0LjQu9CwINC/0YDQuNC50L7QvNGDINC00L4g0JrQvtC70LXQtNC20YMg0LXQu9C10LrRgtGA0L7QvdC90LjRhSDQv9GA0LjQu9Cw0LTRltCyINCG0LLQsNC90L4t0KTRgNCw0L3QutGW0LLRgdGM0LrQvtCz0L5cbiAgICAgINC90LDRhtGW0L7QvdCw0LvRjNC90L7Qs9C+INGC0LXRhdC90ZbRh9C90L7Qs9C+INGD0L3RltCy0LXRgNGB0LjRgtC10YLRgyDQvdCw0YTRgtC4INGWINCz0LDQt9GDINCyIDIwMjIg0YDQvtGG0ZZcbiAgICA8L2gzPlxuICAgIDxBY2NvcmRpb24gZG9jdW1lbnRzPXtydWxlcnN9IC8+XG4gIDwvbWFpbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMYXlvdXQoUnVsZXMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/entrants/rules/index.jsx\n");

/***/ })

})