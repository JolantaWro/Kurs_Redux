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
/******/ 	__webpack_require__.h = () => ("6a87e62a59ebb1acffcf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NDkzYTQ0MjMwZTg2MDMxMzY5Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxXQUFXO0FBQzdCLElBQU1DLFNBQVMsR0FBRyxXQUFXOztBQUc3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLFdBQVcsRUFBSztFQUMvQixPQUFPO0lBQUNDLElBQUksRUFBRUosU0FBUztJQUFFRyxXQUFXLEVBQVhBO0VBQVcsQ0FBQztBQUN6QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUYsV0FBVyxFQUFLO0VBQy9CLE9BQU87SUFBRUMsSUFBSSxFQUFFSCxTQUFTO0lBQUVFLFdBQVcsRUFBWEE7RUFBVyxDQUFDO0FBQzFDLENBQUM7Ozs7Ozs7OztVQzNCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDFfSW1wbGVtZW50YWNqYS8wMV9JbXBsZW1lbnRhY2phX1JlZHV4L2pzL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdXRhaiB6YWltcGxlbWVudHVqIGR3aWUgYWtjamUgb3JheiBhY3Rpb24tY3JlYXRvcnNcclxuLy8gTmEga29uaWVjIG9ka29tZW50dWogb3N0YXRuacSFIGxpbmnEmSBhYnkgd3lla3Nwb3J0b3dhxIcgb2Rwb3dpZW5pZSB6bWllbm5lLlxyXG5cclxuY29uc3QgSU5DUkVNRU5UID0gJ0lOQ1JFTUVOVCc7XHJcbmNvbnN0IERFQ1JFTUVOVCA9ICdERUNSRU1FTlQnO1xyXG5cclxuXHJcbi8vIGNvbnN0IGluY3JlbWVudCA9ICh1cGRhdGVWYWx1ZSkgPT4gKHtcclxuLy8gICAgIHR5cGU6IElOQ1JFTUVOVCxcclxuLy8gICAgIHBheWxvYWQ6IHtcclxuLy8gICAgICAgICB2YWx1ZTogdXBkYXRlVmFsdWVcclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbmNvbnN0IGluY3JlbWVudCA9ICh1cGRhdGVWYWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHt0eXBlOiBJTkNSRU1FTlQsIHVwZGF0ZVZhbHVlfVxyXG59XHJcblxyXG4vLyBjb25zdCBkZWNyZW1lbnQgPSAodXBkYXRlVmFsdWUpID0+ICh7XHJcbi8vICAgICB0eXBlOiBERUNSRU1FTlQsXHJcbi8vICAgICBwYXlsb2FkOiB7XHJcbi8vICAgICAgICAgdmFsdWU6IHVwZGF0ZVZhbHVlXHJcbi8vICAgICB9XHJcbi8vIH0pO1xyXG5cclxuY29uc3QgZGVjcmVtZW50ID0gKHVwZGF0ZVZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBERUNSRU1FTlQsIHVwZGF0ZVZhbHVlfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIGluY3JlbWVudCwgZGVjcmVtZW50IH1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmE4N2U2MmE1OWViYjFhY2ZmY2ZcIikiXSwibmFtZXMiOlsiSU5DUkVNRU5UIiwiREVDUkVNRU5UIiwiaW5jcmVtZW50IiwidXBkYXRlVmFsdWUiLCJ0eXBlIiwiZGVjcmVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==