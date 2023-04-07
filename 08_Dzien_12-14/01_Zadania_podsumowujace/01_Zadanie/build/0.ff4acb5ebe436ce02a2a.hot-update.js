"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DECREMENT": () => (/* binding */ DECREMENT),
/* harmony export */   "LAUNCHED": () => (/* binding */ LAUNCHED),
/* harmony export */   "LAUNCHING": () => (/* binding */ LAUNCHING),
/* harmony export */   "decrementCounter": () => (/* binding */ decrementCounter),
/* harmony export */   "launchedRocket": () => (/* binding */ launchedRocket),
/* harmony export */   "startLaunching": () => (/* binding */ startLaunching)
/* harmony export */ });
var LAUNCHING = "LAUNCHING";
var LAUNCHED = "LAUNCHED";
var DECREMENT = "DECREMENT";
var startLaunching = function startLaunching() {
  return {
    type: LAUNCHING
  };
};
var launchedRocket = function launchedRocket() {
  return {
    type: LAUNCHED
  };
};
var decrementCounter = function decrementCounter() {
  return {
    type: DECREMENT
  };
};


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
    case _actions__WEBPACK_IMPORTED_MODULE_0__.LAUNCHED:
      return _objectSpread(_objectSpread({}, state), {}, {
        launched: false
      });
    default:
      return state;
  }
};
var reducerCounter = function reducerCounter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  rocket: reducerLaunched,
  counter: reducerCounter
});

/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);



var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_0__.rootReducer, (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("af6ea25ecc3c3b9ace07")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZjRhY2I1ZWJlNDM2Y2UwMmEyYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLFNBQVMsR0FBRyxXQUFXO0FBQzdCLElBQU1DLFFBQVEsR0FBRyxVQUFVO0FBQzNCLElBQU1DLFNBQVMsR0FBRyxXQUFXO0FBRTdCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQTtFQUFBLE9BQVU7SUFDMUJDLElBQUksRUFBRUo7RUFDVixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQTtFQUFBLE9BQVU7SUFDMUJELElBQUksRUFBRUg7RUFDVixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUE7RUFBQSxPQUFVO0lBQzVCRixJQUFJLEVBQUVGO0VBQ1YsQ0FBQztBQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnVEO0FBQ25CO0FBRXRDLElBQU1NLFlBQVksR0FBRztFQUNqQkMsUUFBUSxFQUFFLEtBQUs7RUFDZkMsT0FBTyxFQUFFO0FBQ2IsQ0FBQztBQUVELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFtQztFQUFBLElBQS9CQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDTCxZQUFZO0VBQUEsSUFBRVEsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQy9DLFFBQU9DLE1BQU0sQ0FBQ1osSUFBSTtJQUNkLEtBQUtKLCtDQUFTO01BQ1YsT0FBQWlCLGFBQUEsQ0FBQUEsYUFBQSxLQUNPTCxLQUFLO1FBQ1JILFFBQVEsRUFBRTtNQUFJO0lBRXRCLEtBQUtSLDhDQUFRO01BQ1QsT0FBQWdCLGFBQUEsQ0FBQUEsYUFBQSxLQUNPTCxLQUFLO1FBQ1JILFFBQVEsRUFBRTtNQUFLO0lBRXZCO01BQ0ksT0FBT0csS0FBSztFQUFBO0FBRXhCLENBQUM7QUFFRCxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUEsRUFBd0I7RUFBQSxJQUFwQk4sS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQyxDQUFDO0VBQUEsSUFBRUcsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQ25DLFFBQU9DLE1BQU0sQ0FBQ1osSUFBSTtJQUNkLEtBQUtGLCtDQUFTO01BQ1YsT0FBT1UsS0FBSyxHQUFHLENBQUM7SUFDcEI7TUFDSSxPQUFPQSxLQUFLO0VBQUE7QUFFeEIsQ0FBQztBQUVNLElBQU1PLFdBQVcsR0FBR1osc0RBQWUsQ0FBQztFQUN2Q2EsTUFBTSxFQUFFVCxlQUFlO0VBQ3ZCRCxPQUFPLEVBQUVRO0FBQ2IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3JDa0Q7QUFDcEI7QUFDTTtBQUV0QyxJQUFNTSxLQUFLLEdBQUdILGtEQUFXLENBQUNGLGlEQUFXLEVBQUVHLHNEQUFlLENBQUNDLG1EQUFLLENBQUMsQ0FBQztBQUU5RCxpRUFBZUMsS0FBSzs7Ozs7Ozs7VUNOcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgTEFVTkNISU5HID0gXCJMQVVOQ0hJTkdcIjtcclxuY29uc3QgTEFVTkNIRUQgPSBcIkxBVU5DSEVEXCI7XHJcbmNvbnN0IERFQ1JFTUVOVCA9IFwiREVDUkVNRU5UXCI7XHJcblxyXG5jb25zdCBzdGFydExhdW5jaGluZyA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMQVVOQ0hJTkdcclxufSlcclxuXHJcbmNvbnN0IGxhdW5jaGVkUm9ja2V0ID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IExBVU5DSEVEXHJcbn0pXHJcblxyXG5jb25zdCBkZWNyZW1lbnRDb3VudGVyID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IERFQ1JFTUVOVFxyXG59KVxyXG5cclxuZXhwb3J0IHsgTEFVTkNISU5HLCBMQVVOQ0hFRCwgREVDUkVNRU5ULCBzdGFydExhdW5jaGluZywgbGF1bmNoZWRSb2NrZXQsIGRlY3JlbWVudENvdW50ZXIgfSIsImltcG9ydCB7REVDUkVNRU5ULCBMQVVOQ0hFRCwgTEFVTkNISU5HfSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxhdW5jaGVkOiBmYWxzZSxcclxuICAgIGNvdW50ZXI6IDVcclxufVxyXG5cclxuY29uc3QgcmVkdWNlckxhdW5jaGVkID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExBVU5DSElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbGF1bmNoZWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTEFVTkNIRUQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxhdW5jaGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXJDb3VudGVyID0gKHN0YXRlPTAsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBERUNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIDFcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHJvY2tldDogcmVkdWNlckxhdW5jaGVkLFxyXG4gICAgY291bnRlcjogcmVkdWNlckNvdW50ZXJcclxufSlcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHtyb290UmVkdWNlcn0gZnJvbSBcIi4vcmVkdWNlclwiO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWY2ZWEyNWVjYzNjM2I5YWNlMDdcIikiXSwibmFtZXMiOlsiTEFVTkNISU5HIiwiTEFVTkNIRUQiLCJERUNSRU1FTlQiLCJzdGFydExhdW5jaGluZyIsInR5cGUiLCJsYXVuY2hlZFJvY2tldCIsImRlY3JlbWVudENvdW50ZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJsYXVuY2hlZCIsImNvdW50ZXIiLCJyZWR1Y2VyTGF1bmNoZWQiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsIl9vYmplY3RTcHJlYWQiLCJyZWR1Y2VyQ291bnRlciIsInJvb3RSZWR1Y2VyIiwicm9ja2V0IiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==