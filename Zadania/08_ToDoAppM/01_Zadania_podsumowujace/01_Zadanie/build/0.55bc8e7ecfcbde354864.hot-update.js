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
  var tasks = _ref.tasks,
    addTask = _ref.addTask;
  var handleSaveTask = function handleSaveTask(value) {
    console.log(value);
    addTask(value);
  };
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
    addTask: function addTask(value) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.addTask)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(TasksContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("80fba61ad6692de79a1f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NWJjOGU3ZWNmY2JkZTM1NDg2NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVTtBQUNLO0FBQ0M7QUFDTztBQUVqRCxJQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBeUI7RUFBQSxJQUFwQkMsS0FBSyxHQUFBRCxJQUFBLENBQUxDLEtBQUs7SUFBRUwsT0FBTyxHQUFBSSxJQUFBLENBQVBKLE9BQU87RUFDbkMsSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJQyxLQUFLLEVBQUs7SUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7SUFDbEJQLE9BQU8sQ0FBQ08sS0FBSyxDQUFDO0VBQ2xCLENBQUM7RUFHRCxvQkFDSVQsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNHLHdEQUFRO0lBQUNJLEtBQUssRUFBRUEsS0FBTTtJQUFDTyxZQUFZLEVBQUVOO0VBQWUsRUFBRyxDQUV6RDtBQUVYLENBQUM7QUFFRCxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCVCxLQUFLLEVBQUVTLEtBQUssQ0FBQ1Q7SUFDYjtJQUNBO0VBQ0osQ0FBQztBQUFBLENBQUM7O0FBRUYsSUFBTVUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENoQixPQUFPLEVBQUUsU0FBQUEsUUFBQ08sS0FBSztNQUFBLE9BQUlTLFFBQVEsQ0FBQ2hCLHVEQUFPLENBQUNPLEtBQUssQ0FBQyxDQUFDO0lBQUE7RUFDL0MsQ0FBQztBQUFBLENBQUM7QUFHRixpRUFBZVIsb0RBQU8sQ0FBQ2MsZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUFDWixjQUFjLENBQUM7Ozs7Ozs7O1VDaEMzRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9UYXNrc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHthZGRUYXNrfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IEFsbFRhc2tzIGZyb20gXCIuLi9jb21wb25lbnRzL1Rhc2tcIjtcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuLi9jb21wb25lbnRzL1Rhc2svQWRkVGFza1wiO1xuXG5jb25zdCBUYXNrc0NvbnRhaW5lciA9ICh7dGFza3MsIGFkZFRhc2t9KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2F2ZVRhc2sgPSAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgIGFkZFRhc2sodmFsdWUpXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEFsbFRhc2tzIHRhc2tzPXt0YXNrc30gb25TdWJtaXRUYXNrPXtoYW5kbGVTYXZlVGFza30gLz5cbiAgICAgICAgICAgIHsvKjxBZGRUYXNrIG9uU3VibWl0VGFzaz17aGFuZGxlU2F2ZVRhc2t9Lz4qL31cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgdGFza3M6IHN0YXRlLnRhc2tzLFxuICAgIC8vZG9kYWMgc2VsZWt0b3IgbmEgenJvYmlvbmVcbiAgICAvL2RvZGFjIHNlbGVrdG9yIG5hIGRvIHpyb2JpZW5pYVxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhZGRUYXNrOiAodmFsdWUpPT4gZGlzcGF0Y2goYWRkVGFzayh2YWx1ZSkpXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRhc2tzQ29udGFpbmVyKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgwZmJhNjFhZDY2OTJkZTc5YTFmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsImFkZFRhc2siLCJBbGxUYXNrcyIsIkFkZFRhc2siLCJUYXNrc0NvbnRhaW5lciIsIl9yZWYiLCJ0YXNrcyIsImhhbmRsZVNhdmVUYXNrIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25TdWJtaXRUYXNrIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=