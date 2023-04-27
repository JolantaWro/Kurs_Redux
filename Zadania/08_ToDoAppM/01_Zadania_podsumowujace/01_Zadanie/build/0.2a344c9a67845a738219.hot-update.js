"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 91:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);



var SingleTask = function SingleTask(_ref) {
  var allTasks = _ref.allTasks,
    removeTask = _ref.removeTask;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
    id = _useParams.id;
  var filteredTasks = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_1__.getTask)(allTasks, parseInt(id));
  console.log(filteredTasks);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, filteredTasks.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-block"
  }, "Brak wpis\xF3w!"), filteredTasks.length > 0 && filteredTasks.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      key: el.id
    }, el.id, " ", el.title, " ", el.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return removeTask(el);
      }
    }, "Usu\u0144"));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTask);

/***/ }),

/***/ 90:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _components_Task_SingleTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);




var mapStateToProps = function mapStateToProps(state) {
  return {
    allTasks: state.tasks
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    removeTask: function removeTask(task) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeTask)(task));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Task_SingleTask__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7fc5f12ec2e4b87bbd96")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYTM0NGM5YTY3ODQ1YTczODIxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3VCO0FBQ0g7QUFFOUMsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUFDLElBQUEsRUFBK0I7RUFBQSxJQUExQkMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7SUFBRUMsVUFBVSxHQUFBRixJQUFBLENBQVZFLFVBQVU7RUFFckMsSUFBQUMsVUFBQSxHQUFhTiwyREFBUyxFQUFFO0lBQWpCTyxFQUFFLEdBQUFELFVBQUEsQ0FBRkMsRUFBRTtFQUNULElBQU1DLGFBQWEsR0FBR1AseURBQU8sQ0FBQ0csUUFBUSxFQUFFSyxRQUFRLENBQUNGLEVBQUUsQ0FBQyxDQUFDO0VBQ3JERyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsYUFBYSxDQUFDO0VBRTFCLG9CQUNJViwwREFBQSxjQUNLVSxhQUFhLENBQUNLLE1BQU0sS0FBSyxDQUFDLGlCQUFJZiwwREFBQTtJQUFLZ0IsU0FBUyxFQUFDO0VBQWEsR0FBQyxpQkFBWSxDQUFNLEVBRTdFTixhQUFhLENBQUNLLE1BQU0sR0FBRyxDQUFDLElBQUtMLGFBQWEsQ0FBQ08sR0FBRyxDQUFDLFVBQUFDLEVBQUU7SUFBQSxvQkFDOUNsQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDQUEsMERBQUE7TUFBSW9CLEdBQUcsRUFBRUYsRUFBRSxDQUFDVDtJQUFHLEdBQUVTLEVBQUUsQ0FBQ1QsRUFBRSxFQUFDLEdBQUMsRUFBQ1MsRUFBRSxDQUFDRyxLQUFLLEVBQUMsR0FBQyxFQUFDSCxFQUFFLENBQUNJLFdBQVcsQ0FBTSxlQUN4RHRCLDBEQUFBO01BQVF1QixPQUFPLEVBQUUsU0FBQUEsUUFBQTtRQUFBLE9BQU1oQixVQUFVLENBQUNXLEVBQUUsQ0FBQztNQUFBO0lBQUMsR0FBQyxXQUFJLENBQVMsQ0FBRztFQUFBLENBQzFELENBQUUsQ0FFRDtBQUVkLENBQUM7QUFFRCxpRUFBZWQsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQztBQUNVO0FBQ21CO0FBQ1g7QUFDNUMsSUFBTXFCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJwQixRQUFRLEVBQUVvQixLQUFLLENBQUNDO0VBQ3BCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcEN0QixVQUFVLEVBQUUsU0FBQUEsV0FBQ3VCLElBQUk7TUFBQSxPQUFHRCxRQUFRLENBQUN0QiwwREFBVSxDQUFDdUIsSUFBSSxDQUFDLENBQUM7SUFBQTtFQUNsRCxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlTixvREFBTyxDQUFDQyxlQUFlLENBQUMsQ0FBQ3JCLG1FQUFVLENBQUM7Ozs7Ozs7O1VDWm5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Rhc2svU2luZ2xlVGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvU2luZ2xlVGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmssIHVzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Z2V0VGFza30gZnJvbSBcIi4uLy4uL3JlZHV4L3NlbGVjdG9yc1wiO1xuXG5jb25zdCBTaW5nbGVUYXNrID0gKHthbGxUYXNrcywgcmVtb3ZlVGFza30pID0+IHtcblxuICAgIGNvbnN0IHtpZH0gPSB1c2VQYXJhbXMoKVxuICAgIGNvbnN0IGZpbHRlcmVkVGFza3MgPSBnZXRUYXNrKGFsbFRhc2tzLCBwYXJzZUludChpZCkpXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRUYXNrcylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZmlsdGVyZWRUYXNrcy5sZW5ndGggPT09IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiPkJyYWsgd3Bpc8OzdyE8L2Rpdj59XG5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFRhc2tzLmxlbmd0aCA+IDAgJiYgKGZpbHRlcmVkVGFza3MubWFwKGVsID0+IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMiBrZXk9e2VsLmlkfT57ZWwuaWR9IHtlbC50aXRsZX0ge2VsLmRlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVUYXNrKGVsKX0+VXN1xYQ8L2J1dHRvbj48Lz5cbiAgICAgICAgICAgICkpKX1cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlVGFzazsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBTaW5nbGVUYXNrIGZyb20gXCIuLi9jb21wb25lbnRzL1Rhc2svU2luZ2xlVGFza1wiO1xuaW1wb3J0IHtyZW1vdmVUYXNrfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBhbGxUYXNrczogc3RhdGUudGFza3Ncbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIHJlbW92ZVRhc2s6ICh0YXNrKT0+ZGlzcGF0Y2gocmVtb3ZlVGFzayh0YXNrKSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTaW5nbGVUYXNrKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZmM1ZjEyZWMyZTRiODdiYmQ5NlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJnZXRUYXNrIiwiU2luZ2xlVGFzayIsIl9yZWYiLCJhbGxUYXNrcyIsInJlbW92ZVRhc2siLCJfdXNlUGFyYW1zIiwiaWQiLCJmaWx0ZXJlZFRhc2tzIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsImxlbmd0aCIsImNsYXNzTmFtZSIsIm1hcCIsImVsIiwiRnJhZ21lbnQiLCJrZXkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib25DbGljayIsImNvbm5lY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInRhc2tzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0YXNrIl0sInNvdXJjZVJvb3QiOiIifQ==