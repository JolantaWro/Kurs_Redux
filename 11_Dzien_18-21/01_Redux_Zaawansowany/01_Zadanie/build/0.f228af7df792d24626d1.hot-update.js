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
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _containers_Products_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _containers_Products_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98);
/* harmony import */ var _containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(101);
/* harmony import */ var _containers_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(117);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(104);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50);











var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Products__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Add__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_6__["default"], null)
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _components_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(116);
/* harmony import */ var _redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(118);





// const Products = ({ allProducts }) => {
//
//     return (
//         <>
//             <AllProducts allProducts={allProducts} />
//         </>
//     );
// };

var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: (0,_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3__.productsSelector)(state)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProduct": () => (/* binding */ getProduct),
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector)
/* harmony export */ });

var productsSelector = function productsSelector(state) {
  return state.products;
};
// export const sumPriceSelector = createSelector(
//     productsSelector,
//     products=> products.reduce((acc, item) => (
//         acc + Number(item.price)
//     ), 0)
// )

var getProduct = function getProduct(products, selector) {
  return products.filter(function (element) {
    return element.id !== selector;
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ebe315ab7e6a56f83989")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMjI4YWY3ZGY3OTJkMjQ2MjZkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0k7QUFDZ0M7QUFDeEI7QUFDWjtBQUNnQztBQUNOO0FBQ0c7QUFDVTtBQUM5QjtBQUNFO0FBRXJDLElBQU1hLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBO0VBQUEsb0JBQ05iLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDWSxpREFBUTtJQUFDRCxLQUFLLEVBQUVBLG9EQUFLQTtFQUFDLGdCQUNuQlgsMERBQUEsQ0FBQ0UsNERBQWEscUJBQ1ZGLDBEQUFBLENBQUNDLCtDQUFNLHFCQUNIRCwwREFBQSxDQUFDSSxxREFBTSxxQkFDSEosMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2EsS0FBSztJQUFDQyxJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUVsQiwwREFBQSxDQUFDTSw2Q0FBSTtFQUFJLEVBQUcsZUFDM0NOLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNjLElBQUksRUFBQyxXQUFXO0lBQUNDLE9BQU8sZUFBRWxCLDBEQUFBLENBQUNPLHFFQUFXO0VBQUksRUFBRyxlQUNwRFAsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2MsSUFBSSxFQUFDLGVBQWU7SUFBQ0MsT0FBTyxlQUFFbEIsMERBQUEsQ0FBQ1UsMEVBQWE7RUFBRyxFQUFHLGVBQ3pEViwwREFBQSxDQUFDRyxvREFBSztJQUFDYyxJQUFJLEVBQUMsZUFBZTtJQUFDQyxPQUFPLGVBQUVsQiwwREFBQSxDQUFDUSxnRUFBVTtFQUFJLEVBQUcsZUFDdkRSLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNjLElBQUksRUFBQyxjQUFjO0lBQUNDLE9BQU8sZUFBRWxCLDBEQUFBLENBQUNLLG9EQUFTO0VBQUksRUFBRyxlQUNyREwsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2MsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsT0FBTyxlQUFFbEIsMERBQUEsQ0FBQ1MsbUVBQVU7RUFBSSxFQUFHLENBQzdDLENBQ0osQ0FDRyxDQUNULENBQ1o7QUFBQSxDQUNOO0FBRUQsaUVBQWVJLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQk87QUFDVTtBQUNnQztBQUNJOztBQUd4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1RLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJDLFdBQVcsRUFBRUgsbUZBQWdCLENBQUNFLEtBQUs7RUFDdkMsQ0FBQztBQUFBLENBQUM7QUFLRixpRUFBZUgsb0RBQU8sQ0FBQ0UsZUFBZSxDQUFDLENBQUNYLDBFQUFhLENBQUM7Ozs7Ozs7Ozs7OztBQ3RCYjtBQUdsQyxJQUFNVSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHRSxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDRyxRQUFRO0FBQUE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJRCxRQUFRLEVBQUVFLFFBQVEsRUFBSztFQUU5QyxPQUFPRixRQUFRLENBQUNHLE1BQU0sQ0FBQyxVQUFBVixPQUFPO0lBQUEsT0FBSUEsT0FBTyxDQUFDVyxFQUFFLEtBQUtGLFFBQVE7RUFBQSxFQUFDO0FBQzlELENBQUM7Ozs7Ozs7O1VDZEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Qcm9kdWN0cy9TaW5nbGVQcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNQcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBZGRSZWNpcGUgZnJvbSBcIi4vUmVjaXBlcy9BZGRcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi4vY29udGFpbmVycy9Qcm9kdWN0cy9Qcm9kdWN0c1wiO1xuaW1wb3J0IEFkZFByb2R1Y3QgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvQWRkXCI7XG5pbXBvcnQgQWxsUmVjaXBlcyBmcm9tIFwiLi4vY29udGFpbmVycy9SZWNpcGVzL1JlY2lwZXNcIjtcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3RcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBNYWluID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIiBlbGVtZW50PXs8QWxsUHJvZHVjdHMgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy86aWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvYWRkXCIgZWxlbWVudD17PEFkZFByb2R1Y3QgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzL2FkZFwiIGVsZW1lbnQ9ezxBZGRSZWNpcGUgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzXCIgZWxlbWVudD17PEFsbFJlY2lwZXMgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgU2luZ2xlUHJvZHVjdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0cy9TaW5nbGVQcm9kdWN0XCI7XG5pbXBvcnQge3Byb2R1Y3RzU2VsZWN0b3J9IGZyb20gXCIuLi8uLi9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzUHJvZHVjdFwiO1xuXG5cbi8vIGNvbnN0IFByb2R1Y3RzID0gKHsgYWxsUHJvZHVjdHMgfSkgPT4ge1xuLy9cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8PlxuLy8gICAgICAgICAgICAgPEFsbFByb2R1Y3RzIGFsbFByb2R1Y3RzPXthbGxQcm9kdWN0c30gLz5cbi8vICAgICAgICAgPC8+XG4vLyAgICAgKTtcbi8vIH07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgYWxsUHJvZHVjdHM6IHByb2R1Y3RzU2VsZWN0b3Ioc3RhdGUpXG59KTtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNpbmdsZVByb2R1Y3QpOyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0c1xuLy8gZXhwb3J0IGNvbnN0IHN1bVByaWNlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcihcbi8vICAgICBwcm9kdWN0c1NlbGVjdG9yLFxuLy8gICAgIHByb2R1Y3RzPT4gcHJvZHVjdHMucmVkdWNlKChhY2MsIGl0ZW0pID0+IChcbi8vICAgICAgICAgYWNjICsgTnVtYmVyKGl0ZW0ucHJpY2UpXG4vLyAgICAgKSwgMClcbi8vIClcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3QgPSAocHJvZHVjdHMsIHNlbGVjdG9yKSA9PiB7XG5cbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5pZCAhPT0gc2VsZWN0b3IpXG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImViZTMxNWFiN2U2YTU2ZjgzOTg5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiQWRkUmVjaXBlIiwiSG9tZSIsIkFsbFByb2R1Y3RzIiwiQWRkUHJvZHVjdCIsIkFsbFJlY2lwZXMiLCJTaW5nbGVQcm9kdWN0Iiwic3RvcmUiLCJQcm92aWRlciIsIk1haW4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJleGFjdCIsInBhdGgiLCJlbGVtZW50IiwiY29ubmVjdCIsInByb2R1Y3RzU2VsZWN0b3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImFsbFByb2R1Y3RzIiwiY3JlYXRlU2VsZWN0b3IiLCJwcm9kdWN0cyIsImdldFByb2R1Y3QiLCJzZWxlY3RvciIsImZpbHRlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==