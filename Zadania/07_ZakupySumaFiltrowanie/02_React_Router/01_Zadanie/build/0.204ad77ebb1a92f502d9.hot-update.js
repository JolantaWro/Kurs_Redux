"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);




var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    filterValue = _useParams.filterValue;
  console.log("filterValue", filterValue);
  console.log("sum", sum);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log("Products", products);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/"
  }, "Wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/10"
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/50"
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/100"
  }, "do 100z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    addProduct: addProduct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    removeProduct: removeProduct,
    products: products,
    filterValue: filterValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Do zap\u0142aty: ", sum, " PLN"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ 79:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var List = function List(_ref) {
  var products = _ref.products,
    removeProduct = _ref.removeProduct,
    filterValue = _ref.filterValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: product.name
    }, product.name, " - ", product.price, " PLN", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return removeProduct(product);
      }
    }, "Usu\u0144"));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("10891b400f612712e152")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMDRhZDc3ZWJiMWE5MmY1MDJkOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDYjtBQUNBO0FBQ3VCO0FBRWpELElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBQyxJQUFBLEVBQXFEO0VBQUEsSUFBL0NDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQUVDLEdBQUcsR0FBQUYsSUFBQSxDQUFIRSxHQUFHO0lBQUVDLFVBQVUsR0FBQUgsSUFBQSxDQUFWRyxVQUFVO0lBQUVDLGFBQWEsR0FBQUosSUFBQSxDQUFiSSxhQUFhO0VBQ3BELElBQUFDLFVBQUEsR0FBd0JQLDJEQUFTLEVBQUU7SUFBM0JRLFdBQVcsR0FBQUQsVUFBQSxDQUFYQyxXQUFXO0VBRW5CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVGLFdBQVcsQ0FBQztFQUN2Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFTixHQUFHLENBQUM7RUFFdkJSLGdEQUFTLENBQUMsWUFBTTtJQUNaYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVQLFFBQVEsQ0FBQztFQUNyQyxDQUFDLEVBQUMsRUFBRSxDQUFDO0VBSUwsb0JBQ01SLDBEQUFBLDJCQUNNQSwwREFBQSxDQUFDSSxrREFBSTtJQUFDYSxFQUFFLEVBQUU7RUFBSSxHQUFDLFdBQVMsQ0FBTyxlQUFBakIsMERBQUEsWUFBTSxlQUNyQ0EsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2EsRUFBRSxFQUFFO0VBQU0sR0FBQyxjQUFPLENBQU8sZUFBQWpCLDBEQUFBLFlBQU0sZUFDckNBLDBEQUFBLENBQUNJLGtEQUFJO0lBQUNhLEVBQUUsRUFBRTtFQUFNLEdBQUMsY0FBTyxDQUFPLGVBQUFqQiwwREFBQSxZQUFNLGVBQ3JDQSwwREFBQSxDQUFDSSxrREFBSTtJQUFDYSxFQUFFLEVBQUU7RUFBTyxHQUFDLGVBQVEsQ0FBTyxlQUFBakIsMERBQUEsWUFBTSxlQUN2Q0EsMERBQUEsQ0FBQ0UsNkNBQUk7SUFBQ1EsVUFBVSxFQUFFQTtFQUFXLEVBQUcsZUFDaENWLDBEQUFBLENBQUNHLDZDQUFJO0lBQUNRLGFBQWEsRUFBRUEsYUFBYztJQUFDSCxRQUFRLEVBQUVBLFFBQVM7SUFBQ0ssV0FBVyxFQUFFQTtFQUFZLEVBQUUsZUFDbkZiLDBEQUFBLGFBQUksbUJBQVksRUFBQ1MsR0FBRyxFQUFDLE1BQUksQ0FBSyxDQUM5QjtBQUVoQixDQUFDO0FBSUQsaUVBQWVILElBQUk7Ozs7Ozs7Ozs7Ozs7QUNoQ087QUFFMUIsSUFBTUgsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUFJLElBQUEsRUFBaUQ7RUFBQSxJQUEzQ0MsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7SUFBRUcsYUFBYSxHQUFBSixJQUFBLENBQWJJLGFBQWE7SUFBRUUsV0FBVyxHQUFBTixJQUFBLENBQVhNLFdBQVc7RUFFbEQsb0JBQ0liLDBEQUFBLGFBQ0dRLFFBQVEsQ0FBQ1UsR0FBRyxDQUFDLFVBQUNDLE9BQU87SUFBQSxvQkFDbEJuQiwwREFBQTtNQUFJb0IsR0FBRyxFQUFFRCxPQUFPLENBQUNFO0lBQUssR0FDbkJGLE9BQU8sQ0FBQ0UsSUFBSSxFQUFDLEtBQUcsRUFBQ0YsT0FBTyxDQUFDRyxLQUFLLEVBQUMsTUFDaEMsZUFBQXRCLDBEQUFBO01BQVF1QixPQUFPLEVBQUUsU0FBQUEsUUFBQTtRQUFBLE9BQU1aLGFBQWEsQ0FBQ1EsT0FBTyxDQUFDO01BQUE7SUFBQyxHQUFDLFdBQUksQ0FBUyxDQUN6RDtFQUFBLENBQ1IsQ0FBQyxDQUNDO0FBRVgsQ0FBQztBQUdELGlFQUFlaEIsSUFBSTs7Ozs7Ozs7VUNqQm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xyXG5pbXBvcnQge0xpbmssIHVzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IENhcnQgPSAoeyBwcm9kdWN0cywgc3VtLCBhZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0IH0pID0+IHtcclxuICAgIGNvbnN0IHsgZmlsdGVyVmFsdWUgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyVmFsdWVcIiwgZmlsdGVyVmFsdWUpXHJcbiAgICBjb25zb2xlLmxvZyhcInN1bVwiLCBzdW0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3RzXCIsIHByb2R1Y3RzKVxyXG4gICAgfSxbXSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvXCJ9PldzenlzdGtpZTwvTGluaz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMFwifT5kbyAxMHrFgjwvTGluaz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi81MFwifT5kbyA1MHrFgjwvTGluaz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMDBcIn0+ZG8gMTAwesWCPC9MaW5rPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gYWRkUHJvZHVjdD17YWRkUHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0IHJlbW92ZVByb2R1Y3Q9e3JlbW92ZVByb2R1Y3R9IHByb2R1Y3RzPXtwcm9kdWN0c30gZmlsdGVyVmFsdWU9e2ZpbHRlclZhbHVlfS8+XHJcbiAgICAgICAgICAgICAgICA8aDE+RG8gemFwxYJhdHk6IHtzdW19IFBMTjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExpc3QgPSAoeyBwcm9kdWN0cywgcmVtb3ZlUHJvZHVjdCwgZmlsdGVyVmFsdWUgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtwcm9kdWN0Lm5hbWV9PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9IC0ge3Byb2R1Y3QucHJpY2V9IFBMTlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlUHJvZHVjdChwcm9kdWN0KX0+VXN1xYQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMDg5MWI0MDBmNjEyNzEyZTE1MlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkZvcm0iLCJMaXN0IiwiTGluayIsInVzZVBhcmFtcyIsIkNhcnQiLCJfcmVmIiwicHJvZHVjdHMiLCJzdW0iLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsIl91c2VQYXJhbXMiLCJmaWx0ZXJWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwidG8iLCJtYXAiLCJwcm9kdWN0Iiwia2V5IiwibmFtZSIsInByaWNlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=