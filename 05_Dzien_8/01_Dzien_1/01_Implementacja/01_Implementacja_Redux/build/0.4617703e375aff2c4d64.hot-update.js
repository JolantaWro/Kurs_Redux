"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_customStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _redux_reducers_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
// Tu dodaj odpowiednie importy (createStore, akcje, reducer)



var myState = 0;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // Tutaj zaimplementuj aplikację counter wg. opisu zadania
  // W konsoli powinno pojawić się odpowiednio:
  //
  // from subscribe 5
  // from subscribe 3
  // 1
  var myStore = (0,_redux_customStore__WEBPACK_IMPORTED_MODULE_0__.createStore)(_redux_reducers_counter__WEBPACK_IMPORTED_MODULE_1__["default"], myState);
  myStore.subscribe(function () {
    return console.log("from subsribe ".concat(myState.value));
  });
  myStore.dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.increment)(5));
  myStore.dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.decrement)(2));
  myStore.subscribe(function () {
    return console.log(myStore.getState());
  });
  myStore.dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.decrement)(2));
  console.log(myState.value);
}

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
var counterReducer = function counterReducer(state, action) {
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
/******/ 	__webpack_require__.h = () => ("74b464411692b69aa646")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40NjE3NzAzZTM3NWFmZjJjNGQ2NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0RDtBQUNOO0FBQ2M7QUFFcEUsSUFBTUssT0FBTyxHQUFHLENBQUM7QUFHakIsNkJBQWUsc0NBQVk7RUFDekI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0UsSUFBTUMsT0FBTyxHQUFHTCwrREFBVyxDQUFDQywrREFBYyxFQUFFRyxPQUFPLENBQUM7RUFDcERDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDO0lBQUEsT0FBTUMsT0FBTyxDQUFDQyxHQUFHLGtCQUFBQyxNQUFBLENBQWtCTCxPQUFPLENBQUNNLEtBQUssRUFBRztFQUFBLEVBQUM7RUFDdEVMLE9BQU8sQ0FBQ00sUUFBUSxDQUFDUix3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlCRSxPQUFPLENBQUNNLFFBQVEsQ0FBQ1Qsd0VBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM5QkcsT0FBTyxDQUFDQyxTQUFTLENBQUM7SUFBQSxPQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDTyxRQUFRLEVBQUUsQ0FBQztFQUFBLEVBQUM7RUFDeERQLE9BQU8sQ0FBQ00sUUFBUSxDQUFDVCx3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUFDTSxLQUFLLENBQUM7QUFFOUI7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBRS9ELElBQU1OLE9BQU8sR0FBRyxDQUFDO0FBQ2pCLElBQU1ILGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSWMsS0FBSyxFQUFFQyxNQUFNLEVBQUs7RUFFdEMsUUFBUUEsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS0gsOERBQVM7TUFDVixPQUFPQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0UsT0FBTztJQUNqQyxLQUFLTCw4REFBUztNQUNWLE9BQU9FLEtBQUssR0FBR0MsTUFBTSxDQUFDRSxPQUFPO0lBQ2pDO01BQ0ksT0FBT0gsS0FBSztFQUFDO0FBSXpCLENBQUM7QUFDRCxpRUFBZWQsY0FBYzs7Ozs7Ozs7VUNyQjdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wMV9JbXBsZW1lbnRhY2phLzAxX0ltcGxlbWVudGFjamFfUmVkdXgvanMvY291bnRlckFwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9yZWR1eC9yZWR1Y2Vycy9jb3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHUgZG9kYWogb2Rwb3dpZWRuaWUgaW1wb3J0eSAoY3JlYXRlU3RvcmUsIGFrY2plLCByZWR1Y2VyKVxyXG5pbXBvcnQgY3VzdG9tU3RvcmUsIHtjcmVhdGVTdG9yZX0gZnJvbSAnLi9yZWR1eC9jdXN0b21TdG9yZSdcclxuaW1wb3J0IGNvdW50ZXJSZWR1Y2VyIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2NvdW50ZXJcIjtcclxuaW1wb3J0IHtkZWNyZW1lbnQsIGluY3JlbWVudH0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgbXlTdGF0ZSA9IDA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIC8vIFR1dGFqIHphaW1wbGVtZW50dWogYXBsaWthY2rEmSBjb3VudGVyIHdnLiBvcGlzdSB6YWRhbmlhXHJcbiAgLy8gVyBrb25zb2xpIHBvd2lubm8gcG9qYXdpxIcgc2nEmSBvZHBvd2llZG5pbzpcclxuICAvL1xyXG4gIC8vIGZyb20gc3Vic2NyaWJlIDVcclxuICAvLyBmcm9tIHN1YnNjcmliZSAzXHJcbiAgLy8gMVxyXG4gICAgY29uc3QgbXlTdG9yZSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXJSZWR1Y2VyLCBteVN0YXRlKTtcclxuICAgIG15U3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKGBmcm9tIHN1YnNyaWJlICR7bXlTdGF0ZS52YWx1ZX1gKSlcclxuICAgIG15U3RvcmUuZGlzcGF0Y2goaW5jcmVtZW50KDUpKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICBteVN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhteVN0b3JlLmdldFN0YXRlKCkpKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICBjb25zb2xlLmxvZyhteVN0YXRlLnZhbHVlKVxyXG5cclxufVxyXG4iLCIvKipcclxuICogVHV0YWogemFpbXBsZW1lbnR1aiByZWR1Y2VyIGRvIGFwbGlrYWNqaSBjb3VudGVyXHJcbiAqIFBhbWnEmXRhaiBhYnkgbmEga2/FhGN1IHd5ZWtzcG9ydG93YcSHIHphaW1wbGVtZW50b3dhbsSFIGZ1bmtjasSZOlxyXG4gKiBleHBvcnQgZGVmYXVsdCBjb3VudGVyUmVkdWNlcjtcclxuICovXHJcbmltcG9ydCB7REVDUkVNRU5ULCBJTkNSRU1FTlR9IGZyb20gXCIuLi9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBteVN0YXRlID0gMDtcclxuY29uc3QgY291bnRlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIElOQ1JFTUVOVDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlICsgYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgY2FzZSBERUNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyUmVkdWNlcjtcclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc0YjQ2NDQxMTY5MmI2OWFhNjQ2XCIpIl0sIm5hbWVzIjpbImN1c3RvbVN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb3VudGVyUmVkdWNlciIsImRlY3JlbWVudCIsImluY3JlbWVudCIsIm15U3RhdGUiLCJteVN0b3JlIiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsInZhbHVlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIkRFQ1JFTUVOVCIsIklOQ1JFTUVOVCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9