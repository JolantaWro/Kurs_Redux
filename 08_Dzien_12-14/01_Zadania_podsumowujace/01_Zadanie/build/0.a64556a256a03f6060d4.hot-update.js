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
    dispatch(startLaunching());
    setTimeout(function () {
      // let data = {
      //     users: ['Jeff', 'William', 'Alice']
      // }
      // Dispatch received data action here
      dispatch(decrementCounter());
    }, 1000);
    dispatch(startLaunching());
  };
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("98f1941674f82667165a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNjQ1NTZhMjU2YTAzZjYwNjBkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBRTVCLElBQU1DLFNBQVMsR0FBRyxXQUFXO0FBQzdCLElBQU1DLFFBQVEsR0FBRyxVQUFVO0FBQzNCLElBQU1DLFNBQVMsR0FBRyxXQUFXO0FBRTdCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQTtFQUFBLE9BQVU7SUFDMUJDLElBQUksRUFBRUo7RUFDVixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQTtFQUFBLE9BQVU7SUFDMUJELElBQUksRUFBRUg7RUFDVixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUE7RUFBQSxPQUFVO0lBQzVCRixJQUFJLEVBQUVGO0VBQ1YsQ0FBQztBQUFBLENBQUM7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztFQUN0QixPQUFPLFVBQVNDLFFBQVEsRUFBRTtJQUN0QjtJQUNBQSxRQUFRLENBQUNMLGNBQWMsRUFBRSxDQUFDO0lBQzFCTSxVQUFVLENBQUMsWUFBVztNQUNsQjtNQUNBO01BQ0E7TUFDQTtNQUNBRCxRQUFRLENBQUNGLGdCQUFnQixFQUFFLENBQUM7SUFDaEMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNSRSxRQUFRLENBQUNMLGNBQWMsRUFBRSxDQUFDO0VBQzlCLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7VUMxQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlXCI7XHJcblxyXG5jb25zdCBMQVVOQ0hJTkcgPSBcIkxBVU5DSElOR1wiO1xyXG5jb25zdCBMQVVOQ0hFRCA9IFwiTEFVTkNIRURcIjtcclxuY29uc3QgREVDUkVNRU5UID0gXCJERUNSRU1FTlRcIjtcclxuXHJcbmNvbnN0IHN0YXJ0TGF1bmNoaW5nID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IExBVU5DSElOR1xyXG59KVxyXG5cclxuY29uc3QgbGF1bmNoZWRSb2NrZXQgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTEFVTkNIRURcclxufSlcclxuXHJcbmNvbnN0IGRlY3JlbWVudENvdW50ZXIgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogREVDUkVNRU5UXHJcbn0pXHJcblxyXG4vLyBjb25zdCByb2NrZXRBc3luYyA9ICgpID0+IHtcclxuLy8gICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuLy8gICAgICAgICBkaXNwYXRjaChzdGFydExhdW5jaGluZygpKTtcclxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKGRlY3JlbWVudENvdW50ZXIoKSksIDEwMDApO1xyXG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50Q291bnRlcigpKSwgMjAwMCk7XHJcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnRDb3VudGVyKCkpLCAzMDAwKTtcclxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKGRlY3JlbWVudENvdW50ZXIoKSksIDQwMDApO1xyXG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50Q291bnRlcigpKSwgNTAwMCk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IHJvY2tldEFzeW5jID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgLy8gRGlzcGF0Y2ggcmVxdWVzdCBhY3Rpb24gaGVyZVxyXG4gICAgICAgIGRpc3BhdGNoKHN0YXJ0TGF1bmNoaW5nKCkpXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIC8vICAgICB1c2VyczogWydKZWZmJywgJ1dpbGxpYW0nLCAnQWxpY2UnXVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIERpc3BhdGNoIHJlY2VpdmVkIGRhdGEgYWN0aW9uIGhlcmVcclxuICAgICAgICAgICAgZGlzcGF0Y2goZGVjcmVtZW50Q291bnRlcigpKVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIGRpc3BhdGNoKHN0YXJ0TGF1bmNoaW5nKCkpXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgTEFVTkNISU5HLCBMQVVOQ0hFRCwgREVDUkVNRU5ULCBzdGFydExhdW5jaGluZywgbGF1bmNoZWRSb2NrZXQsIGRlY3JlbWVudENvdW50ZXIsIHJvY2tldEFzeW5jIH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5OGYxOTQxNjc0ZjgyNjY3MTY1YVwiKSJdLCJuYW1lcyI6WyJzdG9yZSIsIkxBVU5DSElORyIsIkxBVU5DSEVEIiwiREVDUkVNRU5UIiwic3RhcnRMYXVuY2hpbmciLCJ0eXBlIiwibGF1bmNoZWRSb2NrZXQiLCJkZWNyZW1lbnRDb3VudGVyIiwicm9ja2V0QXN5bmMiLCJkaXNwYXRjaCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9