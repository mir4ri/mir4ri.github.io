webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Pagination/index.jsx":
/*!*****************************************!*\
  !*** ./components/Pagination/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _jsxFileName = \"/Users/mir4ri/Desktop/Mirari/prgm/FrontEnd/fkep/components/Pagination/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar Pagination = function Pagination(_ref) {\n  _s();\n\n  var totalPosts = _ref.totalPosts;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      currentPage = _useState[0],\n      setCurrentPage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(4),\n      itemsPerPage = _useState2[0],\n      setItemsPerPage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(3),\n      pageNumberLimit = _useState3[0];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(5),\n      maxPageNumberLimit = _useState4[0],\n      setmaxPageNumberLimit = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      minPageNumberLimit = _useState5[0],\n      setminPageNumberLimit = _useState5[1];\n\n  var handleClick = function handleClick(event) {\n    setCurrentPage(Number(event.target.id));\n  };\n\n  var pages = [];\n\n  for (var i = 1; i <= Math.ceil(totalPosts.length / itemsPerPage); i++) {\n    pages.push(i);\n  }\n\n  var indexOfLastItem = currentPage * itemsPerPage;\n  var indexOfFirstItem = indexOfLastItem - itemsPerPage;\n  var currentItems = 2; // const currentItems = totalPosts.slice(indexOfFirstItem, indexOfLastItem);\n\n  var renderPageNumbers = pages.map(function (number) {\n    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        id: number,\n        onClick: handleClick,\n        className: currentPage == number ? \"active\" : null,\n        children: number\n      }, number, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this);\n    } else {\n      return null;\n    }\n  }); // useEffect(() => {\n  //   fetch(\"https://jsonplaceholder.typicode.com/todos\")\n  //     .then((response) => response.json())\n  //     .then((json) => setData(json));\n  // }, []);\n\n  var handleNextbtn = function handleNextbtn() {\n    setCurrentPage(currentPage + 1);\n\n    if (currentPage + 1 > maxPageNumberLimit) {\n      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);\n      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);\n    }\n  };\n\n  var handlePrevbtn = function handlePrevbtn() {\n    setCurrentPage(currentPage - 1);\n\n    if ((currentPage - 1) % pageNumberLimit == 0) {\n      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);\n      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);\n    }\n  };\n\n  var pageIncrementBtn = null;\n\n  if (pages.length > maxPageNumberLimit) {\n    pageIncrementBtn = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      onClick: handleNextbtn,\n      children: \" \\u2026 \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 24\n    }, _this);\n  }\n\n  var pageDecrementBtn = null;\n\n  if (minPageNumberLimit >= 1) {\n    pageDecrementBtn = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      onClick: handlePrevbtn,\n      children: \" \\u2026 \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 24\n    }, _this);\n  }\n\n  var handleLoadMore = function handleLoadMore() {\n    setItemsPerPage(itemsPerPage + 5);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Todo List\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 26\n    }, _this), renderData(currentItems), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: \"pageNumbers\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: handlePrevbtn,\n          disabled: currentPage == pages[0] ? true : false,\n          children: \"Prev\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), pageDecrementBtn, renderPageNumbers, pageIncrementBtn, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: handleNextbtn,\n          disabled: currentPage == pages[pages.length - 1] ? true : false,\n          children: \"Next\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: handleLoadMore,\n      className: \"loadmore\",\n      children: \"Load More\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Pagination, \"H9LE8tHAu2OFS0NDikPUyBxXfG0=\");\n\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uL2luZGV4LmpzeD81MjFmIl0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJ0b3RhbFBvc3RzIiwidXNlU3RhdGUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiaXRlbXNQZXJQYWdlIiwic2V0SXRlbXNQZXJQYWdlIiwicGFnZU51bWJlckxpbWl0IiwibWF4UGFnZU51bWJlckxpbWl0Iiwic2V0bWF4UGFnZU51bWJlckxpbWl0IiwibWluUGFnZU51bWJlckxpbWl0Iiwic2V0bWluUGFnZU51bWJlckxpbWl0IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsIk51bWJlciIsInRhcmdldCIsImlkIiwicGFnZXMiLCJpIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwdXNoIiwiaW5kZXhPZkxhc3RJdGVtIiwiaW5kZXhPZkZpcnN0SXRlbSIsImN1cnJlbnRJdGVtcyIsInJlbmRlclBhZ2VOdW1iZXJzIiwibWFwIiwibnVtYmVyIiwiaGFuZGxlTmV4dGJ0biIsImhhbmRsZVByZXZidG4iLCJwYWdlSW5jcmVtZW50QnRuIiwicGFnZURlY3JlbWVudEJ0biIsImhhbmRsZUxvYWRNb3JlIiwicmVuZGVyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLENBQUQsQ0FEVDtBQUFBLE1BQzlCQyxXQUQ4QjtBQUFBLE1BQ2pCQyxjQURpQjs7QUFBQSxtQkFFR0Ysc0RBQVEsQ0FBQyxDQUFELENBRlg7QUFBQSxNQUU5QkcsWUFGOEI7QUFBQSxNQUVoQkMsZUFGZ0I7O0FBQUEsbUJBSVhKLHNEQUFRLENBQUMsQ0FBRCxDQUpHO0FBQUEsTUFJOUJLLGVBSjhCOztBQUFBLG1CQUtlTCxzREFBUSxDQUFDLENBQUQs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Q0FBQ0QsWUFBWSxHQUFHLENBQWhCLENBQWY7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixvQkFDcUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURyQixFQUVHNkIsVUFBVSxDQUFDVCxZQUFELENBRmIsZUFHRTtBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUNFLGlCQUFPLEVBQUVLLGFBRFg7QUFFRSxrQkFBUSxFQUFFM0IsV0FBVyxJQUFJYyxLQUFLLENBQUMsQ0FBRCxDQUFwQixHQUEwQixJQUExQixHQUFpQyxLQUY3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQVNHZSxnQkFUSCxFQVVHTixpQkFWSCxFQVdHSyxnQkFYSCxlQWFFO0FBQUEsK0JBQ0U7QUFDRSxpQkFBTyxFQUFFRixhQURYO0FBRUUsa0JBQVEsRUFBRTFCLFdBQVcsSUFBSWMsS0FBSyxDQUFDQSxLQUFLLENBQUNJLE1BQU4sR0FBZSxDQUFoQixDQUFwQixHQUF5QyxJQUF6QyxHQUFnRCxLQUY1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQXlCRTtBQUFRLGFBQU8sRUFBRVksY0FBakI7QUFBaUMsZUFBUyxFQUFDLFVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJGO0FBQUEsa0JBREY7QUErQkQsQ0E1R0Q7O0dBQU1qQyxVOztLQUFBQSxVO0FBOEdTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgdG90YWxQb3N0cyB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpdGVtc1BlclBhZ2UsIHNldEl0ZW1zUGVyUGFnZV0gPSB1c2VTdGF0ZSg0KTtcblxuICBjb25zdCBbcGFnZU51bWJlckxpbWl0XSA9IHVzZVN0YXRlKDMpO1xuICBjb25zdCBbbWF4UGFnZU51bWJlckxpbWl0LCBzZXRtYXhQYWdlTnVtYmVyTGltaXRdID0gdXNlU3RhdGUoNSk7XG4gIGNvbnN0IFttaW5QYWdlTnVtYmVyTGltaXQsIHNldG1pblBhZ2VOdW1iZXJMaW1pdF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIHNldEN1cnJlbnRQYWdlKE51bWJlcihldmVudC50YXJnZXQuaWQpKTtcbiAgfTtcblxuICBjb25zdCBwYWdlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwodG90YWxQb3N0cy5sZW5ndGggLyBpdGVtc1BlclBhZ2UpOyBpKyspIHtcbiAgICBwYWdlcy5wdXNoKGkpO1xuICB9XG5cbiAgY29uc3QgaW5kZXhPZkxhc3RJdGVtID0gY3VycmVudFBhZ2UgKiBpdGVtc1BlclBhZ2U7XG4gIGNvbnN0IGluZGV4T2ZGaXJzdEl0ZW0gPSBpbmRleE9mTGFzdEl0ZW0gLSBpdGVtc1BlclBhZ2U7XG4gIGNvbnN0IGN1cnJlbnRJdGVtcyA9IDI7XG4gIC8vIGNvbnN0IGN1cnJlbnRJdGVtcyA9IHRvdGFsUG9zdHMuc2xpY2UoaW5kZXhPZkZpcnN0SXRlbSwgaW5kZXhPZkxhc3RJdGVtKTtcblxuICBjb25zdCByZW5kZXJQYWdlTnVtYmVycyA9IHBhZ2VzLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgaWYgKG51bWJlciA8IG1heFBhZ2VOdW1iZXJMaW1pdCArIDEgJiYgbnVtYmVyID4gbWluUGFnZU51bWJlckxpbWl0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGlcbiAgICAgICAgICBrZXk9e251bWJlcn1cbiAgICAgICAgICBpZD17bnVtYmVyfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudFBhZ2UgPT0gbnVtYmVyID8gXCJhY3RpdmVcIiA6IG51bGx9XG4gICAgICAgID5cbiAgICAgICAgICB7bnVtYmVyfVxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zXCIpXG4gIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gICAgIC50aGVuKChqc29uKSA9PiBzZXREYXRhKGpzb24pKTtcbiAgLy8gfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHRidG4gPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcblxuICAgIGlmIChjdXJyZW50UGFnZSArIDEgPiBtYXhQYWdlTnVtYmVyTGltaXQpIHtcbiAgICAgIHNldG1heFBhZ2VOdW1iZXJMaW1pdChtYXhQYWdlTnVtYmVyTGltaXQgKyBwYWdlTnVtYmVyTGltaXQpO1xuICAgICAgc2V0bWluUGFnZU51bWJlckxpbWl0KG1pblBhZ2VOdW1iZXJMaW1pdCArIHBhZ2VOdW1iZXJMaW1pdCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByZXZidG4gPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgLSAxKTtcblxuICAgIGlmICgoY3VycmVudFBhZ2UgLSAxKSAlIHBhZ2VOdW1iZXJMaW1pdCA9PSAwKSB7XG4gICAgICBzZXRtYXhQYWdlTnVtYmVyTGltaXQobWF4UGFnZU51bWJlckxpbWl0IC0gcGFnZU51bWJlckxpbWl0KTtcbiAgICAgIHNldG1pblBhZ2VOdW1iZXJMaW1pdChtaW5QYWdlTnVtYmVyTGltaXQgLSBwYWdlTnVtYmVyTGltaXQpO1xuICAgIH1cbiAgfTtcblxuICBsZXQgcGFnZUluY3JlbWVudEJ0biA9IG51bGw7XG4gIGlmIChwYWdlcy5sZW5ndGggPiBtYXhQYWdlTnVtYmVyTGltaXQpIHtcbiAgICBwYWdlSW5jcmVtZW50QnRuID0gPGxpIG9uQ2xpY2s9e2hhbmRsZU5leHRidG59PiAmaGVsbGlwOyA8L2xpPjtcbiAgfVxuXG4gIGxldCBwYWdlRGVjcmVtZW50QnRuID0gbnVsbDtcbiAgaWYgKG1pblBhZ2VOdW1iZXJMaW1pdCA+PSAxKSB7XG4gICAgcGFnZURlY3JlbWVudEJ0biA9IDxsaSBvbkNsaWNrPXtoYW5kbGVQcmV2YnRufT4gJmhlbGxpcDsgPC9saT47XG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2FkTW9yZSA9ICgpID0+IHtcbiAgICBzZXRJdGVtc1BlclBhZ2UoaXRlbXNQZXJQYWdlICsgNSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPlRvZG8gTGlzdDwvaDE+IDxiciAvPlxuICAgICAge3JlbmRlckRhdGEoY3VycmVudEl0ZW1zKX1cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdlTnVtYmVyc1wiPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmJ0bn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PSBwYWdlc1swXSA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcmV2XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtwYWdlRGVjcmVtZW50QnRufVxuICAgICAgICB7cmVuZGVyUGFnZU51bWJlcnN9XG4gICAgICAgIHtwYWdlSW5jcmVtZW50QnRufVxuXG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0YnRufVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlfSBjbGFzc05hbWU9XCJsb2FkbW9yZVwiPlxuICAgICAgICBMb2FkIE1vcmVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Pagination/index.jsx\n");

/***/ })

})