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
var rocketAsync = function rocketAsync() {
  return function (dispatch) {
    dispatch(startLaunching());
    setTimeout(function () {
      return dispatch(decrementCounter());
    }, 1000);
    setTimeout(function () {
      return dispatch(decrementCounter());
    }, 2000);
    setTimeout(function () {
      return dispatch(decrementCounter());
    }, 3000);
    setTimeout(function () {
      return dispatch(decrementCounter());
    }, 4000);
    setTimeout(function () {
      return dispatch(decrementCounter());
    }, 5000);
  };
};

// const rocketAsync = () => {
//     return async function(dispatch) {
//         dispatch(startLaunching());
//         setTimeout(() => dispatch(decrementCounter()), 1000);
//         setTimeout(() => dispatch(decrementCounter()), 2000);
//         setTimeout(() => dispatch(decrementCounter()), 3000);
//         setTimeout(() => dispatch(decrementCounter()), 4000);
//         setTimeout(() => dispatch(decrementCounter()), 5000);
//     }
// }



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("35168e131938443af6b5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZjhjMDA0ZDk1OWZhMzRiMzNkYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBRTVCLElBQU1DLFNBQVMsR0FBRyxXQUFXO0FBQzdCLElBQU1DLFFBQVEsR0FBRyxVQUFVO0FBQzNCLElBQU1DLFNBQVMsR0FBRyxXQUFXO0FBRTdCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQTtFQUFBLE9BQVU7SUFDMUJDLElBQUksRUFBRUo7RUFDVixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQTtFQUFBLE9BQVU7SUFDMUJELElBQUksRUFBRUg7RUFDVixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUE7RUFBQSxPQUFVO0lBQzVCRixJQUFJLEVBQUVGO0VBQ1YsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3RCLE9BQU8sVUFBQ0MsUUFBUSxFQUFLO0lBQ2pCQSxRQUFRLENBQUNMLGNBQWMsRUFBRSxDQUFDO0lBQzFCTSxVQUFVLENBQUM7TUFBQSxPQUFNRCxRQUFRLENBQUNGLGdCQUFnQixFQUFFLENBQUM7SUFBQSxHQUFFLElBQUksQ0FBQztJQUNwREcsVUFBVSxDQUFDO01BQUEsT0FBTUQsUUFBUSxDQUFDRixnQkFBZ0IsRUFBRSxDQUFDO0lBQUEsR0FBRSxJQUFJLENBQUM7SUFDcERHLFVBQVUsQ0FBQztNQUFBLE9BQU1ELFFBQVEsQ0FBQ0YsZ0JBQWdCLEVBQUUsQ0FBQztJQUFBLEdBQUUsSUFBSSxDQUFDO0lBQ3BERyxVQUFVLENBQUM7TUFBQSxPQUFNRCxRQUFRLENBQUNGLGdCQUFnQixFQUFFLENBQUM7SUFBQSxHQUFFLElBQUksQ0FBQztJQUNwREcsVUFBVSxDQUFDO01BQUEsT0FBTUQsUUFBUSxDQUFDRixnQkFBZ0IsRUFBRSxDQUFDO0lBQUEsR0FBRSxJQUFJLENBQUM7RUFDeEQsQ0FBQztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7VUN0Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlXCI7XHJcblxyXG5jb25zdCBMQVVOQ0hJTkcgPSBcIkxBVU5DSElOR1wiO1xyXG5jb25zdCBMQVVOQ0hFRCA9IFwiTEFVTkNIRURcIjtcclxuY29uc3QgREVDUkVNRU5UID0gXCJERUNSRU1FTlRcIjtcclxuXHJcbmNvbnN0IHN0YXJ0TGF1bmNoaW5nID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IExBVU5DSElOR1xyXG59KVxyXG5cclxuY29uc3QgbGF1bmNoZWRSb2NrZXQgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTEFVTkNIRURcclxufSlcclxuXHJcbmNvbnN0IGRlY3JlbWVudENvdW50ZXIgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogREVDUkVNRU5UXHJcbn0pXHJcblxyXG5jb25zdCByb2NrZXRBc3luYyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzdGFydExhdW5jaGluZygpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKGRlY3JlbWVudENvdW50ZXIoKSksIDEwMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50Q291bnRlcigpKSwgMjAwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnRDb3VudGVyKCkpLCAzMDAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKGRlY3JlbWVudENvdW50ZXIoKSksIDQwMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50Q291bnRlcigpKSwgNTAwMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IHJvY2tldEFzeW5jID0gKCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XHJcbi8vICAgICAgICAgZGlzcGF0Y2goc3RhcnRMYXVuY2hpbmcoKSk7XHJcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnRDb3VudGVyKCkpLCAxMDAwKTtcclxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKGRlY3JlbWVudENvdW50ZXIoKSksIDIwMDApO1xyXG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50Q291bnRlcigpKSwgMzAwMCk7XHJcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnRDb3VudGVyKCkpLCA0MDAwKTtcclxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKGRlY3JlbWVudENvdW50ZXIoKSksIDUwMDApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuZXhwb3J0IHsgTEFVTkNISU5HLCBMQVVOQ0hFRCwgREVDUkVNRU5ULCBzdGFydExhdW5jaGluZywgbGF1bmNoZWRSb2NrZXQsIGRlY3JlbWVudENvdW50ZXIsIHJvY2tldEFzeW5jIH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzNTE2OGUxMzE5Mzg0NDNhZjZiNVwiKSJdLCJuYW1lcyI6WyJzdG9yZSIsIkxBVU5DSElORyIsIkxBVU5DSEVEIiwiREVDUkVNRU5UIiwic3RhcnRMYXVuY2hpbmciLCJ0eXBlIiwibGF1bmNoZWRSb2NrZXQiLCJkZWNyZW1lbnRDb3VudGVyIiwicm9ja2V0QXN5bmMiLCJkaXNwYXRjaCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9