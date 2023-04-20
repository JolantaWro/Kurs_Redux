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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// export default combineReducers({
//   counter,
//   products zad 2
// });



var stateCounter = 0;
var stateProduct = {
  productsList: [{
    id: 0,
    text: 'Learn React'
  }, {
    id: 1,
    text: 'Learn Redux'
  }]
};
function maxId(productsL) {
  var maxId = todos.reduce(function (maxId, todo) {
    return Math.max(todo.id, maxId);
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
      return [].concat(_toConsumableArray(state), [{
        id: action.id,
        text: action.text
      }]);
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
/******/ 	__webpack_require__.h = () => ("b52b10dc484f6a9dd9bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YzdkODM0OTE0YzZjMzQxMDYwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUU0RDtBQUV0QjtBQUV0QyxJQUFNSSxZQUFZLEdBQUcsQ0FBQztBQUN0QixJQUFNQyxZQUFZLEdBQUc7RUFBQ0MsWUFBWSxFQUFFLENBQzVCO0lBQUVDLEVBQUUsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFhLENBQUMsRUFDN0I7SUFBRUQsRUFBRSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQWEsQ0FBQztBQUFDLENBQUM7QUFFdkMsU0FBU0MsS0FBS0EsQ0FBQ0MsU0FBUyxFQUFFO0VBQ3RCLElBQU1ELEtBQUssR0FBR0UsS0FBSyxDQUFDQyxNQUFNLENBQUMsVUFBQ0gsS0FBSyxFQUFFSSxJQUFJO0lBQUEsT0FBS0MsSUFBSSxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQ04sRUFBRSxFQUFFRSxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ3pFLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBQ0EsSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBbUM7RUFBQSxJQUEvQkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ2QsWUFBWTtFQUFBLElBQUVpQixNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDdkMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS3BCLCtDQUFTO01BQ1YsT0FBT2UsS0FBSyxHQUFHLENBQUM7SUFDcEIsS0FBS2hCLCtDQUFTO01BQ1YsT0FBT2dCLEtBQUssR0FBRyxDQUFDO0lBQ3BCO01BQ0ksT0FBT0EsS0FBSztFQUFDO0FBRXpCLENBQUM7QUFFRCxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFtQztFQUFBLElBQS9CTixLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDYixZQUFZO0VBQUEsSUFBRWdCLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUN4QyxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLdEIsaURBQVc7TUFDWixVQUFBd0IsTUFBQSxDQUFBQyxrQkFBQSxDQUFXUixLQUFLLElBQUU7UUFDZFYsRUFBRSxFQUFFYyxNQUFNLENBQUNkLEVBQUU7UUFDYkMsSUFBSSxFQUFFYSxNQUFNLENBQUNiO01BQUksQ0FBQztJQUMxQjtNQUNJLE9BQU9TLEtBQUs7RUFBQTtBQUd4QixDQUFDO0FBRUQsaUVBQWVkLHNEQUFlLENBQUM7RUFDM0JhLE9BQU8sRUFBUEEsT0FBTztFQUNQTyxRQUFRLEVBQVJBO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7OztVQzVDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4vLyAgIGNvdW50ZXIsXG4vLyAgIHByb2R1Y3RzIHphZCAyXG4vLyB9KTtcblxuaW1wb3J0IHtBRERfUFJPRFVDVCwgREVDUkVNRU5ULCBJTkNSRU1FTlR9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xuXG5jb25zdCBzdGF0ZUNvdW50ZXIgPSAwO1xuY29uc3Qgc3RhdGVQcm9kdWN0ID0ge3Byb2R1Y3RzTGlzdDogW1xuICAgICAgICB7IGlkOiAwLCB0ZXh0OiAnTGVhcm4gUmVhY3QnfSxcbiAgICAgICAgeyBpZDogMSwgdGV4dDogJ0xlYXJuIFJlZHV4J31dfTtcblxuZnVuY3Rpb24gbWF4SWQocHJvZHVjdHNMKSB7XG4gICAgY29uc3QgbWF4SWQgPSB0b2Rvcy5yZWR1Y2UoKG1heElkLCB0b2RvKSA9PiBNYXRoLm1heCh0b2RvLmlkLCBtYXhJZCksIC0xKVxuICAgIHJldHVybiBtYXhJZCArIDFcbn1cbmNvbnN0IGNvdW50ZXIgPSAoc3RhdGU9c3RhdGVDb3VudGVyLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSU5DUkVNRU5UOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICAgICAgY2FzZSBERUNSRU1FTlQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuY29uc3QgcHJvZHVjdHMgPSAoc3RhdGU9c3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dH1dO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY291bnRlcixcbiAgICBwcm9kdWN0c1xufSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNTJiMTBkYzQ4NGY2YTlkZDliYlwiKSJdLCJuYW1lcyI6WyJBRERfUFJPRFVDVCIsIkRFQ1JFTUVOVCIsIklOQ1JFTUVOVCIsImNvbWJpbmVSZWR1Y2VycyIsInN0YXRlQ291bnRlciIsInN0YXRlUHJvZHVjdCIsInByb2R1Y3RzTGlzdCIsImlkIiwidGV4dCIsIm1heElkIiwicHJvZHVjdHNMIiwidG9kb3MiLCJyZWR1Y2UiLCJ0b2RvIiwiTWF0aCIsIm1heCIsImNvdW50ZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJwcm9kdWN0cyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=