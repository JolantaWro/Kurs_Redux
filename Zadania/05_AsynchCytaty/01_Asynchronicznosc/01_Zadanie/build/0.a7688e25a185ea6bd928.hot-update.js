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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: loading,
    onClick: fetchQuote
  }, "Pobierz cytat"), quote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, quote.quote, " / ", quote.author), loading && "Ładuję cytat...", error && error, quote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return addFavourites(quote);
    }
  }, "Dodaj do ulubionych"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quote);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ce3770e8f574e1f6dff7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNzY4OGUyNWExODVlYTZiZDkyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUcxQixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQUMsSUFBQSxFQUEyRDtFQUFBLElBQXREQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztJQUFFQyxPQUFPLEdBQUFGLElBQUEsQ0FBUEUsT0FBTztJQUFFQyxLQUFLLEdBQUFILElBQUEsQ0FBTEcsS0FBSztJQUFFQyxVQUFVLEdBQUFKLElBQUEsQ0FBVkksVUFBVTtJQUFFQyxhQUFhLEdBQUFMLElBQUEsQ0FBYkssYUFBYTtFQUU1RCxvQkFDSVAsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFTLFFBQVEsRUFBRUwsT0FBUTtJQUFDTSxPQUFPLEVBQUVKO0VBQVcsR0FBQyxlQUFhLENBQVMsRUFDckVILEtBQUssaUJBQUlILDBEQUFBLFlBQUlHLEtBQUssQ0FBQ0EsS0FBSyxFQUFDLEtBQUcsRUFBQ0EsS0FBSyxDQUFDUSxNQUFNLENBQUssRUFDOUNQLE9BQU8sSUFBSSxpQkFBaUIsRUFDNUJDLEtBQUssSUFBSUEsS0FBSyxFQUNkRixLQUFLLGlCQUFJSCwwREFBQTtJQUFRVSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQUlILGFBQWEsQ0FBQ0osS0FBSyxDQUFDO0lBQUE7RUFBQyxHQUFDLHFCQUFtQixDQUFTLENBQy9FO0FBRWQsQ0FBQztBQU1ELGlFQUFlRixLQUFLOzs7Ozs7OztVQ3BCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1F1b3RlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IFF1b3RlID0gKHtxdW90ZSwgbG9hZGluZywgZXJyb3IsIGZldGNoUXVvdGUsIGFkZEZhdm91cml0ZXN9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17bG9hZGluZ30gb25DbGljaz17ZmV0Y2hRdW90ZX0+UG9iaWVyeiBjeXRhdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7cXVvdGUgJiYgPHA+e3F1b3RlLnF1b3RlfSAvIHtxdW90ZS5hdXRob3J9PC9wPn1cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgXCLFgWFkdWrEmSBjeXRhdC4uLlwifVxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgZXJyb3J9XHJcbiAgICAgICAgICAgIHtxdW90ZSAmJiA8YnV0dG9uIG9uQ2xpY2s9eygpPT5hZGRGYXZvdXJpdGVzKHF1b3RlKX0+RG9kYWogZG8gdWx1YmlvbnljaDwvYnV0dG9uPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1b3RlO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZTM3NzBlOGY1NzRlMWY2ZGZmN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlF1b3RlIiwiX3JlZiIsInF1b3RlIiwibG9hZGluZyIsImVycm9yIiwiZmV0Y2hRdW90ZSIsImFkZEZhdm91cml0ZXMiLCJjcmVhdGVFbGVtZW50IiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiYXV0aG9yIl0sInNvdXJjZVJvb3QiOiIifQ==