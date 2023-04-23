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
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  console.log(navigate);
  var handleUrl = function handleUrl() {
    navigate("/10");
  };
  // navigate('/home');

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
/******/ 	__webpack_require__.h = () => ("a08b463b543ffac5ee87")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44YTM2Y2IxNTMyNDM4YzkxY2M1NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3ZCO0FBQ0E7QUFDdUI7QUFDRjtBQUNLO0FBRXBELElBQU1TLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBQyxJQUFBLEVBQXFEO0VBQUEsSUFBL0NDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQUVDLEdBQUcsR0FBQUYsSUFBQSxDQUFIRSxHQUFHO0lBQUVDLFVBQVUsR0FBQUgsSUFBQSxDQUFWRyxVQUFVO0lBQUVDLGFBQWEsR0FBQUosSUFBQSxDQUFiSSxhQUFhO0VBRXBELElBQUFDLFNBQUEsR0FBMENiLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFjLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTlDRyxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsZ0JBQWdCLEdBQUFILFVBQUE7RUFFdEMsSUFBTUksUUFBUSxHQUFHYiw2REFBVyxFQUFFO0VBQzlCYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDO0VBQ3JCLElBQU1HLFNBQVMsR0FBRSxTQUFYQSxTQUFTQSxDQUFBLEVBQVE7SUFDbkJILFFBQVEsQ0FBQyxLQUFLLENBQUM7RUFDbkIsQ0FBQztFQUNEOztFQUVBO0VBQ0E7RUFDQTs7RUFFQSxJQUFBSSxVQUFBLEdBQXdCbEIsMkRBQVMsRUFBRTtJQUEzQm1CLFdBQVcsR0FBQUQsVUFBQSxDQUFYQyxXQUFXO0VBQ25COztFQUVBSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRUcsV0FBVyxDQUFDO0VBQzVDSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVKLGFBQWEsQ0FBQztFQUMzQztFQUNBO0VBQ0E7O0VBRUE7O0VBRUEsSUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4Qk4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDM0I7SUFDQTtJQUNBO0VBQ0osQ0FBQzs7RUFHRDtFQUNBO0VBQ0E7O0VBSUEsb0JBQ003QiwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQzBCLEVBQUUsRUFBRTtFQUFJLEdBQUMsV0FBUyxDQUFPLGVBQUEvQiwwREFBQSxZQUFNLGVBQ3JDQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDMEIsRUFBRSxFQUFFO0VBQU0sR0FBQyxjQUFPLENBQU8sZUFBQS9CLDBEQUFBLFlBQU0sZUFDckNBLDBEQUFBLENBQUNLLGtEQUFJO0lBQUMwQixFQUFFLEVBQUU7RUFBTSxHQUFDLGNBQU8sQ0FBTyxlQUFBL0IsMERBQUEsWUFBTSxlQUNyQ0EsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQzBCLEVBQUUsRUFBRTtFQUFPLEdBQUMsZUFBUSxDQUFPLGVBQUEvQiwwREFBQSxZQUFNLGVBT3JDQSwwREFBQSxDQUFDRyw2Q0FBSTtJQUFDVSxVQUFVLEVBQUVBO0VBQVcsRUFBRyxlQUNoQ2IsMERBQUEsQ0FBQ0ksNkNBQUk7SUFBQ1UsYUFBYSxFQUFFQSxhQUFjO0lBQUNILFFBQVEsRUFBRUE7RUFBUyxFQUFHLGVBQzFEWCwwREFBQSxhQUFJLG1CQUFZLEVBQUNZLEdBQUcsRUFBQyxNQUFJLENBQUssQ0FDOUI7QUFFaEIsQ0FBQztBQUlELGlFQUFlSCxJQUFJOzs7Ozs7OztVQ3BFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7ZmlsdGVyZWRQcm9kdWN0c30gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xuXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHN1bSwgYWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCB9KSA9PiB7XG5cbiAgICBjb25zdCBbc2VsZWN0b3JWYWx1ZSwgc2V0U2VsZWN0b3JWYWx1ZV0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIGNvbnNvbGUubG9nKG5hdmlnYXRlKVxuICAgIGNvbnN0IGhhbmRsZVVybCA9KCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZShcIi8xMFwiKVxuICAgIH1cbiAgICAvLyBuYXZpZ2F0ZSgnL2hvbWUnKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIC8vIHNldFNlbGVjdG9yVmFsdWUoZmlsdGVyVmFsdWUpXG4gICAgLy8gfSxbc2VsZWN0b3JWYWx1ZV0pXG5cbiAgICBjb25zdCB7IGZpbHRlclZhbHVlIH0gPSB1c2VQYXJhbXMoKTtcbiAgICAvLyBzZXRTZWxlY3RvclZhbHVlKHBhcnNlSW50KGZpbHRlclZhbHVlKSlcblxuICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyVmFsdWVQQVNFS1wiLCBmaWx0ZXJWYWx1ZSlcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdG9yVmFsdWVcIiwgc2VsZWN0b3JWYWx1ZSlcbiAgICAvLyAvLyBjb25zb2xlLmxvZyhcInN1bVwiLCBzdW0sIHR5cGVvZiBzdW0pXG4gICAgLy9cbiAgICAvLyBjb25zb2xlLmxvZyhcInNlbGVjdG9yVmFsdWVcIiwgc2VsZWN0b3JWYWx1ZSlcblxuICAgIC8vIGNvbnN0IG5ld1N0YXRlUHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzKHByb2R1Y3RzLCBwYXJzZUludChzZWxlY3RvclZhbHVlKSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpbHRlclZhbHVlXCIsIGZpbHRlclZhbHVlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNlbGVjdG9yVmFsdWVcIiwgc2VsZWN0b3JWYWx1ZSlcbiAgICAgICAgLy8gc2V0U2VsZWN0b3JWYWx1ZShwYXJzZUludChmaWx0ZXJWYWx1ZSkpO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICAvLyBjb25zdCBmaWx0ZXJlZFN0YXRlID0gZ2V0UHJvZHVjdChhbGxQcm9kdWN0cywgcGFyc2VJbnQoaWRQcm9kdWN0KSk7XG4gICAgLy8gY29uc3QgcHJvZHVjdCA9IGZpbHRlcmVkU3RhdGVbMF1cblxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExpbmsgdG89e1wiL1wifT5Xc3p5c3RraWU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMFwifT5kbyAxMHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzUwXCJ9PmRvIDUwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTAwXCJ9PmRvIDEwMHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICB7Lyo8TGluayB0bz17XCIvXCJ9ICBleGFjdCBvbkNsaWNrPXsoKT0+IHNldFNlbGVjdG9yVmFsdWUoMCl9PldzenlzdGtpZTwvTGluaz48YnIgLz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8TGluayB0bz17XCIvMTBcIn0+ZG8gMTB6xYJCRVo8L0xpbms+PGJyIC8+Ki99XG4gICAgICAgICAgICAgICAgey8qPExpbmsgdG89e1wiLzEwXCJ9IGV4YWN0IG9uQ2xpY2s9eygpPT4gc2V0U2VsZWN0b3JWYWx1ZShmaWx0ZXJWYWx1ZSl9PmRvIDEwesWCPC9MaW5rPjxiciAvPiovfVxuICAgICAgICAgICAgICAgIHsvKjxMaW5rIHRvPXtcIi81MFwifT5kbyA1MHrFgiBCRVo8L0xpbms+PGJyIC8+Ki99XG4gICAgICAgICAgICAgICAgey8qPExpbmsgdG89e1wiLzUwXCJ9IGV4YWN0IG9uQ2xpY2s9eygpPT4gc2V0U2VsZWN0b3JWYWx1ZShmaWx0ZXJWYWx1ZSl9PmRvIDUwesWCPC9MaW5rPjxiciAvPiovfVxuICAgICAgICAgICAgICAgIHsvKjxMaW5rIHRvPXtcIi8xMDBcIn0gZXhhY3Qgb25DbGljaz17KCk9PiBzZXRTZWxlY3RvclZhbHVlKGZpbHRlclZhbHVlKX0+ZG8gMTAwesWCPC9MaW5rPjxiciAvPiovfVxuICAgICAgICAgICAgICAgIDxGb3JtIGFkZFByb2R1Y3Q9e2FkZFByb2R1Y3R9IC8+XG4gICAgICAgICAgICAgICAgPExpc3QgcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgICAgICAgICAgIDxoMT5EbyB6YXDFgmF0eToge3N1bX0gUExOPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMDhiNDYzYjU0M2ZmYWM1ZWU4N1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkxpc3QiLCJMaW5rIiwidXNlUGFyYW1zIiwidXNlTmF2aWdhdGUiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiQ2FydCIsIl9yZWYiLCJwcm9kdWN0cyIsInN1bSIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0b3JWYWx1ZSIsInNldFNlbGVjdG9yVmFsdWUiLCJuYXZpZ2F0ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVVcmwiLCJfdXNlUGFyYW1zIiwiZmlsdGVyVmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwidG8iXSwic291cmNlUm9vdCI6IiJ9