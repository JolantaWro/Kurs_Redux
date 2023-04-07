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
/******/ 	__webpack_require__.h = () => ("4ad0598a3924cf5fe706")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mYmI0NDY4Mzg1NDMyNDkyNjgxNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUcxQixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQUMsSUFBQSxFQUEyRDtFQUFBLElBQXREQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztJQUFFQyxPQUFPLEdBQUFGLElBQUEsQ0FBUEUsT0FBTztJQUFFQyxLQUFLLEdBQUFILElBQUEsQ0FBTEcsS0FBSztJQUFFQyxVQUFVLEdBQUFKLElBQUEsQ0FBVkksVUFBVTtJQUFFQyxhQUFhLEdBQUFMLElBQUEsQ0FBYkssYUFBYTtFQUM1RCxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQVM7SUFDOUJELGFBQWEsQ0FBQ0osS0FBSyxDQUFDO0VBRXhCLENBQUM7RUFFRCxvQkFDSUgsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFVLFFBQVEsRUFBRU4sT0FBUTtJQUFDTyxPQUFPLEVBQUVMO0VBQVcsR0FBQyxlQUFhLENBQVMsRUFDckVILEtBQUssaUJBQUlILDBEQUFBLFlBQUlHLEtBQUssQ0FBQ0EsS0FBSyxFQUFDLEtBQUcsRUFBQ0EsS0FBSyxDQUFDUyxNQUFNLENBQUssRUFDOUNSLE9BQU8sSUFBSSxpQkFBaUIsRUFDNUJDLEtBQUssSUFBSUEsS0FBSyxFQUNkRixLQUFLLGlCQUFJSCwwREFBQTtJQUFRVyxPQUFPLEVBQUVIO0VBQW9CLEdBQUMscUJBQW1CLENBQVMsQ0FDMUU7QUFFZCxDQUFDO0FBTUQsaUVBQWVQLEtBQUs7Ozs7Ozs7O1VDeEJwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfQXN5bmNocm9uaWN6bm9zYy8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUXVvdGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgUXVvdGUgPSAoe3F1b3RlLCBsb2FkaW5nLCBlcnJvciwgZmV0Y2hRdW90ZSwgYWRkRmF2b3VyaXRlc30pID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUFkZEZhdm91cml0ZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkRmF2b3VyaXRlcyhxdW90ZSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17bG9hZGluZ30gb25DbGljaz17ZmV0Y2hRdW90ZX0+UG9iaWVyeiBjeXRhdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7cXVvdGUgJiYgPHA+e3F1b3RlLnF1b3RlfSAvIHtxdW90ZS5hdXRob3J9PC9wPn1cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgXCLFgWFkdWrEmSBjeXRhdC4uLlwifVxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgZXJyb3J9XHJcbiAgICAgICAgICAgIHtxdW90ZSAmJiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZEZhdm91cml0ZXN9PkRvZGFqIGRvIHVsdWJpb255Y2g8L2J1dHRvbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdW90ZTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGFkMDU5OGEzOTI0Y2Y1ZmU3MDZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJRdW90ZSIsIl9yZWYiLCJxdW90ZSIsImxvYWRpbmciLCJlcnJvciIsImZldGNoUXVvdGUiLCJhZGRGYXZvdXJpdGVzIiwiaGFuZGxlQWRkRmF2b3VyaXRlcyIsImNyZWF0ZUVsZW1lbnQiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJhdXRob3IiXSwic291cmNlUm9vdCI6IiJ9