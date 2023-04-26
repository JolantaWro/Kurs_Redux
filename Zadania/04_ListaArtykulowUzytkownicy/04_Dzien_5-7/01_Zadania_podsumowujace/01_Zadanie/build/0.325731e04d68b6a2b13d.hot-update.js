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
var stateProduct = {};
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
        id: maxIdProducts([state]),
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
/******/ 	__webpack_require__.h = () => ("96588a64bde93adedafe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMjU3MzFlMDRkNjhiNmEyYjEzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUU0RDtBQUV0QjtBQUV0QyxJQUFNSSxZQUFZLEdBQUcsQ0FBQztBQUN0QjtBQUNBO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLENBQUMsQ0FBQztBQUd2QixTQUFTQyxhQUFhQSxDQUFDQyxLQUFLLEVBQUU7RUFDMUIsSUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQyxVQUFDRCxLQUFLLEVBQUVFLE9BQU87SUFBQSxPQUFLQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDRyxFQUFFLEVBQUVMLEtBQUssQ0FBQztFQUFBLEdBQUUsQ0FBQyxDQUFDLENBQUM7RUFDL0UsT0FBT0EsS0FBSyxHQUFHLENBQUM7QUFDcEI7QUFDQSxJQUFNTSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFtQztFQUFBLElBQS9CQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDWixZQUFZO0VBQUEsSUFBRWUsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQ3ZDLFFBQVFDLE1BQU0sQ0FBQ0MsSUFBSTtJQUNmLEtBQUtsQiwrQ0FBUztNQUNWLE9BQU9hLEtBQUssR0FBRyxDQUFDO0lBQ3BCLEtBQUtkLCtDQUFTO01BQ1YsT0FBT2MsS0FBSyxHQUFHLENBQUM7SUFDcEI7TUFDSSxPQUFPQSxLQUFLO0VBQUM7QUFFekIsQ0FBQztBQUVELElBQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQW1DO0VBQUEsSUFBL0JOLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNYLFlBQVk7RUFBQSxJQUFFYyxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDeEMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS3BCLGlEQUFXO01BQ1o7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQSxVQUFBc0IsTUFBQSxDQUFBQyxrQkFBQSxDQUNPUixLQUFLLElBQUU7UUFDTkYsRUFBRSxFQUFFUCxhQUFhLENBQUMsQ0FBQ1MsS0FBSyxDQUFDLENBQUM7UUFDMUJTLElBQUksRUFBRUwsTUFBTSxDQUFDTTtNQUNqQixDQUFDO0lBRVQ7TUFDSSxPQUFPVixLQUFLO0VBQUE7QUFHeEIsQ0FBQztBQUVELGlFQUFlWixzREFBZSxDQUFDO0VBQzNCVyxPQUFPLEVBQVBBLE9BQU87RUFDUE8sUUFBUSxFQUFSQTtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7VUMxREYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuLy8gICBjb3VudGVyLFxuLy8gICBwcm9kdWN0cyB6YWQgMlxuLy8gfSk7XG5cbmltcG9ydCB7QUREX1BST0RVQ1QsIERFQ1JFTUVOVCwgSU5DUkVNRU5UfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcblxuY29uc3Qgc3RhdGVDb3VudGVyID0gMDtcbi8vIGNvbnN0IHN0YXRlUHJvZHVjdCA9IHtwcm9kdWN0c0xpc3Q6IFtcbi8vICAgICAgICAgXX07XG5jb25zdCBzdGF0ZVByb2R1Y3QgPSB7fTtcblxuXG5mdW5jdGlvbiBtYXhJZFByb2R1Y3RzKGFycmF5KSB7XG4gICAgY29uc3QgbWF4SWQgPSBhcnJheS5yZWR1Y2UoKG1heElkLCBlbGVtZW50KSA9PiBNYXRoLm1heChlbGVtZW50LmlkLCBtYXhJZCksIC0xKVxuICAgIHJldHVybiBtYXhJZCArIDFcbn1cbmNvbnN0IGNvdW50ZXIgPSAoc3RhdGU9c3RhdGVDb3VudGVyLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSU5DUkVNRU5UOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICAgICAgY2FzZSBERUNSRU1FTlQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuY29uc3QgcHJvZHVjdHMgPSAoc3RhdGU9c3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4gICAgICAgICAgICAvLyByZXR1cm4gWy4uLnN0YXRlLCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgIC8vICAgICB0ZXh0OiBhY3Rpb24udGV4dH1dO1xuICAgICAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIC8vICAgICBwcm9kdWN0c0xpc3Q6IFsuLi5zdGF0ZS5wcm9kdWN0c0xpc3QsIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWQ6IG1heElkUHJvZHVjdHMoc3RhdGUucHJvZHVjdHNMaXN0KSxcbiAgICAgICAgICAgIC8vICAgICAgICAgdGV4dDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIC8vICAgICB9XVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICBpZDogbWF4SWRQcm9kdWN0cyhbc3RhdGVdKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICBjb3VudGVyLFxuICAgIHByb2R1Y3RzXG59KSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk2NTg4YTY0YmRlOTNhZGVkYWZlXCIpIl0sIm5hbWVzIjpbIkFERF9QUk9EVUNUIiwiREVDUkVNRU5UIiwiSU5DUkVNRU5UIiwiY29tYmluZVJlZHVjZXJzIiwic3RhdGVDb3VudGVyIiwic3RhdGVQcm9kdWN0IiwibWF4SWRQcm9kdWN0cyIsImFycmF5IiwibWF4SWQiLCJyZWR1Y2UiLCJlbGVtZW50IiwiTWF0aCIsIm1heCIsImlkIiwiY291bnRlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsInByb2R1Y3RzIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidGV4dCIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9