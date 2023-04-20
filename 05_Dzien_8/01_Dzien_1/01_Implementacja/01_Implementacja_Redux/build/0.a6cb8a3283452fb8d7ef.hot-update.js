"use strict";
self["webpackHotUpdatees6_react"](0,{

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

var counterReducer = function counterReducer(state, action) {
  // switch (action.type) {
  //     case INCREMENT:
  //         return state + action.payload.value;
  //     case DECREMENT:
  //         return state - action.payload.value;
  //     default:
  //         return state;
  // }
  var tempState = state;
  if (action.type === _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.INCREMENT) {
    return tempState + action.payload.value;
  } else if (action.type === 'DECREMENT') {
    return tempState - action.payload.value;
  }
  return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0177fe520ee2ef1c8f78")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNmNiOGEzMjgzNDUyZmI4ZDdlZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUUvRCxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlDLEtBQUssRUFBRUMsTUFBTSxFQUFLO0VBRXRDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxJQUFJQyxTQUFTLEdBQUdGLEtBQUs7RUFDckIsSUFBSUMsTUFBTSxDQUFDRSxJQUFJLEtBQUtMLDhEQUFTLEVBQUU7SUFDM0IsT0FBT0ksU0FBUyxHQUFHRCxNQUFNLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSztFQUMzQyxDQUFDLE1BQU0sSUFBSUosTUFBTSxDQUFDRSxJQUFJLEtBQUssV0FBVyxFQUFFO0lBQ3BDLE9BQU9ELFNBQVMsR0FBR0QsTUFBTSxDQUFDRyxPQUFPLENBQUNDLEtBQUs7RUFDM0M7RUFDQSxPQUFPTCxLQUFLO0FBRWhCLENBQUM7QUFDRCxpRUFBZUQsY0FBYzs7Ozs7Ozs7VUMxQjdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wMV9JbXBsZW1lbnRhY2phLzAxX0ltcGxlbWVudGFjamFfUmVkdXgvanMvcmVkdXgvcmVkdWNlcnMvY291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUdXRhaiB6YWltcGxlbWVudHVqIHJlZHVjZXIgZG8gYXBsaWthY2ppIGNvdW50ZXJcclxuICogUGFtacSZdGFqIGFieSBuYSBrb8WEY3Ugd3lla3Nwb3J0b3dhxIcgemFpbXBsZW1lbnRvd2FuxIUgZnVua2NqxJk6XHJcbiAqIGV4cG9ydCBkZWZhdWx0IGNvdW50ZXJSZWR1Y2VyO1xyXG4gKi9cclxuaW1wb3J0IHtERUNSRU1FTlQsIElOQ1JFTUVOVH0gZnJvbSBcIi4uL2FjdGlvbnMvY291bnRlckFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGNvdW50ZXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICAvLyBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAvLyAgICAgY2FzZSBJTkNSRU1FTlQ6XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBzdGF0ZSArIGFjdGlvbi5wYXlsb2FkLnZhbHVlO1xyXG4gICAgLy8gICAgIGNhc2UgREVDUkVNRU5UOlxyXG4gICAgLy8gICAgICAgICByZXR1cm4gc3RhdGUgLSBhY3Rpb24ucGF5bG9hZC52YWx1ZTtcclxuICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgLy8gICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAvLyB9XHJcbiAgICBsZXQgdGVtcFN0YXRlID0gc3RhdGVcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSU5DUkVNRU5UKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBTdGF0ZSArIGFjdGlvbi5wYXlsb2FkLnZhbHVlXHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnREVDUkVNRU5UJykge1xyXG4gICAgICAgIHJldHVybiB0ZW1wU3RhdGUgLSBhY3Rpb24ucGF5bG9hZC52YWx1ZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY291bnRlclJlZHVjZXI7XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMTc3ZmU1MjBlZTJlZjFjOGY3OFwiKSJdLCJuYW1lcyI6WyJERUNSRU1FTlQiLCJJTkNSRU1FTlQiLCJjb3VudGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidGVtcFN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=