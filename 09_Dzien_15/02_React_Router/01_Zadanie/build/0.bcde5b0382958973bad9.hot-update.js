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
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),
    filterValue = _useParams.filterValue;
  console.log("filterValue", filterValue);
  // console.log("sum", sum, typeof sum)

  console.log("selectorValue", selectorValue);

  // const newStateProducts = filteredProducts(products, parseInt(selectorValue))

  var handleChange = function handleChange(e) {
    console.log(e.target.valueAsNumber);
    setSelectorValue(parseInt(filterValue));
  };

  //
  // const filteredState = getProduct(allProducts, parseInt(idProduct));
  // const product = filteredState[0]

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/",
    onClick: handleChange
  }, "Wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/10",
    onClick: handleChange
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/50",
    onClick: handleChange
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/100",
    onClick: handleChange
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
/******/ 	__webpack_require__.h = () => ("8293c7a958569b224ff2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iY2RlNWIwMzgyOTU4OTczYmFkOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3ZCO0FBQ0E7QUFDdUI7QUFDRztBQUVwRCxJQUFNUSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFxRDtFQUFBLElBQS9DQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFQyxHQUFHLEdBQUFGLElBQUEsQ0FBSEUsR0FBRztJQUFFQyxVQUFVLEdBQUFILElBQUEsQ0FBVkcsVUFBVTtJQUFFQyxhQUFhLEdBQUFKLElBQUEsQ0FBYkksYUFBYTtFQUVwRCxJQUFBQyxTQUFBLEdBQTBDWiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBYSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE5Q0csYUFBYSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBRXRDLElBQUFJLFVBQUEsR0FBd0JiLDJEQUFTLEVBQUU7SUFBM0JjLFdBQVcsR0FBQUQsVUFBQSxDQUFYQyxXQUFXO0VBRW5CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVGLFdBQVcsQ0FBQztFQUN2Qzs7RUFFQUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFTCxhQUFhLENBQUM7O0VBRTNDOztFQUVBLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxDQUFDLEVBQUs7SUFDeEJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDO0lBQ25DUixnQkFBZ0IsQ0FBQ1MsUUFBUSxDQUFDUCxXQUFXLENBQUMsQ0FBQztFQUMzQyxDQUFDOztFQUdEO0VBQ0E7RUFDQTs7RUFRQSxvQkFDTXBCLDBEQUFBLDJCQUNNQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDd0IsRUFBRSxFQUFFLEdBQUk7SUFBQ0MsT0FBTyxFQUFFUDtFQUFhLEdBQUMsV0FBUyxDQUFPLGVBQUF2QiwwREFBQSxZQUFNLGVBQzVEQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDd0IsRUFBRSxFQUFFLEtBQU07SUFBQUMsT0FBTyxFQUFFUDtFQUFhLEdBQUMsY0FBTyxDQUFPLGVBQUF2QiwwREFBQSxZQUFNLGVBQzNEQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDd0IsRUFBRSxFQUFFLEtBQU07SUFBQ0MsT0FBTyxFQUFFUDtFQUFhLEdBQUMsY0FBTyxDQUFPLGVBQUF2QiwwREFBQSxZQUFNLGVBQzVEQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDd0IsRUFBRSxFQUFFLE1BQU87SUFBQUMsT0FBTyxFQUFFUDtFQUFhLEdBQUMsZUFBUSxDQUFPLGVBQUF2QiwwREFBQSxZQUFNLGVBQzdEQSwwREFBQSxDQUFDRyw2Q0FBSTtJQUFDUyxVQUFVLEVBQUVBO0VBQVcsRUFBRyxlQUNoQ1osMERBQUEsQ0FBQ0ksNkNBQUk7SUFBQ1MsYUFBYSxFQUFFQSxhQUFjO0lBQUNILFFBQVEsRUFBRUE7RUFBUyxFQUFHLGVBQzFEViwwREFBQSxhQUFJLG1CQUFZLEVBQUNXLEdBQUcsRUFBQyxNQUFJLENBQUssQ0FDOUI7QUFFaEIsQ0FBQztBQUlELGlFQUFlSCxJQUFJOzs7Ozs7OztVQ2xEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtmaWx0ZXJlZFByb2R1Y3RzfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IENhcnQgPSAoeyBwcm9kdWN0cywgc3VtLCBhZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0IH0pID0+IHtcblxuICAgIGNvbnN0IFtzZWxlY3RvclZhbHVlLCBzZXRTZWxlY3RvclZhbHVlXSA9IHVzZVN0YXRlKDApXG5cbiAgICBjb25zdCB7IGZpbHRlclZhbHVlIH0gPSB1c2VQYXJhbXMoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyVmFsdWVcIiwgZmlsdGVyVmFsdWUpXG4gICAgLy8gY29uc29sZS5sb2coXCJzdW1cIiwgc3VtLCB0eXBlb2Ygc3VtKVxuXG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RvclZhbHVlXCIsIHNlbGVjdG9yVmFsdWUpXG5cbiAgICAvLyBjb25zdCBuZXdTdGF0ZVByb2R1Y3RzID0gZmlsdGVyZWRQcm9kdWN0cyhwcm9kdWN0cywgcGFyc2VJbnQoc2VsZWN0b3JWYWx1ZSkpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZUFzTnVtYmVyKVxuICAgICAgICBzZXRTZWxlY3RvclZhbHVlKHBhcnNlSW50KGZpbHRlclZhbHVlKSk7XG4gICAgfVxuXG5cbiAgICAvL1xuICAgIC8vIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSBnZXRQcm9kdWN0KGFsbFByb2R1Y3RzLCBwYXJzZUludChpZFByb2R1Y3QpKTtcbiAgICAvLyBjb25zdCBwcm9kdWN0ID0gZmlsdGVyZWRTdGF0ZVswXVxuXG5cblxuXG5cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL1wifSBvbkNsaWNrPXtoYW5kbGVDaGFuZ2V9PldzenlzdGtpZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTBcIn1vbkNsaWNrPXtoYW5kbGVDaGFuZ2V9PmRvIDEwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi81MFwifSBvbkNsaWNrPXtoYW5kbGVDaGFuZ2V9PmRvIDUwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMDBcIn1vbkNsaWNrPXtoYW5kbGVDaGFuZ2V9PmRvIDEwMHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybSBhZGRQcm9kdWN0PXthZGRQcm9kdWN0fSAvPlxuICAgICAgICAgICAgICAgIDxMaXN0IHJlbW92ZVByb2R1Y3Q9e3JlbW92ZVByb2R1Y3R9IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgICAgICAgICAgICA8aDE+RG8gemFwxYJhdHk6IHtzdW19IFBMTjwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODI5M2M3YTk1ODU2OWIyMjRmZjJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJMaXN0IiwiTGluayIsInVzZVBhcmFtcyIsImZpbHRlcmVkUHJvZHVjdHMiLCJDYXJ0IiwiX3JlZiIsInByb2R1Y3RzIiwic3VtIiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RvclZhbHVlIiwic2V0U2VsZWN0b3JWYWx1ZSIsIl91c2VQYXJhbXMiLCJmaWx0ZXJWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWVBc051bWJlciIsInBhcnNlSW50IiwiY3JlYXRlRWxlbWVudCIsInRvIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=