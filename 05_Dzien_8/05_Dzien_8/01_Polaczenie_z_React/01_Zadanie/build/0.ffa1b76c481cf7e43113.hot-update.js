"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 91:
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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);



var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_0__["default"], (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(_middlewares__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f86f6d54f13fda215b4b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZmExYjc2YzQ4MWNmN2U0MzExMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBR0MsS0FBSztFQUFBLE9BQUksVUFBQUMsSUFBSTtJQUFBLE9BQUksVUFBQUMsTUFBTSxFQUFJO01BQ3RDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVGLE1BQU0sQ0FBQztNQUNsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFSixLQUFLLENBQUNLLFFBQVEsRUFBRSxDQUFDO01BRTlDLElBQU1DLE1BQU0sR0FBR0wsSUFBSSxDQUFDQyxNQUFNLENBQUM7TUFFM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRUosS0FBSyxDQUFDSyxRQUFRLEVBQUUsQ0FBQztNQUUzQyxPQUFPQyxNQUFNO0lBQ2pCLENBQUM7RUFBQTtBQUFBO0FBRUQsaUVBQWVQLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FDWDhCO0FBQ2Q7QUFDRjtBQUduQyxJQUFNQyxLQUFLLEdBQUdRLGtEQUFXLENBQUNDLGlEQUFXLEVBQUVGLHNEQUFlLENBQUNSLG9EQUFNLENBQUMsQ0FBQztBQUUvRCxpRUFBZUMsS0FBSzs7Ozs7Ozs7VUNQcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAxX1BvbGFjemVuaWVfel9SZWFjdC8wMV9aYWRhbmllL2pzL3JlZHV4L21pZGRsZXdhcmVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA1X0R6aWVuXzgvMDFfUG9sYWN6ZW5pZV96X1JlYWN0LzAxX1phZGFuaWUvanMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2dnZXIgPSBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gICAgY29uc29sZS5sb2coJ2Rpc3BhdGNoaW5nJywgYWN0aW9uKTtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudCBzdGF0ZScsIHN0b3JlLmdldFN0YXRlKCkpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xuXG4gICAgY29uc29sZS5sb2coJ25leHQgc3RhdGUnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcblxuICAgIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyOyIsImltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4vbWlkZGxld2FyZXNcIjtcblxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUobG9nZ2VyKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjg2ZjZkNTRmMTNmZGEyMTViNGJcIikiXSwibmFtZXMiOlsibG9nZ2VyIiwic3RvcmUiLCJuZXh0IiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwicmVzdWx0IiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=