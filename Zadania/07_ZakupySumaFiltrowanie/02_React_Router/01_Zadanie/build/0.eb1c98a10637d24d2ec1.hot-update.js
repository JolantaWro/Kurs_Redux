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
var filteredProducts = function filteredProducts(products, selector) {
  return products.filter(function (element) {
    return element.price <= parseInt(selector);
  });
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
/******/ 	__webpack_require__.h = () => ("55fba7bc2a5aaa419c9f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYjFjOThhMTA2MzdkMjRkMmVjMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUdsQyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHQyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxRQUFRO0FBQUE7QUFHaEQsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUQsUUFBUSxFQUFFRSxRQUFRLEVBQUs7RUFDcEQsT0FBT0YsUUFBUSxDQUFDRyxNQUFNLENBQUMsVUFBQUMsT0FBTztJQUFBLE9BQUlBLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJQyxRQUFRLENBQUNKLFFBQVEsQ0FBQztFQUFBLEVBQUM7QUFDMUUsQ0FBQztBQUVNLElBQU1LLGdCQUFnQixHQUFHVix3REFBYyxDQUMxQ0MsZ0JBQWdCLEVBQ2hCLFVBQUFFLFFBQVE7RUFBQSxPQUFHQSxRQUFRLENBQUNRLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVDLElBQUk7SUFBQSxPQUNqQ0QsR0FBRyxHQUFHRSxNQUFNLENBQUNELElBQUksQ0FBQ0wsS0FBSyxDQUFDO0VBQUEsQ0FDM0IsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUNSOzs7Ozs7OztVQ25CRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1pZWpzY2UgbmEgc2VsZWt0b3J5OlxuLy8gc2VsZWN0UHJvZHVjdHMgLSBkbyB3eWJpZXJhbmlhL2ZpbHRyb3dhbmlhIHByb2R1a3TDs3dcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxuLy8gcGFtacSZdGFqIGFieSBqZSB3eWVrc3BvcnRvd2HEh1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcblxuXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzXG5cblxuZXhwb3J0IGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSAocHJvZHVjdHMsIHNlbGVjdG9yKSA9PiB7XG4gICAgcmV0dXJuIHByb2R1Y3RzLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQucHJpY2UgPD0gcGFyc2VJbnQoc2VsZWN0b3IpKVxufTtcblxuZXhwb3J0IGNvbnN0IHN1bVByaWNlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBwcm9kdWN0c1NlbGVjdG9yLFxuICAgIHByb2R1Y3RzPT4gcHJvZHVjdHMucmVkdWNlKChhY2MsIGl0ZW0pID0+IChcbiAgICAgICAgYWNjICsgTnVtYmVyKGl0ZW0ucHJpY2UpXG4gICAgKSwgMClcbik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTVmYmE3YmMyYTVhYWE0MTljOWZcIikiXSwibmFtZXMiOlsiY3JlYXRlU2VsZWN0b3IiLCJwcm9kdWN0c1NlbGVjdG9yIiwic3RhdGUiLCJwcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdHMiLCJzZWxlY3RvciIsImZpbHRlciIsImVsZW1lbnQiLCJwcmljZSIsInBhcnNlSW50Iiwic3VtUHJpY2VTZWxlY3RvciIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9