"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFilteredProducts": () => (/* binding */ getFilteredProducts),
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
var getFilteredProducts = function getFilteredProducts(products, selector) {
  var productsSelected = parseInt(selector);
  return products.filter(function (products) {
    return first.toLowerCase().includes(contactsSearch) || last.toLowerCase().includes(contactsSearch);
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d5f63497a9026466bb87")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNjEyN2FlNWI2YzU4YjhjOWFiYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUdsQyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHQyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxRQUFRO0FBQUE7QUFDaEQsSUFBTUMsZ0JBQWdCLEdBQUdKLHdEQUFjLENBQzFDQyxnQkFBZ0IsRUFDaEIsVUFBQUUsUUFBUTtFQUFBLE9BQUdBLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsSUFBSTtJQUFBLE9BQ2pDRCxHQUFHLEdBQUdFLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFBQSxDQUMzQixFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ1I7QUFFTSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJUCxRQUFRLEVBQUVRLFFBQVEsRUFBSztFQUN2RCxJQUFNQyxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDRixRQUFRLENBQUM7RUFFM0MsT0FBT1IsUUFBUSxDQUFDVyxNQUFNLENBQUMsVUFBQ1gsUUFBUSxFQUFLO0lBRWpDLE9BQU9ZLEtBQUssQ0FBQ0MsV0FBVyxFQUFFLENBQUNDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLElBQUlDLElBQUksQ0FBQ0gsV0FBVyxFQUFFLENBQUNDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDO0VBQ3RHLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7O1VDdEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XG4vLyBzZWxlY3RQcm9kdWN0cyAtIGRvIHd5YmllcmFuaWEvZmlsdHJvd2FuaWEgcHJvZHVrdMOzd1xuLy8gc3VtIC0gZG8gb2JsaWN6YW5pYSBzdW15XG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0c1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUucHJvZHVjdHNcbmV4cG9ydCBjb25zdCBzdW1QcmljZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgcHJvZHVjdHNTZWxlY3RvcixcbiAgICBwcm9kdWN0cz0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXG4gICAgICAgIGFjYyArIE51bWJlcihpdGVtLnByaWNlKVxuICAgICksIDApXG4pXG5cbmV4cG9ydCBjb25zdCBnZXRGaWx0ZXJlZFByb2R1Y3RzID0gKHByb2R1Y3RzLCBzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RzU2VsZWN0ZWQgPSBwYXJzZUludChzZWxlY3Rvcik7XG5cbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0cykgPT4ge1xuXG4gICAgICAgIHJldHVybiBmaXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvbnRhY3RzU2VhcmNoKSB8fCBsYXN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY29udGFjdHNTZWFyY2gpO1xuICAgIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNWY2MzQ5N2E5MDI2NDY2YmI4N1wiKSJdLCJuYW1lcyI6WyJjcmVhdGVTZWxlY3RvciIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtUHJpY2VTZWxlY3RvciIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJOdW1iZXIiLCJwcmljZSIsImdldEZpbHRlcmVkUHJvZHVjdHMiLCJzZWxlY3RvciIsInByb2R1Y3RzU2VsZWN0ZWQiLCJwYXJzZUludCIsImZpbHRlciIsImZpcnN0IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNvbnRhY3RzU2VhcmNoIiwibGFzdCJdLCJzb3VyY2VSb290IjoiIn0=