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
  dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.increment)(5));
  dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.decrement)(2));
  console.log(getState());

  // const myStore = createStore(counterReducer, myState);
  // myStore.subscribe(() => console.log(`from subsribe ${myState.value}`))
  // myStore.dispatch(increment(5))
  // myStore.dispatch(decrement(2))
  // myStore.subscribe(() => console.log(myStore.getState()))
  // myStore.dispatch(decrement(2))
  // console.log(myState.value)
}

/***/ }),

/***/ 29:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DECREMENT": () => (/* binding */ DECREMENT),
/* harmony export */   "INCREMENT": () => (/* binding */ INCREMENT),
/* harmony export */   "decrement": () => (/* binding */ decrement),
/* harmony export */   "increment": () => (/* binding */ increment)
/* harmony export */ });
var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";
var increment = function increment(n) {
  return {
    type: INCREMENT,
    payload: n
  };
};
var decrement = function decrement(n) {
  return {
    type: DECREMENT,
    payload: n
  };
};


/***/ }),

/***/ 28:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

var initialState = 0;
function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    payload = _ref.payload;
  switch (type) {
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.INCREMENT:
      return state + payload;
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return state - payload;
    default:
      return state;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d4ec51145f84b98778c0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NGI0NjQ0MTE2OTJiNjlhYTY0Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEQ7QUFDTjtBQUNjO0FBQzhDO0FBS2xILDZCQUFlLHNDQUFZO0VBQ3pCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFRSxJQUFBTSxZQUFBLEdBQXdDTCwrREFBVyxDQUFDSSx3SEFBTyxDQUFDO0lBQXJERSxRQUFRLEdBQUFELFlBQUEsQ0FBUkMsUUFBUTtJQUFFQyxTQUFTLEdBQUFGLFlBQUEsQ0FBVEUsU0FBUztJQUFFQyxRQUFRLEdBQUFILFlBQUEsQ0FBUkcsUUFBUTtFQUVwQ0YsUUFBUSxDQUFDSCx3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3RCRyxRQUFRLENBQUNKLHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLEVBQUUsQ0FBQzs7RUFFdkI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFFSjs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsSUFBTUcsU0FBUyxHQUFHLFdBQVc7QUFDN0IsSUFBTUMsU0FBUyxHQUFHLFdBQVc7QUFFN0IsSUFBTVQsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlVLENBQUM7RUFBQSxPQUFNO0lBQ3hCQyxJQUFJLEVBQUVILFNBQVM7SUFDZkksT0FBTyxFQUFFRjtFQUNYLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTVgsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlXLENBQUM7RUFBQSxPQUFNO0lBQ3hCQyxJQUFJLEVBQUVGLFNBQVM7SUFDZkcsT0FBTyxFQUFFRjtFQUNYLENBQUM7QUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDWDZEO0FBRS9ELElBQU1HLFlBQVksR0FBRyxDQUFDO0FBRXRCLFNBQVNmLGNBQWNBLENBQUEsRUFBd0M7RUFBQSxJQUF2Q2dCLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdGLFlBQVk7RUFBQSxJQUFBSyxJQUFBLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFBR04sSUFBSSxHQUFBTyxJQUFBLENBQUpQLElBQUk7SUFBRUMsT0FBTyxHQUFBTSxJQUFBLENBQVBOLE9BQU87RUFDMUQsUUFBUUQsSUFBSTtJQUNWLEtBQUtILDhEQUFTO01BQ1osT0FBT00sS0FBSyxHQUFHRixPQUFPO0lBRXhCLEtBQUtILDhEQUFTO01BQ1osT0FBT0ssS0FBSyxHQUFHRixPQUFPO0lBRXhCO01BQ0UsT0FBT0UsS0FBSztFQUFDO0FBRW5CO0FBRUEsaUVBQWVoQixjQUFjOzs7Ozs7OztVQ2pCN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9jb3VudGVyQXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0NvbWJpbmVfUmVkdWNlcnMvMDFfQXBsaWthY2phX2Jhbmtvd2EvanMvcmVkdXgvcmVkdWNlcnMvY291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFR1IGRvZGFqIG9kcG93aWVkbmllIGltcG9ydHkgKGNyZWF0ZVN0b3JlLCBha2NqZSwgcmVkdWNlcilcclxuaW1wb3J0IGN1c3RvbVN0b3JlLCB7Y3JlYXRlU3RvcmV9IGZyb20gJy4vcmVkdXgvY3VzdG9tU3RvcmUnXHJcbmltcG9ydCBjb3VudGVyUmVkdWNlciBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9jb3VudGVyXCI7XHJcbmltcG9ydCB7ZGVjcmVtZW50LCBpbmNyZW1lbnR9IGZyb20gXCIuL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnNcIjtcclxuaW1wb3J0IGNvdW50ZXIgZnJvbSBcIi4uLy4uLy4uLy4uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL3JlZHV4L3JlZHVjZXJzL2NvdW50ZXJcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAvLyBUdXRhaiB6YWltcGxlbWVudHVqIGFwbGlrYWNqxJkgY291bnRlciB3Zy4gb3Bpc3UgemFkYW5pYVxyXG4gIC8vIFcga29uc29saSBwb3dpbm5vIHBvamF3acSHIHNpxJkgb2Rwb3dpZWRuaW86XHJcbiAgLy9cclxuICAvLyBmcm9tIHN1YnNjcmliZSA1XHJcbiAgLy8gZnJvbSBzdWJzY3JpYmUgM1xyXG4gIC8vIDFcclxuXHJcbiAgICBjb25zdCB7ZGlzcGF0Y2gsIHN1YnNjcmliZSwgZ2V0U3RhdGV9ID0gY3JlYXRlU3RvcmUoY291bnRlcik7XHJcblxyXG4gICAgZGlzcGF0Y2goaW5jcmVtZW50KDUpKTtcclxuICAgIGRpc3BhdGNoKGRlY3JlbWVudCgyKSk7XHJcbiAgICBjb25zb2xlLmxvZyhnZXRTdGF0ZSgpKTtcclxuXHJcbiAgICAvLyBjb25zdCBteVN0b3JlID0gY3JlYXRlU3RvcmUoY291bnRlclJlZHVjZXIsIG15U3RhdGUpO1xyXG4gICAgLy8gbXlTdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coYGZyb20gc3Vic3JpYmUgJHtteVN0YXRlLnZhbHVlfWApKVxyXG4gICAgLy8gbXlTdG9yZS5kaXNwYXRjaChpbmNyZW1lbnQoNSkpXHJcbiAgICAvLyBteVN0b3JlLmRpc3BhdGNoKGRlY3JlbWVudCgyKSlcclxuICAgIC8vIG15U3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKG15U3RvcmUuZ2V0U3RhdGUoKSkpXHJcbiAgICAvLyBteVN0b3JlLmRpc3BhdGNoKGRlY3JlbWVudCgyKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKG15U3RhdGUudmFsdWUpXHJcblxyXG59XHJcbiIsImNvbnN0IElOQ1JFTUVOVCA9IFwiSU5DUkVNRU5UXCI7XHJcbmNvbnN0IERFQ1JFTUVOVCA9IFwiREVDUkVNRU5UXCI7XHJcblxyXG5jb25zdCBpbmNyZW1lbnQgPSAobikgPT4gKHtcclxuICB0eXBlOiBJTkNSRU1FTlQsXHJcbiAgcGF5bG9hZDogblxyXG59KTtcclxuXHJcbmNvbnN0IGRlY3JlbWVudCA9IChuKSA9PiAoe1xyXG4gIHR5cGU6IERFQ1JFTUVOVCxcclxuICBwYXlsb2FkOiBuXHJcbn0pO1xyXG5cclxuZXhwb3J0IHtJTkNSRU1FTlQsIERFQ1JFTUVOVCwgaW5jcmVtZW50LCBkZWNyZW1lbnR9O1xyXG4iLCJpbXBvcnQge0lOQ1JFTUVOVCwgREVDUkVNRU5UfSBmcm9tIFwiLi4vYWN0aW9ucy9jb3VudGVyQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gMDtcclxuXHJcbmZ1bmN0aW9uIGNvdW50ZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7dHlwZSwgcGF5bG9hZH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgSU5DUkVNRU5UOlxyXG4gICAgICByZXR1cm4gc3RhdGUgKyBwYXlsb2FkO1xyXG5cclxuICAgIGNhc2UgREVDUkVNRU5UOlxyXG4gICAgICByZXR1cm4gc3RhdGUgLSBwYXlsb2FkO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJSZWR1Y2VyO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNGVjNTExNDVmODRiOTg3NzhjMFwiKSJdLCJuYW1lcyI6WyJjdXN0b21TdG9yZSIsImNyZWF0ZVN0b3JlIiwiY291bnRlclJlZHVjZXIiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJjb3VudGVyIiwiX2NyZWF0ZVN0b3JlIiwiZGlzcGF0Y2giLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJJTkNSRU1FTlQiLCJERUNSRU1FTlQiLCJuIiwidHlwZSIsInBheWxvYWQiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9yZWYiXSwic291cmNlUm9vdCI6IiJ9