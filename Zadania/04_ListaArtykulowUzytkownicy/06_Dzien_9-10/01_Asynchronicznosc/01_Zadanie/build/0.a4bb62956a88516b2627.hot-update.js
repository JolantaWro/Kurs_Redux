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
/* harmony import */ var _components_Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
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
// import React from "react";
//
// export default () => <div/>

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c63f485aa3b32e3fe71f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNGJiNjI5NTZhODg1MTZiMjYyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQUMsSUFBQTtFQUFBLElBQUtDLEtBQUssR0FBQUQsSUFBQSxDQUFMQyxLQUFLO0lBQUVDLE9BQU8sR0FBQUYsSUFBQSxDQUFQRSxPQUFPO0lBQUVDLEtBQUssR0FBQUgsSUFBQSxDQUFMRyxLQUFLO0lBQUVDLFVBQVUsR0FBQUosSUFBQSxDQUFWSSxVQUFVO0VBQUEsb0JBQy9DTiwwREFBQSwyQkFDRUEsMERBQUE7SUFBUVEsUUFBUSxFQUFFSixPQUFRO0lBQUNLLE9BQU8sRUFBRUg7RUFBVyxHQUFDLGVBQWEsQ0FBUyxFQUNyRUgsS0FBSyxpQkFBSUgsMERBQUEsWUFBSUcsS0FBSyxDQUFDQSxLQUFLLEVBQUMsS0FBRyxFQUFDQSxLQUFLLENBQUNPLE1BQU0sQ0FBSyxFQUM5Q04sT0FBTyxJQUFJLGlCQUFpQixFQUM1QkMsS0FBSyxJQUFJQSxLQUFLLENBQ1g7QUFBQSxDQUNQO0FBRUQsaUVBQWVKLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYTTtBQUNVO0FBQ0k7QUFDSTtBQUU1QyxJQUFNVyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCVixLQUFLLEVBQUVVLEtBQUssQ0FBQ1YsS0FBSztJQUNsQkMsT0FBTyxFQUFFUyxLQUFLLENBQUNULE9BQU87SUFDdEJDLEtBQUssRUFBRVEsS0FBSyxDQUFDUjtFQUNqQixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDVCxVQUFVLEVBQUUsU0FBQUEsV0FBQTtNQUFBLE9BQU1TLFFBQVEsQ0FBQ1QsMERBQVUsRUFBRSxDQUFDO0lBQUE7RUFDNUMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUssb0RBQU8sQ0FBQ0MsZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUFDYix5REFBSyxDQUFDO0FBQ2xFO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNsQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1F1b3RlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfQXN5bmNocm9uaWN6bm9zYy8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUXVvdGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFF1b3RlID0gKHtxdW90ZSwgbG9hZGluZywgZXJyb3IsIGZldGNoUXVvdGV9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGJ1dHRvbiBkaXNhYmxlZD17bG9hZGluZ30gb25DbGljaz17ZmV0Y2hRdW90ZX0+UG9iaWVyeiBjeXRhdDwvYnV0dG9uPlxuICAgIHtxdW90ZSAmJiA8cD57cXVvdGUucXVvdGV9IC8ge3F1b3RlLmF1dGhvcn08L3A+fVxuICAgIHtsb2FkaW5nICYmIFwixYFhZHVqxJkgY3l0YXQuLi5cIn1cbiAgICB7ZXJyb3IgJiYgZXJyb3J9XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFF1b3RlIGZyb20gXCIuLi9jb21wb25lbnRzL1F1b3RlXCI7XG5pbXBvcnQge2ZldGNoUXVvdGV9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgcXVvdGU6IHN0YXRlLnF1b3RlLFxuICAgIGxvYWRpbmc6IHN0YXRlLmxvYWRpbmcsXG4gICAgZXJyb3I6IHN0YXRlLmVycm9yXG59KVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGZldGNoUXVvdGU6ICgpID0+IGRpc3BhdGNoKGZldGNoUXVvdGUoKSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFF1b3RlKVxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy9cbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IDxkaXYvPiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM2M2Y0ODVhYTNiMzJlM2ZlNzFmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUXVvdGUiLCJfcmVmIiwicXVvdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJmZXRjaFF1b3RlIiwiY3JlYXRlRWxlbWVudCIsImRpc2FibGVkIiwib25DbGljayIsImF1dGhvciIsImNvbm5lY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==