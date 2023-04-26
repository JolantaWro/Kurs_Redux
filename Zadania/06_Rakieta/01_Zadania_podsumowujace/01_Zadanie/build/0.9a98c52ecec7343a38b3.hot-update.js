"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.log('dispatching', action);
      console.log('current state', store.getState());
      var result = next(action);
      console.log('next state', store.getState());
      return result;
    };
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);

/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reducer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);




var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)((_reducer__WEBPACK_IMPORTED_MODULE_0___default()), (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"], _middlewares__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a1e9506fd565cf8d87f0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45YTk4YzUyZWNlYzczNDNhMzhiMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBR0MsS0FBSztFQUFBLE9BQUksVUFBQUMsSUFBSTtJQUFBLE9BQUksVUFBQUMsTUFBTSxFQUFJO01BQ3RDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVGLE1BQU0sQ0FBQztNQUNsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFSixLQUFLLENBQUNLLFFBQVEsRUFBRSxDQUFDO01BRTlDLElBQU1DLE1BQU0sR0FBR0wsSUFBSSxDQUFDQyxNQUFNLENBQUM7TUFFM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRUosS0FBSyxDQUFDSyxRQUFRLEVBQUUsQ0FBQztNQUUzQyxPQUFPQyxNQUFNO0lBQ2pCLENBQUM7RUFBQTtBQUFBO0FBRUQsaUVBQWVQLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUNYK0I7QUFDcEI7QUFFQTtBQUNHO0FBRW5DLElBQU1DLEtBQUssR0FBR08sa0RBQVcsQ0FBQ0csaURBQU8sRUFBRUYsc0RBQWUsQ0FBQ0MsbURBQUssRUFBRVYsb0RBQU0sQ0FBQyxDQUFDO0FBRWxFLGlFQUFlQyxLQUFLOzs7Ozs7OztVQ1JwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L21pZGRsZXdhcmVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9nZ2VyID0gc3RvcmUgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2Rpc3BhdGNoaW5nJywgYWN0aW9uKTtcclxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHN0YXRlJywgc3RvcmUuZ2V0U3RhdGUoKSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCduZXh0IHN0YXRlJywgc3RvcmUuZ2V0U3RhdGUoKSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi9taWRkbGV3YXJlc1wiO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmssIGxvZ2dlcikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImExZTk1MDZmZDU2NWNmOGQ4N2YwXCIpIl0sIm5hbWVzIjpbImxvZ2dlciIsInN0b3JlIiwibmV4dCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsInJlc3VsdCIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==