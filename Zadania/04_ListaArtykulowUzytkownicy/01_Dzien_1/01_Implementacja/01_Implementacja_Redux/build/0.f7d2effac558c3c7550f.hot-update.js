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
  dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_1__.decrement)(2));
  console.log(getState());
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("657f600d110bc7a03494")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mN2QyZWZmYWM1NThjM2M3NTUwZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQztBQUNxQjtBQUNyQjtBQUcvQyw2QkFBZSxzQ0FBWTtFQUN6QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUUsSUFBQUksWUFBQSxHQUF3Q0osK0RBQVcsQ0FBQ0csK0RBQU8sQ0FBQztJQUFyREUsUUFBUSxHQUFBRCxZQUFBLENBQVJDLFFBQVE7SUFBRUMsU0FBUyxHQUFBRixZQUFBLENBQVRFLFNBQVM7SUFBRUMsUUFBUSxHQUFBSCxZQUFBLENBQVJHLFFBQVE7RUFDcEM7RUFDQSxJQUFNQyxXQUFXLEdBQUdGLFNBQVMsQ0FBQyxZQUFNO0lBQ2hDRyxPQUFPLENBQUNDLEdBQUcsbUJBQUFDLE1BQUEsQ0FBbUJKLFFBQVEsRUFBRSxFQUFHO0VBQy9DLENBQUMsQ0FBQztFQUVGRixRQUFRLENBQUNILHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEJHLFFBQVEsQ0FBQ0osd0VBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0Qk8sV0FBVyxFQUFFO0VBQ2JILFFBQVEsQ0FBQ0osd0VBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0QlEsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsRUFBRSxDQUFDO0FBRTNCOzs7Ozs7OztVQzFCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDFfSW1wbGVtZW50YWNqYS8wMV9JbXBsZW1lbnRhY2phX1JlZHV4L2pzL2NvdW50ZXJBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBkb2RhaiBvZHBvd2llZG5pZSBpbXBvcnR5IChjcmVhdGVTdG9yZSwgYWtjamUsIHJlZHVjZXIpXHJcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJy4vcmVkdXgvY3VzdG9tU3RvcmUnXHJcbmltcG9ydCB7ZGVjcmVtZW50LCBpbmNyZW1lbnR9IGZyb20gXCIuL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnNcIjtcclxuaW1wb3J0IGNvdW50ZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvY291bnRlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAvLyBUdXRhaiB6YWltcGxlbWVudHVqIGFwbGlrYWNqxJkgY291bnRlciB3Zy4gb3Bpc3UgemFkYW5pYVxyXG4gIC8vIFcga29uc29saSBwb3dpbm5vIHBvamF3acSHIHNpxJkgb2Rwb3dpZWRuaW86XHJcbiAgLy9cclxuICAvLyBmcm9tIHN1YnNjcmliZSA1XHJcbiAgLy8gZnJvbSBzdWJzY3JpYmUgM1xyXG4gIC8vIDFcclxuXHJcbiAgICBjb25zdCB7ZGlzcGF0Y2gsIHN1YnNjcmliZSwgZ2V0U3RhdGV9ID0gY3JlYXRlU3RvcmUoY291bnRlcik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgZnJvbSBzdWJzY3JpYmUgJHtnZXRTdGF0ZSgpfWApO1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBmcm9tIHN1YnNjcmliZSAke2dldFN0YXRlKCl9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaXNwYXRjaChpbmNyZW1lbnQoNSkpO1xyXG4gICAgZGlzcGF0Y2goZGVjcmVtZW50KDIpKTtcclxuICAgIHVuc3Vic2NyaWJlKClcclxuICAgIGRpc3BhdGNoKGRlY3JlbWVudCgyKSk7XHJcbiAgICBjb25zb2xlLmxvZyhnZXRTdGF0ZSgpKTtcclxuXHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjU3ZjYwMGQxMTBiYzdhMDM0OTRcIikiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJjb3VudGVyIiwiX2NyZWF0ZVN0b3JlIiwiZGlzcGF0Y2giLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsInVuc3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=