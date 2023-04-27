"use strict";
self["webpackHotUpdatees6_react"](0,{

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
    }, "Nazwa: ", el.title, "Opis: ", el.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return removeTask(el);
      }
    }, "Usu\u0144"));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllTasks);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("43e073537273a3d8626c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNjQ2ZWZjMDg3MjhhNTVmZDdmNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDWTtBQUd0QyxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQUMsSUFBQSxFQUE0QjtFQUFBLElBQXZCQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztJQUFFQyxVQUFVLEdBQUFGLElBQUEsQ0FBVkUsVUFBVTtFQUVoQyxvQkFDSUwsMERBQUEsQ0FBQUEsdURBQUEsUUFDS0ksS0FBSyxDQUFDSSxNQUFNLEtBQUssQ0FBQyxpQkFBSVIsMERBQUE7SUFBS1MsU0FBUyxFQUFDO0VBQWEsR0FBQyxpQkFBWSxDQUFNLEVBR3JFTCxLQUFLLENBQUNJLE1BQU0sR0FBRyxDQUFDLElBQUlKLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFVBQUFDLEVBQUU7SUFBQSxvQkFBS1gsMERBQUEsQ0FBQUEsdURBQUEscUJBQ2xDQSwwREFBQSxDQUFDQyxrREFBSTtNQUFDVyxFQUFFLE1BQUFDLE1BQUEsQ0FBTUYsRUFBRSxDQUFDRyxFQUFFLENBQUc7TUFBQ0MsR0FBRyxFQUFFSixFQUFFLENBQUNHO0lBQUcsR0FBQyxTQUFPLEVBQUNILEVBQUUsQ0FBQ0ssS0FBSyxFQUFDLFFBQU0sRUFBQ0wsRUFBRSxDQUFDTSxXQUFXLENBQVEsZUFDakZqQiwwREFBQTtNQUFRa0IsT0FBTyxFQUFFLFNBQUFBLFFBQUE7UUFBQSxPQUFNYixVQUFVLENBQUNNLEVBQUUsQ0FBQztNQUFBO0lBQUMsR0FBQyxXQUFJLENBQVMsQ0FBRztFQUFBLENBQzFELENBQUMsQ0FDSDtBQUVYLENBQUM7QUFFRCxpRUFBZVQsUUFBUTs7Ozs7Ozs7VUNuQnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Rhc2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5cbmNvbnN0IEFsbFRhc2tzID0gKHt0YXNrcywgcmVtb3ZlVGFza30pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7dGFza3MubGVuZ3RoID09PSAwICYmIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYmxvY2tcIj5CcmFrIHdwaXPDs3chPC9kaXY+fVxuXG5cbiAgICAgICAgICAgIHt0YXNrcy5sZW5ndGggPiAwICYmIHRhc2tzLm1hcChlbCA9PiAoPD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17YC8ke2VsLmlkfWB9IGtleT17ZWwuaWR9Pk5hendhOiB7ZWwudGl0bGV9T3Bpczoge2VsLmRlc2NyaXB0aW9ufTwvTGluaz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRhc2soZWwpfT5Vc3XFhDwvYnV0dG9uPjwvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxUYXNrczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0M2UwNzM1MzcyNzNhM2Q4NjI2Y1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJBbGxUYXNrcyIsIl9yZWYiLCJ0YXNrcyIsInJlbW92ZVRhc2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJtYXAiLCJlbCIsInRvIiwiY29uY2F0IiwiaWQiLCJrZXkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=