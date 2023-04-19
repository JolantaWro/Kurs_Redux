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
  if (products) {
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
/******/ 	__webpack_require__.h = () => ("a8cfc9ee60231e52688d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNTZiYWI4MjZmYTlkNjMyYzAzOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNVO0FBQ0U7QUFDcUI7QUFDYztBQUd6RSxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBSztFQUMvQixJQUFRQyxRQUFRLEdBQUtELEtBQUssQ0FBQ0MsUUFBUSxDQUEzQkEsUUFBUTtFQUNoQixJQUFJQyxHQUFHLEdBQUcsQ0FBQztFQUVYLElBQUdELFFBQVEsRUFBRTtJQUNUQyxHQUFHLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsSUFBSTtNQUFBLE9BQUtELEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLO0lBQUEsRUFBQztFQUMxRDtFQUVBLE9BQU07SUFDRkwsUUFBUSxFQUFSQSxRQUFRO0lBQ1JDLEdBQUcsRUFBSEE7RUFDSixDQUFDO0FBRUwsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDYixVQUFVLEVBQUUsU0FBQUEsV0FBQ2MsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ2IsMERBQVUsQ0FBQ2MsT0FBTyxDQUFDLENBQUM7SUFBQTtJQUN0RGIsYUFBYSxFQUFFLFNBQUFBLGNBQUNhLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNaLDZEQUFhLENBQUNhLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDNUQ7RUFHSixDQUFDO0FBQUEsQ0FBQzs7QUFFRixpRUFBZWhCLG9EQUFPLENBQUNNLGVBQWUsRUFBRVEsa0JBQWtCLENBQUMsQ0FBQ2Isd0RBQUksQ0FBQzs7Ozs7Ozs7VUN4Q2pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVyB0eW0gcGxpa3UgbmFsZcW8eSB3eWtvbmHEhyBjb25uZWN0XHJcbi8vIG9yYXogc2tvcnp5c3RhxIcgeiBzZWxla3RvcsOzdyB6YWltcGxlbWVudG93YW55Y2ggdyBwbGlrdSByZWR1eC9zZWxlY3RvcnNcclxuLy8gcGFtacSZdGFqIG8gd3lla3Nwb3J0b3dhbml1IGtvbnRlbmVyYTpcclxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKENhcnQpO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XHJcbmltcG9ydCB7YWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IHtmaWx0ZXJQcm9kdWN0c1ByaWNlLCBzdW1QcmljZVNlbGVjdG9yfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzXCI7XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBzdGF0ZS5wcm9kdWN0c1xyXG4gICAgbGV0IHN1bSA9IDBcclxuXHJcbiAgICBpZihwcm9kdWN0cykge1xyXG4gICAgICAgIHN1bSA9IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnByaWNlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9kdWN0cyxcclxuICAgICAgICBzdW1cclxuICAgIH1cclxuXHJcbn1cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuLy8gICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcclxuLy8gICAgIC8vIHN1bTogc3VtUHJpY2VTZWxlY3RvcihzdGF0ZS5wcm9kdWN0cylcclxuLy8gfSk7XHJcblxyXG4vL3ZhbHVlczogc3RhdGUucm91dGVzXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgYWRkUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QocHJvZHVjdCkpLFxyXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpLFxyXG4gICAgLy8gZmlsdGVyUHJpY2U6ICh2YWx1ZSkgPT4gZGlzcGF0Y2goZmlsdGVyUHJvZHVjdHNQcmljZSh2YWx1ZSkpXHJcblxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhOGNmYzllZTYwMjMxZTUyNjg4ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJDYXJ0IiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJmaWx0ZXJQcm9kdWN0c1ByaWNlIiwic3VtUHJpY2VTZWxlY3RvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvZHVjdHMiLCJzdW0iLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwicHJpY2UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9