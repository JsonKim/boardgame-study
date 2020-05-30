webpackHotUpdate("static/development/pages/kimkyeseung.js",{

/***/ "./kimkyeseung/src/components/Board.jsx":
/*!**********************************************!*\
  !*** ./kimkyeseung/src/components/Board.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Space__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Space */ \"./kimkyeseung/src/components/Space.jsx\");\n/* harmony import */ var _assets_developmentCards_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/developmentCards.json */ \"./kimkyeseung/assets/developmentCards.json\");\nvar _assets_developmentCards_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/developmentCards.json */ \"./kimkyeseung/assets/developmentCards.json\", 1);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Kyeseung/Documents/boardgame-study/kimkyeseung/src/components/Board.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__[\"default\"])([\"\\n  text-align: center;\\n  font-weight: bold;\\n  font-size: 25px;\\n  color: #555;\\n  width: 50px;\\n  height: 50px;\\n  line-height: 50px;\\n  border: 3px solid #aaa;\\n  background: #fff;\\n  &.active {\\n    cursor: pointer;\\n    background: #eeffe9;\\n    &:hover {\\n      background: #eeffff;\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__[\"default\"])([\"\\n  margin-top: 25px;\\n  width: 168px;\\n  text-align: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar Winner = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div(_templateObject());\nvar Cell = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].td(_templateObject2());\n\nvar Board = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Board, _Component);\n\n  var _super = _createSuper(Board);\n\n  function Board(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Board);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onClick\", function (id) {\n      _this.props.moves.buyDevelopment(id);\n    });\n\n    _this.state = {\n      boards: {\n        developmentOne: [],\n        developmentTwo: [],\n        developmentThree: []\n      },\n      tokens: {\n        red: 0,\n        green: 0,\n        blue: 0,\n        white: 0,\n        black: 0,\n        yellow: 0\n      }\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Board, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"isActive\",\n    value: function isActive(id) {\n      if (!this.props.isActive) return false;\n      if (this.props.G.cells[id] !== null) return false;\n      return true;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // let winner = null\n      // if (this.props.ctx.gameover) {\n      //   winner = this.props.ctx.gameover.winner !== undefined\n      //     ? <Winner>Winner: {this.props.ctx.gameover.winner}</Winner>\n      //     : <Winner>Draw!</Winner>\n      // }\n      console.log(this.props);\n      var G = this.props;\n      console.log(G.board, G); // const { developmentOne, developmentTwo, developmentThree } = G.board\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 7\n        }\n      });\n    }\n  }]);\n\n  return Board;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nObject(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Board, \"propTypes\", {\n  G: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,\n  ctx: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,\n  moves: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,\n  playerID: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,\n  isActive: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,\n  isMultiplayer: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9raW1reWVzZXVuZy9zcmMvY29tcG9uZW50cy9Cb2FyZC5qc3g/N2YyOCJdLCJuYW1lcyI6WyJXaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJDZWxsIiwidGQiLCJCb2FyZCIsInByb3BzIiwiaWQiLCJtb3ZlcyIsImJ1eURldmVsb3BtZW50Iiwic3RhdGUiLCJib2FyZHMiLCJkZXZlbG9wbWVudE9uZSIsImRldmVsb3BtZW50VHdvIiwiZGV2ZWxvcG1lbnRUaHJlZSIsInRva2VucyIsInJlZCIsImdyZWVuIiwiYmx1ZSIsIndoaXRlIiwiYmxhY2siLCJ5ZWxsb3ciLCJpc0FjdGl2ZSIsIkciLCJjZWxscyIsImNvbnNvbGUiLCJsb2ciLCJib2FyZCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJjdHgiLCJwbGF5ZXJJRCIsInN0cmluZyIsImJvb2wiLCJpc011bHRpcGxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsMERBQU0sQ0FBQ0MsR0FBVixtQkFBWjtBQU1BLElBQU1DLElBQUksR0FBR0YsMERBQU0sQ0FBQ0csRUFBVixvQkFBVjs7SUFtQk1DLEs7Ozs7O0FBU0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLGtOQXVCVCxVQUFBQyxFQUFFLEVBQUk7QUFDZCxZQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLGNBQWpCLENBQWdDRixFQUFoQztBQUNELEtBekJrQjs7QUFFakIsVUFBS0csS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRTtBQUNOQyxzQkFBYyxFQUFFLEVBRFY7QUFFTkMsc0JBQWMsRUFBRSxFQUZWO0FBR05DLHdCQUFnQixFQUFFO0FBSFosT0FERztBQU1YQyxZQUFNLEVBQUU7QUFDTkMsV0FBRyxFQUFFLENBREM7QUFFTkMsYUFBSyxFQUFFLENBRkQ7QUFHTkMsWUFBSSxFQUFFLENBSEE7QUFJTkMsYUFBSyxFQUFFLENBSkQ7QUFLTkMsYUFBSyxFQUFFLENBTEQ7QUFNTkMsY0FBTSxFQUFFO0FBTkY7QUFORyxLQUFiO0FBRmlCO0FBaUJsQjs7Ozt3Q0FFbUIsQ0FFbkI7Ozs2QkFNUWQsRSxFQUFJO0FBQ1gsVUFBSSxDQUFDLEtBQUtELEtBQUwsQ0FBV2dCLFFBQWhCLEVBQTBCLE9BQU8sS0FBUDtBQUMxQixVQUFJLEtBQUtoQixLQUFMLENBQVdpQixDQUFYLENBQWFDLEtBQWIsQ0FBbUJqQixFQUFuQixNQUEyQixJQUEvQixFQUFxQyxPQUFPLEtBQVA7QUFDckMsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFFUTtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBa0IsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS3BCLEtBQWpCO0FBQ0EsVUFBTWlCLENBQUMsR0FBRyxLQUFLakIsS0FBZjtBQUNBbUIsYUFBTyxDQUFDQyxHQUFSLENBQVlILENBQUMsQ0FBQ0ksS0FBZCxFQUFxQkosQ0FBckIsRUFWTyxDQVdQOztBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBT0Q7Ozs7RUE3RGlCSywrQzs7MEZBQWR2QixLLGVBQ2U7QUFDakJrQixHQUFDLEVBQUVNLGlEQUFTLENBQUNDLEdBQVYsQ0FBY0MsVUFEQTtBQUVqQkMsS0FBRyxFQUFFSCxpREFBUyxDQUFDQyxHQUFWLENBQWNDLFVBRkY7QUFHakJ2QixPQUFLLEVBQUVxQixpREFBUyxDQUFDQyxHQUFWLENBQWNDLFVBSEo7QUFJakJFLFVBQVEsRUFBRUosaURBQVMsQ0FBQ0ssTUFKSDtBQUtqQlosVUFBUSxFQUFFTyxpREFBUyxDQUFDTSxJQUxIO0FBTWpCQyxlQUFhLEVBQUVQLGlEQUFTLENBQUNNO0FBTlIsQzs7QUErRE45QixvRUFBZiIsImZpbGUiOiIuL2tpbWt5ZXNldW5nL3NyYy9jb21wb25lbnRzL0JvYXJkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU3BhY2UgZnJvbSAnLi9TcGFjZSdcbmltcG9ydCBkZXZlbG9wbWVudENhcmRzIGZyb20gJy4uLy4uL2Fzc2V0cy9kZXZlbG9wbWVudENhcmRzLmpzb24nXG5cbmNvbnN0IFdpbm5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHdpZHRoOiAxNjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5jb25zdCBDZWxsID0gc3R5bGVkLnRkYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjNTU1O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2FhYTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgJi5hY3RpdmUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZWVmZmU5O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2VlZmZmZjtcbiAgICB9XG4gIH1cbmBcblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIEc6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBjdHg6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBtb3ZlczogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIHBsYXllcklEOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc011bHRpcGxheWVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBib2FyZHM6IHtcbiAgICAgICAgZGV2ZWxvcG1lbnRPbmU6IFtdLFxuICAgICAgICBkZXZlbG9wbWVudFR3bzogW10sXG4gICAgICAgIGRldmVsb3BtZW50VGhyZWU6IFtdXG4gICAgICB9LFxuICAgICAgdG9rZW5zOiB7XG4gICAgICAgIHJlZDogMCxcbiAgICAgICAgZ3JlZW46IDAsXG4gICAgICAgIGJsdWU6IDAsXG4gICAgICAgIHdoaXRlOiAwLFxuICAgICAgICBibGFjazogMCxcbiAgICAgICAgeWVsbG93OiAwXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIG9uQ2xpY2sgPSBpZCA9PiB7XG4gICAgdGhpcy5wcm9wcy5tb3Zlcy5idXlEZXZlbG9wbWVudChpZClcbiAgfVxuXG4gIGlzQWN0aXZlKGlkKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmlzQWN0aXZlKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMucHJvcHMuRy5jZWxsc1tpZF0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIC8vIGxldCB3aW5uZXIgPSBudWxsXG4gICAgLy8gaWYgKHRoaXMucHJvcHMuY3R4LmdhbWVvdmVyKSB7XG4gICAgLy8gICB3aW5uZXIgPSB0aGlzLnByb3BzLmN0eC5nYW1lb3Zlci53aW5uZXIgIT09IHVuZGVmaW5lZFxuICAgIC8vICAgICA/IDxXaW5uZXI+V2lubmVyOiB7dGhpcy5wcm9wcy5jdHguZ2FtZW92ZXIud2lubmVyfTwvV2lubmVyPlxuICAgIC8vICAgICA6IDxXaW5uZXI+RHJhdyE8L1dpbm5lcj5cbiAgICAvLyB9XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcbiAgICBjb25zdCBHID0gdGhpcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKEcuYm9hcmQsIEcpXG4gICAgLy8gY29uc3QgeyBkZXZlbG9wbWVudE9uZSwgZGV2ZWxvcG1lbnRUd28sIGRldmVsb3BtZW50VGhyZWUgfSA9IEcuYm9hcmRcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgey8qIHtkZXZlbG9wbWVudFRocmVlLm1hcChkZXYgPT4gPFNwYWNlIGdyYWRlPXszfSBkZXZlbG9wbWVudD17ZGV2fSAvPil9XG4gICAgICAgIHtkZXZlbG9wbWVudFR3by5tYXAoZGV2ID0+IDxTcGFjZSBncmFkZT17Mn0gZGV2ZWxvcG1lbnQ9e2Rldn0gLz4pfVxuICAgICAgICB7ZGV2ZWxvcG1lbnRPbmUubWFwKGRldiA9PiA8U3BhY2UgZ3JhZGU9ezF9IGRldmVsb3BtZW50PXtkZXZ9IC8+KX0gKi99XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./kimkyeseung/src/components/Board.jsx\n");

/***/ })

})