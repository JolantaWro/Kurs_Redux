"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Counter": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Counter = function Counter(_ref) {
  var value = _ref.value,
    startCounter = _ref.startCounter,
    stopCounter = _ref.stopCounter,
    isCounting = _ref.isCounting;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return startCounter();
    },
    disabled: isCounting
  }, "start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return stopCounter();
    },
    disabled: !isCounting
  }, "stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, value));
};

/***/ }),

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var _containers_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);




var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Counter__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/counter/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_List__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);





var CounterContainer = function CounterContainer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_List__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    value: state.counter.value,
    isCounting: state.counter.isCounting
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    startCounter: function startCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.startCounter)());
    },
    stopCounter: function stopCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.stopCounter)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CounterContainer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4332e818a8a96f2fe42b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kYjYwMTI0MWRlOWVhODg5YzQxYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVuQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUF5RDtFQUFBLElBQW5EQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztJQUFFQyxZQUFZLEdBQUFGLElBQUEsQ0FBWkUsWUFBWTtJQUFFQyxXQUFXLEdBQUFILElBQUEsQ0FBWEcsV0FBVztJQUFFQyxVQUFVLEdBQUFKLElBQUEsQ0FBVkksVUFBVTtFQUNsRSxvQkFDSU4sMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQVFTLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUwsWUFBWSxFQUFFO0lBQUEsQ0FBQztJQUFDTSxRQUFRLEVBQUVKO0VBQVcsR0FBQyxPQUU3RCxDQUFTLGVBQ1ROLDBEQUFBO0lBQVFTLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUosV0FBVyxFQUFFO0lBQUEsQ0FBQztJQUFDSyxRQUFRLEVBQUUsQ0FBQ0o7RUFBVyxHQUFDLE1BRTdELENBQVMsZUFDVE4sMERBQUEsYUFBS0csS0FBSyxDQUFNLENBQ2pCO0FBRVgsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkNkQ7QUFDcEM7QUFDa0I7QUFDTjtBQUV0QyxJQUFNWSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQTtFQUFBLG9CQUNOZiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ1csMkRBQWEscUJBQ1ZYLDBEQUFBLENBQUNhLG9EQUFNLHFCQUNIYiwwREFBQSxDQUFDWSxtREFBSztJQUFDSSxJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUVqQiwwREFBQSxDQUFDQywyREFBTztFQUFJLEVBQUcsZUFDeENELDBEQUFBLENBQUNZLG1EQUFLO0lBQUNJLElBQUksRUFBQyxjQUFjO0lBQUNDLE9BQU8sZUFBRWpCLDBEQUFBLENBQUNjLHdEQUFJO0VBQUksRUFBRyxDQUMzQyxDQUNHLENBQ2pCO0FBQUEsQ0FDTjtBQUVELGlFQUFlQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbUI7QUFDVTtBQUNhO0FBRW5DO0FBQ0E7QUFFMUIsSUFBTUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsS0FBSyxFQUFLO0VBRWhDLG9CQUNJcEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNjLDZDQUFJLE9BQUcsQ0FFVDtBQUVYLENBQUM7QUFHRCxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUs7RUFBQSxPQUFNO0lBQ2hDbkIsS0FBSyxFQUFFbUIsS0FBSyxDQUFDQyxPQUFPLENBQUNwQixLQUFLO0lBQzFCRyxVQUFVLEVBQUVnQixLQUFLLENBQUNDLE9BQU8sQ0FBQ2pCO0VBQzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTWtCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQ3RDckIsWUFBWSxFQUFFLFNBQUFBLGFBQUE7TUFBQSxPQUFNcUIsUUFBUSxDQUFDckIsNERBQVksRUFBRSxDQUFDO0lBQUE7SUFDNUNDLFdBQVcsRUFBRSxTQUFBQSxZQUFBO01BQUEsT0FBTW9CLFFBQVEsQ0FBQ3BCLDJEQUFXLEVBQUUsQ0FBQztJQUFBO0VBQzlDLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVjLGdCQUFnQjs7Ozs7Ozs7VUM1Qi9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDb3VudGVyID0gKHsgdmFsdWUsIHN0YXJ0Q291bnRlciwgc3RvcENvdW50ZXIsIGlzQ291bnRpbmcgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHN0YXJ0Q291bnRlcigpfSBkaXNhYmxlZD17aXNDb3VudGluZ30+XG4gICAgICAgICAgICAgICAgc3RhcnRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzdG9wQ291bnRlcigpfSBkaXNhYmxlZD17IWlzQ291bnRpbmd9PlxuICAgICAgICAgICAgICAgIHN0b3BcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGgzPnt2YWx1ZX08L2gzPlxuICAgICAgICA8Lz5cbiAgICApO1xufTsiLCJpbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vY29udGFpbmVycy9Db3VudGVyXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29udGFpbmVycy9MaXN0XCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxDb3VudGVyIC8+fSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvdW50ZXIvOmlkXCIgZWxlbWVudD17PExpc3QgLz59IC8+XG4gICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IENvdW50ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGVyXCI7XG5pbXBvcnQgeyBzdGFydENvdW50ZXIsIHN0b3BDb3VudGVyIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcblxuY29uc3QgQ291bnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaXN0IC8+XG4gICAgICAgICAgICBcbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHZhbHVlOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgc3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdGFydENvdW50ZXIoKSksXG4gICAgc3RvcENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0b3BDb3VudGVyKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJDb250YWluZXI7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQzMzJlODE4YThhOTZmMmZlNDJiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ291bnRlciIsIl9yZWYiLCJ2YWx1ZSIsInN0YXJ0Q291bnRlciIsInN0b3BDb3VudGVyIiwiaXNDb3VudGluZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpc3QiLCJNYWluIiwicGF0aCIsImVsZW1lbnQiLCJjb25uZWN0IiwiQ291bnRlckNvbnRhaW5lciIsInByb3BzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb3VudGVyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9