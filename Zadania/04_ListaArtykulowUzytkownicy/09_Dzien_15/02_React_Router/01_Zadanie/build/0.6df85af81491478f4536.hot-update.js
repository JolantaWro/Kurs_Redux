"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 83:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_PRODUCT": () => (/* binding */ ADD_PRODUCT),
/* harmony export */   "FILTER_PRODUCT": () => (/* binding */ FILTER_PRODUCT),
/* harmony export */   "REMOVE_PRODUCT": () => (/* binding */ REMOVE_PRODUCT),
/* harmony export */   "addProduct": () => (/* binding */ addProduct),
/* harmony export */   "filterProduct": () => (/* binding */ filterProduct),
/* harmony export */   "removeProduct": () => (/* binding */ removeProduct)
/* harmony export */ });
// export const ADD_PRODUCT = "ADD_PRODUCT";
// export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// należy dodać kreatory akcji i je eksportować

var ADD_PRODUCT = "ADD_PRODUCT";
var FILTER_PRODUCT = "FILTER_PRODUCT";
var REMOVE_PRODUCT = "REMOVE_PRODUCT";
var addProduct = function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};
var removeProduct = function removeProduct(product) {
  return {
    type: REMOVE_PRODUCT,
    payload: product
  };
};
var filterProduct = function filterProduct(product) {
  return {
    type: REMOVE_PRODUCT,
    payload: product
  };
};

/***/ }),

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
  return products.filter(function (element) {
    return element.price >= selector;
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("174b24d85110f2621579")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZGY4NWFmODE0OTE0NzhmNDUzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRU8sSUFBTUEsV0FBVyxHQUFHLGFBQWE7QUFDakMsSUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxJQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBRXZDLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJQyxPQUFPO0VBQUEsT0FBTTtJQUNwQ0MsSUFBSSxFQUFFTCxXQUFXO0lBQ2pCTSxPQUFPLEVBQUVGO0VBQ2IsQ0FBQztBQUFBLENBQUM7QUFFSyxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlILE9BQU87RUFBQSxPQUFNO0lBQ3ZDQyxJQUFJLEVBQUVILGNBQWM7SUFDcEJJLE9BQU8sRUFBRUY7RUFDYixDQUFDO0FBQUEsQ0FBQztBQUVLLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUosT0FBTztFQUFBLE9BQU07SUFDdkNDLElBQUksRUFBRUgsY0FBYztJQUNwQkksT0FBTyxFQUFFRjtFQUNiLENBQUM7QUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3RCRjtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUdsQyxJQUFNTSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHQyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxRQUFRO0FBQUE7QUFDaEQsSUFBTUMsZ0JBQWdCLEdBQUdKLHdEQUFjLENBQzFDQyxnQkFBZ0IsRUFDaEIsVUFBQUUsUUFBUTtFQUFBLE9BQUdBLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsSUFBSTtJQUFBLE9BQ2pDRCxHQUFHLEdBQUdFLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFBQSxDQUMzQixFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ1I7QUFFTSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJUCxRQUFRLEVBQUVRLFFBQVEsRUFBSztFQUN2RCxJQUFNQyxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDRixRQUFRLENBQUM7RUFFM0MsT0FBT1IsUUFBUSxDQUFDVyxNQUFNLENBQUMsVUFBQUMsT0FBTztJQUFBLE9BQUlBLE9BQU8sQ0FBQ04sS0FBSyxJQUFJRSxRQUFRO0VBQUEsRUFBQztBQUNoRSxDQUFDOzs7Ozs7OztVQ25CRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUID0gXCJBRERfUFJPRFVDVFwiO1xuLy8gZXhwb3J0IGNvbnN0IFJFTU9WRV9QUk9EVUNUID0gXCJSRU1PVkVfUFJPRFVDVFwiO1xuXG4vLyBuYWxlxbx5IGRvZGHEhyBrcmVhdG9yeSBha2NqaSBpIGplIGVrc3BvcnRvd2HEh1xuXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1QgPSBcIkFERF9QUk9EVUNUXCI7XG5leHBvcnQgY29uc3QgRklMVEVSX1BST0RVQ1QgPSBcIkZJTFRFUl9QUk9EVUNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BST0RVQ1QgPSBcIlJFTU9WRV9QUk9EVUNUXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9kdWN0ID0gKHByb2R1Y3QpID0+ICh7XG4gICAgdHlwZTogQUREX1BST0RVQ1QsXG4gICAgcGF5bG9hZDogcHJvZHVjdFxufSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVQcm9kdWN0ID0gKHByb2R1Y3QpID0+ICh7XG4gICAgdHlwZTogUkVNT1ZFX1BST0RVQ1QsXG4gICAgcGF5bG9hZDogcHJvZHVjdFxufSlcblxuZXhwb3J0IGNvbnN0IGZpbHRlclByb2R1Y3QgPSAocHJvZHVjdCkgPT4gKHtcbiAgICB0eXBlOiBSRU1PVkVfUFJPRFVDVCxcbiAgICBwYXlsb2FkOiBwcm9kdWN0XG59KSIsIi8vIE1pZWpzY2UgbmEgc2VsZWt0b3J5OlxuLy8gc2VsZWN0UHJvZHVjdHMgLSBkbyB3eWJpZXJhbmlhL2ZpbHRyb3dhbmlhIHByb2R1a3TDs3dcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxuLy8gcGFtacSZdGFqIGFieSBqZSB3eWVrc3BvcnRvd2HEh1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcblxuXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzXG5leHBvcnQgY29uc3Qgc3VtUHJpY2VTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHByb2R1Y3RzU2VsZWN0b3IsXG4gICAgcHJvZHVjdHM9PiBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxuICAgICAgICBhY2MgKyBOdW1iZXIoaXRlbS5wcmljZSlcbiAgICApLCAwKVxuKVxuXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVyZWRQcm9kdWN0cyA9IChwcm9kdWN0cywgc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0c1NlbGVjdGVkID0gcGFyc2VJbnQoc2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RzLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQucHJpY2UgPj0gc2VsZWN0b3IpXG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE3NGIyNGQ4NTExMGYyNjIxNTc5XCIpIl0sIm5hbWVzIjpbIkFERF9QUk9EVUNUIiwiRklMVEVSX1BST0RVQ1QiLCJSRU1PVkVfUFJPRFVDVCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwidHlwZSIsInBheWxvYWQiLCJyZW1vdmVQcm9kdWN0IiwiZmlsdGVyUHJvZHVjdCIsImNyZWF0ZVNlbGVjdG9yIiwicHJvZHVjdHNTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdHMiLCJzdW1QcmljZVNlbGVjdG9yIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsIk51bWJlciIsInByaWNlIiwiZ2V0RmlsdGVyZWRQcm9kdWN0cyIsInNlbGVjdG9yIiwicHJvZHVjdHNTZWxlY3RlZCIsInBhcnNlSW50IiwiZmlsdGVyIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=