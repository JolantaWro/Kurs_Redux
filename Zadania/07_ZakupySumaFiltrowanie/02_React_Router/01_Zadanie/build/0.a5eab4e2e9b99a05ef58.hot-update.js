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
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);





var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products,
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.sumPriceSelector)(state.products)
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
    },
    filterPrice: function filterPrice(value) {
      return dispatch((0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.filterProductsPrice)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterProductsPrice": () => (/* binding */ filterProductsPrice),
/* harmony export */   "sumPriceSelector": () => (/* binding */ sumPriceSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować

var filterProductsPrice = function filterProductsPrice(products, status) {
  return products.filter(function (item) {
    return item.price >= status;
  });
};

// const productsSelector = state => state.products
// const taxPercentSelector = state => state.shop.taxPercent
//
var sumPriceSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(filterProductsPrice, function (products) {
  return products.reduce(function (acc, item) {
    return acc + item.price;
  }, 0);
});
//
// const taxSelector = createSelector(
//     subtotalSelector,
//     taxPercentSelector,
//     (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// )

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("321071e00ea8edbea2f0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNWVhYjRlMmU5Yjk5YTA1ZWY1OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNVO0FBQ0U7QUFDcUI7QUFDYztBQUl6RSxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCQyxRQUFRLEVBQUVELEtBQUssQ0FBQ0MsUUFBUTtJQUN4QkMsR0FBRyxFQUFFSixrRUFBZ0IsQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRO0VBR3hDLENBQUM7QUFBQSxDQUFDOztBQUVGOztBQUVBLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDVCxVQUFVLEVBQUUsU0FBQUEsV0FBQ1UsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ1QsMERBQVUsQ0FBQ1UsT0FBTyxDQUFDLENBQUM7SUFBQTtJQUN0RFQsYUFBYSxFQUFFLFNBQUFBLGNBQUNTLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNSLDZEQUFhLENBQUNTLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDNURDLFdBQVcsRUFBRSxTQUFBQSxZQUFDQyxLQUFLO01BQUEsT0FBS0gsUUFBUSxDQUFDUCxxRUFBbUIsQ0FBQ1UsS0FBSyxDQUFDLENBQUM7SUFBQTtFQUdoRSxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlZCxvREFBTyxDQUFDTSxlQUFlLEVBQUVJLGtCQUFrQixDQUFDLENBQUNULHdEQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3QmpFO0FBQ0E7QUFDQTtBQUNBO0FBQ3lDO0FBRWxDLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUlJLFFBQVEsRUFBRVEsTUFBTSxFQUFLO0VBQ3JELE9BQU9SLFFBQVEsQ0FBQ1MsTUFBTSxDQUFDLFVBQUFDLElBQUk7SUFBQSxPQUFJQSxJQUFJLENBQUNDLEtBQUssSUFBSUgsTUFBTTtFQUFBLEVBQUM7QUFDeEQsQ0FBQzs7QUFJRDtBQUNBO0FBQ0E7QUFDTyxJQUFNWCxnQkFBZ0IsR0FBR1Usd0RBQWMsQ0FDMUNYLG1CQUFtQixFQUNuQixVQUFBSSxRQUFRO0VBQUEsT0FBR0EsUUFBUSxDQUFDWSxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFSCxJQUFJO0lBQUEsT0FDakNHLEdBQUcsR0FBR0gsSUFBSSxDQUFDQyxLQUFLO0VBQUEsQ0FDbkIsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUNSO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzFCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXIHR5bSBwbGlrdSBuYWxlxbx5IHd5a29uYcSHIGNvbm5lY3RcclxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xyXG4vLyBwYW1pxJl0YWogbyB3eWVrc3BvcnRvd2FuaXUga29udGVuZXJhOlxyXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ2FydCk7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRcIjtcclxuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5pbXBvcnQge2ZpbHRlclByb2R1Y3RzUHJpY2UsIHN1bVByaWNlU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcclxuXHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcclxuICAgIHN1bTogc3VtUHJpY2VTZWxlY3RvcihzdGF0ZS5wcm9kdWN0cylcclxuXHJcblxyXG59KTtcclxuXHJcbi8vdmFsdWVzOiBzdGF0ZS5yb3V0ZXNcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXHJcbiAgICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2gocmVtb3ZlUHJvZHVjdChwcm9kdWN0KSksXHJcbiAgICBmaWx0ZXJQcmljZTogKHZhbHVlKSA9PiBkaXNwYXRjaChmaWx0ZXJQcm9kdWN0c1ByaWNlKHZhbHVlKSlcclxuXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnQpOyIsIi8vIE1pZWpzY2UgbmEgc2VsZWt0b3J5OlxyXG4vLyBzZWxlY3RQcm9kdWN0cyAtIGRvIHd5YmllcmFuaWEvZmlsdHJvd2FuaWEgcHJvZHVrdMOzd1xyXG4vLyBzdW0gLSBkbyBvYmxpY3phbmlhIHN1bXlcclxuLy8gcGFtacSZdGFqIGFieSBqZSB3eWVrc3BvcnRvd2HEh1xyXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlclByb2R1Y3RzUHJpY2UgPSAocHJvZHVjdHMsIHN0YXR1cykgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0ucHJpY2UgPj0gc3RhdHVzKTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzXHJcbi8vIGNvbnN0IHRheFBlcmNlbnRTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnNob3AudGF4UGVyY2VudFxyXG4vL1xyXG5leHBvcnQgY29uc3Qgc3VtUHJpY2VTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZmlsdGVyUHJvZHVjdHNQcmljZSxcclxuICAgIHByb2R1Y3RzPT4gcHJvZHVjdHMucmVkdWNlKChhY2MsIGl0ZW0pID0+IChcclxuICAgICAgICBhY2MgKyBpdGVtLnByaWNlXHJcbiAgICApLCAwKVxyXG4pXHJcbi8vXHJcbi8vIGNvbnN0IHRheFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbi8vICAgICBzdWJ0b3RhbFNlbGVjdG9yLFxyXG4vLyAgICAgdGF4UGVyY2VudFNlbGVjdG9yLFxyXG4vLyAgICAgKHN1YnRvdGFsLCB0YXhQZXJjZW50KSA9PiBzdWJ0b3RhbCAqICh0YXhQZXJjZW50IC8gMTAwKVxyXG4vLyApIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzIxMDcxZTAwZWE4ZWRiZWEyZjBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwiQ2FydCIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZmlsdGVyUHJvZHVjdHNQcmljZSIsInN1bVByaWNlU2VsZWN0b3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9kdWN0IiwiZmlsdGVyUHJpY2UiLCJ2YWx1ZSIsImNyZWF0ZVNlbGVjdG9yIiwic3RhdHVzIiwiZmlsdGVyIiwiaXRlbSIsInByaWNlIiwicmVkdWNlIiwiYWNjIl0sInNvdXJjZVJvb3QiOiIifQ==