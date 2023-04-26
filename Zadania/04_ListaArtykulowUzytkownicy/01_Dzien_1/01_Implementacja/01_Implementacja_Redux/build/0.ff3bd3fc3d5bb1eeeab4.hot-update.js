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

var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';

// const increment = (updateValue) => ({
//     type: INCREMENT,
//     payload: {
//         value: updateValue
//     }
// })

var increment = function increment(updateValue) {
  return {
    type: INCREMENT,
    updateValue: updateValue
  };
};

// const decrement = (updateValue) => ({
//     type: DECREMENT,
//     payload: {
//         value: updateValue
//     }
// });

var decrement = function decrement(updateValue) {
  return {
    type: DECREMENT,
    updateValue: updateValue
  };
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a670f218f27cef3ddfa2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZjNiZDNmYzNkNWJiMWVlZWFiNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxXQUFXO0FBQzdCLElBQU1DLFNBQVMsR0FBRyxXQUFXOztBQUc3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLFdBQVc7RUFBQSxPQUFNO0lBQ2hDQyxJQUFJLEVBQUVKLFNBQVM7SUFBRUcsV0FBVyxFQUFYQTtFQUNyQixDQUFDO0FBQUEsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlGLFdBQVc7RUFBQSxPQUFNO0lBQ2hDQyxJQUFJLEVBQUVILFNBQVM7SUFBRUUsV0FBVyxFQUFYQTtFQUNyQixDQUFDO0FBQUEsQ0FBQzs7Ozs7Ozs7O1VDM0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wMV9JbXBsZW1lbnRhY2phLzAxX0ltcGxlbWVudGFjamFfUmVkdXgvanMvcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFR1dGFqIHphaW1wbGVtZW50dWogZHdpZSBha2NqZSBvcmF6IGFjdGlvbi1jcmVhdG9yc1xyXG4vLyBOYSBrb25pZWMgb2Rrb21lbnR1aiBvc3RhdG5pxIUgbGluacSZIGFieSB3eWVrc3BvcnRvd2HEhyBvZHBvd2llbmllIHptaWVubmUuXHJcblxyXG5jb25zdCBJTkNSRU1FTlQgPSAnSU5DUkVNRU5UJztcclxuY29uc3QgREVDUkVNRU5UID0gJ0RFQ1JFTUVOVCc7XHJcblxyXG5cclxuLy8gY29uc3QgaW5jcmVtZW50ID0gKHVwZGF0ZVZhbHVlKSA9PiAoe1xyXG4vLyAgICAgdHlwZTogSU5DUkVNRU5ULFxyXG4vLyAgICAgcGF5bG9hZDoge1xyXG4vLyAgICAgICAgIHZhbHVlOiB1cGRhdGVWYWx1ZVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuY29uc3QgaW5jcmVtZW50ID0gKHVwZGF0ZVZhbHVlKSA9PiAoe1xyXG4gICAgdHlwZTogSU5DUkVNRU5ULCB1cGRhdGVWYWx1ZVxyXG59KVxyXG5cclxuLy8gY29uc3QgZGVjcmVtZW50ID0gKHVwZGF0ZVZhbHVlKSA9PiAoe1xyXG4vLyAgICAgdHlwZTogREVDUkVNRU5ULFxyXG4vLyAgICAgcGF5bG9hZDoge1xyXG4vLyAgICAgICAgIHZhbHVlOiB1cGRhdGVWYWx1ZVxyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IGRlY3JlbWVudCA9ICh1cGRhdGVWYWx1ZSkgPT4gKHtcclxuICAgIHR5cGU6IERFQ1JFTUVOVCwgdXBkYXRlVmFsdWVcclxufSk7XHJcblxyXG5leHBvcnQgeyBJTkNSRU1FTlQsIERFQ1JFTUVOVCwgaW5jcmVtZW50LCBkZWNyZW1lbnQgfVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNjcwZjIxOGYyN2NlZjNkZGZhMlwiKSJdLCJuYW1lcyI6WyJJTkNSRU1FTlQiLCJERUNSRU1FTlQiLCJpbmNyZW1lbnQiLCJ1cGRhdGVWYWx1ZSIsInR5cGUiLCJkZWNyZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9