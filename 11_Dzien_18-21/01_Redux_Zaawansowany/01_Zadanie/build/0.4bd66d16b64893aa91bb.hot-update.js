"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31);
/* harmony import */ var _containers_Products_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _containers_Products_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
/* harmony import */ var _containers_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(101);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(113);
/* harmony import */ var _containers_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(117);
/* harmony import */ var _containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(119);
/* harmony import */ var _containers_Recipes_SingleRecipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(123);












var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Home__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Products__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Add__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_SingleRecipe__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 97:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var SingleProduct = function SingleProduct(_ref) {
  var allProducts = _ref.allProducts;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().id),
    _useState2 = _slicedToArray(_useState, 2),
    idProduct = _useState2[0],
    setIdProduct = _useState2[1];
  //
  // const filteredState = getProduct(allProducts, parseInt(idProduct));
  // const product = filteredState[0]

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", idProduct + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "delete",
    onClick: function onClick() {
      return null;
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "control has-icons-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: function onChange(e) {
      return setIdProduct(e.target.value);
    },
    value: idProduct
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), allProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: product.id,
      value: product.id
    }, product.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ }),

/***/ 124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SingleRecipe = function SingleRecipe(_ref) {
  var allRecipe = _ref.allRecipe;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "AAA"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleRecipe);

/***/ }),

/***/ 123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _components_Recipes_SingleRecipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(124);



var mapStateToProps = function mapStateToProps(state) {
  return {
    allRecipe: state.recipes
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Recipes_SingleRecipe__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("74b668c749f3c7b7e128")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7TUFBQSxPQUFLTCxZQUFZLENBQUNLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQUNBLEtBQUssRUFBRVI7RUFBVSxnQkFDdEU1QiwwREFBQSxpQkFBUSxZQUFVLENBQVMsRUFDeEJ1QixXQUFXLENBQUNjLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO0lBQUEsb0JBQ3BCdEMsMERBQUE7TUFBUXVDLEdBQUcsRUFBRUQsT0FBTyxDQUFDYixFQUFHO01BQUNXLEtBQUssRUFBRUUsT0FBTyxDQUFDYjtJQUFHLEdBQUVhLE9BQU8sQ0FBQ0UsSUFBSSxDQUFVO0VBQUEsQ0FDdEUsQ0FBQyxDQUNHLENBQ0osZUFDU3hDLDBEQUFBO0lBQU04QixTQUFTLEVBQUM7RUFBdUIsZ0JBQUM5QiwwREFBQTtJQUFHOEIsU0FBUyxFQUFDO0VBQW9CLEVBQUssQ0FBTyxDQUNyRixDQUNGLENBQ0osQ0FDQSxDQUNSO0FBRWQsQ0FBQztBQUVELGlFQUFldkIsYUFBYTs7Ozs7Ozs7Ozs7OztBQ3RDRjtBQUUxQixJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQVMsSUFBQSxFQUFvQjtFQUFBLElBQWZtQixTQUFTLEdBQUFuQixJQUFBLENBQVRtQixTQUFTO0VBQzVCLG9CQUNJekMsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUksS0FBRyxDQUFLLENBRVY7QUFFZCxDQUFDO0FBRUQsaUVBQWVhLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQ1hEO0FBQ1U7QUFDNkI7QUFJakUsSUFBTThCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJILFNBQVMsRUFBRUcsS0FBSyxDQUFDQztFQUNyQixDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlSCxvREFBTyxDQUFDQyxlQUFlLENBQUMsQ0FBQzlCLHdFQUFZLENBQUM7Ozs7Ozs7O1VDVnJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvU2luZ2xlUmVjaXBlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUmVjaXBlcy9TaW5nbGVSZWNpcGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVzfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzL1Byb2R1Y3RzXCI7XG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi4vY29udGFpbmVycy9Qcm9kdWN0cy9BZGRcIjtcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3RcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvSG9tZVwiO1xuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi4vY29udGFpbmVycy9SZWNpcGVzL0FkZFwiO1xuaW1wb3J0IEFsbFJlY2lwZXMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUmVjaXBlcy9SZWNpcGVzXCI7XG5pbXBvcnQgU2luZ2xlUmVjaXBlIGZyb20gXCIuLi9jb250YWluZXJzL1JlY2lwZXMvU2luZ2xlUmVjaXBlXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiIGVsZW1lbnQ9ezxBbGxQcm9kdWN0cyAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzLzppZFwiIGVsZW1lbnQ9ezxTaW5nbGVQcm9kdWN0Lz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy9hZGRcIiBlbGVtZW50PXs8QWRkUHJvZHVjdCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXMvYWRkXCIgZWxlbWVudD17PEFkZFJlY2lwZSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXNcIiBlbGVtZW50PXs8QWxsUmVjaXBlcyAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXNcIiBlbGVtZW50PXs8U2luZ2xlUmVjaXBlIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuXG5jb25zdCBTaW5nbGVQcm9kdWN0ID0gKHsgYWxsUHJvZHVjdHMgfSkgPT4ge1xuXG4gICAgY29uc3QgW2lkUHJvZHVjdCwgc2V0SWRQcm9kdWN0XSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxuICAgIC8vXG4gICAgLy8gY29uc3QgZmlsdGVyZWRTdGF0ZSA9IGdldFByb2R1Y3QoYWxsUHJvZHVjdHMsIHBhcnNlSW50KGlkUHJvZHVjdCkpO1xuICAgIC8vIGNvbnN0IHByb2R1Y3QgPSBmaWx0ZXJlZFN0YXRlWzBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Qcm9kdWt0IHtpZFByb2R1Y3QgKyAxfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gbnVsbH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldElkUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZFByb2R1Y3R9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24+V3liaWVyei4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAge2FsbFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cHJvZHVjdC5pZH0gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNpbmdsZVJlY2lwZSA9ICh7YWxsUmVjaXBlfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+QUFBPC9oMj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUmVjaXBlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFNpbmdsZVJlY2lwZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SZWNpcGVzL1NpbmdsZVJlY2lwZVwiO1xuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBhbGxSZWNpcGU6IHN0YXRlLnJlY2lwZXNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2luZ2xlUmVjaXBlKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NGI2NjhjNzQ5ZjNjN2I3ZTEyOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkFsbFByb2R1Y3RzIiwiQWRkUHJvZHVjdCIsIlNpbmdsZVByb2R1Y3QiLCJzdG9yZSIsIlByb3ZpZGVyIiwiSG9tZSIsIkFkZFJlY2lwZSIsIkFsbFJlY2lwZXMiLCJTaW5nbGVSZWNpcGUiLCJNYWluIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZXhhY3QiLCJwYXRoIiwiZWxlbWVudCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiX3JlZiIsImFsbFByb2R1Y3RzIiwiX3VzZVN0YXRlIiwiaWQiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpZFByb2R1Y3QiLCJzZXRJZFByb2R1Y3QiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwicHJvZHVjdCIsImtleSIsIm5hbWUiLCJhbGxSZWNpcGUiLCJjb25uZWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJyZWNpcGVzIl0sInNvdXJjZVJvb3QiOiIifQ==