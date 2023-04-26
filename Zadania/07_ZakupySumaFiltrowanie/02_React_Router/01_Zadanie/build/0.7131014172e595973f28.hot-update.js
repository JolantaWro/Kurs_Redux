"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPriceValue": () => (/* binding */ getPriceValue),
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector),
/* harmony export */   "sumPriceSelector": () => (/* binding */ sumPriceSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować

var productsSelector = function productsSelector(state) {
  return state.products;
};
var sumPriceSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(productsSelector, function (products) {
  return products.reduce(function (acc, item) {
    return acc + Number(item.price);
  }, 0);
});
var getPriceValue = function getPriceValue(state, value) {
  return state.products.filter(function (item) {
    return item.price >= value;
  });
};

// export const getPriceValue = createSelector(
//     productsSelector,
//     products => products.filter(item => item.price >= 10)
// )

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6e94bb8128098011e988")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MTMxMDE0MTcyZTU5NTk3M2YyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUdsQyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHQyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxRQUFRO0FBQUE7QUFDaEQsSUFBTUMsZ0JBQWdCLEdBQUdKLHdEQUFjLENBQzFDQyxnQkFBZ0IsRUFDaEIsVUFBQUUsUUFBUTtFQUFBLE9BQUdBLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsSUFBSTtJQUFBLE9BQ2pDRCxHQUFHLEdBQUdFLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFBQSxDQUMzQixFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ1I7QUFFTSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlSLEtBQUssRUFBRVMsS0FBSyxFQUFLO0VBQzNDLE9BQU9ULEtBQUssQ0FBQ0MsUUFBUSxDQUFDUyxNQUFNLENBQUMsVUFBQUwsSUFBSTtJQUFBLE9BQUlBLElBQUksQ0FBQ0UsS0FBSyxJQUFJRSxLQUFLO0VBQUEsRUFBQztBQUM3RCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3RCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1pZWpzY2UgbmEgc2VsZWt0b3J5OlxyXG4vLyBzZWxlY3RQcm9kdWN0cyAtIGRvIHd5YmllcmFuaWEvZmlsdHJvd2FuaWEgcHJvZHVrdMOzd1xyXG4vLyBzdW0gLSBkbyBvYmxpY3phbmlhIHN1bXlcclxuLy8gcGFtacSZdGFqIGFieSBqZSB3eWVrc3BvcnRvd2HEh1xyXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUucHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IHN1bVByaWNlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3RzU2VsZWN0b3IsXHJcbiAgICBwcm9kdWN0cz0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXHJcbiAgICAgICAgYWNjICsgTnVtYmVyKGl0ZW0ucHJpY2UpXHJcbiAgICApLCAwKVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJpY2VWYWx1ZSA9IChzdGF0ZSwgdmFsdWUpID0+IHtcclxuICAgIHJldHVybiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnByaWNlID49IHZhbHVlKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRQcmljZVZhbHVlID0gY3JlYXRlU2VsZWN0b3IoXHJcbi8vICAgICBwcm9kdWN0c1NlbGVjdG9yLFxyXG4vLyAgICAgcHJvZHVjdHMgPT4gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcmljZSA+PSAxMClcclxuLy8gKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZlOTRiYjgxMjgwOTgwMTFlOTg4XCIpIl0sIm5hbWVzIjpbImNyZWF0ZVNlbGVjdG9yIiwicHJvZHVjdHNTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdHMiLCJzdW1QcmljZVNlbGVjdG9yIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsIk51bWJlciIsInByaWNlIiwiZ2V0UHJpY2VWYWx1ZSIsInZhbHVlIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==