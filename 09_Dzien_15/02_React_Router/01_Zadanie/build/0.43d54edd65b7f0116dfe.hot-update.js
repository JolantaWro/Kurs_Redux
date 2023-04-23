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
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "*/}", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
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
/******/ 	__webpack_require__.h = () => ("9c7b1312cb01cabb5afd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40M2Q1NGVkZDY1YjdmMDExNmRmZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3ZCO0FBQ0E7QUFDdUI7QUFDRjtBQUNLO0FBRXBELElBQU1TLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBQyxJQUFBLEVBQXFEO0VBQUEsSUFBL0NDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQUVDLEdBQUcsR0FBQUYsSUFBQSxDQUFIRSxHQUFHO0lBQUVDLFVBQVUsR0FBQUgsSUFBQSxDQUFWRyxVQUFVO0lBQUVDLGFBQWEsR0FBQUosSUFBQSxDQUFiSSxhQUFhO0VBRXBELElBQUFDLFNBQUEsR0FBMENiLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFjLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTlDRyxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsZ0JBQWdCLEdBQUFILFVBQUE7RUFFdEMsSUFBTUksUUFBUSxHQUFHYiw2REFBVyxFQUFFO0VBQzlCYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDO0VBQ3JCOztFQUVBO0VBQ0E7RUFDQTs7RUFFQSxJQUFBRyxVQUFBLEdBQXdCakIsMkRBQVMsRUFBRTtJQUEzQmtCLFdBQVcsR0FBQUQsVUFBQSxDQUFYQyxXQUFXO0VBQ25COztFQUVBSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRUUsV0FBVyxDQUFDO0VBQzVDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVKLGFBQWEsQ0FBQztFQUMzQztFQUNBO0VBQ0E7O0VBRUE7O0VBRUEsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QkwsT0FBTyxDQUFDQyxHQUFHLENBQUNJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDM0I7SUFDQTtJQUNBO0VBQ0osQ0FBQzs7RUFHRDtFQUNBO0VBQ0E7O0VBSUEsb0JBQ001QiwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ3lCLEVBQUUsRUFBRTtFQUFJLEdBQUMsV0FBUyxDQUFPLGVBQUE5QiwwREFBQSxZQUFNLGVBQ3JDQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDeUIsRUFBRSxFQUFFO0VBQU0sR0FBQyxjQUFPLENBQU8sZUFBQTlCLDBEQUFBLFlBQU0sZUFDckNBLDBEQUFBLENBQUNLLGtEQUFJO0lBQUN5QixFQUFFLEVBQUU7RUFBTSxHQUFDLGNBQU8sQ0FBTyxlQUFBOUIsMERBQUEsWUFBTSxPQUNyQyxlQUFBQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDeUIsRUFBRSxFQUFFO0VBQU8sR0FBQyxlQUFRLENBQU8sZUFBQTlCLDBEQUFBLFlBQU0sZUFPckNBLDBEQUFBLENBQUNHLDZDQUFJO0lBQUNVLFVBQVUsRUFBRUE7RUFBVyxFQUFHLGVBQ2hDYiwwREFBQSxDQUFDSSw2Q0FBSTtJQUFDVSxhQUFhLEVBQUVBLGFBQWM7SUFBQ0gsUUFBUSxFQUFFQTtFQUFTLEVBQUcsZUFDMURYLDBEQUFBLGFBQUksbUJBQVksRUFBQ1ksR0FBRyxFQUFDLE1BQUksQ0FBSyxDQUM5QjtBQUVoQixDQUFDO0FBSUQsaUVBQWVILElBQUk7Ozs7Ozs7O1VDakVuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IHtMaW5rLCB1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtmaWx0ZXJlZFByb2R1Y3RzfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IENhcnQgPSAoeyBwcm9kdWN0cywgc3VtLCBhZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0IH0pID0+IHtcblxuICAgIGNvbnN0IFtzZWxlY3RvclZhbHVlLCBzZXRTZWxlY3RvclZhbHVlXSA9IHVzZVN0YXRlKDApXG5cbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc29sZS5sb2cobmF2aWdhdGUpXG4gICAgLy8gbmF2aWdhdGUoJy9ob21lJyk7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICAvLyBzZXRTZWxlY3RvclZhbHVlKGZpbHRlclZhbHVlKVxuICAgIC8vIH0sW3NlbGVjdG9yVmFsdWVdKVxuXG4gICAgY29uc3QgeyBmaWx0ZXJWYWx1ZSB9ID0gdXNlUGFyYW1zKCk7XG4gICAgLy8gc2V0U2VsZWN0b3JWYWx1ZShwYXJzZUludChmaWx0ZXJWYWx1ZSkpXG5cbiAgICBjb25zb2xlLmxvZyhcImZpbHRlclZhbHVlUEFTRUtcIiwgZmlsdGVyVmFsdWUpXG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RvclZhbHVlXCIsIHNlbGVjdG9yVmFsdWUpXG4gICAgLy8gLy8gY29uc29sZS5sb2coXCJzdW1cIiwgc3VtLCB0eXBlb2Ygc3VtKVxuICAgIC8vXG4gICAgLy8gY29uc29sZS5sb2coXCJzZWxlY3RvclZhbHVlXCIsIHNlbGVjdG9yVmFsdWUpXG5cbiAgICAvLyBjb25zdCBuZXdTdGF0ZVByb2R1Y3RzID0gZmlsdGVyZWRQcm9kdWN0cyhwcm9kdWN0cywgcGFyc2VJbnQoc2VsZWN0b3JWYWx1ZSkpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaWx0ZXJWYWx1ZVwiLCBmaWx0ZXJWYWx1ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZWxlY3RvclZhbHVlXCIsIHNlbGVjdG9yVmFsdWUpXG4gICAgICAgIC8vIHNldFNlbGVjdG9yVmFsdWUocGFyc2VJbnQoZmlsdGVyVmFsdWUpKTtcbiAgICB9XG5cblxuICAgIC8vXG4gICAgLy8gY29uc3QgZmlsdGVyZWRTdGF0ZSA9IGdldFByb2R1Y3QoYWxsUHJvZHVjdHMsIHBhcnNlSW50KGlkUHJvZHVjdCkpO1xuICAgIC8vIGNvbnN0IHByb2R1Y3QgPSBmaWx0ZXJlZFN0YXRlWzBdXG5cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9cIn0+V3N6eXN0a2llPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTBcIn0+ZG8gMTB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi81MFwifT5kbyA1MHrFgjwvTGluaz48YnIgLz4qL31cbiAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzEwMFwifT5kbyAxMDB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgey8qPExpbmsgdG89e1wiL1wifSAgZXhhY3Qgb25DbGljaz17KCk9PiBzZXRTZWxlY3RvclZhbHVlKDApfT5Xc3p5c3RraWU8L0xpbms+PGJyIC8+Ki99XG4gICAgICAgICAgICAgICAgey8qPExpbmsgdG89e1wiLzEwXCJ9PmRvIDEwesWCQkVaPC9MaW5rPjxiciAvPiovfVxuICAgICAgICAgICAgICAgIHsvKjxMaW5rIHRvPXtcIi8xMFwifSBleGFjdCBvbkNsaWNrPXsoKT0+IHNldFNlbGVjdG9yVmFsdWUoZmlsdGVyVmFsdWUpfT5kbyAxMHrFgjwvTGluaz48YnIgLz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8TGluayB0bz17XCIvNTBcIn0+ZG8gNTB6xYIgQkVaPC9MaW5rPjxiciAvPiovfVxuICAgICAgICAgICAgICAgIHsvKjxMaW5rIHRvPXtcIi81MFwifSBleGFjdCBvbkNsaWNrPXsoKT0+IHNldFNlbGVjdG9yVmFsdWUoZmlsdGVyVmFsdWUpfT5kbyA1MHrFgjwvTGluaz48YnIgLz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8TGluayB0bz17XCIvMTAwXCJ9IGV4YWN0IG9uQ2xpY2s9eygpPT4gc2V0U2VsZWN0b3JWYWx1ZShmaWx0ZXJWYWx1ZSl9PmRvIDEwMHrFgjwvTGluaz48YnIgLz4qL31cbiAgICAgICAgICAgICAgICA8Rm9ybSBhZGRQcm9kdWN0PXthZGRQcm9kdWN0fSAvPlxuICAgICAgICAgICAgICAgIDxMaXN0IHJlbW92ZVByb2R1Y3Q9e3JlbW92ZVByb2R1Y3R9IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgICAgICAgICAgICA8aDE+RG8gemFwxYJhdHk6IHtzdW19IFBMTjwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWM3YjEzMTJjYjAxY2FiYjVhZmRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJMaXN0IiwiTGluayIsInVzZVBhcmFtcyIsInVzZU5hdmlnYXRlIiwiZmlsdGVyZWRQcm9kdWN0cyIsIkNhcnQiLCJfcmVmIiwicHJvZHVjdHMiLCJzdW0iLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdG9yVmFsdWUiLCJzZXRTZWxlY3RvclZhbHVlIiwibmF2aWdhdGUiLCJjb25zb2xlIiwibG9nIiwiX3VzZVBhcmFtcyIsImZpbHRlclZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==