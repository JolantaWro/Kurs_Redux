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

var FavouritesArray = function FavouritesArray(_ref) {
  var favourites = _ref.favourites;
  console.log(favourites);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, favourites.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      kay: index
    }, element.quote);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavouritesArray);

/***/ }),

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
/******/ 	__webpack_require__.h = () => ("a7688e25a185ea6bd928")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZmNkYmU1OTdiNzNlYTc5NzZkYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUFDLElBQUEsRUFBcUI7RUFBQSxJQUFoQkMsVUFBVSxHQUFBRCxJQUFBLENBQVZDLFVBQVU7RUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLENBQUM7RUFDdkIsb0JBQ0lILDBEQUFBLDJCQUNJQSwwREFBQSxhQUNLRyxVQUFVLENBQUNJLEdBQUcsQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLEtBQUs7SUFBQSxvQkFBS1QsMERBQUE7TUFBSVUsR0FBRyxFQUFFRDtJQUFNLEdBQUVELE9BQU8sQ0FBQ0csS0FBSyxDQUFNO0VBQUEsRUFBQyxDQUN4RSxDQUVIO0FBRWQsQ0FBQztBQUVELGlFQUFlVixlQUFlOzs7Ozs7Ozs7Ozs7O0FDZEo7QUFHMUIsSUFBTVcsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUFWLElBQUEsRUFBMkQ7RUFBQSxJQUF0RFMsS0FBSyxHQUFBVCxJQUFBLENBQUxTLEtBQUs7SUFBRUUsT0FBTyxHQUFBWCxJQUFBLENBQVBXLE9BQU87SUFBRUMsS0FBSyxHQUFBWixJQUFBLENBQUxZLEtBQUs7SUFBRUMsVUFBVSxHQUFBYixJQUFBLENBQVZhLFVBQVU7SUFBRUMsYUFBYSxHQUFBZCxJQUFBLENBQWJjLGFBQWE7RUFDNUQsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBQSxFQUFTO0lBQzlCRCxhQUFhLENBQUNMLEtBQUssQ0FBQztFQUN4QixDQUFDO0VBRUQsb0JBQ0lYLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRa0IsUUFBUSxFQUFFTCxPQUFRO0lBQUNNLE9BQU8sRUFBRUo7RUFBVyxHQUFDLGVBQWEsQ0FBUyxFQUNyRUosS0FBSyxpQkFBSVgsMERBQUEsWUFBSVcsS0FBSyxDQUFDQSxLQUFLLEVBQUMsS0FBRyxFQUFDQSxLQUFLLENBQUNTLE1BQU0sQ0FBSyxFQUM5Q1AsT0FBTyxJQUFJLGlCQUFpQixFQUM1QkMsS0FBSyxJQUFJQSxLQUFLLEVBQ2RILEtBQUssaUJBQUlYLDBEQUFBO0lBQVFtQixPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQUlILGFBQWEsQ0FBQ0wsS0FBSyxDQUFDO0lBQUE7RUFBQyxHQUFDLHFCQUFtQixDQUFTLENBQy9FO0FBRWQsQ0FBQztBQU1ELGlFQUFlQyxLQUFLOzs7Ozs7OztVQ3ZCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0Zhdm91cml0ZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV9Bc3luY2hyb25pY3pub3NjLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9RdW90ZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGYXZvdXJpdGVzQXJyYXkgPSAoe2Zhdm91cml0ZXN9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhmYXZvdXJpdGVzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7ZmF2b3VyaXRlcy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiA8bGkga2F5PXtpbmRleH0+e2VsZW1lbnQucXVvdGV9PC9saT4pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVzQXJyYXk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IFF1b3RlID0gKHtxdW90ZSwgbG9hZGluZywgZXJyb3IsIGZldGNoUXVvdGUsIGFkZEZhdm91cml0ZXN9KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVBZGRGYXZvdXJpdGVzID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZEZhdm91cml0ZXMocXVvdGUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17bG9hZGluZ30gb25DbGljaz17ZmV0Y2hRdW90ZX0+UG9iaWVyeiBjeXRhdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7cXVvdGUgJiYgPHA+e3F1b3RlLnF1b3RlfSAvIHtxdW90ZS5hdXRob3J9PC9wPn1cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgXCLFgWFkdWrEmSBjeXRhdC4uLlwifVxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgZXJyb3J9XHJcbiAgICAgICAgICAgIHtxdW90ZSAmJiA8YnV0dG9uIG9uQ2xpY2s9eygpPT5hZGRGYXZvdXJpdGVzKHF1b3RlKX0+RG9kYWogZG8gdWx1YmlvbnljaDwvYnV0dG9uPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1b3RlO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNzY4OGUyNWExODVlYTZiZDkyOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZhdm91cml0ZXNBcnJheSIsIl9yZWYiLCJmYXZvdXJpdGVzIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJrYXkiLCJxdW90ZSIsIlF1b3RlIiwibG9hZGluZyIsImVycm9yIiwiZmV0Y2hRdW90ZSIsImFkZEZhdm91cml0ZXMiLCJoYW5kbGVBZGRGYXZvdXJpdGVzIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiYXV0aG9yIl0sInNvdXJjZVJvb3QiOiIifQ==