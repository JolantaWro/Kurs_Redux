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
  var newStateProducts = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_3__.filteredProducts)(products, parseInt(selectorValue));
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
    to: "/10",
    onClick: handleChange
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/50"
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/100"
  }, "do 100z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    addProduct: addProduct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    removeProduct: removeProduct,
    products: newStateProducts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Do zap\u0142aty: ", sum, " PLN"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bbae70ee9502c2506c82")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ODZlOGQ0MTIwNmFlNzQzYTU0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3ZCO0FBQ0E7QUFDdUI7QUFDRztBQUVwRCxJQUFNUSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFxRDtFQUFBLElBQS9DQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFQyxHQUFHLEdBQUFGLElBQUEsQ0FBSEUsR0FBRztJQUFFQyxVQUFVLEdBQUFILElBQUEsQ0FBVkcsVUFBVTtJQUFFQyxhQUFhLEdBQUFKLElBQUEsQ0FBYkksYUFBYTtFQUVwRCxJQUFBQyxTQUFBLEdBQTBDWiwrQ0FBUSxDQUFDSSwyREFBUyxFQUFFLENBQUNTLFdBQVcsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUgsU0FBQTtJQUFwRUksYUFBYSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBRXRDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVILGFBQWEsQ0FBQztFQUUzQyxJQUFNSSxnQkFBZ0IsR0FBR2Ysa0VBQWdCLENBQUNHLFFBQVEsRUFBRWEsUUFBUSxDQUFDTCxhQUFhLENBQUMsQ0FBQztFQUU1RSxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQztJQUNuQztFQUNKLENBQUM7O0VBR0Q7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBOztFQU1BLG9CQUNNM0IsMERBQUEsMkJBQ01BLDBEQUFBLENBQUNLLGtEQUFJO0lBQUN3QixFQUFFLEVBQUU7RUFBSSxHQUFDLFdBQVMsQ0FBTyxlQUFBN0IsMERBQUEsWUFBTSxlQUNyQ0EsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ3dCLEVBQUUsRUFBRSxLQUFNO0lBQUNDLE9BQU8sRUFBRU47RUFBYSxHQUFFLGNBQU8sQ0FBTyxlQUFBeEIsMERBQUEsWUFBTSxlQUM3REEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ3dCLEVBQUUsRUFBRTtFQUFNLEdBQUMsY0FBTyxDQUFPLGVBQUE3QiwwREFBQSxZQUFNLGVBQ3JDQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDd0IsRUFBRSxFQUFFO0VBQU8sR0FBQyxlQUFRLENBQU8sZUFBQTdCLDBEQUFBLFlBQU0sZUFDdkNBLDBEQUFBLENBQUNHLDZDQUFJO0lBQUNTLFVBQVUsRUFBRUE7RUFBVyxFQUFHLGVBQ2hDWiwwREFBQSxDQUFDSSw2Q0FBSTtJQUFDUyxhQUFhLEVBQUVBLGFBQWM7SUFBQ0gsUUFBUSxFQUFFWTtFQUFpQixFQUFHLGVBQ2xFdEIsMERBQUEsYUFBSSxtQkFBWSxFQUFDVyxHQUFHLEVBQUMsTUFBSSxDQUFLLENBQzlCO0FBRWhCLENBQUM7QUFJRCxpRUFBZUgsSUFBSTs7Ozs7Ozs7VUNoRG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQge0xpbmssIHVzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7ZmlsdGVyZWRQcm9kdWN0c30gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xuXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHN1bSwgYWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCB9KSA9PiB7XG5cbiAgICBjb25zdCBbc2VsZWN0b3JWYWx1ZSwgc2V0U2VsZWN0b3JWYWx1ZV0gPSB1c2VTdGF0ZSh1c2VQYXJhbXMoKS5maWx0ZXJWYWx1ZSlcblxuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0b3JWYWx1ZVwiLCBzZWxlY3RvclZhbHVlKVxuXG4gICAgY29uc3QgbmV3U3RhdGVQcm9kdWN0cyA9IGZpbHRlcmVkUHJvZHVjdHMocHJvZHVjdHMsIHBhcnNlSW50KHNlbGVjdG9yVmFsdWUpKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWVBc051bWJlcilcbiAgICAgICAgLy8gc2V0U2VsZWN0b3JWYWx1ZShlLnRhcmdldC52YWx1ZUFzTnVtYmVyKTtcbiAgICB9XG5cblxuICAgIC8vXG4gICAgLy8gY29uc3QgZmlsdGVyZWRTdGF0ZSA9IGdldFByb2R1Y3QoYWxsUHJvZHVjdHMsIHBhcnNlSW50KGlkUHJvZHVjdCkpO1xuICAgIC8vIGNvbnN0IHByb2R1Y3QgPSBmaWx0ZXJlZFN0YXRlWzBdXG5cbiAgICAvLyBjb25zdCB7IGZpbHRlclZhbHVlIH0gPSB1c2VQYXJhbXMoKTtcbiAgICAvL1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsdGVyVmFsdWVcIiwgZmlsdGVyVmFsdWUpXG4gICAgLy8gY29uc29sZS5sb2coXCJzdW1cIiwgc3VtLCB0eXBlb2Ygc3VtKVxuXG5cblxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvXCJ9PldzenlzdGtpZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTBcIn0gb25DbGljaz17aGFuZGxlQ2hhbmdlfSA+ZG8gMTB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzUwXCJ9PmRvIDUwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMDBcIn0+ZG8gMTAwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxGb3JtIGFkZFByb2R1Y3Q9e2FkZFByb2R1Y3R9IC8+XG4gICAgICAgICAgICAgICAgPExpc3QgcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gcHJvZHVjdHM9e25ld1N0YXRlUHJvZHVjdHN9IC8+XG4gICAgICAgICAgICAgICAgPGgxPkRvIHphcMWCYXR5OiB7c3VtfSBQTE48L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJiYWU3MGVlOTUwMmMyNTA2YzgyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiTGlzdCIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiQ2FydCIsIl9yZWYiLCJwcm9kdWN0cyIsInN1bSIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiX3VzZVN0YXRlIiwiZmlsdGVyVmFsdWUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RvclZhbHVlIiwic2V0U2VsZWN0b3JWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJuZXdTdGF0ZVByb2R1Y3RzIiwicGFyc2VJbnQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWVBc051bWJlciIsImNyZWF0ZUVsZW1lbnQiLCJ0byIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9