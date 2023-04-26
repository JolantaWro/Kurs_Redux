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
/******/ 	__webpack_require__.h = () => ("16b4330726dde3b354af")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZjg2YzA4Y2YwZDg2Y2MwOWIxNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVTtBQUNnQztBQUV0RDtBQUNjO0FBQ0c7QUFHM0MsSUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsS0FBSyxFQUFLO0VBSWhDLG9CQUNJSiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0wsd0RBQU8sRUFBTVMsS0FBSyxDQUFJLGVBQ3ZCSiwwREFBQSxDQUFDQyxrREFBSSxFQUFNRyxLQUFLLENBQUcsQ0FFcEI7QUFFWCxDQUFDO0FBR0QsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLO0VBQUEsT0FBTTtJQUNoQ0MsS0FBSyxFQUFFRCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0QsS0FBSztJQUMxQkUsVUFBVSxFQUFFSCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0MsVUFBVTtJQUNwQ0MsSUFBSSxFQUFFSixLQUFLLENBQUNJO0VBQ2hCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSUMsUUFBUTtFQUFBLE9BQU07SUFDdENoQixZQUFZLEVBQUUsU0FBQUEsYUFBQTtNQUFBLE9BQU1nQixRQUFRLENBQUNoQiw0REFBWSxFQUFFLENBQUM7SUFBQTtJQUM1Q0MsV0FBVyxFQUFFLFNBQUFBLFlBQUE7TUFBQSxPQUFNZSxRQUFRLENBQUNmLDJEQUFXLEVBQUUsQ0FBQztJQUFBO0lBQzFDZ0IsSUFBSSxFQUFFLFNBQUFBLEtBQUE7TUFBQSxPQUFNRCxRQUFRLENBQUNsQix1REFBTyxFQUFFLENBQUM7SUFBQTtJQUMvQm9CLE1BQU0sRUFBRSxTQUFBQSxPQUFDQyxHQUFHO01BQUEsT0FBS0gsUUFBUSxDQUFDakIsMERBQVUsQ0FBQ29CLEdBQUcsQ0FBQyxDQUFDO0lBQUE7RUFDOUMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZXZCLG9EQUFPLENBQUNhLGVBQWUsRUFBRU0sa0JBQWtCLENBQUMsQ0FBQ1YsZ0JBQWdCLENBQUM7Ozs7Ozs7O1VDcEM3RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBDb3VudGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRlclwiO1xuaW1wb3J0IHthZGRJdGVtLCByZW1vdmVJdGVtLCBzdGFydENvdW50ZXIsIHN0b3BDb3VudGVyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaXN0fSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuXG5jb25zdCBDb3VudGVyQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDb3VudGVyIHsgLi4ucHJvcHN9IC8+XG4gICAgICAgICAgICA8TGlzdCB7IC4uLnByb3BzfS8+XG4gICAgICAgICAgICBcbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHZhbHVlOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcbiAgICBsaXN0OiBzdGF0ZS5saXN0LFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBzdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBzdG9wQ291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RvcENvdW50ZXIoKSksXG4gICAgc2F2ZTogKCkgPT4gZGlzcGF0Y2goYWRkSXRlbSgpKSxcbiAgICByZW1vdmU6IChpZHgpID0+IGRpc3BhdGNoKHJlbW92ZUl0ZW0oaWR4KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlckNvbnRhaW5lcik7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE2YjQzMzA3MjZkZGUzYjM1NGFmXCIpIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJDb3VudGVyIiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJzdGFydENvdW50ZXIiLCJzdG9wQ291bnRlciIsIlJlYWN0IiwiTGlzdCIsInVzZVBhcmFtcyIsIkNvdW50ZXJDb250YWluZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsImxpc3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNhdmUiLCJyZW1vdmUiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9