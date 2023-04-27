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
  var allTasks = _ref.allTasks;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
    id = _useParams.id;
  var filteredTasks = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_1__.getTask)(allTasks, parseInt(id));
  console.log(filteredTasks);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, filteredTasks.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-block"
  }, "Brak wpis\xF3w!"), filteredTasks.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, filteredTasks.title, " ", filteredTasks.description));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTask);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("341fc4c45283ab549ec1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZmZiODkwNzU2NDExYTFiZGJkYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3VCO0FBQ0g7QUFFOUMsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUFDLElBQUEsRUFBbUI7RUFBQSxJQUFkQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUV6QixJQUFBQyxVQUFBLEdBQWFMLDJEQUFTLEVBQUU7SUFBakJNLEVBQUUsR0FBQUQsVUFBQSxDQUFGQyxFQUFFO0VBQ1QsSUFBTUMsYUFBYSxHQUFHTix5REFBTyxDQUFDRyxRQUFRLEVBQUVJLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDLENBQUM7RUFDckRHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxhQUFhLENBQUM7RUFFMUIsb0JBQ0lULDBEQUFBLGNBQ0tTLGFBQWEsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsaUJBQUlkLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFhLEdBQUMsaUJBQVksQ0FBTSxFQUU3RU4sYUFBYSxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxpQkFBS2QsMERBQUEsYUFBS1MsYUFBYSxDQUFDTyxLQUFLLEVBQUMsR0FBQyxFQUFDUCxhQUFhLENBQUNRLFdBQVcsQ0FBTyxDQVN2RjtBQUVkLENBQUM7QUFFRCxpRUFBZWIsVUFBVTs7Ozs7Ozs7VUMzQnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Rhc2svU2luZ2xlVGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmssIHVzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Z2V0VGFza30gZnJvbSBcIi4uLy4uL3JlZHV4L3NlbGVjdG9yc1wiO1xuXG5jb25zdCBTaW5nbGVUYXNrID0gKHthbGxUYXNrc30pID0+IHtcblxuICAgIGNvbnN0IHtpZH0gPSB1c2VQYXJhbXMoKVxuICAgIGNvbnN0IGZpbHRlcmVkVGFza3MgPSBnZXRUYXNrKGFsbFRhc2tzLCBwYXJzZUludChpZCkpXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRUYXNrcylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZmlsdGVyZWRUYXNrcy5sZW5ndGggPT09IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiPkJyYWsgd3Bpc8OzdyE8L2Rpdj59XG5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFRhc2tzLmxlbmd0aCA+IDAgJiYgKDxoMj57ZmlsdGVyZWRUYXNrcy50aXRsZX0ge2ZpbHRlcmVkVGFza3MuZGVzY3JpcHRpb259PC9oMj4pfVxuICAgICAgICAgICAgey8qe2ZpbHRlcmVkVGFza3MubGVuZ3RoID4gMCAmJiA8TGluayB0bz17YC8ke2ZpbHRlcmVkVGFza3MuaWR9YH0ga2V5PXtmaWx0ZXJlZFRhc2tzLmlkfT57ZmlsdGVyZWRUYXNrcy50aXRsZX0ge2ZpbHRlcmVkVGFza3MuZGVzY3JpcHRpb259PC9MaW5rPn0qL31cblxuICAgICAgICAgICAgey8qe2xpc3RFbGVtZW50cy5sZW5ndGggPiAwICYmIGxpc3RFbGVtZW50cy5tYXAoZWwgPT4gKCovfVxuICAgICAgICAgICAgey8qICAgIDxMaW5rIHRvPXtgLyR7cGF0aH0vJHtlbC5pZH1gfSBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiIGtleT17ZWwuaWR9PiovfVxuICAgICAgICAgICAgey8qICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1pY29uXCI+PGkgY2xhc3NOYW1lPXtgZmFzIGZhLSR7aWNvbk5hbWV9YH0vPjwvc3Bhbj4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAge2VsLm5hbWV9Ki99XG4gICAgICAgICAgICB7LyogICAgPC9MaW5rPiovfVxuICAgICAgICAgICAgey8qKSl9Ki99XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVUYXNrOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM0MWZjNGM0NTI4M2FiNTQ5ZWMxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVBhcmFtcyIsImdldFRhc2siLCJTaW5nbGVUYXNrIiwiX3JlZiIsImFsbFRhc2tzIiwiX3VzZVBhcmFtcyIsImlkIiwiZmlsdGVyZWRUYXNrcyIsInBhcnNlSW50IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==