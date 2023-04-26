"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filteredProducts": () => (/* binding */ filteredProducts),
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector),
/* harmony export */   "sumPriceSelector": () => (/* binding */ sumPriceSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować

var productsSelector = function productsSelector(state) {
  return state.products;
};
var filteredProducts = function filteredProducts(productsSelector, selector) {
  return productsSelector.filter(function (element) {
    return element.price <= parseInt(selector);
  });
};
var sumPriceSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(filteredProducts, function (products) {
  return products.reduce(function (acc, item) {
    return acc + Number(item.price);
  }, 0);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cb8b208073caa6c43aac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40M2M3ODE1YmE0ZTczN2RiMjBlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUdsQyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHQyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxRQUFRO0FBQUE7QUFHaEQsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUgsZ0JBQWdCLEVBQUVJLFFBQVEsRUFBSztFQUM1RCxPQUFPSixnQkFBZ0IsQ0FBQ0ssTUFBTSxDQUFDLFVBQUFDLE9BQU87SUFBQSxPQUFJQSxPQUFPLENBQUNDLEtBQUssSUFBSUMsUUFBUSxDQUFDSixRQUFRLENBQUM7RUFBQSxFQUFDO0FBQ2xGLENBQUM7QUFFTSxJQUFNSyxnQkFBZ0IsR0FBR1Ysd0RBQWMsQ0FDMUNJLGdCQUFnQixFQUNoQixVQUFBRCxRQUFRO0VBQUEsT0FBR0EsUUFBUSxDQUFDUSxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO0lBQUEsT0FDakNELEdBQUcsR0FBR0UsTUFBTSxDQUFDRCxJQUFJLENBQUNMLEtBQUssQ0FBQztFQUFBLENBQzNCLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDUjs7Ozs7Ozs7VUNuQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNaWVqc2NlIG5hIHNlbGVrdG9yeTpcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XG4vLyBzdW0gLSBkbyBvYmxpY3phbmlhIHN1bXlcbi8vIHBhbWnEmXRhaiBhYnkgamUgd3lla3Nwb3J0b3dhxIdcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0c1xuXG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gKHByb2R1Y3RzU2VsZWN0b3IsIHNlbGVjdG9yKSA9PiB7XG4gICAgcmV0dXJuIHByb2R1Y3RzU2VsZWN0b3IuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5wcmljZSA8PSBwYXJzZUludChzZWxlY3RvcikpXG59O1xuXG5leHBvcnQgY29uc3Qgc3VtUHJpY2VTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIGZpbHRlcmVkUHJvZHVjdHMsXG4gICAgcHJvZHVjdHM9PiBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxuICAgICAgICBhY2MgKyBOdW1iZXIoaXRlbS5wcmljZSlcbiAgICApLCAwKVxuKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjYjhiMjA4MDczY2FhNmM0M2FhY1wiKSJdLCJuYW1lcyI6WyJjcmVhdGVTZWxlY3RvciIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZmlsdGVyZWRQcm9kdWN0cyIsInNlbGVjdG9yIiwiZmlsdGVyIiwiZWxlbWVudCIsInByaWNlIiwicGFyc2VJbnQiLCJzdW1QcmljZVNlbGVjdG9yIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsIk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=