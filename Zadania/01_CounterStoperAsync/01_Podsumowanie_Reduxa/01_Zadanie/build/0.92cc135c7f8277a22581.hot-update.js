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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CounterContainer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1cadea8d669093e0bbf4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MmNjMTM1YzdmODI3N2EyMjU4MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVTtBQUNnQztBQUV0RDtBQUNjO0FBR3hDLElBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUVoQyxvQkFDSUgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNMLHdEQUFPLEVBQU1RLEtBQUssQ0FBSSxlQUN2QkgsMERBQUEsQ0FBQ0Msa0RBQUksRUFBTUUsS0FBSyxDQUFHLENBRXBCO0FBRVgsQ0FBQztBQUdELElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSztFQUFBLE9BQU07SUFDaENDLEtBQUssRUFBRUQsS0FBSyxDQUFDRSxPQUFPLENBQUNELEtBQUs7SUFDMUJFLFVBQVUsRUFBRUgsS0FBSyxDQUFDRSxPQUFPLENBQUNDLFVBQVU7SUFDcENDLElBQUksRUFBRUosS0FBSyxDQUFDSTtFQUNoQixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFFBQVE7RUFBQSxPQUFNO0lBQ3RDZixZQUFZLEVBQUUsU0FBQUEsYUFBQTtNQUFBLE9BQU1lLFFBQVEsQ0FBQ2YsNERBQVksRUFBRSxDQUFDO0lBQUE7SUFDNUNDLFdBQVcsRUFBRSxTQUFBQSxZQUFBO01BQUEsT0FBTWMsUUFBUSxDQUFDZCwyREFBVyxFQUFFLENBQUM7SUFBQTtJQUMxQ2UsSUFBSSxFQUFFLFNBQUFBLEtBQUE7TUFBQSxPQUFNRCxRQUFRLENBQUNqQix1REFBTyxFQUFFLENBQUM7SUFBQTtJQUMvQm1CLE1BQU0sRUFBRSxTQUFBQSxPQUFDQyxHQUFHO01BQUEsT0FBS0gsUUFBUSxDQUFDaEIsMERBQVUsQ0FBQ21CLEdBQUcsQ0FBQyxDQUFDO0lBQUE7RUFDOUMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZWQsZ0JBQWdCOzs7Ozs7OztVQ2pDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZXJcIjtcbmltcG9ydCB7YWRkSXRlbSwgcmVtb3ZlSXRlbSwgc3RhcnRDb3VudGVyLCBzdG9wQ291bnRlcn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlzdH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFwiO1xuXG5cbmNvbnN0IENvdW50ZXJDb250YWluZXIgPSAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q291bnRlciB7IC4uLnByb3BzfSAvPlxuICAgICAgICAgICAgPExpc3QgeyAuLi5wcm9wc30vPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB2YWx1ZTogc3RhdGUuY291bnRlci52YWx1ZSxcbiAgICBpc0NvdW50aW5nOiBzdGF0ZS5jb3VudGVyLmlzQ291bnRpbmcsXG4gICAgbGlzdDogc3RhdGUubGlzdCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgc3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdGFydENvdW50ZXIoKSksXG4gICAgc3RvcENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0b3BDb3VudGVyKCkpLFxuICAgIHNhdmU6ICgpID0+IGRpc3BhdGNoKGFkZEl0ZW0oKSksXG4gICAgcmVtb3ZlOiAoaWR4KSA9PiBkaXNwYXRjaChyZW1vdmVJdGVtKGlkeCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJDb250YWluZXI7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFjYWRlYThkNjY5MDkzZTBiYmY0XCIpIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJDb3VudGVyIiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJzdGFydENvdW50ZXIiLCJzdG9wQ291bnRlciIsIlJlYWN0IiwiTGlzdCIsIkNvdW50ZXJDb250YWluZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjb3VudGVyIiwiaXNDb3VudGluZyIsImxpc3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNhdmUiLCJyZW1vdmUiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9