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
      return [].concat(_toConsumableArray(state), [{
        id: action.id,
        text: action.text
      }]);
    // return {
    //     ...state,
    //     productsList: [...state.productsList, {
    //         id: maxIdProducts(state.productsList),
    //         text: action.payload
    //     }]
    // }
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
/******/ 	__webpack_require__.h = () => ("424ae93b47f32d51254f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41OTA2NGM4ZTEzMTRhZTQ2YTU4NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUU0RDtBQUV0QjtBQUV0QyxJQUFNSSxZQUFZLEdBQUcsQ0FBQztBQUN0QixJQUFNQyxZQUFZLEdBQUc7RUFBQ0MsWUFBWSxFQUFFLENBQzVCO0lBQUVDLEVBQUUsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFhLENBQUMsRUFDN0I7SUFBRUQsRUFBRSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQWEsQ0FBQztBQUFDLENBQUM7QUFFdkMsU0FBU0MsYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQzFCLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQ0QsS0FBSyxFQUFFRSxPQUFPO0lBQUEsT0FBS0MsSUFBSSxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ04sRUFBRSxFQUFFSSxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9FLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBQ0EsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBbUM7RUFBQSxJQUEvQkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ2QsWUFBWTtFQUFBLElBQUVpQixNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDdkMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS3BCLCtDQUFTO01BQ1YsT0FBT2UsS0FBSyxHQUFHLENBQUM7SUFDcEIsS0FBS2hCLCtDQUFTO01BQ1YsT0FBT2dCLEtBQUssR0FBRyxDQUFDO0lBQ3BCO01BQ0ksT0FBT0EsS0FBSztFQUFDO0FBRXpCLENBQUM7QUFFRCxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFtQztFQUFBLElBQS9CTixLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDYixZQUFZO0VBQUEsSUFBRWdCLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUN4QyxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLdEIsaURBQVc7TUFDWixVQUFBd0IsTUFBQSxDQUFBQyxrQkFBQSxDQUFXUixLQUFLLElBQUU7UUFDZFYsRUFBRSxFQUFFYyxNQUFNLENBQUNkLEVBQUU7UUFDYkMsSUFBSSxFQUFFYSxNQUFNLENBQUNiO01BQUksQ0FBQztJQUN0QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNKO01BQ0ksT0FBT1MsS0FBSztFQUFBO0FBR3hCLENBQUM7QUFFRCxpRUFBZWQsc0RBQWUsQ0FBQztFQUMzQmEsT0FBTyxFQUFQQSxPQUFPO0VBQ1BPLFFBQVEsRUFBUkE7QUFDSixDQUFDLENBQUM7Ozs7Ozs7O1VDbkRGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbi8vICAgY291bnRlcixcbi8vICAgcHJvZHVjdHMgemFkIDJcbi8vIH0pO1xuXG5pbXBvcnQge0FERF9QUk9EVUNULCBERUNSRU1FTlQsIElOQ1JFTUVOVH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IHN0YXRlQ291bnRlciA9IDA7XG5jb25zdCBzdGF0ZVByb2R1Y3QgPSB7cHJvZHVjdHNMaXN0OiBbXG4gICAgICAgIHsgaWQ6IDAsIHRleHQ6ICdMZWFybiBSZWFjdCd9LFxuICAgICAgICB7IGlkOiAxLCB0ZXh0OiAnTGVhcm4gUmVkdXgnfV19O1xuXG5mdW5jdGlvbiBtYXhJZFByb2R1Y3RzKGFycmF5KSB7XG4gICAgY29uc3QgbWF4SWQgPSBhcnJheS5yZWR1Y2UoKG1heElkLCBlbGVtZW50KSA9PiBNYXRoLm1heChlbGVtZW50LmlkLCBtYXhJZCksIC0xKVxuICAgIHJldHVybiBtYXhJZCArIDFcbn1cbmNvbnN0IGNvdW50ZXIgPSAoc3RhdGU9c3RhdGVDb3VudGVyLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSU5DUkVNRU5UOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICAgICAgY2FzZSBERUNSRU1FTlQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuY29uc3QgcHJvZHVjdHMgPSAoc3RhdGU9c3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dH1dO1xuICAgICAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIC8vICAgICBwcm9kdWN0c0xpc3Q6IFsuLi5zdGF0ZS5wcm9kdWN0c0xpc3QsIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWQ6IG1heElkUHJvZHVjdHMoc3RhdGUucHJvZHVjdHNMaXN0KSxcbiAgICAgICAgICAgIC8vICAgICAgICAgdGV4dDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIC8vICAgICB9XVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY291bnRlcixcbiAgICBwcm9kdWN0c1xufSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MjRhZTkzYjQ3ZjMyZDUxMjU0ZlwiKSJdLCJuYW1lcyI6WyJBRERfUFJPRFVDVCIsIkRFQ1JFTUVOVCIsIklOQ1JFTUVOVCIsImNvbWJpbmVSZWR1Y2VycyIsInN0YXRlQ291bnRlciIsInN0YXRlUHJvZHVjdCIsInByb2R1Y3RzTGlzdCIsImlkIiwidGV4dCIsIm1heElkUHJvZHVjdHMiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJjb3VudGVyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9