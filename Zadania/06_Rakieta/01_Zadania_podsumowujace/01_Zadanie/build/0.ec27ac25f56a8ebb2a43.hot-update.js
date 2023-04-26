"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _components_Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);




var mapStateToProps = function mapStateToProps(state) {
  return {
    launched: state.rocket.launched,
    counter: state.rocket.counter
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deploy: function deploy() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.rocketAsync)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(_components_Platform__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var initialState = {
  launched: false,
  counter: 5
};
var reducerLaunched = function reducerLaunched() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.LAUNCHING:
      return _objectSpread(_objectSpread({}, state), {}, {
        launched: true
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        counter: state.counter - 1
      });
    default:
      return state;
  }
};
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  rocket: reducerLaunched
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("761923e245f4771e4448")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYzI3YWMyNWY1NmE4ZWJiMmE0My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNtQjtBQUNDO0FBQ1Y7QUFFcEMsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkMsUUFBUSxFQUFFRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0QsUUFBUTtJQUMvQkUsT0FBTyxFQUFFSCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0M7RUFDMUIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ0MsTUFBTSxFQUFFLFNBQUFBLE9BQUE7TUFBQSxPQUFLRCxRQUFRLENBQUNULDJEQUFXLEVBQUUsQ0FBQztJQUFBO0VBQ3hDLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVFLG9EQUFPLENBQUNDLGVBQWUsRUFBRUssa0JBQWtCLENBQUMsQ0FBQ1AsNERBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2R0QjtBQUNUO0FBRXRDLElBQU1hLFlBQVksR0FBRztFQUNqQlQsUUFBUSxFQUFFLEtBQUs7RUFDZkUsT0FBTyxFQUFFO0FBQ2IsQ0FBQztBQUVELElBQU1RLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFtQztFQUFBLElBQS9CWCxLQUFLLEdBQUFZLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDRixZQUFZO0VBQUEsSUFBRUssTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQy9DLFFBQU9DLE1BQU0sQ0FBQ0MsSUFBSTtJQUNkLEtBQUtSLCtDQUFTO01BQ1YsT0FBQVMsYUFBQSxDQUFBQSxhQUFBLEtBQ09qQixLQUFLO1FBQ1JDLFFBQVEsRUFBRTtNQUFJO0lBRXRCLEtBQUtNLCtDQUFTO01BQ1YsT0FBQVUsYUFBQSxDQUFBQSxhQUFBLEtBQ09qQixLQUFLO1FBQ1JHLE9BQU8sRUFBRUgsS0FBSyxDQUFDRyxPQUFPLEdBQUc7TUFBQztJQUVsQztNQUNJLE9BQU9ILEtBQUs7RUFBQTtBQUV4QixDQUFDO0FBRU0sSUFBTWtCLFdBQVcsR0FBR1Qsc0RBQWUsQ0FBQztFQUN2Q1AsTUFBTSxFQUFFUztBQUNaLENBQUMsQ0FBQzs7Ozs7Ozs7VUMzQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1BsYXRmb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7cm9ja2V0QXN5bmN9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGxhdW5jaGVkOiBzdGF0ZS5yb2NrZXQubGF1bmNoZWQsXHJcbiAgICBjb3VudGVyOiBzdGF0ZS5yb2NrZXQuY291bnRlclxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBkZXBsb3k6ICgpPT4gZGlzcGF0Y2gocm9ja2V0QXN5bmMoKSlcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQbGF0Zm9ybSlcclxuIiwiaW1wb3J0IHtERUNSRU1FTlQsIExBVU5DSElOR30gZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsYXVuY2hlZDogZmFsc2UsXHJcbiAgICBjb3VudGVyOiA1XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXJMYXVuY2hlZCA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMQVVOQ0hJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxhdW5jaGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIERFQ1JFTUVOVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY291bnRlcjogc3RhdGUuY291bnRlciAtIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgcm9ja2V0OiByZWR1Y2VyTGF1bmNoZWRcclxufSlcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzYxOTIzZTI0NWY0NzcxZTQ0NDhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJyb2NrZXRBc3luYyIsIlBsYXRmb3JtIiwiY29ubmVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibGF1bmNoZWQiLCJyb2NrZXQiLCJjb3VudGVyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJkZXBsb3kiLCJERUNSRU1FTlQiLCJMQVVOQ0hJTkciLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyTGF1bmNoZWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwiX29iamVjdFNwcmVhZCIsInJvb3RSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==