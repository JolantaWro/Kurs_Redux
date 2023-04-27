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
  }, "Brak wpis\xF3w!"), filteredTasks.length > 0 && filteredTasks.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      key: el.id
    }, el.id, " ", el.title, " ", el.description)
    // <button onClick={() => removeProduct(product)}>Usuń</button>
    ;
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTask);

/***/ }),

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);


var AllTasks = function AllTasks(_ref) {
  var tasks = _ref.tasks,
    removeTask = _ref.removeTask;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, tasks.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-block"
  }, "Brak wpis\xF3w!"), tasks.length > 0 && tasks.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/".concat(el.id),
      key: el.id
    }, el.title, " ", el.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return removeTask(el);
      }
    }, "Usu\u0144"));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllTasks);

/***/ }),

/***/ 80:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81);
/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var _components_Task_AddTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);





var TasksContainer = function TasksContainer(_ref) {
  var tasks = _ref.tasks,
    removeTask = _ref.removeTask;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Task__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tasks: tasks,
    removeTask: removeTask
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    removeTask: function removeTask(task) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.removeTask)(task));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(TasksContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2646efc08728a55fd7f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQ1g7RUFDakIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNWSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ1osVUFBVSxFQUFFLFNBQUFBLFdBQUNhLElBQUk7TUFBQSxPQUFHRCxRQUFRLENBQUNaLDBEQUFVLENBQUNhLElBQUksQ0FBQyxDQUFDO0lBQUE7RUFDbEQsQ0FBQztBQUFBLENBQUM7QUFHRixpRUFBZVIsb0RBQU8sQ0FBQ0ksZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUFDSCxjQUFjLENBQUM7Ozs7Ozs7O1VDeEIzRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9UYXNrL1NpbmdsZVRhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Rhc2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1Rhc2tzQ29udGFpbmVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtnZXRUYXNrfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IFNpbmdsZVRhc2sgPSAoe2FsbFRhc2tzfSkgPT4ge1xuXG4gICAgY29uc3Qge2lkfSA9IHVzZVBhcmFtcygpXG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGdldFRhc2soYWxsVGFza3MsIHBhcnNlSW50KGlkKSlcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZFRhc2tzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFRhc2tzLmxlbmd0aCA9PT0gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrXCI+QnJhayB3cGlzw7N3ITwvZGl2Pn1cblxuICAgICAgICAgICAge2ZpbHRlcmVkVGFza3MubGVuZ3RoID4gMCAmJiAoZmlsdGVyZWRUYXNrcy5tYXAoZWwgPT4gKFxuICAgICAgICAgICAgICAgIDxoMiBrZXk9e2VsLmlkfT57ZWwuaWR9IHtlbC50aXRsZX0ge2VsLmRlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgLy8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVQcm9kdWN0KHByb2R1Y3QpfT5Vc3XFhDwvYnV0dG9uPlxuICAgICAgICAgICAgKSkpfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVUYXNrOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cblxuY29uc3QgQWxsVGFza3MgPSAoe3Rhc2tzLCByZW1vdmVUYXNrfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHt0YXNrcy5sZW5ndGggPT09IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiPkJyYWsgd3Bpc8OzdyE8L2Rpdj59XG5cblxuICAgICAgICAgICAge3Rhc2tzLmxlbmd0aCA+IDAgJiYgdGFza3MubWFwKGVsID0+ICg8PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgLyR7ZWwuaWR9YH0ga2V5PXtlbC5pZH0+e2VsLnRpdGxlfSB7ZWwuZGVzY3JpcHRpb259PC9MaW5rPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlVGFzayhlbCl9PlVzdcWEPC9idXR0b24+PC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsbFRhc2tzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHthZGRUYXNrLCByZW1vdmVUYXNrfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IEFsbFRhc2tzIGZyb20gXCIuLi9jb21wb25lbnRzL1Rhc2tcIjtcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuLi9jb21wb25lbnRzL1Rhc2svQWRkVGFza1wiO1xuXG5jb25zdCBUYXNrc0NvbnRhaW5lciA9ICh7dGFza3MsIHJlbW92ZVRhc2t9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEFsbFRhc2tzIHRhc2tzPXt0YXNrc30gcmVtb3ZlVGFzaz17cmVtb3ZlVGFza30gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgdGFza3M6IHN0YXRlLnRhc2tzLFxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICByZW1vdmVUYXNrOiAodGFzayk9PmRpc3BhdGNoKHJlbW92ZVRhc2sodGFzaykpXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRhc2tzQ29udGFpbmVyKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI2NDZlZmMwODcyOGE1NWZkN2Y0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVBhcmFtcyIsImdldFRhc2siLCJTaW5nbGVUYXNrIiwiX3JlZiIsImFsbFRhc2tzIiwiX3VzZVBhcmFtcyIsImlkIiwiZmlsdGVyZWRUYXNrcyIsInBhcnNlSW50IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJtYXAiLCJlbCIsImtleSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJBbGxUYXNrcyIsInRhc2tzIiwicmVtb3ZlVGFzayIsIkZyYWdtZW50IiwidG8iLCJjb25jYXQiLCJvbkNsaWNrIiwiY29ubmVjdCIsImFkZFRhc2siLCJBZGRUYXNrIiwiVGFza3NDb250YWluZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidGFzayJdLCJzb3VyY2VSb290IjoiIn0=