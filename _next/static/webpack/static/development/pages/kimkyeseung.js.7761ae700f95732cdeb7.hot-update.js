webpackHotUpdate("static/development/pages/kimkyeseung.js",{

/***/ "./kimkyeseung/src/components/Space.jsx":
/*!**********************************************!*\
  !*** ./kimkyeseung/src/components/Space.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Kyeseung/Documents/boardgame-study/kimkyeseung/src/components/Space.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 200px;\\n  width: 150px;\\n  border: 1px solid red;\\n  background: \", \";\\n  & > header {\\n    height: 20px;\\n    background: rgba(255, 255, 255, 5);\\n    & > .vp {\\n      color: white;\\n      font-size: 4em;\\n      -webkit-text-stroke-width: 1px;\\n      -webkit-text-stroke-color: black;\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nconsole.log(process.env);\nvar Space = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), function (_ref) {\n  var background = _ref.background;\n  return background && \"url(../../assets/image/\".concat(background, \".jpg)\");\n});\n_c = Space;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref2) {\n  var development = _ref2.development,\n      onClick = _ref2.onClick;\n  var grade = development.grade,\n      cost = development.cost,\n      value = development.value,\n      victoryPoint = development.victoryPoint;\n  return __jsx(Space, {\n    onClick: onClick,\n    background: value + grade,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"header\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"vp\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, victoryPoint ? victoryPoint : '')));\n});\n\nvar _c;\n\n$RefreshReg$(_c, \"Space\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9raW1reWVzZXVuZy9zcmMvY29tcG9uZW50cy9TcGFjZS5qc3g/MWI3YSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIlNwYWNlIiwic3R5bGVkIiwiZGl2IiwiYmFja2dyb3VuZCIsImRldmVsb3BtZW50Iiwib25DbGljayIsImdyYWRlIiwiY29zdCIsInZhbHVlIiwidmljdG9yeVBvaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQU8sQ0FBQ0MsR0FBcEI7QUFFQSxJQUFNQyxLQUFLLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBSUs7QUFBQSxNQUFHQyxVQUFILFFBQUdBLFVBQUg7QUFBQSxTQUFvQkEsVUFBVSxxQ0FBOEJBLFVBQTlCLFVBQTlCO0FBQUEsQ0FKTCxDQUFYO0tBQU1ILEs7QUFpQlMsZ0ZBQThCO0FBQUEsTUFBM0JJLFdBQTJCLFNBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLE9BQWMsU0FBZEEsT0FBYztBQUFBLE1BQ25DQyxLQURtQyxHQUNFRixXQURGLENBQ25DRSxLQURtQztBQUFBLE1BQzVCQyxJQUQ0QixHQUNFSCxXQURGLENBQzVCRyxJQUQ0QjtBQUFBLE1BQ3RCQyxLQURzQixHQUNFSixXQURGLENBQ3RCSSxLQURzQjtBQUFBLE1BQ2ZDLFlBRGUsR0FDRUwsV0FERixDQUNmSyxZQURlO0FBRTNDLFNBQ0UsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFSixPQUFoQjtBQUF5QixjQUFVLEVBQUVHLEtBQUssR0FBR0YsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJHLFlBQVksR0FBR0EsWUFBSCxHQUFrQixFQUFqRCxDQURGLENBREYsQ0FERjtBQU9ELENBVEQiLCJmaWxlIjoiLi9raW1reWVzZXVuZy9zcmMvY29tcG9uZW50cy9TcGFjZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudilcblxuY29uc3QgU3BhY2UgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgYmFja2dyb3VuZDogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IGJhY2tncm91bmQgJiYgYHVybCguLi8uLi9hc3NldHMvaW1hZ2UvJHtiYWNrZ3JvdW5kfS5qcGcpYH07XG4gICYgPiBoZWFkZXIge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDUpO1xuICAgICYgPiAudnAge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgKHsgZGV2ZWxvcG1lbnQsIG9uQ2xpY2sgfSkgPT4ge1xuICBjb25zdCB7IGdyYWRlLCBjb3N0LCB2YWx1ZSwgdmljdG9yeVBvaW50IH0gPSBkZXZlbG9wbWVudFxuICByZXR1cm4gKFxuICAgIDxTcGFjZSBvbkNsaWNrPXtvbkNsaWNrfSBiYWNrZ3JvdW5kPXt2YWx1ZSArIGdyYWRlfT5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInZwXCI+e3ZpY3RvcnlQb2ludCA/IHZpY3RvcnlQb2ludCA6ICcnfTwvcD5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvU3BhY2U+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./kimkyeseung/src/components/Space.jsx\n");

/***/ })

})