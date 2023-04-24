"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 77:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _containers_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);




var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Counter__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/:number",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Counter__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_List__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



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

var CounterContainer = function CounterContainer(props) {
  // const { number } = useParams();
  //
  // useEffect(() => {
  //     updateStartingValue(parseInt(number, 10))
  // }, [number]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_1__.Counter, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(CounterContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f1e93a362ee3b1cffc1c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMWNlOWFmMzBiZDQ3OGI5MjlkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNtQjtBQUV0QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUF5RDtFQUFBLElBQW5EQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztJQUFFQyxZQUFZLEdBQUFGLElBQUEsQ0FBWkUsWUFBWTtJQUFFQyxXQUFXLEdBQUFILElBQUEsQ0FBWEcsV0FBVztJQUFFQyxVQUFVLEdBQUFKLElBQUEsQ0FBVkksVUFBVTtFQUVsRSxvQkFDSVAsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQVFVLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUwsWUFBWSxFQUFFO0lBQUEsQ0FBQztJQUFDTSxRQUFRLEVBQUVKO0VBQVcsR0FBQyxPQUU3RCxDQUFTLGVBQ1RQLDBEQUFBO0lBQVFVLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUosV0FBVyxFQUFFO0lBQUEsQ0FBQztJQUFDSyxRQUFRLEVBQUUsQ0FBQ0o7RUFBVyxHQUFDLE1BRTdELENBQVMsZUFDVFAsMERBQUEsYUFBS0ksS0FBSyxDQUFNLENBQ2pCO0FBRVgsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnlCO0FBRWtCO0FBQ047QUFDd0I7QUFFOUQsSUFBTVksSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUE7RUFBQSxvQkFDTmhCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDYSwyREFBYSxxQkFDVmIsMERBQUEsQ0FBQ2Usb0RBQU0scUJBQ0hmLDBEQUFBLENBQUNjLG1EQUFLO0lBQUNHLEtBQUs7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFbkIsMERBQUEsQ0FBQ0UsMkRBQU87RUFBRyxFQUFHLGVBQzdDRiwwREFBQSxDQUFDYyxtREFBSztJQUFDSSxJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUVuQiwwREFBQSxDQUFDRSwyREFBTztFQUFHLEVBQUcsQ0FDekMsZUFDVEYsMERBQUEsQ0FBQ1ksd0RBQUksT0FBRyxDQUNJLENBQ2pCO0FBQUEsQ0FDTjtBQUVELGlFQUFlSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJtQjtBQUNVO0FBQ2E7QUFFN0QsSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLO0VBQUEsT0FBTTtJQUNoQ2xCLEtBQUssRUFBRWtCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDbkIsS0FBSztJQUMxQkcsVUFBVSxFQUFFZSxLQUFLLENBQUNDLE9BQU8sQ0FBQ2hCO0VBQzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTWlCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQ3RDcEIsWUFBWSxFQUFFLFNBQUFBLGFBQUE7TUFBQSxPQUFNb0IsUUFBUSxDQUFDcEIsNERBQVksRUFBRSxDQUFDO0lBQUE7SUFDNUNDLFdBQVcsRUFBRSxTQUFBQSxZQUFBO01BQUEsT0FBTW1CLFFBQVEsQ0FBQ25CLDJEQUFXLEVBQUUsQ0FBQztJQUFBO0VBQzlDLENBQUM7QUFBQSxDQUFDO0FBRXdCO0FBRTFCLElBQU1vQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJQyxLQUFLLEVBQUs7RUFDaEM7RUFDSjtFQUNBO0VBQ0E7RUFDQTs7RUFFSSxvQkFDSTNCLDBEQUFBLDJCQUNJQSwwREFBQSxDQUFDRSx3REFBTyxPQUFHLENBQ1Q7QUFFZCxDQUFDO0FBRUQsaUVBQWVrQixvREFBTyxDQUFDQyxlQUFlLEVBQUVHLGtCQUFrQixDQUFDLENBQUNFLGdCQUFnQixDQUFDOzs7Ozs7OztVQzlCN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlTmF2aWdhdGV9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBjb25zdCBDb3VudGVyID0gKHsgdmFsdWUsIHN0YXJ0Q291bnRlciwgc3RvcENvdW50ZXIsIGlzQ291bnRpbmcgfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc3RhcnRDb3VudGVyKCl9IGRpc2FibGVkPXtpc0NvdW50aW5nfT5cbiAgICAgICAgICAgICAgICBzdGFydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHN0b3BDb3VudGVyKCl9IGRpc2FibGVkPXshaXNDb3VudGluZ30+XG4gICAgICAgICAgICAgICAgc3RvcFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8aDM+e3ZhbHVlfTwvaDM+XG4gICAgICAgIDwvPlxuICAgICk7XG59OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQ291bnRlclwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbnRhaW5lcnMvTGlzdFwiO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVzfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBNYWluID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8Q291bnRlci8+fSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiLzpudW1iZXJcIiBlbGVtZW50PXs8Q291bnRlci8+fSAvPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICA8TGlzdCAvPlxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZXJcIjtcbmltcG9ydCB7IHN0YXJ0Q291bnRlciwgc3RvcENvdW50ZXIgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdmFsdWU6IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBzdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBzdG9wQ291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RvcENvdW50ZXIoKSksXG59KTtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ291bnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnN0IHsgbnVtYmVyIH0gPSB1c2VQYXJhbXMoKTtcbi8vXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIHVwZGF0ZVN0YXJ0aW5nVmFsdWUocGFyc2VJbnQobnVtYmVyLCAxMCkpXG4vLyB9LCBbbnVtYmVyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENvdW50ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvdW50ZXJDb250YWluZXIpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjFlOTNhMzYyZWUzYjFjZmZjMWNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VOYXZpZ2F0ZSIsIkNvdW50ZXIiLCJfcmVmIiwidmFsdWUiLCJzdGFydENvdW50ZXIiLCJzdG9wQ291bnRlciIsImlzQ291bnRpbmciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJMaXN0IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTWFpbiIsImV4YWN0IiwicGF0aCIsImVsZW1lbnQiLCJjb25uZWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb3VudGVyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJDb3VudGVyQ29udGFpbmVyIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9