"use strict";
self["webpackHotUpdatees6_react"](0,{

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
//zmienic state
var reducerCounter = function reducerCounter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      if (state <= 0) {
        return state;
      }
      return state - 1;
    default:
      return state;
  }
};
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  rocket: reducerLaunched,
  counter: reducerCounter
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("59d4268623ab4d21952b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OGYxNDJjZDE0YmVhOTRlNDA5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNuQjtBQUV0QyxJQUFNSSxZQUFZLEdBQUc7RUFDakJDLFFBQVEsRUFBRSxLQUFLO0VBQ2ZDLE9BQU8sRUFBRTtBQUNiLENBQUM7QUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBbUM7RUFBQSxJQUEvQkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ0wsWUFBWTtFQUFBLElBQUVRLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMvQyxRQUFPQyxNQUFNLENBQUNDLElBQUk7SUFDZCxLQUFLWCwrQ0FBUztNQUNWLE9BQUFZLGFBQUEsQ0FBQUEsYUFBQSxLQUNPTixLQUFLO1FBQ1JILFFBQVEsRUFBRTtNQUFJO0lBRXRCLEtBQUtKLDhDQUFRO01BQ1QsT0FBQWEsYUFBQSxDQUFBQSxhQUFBLEtBQ09OLEtBQUs7UUFDUkgsUUFBUSxFQUFFO01BQUs7SUFFdkI7TUFDSSxPQUFPRyxLQUFLO0VBQUE7QUFFeEIsQ0FBQztBQUNEO0FBQ0EsSUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQXdCO0VBQUEsSUFBcEJQLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUMsQ0FBQztFQUFBLElBQUVHLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUNuQyxRQUFPQyxNQUFNLENBQUNDLElBQUk7SUFDZCxLQUFLYiwrQ0FBUztNQUNWLElBQUdRLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDWCxPQUFPQSxLQUFLO01BQ2hCO01BQ0EsT0FBT0EsS0FBSyxHQUFHLENBQUM7SUFDcEI7TUFDSSxPQUFPQSxLQUFLO0VBQUE7QUFFeEIsQ0FBQztBQUVNLElBQU1RLFdBQVcsR0FBR2Isc0RBQWUsQ0FBQztFQUN2Q2MsTUFBTSxFQUFFVixlQUFlO0VBQ3ZCRCxPQUFPLEVBQUVTO0FBQ2IsQ0FBQyxDQUFDOzs7Ozs7OztVQ3hDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RFQ1JFTUVOVCwgTEFVTkNIRUQsIExBVU5DSElOR30gZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsYXVuY2hlZDogZmFsc2UsXHJcbiAgICBjb3VudGVyOiA1XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXJMYXVuY2hlZCA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMQVVOQ0hJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxhdW5jaGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExBVU5DSEVEOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsYXVuY2hlZDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcbi8vem1pZW5pYyBzdGF0ZVxyXG5jb25zdCByZWR1Y2VyQ291bnRlciA9IChzdGF0ZT01LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgREVDUkVNRU5UOlxyXG4gICAgICAgICAgICBpZihzdGF0ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgcm9ja2V0OiByZWR1Y2VyTGF1bmNoZWQsXHJcbiAgICBjb3VudGVyOiByZWR1Y2VyQ291bnRlclxyXG59KVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1OWQ0MjY4NjIzYWI0ZDIxOTUyYlwiKSJdLCJuYW1lcyI6WyJERUNSRU1FTlQiLCJMQVVOQ0hFRCIsIkxBVU5DSElORyIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsImxhdW5jaGVkIiwiY291bnRlciIsInJlZHVjZXJMYXVuY2hlZCIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsIl9vYmplY3RTcHJlYWQiLCJyZWR1Y2VyQ291bnRlciIsInJvb3RSZWR1Y2VyIiwicm9ja2V0Il0sInNvdXJjZVJvb3QiOiIifQ==