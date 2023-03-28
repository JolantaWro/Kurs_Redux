"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_customStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _redux_reducers_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
// Tu dodaj odpowiednie importy (createStore, akcje, reducer)



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // Tutaj zaimplementuj aplikację counter wg. opisu zadania
  // W konsoli powinno pojawić się odpowiednio:
  //
  // from subscribe 5
  // from subscribe 3
  // 1

  var _createStore = (0,_redux_customStore__WEBPACK_IMPORTED_MODULE_0__.createStore)(_redux_reducers_counter__WEBPACK_IMPORTED_MODULE_2__["default"]),
    dispatch = _createStore.dispatch,
    subscribe = _createStore.subscribe,
    getState = _createStore.getState;
  console.log("from subscribe ".concat(getState()));
  var unsubscribe = subscribe(function () {
    console.log("from subscribe ".concat(getState()));
  });
  dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_1__.increment)(5));
  dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_1__.decrement)(2));
  unsubscribe();
  console.log(getState());
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cf29d7c130ad82ec4201")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYmNkYTAwNjYzNDlmNjcwODg2Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQztBQUNxQjtBQUNyQjtBQUcvQyw2QkFBZSxzQ0FBWTtFQUN6QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUUsSUFBQUksWUFBQSxHQUF3Q0osK0RBQVcsQ0FBQ0csK0RBQU8sQ0FBQztJQUFyREUsUUFBUSxHQUFBRCxZQUFBLENBQVJDLFFBQVE7SUFBRUMsU0FBUyxHQUFBRixZQUFBLENBQVRFLFNBQVM7SUFBRUMsUUFBUSxHQUFBSCxZQUFBLENBQVJHLFFBQVE7RUFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxtQkFBQUMsTUFBQSxDQUFtQkgsUUFBUSxFQUFFLEVBQUc7RUFDM0MsSUFBTUksV0FBVyxHQUFHTCxTQUFTLENBQUMsWUFBTTtJQUNoQ0UsT0FBTyxDQUFDQyxHQUFHLG1CQUFBQyxNQUFBLENBQW1CSCxRQUFRLEVBQUUsRUFBRztFQUMvQyxDQUFDLENBQUM7RUFFRkYsUUFBUSxDQUFDSCx3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3RCRyxRQUFRLENBQUNKLHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEJVLFdBQVcsRUFBRTtFQUNiSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxFQUFFLENBQUM7QUFFM0I7Ozs7Ozs7O1VDekJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wMV9JbXBsZW1lbnRhY2phLzAxX0ltcGxlbWVudGFjamFfUmVkdXgvanMvY291bnRlckFwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFR1IGRvZGFqIG9kcG93aWVkbmllIGltcG9ydHkgKGNyZWF0ZVN0b3JlLCBha2NqZSwgcmVkdWNlcilcclxuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAnLi9yZWR1eC9jdXN0b21TdG9yZSdcclxuaW1wb3J0IHtkZWNyZW1lbnQsIGluY3JlbWVudH0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9uc1wiO1xyXG5pbXBvcnQgY291bnRlciBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9jb3VudGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIC8vIFR1dGFqIHphaW1wbGVtZW50dWogYXBsaWthY2rEmSBjb3VudGVyIHdnLiBvcGlzdSB6YWRhbmlhXHJcbiAgLy8gVyBrb25zb2xpIHBvd2lubm8gcG9qYXdpxIcgc2nEmSBvZHBvd2llZG5pbzpcclxuICAvL1xyXG4gIC8vIGZyb20gc3Vic2NyaWJlIDVcclxuICAvLyBmcm9tIHN1YnNjcmliZSAzXHJcbiAgLy8gMVxyXG5cclxuICAgIGNvbnN0IHtkaXNwYXRjaCwgc3Vic2NyaWJlLCBnZXRTdGF0ZX0gPSBjcmVhdGVTdG9yZShjb3VudGVyKTtcclxuICAgIGNvbnNvbGUubG9nKGBmcm9tIHN1YnNjcmliZSAke2dldFN0YXRlKCl9YCk7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGZyb20gc3Vic2NyaWJlICR7Z2V0U3RhdGUoKX1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRpc3BhdGNoKGluY3JlbWVudCg1KSk7XHJcbiAgICBkaXNwYXRjaChkZWNyZW1lbnQoMikpO1xyXG4gICAgdW5zdWJzY3JpYmUoKVxyXG4gICAgY29uc29sZS5sb2coZ2V0U3RhdGUoKSk7XHJcblxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNmMjlkN2MxMzBhZDgyZWM0MjAxXCIpIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwiY291bnRlciIsIl9jcmVhdGVTdG9yZSIsImRpc3BhdGNoIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwidW5zdWJzY3JpYmUiXSwic291cmNlUm9vdCI6IiJ9