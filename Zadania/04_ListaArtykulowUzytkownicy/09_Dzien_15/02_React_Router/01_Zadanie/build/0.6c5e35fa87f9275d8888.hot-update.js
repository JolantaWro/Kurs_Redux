"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPriceProducts": () => (/* binding */ getPriceProducts),
/* harmony export */   "getSumProducts": () => (/* binding */ getSumProducts)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować

var getPriceProducts = function getPriceProducts(state, value) {
  // return state.filter(item => Number(item.price) !== 0 || Number(item.price <= value));
  return state.filter(function (item) {
    return Number(item.price) !== 0;
  });
};
var getSumProducts = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getPriceProducts, function (products) {
  return products.reduce(function (acc, prod) {
    return acc + prod.price;
  }, 0);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1eeec055f668b13029ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YzVlMzVmYTg3ZjkyNzVkODg4OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQzBDO0FBRW5DLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBRUMsS0FBSyxFQUFLO0VBQzlDO0VBQ0EsT0FBT0QsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQUMsSUFBSTtJQUFBLE9BQUlDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLENBQUMsS0FBSyxDQUFDO0VBQUEsRUFBQztBQUN6RCxDQUFDO0FBRU0sSUFBTUMsY0FBYyxHQUFHUix3REFBYyxDQUN4Q0MsZ0JBQWdCLEVBQ2hCLFVBQUFRLFFBQVE7RUFBQSxPQUFJQSxRQUFRLENBQUNDLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVDLElBQUk7SUFBQSxPQUNsQ0QsR0FBRyxHQUFHQyxJQUFJLENBQUNMLEtBQUs7RUFBQSxDQUNuQixFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ1I7Ozs7Ozs7O1VDaEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XG4vLyBzZWxlY3RQcm9kdWN0cyAtIGRvIHd5YmllcmFuaWEvZmlsdHJvd2FuaWEgcHJvZHVrdMOzd1xuLy8gc3VtIC0gZG8gb2JsaWN6YW5pYSBzdW15XG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcblxuZXhwb3J0IGNvbnN0IGdldFByaWNlUHJvZHVjdHMgPSAoc3RhdGUsIHZhbHVlKSA9PiB7XG4gICAgLy8gcmV0dXJuIHN0YXRlLmZpbHRlcihpdGVtID0+IE51bWJlcihpdGVtLnByaWNlKSAhPT0gMCB8fCBOdW1iZXIoaXRlbS5wcmljZSA8PSB2YWx1ZSkpO1xuICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoaXRlbSA9PiBOdW1iZXIoaXRlbS5wcmljZSkgIT09IDApXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3VtUHJvZHVjdHMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcmljZVByb2R1Y3RzLFxuICAgIHByb2R1Y3RzID0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBwcm9kKSA9PiAoXG4gICAgICAgIGFjYyArIHByb2QucHJpY2VcbiAgICApLCAwKVxuKTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWVlZWMwNTVmNjY4YjEzMDI5ZmZcIikiXSwibmFtZXMiOlsiY3JlYXRlU2VsZWN0b3IiLCJnZXRQcmljZVByb2R1Y3RzIiwic3RhdGUiLCJ2YWx1ZSIsImZpbHRlciIsIml0ZW0iLCJOdW1iZXIiLCJwcmljZSIsImdldFN1bVByb2R1Y3RzIiwicHJvZHVjdHMiLCJyZWR1Y2UiLCJhY2MiLCJwcm9kIl0sInNvdXJjZVJvb3QiOiIifQ==