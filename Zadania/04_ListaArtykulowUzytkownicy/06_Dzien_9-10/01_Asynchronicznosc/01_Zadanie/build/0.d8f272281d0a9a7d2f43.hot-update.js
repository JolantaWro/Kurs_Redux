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

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _components_Favourites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);



var mapStateToProps = function mapStateToProps(state) {
  return {
    favourites: state.favourites
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Favourites__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3b05f21ce01de288b6eb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kOGYyNzIyODFkMGE5YTdkMmY0My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUFDLElBQUEsRUFBcUI7RUFBQSxJQUFoQkMsVUFBVSxHQUFBRCxJQUFBLENBQVZDLFVBQVU7RUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLENBQUM7RUFDdkIsb0JBQ0lILDBEQUFBLDJCQUNJQSwwREFBQSxhQUNLRyxVQUFVLENBQUNJLEdBQUcsQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLEtBQUs7SUFBQSxvQkFBS1QsMERBQUE7TUFBSVUsR0FBRyxFQUFFRDtJQUFNLEdBQUVELE9BQU8sQ0FBQ0csS0FBSyxDQUFNO0VBQUEsRUFBQyxDQUN4RSxDQUVIO0FBRWQsQ0FBQztBQUVELGlFQUFlVixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNkSjtBQUNVO0FBQ21CO0FBRXZELElBQU1ZLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJYLFVBQVUsRUFBRVcsS0FBSyxDQUFDWDtFQUN0QixDQUFDO0FBQUEsQ0FBQztBQUNGLGlFQUFlUyxvREFBTyxDQUFDQyxlQUFlLENBQUMsQ0FBQ1osOERBQWUsQ0FBQzs7Ozs7Ozs7VUNQeEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0Zhdm91cml0ZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV9Bc3luY2hyb25pY3pub3NjLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9GYXZvdXJpdGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRmF2b3VyaXRlc0FycmF5ID0gKHtmYXZvdXJpdGVzfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZhdm91cml0ZXMpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7ZmF2b3VyaXRlcy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiA8bGkga2F5PXtpbmRleH0+e2VsZW1lbnQucXVvdGV9PC9saT4pfVxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlc0FycmF5OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgRmF2b3VyaXRlc0FycmF5IGZyb20gXCIuLi9jb21wb25lbnRzL0Zhdm91cml0ZXNcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBmYXZvdXJpdGVzOiBzdGF0ZS5mYXZvdXJpdGVzXG59KVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEZhdm91cml0ZXNBcnJheSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzYjA1ZjIxY2UwMWRlMjg4YjZlYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZhdm91cml0ZXNBcnJheSIsIl9yZWYiLCJmYXZvdXJpdGVzIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJrYXkiLCJxdW90ZSIsImNvbm5lY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=