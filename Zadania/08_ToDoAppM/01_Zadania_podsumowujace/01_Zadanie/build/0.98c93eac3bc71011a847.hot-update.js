"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _containers_TasksContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var _containers_AddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86);
/* harmony import */ var _containers_Done__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97);
/* harmony import */ var _containers_ToDo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99);







var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_TasksContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/addTask",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_AddTask__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/done",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Done__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/do",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_ToDo__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Do = function Do(_ref) {
  var taskToDo = _ref.taskToDo;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, !taskToDo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "card-title"
  }, "Brak zada\u0144") : taskToDo.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, element.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), element.description);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Do);

/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Done = function Done(_ref) {
  var taskDone = _ref.taskDone;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, !taskDone ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "card-title"
  }, "Brak zada\u0144") : taskDone.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, element.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), element.description);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Done);

/***/ }),

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _components_Task_Do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);




var mapStateToProps = function mapStateToProps(state) {
  return {
    taskToDo: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_3__.tasksToDoSelector)(state.tasks)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Task_Do__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("15f93dcb9a9ab27037dd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45OGM5M2VhYzNiYzcxMDExYTg0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0M7QUFDaEM7QUFDNEI7QUFDZDtBQUNOO0FBQ0Y7QUFFcEMsSUFBTVMsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztFQUNmLG9CQUNJVCwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0MsMkRBQWEscUJBQ1ZELDBEQUFBLENBQUNJLCtDQUFNLHFCQUNISiwwREFBQSxDQUFDRSxvREFBTSxxQkFDSEYsMERBQUEsQ0FBQ0csbURBQUs7SUFBQ1MsS0FBSztJQUFDQyxJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUVkLDBEQUFBLENBQUNLLGtFQUFjO0VBQUcsRUFBRyxlQUVwREwsMERBQUEsQ0FBQ0csbURBQUs7SUFBQ1UsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsT0FBTyxlQUFFZCwwREFBQSxDQUFDTSwyREFBTztFQUFJLEVBQUcsZUFDL0NOLDBEQUFBLENBQUNHLG1EQUFLO0lBQUNVLElBQUksRUFBQyxPQUFPO0lBQUNDLE9BQU8sZUFBRWQsMERBQUEsQ0FBQ08sd0RBQUk7RUFBSSxFQUFHLGVBQ3pDUCwwREFBQSxDQUFDRyxtREFBSztJQUFDVSxJQUFJLEVBQUMsS0FBSztJQUFDQyxPQUFPLGVBQUVkLDBEQUFBLENBQUNRLHdEQUFFO0VBQUksRUFBRyxDQUNoQyxDQUNKLENBQ0csQ0FDakI7QUFFWCxDQUFDO0FBRUQsaUVBQWVDLElBQUk7Ozs7Ozs7Ozs7Ozs7QUMxQk87QUFFMUIsSUFBTUQsRUFBRSxHQUFHLFNBQUxBLEVBQUVBLENBQUFPLElBQUEsRUFBbUI7RUFBQSxJQUFkQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUVqQixvQkFDSWhCLDBEQUFBLGNBQ0ssQ0FBQ2dCLFFBQVEsZ0JBQUdoQiwwREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQVksR0FBQyxpQkFBVSxDQUFLLEdBQUdELFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLFVBQUNKLE9BQU8sRUFBRUssS0FBSztJQUFBLG9CQUFLbkIsMERBQUE7TUFBSW9CLEdBQUcsRUFBRUQ7SUFBTSxHQUFFTCxPQUFPLENBQUNPLEtBQUssZUFBQ3JCLDBEQUFBLFlBQUssRUFBQ2MsT0FBTyxDQUFDUSxXQUFXLENBQU07RUFBQSxFQUFDLENBQ3hKO0FBRWQsQ0FBQztBQUVELGlFQUFlZCxFQUFFOzs7Ozs7Ozs7Ozs7O0FDWFM7QUFFMUIsSUFBTUQsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUFRLElBQUEsRUFBbUI7RUFBQSxJQUFkUSxRQUFRLEdBQUFSLElBQUEsQ0FBUlEsUUFBUTtFQUVuQixvQkFDSXZCLDBEQUFBLGNBQ0ssQ0FBQ3VCLFFBQVEsZ0JBQUd2QiwwREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQVksR0FBQyxpQkFBVSxDQUFLLEdBQUdNLFFBQVEsQ0FBQ0wsR0FBRyxDQUFDLFVBQUNKLE9BQU8sRUFBRUssS0FBSztJQUFBLG9CQUFLbkIsMERBQUE7TUFBSW9CLEdBQUcsRUFBRUQ7SUFBTSxHQUFFTCxPQUFPLENBQUNPLEtBQUssZUFBQ3JCLDBEQUFBLFlBQUssRUFBQ2MsT0FBTyxDQUFDUSxXQUFXLENBQU07RUFBQSxFQUFDLENBQ3hKO0FBRWQsQ0FBQztBQUVELGlFQUFlZixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDWE87QUFDVTtBQUNHO0FBQ2M7QUFHckQsSUFBTW1CLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJYLFFBQVEsRUFBRVMsbUVBQWlCLENBQUNFLEtBQUssQ0FBQ0MsS0FBSztFQUMzQyxDQUFDO0FBQUEsQ0FBQztBQUdGLGlFQUFlSixvREFBTyxDQUFDRSxlQUFlLENBQUMsQ0FBQ2xCLDJEQUFFLENBQUM7Ozs7Ozs7O1VDWDNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Rhc2svRG8uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Rhc2svRG9uZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvVG9Eby5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGV9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0IFRhc2tzQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL1Rhc2tzQ29udGFpbmVyXCI7XG5pbXBvcnQgQWRkVGFzayBmcm9tIFwiLi4vY29udGFpbmVycy9BZGRUYXNrXCI7XG5pbXBvcnQgRG9uZSBmcm9tIFwiLi4vY29udGFpbmVycy9Eb25lXCI7XG5pbXBvcnQgRG8gZnJvbSBcIi4uL2NvbnRhaW5lcnMvVG9Eb1wiO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PFRhc2tzQ29udGFpbmVyLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8Um91dGUgcGF0aD1cIi90YXNrcy86aWRcIiBlbGVtZW50PXs8U2luZ2xlVGFzay8+fSAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRkVGFza1wiIGVsZW1lbnQ9ezxBZGRUYXNrIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9uZVwiIGVsZW1lbnQ9ezxEb25lIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9cIiBlbGVtZW50PXs8RG8gLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBEbyA9ICh7dGFza1RvRG99KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyF0YXNrVG9EbyA/IDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+QnJhayB6YWRhxYQ8L2gyPiA6IHRhc2tUb0RvLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT57ZWxlbWVudC50aXRsZX08YnIvPntlbGVtZW50LmRlc2NyaXB0aW9ufTwvbGk+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IERvbmUgPSAoe3Rhc2tEb25lfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHshdGFza0RvbmUgPyA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkJyYWsgemFkYcWEPC9oMj4gOiB0YXNrRG9uZS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+e2VsZW1lbnQudGl0bGV9PGJyLz57ZWxlbWVudC5kZXNjcmlwdGlvbn08L2xpPil9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb25lOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IERvIGZyb20gXCIuLi9jb21wb25lbnRzL1Rhc2svRG9cIjtcbmltcG9ydCB7dGFza3NUb0RvU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHRhc2tUb0RvOiB0YXNrc1RvRG9TZWxlY3RvcihzdGF0ZS50YXNrcylcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShEbyk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTVmOTNkY2I5YTlhYjI3MDM3ZGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJMYXlvdXQiLCJUYXNrc0NvbnRhaW5lciIsIkFkZFRhc2siLCJEb25lIiwiRG8iLCJNYWluIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZXhhY3QiLCJwYXRoIiwiZWxlbWVudCIsIl9yZWYiLCJ0YXNrVG9EbyIsImNsYXNzTmFtZSIsIm1hcCIsImluZGV4Iiwia2V5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhc2tEb25lIiwiY29ubmVjdCIsInRhc2tzVG9Eb1NlbGVjdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ0YXNrcyJdLCJzb3VyY2VSb290IjoiIn0=