"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sumPriceSelector": () => (/* binding */ sumPriceSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować


// export const filterProductsPrice = (products, status) => {
//     return products.filter(item => item.price >= status);
// };

var productsSelector = function productsSelector(state) {
  return state.products;
};
// const taxPercentSelector = state => state.shop.taxPercent
//
var sumPriceSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(filterProductsPrice, function (products) {
  return products.reduce(function (acc, item) {
    return acc + item.price;
  }, 0);
});
//
// const taxSelector = createSelector(
//     subtotalSelector,
//     taxPercentSelector,
//     (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// )

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d75b87718792ff86e9d6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMjEwNzFlMDBlYThlZGJlYTJmMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHQyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxRQUFRO0FBQUE7QUFDaEQ7QUFDQTtBQUNPLElBQU1DLGdCQUFnQixHQUFHSix3REFBYyxDQUMxQ0ssbUJBQW1CLEVBQ25CLFVBQUFGLFFBQVE7RUFBQSxPQUFHQSxRQUFRLENBQUNHLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVDLElBQUk7SUFBQSxPQUNqQ0QsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUs7RUFBQSxDQUNuQixFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ1I7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDMUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XHJcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XHJcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxyXG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXHJcblxyXG4vLyBleHBvcnQgY29uc3QgZmlsdGVyUHJvZHVjdHNQcmljZSA9IChwcm9kdWN0cywgc3RhdHVzKSA9PiB7XHJcbi8vICAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcmljZSA+PSBzdGF0dXMpO1xyXG4vLyB9O1xyXG5cclxuXHJcblxyXG5jb25zdCBwcm9kdWN0c1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUucHJvZHVjdHNcclxuLy8gY29uc3QgdGF4UGVyY2VudFNlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUuc2hvcC50YXhQZXJjZW50XHJcbi8vXHJcbmV4cG9ydCBjb25zdCBzdW1QcmljZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBmaWx0ZXJQcm9kdWN0c1ByaWNlLFxyXG4gICAgcHJvZHVjdHM9PiBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxyXG4gICAgICAgIGFjYyArIGl0ZW0ucHJpY2VcclxuICAgICksIDApXHJcbilcclxuLy9cclxuLy8gY29uc3QgdGF4U2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuLy8gICAgIHN1YnRvdGFsU2VsZWN0b3IsXHJcbi8vICAgICB0YXhQZXJjZW50U2VsZWN0b3IsXHJcbi8vICAgICAoc3VidG90YWwsIHRheFBlcmNlbnQpID0+IHN1YnRvdGFsICogKHRheFBlcmNlbnQgLyAxMDApXHJcbi8vICkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNzViODc3MTg3OTJmZjg2ZTlkNlwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTZWxlY3RvciIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtUHJpY2VTZWxlY3RvciIsImZpbHRlclByb2R1Y3RzUHJpY2UiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9