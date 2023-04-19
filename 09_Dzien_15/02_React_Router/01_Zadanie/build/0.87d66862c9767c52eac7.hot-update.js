"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);





var mapStateToProps = function mapStateToProps(state) {
  return {
    products: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.productsSelector)(state),
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.sumPriceSelector)(state)
  };
};

//values: state.routes

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    },
    filterPrice: function filterPrice(value) {
      return dispatch(filterProductsPrice(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("15489d31c61141b23aa7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44N2Q2Njg2MmM5NzY3YzUyZWFjNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNVO0FBQ0U7QUFDcUI7QUFDYTtBQUd4RSxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCQyxRQUFRLEVBQUVKLGtFQUFnQixDQUFDRyxLQUFLLENBQUM7SUFDakNFLEdBQUcsRUFBRUosa0VBQWdCLENBQUNFLEtBQUs7RUFDL0IsQ0FBQztBQUFBLENBQUM7O0FBRUY7O0FBRUEsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENULFVBQVUsRUFBRSxTQUFBQSxXQUFDVSxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDVCwwREFBVSxDQUFDVSxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQ3REVCxhQUFhLEVBQUUsU0FBQUEsY0FBQ1MsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ1IsNkRBQWEsQ0FBQ1MsT0FBTyxDQUFDLENBQUM7SUFBQTtJQUM1REMsV0FBVyxFQUFFLFNBQUFBLFlBQUNDLEtBQUs7TUFBQSxPQUFLSCxRQUFRLENBQUNJLG1CQUFtQixDQUFDRCxLQUFLLENBQUMsQ0FBQztJQUFBO0VBR2hFLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVkLG9EQUFPLENBQUNNLGVBQWUsRUFBRUksa0JBQWtCLENBQUMsQ0FBQ1Qsd0RBQUksQ0FBQzs7Ozs7Ozs7VUMxQmpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVyB0eW0gcGxpa3UgbmFsZcW8eSB3eWtvbmHEhyBjb25uZWN0XHJcbi8vIG9yYXogc2tvcnp5c3RhxIcgeiBzZWxla3RvcsOzdyB6YWltcGxlbWVudG93YW55Y2ggdyBwbGlrdSByZWR1eC9zZWxlY3RvcnNcclxuLy8gcGFtacSZdGFqIG8gd3lla3Nwb3J0b3dhbml1IGtvbnRlbmVyYTpcclxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKENhcnQpO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XHJcbmltcG9ydCB7YWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgcHJvZHVjdHNTZWxlY3Rvciwgc3VtUHJpY2VTZWxlY3RvciB9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzU2VsZWN0b3Ioc3RhdGUpLFxyXG4gICAgc3VtOiBzdW1QcmljZVNlbGVjdG9yKHN0YXRlKVxyXG59KTtcclxuXHJcbi8vdmFsdWVzOiBzdGF0ZS5yb3V0ZXNcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXHJcbiAgICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2gocmVtb3ZlUHJvZHVjdChwcm9kdWN0KSksXHJcbiAgICBmaWx0ZXJQcmljZTogKHZhbHVlKSA9PiBkaXNwYXRjaChmaWx0ZXJQcm9kdWN0c1ByaWNlKHZhbHVlKSlcclxuXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnQpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE1NDg5ZDMxYzYxMTQxYjIzYWE3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsIkNhcnQiLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdW1QcmljZVNlbGVjdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9kdWN0cyIsInN1bSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicHJvZHVjdCIsImZpbHRlclByaWNlIiwidmFsdWUiLCJmaWx0ZXJQcm9kdWN0c1ByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==