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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    selectorValue = _useState2[0],
    setSelectorValue = _useState2[1];

  // useEffect(() => {
  //     // setSelectorValue(filterValue)
  // },[selectorValue])

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),
    filterValue = _useParams.filterValue;
  // setSelectorValue(parseInt(filterValue))

  console.log("filterValuePASEK", filterValue);
  console.log("selectorValue", selectorValue);
  console.log;
  // // console.log("sum", sum, typeof sum)
  //
  // console.log("selectorValue", selectorValue)

  // const newStateProducts = filteredProducts(products, parseInt(selectorValue))

  var handleChange = function handleChange(e) {
    console.log(e.target.value);
    // console.log("filterValue", filterValue)
    // console.log("selectorValue", selectorValue)
    // setSelectorValue(parseInt(filterValue));
  };

  //
  // const filteredState = getProduct(allProducts, parseInt(idProduct));
  // const product = filteredState[0]

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/",
    exact: true,
    onClick: function onClick() {
      return setSelectorValue(0);
    }
  }, "Wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/10"
  }, "do 10z\u0142BEZ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/10",
    exact: true,
    onClick: function onClick() {
      return setSelectorValue(filterValue);
    }
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/50"
  }, "do 50z\u0142 BEZ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/50",
    exact: true,
    onClick: function onClick() {
      return setSelectorValue(filterValue);
    }
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/100",
    exact: true,
    onClick: function onClick() {
      return setSelectorValue(filterValue);
    }
  }, "do 100z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    addProduct: addProduct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    removeProduct: removeProduct,
    products: products
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Do zap\u0142aty: ", sum, " PLN"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("946e31a2f069e6c0e76a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLEVBQUNXLEdBQUcsRUFBQyxNQUFJLENBQUssQ0FDOUI7QUFFaEIsQ0FBQztBQUlELGlFQUFlSCxJQUFJOzs7Ozs7OztVQzdEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtmaWx0ZXJlZFByb2R1Y3RzfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IENhcnQgPSAoeyBwcm9kdWN0cywgc3VtLCBhZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0IH0pID0+IHtcblxuICAgIGNvbnN0IFtzZWxlY3RvclZhbHVlLCBzZXRTZWxlY3RvclZhbHVlXSA9IHVzZVN0YXRlKDApXG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICAvLyBzZXRTZWxlY3RvclZhbHVlKGZpbHRlclZhbHVlKVxuICAgIC8vIH0sW3NlbGVjdG9yVmFsdWVdKVxuXG4gICAgY29uc3QgeyBmaWx0ZXJWYWx1ZSB9ID0gdXNlUGFyYW1zKCk7XG4gICAgLy8gc2V0U2VsZWN0b3JWYWx1ZShwYXJzZUludChmaWx0ZXJWYWx1ZSkpXG5cbiAgICBjb25zb2xlLmxvZyhcImZpbHRlclZhbHVlUEFTRUtcIiwgZmlsdGVyVmFsdWUpXG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RvclZhbHVlXCIsIHNlbGVjdG9yVmFsdWUpXG4gICAgY29uc29sZS5sb2dcbiAgICAvLyAvLyBjb25zb2xlLmxvZyhcInN1bVwiLCBzdW0sIHR5cGVvZiBzdW0pXG4gICAgLy9cbiAgICAvLyBjb25zb2xlLmxvZyhcInNlbGVjdG9yVmFsdWVcIiwgc2VsZWN0b3JWYWx1ZSlcblxuICAgIC8vIGNvbnN0IG5ld1N0YXRlUHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzKHByb2R1Y3RzLCBwYXJzZUludChzZWxlY3RvclZhbHVlKSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpbHRlclZhbHVlXCIsIGZpbHRlclZhbHVlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNlbGVjdG9yVmFsdWVcIiwgc2VsZWN0b3JWYWx1ZSlcbiAgICAgICAgLy8gc2V0U2VsZWN0b3JWYWx1ZShwYXJzZUludChmaWx0ZXJWYWx1ZSkpO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICAvLyBjb25zdCBmaWx0ZXJlZFN0YXRlID0gZ2V0UHJvZHVjdChhbGxQcm9kdWN0cywgcGFyc2VJbnQoaWRQcm9kdWN0KSk7XG4gICAgLy8gY29uc3QgcHJvZHVjdCA9IGZpbHRlcmVkU3RhdGVbMF1cblxuXG5cblxuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9cIn0gIGV4YWN0IG9uQ2xpY2s9eygpPT4gc2V0U2VsZWN0b3JWYWx1ZSgwKX0+V3N6eXN0a2llPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMFwifT5kbyAxMHrFgkJFWjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTBcIn0gZXhhY3Qgb25DbGljaz17KCk9PiBzZXRTZWxlY3RvclZhbHVlKGZpbHRlclZhbHVlKX0+ZG8gMTB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzUwXCJ9PmRvIDUwesWCIEJFWjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvNTBcIn0gZXhhY3Qgb25DbGljaz17KCk9PiBzZXRTZWxlY3RvclZhbHVlKGZpbHRlclZhbHVlKX0+ZG8gNTB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzEwMFwifSBleGFjdCBvbkNsaWNrPXsoKT0+IHNldFNlbGVjdG9yVmFsdWUoZmlsdGVyVmFsdWUpfT5kbyAxMDB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPEZvcm0gYWRkUHJvZHVjdD17YWRkUHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICA8TGlzdCByZW1vdmVQcm9kdWN0PXtyZW1vdmVQcm9kdWN0fSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG4gICAgICAgICAgICAgICAgPGgxPkRvIHphcMWCYXR5OiB7c3VtfSBQTE48L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk0NmUzMWEyZjA2OWU2YzBlNzZhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiTGlzdCIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiQ2FydCIsIl9yZWYiLCJwcm9kdWN0cyIsInN1bSIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0b3JWYWx1ZSIsInNldFNlbGVjdG9yVmFsdWUiLCJfdXNlUGFyYW1zIiwiZmlsdGVyVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsInRvIiwiZXhhY3QiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==