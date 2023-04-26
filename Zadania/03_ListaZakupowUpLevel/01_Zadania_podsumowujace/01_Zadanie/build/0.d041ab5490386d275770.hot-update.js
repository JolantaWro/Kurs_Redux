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


var stateCounter = 0;
var stateProduct = [];
// const stateProduct = {productsList: [
//     ], counter : 0}
// const stateProduct = {productsList: [
//         ]};

function maxIdProducts(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var counterReducer = function counterReducer() {
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
  console.log(state);
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      return [].concat(_toConsumableArray(state), [action.payload]);
    case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ORDER:
      var newState = _toConsumableArray(state);
      var index = state.findIndex(function (element) {
        return element === action.payload.product;
      });
      if (action.payload.action === "UP") {
        if (!index) {
          return state;
        }
        var _ref = [newState[index], newState[index - 1]];
        newState[index - 1] = _ref[0];
        newState[index] = _ref[1];
      } else {
        if (index === newState.length - 1) {
          return state;
        }
        var choseElement = newState[index];
        newState.splice(index, 1);
        newState.splice(index + 1, 0, choseElement);
      }
      return newState;
    default:
      return state;
  }
};
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counterReducer,
  products: products
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5687acd45e3988f0d7d2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFPTCxRQUFRO0lBRW5CO01BQ0ksT0FBT1osS0FBSztFQUFBO0FBRXhCLENBQUM7QUFHRCxJQUFNbUIsV0FBVyxHQUFHL0Isc0RBQWUsQ0FBQztFQUNoQ2dDLE9BQU8sRUFBRXJCLGNBQWM7RUFDdkJPLFFBQVEsRUFBRUE7QUFDZCxDQUFDLENBQUM7QUFFRixpRUFBZWEsV0FBVzs7Ozs7Ozs7VUMvRDFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBRERfUFJPRFVDVCwgQ0hBTkdFX09SREVSLCBERUNSRU1FTlQsIElOQ1JFTUVOVH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IHN0YXRlQ291bnRlciA9IDA7XG5jb25zdCBzdGF0ZVByb2R1Y3QgPSBbXTtcbi8vIGNvbnN0IHN0YXRlUHJvZHVjdCA9IHtwcm9kdWN0c0xpc3Q6IFtcbi8vICAgICBdLCBjb3VudGVyIDogMH1cbi8vIGNvbnN0IHN0YXRlUHJvZHVjdCA9IHtwcm9kdWN0c0xpc3Q6IFtcbi8vICAgICAgICAgXX07XG5cblxuXG5mdW5jdGlvbiBtYXhJZFByb2R1Y3RzKGFycmF5KSB7XG4gICAgY29uc3QgbWF4SWQgPSBhcnJheS5yZWR1Y2UoKG1heElkLCBlbGVtZW50KSA9PiBNYXRoLm1heChlbGVtZW50LmlkLCBtYXhJZCksIC0xKVxuICAgIHJldHVybiBtYXhJZCArIDFcbn1cbmNvbnN0IGNvdW50ZXJSZWR1Y2VyID0gKHN0YXRlPSBzdGF0ZUNvdW50ZXIsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBJTkNSRU1FTlQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyAxO1xuICAgICAgICBjYXNlIERFQ1JFTUVOVDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCBwcm9kdWN0cyA9IChzdGF0ZT0gc3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF1cbiAgICAgICAgY2FzZSBDSEFOR0VfT1JERVI6XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdCk7XG4gICAgICAgICAgICBpZihhY3Rpb24ucGF5bG9hZC5hY3Rpb24gPT09IFwiVVBcIikge1xuICAgICAgICAgICAgICAgIGlmKCFpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFtuZXdTdGF0ZVtpbmRleCAtIDFdLCBuZXdTdGF0ZVtpbmRleF1dID0gW25ld1N0YXRlW2luZGV4XSwgbmV3U3RhdGVbaW5kZXggLSAxXV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gbmV3U3RhdGUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlRWxlbWVudCA9IG5ld1N0YXRlW2luZGV4XTtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNwbGljZShpbmRleCsxLCAwLCBjaG9zZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBjb3VudGVyOiBjb3VudGVyUmVkdWNlcixcbiAgICBwcm9kdWN0czogcHJvZHVjdHNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1Njg3YWNkNDVlMzk4OGYwZDdkMlwiKSJdLCJuYW1lcyI6WyJBRERfUFJPRFVDVCIsIkNIQU5HRV9PUkRFUiIsIkRFQ1JFTUVOVCIsIklOQ1JFTUVOVCIsImNvbWJpbmVSZWR1Y2VycyIsInN0YXRlQ291bnRlciIsInN0YXRlUHJvZHVjdCIsIm1heElkUHJvZHVjdHMiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpZCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCIsIm5ld1N0YXRlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJwcm9kdWN0IiwiX3JlZiIsImNob3NlRWxlbWVudCIsInNwbGljZSIsInJvb3RSZWR1Y2VyIiwiY291bnRlciJdLCJzb3VyY2VSb290IjoiIn0=