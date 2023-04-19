"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct,
    filterPrice = _ref.filterPrice;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    filterValue = _useParams.filterValue;
  console.log("filterValue", filterValue);
  console.log("sum", sum, _typeof(sum));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    filterPrice(Number(filterValue));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/"
  }, "Wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/10"
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/50"
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/100"
  }, "do 100z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    addProduct: addProduct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    removeProduct: removeProduct,
    products: products,
    filterValue: filterValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Do zap\u0142aty: ", sum, " PLN"));
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
      return dispatch((0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.getPriceValue)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPriceValue": () => (/* binding */ getPriceValue),
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector),
/* harmony export */   "sumPriceSelector": () => (/* binding */ sumPriceSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować

var productsSelector = function productsSelector(state) {
  return state.products;
};
var sumPriceSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(productsSelector, function (products) {
  return products.reduce(function (acc, item) {
    return acc + Number(item.price);
  }, 0);
});
var getPriceValue = function getPriceValue(state, value) {
  return state.products.filter(function (item) {
    return item.price >= value;
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9749bfd6cc2e48999525")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxrQkFBa0IsQ0FBQyxDQUFDckIsd0RBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMxQmpFO0FBQ0E7QUFDQTtBQUNBO0FBQ3lDO0FBR2xDLElBQU1pQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHRyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDbEIsUUFBUTtBQUFBO0FBQ2hELElBQU1nQixnQkFBZ0IsR0FBR08sd0RBQWMsQ0FDMUNSLGdCQUFnQixFQUNoQixVQUFBZixRQUFRO0VBQUEsT0FBR0EsUUFBUSxDQUFDd0IsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsSUFBSTtJQUFBLE9BQ2pDRCxHQUFHLEdBQUdmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQ0MsS0FBSyxDQUFDO0VBQUEsQ0FDM0IsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUNSO0FBRU0sSUFBTWIsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJSSxLQUFLLEVBQUVJLEtBQUssRUFBSztFQUMzQyxPQUFPSixLQUFLLENBQUNsQixRQUFRLENBQUM0QixNQUFNLENBQUMsVUFBQUYsSUFBSTtJQUFBLE9BQUlBLElBQUksQ0FBQ0MsS0FBSyxJQUFJTCxLQUFLO0VBQUEsRUFBQztBQUM3RCxDQUFDOzs7Ozs7OztVQ2pCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XHJcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgQ2FydCA9ICh7IHByb2R1Y3RzLCBzdW0sIGFkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3QsIGZpbHRlclByaWNlIH0pID0+IHtcclxuICAgIGNvbnN0IHsgZmlsdGVyVmFsdWUgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyVmFsdWVcIiwgZmlsdGVyVmFsdWUpXHJcbiAgICBjb25zb2xlLmxvZyhcInN1bVwiLCBzdW0sIHR5cGVvZiBzdW0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmaWx0ZXJQcmljZShOdW1iZXIoZmlsdGVyVmFsdWUpKVxyXG4gICAgfSxbXSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvXCJ9PldzenlzdGtpZTwvTGluaz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMFwifT5kbyAxMHrFgjwvTGluaz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi81MFwifT5kbyA1MHrFgjwvTGluaz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMDBcIn0+ZG8gMTAwesWCPC9MaW5rPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gYWRkUHJvZHVjdD17YWRkUHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0IHJlbW92ZVByb2R1Y3Q9e3JlbW92ZVByb2R1Y3R9IHByb2R1Y3RzPXtwcm9kdWN0c30gZmlsdGVyVmFsdWU9e2ZpbHRlclZhbHVlfS8+XHJcbiAgICAgICAgICAgICAgICA8aDE+RG8gemFwxYJhdHk6IHtzdW19IFBMTjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiIsIi8vIFcgdHltIHBsaWt1IG5hbGXFvHkgd3lrb25hxIcgY29ubmVjdFxyXG4vLyBvcmF6IHNrb3J6eXN0YcSHIHogc2VsZWt0b3LDs3cgemFpbXBsZW1lbnRvd2FueWNoIHcgcGxpa3UgcmVkdXgvc2VsZWN0b3JzXHJcbi8vIHBhbWnEmXRhaiBvIHd5ZWtzcG9ydG93YW5pdSBrb250ZW5lcmE6XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYXJ0KTtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydFwiO1xyXG5pbXBvcnQge2FkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7Z2V0UHJpY2VWYWx1ZSwgcHJvZHVjdHNTZWxlY3Rvciwgc3VtUHJpY2VTZWxlY3Rvcn0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBwcm9kdWN0czogcHJvZHVjdHNTZWxlY3RvcihzdGF0ZSksXHJcbiAgICBzdW06IHN1bVByaWNlU2VsZWN0b3Ioc3RhdGUpXHJcbn0pO1xyXG5cclxuLy92YWx1ZXM6IHN0YXRlLnJvdXRlc1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIGFkZFByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChhZGRQcm9kdWN0KHByb2R1Y3QpKSxcclxuICAgIHJlbW92ZVByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChyZW1vdmVQcm9kdWN0KHByb2R1Y3QpKSxcclxuICAgIGZpbHRlclByaWNlOiAodmFsdWUpID0+IGRpc3BhdGNoKGdldFByaWNlVmFsdWUodmFsdWUpKVxyXG5cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7IiwiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XHJcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XHJcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxyXG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0c1xyXG5leHBvcnQgY29uc3Qgc3VtUHJpY2VTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgcHJvZHVjdHNTZWxlY3RvcixcclxuICAgIHByb2R1Y3RzPT4gcHJvZHVjdHMucmVkdWNlKChhY2MsIGl0ZW0pID0+IChcclxuICAgICAgICBhY2MgKyBOdW1iZXIoaXRlbS5wcmljZSlcclxuICAgICksIDApXHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcmljZVZhbHVlID0gKHN0YXRlLCB2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0ucHJpY2UgPj0gdmFsdWUpO1xyXG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk3NDliZmQ2Y2MyZTQ4OTk5NTI1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiRm9ybSIsIkxpc3QiLCJMaW5rIiwidXNlUGFyYW1zIiwiQ2FydCIsIl9yZWYiLCJwcm9kdWN0cyIsInN1bSIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZmlsdGVyUHJpY2UiLCJfdXNlUGFyYW1zIiwiZmlsdGVyVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiX3R5cGVvZiIsIk51bWJlciIsImNyZWF0ZUVsZW1lbnQiLCJ0byIsImNvbm5lY3QiLCJnZXRQcmljZVZhbHVlIiwicHJvZHVjdHNTZWxlY3RvciIsInN1bVByaWNlU2VsZWN0b3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicHJvZHVjdCIsInZhbHVlIiwiY3JlYXRlU2VsZWN0b3IiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwicHJpY2UiLCJmaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9