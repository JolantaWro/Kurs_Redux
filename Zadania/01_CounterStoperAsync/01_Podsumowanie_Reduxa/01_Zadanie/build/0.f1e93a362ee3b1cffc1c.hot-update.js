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
  // const { number } = useParams();
  //
  // useEffect(() => {
  //     updateStartingValue(parseInt(number, 10))
  // }, [number]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_1__.Counter, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(CounterContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e0bdebd1b014e7f1ec19")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMWU5M2EzNjJlZTNiMWNmZmMxYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNVO0FBQ2E7QUFFN0QsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLO0VBQUEsT0FBTTtJQUNoQ0MsS0FBSyxFQUFFRCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0QsS0FBSztJQUMxQkUsVUFBVSxFQUFFSCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0M7RUFDOUIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxRQUFRO0VBQUEsT0FBTTtJQUN0Q1IsWUFBWSxFQUFFLFNBQUFBLGFBQUE7TUFBQSxPQUFNUSxRQUFRLENBQUNSLDREQUFZLEVBQUUsQ0FBQztJQUFBO0lBQzVDQyxXQUFXLEVBQUUsU0FBQUEsWUFBQTtNQUFBLE9BQU1PLFFBQVEsQ0FBQ1AsMkRBQVcsRUFBRSxDQUFDO0lBQUE7RUFDOUMsQ0FBQztBQUFBLENBQUM7QUFFd0I7QUFFMUIsSUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsS0FBSyxFQUFLO0VBQ2hDO0VBQ0o7RUFDQTtFQUNBO0VBQ0E7O0VBRUksb0JBQ0lGLDBEQUFBLDJCQUNJQSwwREFBQSxDQUFDVix3REFBTyxFQUFLWSxLQUFLLENBQUcsQ0FDbkI7QUFFZCxDQUFDO0FBRUQsaUVBQWViLG9EQUFPLENBQUNJLGVBQWUsRUFBRUssa0JBQWtCLENBQUMsQ0FBQ0csZ0JBQWdCLENBQUM7Ozs7Ozs7O1VDOUI3RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBDb3VudGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRlclwiO1xuaW1wb3J0IHsgc3RhcnRDb3VudGVyLCBzdG9wQ291bnRlciB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB2YWx1ZTogc3RhdGUuY291bnRlci52YWx1ZSxcbiAgICBpc0NvdW50aW5nOiBzdGF0ZS5jb3VudGVyLmlzQ291bnRpbmcsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIHN0YXJ0Q291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RhcnRDb3VudGVyKCkpLFxuICAgIHN0b3BDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdG9wQ291bnRlcigpKSxcbn0pO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb3VudGVyQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gICAgLy8gY29uc3QgeyBudW1iZXIgfSA9IHVzZVBhcmFtcygpO1xuLy9cbi8vIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgdXBkYXRlU3RhcnRpbmdWYWx1ZShwYXJzZUludChudW1iZXIsIDEwKSlcbi8vIH0sIFtudW1iZXJdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q291bnRlciB7Li4ucHJvcHN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvdW50ZXJDb250YWluZXIpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTBiZGViZDFiMDE0ZTdmMWVjMTlcIikiXSwibmFtZXMiOlsiY29ubmVjdCIsIkNvdW50ZXIiLCJzdGFydENvdW50ZXIiLCJzdG9wQ291bnRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiUmVhY3QiLCJDb3VudGVyQ29udGFpbmVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==