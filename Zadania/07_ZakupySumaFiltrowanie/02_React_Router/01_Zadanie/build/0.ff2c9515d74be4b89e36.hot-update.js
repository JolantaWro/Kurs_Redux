"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectPrice": () => (/* binding */ selectPrice)
/* harmony export */ });
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować


// export const filterProductsPrice = (products, status) => {
//     return products.filter(item => item.price >= status);
// };

// const productsSelector = state => state.products
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
    }
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fdc4ce6ba49be3c721a5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZjJjOTUxNWQ3NGJlNGI4OWUzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Qzs7QUFFekM7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxLQUFLLEVBQUs7RUFDbEMsSUFBSUMsUUFBUTtFQUNaLElBQUlELEtBQUssQ0FBQ0UsUUFBUSxFQUFFO0lBQ2hCLElBQUlGLEtBQUssQ0FBQ0UsUUFBUSxDQUFDQyxLQUFLLElBQUksRUFBRSxFQUFFO01BQzVCRixRQUFRLEdBQUcsZUFBZTtJQUM5QjtFQUNKO0FBQ0osQ0FBQzs7Ozs7Ozs7VUMzQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNaWVqc2NlIG5hIHNlbGVrdG9yeTpcclxuLy8gc2VsZWN0UHJvZHVjdHMgLSBkbyB3eWJpZXJhbmlhL2ZpbHRyb3dhbmlhIHByb2R1a3TDs3dcclxuLy8gc3VtIC0gZG8gb2JsaWN6YW5pYSBzdW15XHJcbi8vIHBhbWnEmXRhaiBhYnkgamUgd3lla3Nwb3J0b3dhxIdcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBmaWx0ZXJQcm9kdWN0c1ByaWNlID0gKHByb2R1Y3RzLCBzdGF0dXMpID0+IHtcclxuLy8gICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnByaWNlID49IHN0YXR1cyk7XHJcbi8vIH07XHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IHByb2R1Y3RzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0c1xyXG4vLyBleHBvcnQgY29uc3Qgc3VtUHJpY2VTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4vLyAgICAgZmlsdGVyUHJvZHVjdHNQcmljZSxcclxuLy8gICAgIHByb2R1Y3RzPT4gcHJvZHVjdHMucmVkdWNlKChhY2MsIGl0ZW0pID0+IChcclxuLy8gICAgICAgICBhY2MgKyBpdGVtLnByaWNlXHJcbi8vICAgICApLCAwKVxyXG4vLyApXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0UHJpY2UgPSAoc3RhdGUpID0+IHtcclxuICAgIGxldCBzdW1QcmljZTtcclxuICAgIGlmIChzdGF0ZS5wcm9kdWN0cykge1xyXG4gICAgICAgIGlmIChzdGF0ZS5wcm9kdWN0cy5wcmljZSA+PSAxMCkge1xyXG4gICAgICAgICAgICBzdW1QcmljZSA9IFwid2llY2VqIG5peiAxMFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZkYzRjZTZiYTQ5YmUzYzcyMWE1XCIpIl0sIm5hbWVzIjpbImNyZWF0ZVNlbGVjdG9yIiwic2VsZWN0UHJpY2UiLCJzdGF0ZSIsInN1bVByaWNlIiwicHJvZHVjdHMiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=