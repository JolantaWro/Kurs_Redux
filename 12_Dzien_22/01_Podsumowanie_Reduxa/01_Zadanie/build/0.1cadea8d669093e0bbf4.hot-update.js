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
/******/ 	__webpack_require__.h = () => ("5e0c1b3e021ea020a981")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xY2FkZWE4ZDY2OTA5M2UwYmJmNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVTtBQUNnQztBQUV0RDtBQUNjO0FBR3hDLElBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUVoQyxvQkFDSUgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNMLHdEQUFPLEVBQU1RLEtBQUssQ0FBSSxlQUN2QkgsMERBQUEsQ0FBQ0Msa0RBQUksRUFBTUUsS0FBSyxDQUFHLENBRXBCO0FBRVgsQ0FBQztBQUdELElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSztFQUFBLE9BQU07SUFDaENDLEtBQUssRUFBRUQsS0FBSyxDQUFDRSxPQUFPLENBQUNELEtBQUs7SUFDMUJFLFVBQVUsRUFBRUgsS0FBSyxDQUFDRSxPQUFPLENBQUNDLFVBQVU7SUFDcENDLElBQUksRUFBRUosS0FBSyxDQUFDSTtFQUNoQixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQ3RDZixZQUFZLEVBQUUsU0FBQUEsYUFBQTtNQUFBLE9BQU1lLFFBQVEsQ0FBQ2YsNERBQVksRUFBRSxDQUFDO0lBQUE7SUFDNUNDLFdBQVcsRUFBRSxTQUFBQSxZQUFBO01BQUEsT0FBTWMsUUFBUSxDQUFDZCwyREFBVyxFQUFFLENBQUM7SUFBQTtJQUMxQ2UsSUFBSSxFQUFFLFNBQUFBLEtBQUE7TUFBQSxPQUFNRCxRQUFRLENBQUNqQix1REFBTyxFQUFFLENBQUM7SUFBQTtJQUMvQm1CLE1BQU0sRUFBRSxTQUFBQSxPQUFDQyxHQUFHO01BQUEsT0FBS0gsUUFBUSxDQUFDaEIsMERBQVUsQ0FBQ21CLEdBQUcsQ0FBQyxDQUFDO0lBQUE7RUFDOUMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZXRCLG9EQUFPLENBQUNZLGVBQWUsRUFBRU0sa0JBQWtCLENBQUMsQ0FBQ1YsZ0JBQWdCLENBQUM7Ozs7Ozs7O1VDakM3RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBDb3VudGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRlclwiO1xuaW1wb3J0IHthZGRJdGVtLCByZW1vdmVJdGVtLCBzdGFydENvdW50ZXIsIHN0b3BDb3VudGVyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaXN0fSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XG5cblxuY29uc3QgQ291bnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDb3VudGVyIHsgLi4ucHJvcHN9IC8+XG4gICAgICAgICAgICA8TGlzdCB7IC4uLnByb3BzfS8+XG4gICAgICAgICAgICBcbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHZhbHVlOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcbiAgICBsaXN0OiBzdGF0ZS5saXN0LFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBzdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBzdG9wQ291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RvcENvdW50ZXIoKSksXG4gICAgc2F2ZTogKCkgPT4gZGlzcGF0Y2goYWRkSXRlbSgpKSxcbiAgICByZW1vdmU6IChpZHgpID0+IGRpc3BhdGNoKHJlbW92ZUl0ZW0oaWR4KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlckNvbnRhaW5lcik7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVlMGMxYjNlMDIxZWEwMjBhOTgxXCIpIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJDb3VudGVyIiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJzdGFydENvdW50ZXIiLCJzdG9wQ291bnRlciIsIlJlYWN0IiwiTGlzdCIsIkNvdW50ZXJDb250YWluZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsImxpc3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNhdmUiLCJyZW1vdmUiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9