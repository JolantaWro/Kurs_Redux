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

var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";
var increment = function increment(updateValue) {
  return {
    type: INCREMENT,
    payload: updateValue
  };
};

// const increment = (updateValue) => {
//     return {type: INCREMENT, updateValue}
// }

var decrement = function decrement(updateValue) {
  return {
    type: DECREMENT,
    payload: updateValue
  };
};

// const decrement = (updateValue) => {
//     return { type: DECREMENT, updateValue}
// };



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4617703e375aff2c4d64")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYWExYWZlODI5OWUyNDBjNzQ0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxXQUFXO0FBQzdCLElBQU1DLFNBQVMsR0FBRyxXQUFXO0FBRzdCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJQyxXQUFXO0VBQUEsT0FBTTtJQUNoQ0MsSUFBSSxFQUFFSixTQUFTO0lBQ2ZLLE9BQU8sRUFBRUY7RUFDYixDQUFDO0FBQUEsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlILFdBQVc7RUFBQSxPQUFNO0lBQ2hDQyxJQUFJLEVBQUVILFNBQVM7SUFDZkksT0FBTyxFQUFFRjtFQUNiLENBQUM7QUFBQSxDQUFDOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7OztVQ3ZCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDFfSW1wbGVtZW50YWNqYS8wMV9JbXBsZW1lbnRhY2phX1JlZHV4L2pzL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdXRhaiB6YWltcGxlbWVudHVqIGR3aWUgYWtjamUgb3JheiBhY3Rpb24tY3JlYXRvcnNcclxuLy8gTmEga29uaWVjIG9ka29tZW50dWogb3N0YXRuacSFIGxpbmnEmSBhYnkgd3lla3Nwb3J0b3dhxIcgb2Rwb3dpZW5pZSB6bWllbm5lLlxyXG5cclxuY29uc3QgSU5DUkVNRU5UID0gXCJJTkNSRU1FTlRcIjtcclxuY29uc3QgREVDUkVNRU5UID0gXCJERUNSRU1FTlRcIjtcclxuXHJcblxyXG5jb25zdCBpbmNyZW1lbnQgPSAodXBkYXRlVmFsdWUpID0+ICh7XHJcbiAgICB0eXBlOiBJTkNSRU1FTlQsXHJcbiAgICBwYXlsb2FkOiB1cGRhdGVWYWx1ZVxyXG59KVxyXG5cclxuLy8gY29uc3QgaW5jcmVtZW50ID0gKHVwZGF0ZVZhbHVlKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge3R5cGU6IElOQ1JFTUVOVCwgdXBkYXRlVmFsdWV9XHJcbi8vIH1cclxuXHJcbmNvbnN0IGRlY3JlbWVudCA9ICh1cGRhdGVWYWx1ZSkgPT4gKHtcclxuICAgIHR5cGU6IERFQ1JFTUVOVCxcclxuICAgIHBheWxvYWQ6IHVwZGF0ZVZhbHVlXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgZGVjcmVtZW50ID0gKHVwZGF0ZVZhbHVlKSA9PiB7XHJcbi8vICAgICByZXR1cm4geyB0eXBlOiBERUNSRU1FTlQsIHVwZGF0ZVZhbHVlfVxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIGluY3JlbWVudCwgZGVjcmVtZW50IH1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDYxNzcwM2UzNzVhZmYyYzRkNjRcIikiXSwibmFtZXMiOlsiSU5DUkVNRU5UIiwiREVDUkVNRU5UIiwiaW5jcmVtZW50IiwidXBkYXRlVmFsdWUiLCJ0eXBlIiwicGF5bG9hZCIsImRlY3JlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=