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
  // console.log(`from subscribe ${getState()}`);
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
/******/ 	__webpack_require__.h = () => ("f7d2effac558c3c7550f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZjI5ZDdjMTMwYWQ4MmVjNDIwMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQztBQUNxQjtBQUNyQjtBQUcvQyw2QkFBZSxzQ0FBWTtFQUN6QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUUsSUFBQUksWUFBQSxHQUF3Q0osK0RBQVcsQ0FBQ0csK0RBQU8sQ0FBQztJQUFyREUsUUFBUSxHQUFBRCxZQUFBLENBQVJDLFFBQVE7SUFBRUMsU0FBUyxHQUFBRixZQUFBLENBQVRFLFNBQVM7SUFBRUMsUUFBUSxHQUFBSCxZQUFBLENBQVJHLFFBQVE7RUFDcEM7RUFDQSxJQUFNQyxXQUFXLEdBQUdGLFNBQVMsQ0FBQyxZQUFNO0lBQ2hDRyxPQUFPLENBQUNDLEdBQUcsbUJBQUFDLE1BQUEsQ0FBbUJKLFFBQVEsRUFBRSxFQUFHO0VBQy9DLENBQUMsQ0FBQztFQUVGRixRQUFRLENBQUNILHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEJHLFFBQVEsQ0FBQ0osd0VBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0Qk8sV0FBVyxFQUFFO0VBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLEVBQUUsQ0FBQztBQUUzQjs7Ozs7Ozs7VUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9jb3VudGVyQXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHUgZG9kYWogb2Rwb3dpZWRuaWUgaW1wb3J0eSAoY3JlYXRlU3RvcmUsIGFrY2plLCByZWR1Y2VyKVxyXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICcuL3JlZHV4L2N1c3RvbVN0b3JlJ1xyXG5pbXBvcnQge2RlY3JlbWVudCwgaW5jcmVtZW50fSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XHJcbmltcG9ydCBjb3VudGVyIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2NvdW50ZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gVHV0YWogemFpbXBsZW1lbnR1aiBhcGxpa2FjasSZIGNvdW50ZXIgd2cuIG9waXN1IHphZGFuaWFcclxuICAvLyBXIGtvbnNvbGkgcG93aW5ubyBwb2phd2nEhyBzacSZIG9kcG93aWVkbmlvOlxyXG4gIC8vXHJcbiAgLy8gZnJvbSBzdWJzY3JpYmUgNVxyXG4gIC8vIGZyb20gc3Vic2NyaWJlIDNcclxuICAvLyAxXHJcblxyXG4gICAgY29uc3Qge2Rpc3BhdGNoLCBzdWJzY3JpYmUsIGdldFN0YXRlfSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYGZyb20gc3Vic2NyaWJlICR7Z2V0U3RhdGUoKX1gKTtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZnJvbSBzdWJzY3JpYmUgJHtnZXRTdGF0ZSgpfWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZGlzcGF0Y2goaW5jcmVtZW50KDUpKTtcclxuICAgIGRpc3BhdGNoKGRlY3JlbWVudCgyKSk7XHJcbiAgICB1bnN1YnNjcmliZSgpXHJcbiAgICBjb25zb2xlLmxvZyhnZXRTdGF0ZSgpKTtcclxuXHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjdkMmVmZmFjNTU4YzNjNzU1MGZcIikiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJjb3VudGVyIiwiX2NyZWF0ZVN0b3JlIiwiZGlzcGF0Y2giLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsInVuc3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=