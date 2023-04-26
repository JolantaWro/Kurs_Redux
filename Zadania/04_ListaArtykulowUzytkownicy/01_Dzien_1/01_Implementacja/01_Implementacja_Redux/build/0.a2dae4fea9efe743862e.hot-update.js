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
  console.log(myState.value);
}

/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/**
 * Tutaj zaimplementuj reducer do aplikacji counter
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default counterReducer;
 */

var counterReducer = function counterReducer(state, action) {
  // switch (action.type) {
  //     case INCREMENT:
  //         return state + action.payload.value;
  //     case DECREMENT:
  //         return state - action.payload.value;
  //     default:
  //         return state;
  // }
  var tempState = state;
  if (action.type === "INCREMENT") {
    return tempState + action.payload.value;
  } else if (action.type === 'DECREMENT') {
    return tempState - action.payload.value;
  }
  return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a6cb8a3283452fb8d7ef")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMmRhZTRmZWE5ZWZlNzQzODYyZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0RDtBQUNOO0FBQ2M7QUFFcEUsSUFBTUssT0FBTyxHQUFHO0VBQ1pDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCw2QkFBZSxzQ0FBWTtFQUN6QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDRSxJQUFNQyxPQUFPLEdBQUdOLCtEQUFXLENBQUNDLCtEQUFjLEVBQUVHLE9BQU8sQ0FBQztFQUNwREUsT0FBTyxDQUFDQyxTQUFTLENBQUM7SUFBQSxPQUFNQyxPQUFPLENBQUNDLEdBQUcsa0JBQUFDLE1BQUEsQ0FBa0JOLE9BQU8sQ0FBQ0MsS0FBSyxFQUFHO0VBQUEsRUFBQztFQUN0RUMsT0FBTyxDQUFDSyxRQUFRLENBQUNSLHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDOUJHLE9BQU8sQ0FBQ0ssUUFBUSxDQUFDVCx3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlCSSxPQUFPLENBQUNDLFNBQVMsQ0FBQztJQUFBLE9BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLENBQUNNLFFBQVEsRUFBRSxDQUFDO0VBQUEsRUFBQztFQUN4RE4sT0FBTyxDQUFDSyxRQUFRLENBQUNULHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDOUJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPLENBQUNDLEtBQUssQ0FBQztBQUU5Qjs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFFL0QsSUFBTUosY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJYyxLQUFLLEVBQUVDLE1BQU0sRUFBSztFQUV0QztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsSUFBSUMsU0FBUyxHQUFHRixLQUFLO0VBQ3JCLElBQUlDLE1BQU0sQ0FBQ0UsSUFBSSxLQUFLLFdBQVcsRUFBRTtJQUM3QixPQUFPRCxTQUFTLEdBQUdELE1BQU0sQ0FBQ0csT0FBTyxDQUFDZCxLQUFLO0VBQzNDLENBQUMsTUFBTSxJQUFJVyxNQUFNLENBQUNFLElBQUksS0FBSyxXQUFXLEVBQUU7SUFDcEMsT0FBT0QsU0FBUyxHQUFHRCxNQUFNLENBQUNHLE9BQU8sQ0FBQ2QsS0FBSztFQUMzQztFQUNBLE9BQU9VLEtBQUs7QUFFaEIsQ0FBQztBQUNELGlFQUFlZCxjQUFjOzs7Ozs7OztVQzFCN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9jb3VudGVyQXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDFfSW1wbGVtZW50YWNqYS8wMV9JbXBsZW1lbnRhY2phX1JlZHV4L2pzL3JlZHV4L3JlZHVjZXJzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBkb2RhaiBvZHBvd2llZG5pZSBpbXBvcnR5IChjcmVhdGVTdG9yZSwgYWtjamUsIHJlZHVjZXIpXHJcbmltcG9ydCBjdXN0b21TdG9yZSwge2NyZWF0ZVN0b3JlfSBmcm9tICcuL3JlZHV4L2N1c3RvbVN0b3JlJ1xyXG5pbXBvcnQgY291bnRlclJlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvY291bnRlclwiO1xyXG5pbXBvcnQge2RlY3JlbWVudCwgaW5jcmVtZW50fSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBteVN0YXRlID0ge1xyXG4gICAgdmFsdWU6IDBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIC8vIFR1dGFqIHphaW1wbGVtZW50dWogYXBsaWthY2rEmSBjb3VudGVyIHdnLiBvcGlzdSB6YWRhbmlhXHJcbiAgLy8gVyBrb25zb2xpIHBvd2lubm8gcG9qYXdpxIcgc2nEmSBvZHBvd2llZG5pbzpcclxuICAvL1xyXG4gIC8vIGZyb20gc3Vic2NyaWJlIDVcclxuICAvLyBmcm9tIHN1YnNjcmliZSAzXHJcbiAgLy8gMVxyXG4gICAgY29uc3QgbXlTdG9yZSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXJSZWR1Y2VyLCBteVN0YXRlKTtcclxuICAgIG15U3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKGBmcm9tIHN1YnNyaWJlICR7bXlTdGF0ZS52YWx1ZX1gKSlcclxuICAgIG15U3RvcmUuZGlzcGF0Y2goaW5jcmVtZW50KDUpKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICBteVN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhteVN0b3JlLmdldFN0YXRlKCkpKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICBjb25zb2xlLmxvZyhteVN0YXRlLnZhbHVlKVxyXG5cclxufVxyXG4iLCIvKipcclxuICogVHV0YWogemFpbXBsZW1lbnR1aiByZWR1Y2VyIGRvIGFwbGlrYWNqaSBjb3VudGVyXHJcbiAqIFBhbWnEmXRhaiBhYnkgbmEga2/FhGN1IHd5ZWtzcG9ydG93YcSHIHphaW1wbGVtZW50b3dhbsSFIGZ1bmtjasSZOlxyXG4gKiBleHBvcnQgZGVmYXVsdCBjb3VudGVyUmVkdWNlcjtcclxuICovXHJcbmltcG9ydCB7REVDUkVNRU5ULCBJTkNSRU1FTlR9IGZyb20gXCIuLi9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBjb3VudGVyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgLy8gc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgLy8gICAgIGNhc2UgSU5DUkVNRU5UOlxyXG4gICAgLy8gICAgICAgICByZXR1cm4gc3RhdGUgKyBhY3Rpb24ucGF5bG9hZC52YWx1ZTtcclxuICAgIC8vICAgICBjYXNlIERFQ1JFTUVOVDpcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHN0YXRlIC0gYWN0aW9uLnBheWxvYWQudmFsdWU7XHJcbiAgICAvLyAgICAgZGVmYXVsdDpcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgLy8gfVxyXG4gICAgbGV0IHRlbXBTdGF0ZSA9IHN0YXRlXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiSU5DUkVNRU5UXCIpIHtcclxuICAgICAgICByZXR1cm4gdGVtcFN0YXRlICsgYWN0aW9uLnBheWxvYWQudmFsdWVcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdERUNSRU1FTlQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBTdGF0ZSAtIGFjdGlvbi5wYXlsb2FkLnZhbHVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyUmVkdWNlcjtcclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE2Y2I4YTMyODM0NTJmYjhkN2VmXCIpIl0sIm5hbWVzIjpbImN1c3RvbVN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb3VudGVyUmVkdWNlciIsImRlY3JlbWVudCIsImluY3JlbWVudCIsIm15U3RhdGUiLCJ2YWx1ZSIsIm15U3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIkRFQ1JFTUVOVCIsIklOQ1JFTUVOVCIsInN0YXRlIiwiYWN0aW9uIiwidGVtcFN0YXRlIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9