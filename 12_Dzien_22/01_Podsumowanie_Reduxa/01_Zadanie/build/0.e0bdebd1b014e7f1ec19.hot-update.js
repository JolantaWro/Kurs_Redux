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
    }
  };
};

var CounterContainer = function CounterContainer(props) {
  var _useParams = useParams(),
    number = _useParams.number;
  useEffect(function () {
    updateStartingValue(parseInt(number, 10));
  }, [number]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_1__.Counter, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(CounterContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f4d3229170a086c5456")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMGJkZWJkMWIwMTRlN2YxZWMxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNVO0FBQ2E7QUFFN0QsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLO0VBQUEsT0FBTTtJQUNoQ0MsS0FBSyxFQUFFRCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0QsS0FBSztJQUMxQkUsVUFBVSxFQUFFSCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0M7RUFDOUIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxRQUFRO0VBQUEsT0FBTTtJQUN0Q1IsWUFBWSxFQUFFLFNBQUFBLGFBQUE7TUFBQSxPQUFNUSxRQUFRLENBQUNSLDREQUFZLEVBQUUsQ0FBQztJQUFBO0lBQzVDQyxXQUFXLEVBQUUsU0FBQUEsWUFBQTtNQUFBLE9BQU1PLFFBQVEsQ0FBQ1AsMkRBQVcsRUFBRSxDQUFDO0lBQUE7RUFDOUMsQ0FBQztBQUFBLENBQUM7QUFFd0I7QUFFMUIsSUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsS0FBSyxFQUFLO0VBQ2hDLElBQUFDLFVBQUEsR0FBbUJDLFNBQVMsRUFBRTtJQUF0QkMsTUFBTSxHQUFBRixVQUFBLENBQU5FLE1BQU07RUFHZEMsU0FBUyxDQUFDLFlBQU07SUFDWkMsbUJBQW1CLENBQUNDLFFBQVEsQ0FBQ0gsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQzdDLENBQUMsRUFBRSxDQUFDQSxNQUFNLENBQUMsQ0FBQztFQUVaLG9CQUNJTCwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ1Ysd0RBQU8sRUFBS1ksS0FBSyxDQUFHLENBQ25CO0FBRWQsQ0FBQztBQUVELGlFQUFlYixvREFBTyxDQUFDSSxlQUFlLEVBQUVLLGtCQUFrQixDQUFDLENBQUNHLGdCQUFnQixDQUFDOzs7Ozs7OztVQy9CN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZXJcIjtcbmltcG9ydCB7IHN0YXJ0Q291bnRlciwgc3RvcENvdW50ZXIgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdmFsdWU6IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBzdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBzdG9wQ291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RvcENvdW50ZXIoKSksXG59KTtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ291bnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbnVtYmVyIH0gPSB1c2VQYXJhbXMoKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdXBkYXRlU3RhcnRpbmdWYWx1ZShwYXJzZUludChudW1iZXIsIDEwKSlcbiAgICB9LCBbbnVtYmVyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENvdW50ZXIgey4uLnByb3BzfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3VudGVyQ29udGFpbmVyKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFmNGQzMjI5MTcwYTA4NmM1NDU2XCIpIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJDb3VudGVyIiwic3RhcnRDb3VudGVyIiwic3RvcENvdW50ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiY291bnRlciIsImlzQ291bnRpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIlJlYWN0IiwiQ291bnRlckNvbnRhaW5lciIsInByb3BzIiwiX3VzZVBhcmFtcyIsInVzZVBhcmFtcyIsIm51bWJlciIsInVzZUVmZmVjdCIsInVwZGF0ZVN0YXJ0aW5nVmFsdWUiLCJwYXJzZUludCIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9