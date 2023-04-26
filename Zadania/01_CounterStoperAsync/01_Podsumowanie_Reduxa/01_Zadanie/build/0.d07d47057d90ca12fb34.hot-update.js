"use strict";
self["webpackHotUpdatees6_react"](0,{

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);





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
    },
    setNewValue: function setNewValue(value) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.setValue)(value));
    }
  };
};
var CounterContainer = function CounterContainer(props) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),
    number = _useParams.number;
  if (number) {
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
      props.setNewValue(parseInt(number));
    }, [number]);
  }

  // useEffect(() => {
  //     props.setNewValue(parseInt(number))
  // }, [number]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_1__.Counter, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(CounterContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6effbe6c1e2feedccf8e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMDdkNDcwNTdkOTBjYTEyZmIzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVTtBQUNxQjtBQUM5QjtBQUNJO0FBRTNDLElBQU1RLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSztFQUFBLE9BQU07SUFDaENDLEtBQUssRUFBRUQsS0FBSyxDQUFDRSxPQUFPLENBQUNELEtBQUs7SUFDMUJFLFVBQVUsRUFBRUgsS0FBSyxDQUFDRSxPQUFPLENBQUNDO0VBQzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSUMsUUFBUTtFQUFBLE9BQU07SUFDdENYLFlBQVksRUFBRSxTQUFBQSxhQUFBO01BQUEsT0FBTVcsUUFBUSxDQUFDWCw0REFBWSxFQUFFLENBQUM7SUFBQTtJQUM1Q0MsV0FBVyxFQUFFLFNBQUFBLFlBQUE7TUFBQSxPQUFNVSxRQUFRLENBQUNWLDJEQUFXLEVBQUUsQ0FBQztJQUFBO0lBQzFDVyxXQUFXLEVBQUUsU0FBQUEsWUFBQ0wsS0FBSztNQUFBLE9BQUlJLFFBQVEsQ0FBQ1osd0RBQVEsQ0FBQ1EsS0FBSyxDQUFDLENBQUM7SUFBQTtFQUNwRCxDQUFDO0FBQUEsQ0FBQztBQUlGLElBQU1NLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUNoQyxJQUFBQyxVQUFBLEdBQW1CWCwyREFBUyxFQUFFO0lBQXRCWSxNQUFNLEdBQUFELFVBQUEsQ0FBTkMsTUFBTTtFQUVkLElBQUdBLE1BQU0sRUFBRTtJQUNQYixnREFBUyxDQUFDLFlBQU07TUFDWlcsS0FBSyxDQUFDRixXQUFXLENBQUNLLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxFQUFFLENBQUNBLE1BQU0sQ0FBQyxDQUFDO0VBQ2hCOztFQUdBO0VBQ0E7RUFDQTs7RUFFQSxvQkFDSWQsMERBQUEsMkJBQ0lBLDBEQUFBLENBQUNKLHdEQUFPLEVBQUtnQixLQUFLLENBQUcsQ0FDbkI7QUFFZCxDQUFDO0FBRUQsaUVBQWVqQixvREFBTyxDQUFDUSxlQUFlLEVBQUVLLGtCQUFrQixDQUFDLENBQUNHLGdCQUFnQixDQUFDOzs7Ozs7OztVQ3hDN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZXJcIjtcbmltcG9ydCB7c2V0VmFsdWUsIHN0YXJ0Q291bnRlciwgc3RvcENvdW50ZXJ9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdmFsdWU6IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBzdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBzdG9wQ291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RvcENvdW50ZXIoKSksXG4gICAgc2V0TmV3VmFsdWU6ICh2YWx1ZSk9PiBkaXNwYXRjaChzZXRWYWx1ZSh2YWx1ZSkpXG59KTtcblxuXG5cbmNvbnN0IENvdW50ZXJDb250YWluZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG51bWJlciB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgICBpZihudW1iZXIpIHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIHByb3BzLnNldE5ld1ZhbHVlKHBhcnNlSW50KG51bWJlcikpXG4gICAgICAgIH0sIFtudW1iZXJdKTtcbiAgICB9XG5cblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIHByb3BzLnNldE5ld1ZhbHVlKHBhcnNlSW50KG51bWJlcikpXG4gICAgLy8gfSwgW251bWJlcl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDb3VudGVyIHsuLi5wcm9wc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlckNvbnRhaW5lcik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZWZmYmU2YzFlMmZlZWRjY2Y4ZVwiKSJdLCJuYW1lcyI6WyJjb25uZWN0IiwiQ291bnRlciIsInNldFZhbHVlIiwic3RhcnRDb3VudGVyIiwic3RvcENvdW50ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2V0TmV3VmFsdWUiLCJDb3VudGVyQ29udGFpbmVyIiwicHJvcHMiLCJfdXNlUGFyYW1zIiwibnVtYmVyIiwicGFyc2VJbnQiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==