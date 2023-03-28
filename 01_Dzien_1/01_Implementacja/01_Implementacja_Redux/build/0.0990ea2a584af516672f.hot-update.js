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




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // Tutaj zaimplementuj aplikację counter wg. opisu zadania
  // W konsoli powinno pojawić się odpowiednio:
  //
  // from subscribe 5
  // from subscribe 3
  // 1

  var _createStore = (0,_redux_customStore__WEBPACK_IMPORTED_MODULE_0__.createStore)(_redux_reducers_counter__WEBPACK_IMPORTED_MODULE_1__["default"]),
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
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("38bffb396e3bdd64dc7c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wOTkwZWEyYTU4NGFmNTE2NjcyZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0RDtBQUNOO0FBQ2M7QUFDckI7QUFNL0MsNkJBQWUsc0NBQVk7RUFDekI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVFLElBQUFNLFlBQUEsR0FBd0NMLCtEQUFXLENBQUNJLCtEQUFPLENBQUM7SUFBckRFLFFBQVEsR0FBQUQsWUFBQSxDQUFSQyxRQUFRO0lBQUVDLFNBQVMsR0FBQUYsWUFBQSxDQUFURSxTQUFTO0lBQUVDLFFBQVEsR0FBQUgsWUFBQSxDQUFSRyxRQUFRO0VBQ3BDLElBQU1DLFdBQVcsR0FBR0YsU0FBUyxDQUFDLFlBQU07SUFDaENHLE9BQU8sQ0FBQ0MsR0FBRyxtQkFBQUMsTUFBQSxDQUFtQkosUUFBUSxFQUFFLEVBQUc7RUFDL0MsQ0FBQyxDQUFDO0VBRUZGLFFBQVEsQ0FBQ0gsd0VBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0QkcsUUFBUSxDQUFDSix3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3RCTyxXQUFXLEVBQUU7RUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsRUFBRSxDQUFDO0FBRTNCOzs7Ozs7OztVQzVCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDFfSW1wbGVtZW50YWNqYS8wMV9JbXBsZW1lbnRhY2phX1JlZHV4L2pzL2NvdW50ZXJBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBkb2RhaiBvZHBvd2llZG5pZSBpbXBvcnR5IChjcmVhdGVTdG9yZSwgYWtjamUsIHJlZHVjZXIpXHJcbmltcG9ydCBjdXN0b21TdG9yZSwge2NyZWF0ZVN0b3JlfSBmcm9tICcuL3JlZHV4L2N1c3RvbVN0b3JlJ1xyXG5pbXBvcnQgY291bnRlclJlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvY291bnRlclwiO1xyXG5pbXBvcnQge2RlY3JlbWVudCwgaW5jcmVtZW50fSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XHJcbmltcG9ydCBjb3VudGVyIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2NvdW50ZXJcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gVHV0YWogemFpbXBsZW1lbnR1aiBhcGxpa2FjasSZIGNvdW50ZXIgd2cuIG9waXN1IHphZGFuaWFcclxuICAvLyBXIGtvbnNvbGkgcG93aW5ubyBwb2phd2nEhyBzacSZIG9kcG93aWVkbmlvOlxyXG4gIC8vXHJcbiAgLy8gZnJvbSBzdWJzY3JpYmUgNVxyXG4gIC8vIGZyb20gc3Vic2NyaWJlIDNcclxuICAvLyAxXHJcblxyXG4gICAgY29uc3Qge2Rpc3BhdGNoLCBzdWJzY3JpYmUsIGdldFN0YXRlfSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXIpO1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBmcm9tIHN1YnNjcmliZSAke2dldFN0YXRlKCl9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaXNwYXRjaChpbmNyZW1lbnQoNSkpO1xyXG4gICAgZGlzcGF0Y2goZGVjcmVtZW50KDIpKTtcclxuICAgIHVuc3Vic2NyaWJlKClcclxuICAgIGNvbnNvbGUubG9nKGdldFN0YXRlKCkpO1xyXG5cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzOGJmZmIzOTZlM2JkZDY0ZGM3Y1wiKSJdLCJuYW1lcyI6WyJjdXN0b21TdG9yZSIsImNyZWF0ZVN0b3JlIiwiY291bnRlclJlZHVjZXIiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJjb3VudGVyIiwiX2NyZWF0ZVN0b3JlIiwiZGlzcGF0Y2giLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsInVuc3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=