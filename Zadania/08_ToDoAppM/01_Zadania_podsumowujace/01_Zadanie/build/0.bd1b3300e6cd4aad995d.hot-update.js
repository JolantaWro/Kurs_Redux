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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83);
/* harmony import */ var _Task_Done__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony import */ var _Task_Do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _containers_TasksContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
/* harmony import */ var _containers_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96);







var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_TasksContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/addTask",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_AddTask__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/done",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Task_Done__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/do",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Task_Do__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 96:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);
/* harmony import */ var _components_Task_AddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);




var AddTaskContainer = function AddTaskContainer(_ref) {
  var addTask = _ref.addTask;
  var handleSaveTask = function handleSaveTask(value) {
    console.log(value);
    addTask(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Task_AddTask__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSubmitTask: handleSaveTask
  }));
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addTask: function addTask(value) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.addTask)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(null, mapDispatchToProps)(AddTaskContainer));

/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);
/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78);
/* harmony import */ var _components_Task_AddTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);





var TasksContainer = function TasksContainer(_ref) {
  var tasks = _ref.tasks;
  // const handleSaveTask = (value) => {
  //     console.log(value)
  //     addTask(value)
  // }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Task__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tasks: tasks,
    onSubmitTask: handleSaveTask
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    tasks: state.tasks
    //dodac selektor na zrobione
    //dodac selektor na do zrobienia
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // addTask: (value)=> dispatch(addTask(value))
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(TasksContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2d7f619eefadb6e2a2fc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFSixrQkFBa0IsQ0FBQyxDQUFDakIsY0FBYyxDQUFDOzs7Ozs7OztVQ2hDM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQWRkVGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvVGFza3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZXMsIFJvdXRlfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IERvbmUgZnJvbSBcIi4vVGFzay9Eb25lXCI7XG5pbXBvcnQgRG8gZnJvbSBcIi4vVGFzay9Eb1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcbmltcG9ydCBUYXNrc0NvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9UYXNrc0NvbnRhaW5lclwiO1xuaW1wb3J0IEFkZFRhc2sgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQWRkVGFza1wiO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PFRhc2tzQ29udGFpbmVyLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8Um91dGUgcGF0aD1cIi9tb3ZpZVwiIGVsZW1lbnQ9ezxNb3ZpZUNvbnRhaW5lciAvPn0gLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxSb3V0ZSBwYXRoPVwiL21vdmllLzppZFwiIGVsZW1lbnQ9ezxTaW5nbGVNb3ZpZS8+fSAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRkVGFza1wiIGVsZW1lbnQ9ezxBZGRUYXNrIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9uZVwiIGVsZW1lbnQ9ezxEb25lIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9cIiBlbGVtZW50PXs8RG8gLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7YWRkVGFza30gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuLi9jb21wb25lbnRzL1Rhc2svQWRkVGFza1wiO1xuXG5jb25zdCBBZGRUYXNrQ29udGFpbmVyID0gKHthZGRUYXNrfSkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNhdmVUYXNrID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgICAgICBhZGRUYXNrKHZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QWRkVGFzayBvblN1Ym1pdFRhc2s9e2hhbmRsZVNhdmVUYXNrfS8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5cblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGFkZFRhc2s6ICh2YWx1ZSk9PiBkaXNwYXRjaChhZGRUYXNrKHZhbHVlKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkVGFza0NvbnRhaW5lcik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge2FkZFRhc2t9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQgQWxsVGFza3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFza1wiO1xuaW1wb3J0IEFkZFRhc2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFzay9BZGRUYXNrXCI7XG5cbmNvbnN0IFRhc2tzQ29udGFpbmVyID0gKHt0YXNrc30pID0+IHtcbiAgICAvLyBjb25zdCBoYW5kbGVTYXZlVGFzayA9ICh2YWx1ZSkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAvLyAgICAgYWRkVGFzayh2YWx1ZSlcbiAgICAvLyB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QWxsVGFza3MgdGFza3M9e3Rhc2tzfSBvblN1Ym1pdFRhc2s9e2hhbmRsZVNhdmVUYXNrfSAvPlxuICAgICAgICAgICAgey8qPEFkZFRhc2sgb25TdWJtaXRUYXNrPXtoYW5kbGVTYXZlVGFza30vPiovfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICB0YXNrczogc3RhdGUudGFza3MsXG4gICAgLy9kb2RhYyBzZWxla3RvciBuYSB6cm9iaW9uZVxuICAgIC8vZG9kYWMgc2VsZWt0b3IgbmEgZG8genJvYmllbmlhXG59KVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIC8vIGFkZFRhc2s6ICh2YWx1ZSk9PiBkaXNwYXRjaChhZGRUYXNrKHZhbHVlKSlcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGFza3NDb250YWluZXIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmQ3ZjYxOWVlZmFkYjZlMmEyZmNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJEb25lIiwiRG8iLCJMYXlvdXQiLCJUYXNrc0NvbnRhaW5lciIsIkFkZFRhc2siLCJNYWluIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZXhhY3QiLCJwYXRoIiwiZWxlbWVudCIsImNvbm5lY3QiLCJhZGRUYXNrIiwiQWRkVGFza0NvbnRhaW5lciIsIl9yZWYiLCJoYW5kbGVTYXZlVGFzayIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0VGFzayIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiQWxsVGFza3MiLCJ0YXNrcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==