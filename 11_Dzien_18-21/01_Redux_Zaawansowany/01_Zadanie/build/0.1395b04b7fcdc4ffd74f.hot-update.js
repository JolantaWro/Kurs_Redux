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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
/* harmony import */ var _Products_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(105);
/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(106);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(107);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(109);
/* harmony import */ var _containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(112);
/* harmony import */ var _containers_RecipesContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(113);













var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products_Add__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_RecipesContainer__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 112:
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
/* harmony import */ var _components_Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(108);






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
/******/ 	__webpack_require__.h = () => ("f0ee218c9de042ea02a9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMzk1YjA0YjdmY2RjNGZmZDc0Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSTtBQUN3QztBQUNqQztBQUNIO0FBQ047QUFDUztBQUNHO0FBQ0w7QUFDRztBQUNaO0FBQ3NDO0FBQ0Y7QUFFOUQsSUFBTWdCLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBO0VBQUEsb0JBQ05oQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0UsNERBQWEscUJBQ1ZGLDBEQUFBLENBQUNDLCtDQUFNLHFCQUNIRCwwREFBQSxDQUFDSyxxREFBTSxxQkFDSEwsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2dCLEtBQUs7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFckIsMERBQUEsQ0FBQ2EsNkNBQUk7RUFBSSxFQUFHLGVBQzNDYiwwREFBQSxDQUFDRyxvREFBSztJQUFDaUIsSUFBSSxFQUFDLFdBQVc7SUFBQ0MsT0FBTyxlQUFFckIsMERBQUEsQ0FBQ2Msc0VBQWlCO0VBQUksRUFBRyxlQUMxRGQsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2lCLElBQUksRUFBQyxlQUFlO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNVLHFEQUFVO0VBQUksRUFBRyxlQUN2RFYsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2lCLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNlLHFFQUFnQjtFQUFJLEVBQUcsZUFDeERmLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNpQixJQUFJLEVBQUMsY0FBYztJQUFDQyxPQUFPLGVBQUVyQiwwREFBQSxDQUFDWSxvREFBUztFQUFJLEVBQUcsQ0FDaEQsQ0FDSixDQUNHLENBQ2pCO0FBQUEsQ0FDTjtBQUVELGlFQUFlSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qk87QUFDdUI7QUFDYjtBQUNpQjtBQUNEO0FBQ1k7QUFFaEUsSUFBTUYsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQVcsSUFBQSxFQUFxQztFQUFBLElBQWhDQyxXQUFXLEdBQUFELElBQUEsQ0FBWEMsV0FBVztJQUFFQyxZQUFZLEdBQUFGLElBQUEsQ0FBWkUsWUFBWTtFQUNqRCxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJQyxLQUFLLEVBQUs7SUFDaENGLFlBQVksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3ZCLENBQUM7RUFHRCxvQkFDSTdCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDUyw0REFBVztJQUFDaUIsV0FBVyxFQUFFQTtFQUFZLEVBQUcsZUFDekMxQiwwREFBQSxDQUFDVSxnRUFBVTtJQUFDb0IsYUFBYSxFQUFFRjtFQUFpQixFQUFHLENBQ2hEO0FBRVgsQ0FBQztBQUVELElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJOLFdBQVcsRUFBRU0sS0FBSyxDQUFDQztFQUN2QixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDUixZQUFZLEVBQUUsU0FBQUEsYUFBQ0UsS0FBSztNQUFBLE9BQUtNLFFBQVEsQ0FBQ1osbUVBQVUsQ0FBQ00sS0FBSyxDQUFDLENBQUM7SUFBQTtFQUN4RCxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlUCxvREFBTyxDQUFDUyxlQUFlLEVBQUVHLGtCQUFrQixDQUFDLENBQUNwQixpQkFBaUIsQ0FBQzs7Ozs7Ozs7VUM3QjlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUHJvZHVjdHNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlciwgUm91dGVzfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiXHJcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi9QYW5lbFwiO1xyXG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4vUHJvZHVjdHNcIjtcclxuaW1wb3J0IEFkZFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdHMvQWRkXCI7XHJcbmltcG9ydCBBbGxSZWNpcGVzIGZyb20gXCIuL1JlY2lwZXNcIjtcclxuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi9SZWNpcGVzL0FkZFwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcbmltcG9ydCBQcm9kdWN0c0NvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9Qcm9kdWN0c0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgUmVjaXBlc0NvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9SZWNpcGVzQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gKFxyXG4gICAgPD5cclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIiBlbGVtZW50PXs8UHJvZHVjdHNDb250YWluZXIgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvYWRkXCIgZWxlbWVudD17PEFkZFByb2R1Y3QgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlc1wiIGVsZW1lbnQ9ezxSZWNpcGVzQ29udGFpbmVyIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXMvYWRkXCIgZWxlbWVudD17PEFkZFJlY2lwZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICA8Lz5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7YWRkUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdHNcIjtcclxuaW1wb3J0IEFkZFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHMvQWRkXCI7XHJcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1JlY2lwZXMvU2luZ2xlUHJvZHVjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdHNDb250YWluZXIgPSAoe2FsbFByb2R1Y3RzLCBvblByb2R1Y3RBZGQgfSkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlTmV3UHJvZHVjdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIG9uUHJvZHVjdEFkZCh2YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QWxsUHJvZHVjdHMgYWxsUHJvZHVjdHM9e2FsbFByb2R1Y3RzfSAvPlxyXG4gICAgICAgICAgICA8QWRkUHJvZHVjdCBvblNhdmVQcm9kdWN0PXtoYW5kbGVOZXdQcm9kdWN0fSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBhbGxQcm9kdWN0czogc3RhdGUucHJvZHVjdHNcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgb25Qcm9kdWN0QWRkOiAodmFsdWUpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QodmFsdWUpKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2R1Y3RzQ29udGFpbmVyKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjBlZTIxOGM5ZGUwNDJlYTAyYTlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJQcm92aWRlciIsInN0b3JlIiwiUGFuZWwiLCJBbGxQcm9kdWN0cyIsIkFkZFByb2R1Y3QiLCJBbGxSZWNpcGVzIiwiQWRkUmVjaXBlIiwiSG9tZSIsIlByb2R1Y3RzQ29udGFpbmVyIiwiUmVjaXBlc0NvbnRhaW5lciIsIk1haW4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJleGFjdCIsInBhdGgiLCJlbGVtZW50IiwiY29ubmVjdCIsImFkZFByb2R1Y3QiLCJTaW5nbGVQcm9kdWN0IiwiX3JlZiIsImFsbFByb2R1Y3RzIiwib25Qcm9kdWN0QWRkIiwiaGFuZGxlTmV3UHJvZHVjdCIsInZhbHVlIiwib25TYXZlUHJvZHVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvZHVjdHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=