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
/* harmony import */ var _02_Dzien_2_3_01_Combine_Reducers_01_Aplikacja_bankowa_js_redux_reducers_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
// Tu dodaj odpowiednie importy (createStore, akcje, reducer)




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // Tutaj zaimplementuj aplikację counter wg. opisu zadania
  // W konsoli powinno pojawić się odpowiednio:
  //
  // from subscribe 5
  // from subscribe 3
  // 1

  var _createStore = (0,_redux_customStore__WEBPACK_IMPORTED_MODULE_0__.createStore)(_02_Dzien_2_3_01_Combine_Reducers_01_Aplikacja_bankowa_js_redux_reducers_counter__WEBPACK_IMPORTED_MODULE_3__["default"]),
    dispatch = _createStore.dispatch,
    subscribe = _createStore.subscribe,
    getState = _createStore.getState;
  var unsubscribe = subscribe(function () {
    console.log("from subscribe ".concat(getState()));
  });
  dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.increment)(5));
  dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.decrement)(2));
  unsubscribe();
  console.log(getState());

  // const myStore = createStore(counterReducer, myState);
  // myStore.subscribe(() => console.log(`from subsribe ${myState.value}`))
  // myStore.dispatch(increment(5))
  // myStore.dispatch(decrement(2))
  // myStore.subscribe(() => console.log(myStore.getState()))
  // myStore.dispatch(decrement(2))
  // console.log(myState.value)
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0990ea2a584af516672f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNGVjNTExNDVmODRiOTg3NzhjMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEQ7QUFDTjtBQUNjO0FBQzhDO0FBS2xILDZCQUFlLHNDQUFZO0VBQ3pCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFRSxJQUFBTSxZQUFBLEdBQXdDTCwrREFBVyxDQUFDSSx3SEFBTyxDQUFDO0lBQXJERSxRQUFRLEdBQUFELFlBQUEsQ0FBUkMsUUFBUTtJQUFFQyxTQUFTLEdBQUFGLFlBQUEsQ0FBVEUsU0FBUztJQUFFQyxRQUFRLEdBQUFILFlBQUEsQ0FBUkcsUUFBUTtFQUVwQyxJQUFNQyxXQUFXLEdBQUdGLFNBQVMsQ0FBQyxZQUFNO0lBQ2hDRyxPQUFPLENBQUNDLEdBQUcsbUJBQUFDLE1BQUEsQ0FBbUJKLFFBQVEsRUFBRSxFQUFHO0VBQy9DLENBQUMsQ0FBQztFQUVGRixRQUFRLENBQUNILHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEJHLFFBQVEsQ0FBQ0osd0VBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0Qk8sV0FBVyxFQUFFO0VBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLEVBQUUsQ0FBQzs7RUFFdkI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFFSjs7Ozs7Ozs7VUNwQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9jb3VudGVyQXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHUgZG9kYWogb2Rwb3dpZWRuaWUgaW1wb3J0eSAoY3JlYXRlU3RvcmUsIGFrY2plLCByZWR1Y2VyKVxyXG5pbXBvcnQgY3VzdG9tU3RvcmUsIHtjcmVhdGVTdG9yZX0gZnJvbSAnLi9yZWR1eC9jdXN0b21TdG9yZSdcclxuaW1wb3J0IGNvdW50ZXJSZWR1Y2VyIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2NvdW50ZXJcIjtcclxuaW1wb3J0IHtkZWNyZW1lbnQsIGluY3JlbWVudH0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9uc1wiO1xyXG5pbXBvcnQgY291bnRlciBmcm9tIFwiLi4vLi4vLi4vLi4vMDJfRHppZW5fMi0zLzAxX0NvbWJpbmVfUmVkdWNlcnMvMDFfQXBsaWthY2phX2Jhbmtvd2EvanMvcmVkdXgvcmVkdWNlcnMvY291bnRlclwiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIC8vIFR1dGFqIHphaW1wbGVtZW50dWogYXBsaWthY2rEmSBjb3VudGVyIHdnLiBvcGlzdSB6YWRhbmlhXHJcbiAgLy8gVyBrb25zb2xpIHBvd2lubm8gcG9qYXdpxIcgc2nEmSBvZHBvd2llZG5pbzpcclxuICAvL1xyXG4gIC8vIGZyb20gc3Vic2NyaWJlIDVcclxuICAvLyBmcm9tIHN1YnNjcmliZSAzXHJcbiAgLy8gMVxyXG5cclxuICAgIGNvbnN0IHtkaXNwYXRjaCwgc3Vic2NyaWJlLCBnZXRTdGF0ZX0gPSBjcmVhdGVTdG9yZShjb3VudGVyKTtcclxuXHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGZyb20gc3Vic2NyaWJlICR7Z2V0U3RhdGUoKX1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRpc3BhdGNoKGluY3JlbWVudCg1KSk7XHJcbiAgICBkaXNwYXRjaChkZWNyZW1lbnQoMikpO1xyXG4gICAgdW5zdWJzY3JpYmUoKVxyXG4gICAgY29uc29sZS5sb2coZ2V0U3RhdGUoKSk7XHJcblxyXG4gICAgLy8gY29uc3QgbXlTdG9yZSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXJSZWR1Y2VyLCBteVN0YXRlKTtcclxuICAgIC8vIG15U3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKGBmcm9tIHN1YnNyaWJlICR7bXlTdGF0ZS52YWx1ZX1gKSlcclxuICAgIC8vIG15U3RvcmUuZGlzcGF0Y2goaW5jcmVtZW50KDUpKVxyXG4gICAgLy8gbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICAvLyBteVN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhteVN0b3JlLmdldFN0YXRlKCkpKVxyXG4gICAgLy8gbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhteVN0YXRlLnZhbHVlKVxyXG5cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwOTkwZWEyYTU4NGFmNTE2NjcyZlwiKSJdLCJuYW1lcyI6WyJjdXN0b21TdG9yZSIsImNyZWF0ZVN0b3JlIiwiY291bnRlclJlZHVjZXIiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJjb3VudGVyIiwiX2NyZWF0ZVN0b3JlIiwiZGlzcGF0Y2giLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsInVuc3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=