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
// const stateProduct = {productsList: [
//         ]};
var stateProduct = {
  id: 0,
  text: "Pieczywo"
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
          text: action.payload.text
        }])
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ORDER:
      return _objectSpread(_objectSpread({}, state), {}, {
        productsList: state.productsList.map(function (product) {
          if (product.id > action.payload.id) {
            return product.id + 1;
          } else if (product.id < action.payload.id) {
            return product.id - 1;
          }
        })
      });
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
/******/ 	__webpack_require__.h = () => ("962692a697ee1630abb6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4vLyAgIGNvdW50ZXIsXG4vLyAgIHByb2R1Y3RzIHphZCAyXG4vLyB9KTtcblxuaW1wb3J0IHtBRERfUFJPRFVDVCwgQ0hBTkdFX09SREVSLCBERUNSRU1FTlQsIElOQ1JFTUVOVH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IHN0YXRlQ291bnRlciA9IDA7XG4vLyBjb25zdCBzdGF0ZVByb2R1Y3QgPSB7cHJvZHVjdHNMaXN0OiBbXG4vLyAgICAgXSwgY291bnRlciA6IDB9XG4vLyBjb25zdCBzdGF0ZVByb2R1Y3QgPSB7cHJvZHVjdHNMaXN0OiBbXG4vLyAgICAgICAgIF19O1xuY29uc3Qgc3RhdGVQcm9kdWN0ID0ge2lkOiAwLCB0ZXh0OiBcIlBpZWN6eXdvXCJ9O1xuXG5cbmZ1bmN0aW9uIG1heElkUHJvZHVjdHMoYXJyYXkpIHtcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXG4gICAgcmV0dXJuIG1heElkICsgMVxufVxuY29uc3QgY291bnRlciA9IChzdGF0ZT0gc3RhdGVDb3VudGVyLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSU5DUkVNRU5UOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICAgICAgY2FzZSBERUNSRU1FTlQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuY29uc3QgcHJvZHVjdHMgPSAoc3RhdGU9IHN0YXRlUHJvZHVjdCwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0c0xpc3Q6IFsuLi5zdGF0ZS5wcm9kdWN0c0xpc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG1heElkUHJvZHVjdHMoc3RhdGUucHJvZHVjdHNMaXN0KSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYWN0aW9uLnBheWxvYWQudGV4dFxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0hBTkdFX09SREVSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0c0xpc3Q6IHN0YXRlLnByb2R1Y3RzTGlzdC5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3QuaWQgPiBhY3Rpb24ucGF5bG9hZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QuaWQgKyAxXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZHVjdC5pZCA8IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5pZCAtIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY291bnRlcixcbiAgICBwcm9kdWN0c1xufSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NjI2OTJhNjk3ZWUxNjMwYWJiNlwiKSJdLCJuYW1lcyI6WyJBRERfUFJPRFVDVCIsIkNIQU5HRV9PUkRFUiIsIkRFQ1JFTUVOVCIsIklOQ1JFTUVOVCIsImNvbWJpbmVSZWR1Y2VycyIsInN0YXRlQ291bnRlciIsInN0YXRlUHJvZHVjdCIsImlkIiwidGV4dCIsIm1heElkUHJvZHVjdHMiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJjb3VudGVyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHMiLCJfb2JqZWN0U3ByZWFkIiwicHJvZHVjdHNMaXN0IiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCIsIm1hcCIsInByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9