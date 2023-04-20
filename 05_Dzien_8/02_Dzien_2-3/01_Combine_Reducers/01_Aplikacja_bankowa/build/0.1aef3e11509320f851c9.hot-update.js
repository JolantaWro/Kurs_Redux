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

var initialState = 100;
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
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("51c046d284e9b12a1197")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xYWVmM2UxMTUwOTMyMGY4NTFjOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RDtBQUV6RCxJQUFNRSxZQUFZLEdBQUcsR0FBRztBQUV4QixTQUFTQyxXQUFXQSxDQUFBLEVBQTZCO0VBQUEsSUFBNUJDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNILFlBQVk7RUFBQSxJQUFFTSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDM0MsUUFBT0MsTUFBTSxDQUFDQyxJQUFJO0lBQ2QsS0FBS1QseURBQU87TUFDUixPQUFPSSxLQUFLLEdBQUdJLE1BQU0sQ0FBQ0UsT0FBTztJQUNqQyxLQUFLVCwwREFBUTtNQUNULElBQUlHLEtBQUssR0FBR0ksTUFBTSxDQUFDRSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQzVCLE9BQU9OLEtBQUs7TUFDaEI7TUFDQSxPQUFPQSxLQUFLLEdBQUdJLE1BQU0sQ0FBQ0UsT0FBTztFQUFBO0FBRXpDO0FBQ0EsaUVBQWVQLFdBQVc7Ozs7Ozs7O1VDcEIxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL3JlZHV4L3JlZHVjZXJzL2JhbmsuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVHV0YWogemFpbXBsZW1lbnR1aiByZWR1Y2VyIGRvIGFwbGlrYWNqaSBiYW5rQXBwXHJcbiAqIFBhbWnEmXRhaiBhYnkgbmEga2/FhGN1IHd5ZWtzcG9ydG93YcSHIHphaW1wbGVtZW50b3dhbsSFIGZ1bmtjasSZOlxyXG4gKiBleHBvcnQgZGVmYXVsdCBiYW5rUmVkdWNlcjtcclxuICovXHJcbmltcG9ydCB7REVQT1NJVCwgV0lUSERSQVd9IGZyb20gXCIuLi9hY3Rpb25zL2JhbmtBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSAxMDA7XHJcblxyXG5mdW5jdGlvbiBiYW5rUmVkdWNlcihzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBERVBPU0lUOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBjYXNlIFdJVEhEUkFXOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgLSBhY3Rpb24ucGF5bG9hZCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYmFua1JlZHVjZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTFjMDQ2ZDI4NGU5YjEyYTExOTdcIikiXSwibmFtZXMiOlsiREVQT1NJVCIsIldJVEhEUkFXIiwiaW5pdGlhbFN0YXRlIiwiYmFua1JlZHVjZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==