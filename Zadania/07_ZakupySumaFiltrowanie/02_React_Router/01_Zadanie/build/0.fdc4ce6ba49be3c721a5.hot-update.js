"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);





var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products,
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPrice)(state)
    // sum: sumPriceSelector(state.products)
  };
};

//values: state.routes

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    }
    // filterPrice: (value) => dispatch(filterProductsPrice(value))
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

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
/******/ 	__webpack_require__.h = () => ("89afb035984530d1516b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZGM0Y2U2YmE0OWJlM2M3MjFhNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNVO0FBQ0U7QUFDcUI7QUFDMkI7QUFHdEYsSUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkMsUUFBUSxFQUFFRCxLQUFLLENBQUNDLFFBQVE7SUFDeEJDLEdBQUcsRUFBRUwsNkRBQVcsQ0FBQ0csS0FBSztJQUN0QjtFQUNKLENBQUM7QUFBQSxDQUFDOztBQUVGOztBQUVBLElBQU1HLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDVixVQUFVLEVBQUUsU0FBQUEsV0FBQ1csT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ1YsMERBQVUsQ0FBQ1csT0FBTyxDQUFDLENBQUM7SUFBQTtJQUN0RFYsYUFBYSxFQUFFLFNBQUFBLGNBQUNVLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNULDZEQUFhLENBQUNVLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDNUQ7RUFHSixDQUFDO0FBQUEsQ0FBQzs7QUFFRixpRUFBZWIsb0RBQU8sQ0FBQ08sZUFBZSxFQUFFSSxrQkFBa0IsQ0FBQyxDQUFDVix3REFBSSxDQUFDOzs7Ozs7Ozs7OztBQzNCakU7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUcsS0FBSyxFQUFLO0VBQ2xDLElBQUlPLFFBQVE7RUFDWixJQUFJUCxLQUFLLENBQUNDLFFBQVEsRUFBRTtJQUNoQixJQUFJRCxLQUFLLENBQUNDLFFBQVEsQ0FBQ08sS0FBSyxJQUFJLEVBQUUsRUFBRTtNQUM1QkQsUUFBUSxHQUFHLGVBQWU7SUFDOUIsQ0FBQyxNQUFNLElBQUlQLEtBQUssQ0FBQ0MsUUFBUSxDQUFDTyxLQUFLLElBQUksRUFBRSxFQUFFO01BQ25DRCxRQUFRLEdBQUcsZUFBZTtJQUM5QjtFQUNKO0VBQ0EsT0FBT0EsUUFBUTtBQUNuQixDQUFDOzs7Ozs7OztVQzlCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXIHR5bSBwbGlrdSBuYWxlxbx5IHd5a29uYcSHIGNvbm5lY3RcclxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xyXG4vLyBwYW1pxJl0YWogbyB3eWVrc3BvcnRvd2FuaXUga29udGVuZXJhOlxyXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ2FydCk7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRcIjtcclxuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5pbXBvcnQge2ZpbHRlclByb2R1Y3RzUHJpY2UsIHNlbGVjdFByaWNlLCBzdW1QcmljZVNlbGVjdG9yfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzXCI7XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcclxuICAgIHN1bTogc2VsZWN0UHJpY2Uoc3RhdGUpXHJcbiAgICAvLyBzdW06IHN1bVByaWNlU2VsZWN0b3Ioc3RhdGUucHJvZHVjdHMpXHJcbn0pO1xyXG5cclxuLy92YWx1ZXM6IHN0YXRlLnJvdXRlc1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIGFkZFByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChhZGRQcm9kdWN0KHByb2R1Y3QpKSxcclxuICAgIHJlbW92ZVByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChyZW1vdmVQcm9kdWN0KHByb2R1Y3QpKSxcclxuICAgIC8vIGZpbHRlclByaWNlOiAodmFsdWUpID0+IGRpc3BhdGNoKGZpbHRlclByb2R1Y3RzUHJpY2UodmFsdWUpKVxyXG5cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7IiwiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XHJcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XHJcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxyXG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXHJcblxyXG4vLyBleHBvcnQgY29uc3QgZmlsdGVyUHJvZHVjdHNQcmljZSA9IChwcm9kdWN0cywgc3RhdHVzKSA9PiB7XHJcbi8vICAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcmljZSA+PSBzdGF0dXMpO1xyXG4vLyB9O1xyXG5cclxuXHJcblxyXG4vLyBjb25zdCBwcm9kdWN0c1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUucHJvZHVjdHNcclxuLy8gZXhwb3J0IGNvbnN0IHN1bVByaWNlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuLy8gICAgIGZpbHRlclByb2R1Y3RzUHJpY2UsXHJcbi8vICAgICBwcm9kdWN0cz0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXHJcbi8vICAgICAgICAgYWNjICsgaXRlbS5wcmljZVxyXG4vLyAgICAgKSwgMClcclxuLy8gKVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFByaWNlID0gKHN0YXRlKSA9PiB7XHJcbiAgICBsZXQgc3VtUHJpY2U7XHJcbiAgICBpZiAoc3RhdGUucHJvZHVjdHMpIHtcclxuICAgICAgICBpZiAoc3RhdGUucHJvZHVjdHMucHJpY2UgPj0gMTApIHtcclxuICAgICAgICAgICAgc3VtUHJpY2UgPSBcIndpZWNlaiBuaXogMTBcIlxyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUucHJvZHVjdHMucHJpY2UgPj0gNTApIHtcclxuICAgICAgICAgICAgc3VtUHJpY2UgPSBcIndpZWNlaiBuaXogNTBcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdW1QcmljZVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg5YWZiMDM1OTg0NTMwZDE1MTZiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsIkNhcnQiLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsImZpbHRlclByb2R1Y3RzUHJpY2UiLCJzZWxlY3RQcmljZSIsInN1bVByaWNlU2VsZWN0b3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9kdWN0IiwiY3JlYXRlU2VsZWN0b3IiLCJzdW1QcmljZSIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==