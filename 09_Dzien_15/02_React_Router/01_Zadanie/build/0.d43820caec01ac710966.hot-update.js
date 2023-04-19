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
  }, {
    products: products
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e56db5a3b98180bbae1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNDM4MjBjYWVjMDFhYzcxMDk2Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lDO0FBR2xDLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUdDLEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLFFBQVE7QUFBQTtBQUNoRCxJQUFNQyxnQkFBZ0IsR0FBR0osd0RBQWMsQ0FDMUNDLGdCQUFnQixFQUNoQixVQUFBRSxRQUFRO0VBQUEsT0FBR0EsUUFBUSxDQUFDRSxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO0lBQUEsT0FDakNELEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLO0VBQUEsQ0FDbkIsRUFBRTtJQUFDTCxRQUFRLEVBQVJBO0VBQVEsQ0FBQyxDQUFDO0FBQUEsRUFDakI7Ozs7Ozs7O1VDYkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNaWVqc2NlIG5hIHNlbGVrdG9yeTpcclxuLy8gc2VsZWN0UHJvZHVjdHMgLSBkbyB3eWJpZXJhbmlhL2ZpbHRyb3dhbmlhIHByb2R1a3TDs3dcclxuLy8gc3VtIC0gZG8gb2JsaWN6YW5pYSBzdW15XHJcbi8vIHBhbWnEmXRhaiBhYnkgamUgd3lla3Nwb3J0b3dhxIdcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBzdW1QcmljZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9kdWN0c1NlbGVjdG9yLFxyXG4gICAgcHJvZHVjdHM9PiBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxyXG4gICAgICAgIGFjYyArIGl0ZW0ucHJpY2VcclxuICAgICksIHtwcm9kdWN0c30pXHJcbilcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWU1NmRiNWEzYjk4MTgwYmJhZTFcIikiXSwibmFtZXMiOlsiY3JlYXRlU2VsZWN0b3IiLCJwcm9kdWN0c1NlbGVjdG9yIiwic3RhdGUiLCJwcm9kdWN0cyIsInN1bVByaWNlU2VsZWN0b3IiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9