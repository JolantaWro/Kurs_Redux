"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 87:
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
    fetchQuote = _ref.fetchQuote,
    addFavourites = _ref.addFavourites;
  var handleAddFavourites = function handleAddFavourites() {
    addFavourites(quote);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: loading,
    onClick: fetchQuote
  }, "Pobierz cytat"), quote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, quote.quote, " / ", quote.author), loading && "Ładuję cytat...", error && error, quote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleAddFavourites
  }, "Dodaj do ulubionych"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quote);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f3c30344073a1141aa2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YWQwNTk4YTM5MjRjZjVmZTcwNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUcxQixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQUMsSUFBQSxFQUEyRDtFQUFBLElBQXREQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztJQUFFQyxPQUFPLEdBQUFGLElBQUEsQ0FBUEUsT0FBTztJQUFFQyxLQUFLLEdBQUFILElBQUEsQ0FBTEcsS0FBSztJQUFFQyxVQUFVLEdBQUFKLElBQUEsQ0FBVkksVUFBVTtJQUFFQyxhQUFhLEdBQUFMLElBQUEsQ0FBYkssYUFBYTtFQUM1RCxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQVM7SUFDOUJELGFBQWEsQ0FBQ0osS0FBSyxDQUFDO0VBQ3hCLENBQUM7RUFFRCxvQkFDSUgsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFVLFFBQVEsRUFBRU4sT0FBUTtJQUFDTyxPQUFPLEVBQUVMO0VBQVcsR0FBQyxlQUFhLENBQVMsRUFDckVILEtBQUssaUJBQUlILDBEQUFBLFlBQUlHLEtBQUssQ0FBQ0EsS0FBSyxFQUFDLEtBQUcsRUFBQ0EsS0FBSyxDQUFDUyxNQUFNLENBQUssRUFDOUNSLE9BQU8sSUFBSSxpQkFBaUIsRUFDNUJDLEtBQUssSUFBSUEsS0FBSyxFQUNkRixLQUFLLGlCQUFJSCwwREFBQTtJQUFRVyxPQUFPLEVBQUVIO0VBQW9CLEdBQUMscUJBQW1CLENBQVMsQ0FDMUU7QUFFZCxDQUFDO0FBTUQsaUVBQWVQLEtBQUs7Ozs7Ozs7O1VDdkJwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfQXN5bmNocm9uaWN6bm9zYy8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUXVvdGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgUXVvdGUgPSAoe3F1b3RlLCBsb2FkaW5nLCBlcnJvciwgZmV0Y2hRdW90ZSwgYWRkRmF2b3VyaXRlc30pID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUFkZEZhdm91cml0ZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkRmF2b3VyaXRlcyhxdW90ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtsb2FkaW5nfSBvbkNsaWNrPXtmZXRjaFF1b3RlfT5Qb2JpZXJ6IGN5dGF0PC9idXR0b24+XHJcbiAgICAgICAgICAgIHtxdW90ZSAmJiA8cD57cXVvdGUucXVvdGV9IC8ge3F1b3RlLmF1dGhvcn08L3A+fVxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiBcIsWBYWR1asSZIGN5dGF0Li4uXCJ9XHJcbiAgICAgICAgICAgIHtlcnJvciAmJiBlcnJvcn1cclxuICAgICAgICAgICAge3F1b3RlICYmIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkRmF2b3VyaXRlc30+RG9kYWogZG8gdWx1YmlvbnljaDwvYnV0dG9uPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1b3RlO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZjNjMzAzNDQwNzNhMTE0MWFhMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlF1b3RlIiwiX3JlZiIsInF1b3RlIiwibG9hZGluZyIsImVycm9yIiwiZmV0Y2hRdW90ZSIsImFkZEZhdm91cml0ZXMiLCJoYW5kbGVBZGRGYXZvdXJpdGVzIiwiY3JlYXRlRWxlbWVudCIsImRpc2FibGVkIiwib25DbGljayIsImF1dGhvciJdLCJzb3VyY2VSb290IjoiIn0=