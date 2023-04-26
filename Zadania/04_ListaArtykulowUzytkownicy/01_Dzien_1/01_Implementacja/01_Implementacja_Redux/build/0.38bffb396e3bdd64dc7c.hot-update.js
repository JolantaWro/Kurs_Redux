"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DECREMENT": () => (/* binding */ DECREMENT),
/* harmony export */   "INCREMENT": () => (/* binding */ INCREMENT),
/* harmony export */   "decrement": () => (/* binding */ decrement),
/* harmony export */   "increment": () => (/* binding */ increment)
/* harmony export */ });
// Tutaj zaimplementuj dwie akcje oraz action-creators
// Na koniec odkomentuj ostatnią linię aby wyeksportować odpowienie zmienne.

var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";
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


/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/**
 * Tutaj zaimplementuj reducer do aplikacji counter
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default counterReducer;
 */

var myState = 0;
var counterReducer = function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : myState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.INCREMENT:
      return state + action.payload;
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("915ef5bafc1d1ef2b8d5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zOGJmZmIzOTZlM2JkZDY0ZGM3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxXQUFXO0FBQzdCLElBQU1DLFNBQVMsR0FBRyxXQUFXO0FBRzdCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJQyxXQUFXO0VBQUEsT0FBTTtJQUNoQ0MsSUFBSSxFQUFFSixTQUFTO0lBQ2ZLLE9BQU8sRUFBRUY7RUFDYixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJSCxXQUFXO0VBQUEsT0FBTTtJQUNoQ0MsSUFBSSxFQUFFSCxTQUFTO0lBQ2ZJLE9BQU8sRUFBRUY7RUFDYixDQUFDO0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFFL0QsSUFBTUksT0FBTyxHQUFHLENBQUM7QUFDakIsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQThCO0VBQUEsSUFBMUJDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNILE9BQU87RUFBQSxJQUFFTSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFFekMsUUFBUUMsTUFBTSxDQUFDVCxJQUFJO0lBQ2YsS0FBS0osOERBQVM7TUFDVixPQUFPUyxLQUFLLEdBQUdJLE1BQU0sQ0FBQ1IsT0FBTztJQUNqQyxLQUFLSiw4REFBUztNQUNWLE9BQU9RLEtBQUssR0FBR0ksTUFBTSxDQUFDUixPQUFPO0lBQ2pDO01BQ0ksT0FBT0ksS0FBSztFQUFDO0FBSXpCLENBQUM7QUFDRCxpRUFBZUQsY0FBYzs7Ozs7Ozs7VUNyQjdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wMV9JbXBsZW1lbnRhY2phLzAxX0ltcGxlbWVudGFjamFfUmVkdXgvanMvcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9yZWR1eC9yZWR1Y2Vycy9jb3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHV0YWogemFpbXBsZW1lbnR1aiBkd2llIGFrY2plIG9yYXogYWN0aW9uLWNyZWF0b3JzXHJcbi8vIE5hIGtvbmllYyBvZGtvbWVudHVqIG9zdGF0bmnEhSBsaW5pxJkgYWJ5IHd5ZWtzcG9ydG93YcSHIG9kcG93aWVuaWUgem1pZW5uZS5cclxuXHJcbmNvbnN0IElOQ1JFTUVOVCA9IFwiSU5DUkVNRU5UXCI7XHJcbmNvbnN0IERFQ1JFTUVOVCA9IFwiREVDUkVNRU5UXCI7XHJcblxyXG5cclxuY29uc3QgaW5jcmVtZW50ID0gKHVwZGF0ZVZhbHVlKSA9PiAoe1xyXG4gICAgdHlwZTogSU5DUkVNRU5ULFxyXG4gICAgcGF5bG9hZDogdXBkYXRlVmFsdWVcclxufSlcclxuXHJcbmNvbnN0IGRlY3JlbWVudCA9ICh1cGRhdGVWYWx1ZSkgPT4gKHtcclxuICAgIHR5cGU6IERFQ1JFTUVOVCxcclxuICAgIHBheWxvYWQ6IHVwZGF0ZVZhbHVlXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCB7IElOQ1JFTUVOVCwgREVDUkVNRU5ULCBpbmNyZW1lbnQsIGRlY3JlbWVudCB9XHJcbiIsIi8qKlxyXG4gKiBUdXRhaiB6YWltcGxlbWVudHVqIHJlZHVjZXIgZG8gYXBsaWthY2ppIGNvdW50ZXJcclxuICogUGFtacSZdGFqIGFieSBuYSBrb8WEY3Ugd3lla3Nwb3J0b3dhxIcgemFpbXBsZW1lbnRvd2FuxIUgZnVua2NqxJk6XHJcbiAqIGV4cG9ydCBkZWZhdWx0IGNvdW50ZXJSZWR1Y2VyO1xyXG4gKi9cclxuaW1wb3J0IHtERUNSRU1FTlQsIElOQ1JFTUVOVH0gZnJvbSBcIi4uL2FjdGlvbnMvY291bnRlckFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IG15U3RhdGUgPSAwO1xyXG5jb25zdCBjb3VudGVyUmVkdWNlciA9IChzdGF0ZT1teVN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBJTkNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGNhc2UgREVDUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgLSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY291bnRlclJlZHVjZXI7XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MTVlZjViYWZjMWQxZWYyYjhkNVwiKSJdLCJuYW1lcyI6WyJJTkNSRU1FTlQiLCJERUNSRU1FTlQiLCJpbmNyZW1lbnQiLCJ1cGRhdGVWYWx1ZSIsInR5cGUiLCJwYXlsb2FkIiwiZGVjcmVtZW50IiwibXlTdGF0ZSIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9