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
    path: "/recipes/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_SingleRecipe__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 124:
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


var SingleRecipe = function SingleRecipe(_ref) {
  var allRecipes = _ref.allRecipes;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().id),
    _useState2 = _slicedToArray(_useState, 2),
    idRecipe = _useState2[0],
    setIdRecipe = _useState2[1];
  // const filteredState = getProduct(allProducts, parseInt(idProduct));
  // const product = filteredState[0]

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Przepis ", parseInt(idProduct) + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
    allRecipes: state.recipes
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Recipes_SingleRecipe__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b3c52303bef9f2c67134")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxTQUFDQyxDQUFDO01BQUEsT0FBS0MsWUFBWSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUFDQSxLQUFLLEVBQUVQO0VBQVUsZ0JBQ3RFaEMsMERBQUEsaUJBQVEsWUFBVSxDQUFTLEVBQ3hCd0MsV0FBVyxDQUFDQyxHQUFHLENBQUMsVUFBQUMsT0FBTztJQUFBLG9CQUNwQjFDLDBEQUFBO01BQVEyQyxHQUFHLEVBQUVELE9BQU8sQ0FBQ2pCLEVBQUc7TUFBQ2MsS0FBSyxFQUFFRyxPQUFPLENBQUNqQjtJQUFHLEdBQUVpQixPQUFPLENBQUNFLElBQUksQ0FBVTtFQUFBLENBQ3RFLENBQUMsQ0FDRyxDQUNKLGVBQ1M1QywwREFBQTtJQUFNOEIsU0FBUyxFQUFDO0VBQXVCLGdCQUFDOUIsMERBQUE7SUFBRzhCLFNBQVMsRUFBQztFQUFvQixFQUFLLENBQU8sQ0FDckYsQ0FDRixDQUNKLENBQ0EsQ0FFUjtBQUVkLENBQUM7QUFFRCxpRUFBZWpCLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUNVO0FBQzZCO0FBSWpFLElBQU1pQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCeEIsVUFBVSxFQUFFd0IsS0FBSyxDQUFDQztFQUN0QixDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlSCxvREFBTyxDQUFDQyxlQUFlLENBQUMsQ0FBQ2pDLHdFQUFZLENBQUM7Ozs7Ozs7O1VDVnJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9TaW5nbGVSZWNpcGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9SZWNpcGVzL1NpbmdsZVJlY2lwZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvUHJvZHVjdHNcIjtcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzL0FkZFwiO1xuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29udGFpbmVycy9Ib21lXCI7XG5pbXBvcnQgQWRkUmVjaXBlIGZyb20gXCIuLi9jb250YWluZXJzL1JlY2lwZXMvQWRkXCI7XG5pbXBvcnQgQWxsUmVjaXBlcyBmcm9tIFwiLi4vY29udGFpbmVycy9SZWNpcGVzL1JlY2lwZXNcIjtcbmltcG9ydCBTaW5nbGVSZWNpcGUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUmVjaXBlcy9TaW5nbGVSZWNpcGVcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IChcbiAgICA8PlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCIgZWxlbWVudD17PEFsbFByb2R1Y3RzIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvOmlkXCIgZWxlbWVudD17PFNpbmdsZVByb2R1Y3QvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzL2FkZFwiIGVsZW1lbnQ9ezxBZGRQcm9kdWN0IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy9hZGRcIiBlbGVtZW50PXs8QWRkUmVjaXBlIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlc1wiIGVsZW1lbnQ9ezxBbGxSZWNpcGVzIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy86aWRcIiBlbGVtZW50PXs8U2luZ2xlUmVjaXBlIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgU2luZ2xlUmVjaXBlID0gKHthbGxSZWNpcGVzfSkgPT4ge1xuICAgIGNvbnN0IFtpZFJlY2lwZSwgc2V0SWRSZWNpcGVdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuaWQpXG4gICAgLy8gY29uc3QgZmlsdGVyZWRTdGF0ZSA9IGdldFByb2R1Y3QoYWxsUHJvZHVjdHMsIHBhcnNlSW50KGlkUHJvZHVjdCkpO1xuICAgIC8vIGNvbnN0IHByb2R1Y3QgPSBmaWx0ZXJlZFN0YXRlWzBdXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLWRhcmtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByemVwaXMge3BhcnNlSW50KGlkUHJvZHVjdCkgKyAxfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gbnVsbH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldElkUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZFByb2R1Y3R9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24+V3liaWVyei4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAge2FsbFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cHJvZHVjdC5pZH0gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVJlY2lwZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBTaW5nbGVSZWNpcGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUmVjaXBlcy9TaW5nbGVSZWNpcGVcIjtcblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgYWxsUmVjaXBlczogc3RhdGUucmVjaXBlc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTaW5nbGVSZWNpcGUpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIzYzUyMzAzYmVmOWYyYzY3MTM0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiQWxsUHJvZHVjdHMiLCJBZGRQcm9kdWN0IiwiU2luZ2xlUHJvZHVjdCIsInN0b3JlIiwiUHJvdmlkZXIiLCJIb21lIiwiQWRkUmVjaXBlIiwiQWxsUmVjaXBlcyIsIlNpbmdsZVJlY2lwZSIsIk1haW4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJleGFjdCIsInBhdGgiLCJlbGVtZW50IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJfcmVmIiwiYWxsUmVjaXBlcyIsIl91c2VTdGF0ZSIsImlkIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaWRSZWNpcGUiLCJzZXRJZFJlY2lwZSIsImNsYXNzTmFtZSIsInBhcnNlSW50IiwiaWRQcm9kdWN0IiwidHlwZSIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsImUiLCJzZXRJZFByb2R1Y3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFsbFByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsImtleSIsIm5hbWUiLCJjb25uZWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJyZWNpcGVzIl0sInNvdXJjZVJvb3QiOiIifQ==