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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store__WEBPACK_IMPORTED_MODULE_0__["default"].getState();
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
/******/ 	__webpack_require__.h = () => ("dddfc47ccfed0092d1d2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41OGM0MGU5YjMxMjc3NGYzMTQ3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUNiO0FBR3JCLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUE7RUFBQSxJQUFJQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDSCx1REFBYyxFQUFFO0VBQUEsT0FBS0UsS0FBSyxDQUFDSyxRQUFRO0FBQUE7QUFDbkUsSUFBTUMsZ0JBQWdCLEdBQUdULHdEQUFjLENBQzFDRSxnQkFBZ0IsRUFDaEIsVUFBQU0sUUFBUTtFQUFBLE9BQUdBLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsSUFBSTtJQUFBLE9BQ2pDRCxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBSztFQUFBLENBQ25CLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDUjs7Ozs7Ozs7VUNkRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1pZWpzY2UgbmEgc2VsZWt0b3J5OlxyXG4vLyBzZWxlY3RQcm9kdWN0cyAtIGRvIHd5YmllcmFuaWEvZmlsdHJvd2FuaWEgcHJvZHVrdMOzd1xyXG4vLyBzdW0gLSBkbyBvYmxpY3phbmlhIHN1bXlcclxuLy8gcGFtacSZdGFqIGFieSBqZSB3eWVrc3BvcnRvd2HEh1xyXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IChzdGF0ZT1zdG9yZS5nZXRTdGF0ZSgpKSA9PiBzdGF0ZS5wcm9kdWN0c1xyXG5leHBvcnQgY29uc3Qgc3VtUHJpY2VTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgcHJvZHVjdHNTZWxlY3RvcixcclxuICAgIHByb2R1Y3RzPT4gcHJvZHVjdHMucmVkdWNlKChhY2MsIGl0ZW0pID0+IChcclxuICAgICAgICBhY2MgKyBpdGVtLnByaWNlXHJcbiAgICApLCAwKVxyXG4pXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRkZGZjNDdjY2ZlZDAwOTJkMWQyXCIpIl0sIm5hbWVzIjpbImNyZWF0ZVNlbGVjdG9yIiwic3RvcmUiLCJwcm9kdWN0c1NlbGVjdG9yIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJnZXRTdGF0ZSIsInByb2R1Y3RzIiwic3VtUHJpY2VTZWxlY3RvciIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=