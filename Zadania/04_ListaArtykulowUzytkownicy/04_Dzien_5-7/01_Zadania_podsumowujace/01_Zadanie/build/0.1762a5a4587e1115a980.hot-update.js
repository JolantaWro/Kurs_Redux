"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_PRODUCT": () => (/* binding */ ADD_PRODUCT),
/* harmony export */   "CHANGE_ORDER": () => (/* binding */ CHANGE_ORDER),
/* harmony export */   "DECREMENT": () => (/* binding */ DECREMENT),
/* harmony export */   "INCREMENT": () => (/* binding */ INCREMENT),
/* harmony export */   "addProduct": () => (/* binding */ addProduct),
/* harmony export */   "changeOrder": () => (/* binding */ changeOrder),
/* harmony export */   "decrement": () => (/* binding */ decrement),
/* harmony export */   "increment": () => (/* binding */ increment)
/* harmony export */ });
var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";
var ADD_PRODUCT = "ADD_PRODUCT";
var CHANGE_ORDER = "CHANGE_ORDER";
var increment = function increment(updateValue) {
  return {
    type: INCREMENT,
    payload: updateValue
  };
};
var decrement = function decrement(updateValue) {
  return {
    type: DECREMENT,
    payload: updateValue
  };
};
var addProduct = function addProduct(updateValue) {
  return {
    type: ADD_PRODUCT,
    payload: updateValue
  };
};
var changeOrder = function changeOrder(updateValue) {
  return {
    type: CHANGE_ORDER,
    payload: updateValue
  };
};


/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
// export default combineReducers({
//   counter,
//   products zad 2
// });



var stateCounter = 0;
var stateProduct = [];
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
      return;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counter
}));

/***/ }),

/***/ 34:
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
/******/ 	__webpack_require__.h = () => ("73a83fd4ffc121e2c5a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNzYyYTVhNDU4N2UxMTE1YTk4MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxHQUFHLFdBQVc7QUFDN0IsSUFBTUMsU0FBUyxHQUFHLFdBQVc7QUFDN0IsSUFBTUMsV0FBVyxHQUFHLGFBQWE7QUFDakMsSUFBTUMsWUFBWSxHQUFHLGNBQWM7QUFHbkMsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLFdBQVc7RUFBQSxPQUFNO0lBQ2hDQyxJQUFJLEVBQUVOLFNBQVM7SUFDZk8sT0FBTyxFQUFFRjtFQUNiLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlILFdBQVc7RUFBQSxPQUFNO0lBQ2hDQyxJQUFJLEVBQUVMLFNBQVM7SUFDZk0sT0FBTyxFQUFFRjtFQUNiLENBQUM7QUFBQSxDQUFDO0FBR0YsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlKLFdBQVc7RUFBQSxPQUFNO0lBQ2pDQyxJQUFJLEVBQUVKLFdBQVc7SUFDakJLLE9BQU8sRUFBRUY7RUFDYixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJTCxXQUFXO0VBQUEsT0FBTTtJQUNsQ0MsSUFBSSxFQUFFSCxZQUFZO0lBQ2xCSSxPQUFPLEVBQUVGO0VBQ2IsQ0FBQztBQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDekJGO0FBQ0E7QUFDQTtBQUNBOztBQUU0RDtBQUV0QjtBQUV0QyxJQUFNTyxZQUFZLEdBQUcsQ0FBQztBQUN0QixJQUFNQyxZQUFZLEdBQUcsRUFBRTtBQUN2QixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFtQztFQUFBLElBQS9CQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDSixZQUFZO0VBQUEsSUFBRU8sTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQ3ZDLFFBQVFDLE1BQU0sQ0FBQ2IsSUFBSTtJQUNmLEtBQUtOLCtDQUFTO01BQ1YsT0FBT2UsS0FBSyxHQUFHLENBQUM7SUFDcEIsS0FBS2QsK0NBQVM7TUFDVixPQUFPYyxLQUFLLEdBQUcsQ0FBQztJQUNwQjtNQUNJLE9BQU9BLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRUQsSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBbUM7RUFBQSxJQUEvQkwsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ0gsWUFBWTtFQUFBLElBQUVNLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUN4QyxRQUFRQyxNQUFNLENBQUNiLElBQUk7SUFDZixLQUFLSixpREFBVztNQUNaO0VBQU07QUFFbEIsQ0FBQztBQUVELGlFQUFlUyxzREFBZSxDQUFDO0VBQzNCRyxPQUFPLEVBQVBBO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0JrQztBQUNIO0FBR2pDLElBQU1TLEtBQUssR0FBR0Ysa0RBQVcsQ0FBQ0MsaURBQU8sQ0FBQztBQUVsQyxpRUFBZUMsS0FBSzs7Ozs7Ozs7VUNOcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSU5DUkVNRU5UID0gXCJJTkNSRU1FTlRcIjtcclxuY29uc3QgREVDUkVNRU5UID0gXCJERUNSRU1FTlRcIjtcclxuY29uc3QgQUREX1BST0RVQ1QgPSBcIkFERF9QUk9EVUNUXCI7XHJcbmNvbnN0IENIQU5HRV9PUkRFUiA9IFwiQ0hBTkdFX09SREVSXCI7XHJcblxyXG5cclxuY29uc3QgaW5jcmVtZW50ID0gKHVwZGF0ZVZhbHVlKSA9PiAoe1xyXG4gICAgdHlwZTogSU5DUkVNRU5ULFxyXG4gICAgcGF5bG9hZDogdXBkYXRlVmFsdWVcclxufSk7XHJcblxyXG5jb25zdCBkZWNyZW1lbnQgPSAodXBkYXRlVmFsdWUpID0+ICh7XHJcbiAgICB0eXBlOiBERUNSRU1FTlQsXHJcbiAgICBwYXlsb2FkOiB1cGRhdGVWYWx1ZVxyXG59KTtcclxuXHJcblxyXG5jb25zdCBhZGRQcm9kdWN0ID0gKHVwZGF0ZVZhbHVlKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BST0RVQ1QsXHJcbiAgICBwYXlsb2FkOiB1cGRhdGVWYWx1ZVxyXG59KVxyXG5cclxuY29uc3QgY2hhbmdlT3JkZXIgPSAodXBkYXRlVmFsdWUpID0+ICh7XHJcbiAgICB0eXBlOiBDSEFOR0VfT1JERVIsXHJcbiAgICBwYXlsb2FkOiB1cGRhdGVWYWx1ZVxyXG59KVxyXG5cclxuZXhwb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIEFERF9QUk9EVUNULCBDSEFOR0VfT1JERVIsIGluY3JlbWVudCwgZGVjcmVtZW50LCBhZGRQcm9kdWN0LCBjaGFuZ2VPcmRlciB9OyIsIi8vIGV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbi8vICAgY291bnRlcixcclxuLy8gICBwcm9kdWN0cyB6YWQgMlxyXG4vLyB9KTtcclxuXHJcbmltcG9ydCB7QUREX1BST0RVQ1QsIERFQ1JFTUVOVCwgSU5DUkVNRU5UfSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5jb25zdCBzdGF0ZUNvdW50ZXIgPSAwO1xyXG5jb25zdCBzdGF0ZVByb2R1Y3QgPSBbXTtcclxuY29uc3QgY291bnRlciA9IChzdGF0ZT1zdGF0ZUNvdW50ZXIsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSU5DUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyAxO1xyXG4gICAgICAgIGNhc2UgREVDUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcHJvZHVjdHMgPSAoc3RhdGU9c3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNvdW50ZXJcclxufSkiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzNhODNmZDRmZmMxMjFlMmM1YTdcIikiXSwibmFtZXMiOlsiSU5DUkVNRU5UIiwiREVDUkVNRU5UIiwiQUREX1BST0RVQ1QiLCJDSEFOR0VfT1JERVIiLCJpbmNyZW1lbnQiLCJ1cGRhdGVWYWx1ZSIsInR5cGUiLCJwYXlsb2FkIiwiZGVjcmVtZW50IiwiYWRkUHJvZHVjdCIsImNoYW5nZU9yZGVyIiwiY29tYmluZVJlZHVjZXJzIiwic3RhdGVDb3VudGVyIiwic3RhdGVQcm9kdWN0IiwiY291bnRlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwicHJvZHVjdHMiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=