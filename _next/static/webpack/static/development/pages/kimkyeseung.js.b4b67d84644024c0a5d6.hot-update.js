webpackHotUpdate("static/development/pages/kimkyeseung.js",{

/***/ "./kimkyeseung/src/components/Board.jsx":
/*!**********************************************!*\
  !*** ./kimkyeseung/src/components/Board.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Space__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Space */ \"./kimkyeseung/src/components/Space.jsx\");\n/* harmony import */ var _assets_developmentCards_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/developmentCards.json */ \"./kimkyeseung/assets/developmentCards.json\");\nvar _assets_developmentCards_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/developmentCards.json */ \"./kimkyeseung/assets/developmentCards.json\", 1);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Kyeseung/Documents/boardgame-study/kimkyeseung/src/components/Board.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__[\"default\"])([\"\\n  display: flex;\\n  justify-content: space-between;\\n  & > * {\\n    margin: 0.4rem;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__[\"default\"])([\"\\n  text-align: center;\\n  font-weight: bold;\\n  font-size: 25px;\\n  color: #555;\\n  width: 50px;\\n  height: 50px;\\n  line-height: 50px;\\n  border: 3px solid #aaa;\\n  background: #fff;\\n  &.active {\\n    cursor: pointer;\\n    background: #eeffe9;\\n    &:hover {\\n      background: #eeffff;\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__[\"default\"])([\"\\n  margin-top: 25px;\\n  width: 168px;\\n  text-align: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar Winner = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div(_templateObject());\nvar Cell = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].td(_templateObject2());\nvar Row = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].section(_templateObject3());\n_c = Row;\n\nvar Board = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Board, _Component);\n\n  var _super = _createSuper(Board);\n\n  function Board(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Board);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onClick\", function (id) {\n      _this.props.moves.buyDevelopment(id);\n    });\n\n    _this.state = {\n      boards: {\n        developmentOne: [],\n        developmentTwo: [],\n        developmentThree: []\n      },\n      tokens: {\n        red: 0,\n        green: 0,\n        blue: 0,\n        white: 0,\n        black: 0,\n        yellow: 0\n      }\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Board, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"isActive\",\n    value: function isActive(id) {\n      if (!this.props.isActive) return false;\n      if (this.props.G.cells[id] !== null) return false;\n      return true;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      // let winner = null\n      // if (this.props.ctx.gameover) {\n      //   winner = this.props.ctx.gameover.winner !== undefined\n      //     ? <Winner>Winner: {this.props.ctx.gameover.winner}</Winner>\n      //     : <Winner>Draw!</Winner>\n      // }\n      var G = this.props.G;\n      var _G$board = G.board,\n          developmentOne = _G$board.developmentOne,\n          developmentTwo = _G$board.developmentTwo,\n          developmentThree = _G$board.developmentThree;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 7\n        }\n      }, __jsx(Row, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 9\n        }\n      }, developmentThree.map(function (dev) {\n        return __jsx(_Space__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          grade: 3,\n          development: dev,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 40\n          }\n        });\n      })), __jsx(Row, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 9\n        }\n      }, developmentTwo.map(function (dev) {\n        return __jsx(_Space__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          grade: 2,\n          development: dev,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 38\n          }\n        });\n      })), __jsx(Row, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 9\n        }\n      }, developmentOne.map(function (dev) {\n        return __jsx(_Space__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          grade: 1,\n          development: dev,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 38\n          }\n        });\n      })));\n    }\n  }]);\n\n  return Board;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nObject(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Board, \"propTypes\", {\n  G: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,\n  ctx: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,\n  moves: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,\n  playerID: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,\n  isActive: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,\n  isMultiplayer: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\nvar _c;\n\n$RefreshReg$(_c, \"Row\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9raW1reWVzZXVuZy9zcmMvY29tcG9uZW50cy9Cb2FyZC5qc3g/N2YyOCJdLCJuYW1lcyI6WyJXaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJDZWxsIiwidGQiLCJSb3ciLCJzZWN0aW9uIiwiQm9hcmQiLCJwcm9wcyIsImlkIiwibW92ZXMiLCJidXlEZXZlbG9wbWVudCIsInN0YXRlIiwiYm9hcmRzIiwiZGV2ZWxvcG1lbnRPbmUiLCJkZXZlbG9wbWVudFR3byIsImRldmVsb3BtZW50VGhyZWUiLCJ0b2tlbnMiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJ3aGl0ZSIsImJsYWNrIiwieWVsbG93IiwiaXNBY3RpdmUiLCJHIiwiY2VsbHMiLCJib2FyZCIsIm1hcCIsImRldiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJjdHgiLCJwbGF5ZXJJRCIsInN0cmluZyIsImJvb2wiLCJpc011bHRpcGxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDBEQUFNLENBQUNDLEdBQVYsbUJBQVo7QUFNQSxJQUFNQyxJQUFJLEdBQUdGLDBEQUFNLENBQUNHLEVBQVYsb0JBQVY7QUFrQkEsSUFBTUMsR0FBRyxHQUFHSiwwREFBTSxDQUFDSyxPQUFWLG9CQUFUO0tBQU1ELEc7O0lBUUFFLEs7Ozs7O0FBU0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLGtOQXVCVCxVQUFBQyxFQUFFLEVBQUk7QUFDZCxZQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLGNBQWpCLENBQWdDRixFQUFoQztBQUNELEtBekJrQjs7QUFFakIsVUFBS0csS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRTtBQUNOQyxzQkFBYyxFQUFFLEVBRFY7QUFFTkMsc0JBQWMsRUFBRSxFQUZWO0FBR05DLHdCQUFnQixFQUFFO0FBSFosT0FERztBQU1YQyxZQUFNLEVBQUU7QUFDTkMsV0FBRyxFQUFFLENBREM7QUFFTkMsYUFBSyxFQUFFLENBRkQ7QUFHTkMsWUFBSSxFQUFFLENBSEE7QUFJTkMsYUFBSyxFQUFFLENBSkQ7QUFLTkMsYUFBSyxFQUFFLENBTEQ7QUFNTkMsY0FBTSxFQUFFO0FBTkY7QUFORyxLQUFiO0FBRmlCO0FBaUJsQjs7Ozt3Q0FFbUIsQ0FFbkI7Ozs2QkFNUWQsRSxFQUFJO0FBQ1gsVUFBSSxDQUFDLEtBQUtELEtBQUwsQ0FBV2dCLFFBQWhCLEVBQTBCLE9BQU8sS0FBUDtBQUMxQixVQUFJLEtBQUtoQixLQUFMLENBQVdpQixDQUFYLENBQWFDLEtBQWIsQ0FBbUJqQixFQUFuQixNQUEyQixJQUEvQixFQUFxQyxPQUFPLEtBQVA7QUFDckMsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBPLFVBUUNnQixDQVJELEdBUU8sS0FBS2pCLEtBUlosQ0FRQ2lCLENBUkQ7QUFBQSxxQkFTc0RBLENBQUMsQ0FBQ0UsS0FUeEQ7QUFBQSxVQVNDYixjQVRELFlBU0NBLGNBVEQ7QUFBQSxVQVNpQkMsY0FUakIsWUFTaUJBLGNBVGpCO0FBQUEsVUFTaUNDLGdCQVRqQyxZQVNpQ0EsZ0JBVGpDO0FBVVAsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0EsZ0JBQWdCLENBQUNZLEdBQWpCLENBQXFCLFVBQUFDLEdBQUc7QUFBQSxlQUFJLE1BQUMsK0NBQUQ7QUFBTyxlQUFLLEVBQUUsQ0FBZDtBQUFpQixxQkFBVyxFQUFFQSxHQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUo7QUFBQSxPQUF4QixDQURILENBREYsRUFJRSxNQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHZCxjQUFjLENBQUNhLEdBQWYsQ0FBbUIsVUFBQUMsR0FBRztBQUFBLGVBQUksTUFBQywrQ0FBRDtBQUFPLGVBQUssRUFBRSxDQUFkO0FBQWlCLHFCQUFXLEVBQUVBLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBSjtBQUFBLE9BQXRCLENBREgsQ0FKRixFQU9FLE1BQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dmLGNBQWMsQ0FBQ2MsR0FBZixDQUFtQixVQUFBQyxHQUFHO0FBQUEsZUFBSSxNQUFDLCtDQUFEO0FBQU8sZUFBSyxFQUFFLENBQWQ7QUFBaUIscUJBQVcsRUFBRUEsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFKO0FBQUEsT0FBdEIsQ0FESCxDQVBGLENBREY7QUFhRDs7OztFQWpFaUJDLCtDOzswRkFBZHZCLEssZUFDZTtBQUNqQmtCLEdBQUMsRUFBRU0saURBQVMsQ0FBQ0MsR0FBVixDQUFjQyxVQURBO0FBRWpCQyxLQUFHLEVBQUVILGlEQUFTLENBQUNDLEdBQVYsQ0FBY0MsVUFGRjtBQUdqQnZCLE9BQUssRUFBRXFCLGlEQUFTLENBQUNDLEdBQVYsQ0FBY0MsVUFISjtBQUlqQkUsVUFBUSxFQUFFSixpREFBUyxDQUFDSyxNQUpIO0FBS2pCWixVQUFRLEVBQUVPLGlEQUFTLENBQUNNLElBTEg7QUFNakJDLGVBQWEsRUFBRVAsaURBQVMsQ0FBQ007QUFOUixDOztBQW1FTjlCLG9FQUFmIiwiZmlsZSI6Ii4va2lta3llc2V1bmcvc3JjL2NvbXBvbmVudHMvQm9hcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBTcGFjZSBmcm9tICcuL1NwYWNlJ1xuaW1wb3J0IGRldmVsb3BtZW50Q2FyZHMgZnJvbSAnLi4vLi4vYXNzZXRzL2RldmVsb3BtZW50Q2FyZHMuanNvbidcblxuY29uc3QgV2lubmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgd2lkdGg6IDE2OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmNvbnN0IENlbGwgPSBzdHlsZWQudGRgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM1NTU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjYWFhO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAmLmFjdGl2ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICNlZWZmZTk7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWVmZmZmO1xuICAgIH1cbiAgfVxuYFxuY29uc3QgUm93ID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMC40cmVtO1xuICB9XG5gXG5cbmNsYXNzIEJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBHOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgY3R4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgbW92ZXM6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBwbGF5ZXJJRDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNNdWx0aXBsYXllcjogUHJvcFR5cGVzLmJvb2wsXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm9hcmRzOiB7XG4gICAgICAgIGRldmVsb3BtZW50T25lOiBbXSxcbiAgICAgICAgZGV2ZWxvcG1lbnRUd286IFtdLFxuICAgICAgICBkZXZlbG9wbWVudFRocmVlOiBbXVxuICAgICAgfSxcbiAgICAgIHRva2Vuczoge1xuICAgICAgICByZWQ6IDAsXG4gICAgICAgIGdyZWVuOiAwLFxuICAgICAgICBibHVlOiAwLFxuICAgICAgICB3aGl0ZTogMCxcbiAgICAgICAgYmxhY2s6IDAsXG4gICAgICAgIHllbGxvdzogMFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBvbkNsaWNrID0gaWQgPT4ge1xuICAgIHRoaXMucHJvcHMubW92ZXMuYnV5RGV2ZWxvcG1lbnQoaWQpXG4gIH1cblxuICBpc0FjdGl2ZShpZCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc0FjdGl2ZSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGlzLnByb3BzLkcuY2VsbHNbaWRdICE9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAvLyBsZXQgd2lubmVyID0gbnVsbFxuICAgIC8vIGlmICh0aGlzLnByb3BzLmN0eC5nYW1lb3Zlcikge1xuICAgIC8vICAgd2lubmVyID0gdGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIud2lubmVyICE9PSB1bmRlZmluZWRcbiAgICAvLyAgICAgPyA8V2lubmVyPldpbm5lcjoge3RoaXMucHJvcHMuY3R4LmdhbWVvdmVyLndpbm5lcn08L1dpbm5lcj5cbiAgICAvLyAgICAgOiA8V2lubmVyPkRyYXchPC9XaW5uZXI+XG4gICAgLy8gfVxuICAgIGNvbnN0IHsgRyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZGV2ZWxvcG1lbnRPbmUsIGRldmVsb3BtZW50VHdvLCBkZXZlbG9wbWVudFRocmVlIH0gPSBHLmJvYXJkXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAge2RldmVsb3BtZW50VGhyZWUubWFwKGRldiA9PiA8U3BhY2UgZ3JhZGU9ezN9IGRldmVsb3BtZW50PXtkZXZ9IC8+KX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAge2RldmVsb3BtZW50VHdvLm1hcChkZXYgPT4gPFNwYWNlIGdyYWRlPXsyfSBkZXZlbG9wbWVudD17ZGV2fSAvPil9XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIHtkZXZlbG9wbWVudE9uZS5tYXAoZGV2ID0+IDxTcGFjZSBncmFkZT17MX0gZGV2ZWxvcG1lbnQ9e2Rldn0gLz4pfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./kimkyeseung/src/components/Board.jsx\n");

/***/ })

})