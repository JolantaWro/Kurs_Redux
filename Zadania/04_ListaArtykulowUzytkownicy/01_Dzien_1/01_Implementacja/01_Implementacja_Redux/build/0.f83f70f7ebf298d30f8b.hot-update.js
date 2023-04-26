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
  switch (action.type) {
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.INCREMENT:
      return {
        value: state.value + action
      };
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return {
        value: state.value - action
      };
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e17d2f0725e4eae14292")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mODNmNzBmN2ViZjI5OGQzMGY4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0RDtBQUNOO0FBQ2M7QUFFcEUsSUFBTUssT0FBTyxHQUFHO0VBQ1pDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCw2QkFBZSxzQ0FBWTtFQUN6QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDRSxJQUFNQyxPQUFPLEdBQUdOLCtEQUFXLENBQUNDLCtEQUFjLEVBQUVHLE9BQU8sQ0FBQztFQUNwREUsT0FBTyxDQUFDQyxTQUFTLENBQUM7SUFBQSxPQUFNQyxPQUFPLENBQUNDLEdBQUcsa0JBQUFDLE1BQUEsQ0FBa0JOLE9BQU8sQ0FBQ0MsS0FBSyxFQUFHO0VBQUEsRUFBQztFQUN0RUMsT0FBTyxDQUFDSyxRQUFRLENBQUNSLHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDOUJHLE9BQU8sQ0FBQ0ssUUFBUSxDQUFDVCx3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlCSSxPQUFPLENBQUNDLFNBQVMsQ0FBQztJQUFBLE9BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLENBQUNNLFFBQVEsRUFBRSxDQUFDO0VBQUEsRUFBQztFQUN4RE4sT0FBTyxDQUFDSyxRQUFRLENBQUNULHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDOUJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPLENBQUNDLEtBQUssQ0FBQztBQUU5Qjs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFFL0QsSUFBTUosY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJYyxLQUFLLEVBQUVDLE1BQU0sRUFBSztFQUV0QyxRQUFRQSxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLSCw4REFBUztNQUNWLE9BQU87UUFBQ1QsS0FBSyxFQUFFVSxLQUFLLENBQUNWLEtBQUssR0FBR1c7TUFBTSxDQUFDO0lBQ3hDLEtBQUtILDhEQUFTO01BQ1YsT0FBTztRQUFDUixLQUFLLEVBQUVVLEtBQUssQ0FBQ1YsS0FBSyxHQUFHVztNQUFNLENBQUM7SUFDeEM7TUFDSSxPQUFPRCxLQUFLO0VBQUM7QUFFekIsQ0FBQztBQUNELGlFQUFlZCxjQUFjOzs7Ozs7OztVQ2xCN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9jb3VudGVyQXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDFfSW1wbGVtZW50YWNqYS8wMV9JbXBsZW1lbnRhY2phX1JlZHV4L2pzL3JlZHV4L3JlZHVjZXJzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBkb2RhaiBvZHBvd2llZG5pZSBpbXBvcnR5IChjcmVhdGVTdG9yZSwgYWtjamUsIHJlZHVjZXIpXHJcbmltcG9ydCBjdXN0b21TdG9yZSwge2NyZWF0ZVN0b3JlfSBmcm9tICcuL3JlZHV4L2N1c3RvbVN0b3JlJ1xyXG5pbXBvcnQgY291bnRlclJlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvY291bnRlclwiO1xyXG5pbXBvcnQge2RlY3JlbWVudCwgaW5jcmVtZW50fSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBteVN0YXRlID0ge1xyXG4gICAgdmFsdWU6IDBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIC8vIFR1dGFqIHphaW1wbGVtZW50dWogYXBsaWthY2rEmSBjb3VudGVyIHdnLiBvcGlzdSB6YWRhbmlhXHJcbiAgLy8gVyBrb25zb2xpIHBvd2lubm8gcG9qYXdpxIcgc2nEmSBvZHBvd2llZG5pbzpcclxuICAvL1xyXG4gIC8vIGZyb20gc3Vic2NyaWJlIDVcclxuICAvLyBmcm9tIHN1YnNjcmliZSAzXHJcbiAgLy8gMVxyXG4gICAgY29uc3QgbXlTdG9yZSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXJSZWR1Y2VyLCBteVN0YXRlKTtcclxuICAgIG15U3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKGBmcm9tIHN1YnNyaWJlICR7bXlTdGF0ZS52YWx1ZX1gKSlcclxuICAgIG15U3RvcmUuZGlzcGF0Y2goaW5jcmVtZW50KDUpKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICBteVN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhteVN0b3JlLmdldFN0YXRlKCkpKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICBjb25zb2xlLmxvZyhteVN0YXRlLnZhbHVlKVxyXG5cclxufVxyXG4iLCIvKipcclxuICogVHV0YWogemFpbXBsZW1lbnR1aiByZWR1Y2VyIGRvIGFwbGlrYWNqaSBjb3VudGVyXHJcbiAqIFBhbWnEmXRhaiBhYnkgbmEga2/FhGN1IHd5ZWtzcG9ydG93YcSHIHphaW1wbGVtZW50b3dhbsSFIGZ1bmtjasSZOlxyXG4gKiBleHBvcnQgZGVmYXVsdCBjb3VudGVyUmVkdWNlcjtcclxuICovXHJcbmltcG9ydCB7REVDUkVNRU5ULCBJTkNSRU1FTlR9IGZyb20gXCIuLi9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBjb3VudGVyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSU5DUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4ge3ZhbHVlOiBzdGF0ZS52YWx1ZSArIGFjdGlvbn07XHJcbiAgICAgICAgY2FzZSBERUNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IHN0YXRlLnZhbHVlIC0gYWN0aW9ufTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJSZWR1Y2VyO1xyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTE3ZDJmMDcyNWU0ZWFlMTQyOTJcIikiXSwibmFtZXMiOlsiY3VzdG9tU3RvcmUiLCJjcmVhdGVTdG9yZSIsImNvdW50ZXJSZWR1Y2VyIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwibXlTdGF0ZSIsInZhbHVlIiwibXlTdG9yZSIsInN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiREVDUkVNRU5UIiwiSU5DUkVNRU5UIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==