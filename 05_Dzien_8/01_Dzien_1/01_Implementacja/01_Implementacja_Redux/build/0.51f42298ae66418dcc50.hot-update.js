"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DECREMENT": () => (/* binding */ DECREMENT),
/* harmony export */   "INCREMENT": () => (/* binding */ INCREMENT),
/* harmony export */   "decrement": () => (/* binding */ decrement),
/* harmony export */   "increment": () => (/* binding */ increment)
/* harmony export */ });
// Tutaj zaimplementuj dwie akcje oraz action-creators
// Na koniec odkomentuj ostatnią linię aby wyeksportować odpowienie zmienne.

var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';

// const increment = (updateValue) => ({
//     type: INCREMENT,
//     payload: {
//         value: updateValue
//     }
// })

var increment = function increment(updateValue) {
  return {
    type: INCREMENT,
    updateValue: updateValue
  };
};

// const decrement = (updateValue) => ({
//     type: DECREMENT,
//     payload: {
//         value: updateValue
//     }
// });

var decrement = function decrement(updateValue) {
  return {
    type: DECREMENT,
    updateValue: updateValue
  };
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7493a44230e860313697")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MWY0MjI5OGFlNjY0MThkY2M1MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxXQUFXO0FBQzdCLElBQU1DLFNBQVMsR0FBRyxXQUFXOztBQUc3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLFdBQVcsRUFBSztFQUMvQixPQUFPO0lBQUNDLElBQUksRUFBRUosU0FBUztJQUFFRyxXQUFXLEVBQVhBO0VBQVcsQ0FBQztBQUV6QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUYsV0FBVztFQUFBLE9BQU07SUFDaENDLElBQUksRUFBRUgsU0FBUztJQUFFRSxXQUFXLEVBQVhBO0VBQ3JCLENBQUM7QUFBQSxDQUFDOzs7Ozs7Ozs7VUM1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHV0YWogemFpbXBsZW1lbnR1aiBkd2llIGFrY2plIG9yYXogYWN0aW9uLWNyZWF0b3JzXHJcbi8vIE5hIGtvbmllYyBvZGtvbWVudHVqIG9zdGF0bmnEhSBsaW5pxJkgYWJ5IHd5ZWtzcG9ydG93YcSHIG9kcG93aWVuaWUgem1pZW5uZS5cclxuXHJcbmNvbnN0IElOQ1JFTUVOVCA9ICdJTkNSRU1FTlQnO1xyXG5jb25zdCBERUNSRU1FTlQgPSAnREVDUkVNRU5UJztcclxuXHJcblxyXG4vLyBjb25zdCBpbmNyZW1lbnQgPSAodXBkYXRlVmFsdWUpID0+ICh7XHJcbi8vICAgICB0eXBlOiBJTkNSRU1FTlQsXHJcbi8vICAgICBwYXlsb2FkOiB7XHJcbi8vICAgICAgICAgdmFsdWU6IHVwZGF0ZVZhbHVlXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG5jb25zdCBpbmNyZW1lbnQgPSAodXBkYXRlVmFsdWUpID0+IHtcclxuICAgIHJldHVybiB7dHlwZTogSU5DUkVNRU5ULCB1cGRhdGVWYWx1ZX1cclxuXHJcbn1cclxuXHJcbi8vIGNvbnN0IGRlY3JlbWVudCA9ICh1cGRhdGVWYWx1ZSkgPT4gKHtcclxuLy8gICAgIHR5cGU6IERFQ1JFTUVOVCxcclxuLy8gICAgIHBheWxvYWQ6IHtcclxuLy8gICAgICAgICB2YWx1ZTogdXBkYXRlVmFsdWVcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcblxyXG5jb25zdCBkZWNyZW1lbnQgPSAodXBkYXRlVmFsdWUpID0+ICh7XHJcbiAgICB0eXBlOiBERUNSRU1FTlQsIHVwZGF0ZVZhbHVlXHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIGluY3JlbWVudCwgZGVjcmVtZW50IH1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzQ5M2E0NDIzMGU4NjAzMTM2OTdcIikiXSwibmFtZXMiOlsiSU5DUkVNRU5UIiwiREVDUkVNRU5UIiwiaW5jcmVtZW50IiwidXBkYXRlVmFsdWUiLCJ0eXBlIiwiZGVjcmVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==