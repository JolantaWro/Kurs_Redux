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
      return state.value + action.payload.value;
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return state.value - action.payload.value;
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
/******/ 	__webpack_require__.h = () => ("5870a03e055b03459cd0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MGI4NjVlMjA0YjY1N2JjNzZmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUUvRCxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlDLEtBQUssRUFBRUMsTUFBTSxFQUFLO0VBRXRDLFFBQVFBLE1BQU0sQ0FBQ0MsSUFBSTtJQUNmLEtBQUtKLDhEQUFTO01BQ1YsT0FBT0UsS0FBSyxDQUFDRyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDRCxLQUFLO0lBQzdDLEtBQUtOLDhEQUFTO01BQ1YsT0FBT0csS0FBSyxDQUFDRyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDRCxLQUFLO0lBQzdDO01BQ0ksT0FBT0gsS0FBSztFQUFDO0FBRXpCLENBQUM7QUFDRCxpRUFBZUQsY0FBYzs7Ozs7Ozs7VUNsQjdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wMV9JbXBsZW1lbnRhY2phLzAxX0ltcGxlbWVudGFjamFfUmVkdXgvanMvcmVkdXgvcmVkdWNlcnMvY291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUdXRhaiB6YWltcGxlbWVudHVqIHJlZHVjZXIgZG8gYXBsaWthY2ppIGNvdW50ZXJcclxuICogUGFtacSZdGFqIGFieSBuYSBrb8WEY3Ugd3lla3Nwb3J0b3dhxIcgemFpbXBsZW1lbnRvd2FuxIUgZnVua2NqxJk6XHJcbiAqIGV4cG9ydCBkZWZhdWx0IGNvdW50ZXJSZWR1Y2VyO1xyXG4gKi9cclxuaW1wb3J0IHtERUNSRU1FTlQsIElOQ1JFTUVOVH0gZnJvbSBcIi4uL2FjdGlvbnMvY291bnRlckFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGNvdW50ZXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBJTkNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS52YWx1ZSArIGFjdGlvbi5wYXlsb2FkLnZhbHVlO1xyXG4gICAgICAgIGNhc2UgREVDUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUudmFsdWUgLSBhY3Rpb24ucGF5bG9hZC52YWx1ZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJSZWR1Y2VyO1xyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTg3MGEwM2UwNTViMDM0NTljZDBcIikiXSwibmFtZXMiOlsiREVDUkVNRU5UIiwiSU5DUkVNRU5UIiwiY291bnRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ2YWx1ZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9