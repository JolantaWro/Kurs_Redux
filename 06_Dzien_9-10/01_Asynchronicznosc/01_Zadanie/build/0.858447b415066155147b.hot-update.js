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
  // const handleAddFevourites = (event) => {
  //
  // }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: loading,
    onClick: fetchQuote
  }, "Pobierz cytat"), quote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, quote.quote, " / ", quote.author), loading && "Ładuję cytat...", error && error);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quote);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f4926421ad64c1d3a24b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NTg0NDdiNDE1MDY2MTU1MTQ3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUcxQixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQUMsSUFBQSxFQUEyRDtFQUFBLElBQXREQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztJQUFFQyxPQUFPLEdBQUFGLElBQUEsQ0FBUEUsT0FBTztJQUFFQyxLQUFLLEdBQUFILElBQUEsQ0FBTEcsS0FBSztJQUFFQyxVQUFVLEdBQUFKLElBQUEsQ0FBVkksVUFBVTtJQUFFQyxhQUFhLEdBQUFMLElBQUEsQ0FBYkssYUFBYTtFQUM1RDtFQUNBO0VBQ0E7O0VBRUEsb0JBQ0lQLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRUyxRQUFRLEVBQUVMLE9BQVE7SUFBQ00sT0FBTyxFQUFFSjtFQUFXLEdBQUMsZUFBYSxDQUFTLEVBQ3JFSCxLQUFLLGlCQUFJSCwwREFBQSxZQUFJRyxLQUFLLENBQUNBLEtBQUssRUFBQyxLQUFHLEVBQUNBLEtBQUssQ0FBQ1EsTUFBTSxDQUFLLEVBQzlDUCxPQUFPLElBQUksaUJBQWlCLEVBQzVCQyxLQUFLLElBQUlBLEtBQUssQ0FFYjtBQUVkLENBQUM7QUFNRCxpRUFBZUosS0FBSzs7Ozs7Ozs7VUN2QnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV9Bc3luY2hyb25pY3pub3NjLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9RdW90ZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBRdW90ZSA9ICh7cXVvdGUsIGxvYWRpbmcsIGVycm9yLCBmZXRjaFF1b3RlLCBhZGRGYXZvdXJpdGVzfSkgPT4ge1xyXG4gICAgLy8gY29uc3QgaGFuZGxlQWRkRmV2b3VyaXRlcyA9IChldmVudCkgPT4ge1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtsb2FkaW5nfSBvbkNsaWNrPXtmZXRjaFF1b3RlfT5Qb2JpZXJ6IGN5dGF0PC9idXR0b24+XHJcbiAgICAgICAgICAgIHtxdW90ZSAmJiA8cD57cXVvdGUucXVvdGV9IC8ge3F1b3RlLmF1dGhvcn08L3A+fVxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiBcIsWBYWR1asSZIGN5dGF0Li4uXCJ9XHJcbiAgICAgICAgICAgIHtlcnJvciAmJiBlcnJvcn1cclxuICAgICAgICAgICAgey8qe3F1b3RlICYmIDxidXR0b24gb25DbGljaz17YWRkRmF2b3VyaXRlcyhxdW90ZSl9PkRvZGFqIGRvIHVsdWJpb255Y2g8L2J1dHRvbj59Ki99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdW90ZTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjQ5MjY0MjFhZDY0YzFkM2EyNGJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJRdW90ZSIsIl9yZWYiLCJxdW90ZSIsImxvYWRpbmciLCJlcnJvciIsImZldGNoUXVvdGUiLCJhZGRGYXZvdXJpdGVzIiwiY3JlYXRlRWxlbWVudCIsImRpc2FibGVkIiwib25DbGljayIsImF1dGhvciJdLCJzb3VyY2VSb290IjoiIn0=