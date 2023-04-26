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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct;
  console.log(sum);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sum),
    _useState2 = _slicedToArray(_useState, 2),
    sumValue = _useState2[0],
    setSum = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    addProduct: addProduct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    removeProduct: removeProduct,
    products: products
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Do zap\u0142aty: ", sumValue, " PLN"));
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
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);






var mapStateToProps = function mapStateToProps(state) {
  return {
    products: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.productsSelector)(state)
    // sum: sumPriceSelector(state)
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
  };
};
var CartContainer = function CartContainer(props) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    filterValue = _useParams.filterValue;
  var filteredProduct = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.filteredProducts)(props.products, filterValue);
  var sum = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.sumPriceSelector)(filterValue ? filteredProduct : props.products);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, filterValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: filteredProduct,
    sum: sum
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: props.products,
    sum: sum
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CartContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d817c50e9f122401e198")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5cblxuY29uc3QgQ2FydCA9ICh7IHByb2R1Y3RzLCBzdW0sIGFkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3QgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN1bSlcbiAgICBjb25zdCBbc3VtVmFsdWUsIHNldFN1bV0gPSB1c2VTdGF0ZShzdW0pXG5cblxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZvcm0gYWRkUHJvZHVjdD17YWRkUHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgPExpc3QgcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgICAgICAgICA8aDE+RG8gemFwxYJhdHk6IHtzdW1WYWx1ZX0gUExOPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCIvLyBXIHR5bSBwbGlrdSBuYWxlxbx5IHd5a29uYcSHIGNvbm5lY3Rcbi8vIG9yYXogc2tvcnp5c3RhxIcgeiBzZWxla3RvcsOzdyB6YWltcGxlbWVudG93YW55Y2ggdyBwbGlrdSByZWR1eC9zZWxlY3RvcnNcbi8vIHBhbWnEmXRhaiBvIHd5ZWtzcG9ydG93YW5pdSBrb250ZW5lcmE6XG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ2FydCk7XG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XG5pbXBvcnQge2FkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQge2ZpbHRlcmVkUHJvZHVjdHMsIHByb2R1Y3RzU2VsZWN0b3IsIHN1bVByaWNlU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHByb2R1Y3RzOiBwcm9kdWN0c1NlbGVjdG9yKHN0YXRlKSxcbiAgICAvLyBzdW06IHN1bVByaWNlU2VsZWN0b3Ioc3RhdGUpXG59KTtcblxuLy92YWx1ZXM6IHN0YXRlLnJvdXRlc1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGFkZFByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChhZGRQcm9kdWN0KHByb2R1Y3QpKSxcbiAgICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2gocmVtb3ZlUHJvZHVjdChwcm9kdWN0KSksXG59KTtcblxuXG5jb25zdCBDYXJ0Q29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBmaWx0ZXJWYWx1ZSB9ID0gdXNlUGFyYW1zKCk7XG4gICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0ID0gZmlsdGVyZWRQcm9kdWN0cyhwcm9wcy5wcm9kdWN0cywgZmlsdGVyVmFsdWUpXG5cbiAgICBjb25zdCBzdW0gPSBzdW1QcmljZVNlbGVjdG9yKGZpbHRlclZhbHVlID8gZmlsdGVyZWRQcm9kdWN0IDogcHJvcHMucHJvZHVjdHMgKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7ZmlsdGVyVmFsdWUgPyA8Q2FydCB7IC4uLnByb3BzfSBwcm9kdWN0cz17ZmlsdGVyZWRQcm9kdWN0fSBzdW09e3N1bX0gLz4gOiAgPENhcnQgeyAuLi5wcm9wc30gcHJvZHVjdHM9e3Byb3BzLnByb2R1Y3RzfSBzdW09e3N1bX0gLz59XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0Q29udGFpbmVyKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ4MTdjNTBlOWYxMjI0MDFlMTk4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiTGlzdCIsIkNhcnQiLCJfcmVmIiwicHJvZHVjdHMiLCJzdW0iLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzdW1WYWx1ZSIsInNldFN1bSIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VQYXJhbXMiLCJjb25uZWN0IiwiZmlsdGVyZWRQcm9kdWN0cyIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdW1QcmljZVNlbGVjdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByb2R1Y3QiLCJDYXJ0Q29udGFpbmVyIiwicHJvcHMiLCJfdXNlUGFyYW1zIiwiZmlsdGVyVmFsdWUiLCJmaWx0ZXJlZFByb2R1Y3QiLCJGcmFnbWVudCIsIl9leHRlbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==