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
    case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ORDER:
      var idToUpdate = action.payload.id;
      // console.log(action.payload.id)

      productsList: state.productsList.map(function (product) {
        if (product.id === action.payload.id) {
          idToUpdate + 1;
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.payload.id, idToUpdate));
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counter,
  products: products
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ba5ef53e00d2c233c304")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OGYwNWM3NTk0OGZiYjM2OGNkNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUUwRTtBQUVwQztBQUV0QyxJQUFNSyxZQUFZLEdBQUcsQ0FBQztBQUN0QjtBQUNBO0FBQ0EsSUFBTUMsWUFBWSxHQUFHO0VBQUNDLFlBQVksRUFBRTtBQUMzQixDQUFDO0FBSVYsU0FBU0MsYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQzFCLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQ0QsS0FBSyxFQUFFRSxPQUFPO0lBQUEsT0FBS0MsSUFBSSxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csRUFBRSxFQUFFTCxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9FLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBQ0EsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBb0M7RUFBQSxJQUFoQ0MsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRWIsWUFBWTtFQUFBLElBQUVnQixNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDeEMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS25CLCtDQUFTO01BQ1YsT0FBT2MsS0FBSyxHQUFHLENBQUM7SUFDcEIsS0FBS2YsK0NBQVM7TUFDVixPQUFPZSxLQUFLLEdBQUcsQ0FBQztJQUNwQjtNQUNJLE9BQU9BLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRUQsSUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBb0M7RUFBQSxJQUFoQ04sS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRVosWUFBWTtFQUFBLElBQUVlLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUN6QyxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLdEIsaURBQVc7TUFDWixPQUFBd0IsYUFBQSxDQUFBQSxhQUFBLEtBQ09QLEtBQUs7UUFDUlYsWUFBWSxLQUFBa0IsTUFBQSxDQUFBQyxrQkFBQSxDQUFNVCxLQUFLLENBQUNWLFlBQVksSUFBRTtVQUNsQ1EsRUFBRSxFQUFFUCxhQUFhLENBQUNTLEtBQUssQ0FBQ1YsWUFBWSxDQUFDO1VBQ3JDb0IsSUFBSSxFQUFFTixNQUFNLENBQUNPO1FBQ2pCLENBQUM7TUFBQztJQUVWLEtBQUszQixrREFBWTtNQUNiLElBQU00QixVQUFVLEdBQUdSLE1BQU0sQ0FBQ08sT0FBTyxDQUFDYixFQUFFO01BQ3BDOztNQUVBUixZQUFZLEVBQUVVLEtBQUssQ0FBQ1YsWUFBWSxDQUFDdUIsR0FBRyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtRQUM1QyxJQUFHQSxPQUFPLENBQUNoQixFQUFFLEtBQUtNLE1BQU0sQ0FBQ08sT0FBTyxDQUFDYixFQUFFLEVBQUU7VUFDakNjLFVBQVUsR0FBRyxDQUFDO1FBQ2xCO01BQ0osQ0FBQyxDQUFDO01BRUYsT0FBQUwsYUFBQSxDQUFBQSxhQUFBLEtBQ09QLEtBQUssT0FBQWUsZUFBQSxLQUNQWCxNQUFNLENBQUNPLE9BQU8sQ0FBQ2IsRUFBRSxFQUFHYyxVQUFVO0lBUXZDO01BQ0ksT0FBT1osS0FBSztFQUFBO0FBRXhCLENBQUM7QUFJRCxpRUFBZWIsc0RBQWUsQ0FBQztFQUMzQlksT0FBTyxFQUFQQSxPQUFPO0VBQ1BPLFFBQVEsRUFBUkE7QUFDSixDQUFDLENBQUM7Ozs7Ozs7O1VDeEVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuLy8gICBjb3VudGVyLFxyXG4vLyAgIHByb2R1Y3RzIHphZCAyXHJcbi8vIH0pO1xyXG5cclxuaW1wb3J0IHtBRERfUFJPRFVDVCwgQ0hBTkdFX09SREVSLCBERUNSRU1FTlQsIElOQ1JFTUVOVH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuY29uc3Qgc3RhdGVDb3VudGVyID0gMDtcclxuLy8gY29uc3Qgc3RhdGVQcm9kdWN0ID0ge3Byb2R1Y3RzTGlzdDogW1xyXG4vLyAgICAgXSwgY291bnRlciA6IDB9XHJcbmNvbnN0IHN0YXRlUHJvZHVjdCA9IHtwcm9kdWN0c0xpc3Q6IFtcclxuICAgICAgICBdfTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWF4SWRQcm9kdWN0cyhhcnJheSkge1xyXG4gICAgY29uc3QgbWF4SWQgPSBhcnJheS5yZWR1Y2UoKG1heElkLCBlbGVtZW50KSA9PiBNYXRoLm1heChlbGVtZW50LmlkLCBtYXhJZCksIC0xKVxyXG4gICAgcmV0dXJuIG1heElkICsgMVxyXG59XHJcbmNvbnN0IGNvdW50ZXIgPSAoc3RhdGU9IHN0YXRlQ291bnRlciwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBJTkNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIDE7XHJcbiAgICAgICAgY2FzZSBERUNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIDE7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBwcm9kdWN0cyA9IChzdGF0ZT0gc3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0c0xpc3Q6IFsuLi5zdGF0ZS5wcm9kdWN0c0xpc3QsIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogbWF4SWRQcm9kdWN0cyhzdGF0ZS5wcm9kdWN0c0xpc3QpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfT1JERVI6XHJcbiAgICAgICAgICAgIGNvbnN0IGlkVG9VcGRhdGUgPSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZC5pZClcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RzTGlzdDogc3RhdGUucHJvZHVjdHNMaXN0Lm1hcChwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHByb2R1Y3QuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRUb1VwZGF0ZSArIDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZC5pZF06IGlkVG9VcGRhdGVcclxuICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RzTGlzdDogc3RhdGUucHJvZHVjdHNMaXN0Lm1hcChwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZihwcm9kdWN0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4ge31cclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjb3VudGVyLFxyXG4gICAgcHJvZHVjdHNcclxufSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiYTVlZjUzZTAwZDJjMjMzYzMwNFwiKSJdLCJuYW1lcyI6WyJBRERfUFJPRFVDVCIsIkNIQU5HRV9PUkRFUiIsIkRFQ1JFTUVOVCIsIklOQ1JFTUVOVCIsImNvbWJpbmVSZWR1Y2VycyIsInN0YXRlQ291bnRlciIsInN0YXRlUHJvZHVjdCIsInByb2R1Y3RzTGlzdCIsIm1heElkUHJvZHVjdHMiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpZCIsImNvdW50ZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJwcm9kdWN0cyIsIl9vYmplY3RTcHJlYWQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0ZXh0IiwicGF5bG9hZCIsImlkVG9VcGRhdGUiLCJtYXAiLCJwcm9kdWN0IiwiX2RlZmluZVByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==