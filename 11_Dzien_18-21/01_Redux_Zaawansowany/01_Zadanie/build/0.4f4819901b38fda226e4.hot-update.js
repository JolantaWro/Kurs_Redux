"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProduct": () => (/* binding */ getProduct),
/* harmony export */   "lastAddProducts": () => (/* binding */ lastAddProducts),
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);

var productsSelector = function productsSelector(state) {
  return state.products;
};
var getProduct = function getProduct(products, selector) {
  return products.filter(function (element) {
    return element.id === selector;
  });
};
var lastAddProducts = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(productsSelector, function (products) {
  return products.slice(-5);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("73de3f5bf7f9fe43ebc6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ZjQ4MTk5MDFiMzhmZGEyMjZlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFHbEMsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBR0MsS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsUUFBUTtBQUFBO0FBRWhELElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJRCxRQUFRLEVBQUVFLFFBQVEsRUFBSztFQUM5QyxPQUFPRixRQUFRLENBQUNHLE1BQU0sQ0FBQyxVQUFBQyxPQUFPO0lBQUEsT0FBSUEsT0FBTyxDQUFDQyxFQUFFLEtBQUtILFFBQVE7RUFBQSxFQUFDO0FBQzlELENBQUM7QUFFTSxJQUFNSSxlQUFlLEdBQUdULHdEQUFjLENBQ3pDQyxnQkFBZ0IsRUFDaEIsVUFBQ0UsUUFBUTtFQUFBLE9BQUtBLFFBQVEsQ0FBQ08sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDbkM7Ozs7Ozs7O1VDWkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0c1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdCA9IChwcm9kdWN0cywgc2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5pZCA9PT0gc2VsZWN0b3IpXG59O1xuXG5leHBvcnQgY29uc3QgbGFzdEFkZFByb2R1Y3RzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgcHJvZHVjdHNTZWxlY3RvcixcbiAgICAocHJvZHVjdHMpID0+IHByb2R1Y3RzLnNsaWNlKC01KVxuKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3M2RlM2Y1YmY3ZjlmZTQzZWJjNlwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTZWxlY3RvciIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZ2V0UHJvZHVjdCIsInNlbGVjdG9yIiwiZmlsdGVyIiwiZWxlbWVudCIsImlkIiwibGFzdEFkZFByb2R1Y3RzIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9