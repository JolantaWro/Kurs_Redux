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
  var unsubscribe = subscribe(function () {
    console.log("from subscribe ".concat(getState()));
  });
  dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_1__.increment)(5));
  dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_1__.decrement)(2));
  // unsubscribe()
  console.log(getState());
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2bcda0066349f6708867")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYmY3YzBiOWQxZDIyN2YyYzNiNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQztBQUNxQjtBQUNyQjtBQUcvQyw2QkFBZSxzQ0FBWTtFQUN6QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUUsSUFBQUksWUFBQSxHQUF3Q0osK0RBQVcsQ0FBQ0csK0RBQU8sQ0FBQztJQUFyREUsUUFBUSxHQUFBRCxZQUFBLENBQVJDLFFBQVE7SUFBRUMsU0FBUyxHQUFBRixZQUFBLENBQVRFLFNBQVM7SUFBRUMsUUFBUSxHQUFBSCxZQUFBLENBQVJHLFFBQVE7RUFDcEMsSUFBTUMsV0FBVyxHQUFHRixTQUFTLENBQUMsWUFBTTtJQUNoQ0csT0FBTyxDQUFDQyxHQUFHLG1CQUFBQyxNQUFBLENBQW1CSixRQUFRLEVBQUUsRUFBRztFQUMvQyxDQUFDLENBQUM7RUFFRkYsUUFBUSxDQUFDSCx3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3RCRyxRQUFRLENBQUNKLHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEI7RUFDQVEsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsRUFBRSxDQUFDO0FBRTNCOzs7Ozs7OztVQ3hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDFfSW1wbGVtZW50YWNqYS8wMV9JbXBsZW1lbnRhY2phX1JlZHV4L2pzL2NvdW50ZXJBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBkb2RhaiBvZHBvd2llZG5pZSBpbXBvcnR5IChjcmVhdGVTdG9yZSwgYWtjamUsIHJlZHVjZXIpXHJcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJy4vcmVkdXgvY3VzdG9tU3RvcmUnXHJcbmltcG9ydCB7ZGVjcmVtZW50LCBpbmNyZW1lbnR9IGZyb20gXCIuL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnNcIjtcclxuaW1wb3J0IGNvdW50ZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvY291bnRlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAvLyBUdXRhaiB6YWltcGxlbWVudHVqIGFwbGlrYWNqxJkgY291bnRlciB3Zy4gb3Bpc3UgemFkYW5pYVxyXG4gIC8vIFcga29uc29saSBwb3dpbm5vIHBvamF3acSHIHNpxJkgb2Rwb3dpZWRuaW86XHJcbiAgLy9cclxuICAvLyBmcm9tIHN1YnNjcmliZSA1XHJcbiAgLy8gZnJvbSBzdWJzY3JpYmUgM1xyXG4gIC8vIDFcclxuXHJcbiAgICBjb25zdCB7ZGlzcGF0Y2gsIHN1YnNjcmliZSwgZ2V0U3RhdGV9ID0gY3JlYXRlU3RvcmUoY291bnRlcik7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGZyb20gc3Vic2NyaWJlICR7Z2V0U3RhdGUoKX1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRpc3BhdGNoKGluY3JlbWVudCg1KSk7XHJcbiAgICBkaXNwYXRjaChkZWNyZW1lbnQoMikpO1xyXG4gICAgLy8gdW5zdWJzY3JpYmUoKVxyXG4gICAgY29uc29sZS5sb2coZ2V0U3RhdGUoKSk7XHJcblxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJiY2RhMDA2NjM0OWY2NzA4ODY3XCIpIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwiY291bnRlciIsIl9jcmVhdGVTdG9yZSIsImRpc3BhdGNoIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiLCJ1bnN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9