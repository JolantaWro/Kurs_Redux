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
    return console.log("from subsribe ".concat(myState.value));
  });
  myStore.dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.increment)(5));
  myStore.dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.decrement)(2));
  myStore.subscribe(function () {
    return console.log(myStore.getState());
  });
  myStore.dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.decrement)(2));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8afb899483320f30b32e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41M2IxYjJjOThkOThkNTI4Mjc0OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0RDtBQUNOO0FBQ2M7QUFFcEUsSUFBTUssT0FBTyxHQUFHO0VBQ1pDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCw2QkFBZSxzQ0FBWTtFQUN6QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDRSxJQUFNQyxPQUFPLEdBQUdOLCtEQUFXLENBQUNDLCtEQUFjLEVBQUVHLE9BQU8sQ0FBQztFQUNwREUsT0FBTyxDQUFDQyxTQUFTLENBQUM7SUFBQSxPQUFNQyxPQUFPLENBQUNDLEdBQUcsa0JBQUFDLE1BQUEsQ0FBa0JOLE9BQU8sQ0FBQ0MsS0FBSyxFQUFHO0VBQUEsRUFBQztFQUN0RUMsT0FBTyxDQUFDSyxRQUFRLENBQUNSLHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDOUJHLE9BQU8sQ0FBQ0ssUUFBUSxDQUFDVCx3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlCSSxPQUFPLENBQUNDLFNBQVMsQ0FBQztJQUFBLE9BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLENBQUNNLFFBQVEsRUFBRSxDQUFDO0VBQUEsRUFBQztFQUN4RE4sT0FBTyxDQUFDSyxRQUFRLENBQUNULHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFbEM7Ozs7Ozs7O1VDdkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wMV9JbXBsZW1lbnRhY2phLzAxX0ltcGxlbWVudGFjamFfUmVkdXgvanMvY291bnRlckFwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFR1IGRvZGFqIG9kcG93aWVkbmllIGltcG9ydHkgKGNyZWF0ZVN0b3JlLCBha2NqZSwgcmVkdWNlcilcclxuaW1wb3J0IGN1c3RvbVN0b3JlLCB7Y3JlYXRlU3RvcmV9IGZyb20gJy4vcmVkdXgvY3VzdG9tU3RvcmUnXHJcbmltcG9ydCBjb3VudGVyUmVkdWNlciBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9jb3VudGVyXCI7XHJcbmltcG9ydCB7ZGVjcmVtZW50LCBpbmNyZW1lbnR9IGZyb20gXCIuL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IG15U3RhdGUgPSB7XHJcbiAgICB2YWx1ZTogMFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gVHV0YWogemFpbXBsZW1lbnR1aiBhcGxpa2FjasSZIGNvdW50ZXIgd2cuIG9waXN1IHphZGFuaWFcclxuICAvLyBXIGtvbnNvbGkgcG93aW5ubyBwb2phd2nEhyBzacSZIG9kcG93aWVkbmlvOlxyXG4gIC8vXHJcbiAgLy8gZnJvbSBzdWJzY3JpYmUgNVxyXG4gIC8vIGZyb20gc3Vic2NyaWJlIDNcclxuICAvLyAxXHJcbiAgICBjb25zdCBteVN0b3JlID0gY3JlYXRlU3RvcmUoY291bnRlclJlZHVjZXIsIG15U3RhdGUpO1xyXG4gICAgbXlTdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coYGZyb20gc3Vic3JpYmUgJHtteVN0YXRlLnZhbHVlfWApKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChpbmNyZW1lbnQoNSkpXHJcbiAgICBteVN0b3JlLmRpc3BhdGNoKGRlY3JlbWVudCgyKSlcclxuICAgIG15U3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKG15U3RvcmUuZ2V0U3RhdGUoKSkpXHJcbiAgICBteVN0b3JlLmRpc3BhdGNoKGRlY3JlbWVudCgyKSlcclxuXHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGFmYjg5OTQ4MzMyMGYzMGIzMmVcIikiXSwibmFtZXMiOlsiY3VzdG9tU3RvcmUiLCJjcmVhdGVTdG9yZSIsImNvdW50ZXJSZWR1Y2VyIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwibXlTdGF0ZSIsInZhbHVlIiwibXlTdG9yZSIsInN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJkaXNwYXRjaCIsImdldFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==