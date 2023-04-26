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
  return state.products;
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
/******/ 	__webpack_require__.h = () => ("87f6a84068c7dfcdb924")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wZTRlMThkYzcyMTVjYjliMGU5Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFJTyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHQyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxRQUFRO0FBQUE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJRixLQUFLLEVBQUs7RUFDbEMsSUFBSUcsUUFBUTtFQUNaLElBQUlILEtBQUssQ0FBQ0MsUUFBUSxFQUFFO0lBQ2hCLElBQUlELEtBQUssQ0FBQ0MsUUFBUSxDQUFDRyxLQUFLLElBQUksRUFBRSxFQUFFO01BQzVCRCxRQUFRLEdBQUcsZUFBZTtJQUM5QixDQUFDLE1BQU0sSUFBSUgsS0FBSyxDQUFDQyxRQUFRLENBQUNHLEtBQUssSUFBSSxFQUFFLEVBQUU7TUFDbkNELFFBQVEsR0FBRyxlQUFlO0lBQzlCO0VBQ0o7RUFDQSxPQUFPQSxRQUFRO0FBQ25CLENBQUM7Ozs7Ozs7O1VDOUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XHJcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XHJcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxyXG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXHJcblxyXG4vLyBleHBvcnQgY29uc3QgZmlsdGVyUHJvZHVjdHNQcmljZSA9IChwcm9kdWN0cywgc3RhdHVzKSA9PiB7XHJcbi8vICAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcmljZSA+PSBzdGF0dXMpO1xyXG4vLyB9O1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzXHJcbi8vIGV4cG9ydCBjb25zdCBzdW1QcmljZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbi8vICAgICBmaWx0ZXJQcm9kdWN0c1ByaWNlLFxyXG4vLyAgICAgcHJvZHVjdHM9PiBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxyXG4vLyAgICAgICAgIGFjYyArIGl0ZW0ucHJpY2VcclxuLy8gICAgICksIDApXHJcbi8vIClcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RQcmljZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgbGV0IHN1bVByaWNlO1xyXG4gICAgaWYgKHN0YXRlLnByb2R1Y3RzKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLnByb2R1Y3RzLnByaWNlID49IDEwKSB7XHJcbiAgICAgICAgICAgIHN1bVByaWNlID0gXCJ3aWVjZWogbml6IDEwXCJcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLnByb2R1Y3RzLnByaWNlID49IDUwKSB7XHJcbiAgICAgICAgICAgIHN1bVByaWNlID0gXCJ3aWVjZWogbml6IDUwXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VtUHJpY2VcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4N2Y2YTg0MDY4YzdkZmNkYjkyNFwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTZWxlY3RvciIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwic2VsZWN0UHJpY2UiLCJzdW1QcmljZSIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==