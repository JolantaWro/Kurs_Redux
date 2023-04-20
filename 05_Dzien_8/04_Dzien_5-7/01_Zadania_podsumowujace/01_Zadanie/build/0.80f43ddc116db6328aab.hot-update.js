"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// export default combineReducers({
//   counter,
//   products zad 2
// });



var stateCounter = 0;
// const stateProduct = {productsList: [
//     ], counter : 0}
var stateProduct = {
  productsList: []
};
function maxIdProducts(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var counter = function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateCounter;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.INCREMENT:
      return state + 1;
    case _actions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
var products = function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateProduct;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      return _objectSpread(_objectSpread({}, state), {}, {
        productsList: [].concat(_toConsumableArray(state.productsList), [{
          id: maxIdProducts(state.productsList),
          text: action.payload
        }])
      });
    case CHANGE_ORDER:
      return {};
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counter,
  products: products
}));

/***/ }),

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8a151fe1dd61baee5076")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44MGY0M2RkYzExNmRiNjMyOGFhYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUU0RDtBQUV0QjtBQUV0QyxJQUFNSSxZQUFZLEdBQUcsQ0FBQztBQUN0QjtBQUNBO0FBQ0EsSUFBTUMsWUFBWSxHQUFHO0VBQUNDLFlBQVksRUFBRTtBQUMzQixDQUFDO0FBR1YsU0FBU0MsYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQzFCLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQ0QsS0FBSyxFQUFFRSxPQUFPO0lBQUEsT0FBS0MsSUFBSSxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csRUFBRSxFQUFFTCxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9FLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBQ0EsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBb0M7RUFBQSxJQUFoQ0MsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRWIsWUFBWTtFQUFBLElBQUVnQixNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDeEMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS25CLCtDQUFTO01BQ1YsT0FBT2MsS0FBSyxHQUFHLENBQUM7SUFDcEIsS0FBS2YsK0NBQVM7TUFDVixPQUFPZSxLQUFLLEdBQUcsQ0FBQztJQUNwQjtNQUNJLE9BQU9BLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRUQsSUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBb0M7RUFBQSxJQUFoQ04sS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRVosWUFBWTtFQUFBLElBQUVlLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUN6QyxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLckIsaURBQVc7TUFDWixPQUFBdUIsYUFBQSxDQUFBQSxhQUFBLEtBQ09QLEtBQUs7UUFDUlYsWUFBWSxLQUFBa0IsTUFBQSxDQUFBQyxrQkFBQSxDQUFNVCxLQUFLLENBQUNWLFlBQVksSUFBRTtVQUNsQ1EsRUFBRSxFQUFFUCxhQUFhLENBQUNTLEtBQUssQ0FBQ1YsWUFBWSxDQUFDO1VBQ3JDb0IsSUFBSSxFQUFFTixNQUFNLENBQUNPO1FBQ2pCLENBQUM7TUFBQztJQUVWLEtBQUtDLFlBQVk7TUFDYixPQUFPLENBRVAsQ0FBQztJQUVMO01BQ0ksT0FBT1osS0FBSztFQUFBO0FBR3hCLENBQUM7QUFFRCxpRUFBZWIsc0RBQWUsQ0FBQztFQUMzQlksT0FBTyxFQUFQQSxPQUFPO0VBQ1BPLFFBQVEsRUFBUkE7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2RGtDO0FBQ0g7QUFHakMsSUFBTVMsS0FBSyxHQUFHRixrREFBVyxDQUFDQyxpREFBTyxDQUFDO0FBR2xDLGlFQUFlQyxLQUFLOzs7Ozs7OztVQ1BwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuLy8gICBjb3VudGVyLFxuLy8gICBwcm9kdWN0cyB6YWQgMlxuLy8gfSk7XG5cbmltcG9ydCB7QUREX1BST0RVQ1QsIERFQ1JFTUVOVCwgSU5DUkVNRU5UfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcblxuY29uc3Qgc3RhdGVDb3VudGVyID0gMDtcbi8vIGNvbnN0IHN0YXRlUHJvZHVjdCA9IHtwcm9kdWN0c0xpc3Q6IFtcbi8vICAgICBdLCBjb3VudGVyIDogMH1cbmNvbnN0IHN0YXRlUHJvZHVjdCA9IHtwcm9kdWN0c0xpc3Q6IFtcbiAgICAgICAgXX07XG5cblxuZnVuY3Rpb24gbWF4SWRQcm9kdWN0cyhhcnJheSkge1xuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcbiAgICByZXR1cm4gbWF4SWQgKyAxXG59XG5jb25zdCBjb3VudGVyID0gKHN0YXRlPSBzdGF0ZUNvdW50ZXIsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBJTkNSRU1FTlQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyAxO1xuICAgICAgICBjYXNlIERFQ1JFTUVOVDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCBwcm9kdWN0cyA9IChzdGF0ZT0gc3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzTGlzdDogWy4uLnN0YXRlLnByb2R1Y3RzTGlzdCwge1xuICAgICAgICAgICAgICAgICAgICBpZDogbWF4SWRQcm9kdWN0cyhzdGF0ZS5wcm9kdWN0c0xpc3QpLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0hBTkdFX09SREVSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY291bnRlcixcbiAgICBwcm9kdWN0c1xufSkiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcblxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGExNTFmZTFkZDYxYmFlZTUwNzZcIikiXSwibmFtZXMiOlsiQUREX1BST0RVQ1QiLCJERUNSRU1FTlQiLCJJTkNSRU1FTlQiLCJjb21iaW5lUmVkdWNlcnMiLCJzdGF0ZUNvdW50ZXIiLCJzdGF0ZVByb2R1Y3QiLCJwcm9kdWN0c0xpc3QiLCJtYXhJZFByb2R1Y3RzIiwiYXJyYXkiLCJtYXhJZCIsInJlZHVjZSIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiaWQiLCJjb3VudGVyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHMiLCJfb2JqZWN0U3ByZWFkIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidGV4dCIsInBheWxvYWQiLCJDSEFOR0VfT1JERVIiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=