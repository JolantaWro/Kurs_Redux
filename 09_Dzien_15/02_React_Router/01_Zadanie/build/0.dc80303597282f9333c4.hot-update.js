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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)().filterValue),
    _useState2 = _slicedToArray(_useState, 2),
    selectorValue = _useState2[0],
    setSelectorValue = _useState2[1];
  console.log("selectorValue", selectorValue);
  //
  // const filteredState = getProduct(allProducts, parseInt(idProduct));
  // const product = filteredState[0]

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    filterValue = _useParams.filterValue;
  console.log("filterValue", filterValue);
  console.log("sum", sum, _typeof(sum));
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2fe43fb2f1eb3df289b1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kYzgwMzAzNTk3MjgyZjkzMzNjNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3ZCO0FBQ0E7QUFDdUI7QUFFakQsSUFBTU8sSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUFDLElBQUEsRUFBcUQ7RUFBQSxJQUEvQ0MsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7SUFBRUMsR0FBRyxHQUFBRixJQUFBLENBQUhFLEdBQUc7SUFBRUMsVUFBVSxHQUFBSCxJQUFBLENBQVZHLFVBQVU7SUFBRUMsYUFBYSxHQUFBSixJQUFBLENBQWJJLGFBQWE7RUFFcEQsSUFBQUMsU0FBQSxHQUEwQ1gsK0NBQVEsQ0FBQ0ksMkRBQVMsRUFBRSxDQUFDUSxXQUFXLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBcEVJLGFBQWEsR0FBQUYsVUFBQTtJQUFFRyxnQkFBZ0IsR0FBQUgsVUFBQTtFQUV0Q0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFSCxhQUFhLENBQUM7RUFDM0M7RUFDQTtFQUNBOztFQUVBLElBQUFJLFVBQUEsR0FBd0JmLDJEQUFTLEVBQUU7SUFBM0JRLFdBQVcsR0FBQU8sVUFBQSxDQUFYUCxXQUFXO0VBRW5CSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVOLFdBQVcsQ0FBQztFQUN2Q0ssT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFVixHQUFHLEVBQUFZLE9BQUEsQ0FBU1osR0FBRyxFQUFDO0VBTW5DLG9CQUNNViwwREFBQSwyQkFDTUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ21CLEVBQUUsRUFBRTtFQUFJLEdBQUMsV0FBUyxDQUFPLGVBQUF4QiwwREFBQSxZQUFNLGVBQ3JDQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDbUIsRUFBRSxFQUFFO0VBQU0sR0FBQyxjQUFPLENBQU8sZUFBQXhCLDBEQUFBLFlBQU0sZUFDckNBLDBEQUFBLENBQUNLLGtEQUFJO0lBQUNtQixFQUFFLEVBQUU7RUFBTSxHQUFDLGNBQU8sQ0FBTyxlQUFBeEIsMERBQUEsWUFBTSxlQUNyQ0EsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ21CLEVBQUUsRUFBRTtFQUFPLEdBQUMsZUFBUSxDQUFPLGVBQUF4QiwwREFBQSxZQUFNLGVBQ3ZDQSwwREFBQSxDQUFDRyw2Q0FBSTtJQUFDUSxVQUFVLEVBQUVBO0VBQVcsRUFBRyxlQUNoQ1gsMERBQUEsQ0FBQ0ksNkNBQUk7SUFBQ1EsYUFBYSxFQUFFQSxhQUFjO0lBQUNILFFBQVEsRUFBRUEsUUFBUztJQUFDSyxXQUFXLEVBQUVBO0VBQVksRUFBRSxlQUNuRmQsMERBQUEsYUFBSSxtQkFBWSxFQUFDVSxHQUFHLEVBQUMsTUFBSSxDQUFLLENBQzlCO0FBRWhCLENBQUM7QUFJRCxpRUFBZUgsSUFBSTs7Ozs7Ozs7VUN0Q25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQge0xpbmssIHVzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgQ2FydCA9ICh7IHByb2R1Y3RzLCBzdW0sIGFkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3QgfSkgPT4ge1xuXG4gICAgY29uc3QgW3NlbGVjdG9yVmFsdWUsIHNldFNlbGVjdG9yVmFsdWVdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuZmlsdGVyVmFsdWUpXG5cbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdG9yVmFsdWVcIiwgc2VsZWN0b3JWYWx1ZSlcbiAgICAvL1xuICAgIC8vIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSBnZXRQcm9kdWN0KGFsbFByb2R1Y3RzLCBwYXJzZUludChpZFByb2R1Y3QpKTtcbiAgICAvLyBjb25zdCBwcm9kdWN0ID0gZmlsdGVyZWRTdGF0ZVswXVxuXG4gICAgY29uc3QgeyBmaWx0ZXJWYWx1ZSB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImZpbHRlclZhbHVlXCIsIGZpbHRlclZhbHVlKVxuICAgIGNvbnNvbGUubG9nKFwic3VtXCIsIHN1bSwgdHlwZW9mIHN1bSlcblxuXG5cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL1wifT5Xc3p5c3RraWU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzEwXCJ9PmRvIDEwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi81MFwifT5kbyA1MHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTAwXCJ9PmRvIDEwMHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybSBhZGRQcm9kdWN0PXthZGRQcm9kdWN0fSAvPlxuICAgICAgICAgICAgICAgIDxMaXN0IHJlbW92ZVByb2R1Y3Q9e3JlbW92ZVByb2R1Y3R9IHByb2R1Y3RzPXtwcm9kdWN0c30gZmlsdGVyVmFsdWU9e2ZpbHRlclZhbHVlfS8+XG4gICAgICAgICAgICAgICAgPGgxPkRvIHphcMWCYXR5OiB7c3VtfSBQTE48L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJmZTQzZmIyZjFlYjNkZjI4OWIxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiTGlzdCIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJDYXJ0IiwiX3JlZiIsInByb2R1Y3RzIiwic3VtIiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJfdXNlU3RhdGUiLCJmaWx0ZXJWYWx1ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdG9yVmFsdWUiLCJzZXRTZWxlY3RvclZhbHVlIiwiY29uc29sZSIsImxvZyIsIl91c2VQYXJhbXMiLCJfdHlwZW9mIiwiY3JlYXRlRWxlbWVudCIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==