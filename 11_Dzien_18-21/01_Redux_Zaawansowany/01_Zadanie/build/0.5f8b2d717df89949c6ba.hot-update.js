"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);


var LastRecipes = function LastRecipes(_ref) {
  var lastRecipes = _ref.lastRecipes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ostatnie przepisy",
    theme: "is-primary",
    path: "recipes",
    iconName: "folder",
    listElements: lastRecipes
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastRecipes);

/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LastRecipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);
/* harmony import */ var _LastProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(116);



var Home = function Home(_ref) {
  var lastProducts = _ref.lastProducts,
    lastRecipes = _ref.lastRecipes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-one-third"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LastRecipes__WEBPACK_IMPORTED_MODULE_1__["default"], {
    lastRecipes: lastRecipes
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-one-third"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LastProducts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    lastProducts: lastProducts
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(114);
/* harmony import */ var _redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);
/* harmony import */ var _redux_selectors_selectorsRecipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(122);





var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: state.products,
    lastProducts: (0,_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3__.lastAddProducts)(state),
    lastRecipes: (0,_redux_selectors_selectorsRecipe__WEBPACK_IMPORTED_MODULE_4__.lastAddRecipes)(state)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Home__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastAddRecipes": () => (/* binding */ lastAddRecipes),
/* harmony export */   "recipesSelector": () => (/* binding */ recipesSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);

var recipesSelector = function recipesSelector(state) {
  return state.recipes;
};
var lastAddRecipes = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(recipesSelector, function (recipes) {
  return recipes.slice(-5);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c072df8195ac96aae51")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZjhiMmQ3MTdkZjg5OTQ5YzZiYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUc3QixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQUMsSUFBQSxFQUFzQjtFQUFBLElBQWpCQyxXQUFXLEdBQUFELElBQUEsQ0FBWEMsV0FBVztFQUMvQixvQkFDRUosMERBQUEsQ0FBQ0MsOENBQUs7SUFDSkssS0FBSyxFQUFDLG1CQUFtQjtJQUN6QkMsS0FBSyxFQUFDLFlBQVk7SUFDbEJDLElBQUksRUFBQyxTQUFTO0lBQ2RDLFFBQVEsRUFBQyxRQUFRO0lBQ2pCQyxZQUFZLEVBQUVOO0VBQVksRUFBRztBQUVuQyxDQUFDO0FBRUQsaUVBQWVGLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ2M7QUFDRTtBQUUxQyxJQUFNVSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQVQsSUFBQSxFQUFvQztFQUFBLElBQS9CVSxZQUFZLEdBQUFWLElBQUEsQ0FBWlUsWUFBWTtJQUFFVCxXQUFXLEdBQUFELElBQUEsQ0FBWEMsV0FBVztFQUN0QyxvQkFDRUosMERBQUE7SUFBS2MsU0FBUyxFQUFDO0VBQVMsZ0JBQ3RCZCwwREFBQTtJQUFLYyxTQUFTLEVBQUM7RUFBcUIsZ0JBQ2xDZCwwREFBQSxDQUFDRSxvREFBVztJQUFDRSxXQUFXLEVBQUVBO0VBQVksRUFBRSxDQUNwQyxlQUNOSiwwREFBQTtJQUFLYyxTQUFTLEVBQUM7RUFBcUIsZ0JBQ2xDZCwwREFBQSxDQUFDVyxxREFBWTtJQUFDRSxZQUFZLEVBQUVBO0VBQWEsRUFBRSxDQUN2QyxDQUNGO0FBR1YsQ0FBQztBQUVELGlFQUFlRCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCTztBQUNVO0FBQ0U7QUFDOEI7QUFDRjtBQUVsRSxJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCQyxXQUFXLEVBQUVELEtBQUssQ0FBQ0UsUUFBUTtJQUMzQlIsWUFBWSxFQUFFRyxrRkFBZSxDQUFDRyxLQUFLLENBQUM7SUFDcENmLFdBQVcsRUFBRWEsZ0ZBQWMsQ0FBQ0UsS0FBSztFQUNyQyxDQUFDO0FBQUEsQ0FBQztBQUdGLGlFQUFlSixvREFBTyxDQUFDRyxlQUFlLENBQUMsQ0FBQ04sd0RBQUksQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2JKO0FBR2xDLElBQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0osS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0ssT0FBTztBQUFBO0FBRzlDLElBQU1QLGNBQWMsR0FBR0ssd0RBQWMsQ0FDeENDLGVBQWUsRUFDZixVQUFDQyxPQUFPO0VBQUEsT0FBS0EsT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNqQzs7Ozs7Ozs7VUNURCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvSG9tZS9MYXN0UmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Ib21lLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNSZWNpcGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4uL1BhbmVsXCI7XG5cblxuY29uc3QgTGFzdFJlY2lwZXMgPSAoe2xhc3RSZWNpcGVzfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYW5lbFxuICAgICAgdGl0bGU9XCJPc3RhdG5pZSBwcnplcGlzeVwiXG4gICAgICB0aGVtZT1cImlzLXByaW1hcnlcIlxuICAgICAgcGF0aD1cInJlY2lwZXNcIlxuICAgICAgaWNvbk5hbWU9XCJmb2xkZXJcIlxuICAgICAgbGlzdEVsZW1lbnRzPXtsYXN0UmVjaXBlc30gLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RSZWNpcGVzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXN0UmVjaXBlcyBmcm9tIFwiLi9MYXN0UmVjaXBlc1wiO1xuaW1wb3J0IExhc3RQcm9kdWN0cyBmcm9tIFwiLi9MYXN0UHJvZHVjdHNcIjtcblxuY29uc3QgSG9tZSA9ICh7bGFzdFByb2R1Y3RzLCBsYXN0UmVjaXBlc30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiPlxuICAgICAgICA8TGFzdFJlY2lwZXMgbGFzdFJlY2lwZXM9e2xhc3RSZWNpcGVzfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiPlxuICAgICAgICA8TGFzdFByb2R1Y3RzIGxhc3RQcm9kdWN0cz17bGFzdFByb2R1Y3RzfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcbmltcG9ydCB7bGFzdEFkZFByb2R1Y3RzfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9yc1Byb2R1Y3RcIjtcbmltcG9ydCB7bGFzdEFkZFJlY2lwZXN9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzUmVjaXBlXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgYWxsUHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLFxuICAgIGxhc3RQcm9kdWN0czogbGFzdEFkZFByb2R1Y3RzKHN0YXRlKSxcbiAgICBsYXN0UmVjaXBlczogbGFzdEFkZFJlY2lwZXMoc3RhdGUpXG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSG9tZSk7IiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcblxuXG5leHBvcnQgY29uc3QgcmVjaXBlc1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUucmVjaXBlc1xuXG5cbmV4cG9ydCBjb25zdCBsYXN0QWRkUmVjaXBlcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHJlY2lwZXNTZWxlY3RvcixcbiAgICAocmVjaXBlcykgPT4gcmVjaXBlcy5zbGljZSgtNSlcbik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2MwNzJkZjgxOTVhYzk2YWFlNTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQYW5lbCIsIkxhc3RSZWNpcGVzIiwiX3JlZiIsImxhc3RSZWNpcGVzIiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwidGhlbWUiLCJwYXRoIiwiaWNvbk5hbWUiLCJsaXN0RWxlbWVudHMiLCJMYXN0UHJvZHVjdHMiLCJIb21lIiwibGFzdFByb2R1Y3RzIiwiY2xhc3NOYW1lIiwiY29ubmVjdCIsImxhc3RBZGRQcm9kdWN0cyIsImxhc3RBZGRSZWNpcGVzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhbGxQcm9kdWN0cyIsInByb2R1Y3RzIiwiY3JlYXRlU2VsZWN0b3IiLCJyZWNpcGVzU2VsZWN0b3IiLCJyZWNpcGVzIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9