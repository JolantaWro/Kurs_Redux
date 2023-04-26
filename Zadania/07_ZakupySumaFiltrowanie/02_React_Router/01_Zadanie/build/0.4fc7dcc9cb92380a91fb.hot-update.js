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
  var products = state.products.products;
  var sum = 0;
  if (products.length > 0) {
    sum = products.reduce(function (acc, item) {
      return acc + item.price;
    });
  }
  return {
    products: products,
    sum: sum
  };
};
// const mapStateToProps = state => ({
//     products: state.products,
//     // sum: sumPriceSelector(state.products)
// });

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("156bab826fa9d632c039")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ZmM3ZGNjOWNiOTIzODBhOTFmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNVO0FBQ0U7QUFDcUI7QUFDYztBQUd6RSxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBSztFQUMvQixJQUFRQyxRQUFRLEdBQUtELEtBQUssQ0FBQ0MsUUFBUSxDQUEzQkEsUUFBUTtFQUNoQixJQUFJQyxHQUFHLEdBQUcsQ0FBQztFQUVYLElBQUdELFFBQVEsQ0FBQ0UsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUNwQkQsR0FBRyxHQUFHRCxRQUFRLENBQUNHLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVDLElBQUk7TUFBQSxPQUFLRCxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBSztJQUFBLEVBQUM7RUFDMUQ7RUFFQSxPQUFNO0lBQ0ZOLFFBQVEsRUFBUkEsUUFBUTtJQUNSQyxHQUFHLEVBQUhBO0VBQ0osQ0FBQztBQUVMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFNTSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ2QsVUFBVSxFQUFFLFNBQUFBLFdBQUNlLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNkLDBEQUFVLENBQUNlLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDdERkLGFBQWEsRUFBRSxTQUFBQSxjQUFDYyxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDYiw2REFBYSxDQUFDYyxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQzVEO0VBR0osQ0FBQztBQUFBLENBQUM7O0FBRUYsaUVBQWVqQixvREFBTyxDQUFDTSxlQUFlLEVBQUVTLGtCQUFrQixDQUFDLENBQUNkLHdEQUFJLENBQUM7Ozs7Ozs7O1VDeENqRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFcgdHltIHBsaWt1IG5hbGXFvHkgd3lrb25hxIcgY29ubmVjdFxyXG4vLyBvcmF6IHNrb3J6eXN0YcSHIHogc2VsZWt0b3LDs3cgemFpbXBsZW1lbnRvd2FueWNoIHcgcGxpa3UgcmVkdXgvc2VsZWN0b3JzXHJcbi8vIHBhbWnEmXRhaiBvIHd5ZWtzcG9ydG93YW5pdSBrb250ZW5lcmE6XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYXJ0KTtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydFwiO1xyXG5pbXBvcnQge2FkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7ZmlsdGVyUHJvZHVjdHNQcmljZSwgc3VtUHJpY2VTZWxlY3Rvcn0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gc3RhdGUucHJvZHVjdHNcclxuICAgIGxldCBzdW0gPSAwXHJcblxyXG4gICAgaWYocHJvZHVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHN1bSA9IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnByaWNlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9kdWN0cyxcclxuICAgICAgICBzdW1cclxuICAgIH1cclxuXHJcbn1cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuLy8gICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcclxuLy8gICAgIC8vIHN1bTogc3VtUHJpY2VTZWxlY3RvcihzdGF0ZS5wcm9kdWN0cylcclxuLy8gfSk7XHJcblxyXG4vL3ZhbHVlczogc3RhdGUucm91dGVzXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgYWRkUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QocHJvZHVjdCkpLFxyXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpLFxyXG4gICAgLy8gZmlsdGVyUHJpY2U6ICh2YWx1ZSkgPT4gZGlzcGF0Y2goZmlsdGVyUHJvZHVjdHNQcmljZSh2YWx1ZSkpXHJcblxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNTZiYWI4MjZmYTlkNjMyYzAzOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJDYXJ0IiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJmaWx0ZXJQcm9kdWN0c1ByaWNlIiwic3VtUHJpY2VTZWxlY3RvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvZHVjdHMiLCJzdW0iLCJsZW5ndGgiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwicHJpY2UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9