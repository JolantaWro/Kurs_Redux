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
  if (!products) {
    sum = 0;
  } else {
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
/******/ 	__webpack_require__.h = () => ("a13db7ee5a50a5c5e105")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hOGNmYzllZTYwMjMxZTUyNjg4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNVO0FBQ0U7QUFDcUI7QUFDYztBQUd6RSxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBSztFQUMvQixJQUFRQyxRQUFRLEdBQUtELEtBQUssQ0FBQ0MsUUFBUSxDQUEzQkEsUUFBUTtFQUNoQixJQUFJQyxHQUFHLEdBQUcsQ0FBQztFQUVYLElBQUcsQ0FBQ0QsUUFBUSxFQUFFO0lBQ1ZDLEdBQUcsR0FBRyxDQUFDO0VBQ1gsQ0FBQyxNQUFNO0lBQ0hBLEdBQUcsR0FBR0QsUUFBUSxDQUFDRSxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO01BQUEsT0FBS0QsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUs7SUFBQSxFQUFDO0VBQzFEO0VBRUEsT0FBTTtJQUNGTCxRQUFRLEVBQVJBLFFBQVE7SUFDUkMsR0FBRyxFQUFIQTtFQUNKLENBQUM7QUFFTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBTUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENiLFVBQVUsRUFBRSxTQUFBQSxXQUFDYyxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDYiwwREFBVSxDQUFDYyxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQ3REYixhQUFhLEVBQUUsU0FBQUEsY0FBQ2EsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ1osNkRBQWEsQ0FBQ2EsT0FBTyxDQUFDLENBQUM7SUFBQTtJQUM1RDtFQUdKLENBQUM7QUFBQSxDQUFDOztBQUVGLGlFQUFlaEIsb0RBQU8sQ0FBQ00sZUFBZSxFQUFFUSxrQkFBa0IsQ0FBQyxDQUFDYix3REFBSSxDQUFDOzs7Ozs7OztVQzFDakUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXIHR5bSBwbGlrdSBuYWxlxbx5IHd5a29uYcSHIGNvbm5lY3RcclxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xyXG4vLyBwYW1pxJl0YWogbyB3eWVrc3BvcnRvd2FuaXUga29udGVuZXJhOlxyXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ2FydCk7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRcIjtcclxuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5pbXBvcnQge2ZpbHRlclByb2R1Y3RzUHJpY2UsIHN1bVByaWNlU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHN0YXRlLnByb2R1Y3RzXHJcbiAgICBsZXQgc3VtID0gMFxyXG5cclxuICAgIGlmKCFwcm9kdWN0cykge1xyXG4gICAgICAgIHN1bSA9IDBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3VtID0gcHJvZHVjdHMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ucHJpY2UpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb2R1Y3RzLFxyXG4gICAgICAgIHN1bVxyXG4gICAgfVxyXG5cclxufVxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4vLyAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLFxyXG4vLyAgICAgLy8gc3VtOiBzdW1QcmljZVNlbGVjdG9yKHN0YXRlLnByb2R1Y3RzKVxyXG4vLyB9KTtcclxuXHJcbi8vdmFsdWVzOiBzdGF0ZS5yb3V0ZXNcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXHJcbiAgICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2gocmVtb3ZlUHJvZHVjdChwcm9kdWN0KSksXHJcbiAgICAvLyBmaWx0ZXJQcmljZTogKHZhbHVlKSA9PiBkaXNwYXRjaChmaWx0ZXJQcm9kdWN0c1ByaWNlKHZhbHVlKSlcclxuXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnQpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImExM2RiN2VlNWE1MGE1YzVlMTA1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsIkNhcnQiLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsImZpbHRlclByb2R1Y3RzUHJpY2UiLCJzdW1QcmljZVNlbGVjdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9kdWN0cyIsInN1bSIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJwcmljZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=