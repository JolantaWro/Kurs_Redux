"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 29:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_bankActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/**
 * Tutaj zaimplementuj reducer do aplikacji bankApp
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default bankReducer;
 */

var initialState = 0;
function bankReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_bankActions__WEBPACK_IMPORTED_MODULE_0__.DEPOSIT:
      return state + action.payload;
    case _actions_bankActions__WEBPACK_IMPORTED_MODULE_0__.WITHDRAW:
      if (state - action.payload < 0) {
        return state;
      }
      return state - action.payload;
    default:
      return state;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c410ec919142fef084b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yZjdhY2ZmNmI4YTYyMmU5MDIwYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUV6RCxJQUFNRSxZQUFZLEdBQUcsQ0FBQztBQUV0QixTQUFTQyxXQUFXQSxDQUFBLEVBQTZCO0VBQUEsSUFBNUJDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNILFlBQVk7RUFBQSxJQUFFTSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDM0MsUUFBT0MsTUFBTSxDQUFDQyxJQUFJO0lBQ2QsS0FBS1QseURBQU87TUFDUixPQUFPSSxLQUFLLEdBQUdJLE1BQU0sQ0FBQ0UsT0FBTztJQUNqQyxLQUFLVCwwREFBUTtNQUNULElBQUlHLEtBQUssR0FBR0ksTUFBTSxDQUFDRSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQzVCLE9BQU9OLEtBQUs7TUFDaEI7TUFDQSxPQUFPQSxLQUFLLEdBQUdJLE1BQU0sQ0FBQ0UsT0FBTztJQUNqQztNQUNJLE9BQU9OLEtBQUs7RUFBQTtBQUV4QjtBQUNBLGlFQUFlRCxXQUFXOzs7Ozs7OztVQ3RCMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQ29tYmluZV9SZWR1Y2Vycy8wMV9BcGxpa2FjamFfYmFua293YS9qcy9yZWR1eC9yZWR1Y2Vycy9iYW5rLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFR1dGFqIHphaW1wbGVtZW50dWogcmVkdWNlciBkbyBhcGxpa2FjamkgYmFua0FwcFxyXG4gKiBQYW1pxJl0YWogYWJ5IG5hIGtvxYRjdSB3eWVrc3BvcnRvd2HEhyB6YWltcGxlbWVudG93YW7EhSBmdW5rY2rEmTpcclxuICogZXhwb3J0IGRlZmF1bHQgYmFua1JlZHVjZXI7XHJcbiAqL1xyXG5pbXBvcnQge0RFUE9TSVQsIFdJVEhEUkFXfSBmcm9tIFwiLi4vYWN0aW9ucy9iYW5rQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gMDtcclxuXHJcbmZ1bmN0aW9uIGJhbmtSZWR1Y2VyKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIERFUE9TSVQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGNhc2UgV0lUSERSQVc6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSAtIGFjdGlvbi5wYXlsb2FkIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlIC0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYmFua1JlZHVjZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2M0MTBlYzkxOTE0MmZlZjA4NGJcIikiXSwibmFtZXMiOlsiREVQT1NJVCIsIldJVEhEUkFXIiwiaW5pdGlhbFN0YXRlIiwiYmFua1JlZHVjZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==