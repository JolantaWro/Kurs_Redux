"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 47:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);


var LastProducts = function LastProducts(_ref) {
  var lastProducts = _ref.lastProducts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ostatnie produkty",
    theme: "is-danger",
    path: "products",
    iconName: "pizza-slice",
    listElements: lastProducts
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastProducts);

/***/ }),

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LastRecipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _LastProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);



var Home = function Home(_ref) {
  var lastProducts = _ref.lastProducts,
    allProducts = _ref.allProducts;
  console.log(lastProducts);
  console.log(allProducts);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-one-third"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LastRecipes__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-one-third"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LastProducts__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProduct": () => (/* binding */ getProduct),
/* harmony export */   "lastAddProducts": () => (/* binding */ lastAddProducts),
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);

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
    return element.id === selector;
  });
};
var lastAddProducts = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(productsSelector, function (products) {
  return products;
});
//products.slice(-5)

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("79b87453447ecd75b873")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41M2ZhMjdhNjlmZTZkMGQ1YTNkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUc3QixJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUF1QjtFQUFBLElBQWxCQyxZQUFZLEdBQUFELElBQUEsQ0FBWkMsWUFBWTtFQUVqQyxvQkFDRUosMERBQUEsQ0FBQ0MsOENBQUs7SUFDSkssS0FBSyxFQUFDLG1CQUFtQjtJQUN6QkMsS0FBSyxFQUFDLFdBQVc7SUFDakJDLElBQUksRUFBQyxVQUFVO0lBQ2ZDLFFBQVEsRUFBQyxhQUFhO0lBQ3RCQyxZQUFZLEVBQUVOO0VBQWEsRUFBRztBQUVwQyxDQUFDO0FBRUQsaUVBQWVGLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUNjO0FBQ0U7QUFFMUMsSUFBTVUsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUFULElBQUEsRUFBb0M7RUFBQSxJQUEvQkMsWUFBWSxHQUFBRCxJQUFBLENBQVpDLFlBQVk7SUFBRVMsV0FBVyxHQUFBVixJQUFBLENBQVhVLFdBQVc7RUFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxZQUFZLENBQUM7RUFDekJVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXLENBQUM7RUFDMUIsb0JBQ0ViLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBUyxnQkFDdEJoQiwwREFBQTtJQUFLZ0IsU0FBUyxFQUFDO0VBQXFCLGdCQUNsQ2hCLDBEQUFBLENBQUNXLG9EQUFXLE9BQUUsQ0FDVixlQUNOWCwwREFBQTtJQUFLZ0IsU0FBUyxFQUFDO0VBQXFCLGdCQUNsQ2hCLDBEQUFBLENBQUNFLHFEQUFZLE9BQUcsQ0FDWixDQUNGO0FBR1YsQ0FBQztBQUVELGlFQUFlVSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ3BCc0I7QUFHbEMsSUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBR0MsS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsUUFBUTtBQUFBO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUQsUUFBUSxFQUFFRSxRQUFRLEVBQUs7RUFDOUMsT0FBT0YsUUFBUSxDQUFDRyxNQUFNLENBQUMsVUFBQUMsT0FBTztJQUFBLE9BQUlBLE9BQU8sQ0FBQ0MsRUFBRSxLQUFLSCxRQUFRO0VBQUEsRUFBQztBQUM5RCxDQUFDO0FBRU0sSUFBTUksZUFBZSxHQUFHVCx3REFBYyxDQUN6Q0MsZ0JBQWdCLEVBQ2hCLFVBQUNFLFFBQVE7RUFBQSxPQUFLQSxRQUFRO0FBQUEsRUFDekI7QUFDRDs7Ozs7Ozs7VUNuQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0hvbWUvTGFzdFByb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi4vUGFuZWxcIjtcblxuXG5jb25zdCBMYXN0UHJvZHVjdHMgPSAoe2xhc3RQcm9kdWN0c30pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxQYW5lbFxuICAgICAgdGl0bGU9XCJPc3RhdG5pZSBwcm9kdWt0eVwiXG4gICAgICB0aGVtZT1cImlzLWRhbmdlclwiXG4gICAgICBwYXRoPVwicHJvZHVjdHNcIlxuICAgICAgaWNvbk5hbWU9XCJwaXp6YS1zbGljZVwiXG4gICAgICBsaXN0RWxlbWVudHM9e2xhc3RQcm9kdWN0c30gLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RQcm9kdWN0czsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGFzdFJlY2lwZXMgZnJvbSBcIi4vTGFzdFJlY2lwZXNcIjtcbmltcG9ydCBMYXN0UHJvZHVjdHMgZnJvbSBcIi4vTGFzdFByb2R1Y3RzXCI7XG5cbmNvbnN0IEhvbWUgPSAoe2xhc3RQcm9kdWN0cywgYWxsUHJvZHVjdHN9KSA9PiB7XG4gICAgY29uc29sZS5sb2cobGFzdFByb2R1Y3RzKVxuICAgIGNvbnNvbGUubG9nKGFsbFByb2R1Y3RzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCI+XG4gICAgICAgIDxMYXN0UmVjaXBlcy8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiPlxuICAgICAgICA8TGFzdFByb2R1Y3RzIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0c1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUucHJvZHVjdHNcbi8vIGV4cG9ydCBjb25zdCBzdW1QcmljZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4vLyAgICAgcHJvZHVjdHNTZWxlY3Rvcixcbi8vICAgICBwcm9kdWN0cz0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXG4vLyAgICAgICAgIGFjYyArIE51bWJlcihpdGVtLnByaWNlKVxuLy8gICAgICksIDApXG4vLyApXG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0ID0gKHByb2R1Y3RzLCBzZWxlY3RvcikgPT4ge1xuICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSBzZWxlY3Rvcilcbn07XG5cbmV4cG9ydCBjb25zdCBsYXN0QWRkUHJvZHVjdHMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBwcm9kdWN0c1NlbGVjdG9yLFxuICAgIChwcm9kdWN0cykgPT4gcHJvZHVjdHNcbik7XG4vL3Byb2R1Y3RzLnNsaWNlKC01KSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc5Yjg3NDUzNDQ3ZWNkNzViODczXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFuZWwiLCJMYXN0UHJvZHVjdHMiLCJfcmVmIiwibGFzdFByb2R1Y3RzIiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwidGhlbWUiLCJwYXRoIiwiaWNvbk5hbWUiLCJsaXN0RWxlbWVudHMiLCJMYXN0UmVjaXBlcyIsIkhvbWUiLCJhbGxQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJjcmVhdGVTZWxlY3RvciIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZ2V0UHJvZHVjdCIsInNlbGVjdG9yIiwiZmlsdGVyIiwiZWxlbWVudCIsImlkIiwibGFzdEFkZFByb2R1Y3RzIl0sInNvdXJjZVJvb3QiOiIifQ==