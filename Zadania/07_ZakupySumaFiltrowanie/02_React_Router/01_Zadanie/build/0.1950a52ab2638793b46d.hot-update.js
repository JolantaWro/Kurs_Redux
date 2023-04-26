"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector),
/* harmony export */   "selectPrice": () => (/* binding */ selectPrice)
/* harmony export */ });
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować


// export const filterProductsPrice = (products, status) => {
//     return products.filter(item => item.price >= status);
// };

var productsSelector = function productsSelector(state) {
  return state.products.length > 0;
};
// export const sumPriceSelector = createSelector(
//     filterProductsPrice,
//     products=> products.reduce((acc, item) => (
//         acc + item.price
//     ), 0)
// )

var selectPrice = function selectPrice(state) {
  var sumPrice;
  if (state.products) {
    if (state.products.price >= 10) {
      sumPrice = "wiecej niz 10";
    } else if (state.products.price >= 50) {
      sumPrice = "wiecej niz 50";
    }
  }
  return sumPrice;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0e4e18dc7215cb9b0e97")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xOTUwYTUyYWIyNjM4NzkzYjQ2ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFJTyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHQyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDO0FBQUE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJSCxLQUFLLEVBQUs7RUFDbEMsSUFBSUksUUFBUTtFQUNaLElBQUlKLEtBQUssQ0FBQ0MsUUFBUSxFQUFFO0lBQ2hCLElBQUlELEtBQUssQ0FBQ0MsUUFBUSxDQUFDSSxLQUFLLElBQUksRUFBRSxFQUFFO01BQzVCRCxRQUFRLEdBQUcsZUFBZTtJQUM5QixDQUFDLE1BQU0sSUFBSUosS0FBSyxDQUFDQyxRQUFRLENBQUNJLEtBQUssSUFBSSxFQUFFLEVBQUU7TUFDbkNELFFBQVEsR0FBRyxlQUFlO0lBQzlCO0VBQ0o7RUFDQSxPQUFPQSxRQUFRO0FBQ25CLENBQUM7Ozs7Ozs7O1VDOUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XHJcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XHJcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxyXG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXHJcblxyXG4vLyBleHBvcnQgY29uc3QgZmlsdGVyUHJvZHVjdHNQcmljZSA9IChwcm9kdWN0cywgc3RhdHVzKSA9PiB7XHJcbi8vICAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcmljZSA+PSBzdGF0dXMpO1xyXG4vLyB9O1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzLmxlbmd0aCA+IDBcclxuLy8gZXhwb3J0IGNvbnN0IHN1bVByaWNlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuLy8gICAgIGZpbHRlclByb2R1Y3RzUHJpY2UsXHJcbi8vICAgICBwcm9kdWN0cz0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXHJcbi8vICAgICAgICAgYWNjICsgaXRlbS5wcmljZVxyXG4vLyAgICAgKSwgMClcclxuLy8gKVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFByaWNlID0gKHN0YXRlKSA9PiB7XHJcbiAgICBsZXQgc3VtUHJpY2U7XHJcbiAgICBpZiAoc3RhdGUucHJvZHVjdHMpIHtcclxuICAgICAgICBpZiAoc3RhdGUucHJvZHVjdHMucHJpY2UgPj0gMTApIHtcclxuICAgICAgICAgICAgc3VtUHJpY2UgPSBcIndpZWNlaiBuaXogMTBcIlxyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUucHJvZHVjdHMucHJpY2UgPj0gNTApIHtcclxuICAgICAgICAgICAgc3VtUHJpY2UgPSBcIndpZWNlaiBuaXogNTBcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdW1QcmljZVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBlNGUxOGRjNzIxNWNiOWIwZTk3XCIpIl0sIm5hbWVzIjpbImNyZWF0ZVNlbGVjdG9yIiwicHJvZHVjdHNTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdHMiLCJsZW5ndGgiLCJzZWxlY3RQcmljZSIsInN1bVByaWNlIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9