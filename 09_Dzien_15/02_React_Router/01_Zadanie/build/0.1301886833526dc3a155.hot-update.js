"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_0__["default"], {
    addProduct: addProduct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
    removeProduct: removeProduct,
    products: products
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", null, "Do zap\u0142aty: ", sum, " PLN"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var mapStateToProps = function mapStateToProps(state) {
  return {
    products: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.productsSelector)(state),
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.sumPriceSelector)(state)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    }
  };
};
var CartContainer = function CartContainer(props) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    filterValue = _useParams.filterValue;
  var filteredProduct = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.filteredProducts)(props.products, filterValue);
  var sum = filteredProduct.reduce(function (acc, item) {
    return acc + Number(item.price);
  }, 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: filteredProduct,
    sum: sum
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CartContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("10a233bb8b9d1118e2c1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMzAxODg2ODMzNTI2ZGMzYTE1NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0E7QUFDRDtBQUd6QixJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFxRDtFQUFBLElBQS9DQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFQyxHQUFHLEdBQUFGLElBQUEsQ0FBSEUsR0FBRztJQUFFQyxVQUFVLEdBQUFILElBQUEsQ0FBVkcsVUFBVTtJQUFFQyxhQUFhLEdBQUFKLElBQUEsQ0FBYkksYUFBYTtFQUdwRCxvQkFDSU4sMERBQUEsMkJBQ0lBLDBEQUFBLENBQUNGLDZDQUFJO0lBQUNPLFVBQVUsRUFBRUE7RUFBVyxFQUFHLGVBQ2hDTCwwREFBQSxDQUFDRCw2Q0FBSTtJQUFDTyxhQUFhLEVBQUVBLGFBQWM7SUFBQ0gsUUFBUSxFQUFFQTtFQUFTLEVBQUcsZUFDMURILDBEQUFBLGFBQUksbUJBQVksRUFBQ0ksR0FBRyxFQUFDLE1BQUksQ0FBSyxDQUM1QjtBQUVkLENBQUM7QUFJRCxpRUFBZUgsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25COEI7QUFDTjtBQUNQO0FBQ0U7QUFDcUI7QUFDNkI7QUFJeEYsSUFBTWMsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QmIsUUFBUSxFQUFFVSxrRUFBZ0IsQ0FBQ0csS0FBSyxDQUFDO0lBQ2pDWixHQUFHLEVBQUVVLGtFQUFnQixDQUFDRSxLQUFLO0VBQy9CLENBQUM7QUFBQSxDQUFDO0FBR0YsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENiLFVBQVUsRUFBRSxTQUFBQSxXQUFDYyxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDYiwwREFBVSxDQUFDYyxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQ3REYixhQUFhLEVBQUUsU0FBQUEsY0FBQ2EsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ1osNkRBQWEsQ0FBQ2EsT0FBTyxDQUFDLENBQUM7SUFBQTtFQUNoRSxDQUFDO0FBQUEsQ0FBQztBQUdGLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsS0FBSyxFQUFLO0VBQzdCLElBQUFDLFVBQUEsR0FBd0JaLDJEQUFTLEVBQUU7SUFBM0JhLFdBQVcsR0FBQUQsVUFBQSxDQUFYQyxXQUFXO0VBQ25CLElBQU1DLGVBQWUsR0FBR1osa0VBQWdCLENBQUNTLEtBQUssQ0FBQ2xCLFFBQVEsRUFBRW9CLFdBQVcsQ0FBQztFQUVyRSxJQUFNbkIsR0FBRyxHQUFHb0IsZUFBZSxDQUFDQyxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO0lBQUEsT0FDekNELEdBQUcsR0FBR0UsTUFBTSxDQUFDRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUFBLENBQzNCLEVBQUUsQ0FBQyxDQUFDO0VBSUwsb0JBQ0k3QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0Msd0RBQUksRUFBQThCLFFBQUEsS0FBTVYsS0FBSztJQUFFbEIsUUFBUSxFQUFFcUIsZUFBZ0I7SUFBQ3BCLEdBQUcsRUFBRUE7RUFBSSxHQUFHLENBQzFEO0FBRVgsQ0FBQztBQUVELGlFQUFlTyxvREFBTyxDQUFDSSxlQUFlLEVBQUVFLGtCQUFrQixDQUFDLENBQUNHLGFBQWEsQ0FBQzs7Ozs7Ozs7VUN0QzFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHN1bSwgYWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCB9KSA9PiB7XG5cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGb3JtIGFkZFByb2R1Y3Q9e2FkZFByb2R1Y3R9IC8+XG4gICAgICAgICAgICA8TGlzdCByZW1vdmVQcm9kdWN0PXtyZW1vdmVQcm9kdWN0fSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG4gICAgICAgICAgICA8aDE+RG8gemFwxYJhdHk6IHtzdW19IFBMTjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XG5pbXBvcnQge2FkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQge2ZpbHRlcmVkUHJvZHVjdHMsIHByb2R1Y3RzU2VsZWN0b3IsIHN1bVByaWNlU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzU2VsZWN0b3Ioc3RhdGUpLFxuICAgIHN1bTogc3VtUHJpY2VTZWxlY3RvcihzdGF0ZSlcbn0pO1xuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgYWRkUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QocHJvZHVjdCkpLFxuICAgIHJlbW92ZVByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChyZW1vdmVQcm9kdWN0KHByb2R1Y3QpKSxcbn0pO1xuXG5cbmNvbnN0IENhcnRDb250YWluZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGZpbHRlclZhbHVlIH0gPSB1c2VQYXJhbXMoKTtcbiAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3QgPSBmaWx0ZXJlZFByb2R1Y3RzKHByb3BzLnByb2R1Y3RzLCBmaWx0ZXJWYWx1ZSlcblxuICAgIGNvbnN0IHN1bSA9IGZpbHRlcmVkUHJvZHVjdC5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxuICAgICAgICBhY2MgKyBOdW1iZXIoaXRlbS5wcmljZSlcbiAgICApLCAwKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q2FydCB7IC4uLnByb3BzfSBwcm9kdWN0cz17ZmlsdGVyZWRQcm9kdWN0fSBzdW09e3N1bX0gLz5cbiAgICAgICAgPC8+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydENvbnRhaW5lcik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMGEyMzNiYjhiOWQxMTE4ZTJjMVwiKSJdLCJuYW1lcyI6WyJGb3JtIiwiTGlzdCIsIlJlYWN0IiwiQ2FydCIsIl9yZWYiLCJwcm9kdWN0cyIsInN1bSIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiY3JlYXRlRWxlbWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiY29ubmVjdCIsImZpbHRlcmVkUHJvZHVjdHMiLCJwcm9kdWN0c1NlbGVjdG9yIiwic3VtUHJpY2VTZWxlY3RvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9kdWN0IiwiQ2FydENvbnRhaW5lciIsInByb3BzIiwiX3VzZVBhcmFtcyIsImZpbHRlclZhbHVlIiwiZmlsdGVyZWRQcm9kdWN0IiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsIk51bWJlciIsInByaWNlIiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=