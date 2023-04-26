"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
// export default combineReducers({
//   counter,
//   products zad 2
// });



var myState = 0;
var counter = function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : myState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.INCREMENT:
      return state + action.payload;
    case _actions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counter
}));

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_0__["default"]);
console.log(store.getState());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e7a96bee28de98527b35")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZmFkY2UzNmZjYWJiMzIxNWVhYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQztBQUNUO0FBRXRDLElBQU1HLE9BQU8sR0FBRyxDQUFDO0FBQ2pCLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQThCO0VBQUEsSUFBMUJDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNILE9BQU87RUFBQSxJQUFFTSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDbEMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS1QsK0NBQVM7TUFDVixPQUFPSSxLQUFLLEdBQUdJLE1BQU0sQ0FBQ0UsT0FBTztJQUNqQyxLQUFLWCwrQ0FBUztNQUNWLE9BQU9LLEtBQUssR0FBR0ksTUFBTSxDQUFDRSxPQUFPO0lBQ2pDO01BQ0ksT0FBT04sS0FBSztFQUFDO0FBR3pCLENBQUM7QUFFRCxpRUFBZUgsc0RBQWUsQ0FBQztFQUMzQkUsT0FBTyxFQUFQQTtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZCa0M7QUFDSDtBQUdqQyxJQUFNVSxLQUFLLEdBQUdGLGtEQUFXLENBQUNDLGlEQUFPLENBQUM7QUFDbENFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNHLFFBQVEsRUFBRSxDQUFDO0FBRTdCLGlFQUFlSCxLQUFLOzs7Ozs7OztVQ1BwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4vLyAgIGNvdW50ZXIsXHJcbi8vICAgcHJvZHVjdHMgemFkIDJcclxuLy8gfSk7XHJcblxyXG5pbXBvcnQge0RFQ1JFTUVOVCwgSU5DUkVNRU5UfSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IG15U3RhdGUgPSAwO1xyXG5jb25zdCBjb3VudGVyID0gKHN0YXRlPW15U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSU5DUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBjYXNlIERFQ1JFTUVOVDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlIC0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNvdW50ZXJcclxufSkiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcbmNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTdhOTZiZWUyOGRlOTg1MjdiMzVcIikiXSwibmFtZXMiOlsiREVDUkVNRU5UIiwiSU5DUkVNRU5UIiwiY29tYmluZVJlZHVjZXJzIiwibXlTdGF0ZSIsImNvdW50ZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9