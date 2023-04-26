"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var _containers_Quote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var _containers_Favourites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86);






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Quote__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Favourites__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ }),

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Favourites = function Favourites(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, props.favourites.list.map(function (element) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, element);
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    favourites: state.favourites
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect(mapStateToProps, {})(Favourites));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("301b7739eb7c703e5210")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NmNlZDU0NTZiNzQ0ZjIzNTM1OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ087QUFDSTtBQUNIO0FBRUs7QUFDVTtBQUVqRCxJQUFNTSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQTtFQUFBLG9CQUNQTiwwREFBQSxDQUFDRSxpREFBUTtJQUFDQyxLQUFLLEVBQUVBLG9EQUFLQTtFQUFDLGdCQUNyQkgsMERBQUEsQ0FBQ0kseURBQUssT0FBRSxlQUNSSiwwREFBQSxDQUFDSyw4REFBVSxPQUFFLENBQ0o7QUFBQSxDQUNaO0FBRURKLDZDQUFlLGVBQUNELDBEQUFBLENBQUNNLEdBQUcsT0FBRSxFQUFFRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2Y3QjtBQUUxQixJQUFNTCxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSU0sS0FBSztFQUFBLG9CQUNyQlgsMERBQUEsYUFDS1csS0FBSyxDQUFDQyxVQUFVLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFVBQUFDLE9BQU87SUFBQSxvQkFBSWYsMERBQUEsYUFBS2UsT0FBTyxDQUFNO0VBQUEsRUFBQyxDQUN4RDtBQUFBO0FBRVQsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkwsVUFBVSxFQUFFSyxLQUFLLENBQUNMO0VBQ3RCLENBQUM7QUFBQSxDQUFDO0FBQ0YsaUVBQWVNLE9BQU8sQ0FBQ0YsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNYLFVBQVUsQ0FBQzs7Ozs7Ozs7VUNWdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV9Bc3luY2hyb25pY3pub3NjLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9GYXZvdXJpdGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3JlZHV4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgUXVvdGUgZnJvbSBcIi4vY29udGFpbmVycy9RdW90ZVwiO1xyXG5pbXBvcnQgRmF2b3VyaXRlcyBmcm9tIFwiLi9jb250YWluZXJzL0Zhdm91cml0ZXNcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IChcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxRdW90ZS8+XHJcbiAgICA8RmF2b3VyaXRlcy8+XHJcbiAgPC9Qcm92aWRlcj5cclxuKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRmF2b3VyaXRlcyA9IChwcm9wcykgPT5cclxuICAgIDx1bD5cclxuICAgICAgICB7cHJvcHMuZmF2b3VyaXRlcy5saXN0Lm1hcChlbGVtZW50ID0+IDxsaT57ZWxlbWVudH08L2xpPil9XHJcbiAgICA8L3VsPlxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGZhdm91cml0ZXM6IHN0YXRlLmZhdm91cml0ZXNcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHt9KShGYXZvdXJpdGVzKVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMDFiNzczOWViN2M3MDNlNTIxMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiUHJvdmlkZXIiLCJzdG9yZSIsIlF1b3RlIiwiRmF2b3VyaXRlcyIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicHJvcHMiLCJmYXZvdXJpdGVzIiwibGlzdCIsIm1hcCIsImVsZW1lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9