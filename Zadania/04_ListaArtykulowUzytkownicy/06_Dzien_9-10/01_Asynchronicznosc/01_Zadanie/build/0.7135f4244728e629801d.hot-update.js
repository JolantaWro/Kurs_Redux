"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _components_Quote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87);




var mapStateToProps = function mapStateToProps(state) {
  return {
    quote: state.quote.quote,
    loading: state.quote.loading,
    error: state.quote.error
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchQuote: function fetchQuote() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.fetchQuoteAsync)());
    },
    addFavourites: function addFavourites(quote) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.addToFavourites)(quote));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(_components_Quote__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("03e7f3891bcfeb56da4d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MTM1ZjQyNDQ3MjhlNjI5ODAxZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QztBQUM5QjtBQUNJO0FBRXhDLElBQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJDLEtBQUssRUFBRUQsS0FBSyxDQUFDQyxLQUFLLENBQUNBLEtBQUs7SUFDeEJDLE9BQU8sRUFBRUYsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE9BQU87SUFDNUJDLEtBQUssRUFBRUgsS0FBSyxDQUFDQyxLQUFLLENBQUNFO0VBQ3ZCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENDLFVBQVUsRUFBRSxTQUFBQSxXQUFBO01BQUEsT0FBTUQsUUFBUSxDQUFDVCwrREFBZSxFQUFFLENBQUM7SUFBQTtJQUM3Q1csYUFBYSxFQUFFLFNBQUFBLGNBQUNOLEtBQUs7TUFBQSxPQUFLSSxRQUFRLENBQUNWLCtEQUFlLENBQUNNLEtBQUssQ0FBQyxDQUFDO0lBQUE7RUFDOUQsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUosb0RBQU8sQ0FBQ0UsZUFBZSxFQUFFSyxrQkFBa0IsQ0FBQyxDQUFDTix5REFBSyxDQUFDOzs7Ozs7OztVQ2hCbEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1F1b3RlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHthZGRUb0Zhdm91cml0ZXMsIGZldGNoUXVvdGVBc3luY30gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUXVvdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVvdGVcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBxdW90ZTogc3RhdGUucXVvdGUucXVvdGUsXG4gICAgbG9hZGluZzogc3RhdGUucXVvdGUubG9hZGluZyxcbiAgICBlcnJvcjogc3RhdGUucXVvdGUuZXJyb3Jcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgZmV0Y2hRdW90ZTogKCkgPT4gZGlzcGF0Y2goZmV0Y2hRdW90ZUFzeW5jKCkpLFxuICAgIGFkZEZhdm91cml0ZXM6IChxdW90ZSkgPT4gZGlzcGF0Y2goYWRkVG9GYXZvdXJpdGVzKHF1b3RlKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShRdW90ZSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwM2U3ZjM4OTFiY2ZlYjU2ZGE0ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImFkZFRvRmF2b3VyaXRlcyIsImZldGNoUXVvdGVBc3luYyIsImNvbm5lY3QiLCJRdW90ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicXVvdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZldGNoUXVvdGUiLCJhZGRGYXZvdXJpdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==