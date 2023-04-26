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
/* harmony import */ var _Task_Do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _containers_TasksContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var _containers_AddTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86);
/* harmony import */ var _containers_Done__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97);







var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_TasksContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/addTask",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_AddTask__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/done",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Done__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/do",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Task_Do__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 97:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _components_Task_Done__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);




var mapStateToProps = function mapStateToProps(state) {
  return {
    taskDone: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_3__.tasksDoneSelector)(state.tasks)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Task_Done__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 98:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTask": () => (/* binding */ getTask),
/* harmony export */   "tasksDoneSelector": () => (/* binding */ tasksDoneSelector),
/* harmony export */   "tasksSelector": () => (/* binding */ tasksSelector)
/* harmony export */ });
var tasksSelector = function tasksSelector(state) {
  return state.tasks;
};
var tasksDoneSelector = function tasksDoneSelector(_ref) {
  var tasks = _ref.tasks;
  console.log(tasks);
  return tasks.filter(function (item) {
    return console.log("Item");
  });
};
var getTask = function getTask(task, selector) {
  return task.filter(function (element) {
    return element.id === selector;
  });
};

//const selectProducts = (state) => {
//     let price = useParams()
//     try {
//         price = price.price
//         console.log(price)
//         return state.items.filter(item => item.price <= price)
//     } catch {
//         return state.items
//     }
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ec115f897896f219693e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZGI3YTRhYjY1MTYyOThiNjQzMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0M7QUFDbkM7QUFDRztBQUM0QjtBQUNkO0FBQ047QUFFdEMsSUFBTVMsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztFQUNmLG9CQUNJVCwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0MsMkRBQWEscUJBQ1ZELDBEQUFBLENBQUNLLCtDQUFNLHFCQUNITCwwREFBQSxDQUFDRSxvREFBTSxxQkFDSEYsMERBQUEsQ0FBQ0csbURBQUs7SUFBQ1MsS0FBSztJQUFDQyxJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUVkLDBEQUFBLENBQUNNLGtFQUFjO0VBQUcsRUFBRyxlQUVwRE4sMERBQUEsQ0FBQ0csbURBQUs7SUFBQ1UsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsT0FBTyxlQUFFZCwwREFBQSxDQUFDTywyREFBTztFQUFJLEVBQUcsZUFDL0NQLDBEQUFBLENBQUNHLG1EQUFLO0lBQUNVLElBQUksRUFBQyxPQUFPO0lBQUNDLE9BQU8sZUFBRWQsMERBQUEsQ0FBQ1Esd0RBQUk7RUFBSSxFQUFHLGVBQ3pDUiwwREFBQSxDQUFDRyxtREFBSztJQUFDVSxJQUFJLEVBQUMsS0FBSztJQUFDQyxPQUFPLGVBQUVkLDBEQUFBLENBQUNJLGdEQUFFO0VBQUksRUFBRyxDQUNoQyxDQUNKLENBQ0csQ0FDakI7QUFFWCxDQUFDO0FBRUQsaUVBQWVLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQk87QUFDVTtBQUNPO0FBQ1U7QUFFckQsSUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkMsUUFBUSxFQUFFSCxtRUFBaUIsQ0FBQ0UsS0FBSyxDQUFDRSxLQUFLO0VBQzNDLENBQUM7QUFBQSxDQUFDO0FBR0YsaUVBQWVMLG9EQUFPLENBQUNFLGVBQWUsQ0FBQyxDQUFDVCw2REFBSSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDVnRDLElBQU1hLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBR0gsS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0UsS0FBSztBQUFBO0FBQzFDLElBQU1KLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUFNLElBQUEsRUFBZ0I7RUFBQSxJQUFYRixLQUFLLEdBQUFFLElBQUEsQ0FBTEYsS0FBSztFQUNwQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssQ0FBQztFQUNsQixPQUFPQSxLQUFLLENBQUNLLE1BQU0sQ0FBQyxVQUFBQyxJQUFJO0lBQUEsT0FBSUgsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQUEsRUFBQztBQUNwRCxDQUFDO0FBQ00sSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlDLElBQUksRUFBRUMsUUFBUSxFQUFLO0VBQ3ZDLE9BQU9ELElBQUksQ0FBQ0gsTUFBTSxDQUFDLFVBQUFYLE9BQU87SUFBQSxPQUFJQSxPQUFPLENBQUNnQixFQUFFLEtBQUtELFFBQVE7RUFBQSxFQUFDO0FBQzFELENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0RvbmUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZXMsIFJvdXRlfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IERvIGZyb20gXCIuL1Rhc2svRG9cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5pbXBvcnQgVGFza3NDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvVGFza3NDb250YWluZXJcIjtcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuLi9jb250YWluZXJzL0FkZFRhc2tcIjtcbmltcG9ydCBEb25lIGZyb20gXCIuLi9jb250YWluZXJzL0RvbmVcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxUYXNrc0NvbnRhaW5lci8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPFJvdXRlIHBhdGg9XCIvdGFza3MvOmlkXCIgZWxlbWVudD17PFNpbmdsZVRhc2svPn0gLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FkZFRhc2tcIiBlbGVtZW50PXs8QWRkVGFzayAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RvbmVcIiBlbGVtZW50PXs8RG9uZSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RvXCIgZWxlbWVudD17PERvIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgRG9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9UYXNrL0RvbmVcIjtcbmltcG9ydCB7dGFza3NEb25lU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICB0YXNrRG9uZTogdGFza3NEb25lU2VsZWN0b3Ioc3RhdGUudGFza3MpXG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRG9uZSk7IiwiZXhwb3J0IGNvbnN0IHRhc2tzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS50YXNrc1xuZXhwb3J0IGNvbnN0IHRhc2tzRG9uZVNlbGVjdG9yID0gKHt0YXNrc30pID0+IHtcbiAgICBjb25zb2xlLmxvZyh0YXNrcylcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGl0ZW0gPT4gY29uc29sZS5sb2coXCJJdGVtXCIpKVxufVxuZXhwb3J0IGNvbnN0IGdldFRhc2sgPSAodGFzaywgc2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gdGFzay5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSBzZWxlY3Rvcilcbn07XG5cbi8vY29uc3Qgc2VsZWN0UHJvZHVjdHMgPSAoc3RhdGUpID0+IHtcbi8vICAgICBsZXQgcHJpY2UgPSB1c2VQYXJhbXMoKVxuLy8gICAgIHRyeSB7XG4vLyAgICAgICAgIHByaWNlID0gcHJpY2UucHJpY2Vcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJpY2UpXG4vLyAgICAgICAgIHJldHVybiBzdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnByaWNlIDw9IHByaWNlKVxuLy8gICAgIH0gY2F0Y2gge1xuLy8gICAgICAgICByZXR1cm4gc3RhdGUuaXRlbXNcbi8vICAgICB9XG4vLyB9IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWMxMTVmODk3ODk2ZjIxOTY5M2VcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJEbyIsIkxheW91dCIsIlRhc2tzQ29udGFpbmVyIiwiQWRkVGFzayIsIkRvbmUiLCJNYWluIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZXhhY3QiLCJwYXRoIiwiZWxlbWVudCIsImNvbm5lY3QiLCJ0YXNrc0RvbmVTZWxlY3RvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidGFza0RvbmUiLCJ0YXNrcyIsInRhc2tzU2VsZWN0b3IiLCJfcmVmIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsIml0ZW0iLCJnZXRUYXNrIiwidGFzayIsInNlbGVjdG9yIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9