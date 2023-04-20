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
// const stateProduct = {productsList: [
//         ]};
var stateProduct = [{}];
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
      // return [...state, {
      //     id: action.id,
      //     text: action.text}];
      // return {
      //     ...state,
      //     productsList: [...state.productsList, {
      //         id: maxIdProducts(state.productsList),
      //         text: action.payload
      //     }]
      // }
      return [].concat(_toConsumableArray(state), [{
        id: state.length,
        text: action.payload
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
/******/ 	__webpack_require__.h = () => ("0541b82274ae99def6d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYTEyNWVhNTQwOTE2YzBlOGRkMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUU0RDtBQUV0QjtBQUV0QyxJQUFNSSxZQUFZLEdBQUcsQ0FBQztBQUN0QjtBQUNBO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFHekIsU0FBU0MsYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQzFCLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQ0QsS0FBSyxFQUFFRSxPQUFPO0lBQUEsT0FBS0MsSUFBSSxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csRUFBRSxFQUFFTCxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9FLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBQ0EsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBbUM7RUFBQSxJQUEvQkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ1osWUFBWTtFQUFBLElBQUVlLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUN2QyxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLbEIsK0NBQVM7TUFDVixPQUFPYSxLQUFLLEdBQUcsQ0FBQztJQUNwQixLQUFLZCwrQ0FBUztNQUNWLE9BQU9jLEtBQUssR0FBRyxDQUFDO0lBQ3BCO01BQ0ksT0FBT0EsS0FBSztFQUFDO0FBRXpCLENBQUM7QUFFRCxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFtQztFQUFBLElBQS9CTixLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDWCxZQUFZO0VBQUEsSUFBRWMsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQ3hDLFFBQVFDLE1BQU0sQ0FBQ0MsSUFBSTtJQUNmLEtBQUtwQixpREFBVztNQUNaO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0EsVUFBQXNCLE1BQUEsQ0FBQUMsa0JBQUEsQ0FDT1IsS0FBSyxJQUFFO1FBQ05GLEVBQUUsRUFBRUUsS0FBSyxDQUFDRSxNQUFNO1FBQ2hCTyxJQUFJLEVBQUVMLE1BQU0sQ0FBQ007TUFDakIsQ0FBQztJQUVUO01BQ0ksT0FBT1YsS0FBSztFQUFBO0FBR3hCLENBQUM7QUFFRCxpRUFBZVosc0RBQWUsQ0FBQztFQUMzQlcsT0FBTyxFQUFQQSxPQUFPO0VBQ1BPLFFBQVEsRUFBUkE7QUFDSixDQUFDLENBQUM7Ozs7Ozs7O1VDMURGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbi8vICAgY291bnRlcixcbi8vICAgcHJvZHVjdHMgemFkIDJcbi8vIH0pO1xuXG5pbXBvcnQge0FERF9QUk9EVUNULCBERUNSRU1FTlQsIElOQ1JFTUVOVH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IHN0YXRlQ291bnRlciA9IDA7XG4vLyBjb25zdCBzdGF0ZVByb2R1Y3QgPSB7cHJvZHVjdHNMaXN0OiBbXG4vLyAgICAgICAgIF19O1xuY29uc3Qgc3RhdGVQcm9kdWN0ID0gW3t9XTtcblxuXG5mdW5jdGlvbiBtYXhJZFByb2R1Y3RzKGFycmF5KSB7XG4gICAgY29uc3QgbWF4SWQgPSBhcnJheS5yZWR1Y2UoKG1heElkLCBlbGVtZW50KSA9PiBNYXRoLm1heChlbGVtZW50LmlkLCBtYXhJZCksIC0xKVxuICAgIHJldHVybiBtYXhJZCArIDFcbn1cbmNvbnN0IGNvdW50ZXIgPSAoc3RhdGU9c3RhdGVDb3VudGVyLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSU5DUkVNRU5UOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICAgICAgY2FzZSBERUNSRU1FTlQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuY29uc3QgcHJvZHVjdHMgPSAoc3RhdGU9c3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4gICAgICAgICAgICAvLyByZXR1cm4gWy4uLnN0YXRlLCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgIC8vICAgICB0ZXh0OiBhY3Rpb24udGV4dH1dO1xuICAgICAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIC8vICAgICBwcm9kdWN0c0xpc3Q6IFsuLi5zdGF0ZS5wcm9kdWN0c0xpc3QsIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWQ6IG1heElkUHJvZHVjdHMoc3RhdGUucHJvZHVjdHNMaXN0KSxcbiAgICAgICAgICAgIC8vICAgICAgICAgdGV4dDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIC8vICAgICB9XVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICBpZDogc3RhdGUubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvdW50ZXIsXG4gICAgcHJvZHVjdHNcbn0pIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDU0MWI4MjI3NGFlOTlkZWY2ZDRcIikiXSwibmFtZXMiOlsiQUREX1BST0RVQ1QiLCJERUNSRU1FTlQiLCJJTkNSRU1FTlQiLCJjb21iaW5lUmVkdWNlcnMiLCJzdGF0ZUNvdW50ZXIiLCJzdGF0ZVByb2R1Y3QiLCJtYXhJZFByb2R1Y3RzIiwiYXJyYXkiLCJtYXhJZCIsInJlZHVjZSIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiaWQiLCJjb3VudGVyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0ZXh0IiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=