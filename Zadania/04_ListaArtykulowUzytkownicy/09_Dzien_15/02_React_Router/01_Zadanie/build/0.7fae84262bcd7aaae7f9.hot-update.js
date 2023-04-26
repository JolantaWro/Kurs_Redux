"use strict";
self["webpackHotUpdatees6_react"](0,{

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
  return products.filter(function (contact) {
    var _contact$name = contact.name,
      first = _contact$name.first,
      last = _contact$name.last;
    return first.toLowerCase().includes(contactsSearch) || last.toLowerCase().includes(contactsSearch);
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b6127ae5b6c58b8c9aba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZmFlODQyNjJiY2Q3YWFhZTdmOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUdsQyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHQyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxRQUFRO0FBQUE7QUFDaEQsSUFBTUMsZ0JBQWdCLEdBQUdKLHdEQUFjLENBQzFDQyxnQkFBZ0IsRUFDaEIsVUFBQUUsUUFBUTtFQUFBLE9BQUdBLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsSUFBSTtJQUFBLE9BQ2pDRCxHQUFHLEdBQUdFLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFBQSxDQUMzQixFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ1I7QUFFTSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJUCxRQUFRLEVBQUVRLFFBQVEsRUFBSztFQUN2RCxJQUFNQyxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDRixRQUFRLENBQUM7RUFFM0MsT0FBT1IsUUFBUSxDQUFDVyxNQUFNLENBQUMsVUFBQ0MsT0FBTyxFQUFLO0lBQ2hDLElBQUFDLGFBQUEsR0FBd0JELE9BQU8sQ0FBQ0UsSUFBSTtNQUE1QkMsS0FBSyxHQUFBRixhQUFBLENBQUxFLEtBQUs7TUFBRUMsSUFBSSxHQUFBSCxhQUFBLENBQUpHLElBQUk7SUFFbkIsT0FBT0QsS0FBSyxDQUFDRSxXQUFXLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsSUFBSUgsSUFBSSxDQUFDQyxXQUFXLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDQyxjQUFjLENBQUM7RUFDdEcsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7VUN2QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNaWVqc2NlIG5hIHNlbGVrdG9yeTpcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XG4vLyBzdW0gLSBkbyBvYmxpY3phbmlhIHN1bXlcbi8vIHBhbWnEmXRhaiBhYnkgamUgd3lla3Nwb3J0b3dhxIdcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0c1xuZXhwb3J0IGNvbnN0IHN1bVByaWNlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBwcm9kdWN0c1NlbGVjdG9yLFxuICAgIHByb2R1Y3RzPT4gcHJvZHVjdHMucmVkdWNlKChhY2MsIGl0ZW0pID0+IChcbiAgICAgICAgYWNjICsgTnVtYmVyKGl0ZW0ucHJpY2UpXG4gICAgKSwgMClcbilcblxuZXhwb3J0IGNvbnN0IGdldEZpbHRlcmVkUHJvZHVjdHMgPSAocHJvZHVjdHMsIHNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdHNTZWxlY3RlZCA9IHBhcnNlSW50KHNlbGVjdG9yKTtcblxuICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoKGNvbnRhY3QpID0+IHtcbiAgICAgICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gY29udGFjdC5uYW1lO1xuXG4gICAgICAgIHJldHVybiBmaXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvbnRhY3RzU2VhcmNoKSB8fCBsYXN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY29udGFjdHNTZWFyY2gpO1xuICAgIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNjEyN2FlNWI2YzU4YjhjOWFiYVwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTZWxlY3RvciIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtUHJpY2VTZWxlY3RvciIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJOdW1iZXIiLCJwcmljZSIsImdldEZpbHRlcmVkUHJvZHVjdHMiLCJzZWxlY3RvciIsInByb2R1Y3RzU2VsZWN0ZWQiLCJwYXJzZUludCIsImZpbHRlciIsImNvbnRhY3QiLCJfY29udGFjdCRuYW1lIiwibmFtZSIsImZpcnN0IiwibGFzdCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjb250YWN0c1NlYXJjaCJdLCJzb3VyY2VSb290IjoiIn0=