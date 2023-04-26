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

// export const getPriceValue = (state, value) => {
//     return state.products.filter(item => item.price >= value);
// };

var getPriceValue = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(productsSelector, sumPriceSelector, function (products) {
  return products.filter(function (item) {
    return item.price >= 10;
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7131014172e595973f28")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NzQ5YmZkNmNjMmU0ODk5OTUyNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUdsQyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHQyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxRQUFRO0FBQUE7QUFDaEQsSUFBTUMsZ0JBQWdCLEdBQUdKLHdEQUFjLENBQzFDQyxnQkFBZ0IsRUFDaEIsVUFBQUUsUUFBUTtFQUFBLE9BQUdBLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsSUFBSTtJQUFBLE9BQ2pDRCxHQUFHLEdBQUdFLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFBQSxDQUMzQixFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ1I7O0FBRUQ7QUFDQTtBQUNBOztBQUVPLElBQU1DLGFBQWEsR0FBR1Ysd0RBQWMsQ0FDdkNDLGdCQUFnQixFQUNoQkcsZ0JBQWdCLEVBQ2hCLFVBQUFELFFBQVE7RUFBQSxPQUFJQSxRQUFRLENBQUNRLE1BQU0sQ0FBQyxVQUFBSixJQUFJO0lBQUEsT0FBSUEsSUFBSSxDQUFDRSxLQUFLLElBQUksRUFBRTtFQUFBLEVBQUM7QUFBQSxFQUN4RDs7Ozs7Ozs7VUN2QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNaWVqc2NlIG5hIHNlbGVrdG9yeTpcclxuLy8gc2VsZWN0UHJvZHVjdHMgLSBkbyB3eWJpZXJhbmlhL2ZpbHRyb3dhbmlhIHByb2R1a3TDs3dcclxuLy8gc3VtIC0gZG8gb2JsaWN6YW5pYSBzdW15XHJcbi8vIHBhbWnEmXRhaiBhYnkgamUgd3lla3Nwb3J0b3dhxIdcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBzdW1QcmljZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9kdWN0c1NlbGVjdG9yLFxyXG4gICAgcHJvZHVjdHM9PiBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxyXG4gICAgICAgIGFjYyArIE51bWJlcihpdGVtLnByaWNlKVxyXG4gICAgKSwgMClcclxuKVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFByaWNlVmFsdWUgPSAoc3RhdGUsIHZhbHVlKSA9PiB7XHJcbi8vICAgICByZXR1cm4gc3RhdGUucHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcmljZSA+PSB2YWx1ZSk7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJpY2VWYWx1ZSA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgcHJvZHVjdHNTZWxlY3RvcixcclxuICAgIHN1bVByaWNlU2VsZWN0b3IsXHJcbiAgICBwcm9kdWN0cyA9PiBwcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnByaWNlID49IDEwKVxyXG4pIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzEzMTAxNDE3MmU1OTU5NzNmMjhcIikiXSwibmFtZXMiOlsiY3JlYXRlU2VsZWN0b3IiLCJwcm9kdWN0c1NlbGVjdG9yIiwic3RhdGUiLCJwcm9kdWN0cyIsInN1bVByaWNlU2VsZWN0b3IiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwiTnVtYmVyIiwicHJpY2UiLCJnZXRQcmljZVZhbHVlIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==