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
    return acc + Number(item.price);
  }, 0);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("05b03abe912dbe14a87b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NTRmNGI0YTk3ZDRiYjk2NTRiMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lDO0FBR2xDLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUdDLEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLFFBQVE7QUFBQTtBQUNoRCxJQUFNQyxnQkFBZ0IsR0FBR0osd0RBQWMsQ0FDMUNDLGdCQUFnQixFQUNoQixVQUFBRSxRQUFRO0VBQUEsT0FBR0EsUUFBUSxDQUFDRSxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO0lBQUEsT0FDakNELEdBQUcsR0FBR0UsTUFBTSxDQUFDRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUFBLENBQzNCLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDUjs7Ozs7Ozs7VUNiRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1pZWpzY2UgbmEgc2VsZWt0b3J5OlxuLy8gc2VsZWN0UHJvZHVjdHMgLSBkbyB3eWJpZXJhbmlhL2ZpbHRyb3dhbmlhIHByb2R1a3TDs3dcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxuLy8gcGFtacSZdGFqIGFieSBqZSB3eWVrc3BvcnRvd2HEh1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcblxuXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzXG5leHBvcnQgY29uc3Qgc3VtUHJpY2VTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHByb2R1Y3RzU2VsZWN0b3IsXG4gICAgcHJvZHVjdHM9PiBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxuICAgICAgICBhY2MgKyBOdW1iZXIoaXRlbS5wcmljZSlcbiAgICApLCAwKVxuKTtcblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNWIwM2FiZTkxMmRiZTE0YTg3YlwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTZWxlY3RvciIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtUHJpY2VTZWxlY3RvciIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJOdW1iZXIiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=