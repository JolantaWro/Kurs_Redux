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
/******/ 	__webpack_require__.h = () => ("2e7338da3ab2b1363df1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBSyxDQUM5QjtBQUVoQixDQUFDO0FBSUQsaUVBQWVILElBQUk7Ozs7Ozs7O1VDNURuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IHtMaW5rLCB1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2ZpbHRlcmVkUHJvZHVjdHN9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuY29uc3QgQ2FydCA9ICh7IHByb2R1Y3RzLCBzdW0sIGFkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3QgfSkgPT4ge1xuXG4gICAgY29uc3QgW3NlbGVjdG9yVmFsdWUsIHNldFNlbGVjdG9yVmFsdWVdID0gdXNlU3RhdGUoMClcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIC8vIHNldFNlbGVjdG9yVmFsdWUoZmlsdGVyVmFsdWUpXG4gICAgLy8gfSxbc2VsZWN0b3JWYWx1ZV0pXG5cbiAgICBjb25zdCB7IGZpbHRlclZhbHVlIH0gPSB1c2VQYXJhbXMoKTtcbiAgICAvLyBzZXRTZWxlY3RvclZhbHVlKHBhcnNlSW50KGZpbHRlclZhbHVlKSlcblxuICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyVmFsdWVQQVNFS1wiLCBmaWx0ZXJWYWx1ZSlcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdG9yVmFsdWVcIiwgc2VsZWN0b3JWYWx1ZSlcbiAgICAvLyAvLyBjb25zb2xlLmxvZyhcInN1bVwiLCBzdW0sIHR5cGVvZiBzdW0pXG4gICAgLy9cbiAgICAvLyBjb25zb2xlLmxvZyhcInNlbGVjdG9yVmFsdWVcIiwgc2VsZWN0b3JWYWx1ZSlcblxuICAgIC8vIGNvbnN0IG5ld1N0YXRlUHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzKHByb2R1Y3RzLCBwYXJzZUludChzZWxlY3RvclZhbHVlKSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpbHRlclZhbHVlXCIsIGZpbHRlclZhbHVlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNlbGVjdG9yVmFsdWVcIiwgc2VsZWN0b3JWYWx1ZSlcbiAgICAgICAgLy8gc2V0U2VsZWN0b3JWYWx1ZShwYXJzZUludChmaWx0ZXJWYWx1ZSkpO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICAvLyBjb25zdCBmaWx0ZXJlZFN0YXRlID0gZ2V0UHJvZHVjdChhbGxQcm9kdWN0cywgcGFyc2VJbnQoaWRQcm9kdWN0KSk7XG4gICAgLy8gY29uc3QgcHJvZHVjdCA9IGZpbHRlcmVkU3RhdGVbMF1cblxuXG5cblxuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9cIn0gIGV4YWN0IG9uQ2xpY2s9eygpPT4gc2V0U2VsZWN0b3JWYWx1ZSgwKX0+V3N6eXN0a2llPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMFwifT5kbyAxMHrFgkJFWjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTBcIn0gZXhhY3Qgb25DbGljaz17KCk9PiBzZXRTZWxlY3RvclZhbHVlKGZpbHRlclZhbHVlKX0+ZG8gMTB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzUwXCJ9PmRvIDUwesWCIEJFWjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvNTBcIn0gZXhhY3Qgb25DbGljaz17KCk9PiBzZXRTZWxlY3RvclZhbHVlKGZpbHRlclZhbHVlKX0+ZG8gNTB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzEwMFwifSBleGFjdCBvbkNsaWNrPXsoKT0+IHNldFNlbGVjdG9yVmFsdWUoZmlsdGVyVmFsdWUpfT5kbyAxMDB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPEZvcm0gYWRkUHJvZHVjdD17YWRkUHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICA8TGlzdCByZW1vdmVQcm9kdWN0PXtyZW1vdmVQcm9kdWN0fSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG4gICAgICAgICAgICAgICAgPGgxPkRvIHphcMWCYXR5OiB7c3VtfSBQTE48L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJlNzMzOGRhM2FiMmIxMzYzZGYxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiTGlzdCIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiQ2FydCIsIl9yZWYiLCJwcm9kdWN0cyIsInN1bSIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0b3JWYWx1ZSIsInNldFNlbGVjdG9yVmFsdWUiLCJfdXNlUGFyYW1zIiwiZmlsdGVyVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsInRvIiwiZXhhY3QiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==