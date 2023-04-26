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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    filterValue = _useParams.filterValue;
  console.log("filterValue", filterValue);
  console.log("sum", sum, _typeof(sum));

  // useEffect(() => {
  //     filterPrice(Number(filterValue))
  // },[])

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
    products: products
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
    removeProduct = _ref.removeProduct;
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
/******/ 	__webpack_require__.h = () => ("7fae84262bcd7aaae7f9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZmNlODkxNWQ2YzkzYWM3NTk3YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ2I7QUFDQTtBQUN1QjtBQUVqRCxJQUFNTSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFxRDtFQUFBLElBQS9DQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFQyxHQUFHLEdBQUFGLElBQUEsQ0FBSEUsR0FBRztJQUFFQyxVQUFVLEdBQUFILElBQUEsQ0FBVkcsVUFBVTtJQUFFQyxhQUFhLEdBQUFKLElBQUEsQ0FBYkksYUFBYTtFQUNwRCxJQUFBQyxVQUFBLEdBQXdCUCwyREFBUyxFQUFFO0lBQTNCUSxXQUFXLEdBQUFELFVBQUEsQ0FBWEMsV0FBVztFQUVuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFFRixXQUFXLENBQUM7RUFDdkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRU4sR0FBRyxFQUFBTyxPQUFBLENBQVNQLEdBQUcsRUFBQzs7RUFFbkM7RUFDQTtFQUNBOztFQUlBLG9CQUNJVCwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFFO0VBQUksR0FBQyxXQUFTLENBQU8sZUFBQWxCLDBEQUFBLFlBQU0sZUFDckNBLDBEQUFBLENBQUNJLGtEQUFJO0lBQUNjLEVBQUUsRUFBRTtFQUFNLEdBQUMsY0FBTyxDQUFPLGVBQUFsQiwwREFBQSxZQUFNLGVBQ3JDQSwwREFBQSxDQUFDSSxrREFBSTtJQUFDYyxFQUFFLEVBQUU7RUFBTSxHQUFDLGNBQU8sQ0FBTyxlQUFBbEIsMERBQUEsWUFBTSxlQUNyQ0EsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFFO0VBQU8sR0FBQyxlQUFRLENBQU8sZUFBQWxCLDBEQUFBLFlBQU0sZUFDdkNBLDBEQUFBLENBQUNFLDZDQUFJO0lBQUNRLFVBQVUsRUFBRUE7RUFBVyxFQUFHLGVBQ2hDViwwREFBQSxDQUFDRyw2Q0FBSTtJQUFDUSxhQUFhLEVBQUVBLGFBQWM7SUFBQ0gsUUFBUSxFQUFFQTtFQUFTLEVBQUcsZUFDMURSLDBEQUFBLGFBQUksbUJBQVksRUFBQ1MsR0FBRyxFQUFDLE1BQUksQ0FBSyxDQUM1QjtBQUVkLENBQUM7QUFJRCxpRUFBZUgsSUFBSTs7Ozs7Ozs7Ozs7OztBQ2hDTztBQUUxQixJQUFNSCxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUksSUFBQSxFQUFtQztFQUFBLElBQTdCQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFRyxhQUFhLEdBQUFKLElBQUEsQ0FBYkksYUFBYTtFQUVyQyxvQkFDSVgsMERBQUEsYUFDR1EsUUFBUSxDQUFDVyxHQUFHLENBQUMsVUFBQ0MsT0FBTztJQUFBLG9CQUNsQnBCLDBEQUFBO01BQUlxQixHQUFHLEVBQUVELE9BQU8sQ0FBQ0U7SUFBSyxHQUNuQkYsT0FBTyxDQUFDRSxJQUFJLEVBQUMsS0FBRyxFQUFDRixPQUFPLENBQUNHLEtBQUssRUFBQyxNQUNoQyxlQUFBdkIsMERBQUE7TUFBUXdCLE9BQU8sRUFBRSxTQUFBQSxRQUFBO1FBQUEsT0FBTWIsYUFBYSxDQUFDUyxPQUFPLENBQUM7TUFBQTtJQUFDLEdBQUMsV0FBSSxDQUFTLENBQ3pEO0VBQUEsQ0FDUixDQUFDLENBQ0M7QUFFWCxDQUFDO0FBR0QsaUVBQWVqQixJQUFJOzs7Ozs7OztVQ2pCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9MaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHN1bSwgYWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCB9KSA9PiB7XG4gICAgY29uc3QgeyBmaWx0ZXJWYWx1ZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImZpbHRlclZhbHVlXCIsIGZpbHRlclZhbHVlKVxuICAgIGNvbnNvbGUubG9nKFwic3VtXCIsIHN1bSwgdHlwZW9mIHN1bSlcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGZpbHRlclByaWNlKE51bWJlcihmaWx0ZXJWYWx1ZSkpXG4gICAgLy8gfSxbXSlcblxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz17XCIvXCJ9PldzenlzdGtpZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMFwifT5kbyAxMHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtcIi81MFwifT5kbyA1MHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMDBcIn0+ZG8gMTAwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgPEZvcm0gYWRkUHJvZHVjdD17YWRkUHJvZHVjdH0gLz5cbiAgICAgICAgICAgIDxMaXN0IHJlbW92ZVByb2R1Y3Q9e3JlbW92ZVByb2R1Y3R9IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgICAgICAgIDxoMT5EbyB6YXDFgmF0eToge3N1bX0gUExOPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGlzdCA9ICh7IHByb2R1Y3RzLCByZW1vdmVQcm9kdWN0fSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3Byb2R1Y3QubmFtZX0+XG4gICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9IC0ge3Byb2R1Y3QucHJpY2V9IFBMTlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZVByb2R1Y3QocHJvZHVjdCl9PlVzdcWEPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMaXN0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdmYWU4NDI2MmJjZDdhYWFlN2Y5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiRm9ybSIsIkxpc3QiLCJMaW5rIiwidXNlUGFyYW1zIiwiQ2FydCIsIl9yZWYiLCJwcm9kdWN0cyIsInN1bSIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiX3VzZVBhcmFtcyIsImZpbHRlclZhbHVlIiwiY29uc29sZSIsImxvZyIsIl90eXBlb2YiLCJjcmVhdGVFbGVtZW50IiwidG8iLCJtYXAiLCJwcm9kdWN0Iiwia2V5IiwibmFtZSIsInByaWNlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=