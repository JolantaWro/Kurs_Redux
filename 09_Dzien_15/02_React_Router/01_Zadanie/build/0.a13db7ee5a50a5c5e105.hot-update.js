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
  if (products.price = "") {
    sum = 0;
  } else {
    sum = products.reduce(function (acc, item) {
      return acc + Number(item.price);
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
/******/ 	__webpack_require__.h = () => ("232dd2b3eb17776b39b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMTNkYjdlZTVhNTBhNWM1ZTEwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNVO0FBQ0U7QUFDcUI7QUFDYztBQUd6RSxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBSztFQUMvQixJQUFRQyxRQUFRLEdBQUtELEtBQUssQ0FBQ0MsUUFBUSxDQUEzQkEsUUFBUTtFQUNoQixJQUFJQyxHQUFHLEdBQUcsQ0FBQztFQUVYLElBQUdELFFBQVEsQ0FBQ0UsS0FBSyxHQUFHLEVBQUUsRUFBRTtJQUNwQkQsR0FBRyxHQUFHLENBQUM7RUFDWCxDQUFDLE1BQU07SUFDSEEsR0FBRyxHQUFHRCxRQUFRLENBQUNHLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVDLElBQUk7TUFBQSxPQUFLRCxHQUFHLEdBQUdFLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDSCxLQUFLLENBQUM7SUFBQSxFQUFDO0VBQ2xFO0VBRUEsT0FBTTtJQUNGRixRQUFRLEVBQVJBLFFBQVE7SUFDUkMsR0FBRyxFQUFIQTtFQUNKLENBQUM7QUFFTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBTU0sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENkLFVBQVUsRUFBRSxTQUFBQSxXQUFDZSxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDZCwwREFBVSxDQUFDZSxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQ3REZCxhQUFhLEVBQUUsU0FBQUEsY0FBQ2MsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ2IsNkRBQWEsQ0FBQ2MsT0FBTyxDQUFDLENBQUM7SUFBQTtJQUM1RDtFQUdKLENBQUM7QUFBQSxDQUFDOztBQUVGLGlFQUFlakIsb0RBQU8sQ0FBQ00sZUFBZSxFQUFFUyxrQkFBa0IsQ0FBQyxDQUFDZCx3REFBSSxDQUFDOzs7Ozs7OztVQzFDakUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXIHR5bSBwbGlrdSBuYWxlxbx5IHd5a29uYcSHIGNvbm5lY3RcclxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xyXG4vLyBwYW1pxJl0YWogbyB3eWVrc3BvcnRvd2FuaXUga29udGVuZXJhOlxyXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ2FydCk7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRcIjtcclxuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5pbXBvcnQge2ZpbHRlclByb2R1Y3RzUHJpY2UsIHN1bVByaWNlU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHN0YXRlLnByb2R1Y3RzXHJcbiAgICBsZXQgc3VtID0gMFxyXG5cclxuICAgIGlmKHByb2R1Y3RzLnByaWNlID0gXCJcIikge1xyXG4gICAgICAgIHN1bSA9IDBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3VtID0gcHJvZHVjdHMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIE51bWJlcihpdGVtLnByaWNlKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcHJvZHVjdHMsXHJcbiAgICAgICAgc3VtXHJcbiAgICB9XHJcblxyXG59XHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbi8vICAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMsXHJcbi8vICAgICAvLyBzdW06IHN1bVByaWNlU2VsZWN0b3Ioc3RhdGUucHJvZHVjdHMpXHJcbi8vIH0pO1xyXG5cclxuLy92YWx1ZXM6IHN0YXRlLnJvdXRlc1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIGFkZFByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChhZGRQcm9kdWN0KHByb2R1Y3QpKSxcclxuICAgIHJlbW92ZVByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChyZW1vdmVQcm9kdWN0KHByb2R1Y3QpKSxcclxuICAgIC8vIGZpbHRlclByaWNlOiAodmFsdWUpID0+IGRpc3BhdGNoKGZpbHRlclByb2R1Y3RzUHJpY2UodmFsdWUpKVxyXG5cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjMyZGQyYjNlYjE3Nzc2YjM5YjZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwiQ2FydCIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZmlsdGVyUHJvZHVjdHNQcmljZSIsInN1bVByaWNlU2VsZWN0b3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtIiwicHJpY2UiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwiTnVtYmVyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==