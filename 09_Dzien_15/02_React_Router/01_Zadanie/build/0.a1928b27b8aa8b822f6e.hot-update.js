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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setSelectorValue(filterValue);
  }, [selectorValue]);
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
/******/ 	__webpack_require__.h = () => ("f38090c79f2443c08274")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMTkyOGIyN2I4YWE4YjgyMmY2ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3ZCO0FBQ0E7QUFDdUI7QUFDRztBQUVwRCxJQUFNUSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFxRDtFQUFBLElBQS9DQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFQyxHQUFHLEdBQUFGLElBQUEsQ0FBSEUsR0FBRztJQUFFQyxVQUFVLEdBQUFILElBQUEsQ0FBVkcsVUFBVTtJQUFFQyxhQUFhLEdBQUFKLElBQUEsQ0FBYkksYUFBYTtFQUVwRCxJQUFBQyxTQUFBLEdBQTBDWiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBYSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE5Q0csYUFBYSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBRXRDZCxnREFBUyxDQUFDLFlBQU07SUFDWmlCLGdCQUFnQixDQUFDQyxXQUFXLENBQUM7RUFDakMsQ0FBQyxFQUFDLENBQUNGLGFBQWEsQ0FBQyxDQUFDO0VBRWxCLElBQUFHLFVBQUEsR0FBd0JkLDJEQUFTLEVBQUU7SUFBM0JhLFdBQVcsR0FBQUMsVUFBQSxDQUFYRCxXQUFXO0VBQ25COztFQUVBRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRUgsV0FBVyxDQUFDO0VBQzVDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVMLGFBQWEsQ0FBQztFQUMzQztFQUNBO0VBQ0E7O0VBRUE7O0VBRUEsSUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QkgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDM0I7SUFDQTtJQUNBO0VBQ0osQ0FBQzs7RUFHRDtFQUNBO0VBQ0E7O0VBUUEsb0JBQ00xQiwwREFBQSwyQkFDTUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ3VCLEVBQUUsRUFBRSxHQUFJO0lBQUVDLEtBQUs7SUFBQ0MsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFLWixnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFBQTtFQUFDLEdBQUMsV0FBUyxDQUFPLGVBQUFsQiwwREFBQSxZQUFNLGVBQy9FQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDdUIsRUFBRSxFQUFFO0VBQU0sR0FBQyxpQkFBVSxDQUFPLGVBQUE1QiwwREFBQSxZQUFNLGVBQ3hDQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDdUIsRUFBRSxFQUFFLEtBQU07SUFBQ0MsS0FBSztJQUFDQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQUtaLGdCQUFnQixDQUFDQyxXQUFXLENBQUM7SUFBQTtFQUFDLEdBQUMsY0FBTyxDQUFPLGVBQUFuQiwwREFBQSxZQUFNLGVBQ3hGQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDdUIsRUFBRSxFQUFFO0VBQU0sR0FBQyxrQkFBVyxDQUFPLGVBQUE1QiwwREFBQSxZQUFNLGVBQ3pDQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDdUIsRUFBRSxFQUFFLEtBQU07SUFBQ0MsS0FBSztJQUFDQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQUtaLGdCQUFnQixDQUFDQyxXQUFXLENBQUM7SUFBQTtFQUFDLEdBQUMsY0FBTyxDQUFPLGVBQUFuQiwwREFBQSxZQUFNLGVBQ3hGQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDdUIsRUFBRSxFQUFFLE1BQU87SUFBQ0MsS0FBSztJQUFDQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQUtaLGdCQUFnQixDQUFDQyxXQUFXLENBQUM7SUFBQTtFQUFDLEdBQUMsZUFBUSxDQUFPLGVBQUFuQiwwREFBQSxZQUFNLGVBQzFGQSwwREFBQSxDQUFDRyw2Q0FBSTtJQUFDUyxVQUFVLEVBQUVBO0VBQVcsRUFBRyxlQUNoQ1osMERBQUEsQ0FBQ0ksNkNBQUk7SUFBQ1MsYUFBYSxFQUFFQSxhQUFjO0lBQUNILFFBQVEsRUFBRUE7RUFBUyxFQUFHLGVBQzFEViwwREFBQSxhQUFJLG1CQUFZLEVBQUNXLEdBQUcsRUFBQyxNQUFJLENBQUssQ0FDOUI7QUFFaEIsQ0FBQztBQUlELGlFQUFlSCxJQUFJOzs7Ozs7OztVQzVEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtmaWx0ZXJlZFByb2R1Y3RzfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IENhcnQgPSAoeyBwcm9kdWN0cywgc3VtLCBhZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0IH0pID0+IHtcblxuICAgIGNvbnN0IFtzZWxlY3RvclZhbHVlLCBzZXRTZWxlY3RvclZhbHVlXSA9IHVzZVN0YXRlKDApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RvclZhbHVlKGZpbHRlclZhbHVlKVxuICAgIH0sW3NlbGVjdG9yVmFsdWVdKVxuXG4gICAgY29uc3QgeyBmaWx0ZXJWYWx1ZSB9ID0gdXNlUGFyYW1zKCk7XG4gICAgLy8gc2V0U2VsZWN0b3JWYWx1ZShwYXJzZUludChmaWx0ZXJWYWx1ZSkpXG5cbiAgICBjb25zb2xlLmxvZyhcImZpbHRlclZhbHVlUEFTRUtcIiwgZmlsdGVyVmFsdWUpXG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RvclZhbHVlXCIsIHNlbGVjdG9yVmFsdWUpXG4gICAgLy8gLy8gY29uc29sZS5sb2coXCJzdW1cIiwgc3VtLCB0eXBlb2Ygc3VtKVxuICAgIC8vXG4gICAgLy8gY29uc29sZS5sb2coXCJzZWxlY3RvclZhbHVlXCIsIHNlbGVjdG9yVmFsdWUpXG5cbiAgICAvLyBjb25zdCBuZXdTdGF0ZVByb2R1Y3RzID0gZmlsdGVyZWRQcm9kdWN0cyhwcm9kdWN0cywgcGFyc2VJbnQoc2VsZWN0b3JWYWx1ZSkpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaWx0ZXJWYWx1ZVwiLCBmaWx0ZXJWYWx1ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZWxlY3RvclZhbHVlXCIsIHNlbGVjdG9yVmFsdWUpXG4gICAgICAgIC8vIHNldFNlbGVjdG9yVmFsdWUocGFyc2VJbnQoZmlsdGVyVmFsdWUpKTtcbiAgICB9XG5cblxuICAgIC8vXG4gICAgLy8gY29uc3QgZmlsdGVyZWRTdGF0ZSA9IGdldFByb2R1Y3QoYWxsUHJvZHVjdHMsIHBhcnNlSW50KGlkUHJvZHVjdCkpO1xuICAgIC8vIGNvbnN0IHByb2R1Y3QgPSBmaWx0ZXJlZFN0YXRlWzBdXG5cblxuXG5cblxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvXCJ9ICBleGFjdCBvbkNsaWNrPXsoKT0+IHNldFNlbGVjdG9yVmFsdWUoMCl9PldzenlzdGtpZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTBcIn0+ZG8gMTB6xYJCRVo8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzEwXCJ9IGV4YWN0IG9uQ2xpY2s9eygpPT4gc2V0U2VsZWN0b3JWYWx1ZShmaWx0ZXJWYWx1ZSl9PmRvIDEwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi81MFwifT5kbyA1MHrFgiBCRVo8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzUwXCJ9IGV4YWN0IG9uQ2xpY2s9eygpPT4gc2V0U2VsZWN0b3JWYWx1ZShmaWx0ZXJWYWx1ZSl9PmRvIDUwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMDBcIn0gZXhhY3Qgb25DbGljaz17KCk9PiBzZXRTZWxlY3RvclZhbHVlKGZpbHRlclZhbHVlKX0+ZG8gMTAwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxGb3JtIGFkZFByb2R1Y3Q9e2FkZFByb2R1Y3R9IC8+XG4gICAgICAgICAgICAgICAgPExpc3QgcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgICAgICAgICAgIDxoMT5EbyB6YXDFgmF0eToge3N1bX0gUExOPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMzgwOTBjNzlmMjQ0M2MwODI3NFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkxpc3QiLCJMaW5rIiwidXNlUGFyYW1zIiwiZmlsdGVyZWRQcm9kdWN0cyIsIkNhcnQiLCJfcmVmIiwicHJvZHVjdHMiLCJzdW0iLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdG9yVmFsdWUiLCJzZXRTZWxlY3RvclZhbHVlIiwiZmlsdGVyVmFsdWUiLCJfdXNlUGFyYW1zIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0byIsImV4YWN0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=