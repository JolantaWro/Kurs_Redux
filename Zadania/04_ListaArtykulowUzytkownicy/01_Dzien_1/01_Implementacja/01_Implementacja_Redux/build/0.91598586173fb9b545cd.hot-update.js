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



var myState = {
  value: 0
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // Tutaj zaimplementuj aplikację counter wg. opisu zadania
  // W konsoli powinno pojawić się odpowiednio:
  //
  // from subscribe 5
  // from subscribe 3
  // 1
  var myStore = (0,_redux_customStore__WEBPACK_IMPORTED_MODULE_0__.createStore)(_redux_reducers_counter__WEBPACK_IMPORTED_MODULE_1__["default"], myState);
  myStore.subscribe(function () {
    return console.log();
  });
  myStore.dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.increment)(5));
  myStore.dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.decrement)(2));
  myStore.subscribe(function () {
    return console.log(myStore.getState());
  });
  m;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("39abb3c60f3fe6fc4c90")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MTU5ODU4NjE3M2ZiOWI1NDVjZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0RDtBQUNOO0FBQ2M7QUFFcEUsSUFBTUssT0FBTyxHQUFHO0VBQ1pDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCw2QkFBZSxzQ0FBWTtFQUN6QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDRSxJQUFNQyxPQUFPLEdBQUdOLCtEQUFXLENBQUNDLCtEQUFjLEVBQUVHLE9BQU8sQ0FBQztFQUNwREUsT0FBTyxDQUFDQyxTQUFTLENBQUM7SUFBQSxPQUFNQyxPQUFPLENBQUNDLEdBQUcsRUFBRTtFQUFBLEVBQUM7RUFDdENILE9BQU8sQ0FBQ0ksUUFBUSxDQUFDUCx3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlCRyxPQUFPLENBQUNJLFFBQVEsQ0FBQ1Isd0VBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM5QkksT0FBTyxDQUFDQyxTQUFTLENBQUM7SUFBQSxPQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDSyxRQUFRLEVBQUUsQ0FBQztFQUFBLEVBQUM7RUFDeERDLENBQUM7QUFFTDs7Ozs7Ozs7VUN2QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9jb3VudGVyQXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHUgZG9kYWogb2Rwb3dpZWRuaWUgaW1wb3J0eSAoY3JlYXRlU3RvcmUsIGFrY2plLCByZWR1Y2VyKVxyXG5pbXBvcnQgY3VzdG9tU3RvcmUsIHtjcmVhdGVTdG9yZX0gZnJvbSAnLi9yZWR1eC9jdXN0b21TdG9yZSdcclxuaW1wb3J0IGNvdW50ZXJSZWR1Y2VyIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2NvdW50ZXJcIjtcclxuaW1wb3J0IHtkZWNyZW1lbnQsIGluY3JlbWVudH0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgbXlTdGF0ZSA9IHtcclxuICAgIHZhbHVlOiAwXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAvLyBUdXRhaiB6YWltcGxlbWVudHVqIGFwbGlrYWNqxJkgY291bnRlciB3Zy4gb3Bpc3UgemFkYW5pYVxyXG4gIC8vIFcga29uc29saSBwb3dpbm5vIHBvamF3acSHIHNpxJkgb2Rwb3dpZWRuaW86XHJcbiAgLy9cclxuICAvLyBmcm9tIHN1YnNjcmliZSA1XHJcbiAgLy8gZnJvbSBzdWJzY3JpYmUgM1xyXG4gIC8vIDFcclxuICAgIGNvbnN0IG15U3RvcmUgPSBjcmVhdGVTdG9yZShjb3VudGVyUmVkdWNlciwgbXlTdGF0ZSk7XHJcbiAgICBteVN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZygpKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChpbmNyZW1lbnQoNSkpXHJcbiAgICBteVN0b3JlLmRpc3BhdGNoKGRlY3JlbWVudCgyKSlcclxuICAgIG15U3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKG15U3RvcmUuZ2V0U3RhdGUoKSkpXHJcbiAgICBtXHJcblxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM5YWJiM2M2MGYzZmU2ZmM0YzkwXCIpIl0sIm5hbWVzIjpbImN1c3RvbVN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb3VudGVyUmVkdWNlciIsImRlY3JlbWVudCIsImluY3JlbWVudCIsIm15U3RhdGUiLCJ2YWx1ZSIsIm15U3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm0iXSwic291cmNlUm9vdCI6IiJ9