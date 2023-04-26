"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    return acc + item.price;
  }, products);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d43820caec01ac710966")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zOGJjOGY3ZWJhMTUwOWI3ZjhkNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lDO0FBR2xDLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUdDLEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLFFBQVE7QUFBQTtBQUNoRCxJQUFNQyxnQkFBZ0IsR0FBR0osd0RBQWMsQ0FDMUNDLGdCQUFnQixFQUNoQixVQUFBRSxRQUFRO0VBQUEsT0FBR0EsUUFBUSxDQUFDRSxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO0lBQUEsT0FDakNELEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLO0VBQUEsQ0FDbkIsRUFBRUwsUUFBUSxDQUFDO0FBQUEsRUFDZjs7Ozs7Ozs7VUNiRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1pZWpzY2UgbmEgc2VsZWt0b3J5OlxyXG4vLyBzZWxlY3RQcm9kdWN0cyAtIGRvIHd5YmllcmFuaWEvZmlsdHJvd2FuaWEgcHJvZHVrdMOzd1xyXG4vLyBzdW0gLSBkbyBvYmxpY3phbmlhIHN1bXlcclxuLy8gcGFtacSZdGFqIGFieSBqZSB3eWVrc3BvcnRvd2HEh1xyXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUucHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IHN1bVByaWNlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3RzU2VsZWN0b3IsXHJcbiAgICBwcm9kdWN0cz0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXHJcbiAgICAgICAgYWNjICsgaXRlbS5wcmljZVxyXG4gICAgKSwgcHJvZHVjdHMpXHJcbilcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDQzODIwY2FlYzAxYWM3MTA5NjZcIikiXSwibmFtZXMiOlsiY3JlYXRlU2VsZWN0b3IiLCJwcm9kdWN0c1NlbGVjdG9yIiwic3RhdGUiLCJwcm9kdWN0cyIsInN1bVByaWNlU2VsZWN0b3IiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9