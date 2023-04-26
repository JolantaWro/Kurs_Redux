"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DECREMENT": () => (/* binding */ DECREMENT),
/* harmony export */   "LAUNCHED": () => (/* binding */ LAUNCHED),
/* harmony export */   "LAUNCHING": () => (/* binding */ LAUNCHING),
/* harmony export */   "decrementCounter": () => (/* binding */ decrementCounter),
/* harmony export */   "launchedRocket": () => (/* binding */ launchedRocket),
/* harmony export */   "rocketAsync": () => (/* binding */ rocketAsync),
/* harmony export */   "startLaunching": () => (/* binding */ startLaunching)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);

var LAUNCHING = "LAUNCHING";
var LAUNCHED = "LAUNCHED";
var DECREMENT = "DECREMENT";
var startLaunching = function startLaunching() {
  return {
    type: LAUNCHING
  };
};
var launchedRocket = function launchedRocket() {
  return {
    type: LAUNCHED
  };
};
var decrementCounter = function decrementCounter() {
  return {
    type: DECREMENT
  };
};

// const rocketAsync = () => {
//     return (dispatch) => {
//         dispatch(startLaunching());
//         setTimeout(() => dispatch(decrementCounter()), 1000);
//         setTimeout(() => dispatch(decrementCounter()), 2000);
//         setTimeout(() => dispatch(decrementCounter()), 3000);
//         setTimeout(() => dispatch(decrementCounter()), 4000);
//         setTimeout(() => dispatch(decrementCounter()), 5000);
//     }
// }

var rocketAsync = function rocketAsync() {
  return function (dispatch) {
    // Dispatch request action here
    dispatch(decrementCounter());
    setTimeout(function () {
      dispatch(startLaunching());
    }, 5000);
  };
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8788b61657f100b5ea7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYjYzZDExZTVlZjM3MzQ3ZTIxYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBRTVCLElBQU1DLFNBQVMsR0FBRyxXQUFXO0FBQzdCLElBQU1DLFFBQVEsR0FBRyxVQUFVO0FBQzNCLElBQU1DLFNBQVMsR0FBRyxXQUFXO0FBRTdCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQTtFQUFBLE9BQVU7SUFDMUJDLElBQUksRUFBRUo7RUFDVixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQTtFQUFBLE9BQVU7SUFDMUJELElBQUksRUFBRUg7RUFDVixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUE7RUFBQSxPQUFVO0lBQzVCRixJQUFJLEVBQUVGO0VBQ1YsQ0FBQztBQUFBLENBQUM7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztFQUN0QixPQUFPLFVBQVNDLFFBQVEsRUFBRTtJQUN0QjtJQUNBQSxRQUFRLENBQUNGLGdCQUFnQixFQUFFLENBQUM7SUFDNUJHLFVBQVUsQ0FBQyxZQUFXO01BQ2xCRCxRQUFRLENBQUNMLGNBQWMsRUFBRSxDQUFDO0lBQzlCLENBQUMsRUFBRSxJQUFJLENBQUM7RUFFWixDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7O1VDdENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xyXG5cclxuY29uc3QgTEFVTkNISU5HID0gXCJMQVVOQ0hJTkdcIjtcclxuY29uc3QgTEFVTkNIRUQgPSBcIkxBVU5DSEVEXCI7XHJcbmNvbnN0IERFQ1JFTUVOVCA9IFwiREVDUkVNRU5UXCI7XHJcblxyXG5jb25zdCBzdGFydExhdW5jaGluZyA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMQVVOQ0hJTkdcclxufSlcclxuXHJcbmNvbnN0IGxhdW5jaGVkUm9ja2V0ID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IExBVU5DSEVEXHJcbn0pXHJcblxyXG5jb25zdCBkZWNyZW1lbnRDb3VudGVyID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IERFQ1JFTUVOVFxyXG59KVxyXG5cclxuLy8gY29uc3Qgcm9ja2V0QXN5bmMgPSAoKSA9PiB7XHJcbi8vICAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbi8vICAgICAgICAgZGlzcGF0Y2goc3RhcnRMYXVuY2hpbmcoKSk7XHJcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnRDb3VudGVyKCkpLCAxMDAwKTtcclxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKGRlY3JlbWVudENvdW50ZXIoKSksIDIwMDApO1xyXG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50Q291bnRlcigpKSwgMzAwMCk7XHJcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnRDb3VudGVyKCkpLCA0MDAwKTtcclxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKGRlY3JlbWVudENvdW50ZXIoKSksIDUwMDApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCByb2NrZXRBc3luYyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG4gICAgICAgIC8vIERpc3BhdGNoIHJlcXVlc3QgYWN0aW9uIGhlcmVcclxuICAgICAgICBkaXNwYXRjaChkZWNyZW1lbnRDb3VudGVyKCkpXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc3RhcnRMYXVuY2hpbmcoKSlcclxuICAgICAgICB9LCA1MDAwKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgTEFVTkNISU5HLCBMQVVOQ0hFRCwgREVDUkVNRU5ULCBzdGFydExhdW5jaGluZywgbGF1bmNoZWRSb2NrZXQsIGRlY3JlbWVudENvdW50ZXIsIHJvY2tldEFzeW5jIH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhODc4OGI2MTY1N2YxMDBiNWVhN1wiKSJdLCJuYW1lcyI6WyJzdG9yZSIsIkxBVU5DSElORyIsIkxBVU5DSEVEIiwiREVDUkVNRU5UIiwic3RhcnRMYXVuY2hpbmciLCJ0eXBlIiwibGF1bmNoZWRSb2NrZXQiLCJkZWNyZW1lbnRDb3VudGVyIiwicm9ja2V0QXN5bmMiLCJkaXNwYXRjaCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9