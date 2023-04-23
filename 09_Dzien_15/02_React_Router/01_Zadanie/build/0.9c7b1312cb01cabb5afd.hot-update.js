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
/******/ 	__webpack_require__.h = () => ("8a36cb1532438c91cc54")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45YzdiMTMxMmNiMDFjYWJiNWFmZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3ZCO0FBQ0E7QUFDdUI7QUFDRjtBQUNLO0FBRXBELElBQU1TLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBQyxJQUFBLEVBQXFEO0VBQUEsSUFBL0NDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQUVDLEdBQUcsR0FBQUYsSUFBQSxDQUFIRSxHQUFHO0lBQUVDLFVBQVUsR0FBQUgsSUFBQSxDQUFWRyxVQUFVO0lBQUVDLGFBQWEsR0FBQUosSUFBQSxDQUFiSSxhQUFhO0VBRXBELElBQUFDLFNBQUEsR0FBMENiLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFjLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTlDRyxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsZ0JBQWdCLEdBQUFILFVBQUE7RUFFdEMsSUFBTUksUUFBUSxHQUFHYiw2REFBVyxFQUFFO0VBQzlCYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDO0VBQ3JCOztFQUVBO0VBQ0E7RUFDQTs7RUFFQSxJQUFBRyxVQUFBLEdBQXdCakIsMkRBQVMsRUFBRTtJQUEzQmtCLFdBQVcsR0FBQUQsVUFBQSxDQUFYQyxXQUFXO0VBQ25COztFQUVBSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRUUsV0FBVyxDQUFDO0VBQzVDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVKLGFBQWEsQ0FBQztFQUMzQztFQUNBO0VBQ0E7O0VBRUE7O0VBRUEsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QkwsT0FBTyxDQUFDQyxHQUFHLENBQUNJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDM0I7SUFDQTtJQUNBO0VBQ0osQ0FBQzs7RUFHRDtFQUNBO0VBQ0E7O0VBSUEsb0JBQ001QiwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ3lCLEVBQUUsRUFBRTtFQUFJLEdBQUMsV0FBUyxDQUFPLGVBQUE5QiwwREFBQSxZQUFNLGVBQ3JDQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDeUIsRUFBRSxFQUFFO0VBQU0sR0FBQyxjQUFPLENBQU8sZUFBQTlCLDBEQUFBLFlBQU0sZUFDckNBLDBEQUFBLENBQUNLLGtEQUFJO0lBQUN5QixFQUFFLEVBQUU7RUFBTSxHQUFDLGNBQU8sQ0FBTyxlQUFBOUIsMERBQUEsWUFBTSxlQUNyQ0EsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ3lCLEVBQUUsRUFBRTtFQUFPLEdBQUMsZUFBUSxDQUFPLGVBQUE5QiwwREFBQSxZQUFNLGVBT3JDQSwwREFBQSxDQUFDRyw2Q0FBSTtJQUFDVSxVQUFVLEVBQUVBO0VBQVcsRUFBRyxlQUNoQ2IsMERBQUEsQ0FBQ0ksNkNBQUk7SUFBQ1UsYUFBYSxFQUFFQSxhQUFjO0lBQUNILFFBQVEsRUFBRUE7RUFBUyxFQUFHLGVBQzFEWCwwREFBQSxhQUFJLG1CQUFZLEVBQUNZLEdBQUcsRUFBQyxNQUFJLENBQUssQ0FDOUI7QUFFaEIsQ0FBQztBQUlELGlFQUFlSCxJQUFJOzs7Ozs7OztVQ2pFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7ZmlsdGVyZWRQcm9kdWN0c30gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xuXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHN1bSwgYWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCB9KSA9PiB7XG5cbiAgICBjb25zdCBbc2VsZWN0b3JWYWx1ZSwgc2V0U2VsZWN0b3JWYWx1ZV0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIGNvbnNvbGUubG9nKG5hdmlnYXRlKVxuICAgIC8vIG5hdmlnYXRlKCcvaG9tZScpO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgLy8gc2V0U2VsZWN0b3JWYWx1ZShmaWx0ZXJWYWx1ZSlcbiAgICAvLyB9LFtzZWxlY3RvclZhbHVlXSlcblxuICAgIGNvbnN0IHsgZmlsdGVyVmFsdWUgfSA9IHVzZVBhcmFtcygpO1xuICAgIC8vIHNldFNlbGVjdG9yVmFsdWUocGFyc2VJbnQoZmlsdGVyVmFsdWUpKVxuXG4gICAgY29uc29sZS5sb2coXCJmaWx0ZXJWYWx1ZVBBU0VLXCIsIGZpbHRlclZhbHVlKVxuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0b3JWYWx1ZVwiLCBzZWxlY3RvclZhbHVlKVxuICAgIC8vIC8vIGNvbnNvbGUubG9nKFwic3VtXCIsIHN1bSwgdHlwZW9mIHN1bSlcbiAgICAvL1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2VsZWN0b3JWYWx1ZVwiLCBzZWxlY3RvclZhbHVlKVxuXG4gICAgLy8gY29uc3QgbmV3U3RhdGVQcm9kdWN0cyA9IGZpbHRlcmVkUHJvZHVjdHMocHJvZHVjdHMsIHBhcnNlSW50KHNlbGVjdG9yVmFsdWUpKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsdGVyVmFsdWVcIiwgZmlsdGVyVmFsdWUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2VsZWN0b3JWYWx1ZVwiLCBzZWxlY3RvclZhbHVlKVxuICAgICAgICAvLyBzZXRTZWxlY3RvclZhbHVlKHBhcnNlSW50KGZpbHRlclZhbHVlKSk7XG4gICAgfVxuXG5cbiAgICAvL1xuICAgIC8vIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSBnZXRQcm9kdWN0KGFsbFByb2R1Y3RzLCBwYXJzZUludChpZFByb2R1Y3QpKTtcbiAgICAvLyBjb25zdCBwcm9kdWN0ID0gZmlsdGVyZWRTdGF0ZVswXVxuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8TGluayB0bz17XCIvXCJ9PldzenlzdGtpZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzEwXCJ9PmRvIDEwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICA8TGluayB0bz17XCIvNTBcIn0+ZG8gNTB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMDBcIn0+ZG8gMTAwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIHsvKjxMaW5rIHRvPXtcIi9cIn0gIGV4YWN0IG9uQ2xpY2s9eygpPT4gc2V0U2VsZWN0b3JWYWx1ZSgwKX0+V3N6eXN0a2llPC9MaW5rPjxiciAvPiovfVxuICAgICAgICAgICAgICAgIHsvKjxMaW5rIHRvPXtcIi8xMFwifT5kbyAxMHrFgkJFWjwvTGluaz48YnIgLz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8TGluayB0bz17XCIvMTBcIn0gZXhhY3Qgb25DbGljaz17KCk9PiBzZXRTZWxlY3RvclZhbHVlKGZpbHRlclZhbHVlKX0+ZG8gMTB6xYI8L0xpbms+PGJyIC8+Ki99XG4gICAgICAgICAgICAgICAgey8qPExpbmsgdG89e1wiLzUwXCJ9PmRvIDUwesWCIEJFWjwvTGluaz48YnIgLz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8TGluayB0bz17XCIvNTBcIn0gZXhhY3Qgb25DbGljaz17KCk9PiBzZXRTZWxlY3RvclZhbHVlKGZpbHRlclZhbHVlKX0+ZG8gNTB6xYI8L0xpbms+PGJyIC8+Ki99XG4gICAgICAgICAgICAgICAgey8qPExpbmsgdG89e1wiLzEwMFwifSBleGFjdCBvbkNsaWNrPXsoKT0+IHNldFNlbGVjdG9yVmFsdWUoZmlsdGVyVmFsdWUpfT5kbyAxMDB6xYI8L0xpbms+PGJyIC8+Ki99XG4gICAgICAgICAgICAgICAgPEZvcm0gYWRkUHJvZHVjdD17YWRkUHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICA8TGlzdCByZW1vdmVQcm9kdWN0PXtyZW1vdmVQcm9kdWN0fSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG4gICAgICAgICAgICAgICAgPGgxPkRvIHphcMWCYXR5OiB7c3VtfSBQTE48L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhhMzZjYjE1MzI0MzhjOTFjYzU0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiTGlzdCIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJ1c2VOYXZpZ2F0ZSIsImZpbHRlcmVkUHJvZHVjdHMiLCJDYXJ0IiwiX3JlZiIsInByb2R1Y3RzIiwic3VtIiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RvclZhbHVlIiwic2V0U2VsZWN0b3JWYWx1ZSIsIm5hdmlnYXRlIiwiY29uc29sZSIsImxvZyIsIl91c2VQYXJhbXMiLCJmaWx0ZXJWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=