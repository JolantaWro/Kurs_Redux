"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _redux_actions_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _components_Products_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(105);





var ProductsContainer = function ProductsContainer(_ref) {
  var allProducts = _ref.allProducts,
    onProductAdd = _ref.onProductAdd;
  var handleNewProduct = function handleNewProduct(value) {
    onProductAdd(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"], {
    allProducts: allProducts
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: state.products
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onProductAdd: function onProductAdd(value) {
      return dispatch((0,_redux_actions_products__WEBPACK_IMPORTED_MODULE_3__.addProduct)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(ProductsContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("011e4b82a6f83c5c6f49")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YzJkM2U2NmI5OTcxOGNjY2M3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDdUI7QUFDYjtBQUNpQjtBQUNEO0FBRXBELElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUFDLElBQUEsRUFBcUM7RUFBQSxJQUFoQ0MsV0FBVyxHQUFBRCxJQUFBLENBQVhDLFdBQVc7SUFBRUMsWUFBWSxHQUFBRixJQUFBLENBQVpFLFlBQVk7RUFDakQsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsS0FBSyxFQUFLO0lBQ2hDRixZQUFZLENBQUNFLEtBQUssQ0FBQztFQUN2QixDQUFDO0VBR0Qsb0JBQ0lWLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDQyw0REFBVztJQUFDTSxXQUFXLEVBQUVBO0VBQVksRUFBRyxDQUUxQztBQUVYLENBQUM7QUFFRCxJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCUCxXQUFXLEVBQUVPLEtBQUssQ0FBQ0M7RUFDdkIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ1QsWUFBWSxFQUFFLFNBQUFBLGFBQUNFLEtBQUs7TUFBQSxPQUFLTyxRQUFRLENBQUNkLG1FQUFVLENBQUNPLEtBQUssQ0FBQyxDQUFDO0lBQUE7RUFDeEQsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZVIsb0RBQU8sQ0FBQ1csZUFBZSxFQUFFRyxrQkFBa0IsQ0FBQyxDQUFDWCxpQkFBaUIsQ0FBQzs7Ozs7Ozs7VUM1QjlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Qcm9kdWN0c0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2FkZFByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RzXCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzL0FkZFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdHNDb250YWluZXIgPSAoe2FsbFByb2R1Y3RzLCBvblByb2R1Y3RBZGQgfSkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlTmV3UHJvZHVjdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIG9uUHJvZHVjdEFkZCh2YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QWxsUHJvZHVjdHMgYWxsUHJvZHVjdHM9e2FsbFByb2R1Y3RzfSAvPlxyXG4gICAgICAgICAgICB7Lyo8QWRkUHJvZHVjdCBvblNhdmVQcm9kdWN0PXtoYW5kbGVOZXdQcm9kdWN0fSAvPiovfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBhbGxQcm9kdWN0czogc3RhdGUucHJvZHVjdHNcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgb25Qcm9kdWN0QWRkOiAodmFsdWUpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QodmFsdWUpKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2R1Y3RzQ29udGFpbmVyKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDExZTRiODJhNmY4M2M1YzZmNDlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJBbGxQcm9kdWN0cyIsImNvbm5lY3QiLCJhZGRQcm9kdWN0IiwiQWRkUHJvZHVjdCIsIlByb2R1Y3RzQ29udGFpbmVyIiwiX3JlZiIsImFsbFByb2R1Y3RzIiwib25Qcm9kdWN0QWRkIiwiaGFuZGxlTmV3UHJvZHVjdCIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9kdWN0cyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==