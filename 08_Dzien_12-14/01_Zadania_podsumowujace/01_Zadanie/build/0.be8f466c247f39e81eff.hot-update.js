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
/* harmony import */ var _components_Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);





var mapStateToProps = function mapStateToProps(state) {
  return {
    launched: state.rocket.launched,
    counter: state.counter
  };
};
console.log("Moj", _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].getState());
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deploy: function deploy() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.rocketAsync)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(_components_Platform__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a64556a256a03f6060d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZThmNDY2YzI0N2YzOWU4MWVmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDbUI7QUFDQztBQUNWO0FBQ0Q7QUFFbkMsSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkMsUUFBUSxFQUFFRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0QsUUFBUTtJQUMvQkUsT0FBTyxFQUFFSCxLQUFLLENBQUNHO0VBQ25CLENBQUM7QUFBQSxDQUFDO0FBRUZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRVAsNkRBQWMsRUFBRSxDQUFFO0FBRXJDLElBQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDQyxNQUFNLEVBQUUsU0FBQUEsT0FBQTtNQUFBLE9BQUtELFFBQVEsQ0FBQ2IsMkRBQVcsRUFBRSxDQUFDO0lBQUE7RUFDeEMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUUsb0RBQU8sQ0FBQ0UsZUFBZSxFQUFFUSxrQkFBa0IsQ0FBQyxDQUFDWCw0REFBUSxDQUFDOzs7Ozs7OztVQ2pCckUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1BsYXRmb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3JvY2tldEFzeW5jfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGxhdGZvcm1cIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGxhdW5jaGVkOiBzdGF0ZS5yb2NrZXQubGF1bmNoZWQsXHJcbiAgICBjb3VudGVyOiBzdGF0ZS5jb3VudGVyXHJcbn0pO1xyXG5cclxuY29uc29sZS5sb2coXCJNb2pcIiwgc3RvcmUuZ2V0U3RhdGUoKSApXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgZGVwbG95OiAoKT0+IGRpc3BhdGNoKHJvY2tldEFzeW5jKCkpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGxhdGZvcm0pXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE2NDU1NmEyNTZhMDNmNjA2MGQ0XCIpIl0sIm5hbWVzIjpbIlJlYWN0Iiwicm9ja2V0QXN5bmMiLCJQbGF0Zm9ybSIsImNvbm5lY3QiLCJzdG9yZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibGF1bmNoZWQiLCJyb2NrZXQiLCJjb3VudGVyIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJkZXBsb3kiXSwic291cmNlUm9vdCI6IiJ9