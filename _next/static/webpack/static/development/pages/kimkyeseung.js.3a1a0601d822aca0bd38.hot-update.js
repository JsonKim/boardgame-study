webpackHotUpdate("static/development/pages/kimkyeseung.js",{

/***/ "./kimkyeseung/src/components/Space.jsx":
/*!**********************************************!*\
  !*** ./kimkyeseung/src/components/Space.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Kyeseung/Documents/boardgame-study/kimkyeseung/src/components/Space.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 200px;\\n  width: 150px;\\n  border: 1px solid red;\\n  background-image: url(\", \");\\n  & > header {\\n    height: 20px;\\n    background: rgba(255, 255, 255, 5);\\n    & > .vp {\\n      color: white;\\n      font-size: 4em;\\n      -webkit-text-stroke-width: 1px;\\n      -webkit-text-stroke-color: black;\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Space = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), function (_ref) {\n  var backgroundUrl = _ref.backgroundUrl;\n  return backgroundUrl;\n});\n_c = Space;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref2) {\n  var development = _ref2.development,\n      onClick = _ref2.onClick;\n  var grade = development.grade,\n      cost = development.cost,\n      value = development.value,\n      victoryPoint = development.victoryPoint;\n  return __jsx(Space, {\n    onClick: onClick,\n    backgroundUrl: \"../../assets/image/\".concat(value + grade, \".jpg\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"header\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"vp\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, victoryPoint ? victoryPoint : '')));\n});\n\nvar _c;\n\n$RefreshReg$(_c, \"Space\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9raW1reWVzZXVuZy9zcmMvY29tcG9uZW50cy9TcGFjZS5qc3g/MWI3YSJdLCJuYW1lcyI6WyJTcGFjZSIsInN0eWxlZCIsImRpdiIsImJhY2tncm91bmRVcmwiLCJkZXZlbG9wbWVudCIsIm9uQ2xpY2siLCJncmFkZSIsImNvc3QiLCJ2YWx1ZSIsInZpY3RvcnlQb2ludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUllO0FBQUEsTUFBR0MsYUFBSCxRQUFHQSxhQUFIO0FBQUEsU0FBdUJBLGFBQXZCO0FBQUEsQ0FKZixDQUFYO0tBQU1ILEs7QUFpQlMsZ0ZBQThCO0FBQUEsTUFBM0JJLFdBQTJCLFNBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLE9BQWMsU0FBZEEsT0FBYztBQUFBLE1BQ25DQyxLQURtQyxHQUNFRixXQURGLENBQ25DRSxLQURtQztBQUFBLE1BQzVCQyxJQUQ0QixHQUNFSCxXQURGLENBQzVCRyxJQUQ0QjtBQUFBLE1BQ3RCQyxLQURzQixHQUNFSixXQURGLENBQ3RCSSxLQURzQjtBQUFBLE1BQ2ZDLFlBRGUsR0FDRUwsV0FERixDQUNmSyxZQURlO0FBRzNDLFNBQ0UsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFSixPQUFoQjtBQUF5QixpQkFBYSwrQkFBd0JHLEtBQUssR0FBR0YsS0FBaEMsU0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJHLFlBQVksR0FBR0EsWUFBSCxHQUFrQixFQUFqRCxDQURGLENBREYsQ0FERjtBQU9ELENBVkQiLCJmaWxlIjoiLi9raW1reWVzZXVuZy9zcmMvY29tcG9uZW50cy9TcGFjZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBTcGFjZSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsoeyBiYWNrZ3JvdW5kVXJsIH0pID0+IGJhY2tncm91bmRVcmx9KTtcbiAgJiA+IGhlYWRlciB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgNSk7XG4gICAgJiA+IC52cCB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCAoeyBkZXZlbG9wbWVudCwgb25DbGljayB9KSA9PiB7XG4gIGNvbnN0IHsgZ3JhZGUsIGNvc3QsIHZhbHVlLCB2aWN0b3J5UG9pbnQgfSA9IGRldmVsb3BtZW50XG5cbiAgcmV0dXJuIChcbiAgICA8U3BhY2Ugb25DbGljaz17b25DbGlja30gYmFja2dyb3VuZFVybD17YC4uLy4uL2Fzc2V0cy9pbWFnZS8ke3ZhbHVlICsgZ3JhZGV9LmpwZ2B9PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidnBcIj57dmljdG9yeVBvaW50ID8gdmljdG9yeVBvaW50IDogJyd9PC9wPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9TcGFjZT5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./kimkyeseung/src/components/Space.jsx\n");

/***/ })

})