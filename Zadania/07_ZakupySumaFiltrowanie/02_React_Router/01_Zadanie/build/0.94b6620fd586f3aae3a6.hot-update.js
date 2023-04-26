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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);






var mapStateToProps = function mapStateToProps(state) {
  return {
    products: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.productsSelector)(state),
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.sumPriceSelector)(state)
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
  };
};
var CartContainer = function CartContainer(props) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    filterValue = _useParams.filterValue;
  var products = props.products;
  console.log(filterValue);
  console.log(products);
  var filteredProduct = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.filteredProducts)(products, filterValue);
  //const filteredProduct = products.filter(prod => prod.price <= parseInt(filterValue));
  // const sum = filteredProduct.reduce((acc, item) => (acc + Number(item.price)))

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: filteredProduct
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CartContainer));

/***/ }),

/***/ 80:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filteredProducts": () => (/* binding */ filteredProducts),
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector),
/* harmony export */   "sumPriceSelector": () => (/* binding */ sumPriceSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
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
var filteredProducts = function filteredProducts(products, selector) {
  return products.filter(function (element) {
    return element.price <= parseInt(selector);
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("78b15867761eb281c634")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NGI2NjIwZmQ1ODZmM2FhZTNhNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQ2lCO0FBQ1A7QUFDRTtBQUNxQjtBQUM2QjtBQUd4RixJQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCQyxRQUFRLEVBQUVKLGtFQUFnQixDQUFDRyxLQUFLLENBQUM7SUFDakNFLEdBQUcsRUFBRUosa0VBQWdCLENBQUNFLEtBQUs7RUFDL0IsQ0FBQztBQUFBLENBQUM7O0FBRUY7O0FBRUEsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENWLFVBQVUsRUFBRSxTQUFBQSxXQUFDVyxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDViwwREFBVSxDQUFDVyxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQ3REVixhQUFhLEVBQUUsU0FBQUEsY0FBQ1UsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ1QsNkRBQWEsQ0FBQ1UsT0FBTyxDQUFDLENBQUM7SUFBQTtFQUNoRSxDQUFDO0FBQUEsQ0FBQztBQUdGLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsS0FBSyxFQUFLO0VBRTdCLElBQUFDLFVBQUEsR0FBd0JqQiwyREFBUyxFQUFFO0lBQTNCa0IsV0FBVyxHQUFBRCxVQUFBLENBQVhDLFdBQVc7RUFDbkIsSUFBUVIsUUFBUSxHQUFLTSxLQUFLLENBQWxCTixRQUFRO0VBRWhCUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsV0FBVyxDQUFDO0VBRXhCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsUUFBUSxDQUFDO0VBQ3JCLElBQU1XLGVBQWUsR0FBR2hCLGtFQUFnQixDQUFDSyxRQUFRLEVBQUVRLFdBQVcsQ0FBQztFQUMvRDtFQUNBOztFQUdBLG9CQUNJbkIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNHLHdEQUFJLEVBQUFzQixRQUFBLEtBQU1SLEtBQUs7SUFBRU4sUUFBUSxFQUFFVztFQUFnQixHQUFHLENBQ2hEO0FBRVgsQ0FBQztBQUVELGlFQUFlcEIsb0RBQU8sQ0FBQ08sZUFBZSxFQUFFSSxrQkFBa0IsQ0FBQyxDQUFDRyxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDN0MxRTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUdsQyxJQUFNVCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHRyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxRQUFRO0FBQUE7QUFDaEQsSUFBTUgsZ0JBQWdCLEdBQUdrQix3REFBYyxDQUMxQ25CLGdCQUFnQixFQUNoQixVQUFBSSxRQUFRO0VBQUEsT0FBR0EsUUFBUSxDQUFDZ0IsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsSUFBSTtJQUFBLE9BQ2pDRCxHQUFHLEdBQUdFLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFBQSxDQUMzQixFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ1I7QUFFTSxJQUFNekIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUssUUFBUSxFQUFFcUIsUUFBUSxFQUFLO0VBQ3BELE9BQU9yQixRQUFRLENBQUNzQixNQUFNLENBQUMsVUFBQUMsT0FBTztJQUFBLE9BQUlBLE9BQU8sQ0FBQ0gsS0FBSyxJQUFJSSxRQUFRLENBQUNILFFBQVEsQ0FBQztFQUFBLEVBQUM7QUFDMUUsQ0FBQzs7Ozs7Ozs7VUNqQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVyB0eW0gcGxpa3UgbmFsZcW8eSB3eWtvbmHEhyBjb25uZWN0XG4vLyBvcmF6IHNrb3J6eXN0YcSHIHogc2VsZWt0b3LDs3cgemFpbXBsZW1lbnRvd2FueWNoIHcgcGxpa3UgcmVkdXgvc2VsZWN0b3JzXG4vLyBwYW1pxJl0YWogbyB3eWVrc3BvcnRvd2FuaXUga29udGVuZXJhOlxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKENhcnQpO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRcIjtcbmltcG9ydCB7YWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCB7ZmlsdGVyZWRQcm9kdWN0cywgcHJvZHVjdHNTZWxlY3Rvciwgc3VtUHJpY2VTZWxlY3Rvcn0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzU2VsZWN0b3Ioc3RhdGUpLFxuICAgIHN1bTogc3VtUHJpY2VTZWxlY3RvcihzdGF0ZSlcbn0pO1xuXG4vL3ZhbHVlczogc3RhdGUucm91dGVzXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgYWRkUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QocHJvZHVjdCkpLFxuICAgIHJlbW92ZVByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChyZW1vdmVQcm9kdWN0KHByb2R1Y3QpKSxcbn0pO1xuXG5cbmNvbnN0IENhcnRDb250YWluZXIgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHsgZmlsdGVyVmFsdWUgfSA9IHVzZVBhcmFtcygpO1xuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHByb3BzO1xuXG4gICAgY29uc29sZS5sb2coZmlsdGVyVmFsdWUpXG5cbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0cylcbiAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3QgPSBmaWx0ZXJlZFByb2R1Y3RzKHByb2R1Y3RzLCBmaWx0ZXJWYWx1ZSlcbiAgICAvL2NvbnN0IGZpbHRlcmVkUHJvZHVjdCA9IHByb2R1Y3RzLmZpbHRlcihwcm9kID0+IHByb2QucHJpY2UgPD0gcGFyc2VJbnQoZmlsdGVyVmFsdWUpKTtcbiAgICAvLyBjb25zdCBzdW0gPSBmaWx0ZXJlZFByb2R1Y3QucmVkdWNlKChhY2MsIGl0ZW0pID0+IChhY2MgKyBOdW1iZXIoaXRlbS5wcmljZSkpKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENhcnQgeyAuLi5wcm9wc30gcHJvZHVjdHM9e2ZpbHRlcmVkUHJvZHVjdH0gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnRDb250YWluZXIpO1xuIiwiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XG4vLyBzZWxlY3RQcm9kdWN0cyAtIGRvIHd5YmllcmFuaWEvZmlsdHJvd2FuaWEgcHJvZHVrdMOzd1xuLy8gc3VtIC0gZG8gb2JsaWN6YW5pYSBzdW15XG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0c1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUucHJvZHVjdHNcbmV4cG9ydCBjb25zdCBzdW1QcmljZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgcHJvZHVjdHNTZWxlY3RvcixcbiAgICBwcm9kdWN0cz0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXG4gICAgICAgIGFjYyArIE51bWJlcihpdGVtLnByaWNlKVxuICAgICksIDApXG4pO1xuXG5leHBvcnQgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IChwcm9kdWN0cywgc2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5wcmljZSA8PSBwYXJzZUludChzZWxlY3RvcikpXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzhiMTU4Njc3NjFlYjI4MWM2MzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VQYXJhbXMiLCJjb25uZWN0IiwiQ2FydCIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZmlsdGVyZWRQcm9kdWN0cyIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdW1QcmljZVNlbGVjdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9kdWN0cyIsInN1bSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicHJvZHVjdCIsIkNhcnRDb250YWluZXIiLCJwcm9wcyIsIl91c2VQYXJhbXMiLCJmaWx0ZXJWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJlZFByb2R1Y3QiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyIsImNyZWF0ZVNlbGVjdG9yIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsIk51bWJlciIsInByaWNlIiwic2VsZWN0b3IiLCJmaWx0ZXIiLCJlbGVtZW50IiwicGFyc2VJbnQiXSwic291cmNlUm9vdCI6IiJ9