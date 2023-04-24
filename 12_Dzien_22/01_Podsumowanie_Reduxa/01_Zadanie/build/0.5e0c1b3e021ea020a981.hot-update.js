"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);





var CounterContainer = function CounterContainer(props) {
  var _useParams = useParams(),
    id = _useParams.id;
  console.log(id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_1__.Counter, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_List__WEBPACK_IMPORTED_MODULE_4__.List, props));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    value: state.counter.value,
    isCounting: state.counter.isCounting,
    list: state.list
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
    save: function save() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.addItem)());
    },
    remove: function remove(idx) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.removeItem)(idx));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(CounterContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f74d30e974ecb522c39e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZTBjMWIzZTAyMWVhMDIwYTk4MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVTtBQUNnQztBQUV0RDtBQUNjO0FBR3hDLElBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUVoQyxJQUFBQyxVQUFBLEdBQWVDLFNBQVMsRUFBRTtJQUFsQkMsRUFBRSxHQUFBRixVQUFBLENBQUZFLEVBQUU7RUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEVBQUUsQ0FBQztFQUVmLG9CQUNJTiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0wsd0RBQU8sRUFBTVEsS0FBSyxDQUFJLGVBQ3ZCSCwwREFBQSxDQUFDQyxrREFBSSxFQUFNRSxLQUFLLENBQUcsQ0FFcEI7QUFFWCxDQUFDO0FBR0QsSUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLO0VBQUEsT0FBTTtJQUNoQ0MsS0FBSyxFQUFFRCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0QsS0FBSztJQUMxQkUsVUFBVSxFQUFFSCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0MsVUFBVTtJQUNwQ0MsSUFBSSxFQUFFSixLQUFLLENBQUNJO0VBQ2hCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSUMsUUFBUTtFQUFBLE9BQU07SUFDdENwQixZQUFZLEVBQUUsU0FBQUEsYUFBQTtNQUFBLE9BQU1vQixRQUFRLENBQUNwQiw0REFBWSxFQUFFLENBQUM7SUFBQTtJQUM1Q0MsV0FBVyxFQUFFLFNBQUFBLFlBQUE7TUFBQSxPQUFNbUIsUUFBUSxDQUFDbkIsMkRBQVcsRUFBRSxDQUFDO0lBQUE7SUFDMUNvQixJQUFJLEVBQUUsU0FBQUEsS0FBQTtNQUFBLE9BQU1ELFFBQVEsQ0FBQ3RCLHVEQUFPLEVBQUUsQ0FBQztJQUFBO0lBQy9Cd0IsTUFBTSxFQUFFLFNBQUFBLE9BQUNDLEdBQUc7TUFBQSxPQUFLSCxRQUFRLENBQUNyQiwwREFBVSxDQUFDd0IsR0FBRyxDQUFDLENBQUM7SUFBQTtFQUM5QyxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlM0Isb0RBQU8sQ0FBQ2lCLGVBQWUsRUFBRU0sa0JBQWtCLENBQUMsQ0FBQ2YsZ0JBQWdCLENBQUM7Ozs7Ozs7O1VDcEM3RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBDb3VudGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRlclwiO1xuaW1wb3J0IHthZGRJdGVtLCByZW1vdmVJdGVtLCBzdGFydENvdW50ZXIsIHN0b3BDb3VudGVyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaXN0fSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XG5cblxuY29uc3QgQ291bnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XG4gICAgY29uc29sZS5sb2coaWQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENvdW50ZXIgeyAuLi5wcm9wc30gLz5cbiAgICAgICAgICAgIDxMaXN0IHsgLi4ucHJvcHN9Lz5cbiAgICAgICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdmFsdWU6IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxuICAgIGxpc3Q6IHN0YXRlLmxpc3QsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIHN0YXJ0Q291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RhcnRDb3VudGVyKCkpLFxuICAgIHN0b3BDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdG9wQ291bnRlcigpKSxcbiAgICBzYXZlOiAoKSA9PiBkaXNwYXRjaChhZGRJdGVtKCkpLFxuICAgIHJlbW92ZTogKGlkeCkgPT4gZGlzcGF0Y2gocmVtb3ZlSXRlbShpZHgpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3VudGVyQ29udGFpbmVyKTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjc0ZDMwZTk3NGVjYjUyMmMzOWVcIikiXSwibmFtZXMiOlsiY29ubmVjdCIsIkNvdW50ZXIiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsInN0YXJ0Q291bnRlciIsInN0b3BDb3VudGVyIiwiUmVhY3QiLCJMaXN0IiwiQ291bnRlckNvbnRhaW5lciIsInByb3BzIiwiX3VzZVBhcmFtcyIsInVzZVBhcmFtcyIsImlkIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsImxpc3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNhdmUiLCJyZW1vdmUiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9