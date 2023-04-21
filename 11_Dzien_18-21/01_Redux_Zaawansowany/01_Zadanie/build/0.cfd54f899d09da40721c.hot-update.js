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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _containers_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(111);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../containers/AddProductContainer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);








var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../containers/AddProductContainer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RecipesContainer, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__["default"], null)
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
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);


var AllProducts = function AllProducts(_ref) {
  var allProducts = _ref.allProducts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "Wszystkie produkty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    iconName: "folder",
    path: "products",
    listElements: allProducts,
    heading: false,
    footer: false
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllProducts);

/***/ }),

/***/ 111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);



var Products = function Products(_ref) {
  var allProducts = _ref.allProducts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"], {
    allProducts: allProducts
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: state.products
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d2ec223a739cc3a5563d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZmQ1NGY4OTlkMDlkYTQwNzIxYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0k7QUFDd0M7QUFDaEM7QUFDWjtBQUN1QjtBQUNVO0FBQ1A7QUFFcEQsSUFBTVcsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUE7RUFBQSxvQkFDTlgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNFLDJEQUFhLHFCQUNWRiwwREFBQSxDQUFDQywrQ0FBTSxxQkFDSEQsMERBQUEsQ0FBQ0ssb0RBQU0scUJBQ0hMLDBEQUFBLENBQUNHLG1EQUFLO0lBQUNXLEtBQUs7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFaEIsMERBQUEsQ0FBQ08sNkNBQUk7RUFBSSxFQUFHLGVBRTNDUCwwREFBQSxDQUFDRyxtREFBSztJQUFDWSxJQUFJLEVBQUMsV0FBVztJQUFDQyxPQUFPLGVBQUVoQiwwREFBQSxDQUFDUSw0REFBVztFQUFJLEVBQUcsZUFDcERSLDBEQUFBLENBQUNHLG1EQUFLO0lBQUNZLElBQUksRUFBQyxlQUFlO0lBQUNDLE9BQU8sZUFBRWhCLDBEQUFBLENBQUNVLDhEQUFhO0VBQUcsRUFBRyxlQUV6RFYsMERBQUEsQ0FBQ0csbURBQUs7SUFBQ1ksSUFBSSxFQUFDLGVBQWU7SUFBQ0MsT0FBTyxlQUFFaEIsMERBQUEsQ0FBQ1MsZ0tBQVU7RUFBSSxFQUFHLGVBQ3ZEVCwwREFBQSxDQUFDRyxtREFBSztJQUFDWSxJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUVoQiwwREFBQSxDQUFDaUIsZ0JBQWdCO0VBQUksRUFBRyxlQUN4RGpCLDBEQUFBLENBQUNHLG1EQUFLO0lBQUNZLElBQUksRUFBQyxjQUFjO0lBQUNDLE9BQU8sZUFBRWhCLDBEQUFBLENBQUNNLG9EQUFTO0VBQUksRUFBRyxDQUVoRCxDQUNKLENBQ0csQ0FDakI7QUFBQSxDQUNOO0FBRUQsaUVBQWVLLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDN0JPO0FBQ0c7QUFHN0IsSUFBTUgsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUFXLElBQUEsRUFBc0I7RUFBQSxJQUFqQkMsV0FBVyxHQUFBRCxJQUFBLENBQVhDLFdBQVc7RUFFL0Isb0JBQ0VwQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7SUFBSXFCLFNBQVMsRUFBQztFQUFPLEdBQUMsb0JBQWtCLENBQUssZUFDN0NyQiwwREFBQSxDQUFDa0IsOENBQUs7SUFBQ0ksUUFBUSxFQUFFLFFBQVM7SUFBQ1AsSUFBSSxFQUFFLFVBQVc7SUFBQ1EsWUFBWSxFQUFFSCxXQUFZO0lBQUNJLE9BQU8sRUFBRSxLQUFNO0lBQUNDLE1BQU0sRUFBRTtFQUFNLEVBQUcsQ0FDeEc7QUFFUCxDQUFDO0FBRUQsaUVBQWVqQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUN1QjtBQUNiO0FBR3BDLElBQU1tQixRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQVIsSUFBQSxFQUF3QjtFQUFBLElBQWxCQyxXQUFXLEdBQUFELElBQUEsQ0FBWEMsV0FBVztFQUUzQixvQkFDSXBCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDUSw0REFBVztJQUFDWSxXQUFXLEVBQUVBO0VBQVksRUFBRyxDQUMxQztBQUVYLENBQUM7QUFFRCxJQUFNUSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCVCxXQUFXLEVBQUVTLEtBQUssQ0FBQ0M7RUFDdkIsQ0FBQztBQUFBLENBQUM7QUFHRixpRUFBZUosb0RBQU8sQ0FBQ0UsZUFBZSxDQUFDLENBQUNwQiw0REFBVyxDQUFDOzs7Ozs7OztVQ25CcEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Qcm9kdWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1Byb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlciwgUm91dGVzfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi9SZWNpcGVzL0FkZFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzXCI7XG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi4vY29udGFpbmVycy9BZGRQcm9kdWN0Q29udGFpbmVyXCI7XG5pbXBvcnQgU2luZ2xlUHJvZHVjdCBmcm9tIFwiLi9SZWNpcGVzL1NpbmdsZVByb2R1Y3RcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IChcbiAgICA8PlxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiIGVsZW1lbnQ9ezxQcm9kdWN0c0NvbnRhaW5lciAvPn0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCIgZWxlbWVudD17PEFsbFByb2R1Y3RzIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy86aWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvYWRkXCIgZWxlbWVudD17PEFkZFByb2R1Y3QgLz59IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy9hZGRcIiBlbGVtZW50PXs8QWRkUHJvZHVjdCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlc1wiIGVsZW1lbnQ9ezxSZWNpcGVzQ29udGFpbmVyIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzL2FkZFwiIGVsZW1lbnQ9ezxBZGRSZWNpcGUgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxSb3V0ZSBwYXRoPVwiL3JlY2lwZXMvOmlkXCIgZWxlbWVudD17PFNpbmdsZVJlY2lwZS8+fS8+Ki99XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhbmVsIGZyb20gXCIuLi9QYW5lbFwiO1xuXG5cbmNvbnN0IEFsbFByb2R1Y3RzID0gKHthbGxQcm9kdWN0c30pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Xc3p5c3RraWUgcHJvZHVrdHk8L2gxPlxuICAgICAgPFBhbmVsIGljb25OYW1lPXtcImZvbGRlclwifSBwYXRoPXtcInByb2R1Y3RzXCJ9IGxpc3RFbGVtZW50cz17YWxsUHJvZHVjdHN9IGhlYWRpbmc9e2ZhbHNlfSBmb290ZXI9e2ZhbHNlfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxsUHJvZHVjdHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5cbmNvbnN0IFByb2R1Y3RzID0gKHsgYWxsUHJvZHVjdHMgfSkgPT4ge1xuIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QWxsUHJvZHVjdHMgYWxsUHJvZHVjdHM9e2FsbFByb2R1Y3RzfSAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBhbGxQcm9kdWN0czogc3RhdGUucHJvZHVjdHNcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBbGxQcm9kdWN0cyk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDJlYzIyM2E3MzljYzNhNTU2M2RcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJBZGRSZWNpcGUiLCJIb21lIiwiQWxsUHJvZHVjdHMiLCJBZGRQcm9kdWN0IiwiU2luZ2xlUHJvZHVjdCIsIk1haW4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJleGFjdCIsInBhdGgiLCJlbGVtZW50IiwiUmVjaXBlc0NvbnRhaW5lciIsIlBhbmVsIiwiX3JlZiIsImFsbFByb2R1Y3RzIiwiY2xhc3NOYW1lIiwiaWNvbk5hbWUiLCJsaXN0RWxlbWVudHMiLCJoZWFkaW5nIiwiZm9vdGVyIiwiY29ubmVjdCIsIlByb2R1Y3RzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9kdWN0cyJdLCJzb3VyY2VSb290IjoiIn0=