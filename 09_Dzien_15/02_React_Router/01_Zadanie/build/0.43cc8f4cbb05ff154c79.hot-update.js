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
    products: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.productsSelector)(state)
    // products: state.products,
    // sum: selectPrice(state)
    // sum: sumPriceSelector(state.products)
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
    }
    // filterPrice: (value) => dispatch(filterProductsPrice(value))
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector),
/* harmony export */   "selectPrice": () => (/* binding */ selectPrice)
/* harmony export */ });
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować


// export const filterProductsPrice = (products, status) => {
//     return products.filter(item => item.price >= status);
// };

var productsSelector = function productsSelector(state) {
  return state.products;
};
// export const sumPriceSelector = createSelector(
//     filterProductsPrice,
//     products=> products.reduce((acc, item) => (
//         acc + item.price
//     ), 0)
// )

var selectPrice = function selectPrice(state) {
  var sumPrice;
  if (state.products) {
    if (state.products.price >= 10) {
      sumPrice = "wiecej niz 10";
    } else if (state.products.price >= 50) {
      sumPrice = "wiecej niz 50";
    }
  }
  return sumPrice;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("26bb3b725fa539eed4da")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40M2NjOGY0Y2JiMDVmZjE1NGM3OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNVO0FBQ0U7QUFDcUI7QUFDNkM7QUFHeEcsSUFBTVMsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkMsUUFBUSxFQUFFTCxrRUFBZ0IsQ0FBQ0ksS0FBSztJQUNoQztJQUNBO0lBQ0E7RUFDSixDQUFDO0FBQUEsQ0FBQzs7QUFFRjs7QUFFQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ1YsVUFBVSxFQUFFLFNBQUFBLFdBQUNXLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNWLDBEQUFVLENBQUNXLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDdERWLGFBQWEsRUFBRSxTQUFBQSxjQUFDVSxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDVCw2REFBYSxDQUFDVSxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQzVEO0VBR0osQ0FBQztBQUFBLENBQUM7O0FBRUYsaUVBQWViLG9EQUFPLENBQUNRLGVBQWUsRUFBRUcsa0JBQWtCLENBQUMsQ0FBQ1Ysd0RBQUksQ0FBQzs7Ozs7Ozs7Ozs7O0FDNUJqRTtBQUNBO0FBQ0E7QUFDQTtBQUN5Qzs7QUFFekM7QUFDQTtBQUNBOztBQUlPLElBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUdJLEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLFFBQVE7QUFBQTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUosV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlHLEtBQUssRUFBSztFQUNsQyxJQUFJTSxRQUFRO0VBQ1osSUFBSU4sS0FBSyxDQUFDQyxRQUFRLEVBQUU7SUFDaEIsSUFBSUQsS0FBSyxDQUFDQyxRQUFRLENBQUNNLEtBQUssSUFBSSxFQUFFLEVBQUU7TUFDNUJELFFBQVEsR0FBRyxlQUFlO0lBQzlCLENBQUMsTUFBTSxJQUFJTixLQUFLLENBQUNDLFFBQVEsQ0FBQ00sS0FBSyxJQUFJLEVBQUUsRUFBRTtNQUNuQ0QsUUFBUSxHQUFHLGVBQWU7SUFDOUI7RUFDSjtFQUNBLE9BQU9BLFFBQVE7QUFDbkIsQ0FBQzs7Ozs7Ozs7VUM5QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVyB0eW0gcGxpa3UgbmFsZcW8eSB3eWtvbmHEhyBjb25uZWN0XHJcbi8vIG9yYXogc2tvcnp5c3RhxIcgeiBzZWxla3RvcsOzdyB6YWltcGxlbWVudG93YW55Y2ggdyBwbGlrdSByZWR1eC9zZWxlY3RvcnNcclxuLy8gcGFtacSZdGFqIG8gd3lla3Nwb3J0b3dhbml1IGtvbnRlbmVyYTpcclxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKENhcnQpO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XHJcbmltcG9ydCB7YWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IHtmaWx0ZXJQcm9kdWN0c1ByaWNlLCBwcm9kdWN0c1NlbGVjdG9yLCBzZWxlY3RQcmljZSwgc3VtUHJpY2VTZWxlY3Rvcn0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBwcm9kdWN0czogcHJvZHVjdHNTZWxlY3RvcihzdGF0ZSlcclxuICAgIC8vIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcclxuICAgIC8vIHN1bTogc2VsZWN0UHJpY2Uoc3RhdGUpXHJcbiAgICAvLyBzdW06IHN1bVByaWNlU2VsZWN0b3Ioc3RhdGUucHJvZHVjdHMpXHJcbn0pO1xyXG5cclxuLy92YWx1ZXM6IHN0YXRlLnJvdXRlc1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIGFkZFByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChhZGRQcm9kdWN0KHByb2R1Y3QpKSxcclxuICAgIHJlbW92ZVByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChyZW1vdmVQcm9kdWN0KHByb2R1Y3QpKSxcclxuICAgIC8vIGZpbHRlclByaWNlOiAodmFsdWUpID0+IGRpc3BhdGNoKGZpbHRlclByb2R1Y3RzUHJpY2UodmFsdWUpKVxyXG5cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7IiwiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XHJcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XHJcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxyXG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXHJcblxyXG4vLyBleHBvcnQgY29uc3QgZmlsdGVyUHJvZHVjdHNQcmljZSA9IChwcm9kdWN0cywgc3RhdHVzKSA9PiB7XHJcbi8vICAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcmljZSA+PSBzdGF0dXMpO1xyXG4vLyB9O1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzXHJcbi8vIGV4cG9ydCBjb25zdCBzdW1QcmljZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbi8vICAgICBmaWx0ZXJQcm9kdWN0c1ByaWNlLFxyXG4vLyAgICAgcHJvZHVjdHM9PiBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxyXG4vLyAgICAgICAgIGFjYyArIGl0ZW0ucHJpY2VcclxuLy8gICAgICksIDApXHJcbi8vIClcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RQcmljZSA9IChzdGF0ZSkgPT4ge1xyXG4gICAgbGV0IHN1bVByaWNlO1xyXG4gICAgaWYgKHN0YXRlLnByb2R1Y3RzKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLnByb2R1Y3RzLnByaWNlID49IDEwKSB7XHJcbiAgICAgICAgICAgIHN1bVByaWNlID0gXCJ3aWVjZWogbml6IDEwXCJcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLnByb2R1Y3RzLnByaWNlID49IDUwKSB7XHJcbiAgICAgICAgICAgIHN1bVByaWNlID0gXCJ3aWVjZWogbml6IDUwXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VtUHJpY2VcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNmJiM2I3MjVmYTUzOWVlZDRkYVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJDYXJ0IiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJmaWx0ZXJQcm9kdWN0c1ByaWNlIiwicHJvZHVjdHNTZWxlY3RvciIsInNlbGVjdFByaWNlIiwic3VtUHJpY2VTZWxlY3RvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvZHVjdHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByb2R1Y3QiLCJjcmVhdGVTZWxlY3RvciIsInN1bVByaWNlIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9