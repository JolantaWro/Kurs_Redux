"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _containers_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80);






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/:filterValue",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    exact: true,
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }))));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null)));

/***/ }),

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
    products: products,
    filterValue: filterValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Do zap\u0142aty: ", sum, " PLN"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a6c8ffcf7a2b3db4760d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MmRhY2I1ZWMzMmFiNjhiMDliMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNvQjtBQUNUO0FBQ0g7QUFDRztBQUN5QjtBQUU5RCxJQUFNUSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQ0lSLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDSywyREFBYSxxQkFDVkwsMERBQUEsQ0FBQ08sb0RBQU0scUJBQ0hQLDBEQUFBLENBQUNNLG1EQUFLO0lBQUNLLElBQUksRUFBQyxlQUFlO0lBQUNDLE9BQU8sZUFBRVosMERBQUEsQ0FBQ0Usd0RBQUk7RUFBSSxFQUFHLGVBQ2pERiwwREFBQSxDQUFDTSxtREFBSztJQUFDTyxLQUFLO0lBQUNGLElBQUksRUFBQyxFQUFFO0lBQUNDLE9BQU8sZUFBRVosMERBQUEsQ0FBQ0Usd0RBQUk7RUFBSSxFQUFHLENBQ3JDLENBQ0csQ0FDakI7QUFFWCxDQUFDO0FBRUQsSUFBTVksU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHaEIsNERBQVUsQ0FBQ2EsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFDUGxCLDBEQUFBLENBQUNJLGlEQUFRO0VBQUNELEtBQUssRUFBRUEsb0RBQUtBO0FBQUMsZ0JBQ25CSCwwREFBQSxDQUFDUSxHQUFHLE9BQUcsQ0FDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnVCO0FBQ2I7QUFDQTtBQUN1QjtBQUVqRCxJQUFNTixJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQXNCLElBQUEsRUFBcUQ7RUFBQSxJQUEvQ0MsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7SUFBRUMsR0FBRyxHQUFBRixJQUFBLENBQUhFLEdBQUc7SUFBRUMsVUFBVSxHQUFBSCxJQUFBLENBQVZHLFVBQVU7SUFBRUMsYUFBYSxHQUFBSixJQUFBLENBQWJJLGFBQWE7RUFFcEQsSUFBQUMsVUFBQSxHQUF3Qk4sMkRBQVMsRUFBRTtJQUEzQk8sV0FBVyxHQUFBRCxVQUFBLENBQVhDLFdBQVc7RUFFbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRUYsV0FBVyxDQUFDO0VBQ3ZDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEVBQUVOLEdBQUcsRUFBQU8sT0FBQSxDQUFTUCxHQUFHLEVBQUM7O0VBRW5DO0VBQ0E7RUFDQTs7RUFJQSxvQkFDTTFCLDBEQUFBLDJCQUNNQSwwREFBQSxDQUFDc0Isa0RBQUk7SUFBQ1ksRUFBRSxFQUFFO0VBQUksR0FBQyxXQUFTLENBQU8sZUFBQWxDLDBEQUFBLFlBQU0sZUFDckNBLDBEQUFBLENBQUNzQixrREFBSTtJQUFDWSxFQUFFLEVBQUU7RUFBTSxHQUFDLGNBQU8sQ0FBTyxlQUFBbEMsMERBQUEsWUFBTSxlQUNyQ0EsMERBQUEsQ0FBQ3NCLGtEQUFJO0lBQUNZLEVBQUUsRUFBRTtFQUFNLEdBQUMsY0FBTyxDQUFPLGVBQUFsQywwREFBQSxZQUFNLGVBQ3JDQSwwREFBQSxDQUFDc0Isa0RBQUk7SUFBQ1ksRUFBRSxFQUFFO0VBQU8sR0FBQyxlQUFRLENBQU8sZUFBQWxDLDBEQUFBLFlBQU0sZUFDdkNBLDBEQUFBLENBQUNvQiw2Q0FBSTtJQUFDTyxVQUFVLEVBQUVBO0VBQVcsRUFBRyxlQUNoQzNCLDBEQUFBLENBQUNxQiw2Q0FBSTtJQUFDTyxhQUFhLEVBQUVBLGFBQWM7SUFBQ0gsUUFBUSxFQUFFQSxRQUFTO0lBQUNLLFdBQVcsRUFBRUE7RUFBWSxFQUFFLGVBQ25GOUIsMERBQUEsYUFBSSxtQkFBWSxFQUFDMEIsR0FBRyxFQUFDLE1BQUksQ0FBSyxDQUM5QjtBQUVoQixDQUFDO0FBSUQsaUVBQWV4QixJQUFJOzs7Ozs7OztVQ2pDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi9jb250YWluZXJzL0NhcnRcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi86ZmlsdGVyVmFsdWVcIiBlbGVtZW50PXs8Q2FydCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCJcIiBlbGVtZW50PXs8Q2FydCAvPn0gLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPEFwcCAvPlxuICAgIDwvUHJvdmlkZXI+KVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHN1bSwgYWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCB9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgeyBmaWx0ZXJWYWx1ZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImZpbHRlclZhbHVlXCIsIGZpbHRlclZhbHVlKVxuICAgIGNvbnNvbGUubG9nKFwic3VtXCIsIHN1bSwgdHlwZW9mIHN1bSlcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGZpbHRlclByaWNlKE51bWJlcihmaWx0ZXJWYWx1ZSkpXG4gICAgLy8gfSxbXSlcblxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvXCJ9PldzenlzdGtpZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTBcIn0+ZG8gMTB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzUwXCJ9PmRvIDUwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMDBcIn0+ZG8gMTAwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxGb3JtIGFkZFByb2R1Y3Q9e2FkZFByb2R1Y3R9IC8+XG4gICAgICAgICAgICAgICAgPExpc3QgcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gcHJvZHVjdHM9e3Byb2R1Y3RzfSBmaWx0ZXJWYWx1ZT17ZmlsdGVyVmFsdWV9Lz5cbiAgICAgICAgICAgICAgICA8aDE+RG8gemFwxYJhdHk6IHtzdW19IFBMTjwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTZjOGZmY2Y3YTJiM2RiNDc2MGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiQ2FydCIsInN0b3JlIiwiUHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJwYXRoIiwiZWxlbWVudCIsImV4YWN0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJ1c2VFZmZlY3QiLCJGb3JtIiwiTGlzdCIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJfcmVmIiwicHJvZHVjdHMiLCJzdW0iLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsIl91c2VQYXJhbXMiLCJmaWx0ZXJWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJfdHlwZW9mIiwidG8iXSwic291cmNlUm9vdCI6IiJ9