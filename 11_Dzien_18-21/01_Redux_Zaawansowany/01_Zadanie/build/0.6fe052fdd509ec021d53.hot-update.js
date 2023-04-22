"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31);
/* harmony import */ var _containers_Products_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _containers_Products_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
/* harmony import */ var _containers_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(101);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(113);
/* harmony import */ var _containers_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(117);
/* harmony import */ var _containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(119);











var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Home__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Products__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Add__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(118);
/* harmony import */ var _redux_actions_recipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(105);




var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: state.products
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onRecipeAdd: function onRecipeAdd(value) {
      return dispatch((0,_redux_actions_recipes__WEBPACK_IMPORTED_MODULE_3__.addRecipe)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_components_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c7c399a0b3825eb49f06")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZmUwNTJmZGQ1MDllYzAyMWQ1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0k7QUFDZ0M7QUFDSjtBQUNOO0FBQ2E7QUFDOUI7QUFDRTtBQUNDO0FBQ1k7QUFDSztBQUV2RCxJQUFNYSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQTtFQUFBLG9CQUNOYiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ1MsaURBQVE7SUFBQ0QsS0FBSyxFQUFFQSxvREFBS0E7RUFBQyxnQkFDbkJSLDBEQUFBLENBQUNFLDREQUFhLHFCQUNWRiwwREFBQSxDQUFDQywrQ0FBTSxxQkFDSEQsMERBQUEsQ0FBQ0kscURBQU0scUJBQ0hKLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNhLEtBQUs7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFbEIsMERBQUEsQ0FBQ1Usd0RBQUk7RUFBSSxFQUFHLGVBQzNDViwwREFBQSxDQUFDRyxvREFBSztJQUFDYyxJQUFJLEVBQUMsV0FBVztJQUFDQyxPQUFPLGVBQUVsQiwwREFBQSxDQUFDSyxxRUFBVztFQUFJLEVBQUcsZUFDcERMLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNjLElBQUksRUFBQyxlQUFlO0lBQUNDLE9BQU8sZUFBRWxCLDBEQUFBLENBQUNPLDBFQUFhO0VBQUcsRUFBRyxlQUN6RFAsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2MsSUFBSSxFQUFDLGVBQWU7SUFBQ0MsT0FBTyxlQUFFbEIsMERBQUEsQ0FBQ00sZ0VBQVU7RUFBSSxFQUFHLGVBQ3ZETiwwREFBQSxDQUFDRyxvREFBSztJQUFDYyxJQUFJLEVBQUMsY0FBYztJQUFDQyxPQUFPLGVBQUVsQiwwREFBQSxDQUFDVywrREFBUztFQUFJLEVBQUcsZUFDckRYLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNjLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRWxCLDBEQUFBLENBQUNZLG1FQUFVO0VBQUksRUFBRyxDQUM3QyxDQUNKLENBQ0csQ0FDVCxDQUNaO0FBQUEsQ0FDTjtBQUVELGlFQUFlQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JpQjtBQUNWO0FBQzJCO0FBQ0M7QUFHdEQsSUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkMsV0FBVyxFQUFFRCxLQUFLLENBQUNFO0VBQ3ZCLENBQUM7QUFBQSxDQUFDO0FBQ0YsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENDLFdBQVcsRUFBRSxTQUFBQSxZQUFDQyxLQUFLO01BQUEsT0FBS0YsUUFBUSxDQUFDTixpRUFBUyxDQUFDUSxLQUFLLENBQUMsQ0FBQztJQUFBO0VBQ3RELENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVULG9EQUFPLENBQUNFLGVBQWUsRUFBRUksa0JBQWtCLENBQUMsQ0FBQ2QsK0RBQVMsQ0FBQzs7Ozs7Ozs7VUNidEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9SZWNpcGVzL0FkZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvUHJvZHVjdHNcIjtcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzL0FkZFwiO1xuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29udGFpbmVycy9Ib21lXCI7XG5pbXBvcnQgQWRkUmVjaXBlIGZyb20gXCIuLi9jb250YWluZXJzL1JlY2lwZXMvQWRkXCI7XG5pbXBvcnQgQWxsUmVjaXBlcyBmcm9tIFwiLi4vY29udGFpbmVycy9SZWNpcGVzL1JlY2lwZXNcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IChcbiAgICA8PlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCIgZWxlbWVudD17PEFsbFByb2R1Y3RzIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvOmlkXCIgZWxlbWVudD17PFNpbmdsZVByb2R1Y3QvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzL2FkZFwiIGVsZW1lbnQ9ezxBZGRQcm9kdWN0IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy9hZGRcIiBlbGVtZW50PXs8QWRkUmVjaXBlIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlc1wiIGVsZW1lbnQ9ezxBbGxSZWNpcGVzIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SZWNpcGVzL0FkZFwiO1xuaW1wb3J0IHthZGRSZWNpcGV9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3JlY2lwZXNcIjtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGFsbFByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0c1xufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIG9uUmVjaXBlQWRkOiAodmFsdWUpID0+IGRpc3BhdGNoKGFkZFJlY2lwZSh2YWx1ZSkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkUmVjaXBlKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjN2MzOTlhMGIzODI1ZWI0OWYwNlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkFsbFByb2R1Y3RzIiwiQWRkUHJvZHVjdCIsIlNpbmdsZVByb2R1Y3QiLCJzdG9yZSIsIlByb3ZpZGVyIiwiSG9tZSIsIkFkZFJlY2lwZSIsIkFsbFJlY2lwZXMiLCJNYWluIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZXhhY3QiLCJwYXRoIiwiZWxlbWVudCIsImNvbm5lY3QiLCJhZGRSZWNpcGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImFsbFByb2R1Y3RzIiwicHJvZHVjdHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uUmVjaXBlQWRkIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9