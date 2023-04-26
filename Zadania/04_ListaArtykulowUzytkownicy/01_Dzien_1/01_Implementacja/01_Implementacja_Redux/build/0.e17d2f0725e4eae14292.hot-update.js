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
  switch (action.type) {
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.INCREMENT:
      return {
        value: state.value + action.value
      };
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return {
        value: state.value - action.value
      };
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
/******/ 	__webpack_require__.h = () => ("4524795d02b2b90427be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMTdkMmYwNzI1ZTRlYWUxNDI5Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUUvRCxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlDLEtBQUssRUFBRUMsTUFBTSxFQUFLO0VBRXRDLFFBQVFBLE1BQU0sQ0FBQ0MsSUFBSTtJQUNmLEtBQUtKLDhEQUFTO01BQ1YsT0FBTztRQUFDSyxLQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FBSyxHQUFHRixNQUFNLENBQUNFO01BQUssQ0FBQztJQUM5QyxLQUFLTiw4REFBUztNQUNWLE9BQU87UUFBQ00sS0FBSyxFQUFFSCxLQUFLLENBQUNHLEtBQUssR0FBR0YsTUFBTSxDQUFDRTtNQUFLLENBQUM7SUFDOUM7TUFDSSxPQUFPSCxLQUFLO0VBQUM7QUFFekIsQ0FBQztBQUNELGlFQUFlRCxjQUFjOzs7Ozs7OztVQ2xCN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9yZWR1eC9yZWR1Y2Vycy9jb3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFR1dGFqIHphaW1wbGVtZW50dWogcmVkdWNlciBkbyBhcGxpa2FjamkgY291bnRlclxyXG4gKiBQYW1pxJl0YWogYWJ5IG5hIGtvxYRjdSB3eWVrc3BvcnRvd2HEhyB6YWltcGxlbWVudG93YW7EhSBmdW5rY2rEmTpcclxuICogZXhwb3J0IGRlZmF1bHQgY291bnRlclJlZHVjZXI7XHJcbiAqL1xyXG5pbXBvcnQge0RFQ1JFTUVOVCwgSU5DUkVNRU5UfSBmcm9tIFwiLi4vYWN0aW9ucy9jb3VudGVyQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgY291bnRlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIElOQ1JFTUVOVDpcclxuICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZTogc3RhdGUudmFsdWUgKyBhY3Rpb24udmFsdWV9O1xyXG4gICAgICAgIGNhc2UgREVDUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4ge3ZhbHVlOiBzdGF0ZS52YWx1ZSAtIGFjdGlvbi52YWx1ZX07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyUmVkdWNlcjtcclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ1MjQ3OTVkMDJiMmI5MDQyN2JlXCIpIl0sIm5hbWVzIjpbIkRFQ1JFTUVOVCIsIklOQ1JFTUVOVCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9