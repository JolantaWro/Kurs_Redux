"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 89:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Quote = function Quote(_ref) {
  var quote = _ref.quote,
    loading = _ref.loading,
    error = _ref.error,
    fetchQuote = _ref.fetchQuote;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: loading,
    onClick: fetchQuote
  }, "Pobierz cytat"), quote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, quote.quote, " / ", quote.author), loading && "Ładuję cytat...", error && error);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quote);

/***/ }),

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _components_Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);




var mapStateToProps = function mapStateToProps(state) {
  return {
    quote: state.quote,
    loading: state.loading,
    error: state.error
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchQuote: function fetchQuote() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.fetchQuote)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Quote__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0f40e2ac646c84fe49bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NTczZmE4NTgyMjk4ODJiYjYzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQUMsSUFBQTtFQUFBLElBQUtDLEtBQUssR0FBQUQsSUFBQSxDQUFMQyxLQUFLO0lBQUVDLE9BQU8sR0FBQUYsSUFBQSxDQUFQRSxPQUFPO0lBQUVDLEtBQUssR0FBQUgsSUFBQSxDQUFMRyxLQUFLO0lBQUVDLFVBQVUsR0FBQUosSUFBQSxDQUFWSSxVQUFVO0VBQUEsb0JBQy9DTiwwREFBQSwyQkFDRUEsMERBQUE7SUFBUVEsUUFBUSxFQUFFSixPQUFRO0lBQUNLLE9BQU8sRUFBRUg7RUFBVyxHQUFDLGVBQWEsQ0FBUyxFQUNyRUgsS0FBSyxpQkFBSUgsMERBQUEsWUFBSUcsS0FBSyxDQUFDQSxLQUFLLEVBQUMsS0FBRyxFQUFDQSxLQUFLLENBQUNPLE1BQU0sQ0FBSyxFQUM5Q04sT0FBTyxJQUFJLGlCQUFpQixFQUM1QkMsS0FBSyxJQUFJQSxLQUFLLENBQ1g7QUFBQSxDQUNQO0FBRUQsaUVBQWVKLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYTTtBQUNVO0FBQ0k7QUFDSTtBQUU1QyxJQUFNVyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCVixLQUFLLEVBQUVVLEtBQUssQ0FBQ1YsS0FBSztJQUNsQkMsT0FBTyxFQUFFUyxLQUFLLENBQUNULE9BQU87SUFDdEJDLEtBQUssRUFBRVEsS0FBSyxDQUFDUjtFQUNqQixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDVCxVQUFVLEVBQUUsU0FBQUEsV0FBQTtNQUFBLE9BQU1TLFFBQVEsQ0FBQ1QsMERBQVUsRUFBRSxDQUFDO0lBQUE7RUFDNUMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUssb0RBQU8sQ0FBQ0MsZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUFDYix5REFBSyxDQUFDOzs7Ozs7OztVQ2ZsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfQXN5bmNocm9uaWN6bm9zYy8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUXVvdGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV9Bc3luY2hyb25pY3pub3NjLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9RdW90ZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUXVvdGUgPSAoe3F1b3RlLCBsb2FkaW5nLCBlcnJvciwgZmV0Y2hRdW90ZX0pID0+IChcbiAgPGRpdj5cbiAgICA8YnV0dG9uIGRpc2FibGVkPXtsb2FkaW5nfSBvbkNsaWNrPXtmZXRjaFF1b3RlfT5Qb2JpZXJ6IGN5dGF0PC9idXR0b24+XG4gICAge3F1b3RlICYmIDxwPntxdW90ZS5xdW90ZX0gLyB7cXVvdGUuYXV0aG9yfTwvcD59XG4gICAge2xvYWRpbmcgJiYgXCLFgWFkdWrEmSBjeXRhdC4uLlwifVxuICAgIHtlcnJvciAmJiBlcnJvcn1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBRdW90ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUXVvdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVvdGVcIjtcbmltcG9ydCB7ZmV0Y2hRdW90ZX0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBxdW90ZTogc3RhdGUucXVvdGUsXG4gICAgbG9hZGluZzogc3RhdGUubG9hZGluZyxcbiAgICBlcnJvcjogc3RhdGUuZXJyb3Jcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgZmV0Y2hRdW90ZTogKCkgPT4gZGlzcGF0Y2goZmV0Y2hRdW90ZSgpKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUXVvdGUpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZjQwZTJhYzY0NmM4NGZlNDliYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlF1b3RlIiwiX3JlZiIsInF1b3RlIiwibG9hZGluZyIsImVycm9yIiwiZmV0Y2hRdW90ZSIsImNyZWF0ZUVsZW1lbnQiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJhdXRob3IiLCJjb25uZWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=