"use strict";
self["webpackHotUpdatees6_react"](0,{

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
    tasks: tasks
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
/******/ 	__webpack_require__.h = () => ("6d9a5195778f8499af5c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yZDdmNjE5ZWVmYWRiNmUyYTJmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVTtBQUNLO0FBQ0M7QUFDTztBQUVqRCxJQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBZ0I7RUFBQSxJQUFYQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztFQUMxQjtFQUNBO0VBQ0E7RUFDQTs7RUFHQSxvQkFDSVAsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNHLHdEQUFRO0lBQUNJLEtBQUssRUFBRUE7RUFBTSxFQUFHLENBRTNCO0FBRVgsQ0FBQztBQUVELElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJKLEtBQUssRUFBRUksS0FBSyxDQUFDSjtJQUNiO0lBQ0E7RUFDSixDQUFDO0FBQUEsQ0FBQzs7QUFFRixJQUFNSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQztFQUFBLENBQ0g7QUFBQSxDQUFDO0FBR0YsaUVBQWVaLG9EQUFPLENBQUNTLGVBQWUsRUFBRUUsa0JBQWtCLENBQUMsQ0FBQ1AsY0FBYyxDQUFDOzs7Ozs7OztVQ2hDM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvVGFza3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7YWRkVGFza30gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBBbGxUYXNrcyBmcm9tIFwiLi4vY29tcG9uZW50cy9UYXNrXCI7XG5pbXBvcnQgQWRkVGFzayBmcm9tIFwiLi4vY29tcG9uZW50cy9UYXNrL0FkZFRhc2tcIjtcblxuY29uc3QgVGFza3NDb250YWluZXIgPSAoe3Rhc2tzfSkgPT4ge1xuICAgIC8vIGNvbnN0IGhhbmRsZVNhdmVUYXNrID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgIC8vICAgICBhZGRUYXNrKHZhbHVlKVxuICAgIC8vIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxBbGxUYXNrcyB0YXNrcz17dGFza3N9IC8+XG4gICAgICAgICAgICB7Lyo8QWRkVGFzayBvblN1Ym1pdFRhc2s9e2hhbmRsZVNhdmVUYXNrfS8+Ki99XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHRhc2tzOiBzdGF0ZS50YXNrcyxcbiAgICAvL2RvZGFjIHNlbGVrdG9yIG5hIHpyb2Jpb25lXG4gICAgLy9kb2RhYyBzZWxla3RvciBuYSBkbyB6cm9iaWVuaWFcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgLy8gYWRkVGFzazogKHZhbHVlKT0+IGRpc3BhdGNoKGFkZFRhc2sodmFsdWUpKVxufSlcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUYXNrc0NvbnRhaW5lcikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZDlhNTE5NTc3OGY4NDk5YWY1Y1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJhZGRUYXNrIiwiQWxsVGFza3MiLCJBZGRUYXNrIiwiVGFza3NDb250YWluZXIiLCJfcmVmIiwidGFza3MiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==