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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92);






var CounterContainer = function CounterContainer(props) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
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
/******/ 	__webpack_require__.h = () => ("bf86c08cf0d86cc09b15")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNzRkMzBlOTc0ZWNiNTIyYzM5ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1U7QUFDZ0M7QUFFdEQ7QUFDYztBQUNHO0FBRzNDLElBQU1TLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUVoQyxJQUFBQyxVQUFBLEdBQWVILDJEQUFTLEVBQUU7SUFBbEJJLEVBQUUsR0FBQUQsVUFBQSxDQUFGQyxFQUFFO0VBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixFQUFFLENBQUM7RUFFZixvQkFDSU4sMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNMLHdEQUFPLEVBQU1TLEtBQUssQ0FBSSxlQUN2QkosMERBQUEsQ0FBQ0Msa0RBQUksRUFBTUcsS0FBSyxDQUFHLENBRXBCO0FBRVgsQ0FBQztBQUdELElBQU1PLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSztFQUFBLE9BQU07SUFDaENDLEtBQUssRUFBRUQsS0FBSyxDQUFDRSxPQUFPLENBQUNELEtBQUs7SUFDMUJFLFVBQVUsRUFBRUgsS0FBSyxDQUFDRSxPQUFPLENBQUNDLFVBQVU7SUFDcENDLElBQUksRUFBRUosS0FBSyxDQUFDSTtFQUNoQixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQ3RDcEIsWUFBWSxFQUFFLFNBQUFBLGFBQUE7TUFBQSxPQUFNb0IsUUFBUSxDQUFDcEIsNERBQVksRUFBRSxDQUFDO0lBQUE7SUFDNUNDLFdBQVcsRUFBRSxTQUFBQSxZQUFBO01BQUEsT0FBTW1CLFFBQVEsQ0FBQ25CLDJEQUFXLEVBQUUsQ0FBQztJQUFBO0lBQzFDb0IsSUFBSSxFQUFFLFNBQUFBLEtBQUE7TUFBQSxPQUFNRCxRQUFRLENBQUN0Qix1REFBTyxFQUFFLENBQUM7SUFBQTtJQUMvQndCLE1BQU0sRUFBRSxTQUFBQSxPQUFDQyxHQUFHO01BQUEsT0FBS0gsUUFBUSxDQUFDckIsMERBQVUsQ0FBQ3dCLEdBQUcsQ0FBQyxDQUFDO0lBQUE7RUFDOUMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZTNCLG9EQUFPLENBQUNpQixlQUFlLEVBQUVNLGtCQUFrQixDQUFDLENBQUNkLGdCQUFnQixDQUFDOzs7Ozs7OztVQ3JDN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZXJcIjtcbmltcG9ydCB7YWRkSXRlbSwgcmVtb3ZlSXRlbSwgc3RhcnRDb3VudGVyLCBzdG9wQ291bnRlcn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlzdH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFwiO1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cblxuY29uc3QgQ291bnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XG4gICAgY29uc29sZS5sb2coaWQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENvdW50ZXIgeyAuLi5wcm9wc30gLz5cbiAgICAgICAgICAgIDxMaXN0IHsgLi4ucHJvcHN9Lz5cbiAgICAgICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdmFsdWU6IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxuICAgIGxpc3Q6IHN0YXRlLmxpc3QsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIHN0YXJ0Q291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RhcnRDb3VudGVyKCkpLFxuICAgIHN0b3BDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdG9wQ291bnRlcigpKSxcbiAgICBzYXZlOiAoKSA9PiBkaXNwYXRjaChhZGRJdGVtKCkpLFxuICAgIHJlbW92ZTogKGlkeCkgPT4gZGlzcGF0Y2gocmVtb3ZlSXRlbShpZHgpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3VudGVyQ29udGFpbmVyKTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmY4NmMwOGNmMGQ4NmNjMDliMTVcIikiXSwibmFtZXMiOlsiY29ubmVjdCIsIkNvdW50ZXIiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsInN0YXJ0Q291bnRlciIsInN0b3BDb3VudGVyIiwiUmVhY3QiLCJMaXN0IiwidXNlUGFyYW1zIiwiQ291bnRlckNvbnRhaW5lciIsInByb3BzIiwiX3VzZVBhcmFtcyIsImlkIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsImxpc3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNhdmUiLCJyZW1vdmUiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9