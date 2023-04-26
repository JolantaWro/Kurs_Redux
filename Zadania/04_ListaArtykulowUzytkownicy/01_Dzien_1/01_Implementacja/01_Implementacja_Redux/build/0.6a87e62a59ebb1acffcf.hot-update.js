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
  var myState = {
    value: 0
  };
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3ef86f2631a1de0103ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YTg3ZTYyYTU5ZWJiMWFjZmZjZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0RDtBQUNOO0FBQ2M7QUFFcEUsSUFBTUssT0FBTyxHQUFHO0VBQ1pDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCw2QkFBZSxzQ0FBWTtFQUN2QixJQUFNRCxPQUFPLEdBQUc7SUFDWkMsS0FBSyxFQUFFO0VBQ1gsQ0FBQztFQUNIO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNFLElBQU1DLE9BQU8sR0FBR04sK0RBQVcsQ0FBQ0MsK0RBQWMsRUFBRUcsT0FBTyxDQUFDO0VBQ3BERSxPQUFPLENBQUNDLFNBQVMsQ0FBQztJQUFBLE9BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxrQkFBQUMsTUFBQSxDQUFrQk4sT0FBTyxDQUFDQyxLQUFLLEVBQUc7RUFBQSxFQUFDO0VBQ3RFQyxPQUFPLENBQUNLLFFBQVEsQ0FBQ1Isd0VBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM5QkcsT0FBTyxDQUFDSyxRQUFRLENBQUNULHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDOUJJLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDO0lBQUEsT0FBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE9BQU8sQ0FBQ00sUUFBUSxFQUFFLENBQUM7RUFBQSxFQUFDO0VBQ3hETixPQUFPLENBQUNLLFFBQVEsQ0FBQ1Qsd0VBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM5Qk0sT0FBTyxDQUFDQyxHQUFHLENBQUNMLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO0FBRTlCOzs7Ozs7OztVQzNCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDFfSW1wbGVtZW50YWNqYS8wMV9JbXBsZW1lbnRhY2phX1JlZHV4L2pzL2NvdW50ZXJBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBkb2RhaiBvZHBvd2llZG5pZSBpbXBvcnR5IChjcmVhdGVTdG9yZSwgYWtjamUsIHJlZHVjZXIpXHJcbmltcG9ydCBjdXN0b21TdG9yZSwge2NyZWF0ZVN0b3JlfSBmcm9tICcuL3JlZHV4L2N1c3RvbVN0b3JlJ1xyXG5pbXBvcnQgY291bnRlclJlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvY291bnRlclwiO1xyXG5pbXBvcnQge2RlY3JlbWVudCwgaW5jcmVtZW50fSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBteVN0YXRlID0ge1xyXG4gICAgdmFsdWU6IDBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbXlTdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZTogMFxyXG4gICAgfVxyXG4gIC8vIFR1dGFqIHphaW1wbGVtZW50dWogYXBsaWthY2rEmSBjb3VudGVyIHdnLiBvcGlzdSB6YWRhbmlhXHJcbiAgLy8gVyBrb25zb2xpIHBvd2lubm8gcG9qYXdpxIcgc2nEmSBvZHBvd2llZG5pbzpcclxuICAvL1xyXG4gIC8vIGZyb20gc3Vic2NyaWJlIDVcclxuICAvLyBmcm9tIHN1YnNjcmliZSAzXHJcbiAgLy8gMVxyXG4gICAgY29uc3QgbXlTdG9yZSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXJSZWR1Y2VyLCBteVN0YXRlKTtcclxuICAgIG15U3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKGBmcm9tIHN1YnNyaWJlICR7bXlTdGF0ZS52YWx1ZX1gKSlcclxuICAgIG15U3RvcmUuZGlzcGF0Y2goaW5jcmVtZW50KDUpKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICBteVN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhteVN0b3JlLmdldFN0YXRlKCkpKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICBjb25zb2xlLmxvZyhteVN0YXRlLnZhbHVlKVxyXG5cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZWY4NmYyNjMxYTFkZTAxMDNiYVwiKSJdLCJuYW1lcyI6WyJjdXN0b21TdG9yZSIsImNyZWF0ZVN0b3JlIiwiY291bnRlclJlZHVjZXIiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJteVN0YXRlIiwidmFsdWUiLCJteVN0b3JlIiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9