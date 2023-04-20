self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_customStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _redux_reducers_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _redux_reducers_counter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redux_reducers_counter__WEBPACK_IMPORTED_MODULE_1__);
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
  var myStore = (0,_redux_customStore__WEBPACK_IMPORTED_MODULE_0__.createStore)((_redux_reducers_counter__WEBPACK_IMPORTED_MODULE_1___default()), myState);
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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\01_Dzien_1\\01_Implementacja\\01_Implementacja_Redux\\js\\redux\\reducers\\counter.js: Unexpected token (26:0)\n\n\u001b[0m \u001b[90m 24 |\u001b[39m     \u001b[36mreturn\u001b[39m state\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 25 |\u001b[39m }\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 26 |\u001b[39m }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m counterReducer\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 29 |\u001b[39m\u001b[0m\n    at instantiate (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3261:19)\n    at JSXParserMixin.unexpected (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3291:16)\n    at JSXParserMixin.parseExprAtom (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:11259:16)\n    at JSXParserMixin.parseExprAtom (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:6998:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:10870:23)\n    at JSXParserMixin.parseUpdate (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:10853:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:10829:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:10667:61)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a2dae4fea9efe743862e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wOWQ0NjVhMzIzYzgzMTMwNTM3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEQ7QUFDTjtBQUNjO0FBRXBFLElBQU1LLE9BQU8sR0FBRztFQUNaQyxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBRUQsNkJBQWUsc0NBQVk7RUFDekI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0UsSUFBTUMsT0FBTyxHQUFHTiwrREFBVyxDQUFDQyxnRUFBYyxFQUFFRyxPQUFPLENBQUM7RUFDcERFLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDO0lBQUEsT0FBTUMsT0FBTyxDQUFDQyxHQUFHLGtCQUFBQyxNQUFBLENBQWtCTixPQUFPLENBQUNDLEtBQUssRUFBRztFQUFBLEVBQUM7RUFDdEVDLE9BQU8sQ0FBQ0ssUUFBUSxDQUFDUix3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlCRyxPQUFPLENBQUNLLFFBQVEsQ0FBQ1Qsd0VBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM5QkksT0FBTyxDQUFDQyxTQUFTLENBQUM7SUFBQSxPQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDTSxRQUFRLEVBQUUsQ0FBQztFQUFBLEVBQUM7RUFDeEROLE9BQU8sQ0FBQ0ssUUFBUSxDQUFDVCx3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDQyxLQUFLLENBQUM7QUFFOUI7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDFfSW1wbGVtZW50YWNqYS8wMV9JbXBsZW1lbnRhY2phX1JlZHV4L2pzL2NvdW50ZXJBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBkb2RhaiBvZHBvd2llZG5pZSBpbXBvcnR5IChjcmVhdGVTdG9yZSwgYWtjamUsIHJlZHVjZXIpXHJcbmltcG9ydCBjdXN0b21TdG9yZSwge2NyZWF0ZVN0b3JlfSBmcm9tICcuL3JlZHV4L2N1c3RvbVN0b3JlJ1xyXG5pbXBvcnQgY291bnRlclJlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvY291bnRlclwiO1xyXG5pbXBvcnQge2RlY3JlbWVudCwgaW5jcmVtZW50fSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBteVN0YXRlID0ge1xyXG4gICAgdmFsdWU6IDBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIC8vIFR1dGFqIHphaW1wbGVtZW50dWogYXBsaWthY2rEmSBjb3VudGVyIHdnLiBvcGlzdSB6YWRhbmlhXHJcbiAgLy8gVyBrb25zb2xpIHBvd2lubm8gcG9qYXdpxIcgc2nEmSBvZHBvd2llZG5pbzpcclxuICAvL1xyXG4gIC8vIGZyb20gc3Vic2NyaWJlIDVcclxuICAvLyBmcm9tIHN1YnNjcmliZSAzXHJcbiAgLy8gMVxyXG4gICAgY29uc3QgbXlTdG9yZSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXJSZWR1Y2VyLCBteVN0YXRlKTtcclxuICAgIG15U3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKGBmcm9tIHN1YnNyaWJlICR7bXlTdGF0ZS52YWx1ZX1gKSlcclxuICAgIG15U3RvcmUuZGlzcGF0Y2goaW5jcmVtZW50KDUpKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICBteVN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhteVN0b3JlLmdldFN0YXRlKCkpKVxyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChkZWNyZW1lbnQoMikpXHJcbiAgICBjb25zb2xlLmxvZyhteVN0YXRlLnZhbHVlKVxyXG5cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMmRhZTRmZWE5ZWZlNzQzODYyZVwiKSJdLCJuYW1lcyI6WyJjdXN0b21TdG9yZSIsImNyZWF0ZVN0b3JlIiwiY291bnRlclJlZHVjZXIiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJteVN0YXRlIiwidmFsdWUiLCJteVN0b3JlIiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9