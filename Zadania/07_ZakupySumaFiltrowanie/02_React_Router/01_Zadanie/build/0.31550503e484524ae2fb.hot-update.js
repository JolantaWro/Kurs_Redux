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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)().filterValue),
    _useState2 = _slicedToArray(_useState, 2),
    selectorValue = _useState2[0],
    setSelectorValue = _useState2[1];
  console.log("selectorValue", selectorValue);

  // const newStateProducts = filteredProducts(products, parseInt(selectorValue))

  var handleChange = function handleChange(e) {
    console.log(e.target.valueAsNumber);
    // setSelectorValue(e.target.valueAsNumber);
  };

  //
  // const filteredState = getProduct(allProducts, parseInt(idProduct));
  // const product = filteredState[0]

  // const { filterValue } = useParams();
  //
  // console.log("filterValue", filterValue)
  // console.log("sum", sum, typeof sum)

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/"
  }, "Wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/10"
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/50"
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/100"
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
/******/ 	__webpack_require__.h = () => ("2b95ffeeba0aa7f9ad33")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMTU1MDUwM2U0ODQ1MjRhZTJmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3ZCO0FBQ0E7QUFDdUI7QUFDRztBQUVwRCxJQUFNUSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFxRDtFQUFBLElBQS9DQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFQyxHQUFHLEdBQUFGLElBQUEsQ0FBSEUsR0FBRztJQUFFQyxVQUFVLEdBQUFILElBQUEsQ0FBVkcsVUFBVTtJQUFFQyxhQUFhLEdBQUFKLElBQUEsQ0FBYkksYUFBYTtFQUVwRCxJQUFBQyxTQUFBLEdBQTBDWiwrQ0FBUSxDQUFDSSwyREFBUyxFQUFFLENBQUNTLFdBQVcsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUgsU0FBQTtJQUFwRUksYUFBYSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBRXRDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVILGFBQWEsQ0FBQzs7RUFFM0M7O0VBRUEsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QkgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLENBQUM7SUFDbkM7RUFDSixDQUFDOztFQUdEO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7RUFNQSxvQkFDTXpCLDBEQUFBLDJCQUNNQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDc0IsRUFBRSxFQUFFO0VBQUksR0FBQyxXQUFTLENBQU8sZUFBQTNCLDBEQUFBLFlBQU0sZUFDckNBLDBEQUFBLENBQUNLLGtEQUFJO0lBQUNzQixFQUFFLEVBQUU7RUFBTSxHQUFFLGNBQU8sQ0FBTyxlQUFBM0IsMERBQUEsWUFBTSxlQUN0Q0EsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ3NCLEVBQUUsRUFBRTtFQUFNLEdBQUUsY0FBTyxDQUFPLGVBQUEzQiwwREFBQSxZQUFNLGVBQ3RDQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDc0IsRUFBRSxFQUFFO0VBQU8sR0FBQyxlQUFRLENBQU8sZUFBQTNCLDBEQUFBLFlBQU0sZUFDdkNBLDBEQUFBLENBQUNHLDZDQUFJO0lBQUNTLFVBQVUsRUFBRUE7RUFBVyxFQUFHLGVBQ2hDWiwwREFBQSxDQUFDSSw2Q0FBSTtJQUFDUyxhQUFhLEVBQUVBLGFBQWM7SUFBQ0gsUUFBUSxFQUFFQTtFQUFTLEVBQUcsZUFDMURWLDBEQUFBLGFBQUksbUJBQVksRUFBQ1csR0FBRyxFQUFDLE1BQUksQ0FBSyxDQUM5QjtBQUVoQixDQUFDO0FBSUQsaUVBQWVILElBQUk7Ozs7Ozs7O1VDaERuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IHtMaW5rLCB1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2ZpbHRlcmVkUHJvZHVjdHN9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuY29uc3QgQ2FydCA9ICh7IHByb2R1Y3RzLCBzdW0sIGFkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3QgfSkgPT4ge1xuXG4gICAgY29uc3QgW3NlbGVjdG9yVmFsdWUsIHNldFNlbGVjdG9yVmFsdWVdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuZmlsdGVyVmFsdWUpXG5cbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdG9yVmFsdWVcIiwgc2VsZWN0b3JWYWx1ZSlcblxuICAgIC8vIGNvbnN0IG5ld1N0YXRlUHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzKHByb2R1Y3RzLCBwYXJzZUludChzZWxlY3RvclZhbHVlKSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlQXNOdW1iZXIpXG4gICAgICAgIC8vIHNldFNlbGVjdG9yVmFsdWUoZS50YXJnZXQudmFsdWVBc051bWJlcik7XG4gICAgfVxuXG5cbiAgICAvL1xuICAgIC8vIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSBnZXRQcm9kdWN0KGFsbFByb2R1Y3RzLCBwYXJzZUludChpZFByb2R1Y3QpKTtcbiAgICAvLyBjb25zdCBwcm9kdWN0ID0gZmlsdGVyZWRTdGF0ZVswXVxuXG4gICAgLy8gY29uc3QgeyBmaWx0ZXJWYWx1ZSB9ID0gdXNlUGFyYW1zKCk7XG4gICAgLy9cbiAgICAvLyBjb25zb2xlLmxvZyhcImZpbHRlclZhbHVlXCIsIGZpbHRlclZhbHVlKVxuICAgIC8vIGNvbnNvbGUubG9nKFwic3VtXCIsIHN1bSwgdHlwZW9mIHN1bSlcblxuXG5cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL1wifT5Xc3p5c3RraWU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzEwXCJ9ID5kbyAxMHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvNTBcIn0gPmRvIDUwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMDBcIn0+ZG8gMTAwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxGb3JtIGFkZFByb2R1Y3Q9e2FkZFByb2R1Y3R9IC8+XG4gICAgICAgICAgICAgICAgPExpc3QgcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgICAgICAgICAgIDxoMT5EbyB6YXDFgmF0eToge3N1bX0gUExOPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyYjk1ZmZlZWJhMGFhN2Y5YWQzM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkxpc3QiLCJMaW5rIiwidXNlUGFyYW1zIiwiZmlsdGVyZWRQcm9kdWN0cyIsIkNhcnQiLCJfcmVmIiwicHJvZHVjdHMiLCJzdW0iLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsIl91c2VTdGF0ZSIsImZpbHRlclZhbHVlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0b3JWYWx1ZSIsInNldFNlbGVjdG9yVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlQXNOdW1iZXIiLCJjcmVhdGVFbGVtZW50IiwidG8iXSwic291cmNlUm9vdCI6IiJ9