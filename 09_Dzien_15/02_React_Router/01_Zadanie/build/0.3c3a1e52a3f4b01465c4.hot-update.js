"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector),
/* harmony export */   "sumPriceSelector": () => (/* binding */ sumPriceSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować


var productsSelector = function productsSelector() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products;
  return state.products;
};
var sumPriceSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(productsSelector, function (products) {
  return products.reduce(function (acc, item) {
    return acc + item.price;
  }, 0);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44ad26286a35bc224818")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYzNhMWU1MmEzZjRiMDE0NjVjNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUNiO0FBR3JCLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUE7RUFBQSxJQUFJQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDSCx1REFBYyxFQUFFLENBQUNPLFFBQVE7RUFBQSxPQUFLTCxLQUFLLENBQUNLLFFBQVE7QUFBQTtBQUM1RSxJQUFNQyxnQkFBZ0IsR0FBR1Qsd0RBQWMsQ0FDMUNFLGdCQUFnQixFQUNoQixVQUFBTSxRQUFRO0VBQUEsT0FBR0EsUUFBUSxDQUFDRSxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO0lBQUEsT0FDakNELEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLO0VBQUEsQ0FDbkIsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUNSOzs7Ozs7OztVQ2REIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XHJcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XHJcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxyXG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c1NlbGVjdG9yID0gKHN0YXRlPXN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMpID0+IHN0YXRlLnByb2R1Y3RzXHJcbmV4cG9ydCBjb25zdCBzdW1QcmljZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9kdWN0c1NlbGVjdG9yLFxyXG4gICAgcHJvZHVjdHM9PiBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxyXG4gICAgICAgIGFjYyArIGl0ZW0ucHJpY2VcclxuICAgICksIDApXHJcbilcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDRhZDI2Mjg2YTM1YmMyMjQ4MThcIikiXSwibmFtZXMiOlsiY3JlYXRlU2VsZWN0b3IiLCJzdG9yZSIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJzdW1QcmljZVNlbGVjdG9yIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==