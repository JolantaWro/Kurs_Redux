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
    to: "/10"
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
/******/ 	__webpack_require__.h = () => ("bfe0ea7c6686ccca1121")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xODdmY2EzMmEyZTlkZjBlZTRhOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3ZCO0FBQ0E7QUFDdUI7QUFDRztBQUVwRCxJQUFNUSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFxRDtFQUFBLElBQS9DQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFQyxHQUFHLEdBQUFGLElBQUEsQ0FBSEUsR0FBRztJQUFFQyxVQUFVLEdBQUFILElBQUEsQ0FBVkcsVUFBVTtJQUFFQyxhQUFhLEdBQUFKLElBQUEsQ0FBYkksYUFBYTtFQUVwRCxJQUFBQyxTQUFBLEdBQTBDWiwrQ0FBUSxDQUFDSSwyREFBUyxFQUFFLENBQUNTLFdBQVcsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUgsU0FBQTtJQUFwRUksYUFBYSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBRXRDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVILGFBQWEsQ0FBQztFQUUzQyxJQUFNSSxnQkFBZ0IsR0FBR2Ysa0VBQWdCLENBQUNHLFFBQVEsRUFBRWEsUUFBUSxDQUFDTCxhQUFhLENBQUMsQ0FBQztFQUU1RSxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQztJQUNuQztFQUNKLENBQUM7O0VBR0Q7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBOztFQU1BLG9CQUNNM0IsMERBQUEsMkJBQ01BLDBEQUFBLENBQUNLLGtEQUFJO0lBQUN3QixFQUFFLEVBQUU7RUFBSSxHQUFDLFdBQVMsQ0FBTyxlQUFBN0IsMERBQUEsWUFBTSxlQUNyQ0EsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ3dCLEVBQUUsRUFBRTtFQUFNLEdBQUUsY0FBTyxDQUFPLGVBQUE3QiwwREFBQSxZQUFNLGVBQ3RDQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDd0IsRUFBRSxFQUFFO0VBQU0sR0FBRSxjQUFPLENBQU8sZUFBQTdCLDBEQUFBLFlBQU0sZUFDdENBLDBEQUFBLENBQUNLLGtEQUFJO0lBQUN3QixFQUFFLEVBQUU7RUFBTyxHQUFDLGVBQVEsQ0FBTyxlQUFBN0IsMERBQUEsWUFBTSxlQUN2Q0EsMERBQUEsQ0FBQ0csNkNBQUk7SUFBQ1MsVUFBVSxFQUFFQTtFQUFXLEVBQUcsZUFDaENaLDBEQUFBLENBQUNJLDZDQUFJO0lBQUNTLGFBQWEsRUFBRUEsYUFBYztJQUFDSCxRQUFRLEVBQUVZO0VBQWlCLEVBQUcsZUFDbEV0QiwwREFBQSxhQUFJLG1CQUFZLEVBQUNXLEdBQUcsRUFBQyxNQUFJLENBQUssQ0FDOUI7QUFFaEIsQ0FBQztBQUlELGlFQUFlSCxJQUFJOzs7Ozs7OztVQ2hEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtmaWx0ZXJlZFByb2R1Y3RzfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IENhcnQgPSAoeyBwcm9kdWN0cywgc3VtLCBhZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0IH0pID0+IHtcblxuICAgIGNvbnN0IFtzZWxlY3RvclZhbHVlLCBzZXRTZWxlY3RvclZhbHVlXSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmZpbHRlclZhbHVlKVxuXG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RvclZhbHVlXCIsIHNlbGVjdG9yVmFsdWUpXG5cbiAgICBjb25zdCBuZXdTdGF0ZVByb2R1Y3RzID0gZmlsdGVyZWRQcm9kdWN0cyhwcm9kdWN0cywgcGFyc2VJbnQoc2VsZWN0b3JWYWx1ZSkpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZUFzTnVtYmVyKVxuICAgICAgICAvLyBzZXRTZWxlY3RvclZhbHVlKGUudGFyZ2V0LnZhbHVlQXNOdW1iZXIpO1xuICAgIH1cblxuXG4gICAgLy9cbiAgICAvLyBjb25zdCBmaWx0ZXJlZFN0YXRlID0gZ2V0UHJvZHVjdChhbGxQcm9kdWN0cywgcGFyc2VJbnQoaWRQcm9kdWN0KSk7XG4gICAgLy8gY29uc3QgcHJvZHVjdCA9IGZpbHRlcmVkU3RhdGVbMF1cblxuICAgIC8vIGNvbnN0IHsgZmlsdGVyVmFsdWUgfSA9IHVzZVBhcmFtcygpO1xuICAgIC8vXG4gICAgLy8gY29uc29sZS5sb2coXCJmaWx0ZXJWYWx1ZVwiLCBmaWx0ZXJWYWx1ZSlcbiAgICAvLyBjb25zb2xlLmxvZyhcInN1bVwiLCBzdW0sIHR5cGVvZiBzdW0pXG5cblxuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9cIn0+V3N6eXN0a2llPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMFwifSA+ZG8gMTB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzUwXCJ9ID5kbyA1MHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTAwXCJ9PmRvIDEwMHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybSBhZGRQcm9kdWN0PXthZGRQcm9kdWN0fSAvPlxuICAgICAgICAgICAgICAgIDxMaXN0IHJlbW92ZVByb2R1Y3Q9e3JlbW92ZVByb2R1Y3R9IHByb2R1Y3RzPXtuZXdTdGF0ZVByb2R1Y3RzfSAvPlxuICAgICAgICAgICAgICAgIDxoMT5EbyB6YXDFgmF0eToge3N1bX0gUExOPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiZmUwZWE3YzY2ODZjY2NhMTEyMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkxpc3QiLCJMaW5rIiwidXNlUGFyYW1zIiwiZmlsdGVyZWRQcm9kdWN0cyIsIkNhcnQiLCJfcmVmIiwicHJvZHVjdHMiLCJzdW0iLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsIl91c2VTdGF0ZSIsImZpbHRlclZhbHVlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0b3JWYWx1ZSIsInNldFNlbGVjdG9yVmFsdWUiLCJjb25zb2xlIiwibG9nIiwibmV3U3RhdGVQcm9kdWN0cyIsInBhcnNlSW50IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlQXNOdW1iZXIiLCJjcmVhdGVFbGVtZW50IiwidG8iXSwic291cmNlUm9vdCI6IiJ9