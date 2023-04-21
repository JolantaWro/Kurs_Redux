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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Products_Add__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSaveProduct: handleNewProduct
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
/******/ 	__webpack_require__.h = () => ("5fb5927bdd5591e54222")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZTc4NTc1M2RmNTk1YTczNjA1OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDdUI7QUFDYjtBQUNpQjtBQUNEO0FBRXBELElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUFDLElBQUEsRUFBcUM7RUFBQSxJQUFoQ0MsV0FBVyxHQUFBRCxJQUFBLENBQVhDLFdBQVc7SUFBRUMsWUFBWSxHQUFBRixJQUFBLENBQVpFLFlBQVk7RUFDakQsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsS0FBSyxFQUFLO0lBQ2hDRixZQUFZLENBQUNFLEtBQUssQ0FBQztFQUN2QixDQUFDO0VBR0Qsb0JBQ0lWLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDQyw0REFBVztJQUFDTSxXQUFXLEVBQUVBO0VBQVksRUFBRyxlQUN6Q1AsMERBQUEsQ0FBQ0ksZ0VBQVU7SUFBQ1MsYUFBYSxFQUFFSjtFQUFpQixFQUFHLENBQ2hEO0FBRVgsQ0FBQztBQUVELElBQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJSLFdBQVcsRUFBRVEsS0FBSyxDQUFDQztFQUN2QixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDVixZQUFZLEVBQUUsU0FBQUEsYUFBQ0UsS0FBSztNQUFBLE9BQUtRLFFBQVEsQ0FBQ2YsbUVBQVUsQ0FBQ08sS0FBSyxDQUFDLENBQUM7SUFBQTtFQUN4RCxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlUixvREFBTyxDQUFDWSxlQUFlLEVBQUVHLGtCQUFrQixDQUFDLENBQUNaLGlCQUFpQixDQUFDOzs7Ozs7OztVQzVCOUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1Byb2R1Y3RzQ29udGFpbmVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7YWRkUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdHNcIjtcclxuaW1wb3J0IEFkZFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHMvQWRkXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0c0NvbnRhaW5lciA9ICh7YWxsUHJvZHVjdHMsIG9uUHJvZHVjdEFkZCB9KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVOZXdQcm9kdWN0ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgb25Qcm9kdWN0QWRkKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBbGxQcm9kdWN0cyBhbGxQcm9kdWN0cz17YWxsUHJvZHVjdHN9IC8+XHJcbiAgICAgICAgICAgIDxBZGRQcm9kdWN0IG9uU2F2ZVByb2R1Y3Q9e2hhbmRsZU5ld1Byb2R1Y3R9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGFsbFByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0c1xyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBvblByb2R1Y3RBZGQ6ICh2YWx1ZSkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdCh2YWx1ZSkpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvZHVjdHNDb250YWluZXIpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZmI1OTI3YmRkNTU5MWU1NDIyMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkFsbFByb2R1Y3RzIiwiY29ubmVjdCIsImFkZFByb2R1Y3QiLCJBZGRQcm9kdWN0IiwiUHJvZHVjdHNDb250YWluZXIiLCJfcmVmIiwiYWxsUHJvZHVjdHMiLCJvblByb2R1Y3RBZGQiLCJoYW5kbGVOZXdQcm9kdWN0IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvblNhdmVQcm9kdWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9kdWN0cyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==