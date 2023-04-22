self["webpackHotUpdatees6_react"](0,{

/***/ 116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);
/* harmony import */ var _redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var SingleProduct = function SingleProduct(_ref) {
  var allProducts = _ref.allProducts;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)().id),
    _useState2 = _slicedToArray(_useState, 2),
    idProduct = _useState2[0],
    setIdProduct = _useState2[1];
  var filteredState = (0,_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1__.getProduct)(allProducts, parseInt(idProduct));
  var product = filteredState[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", product.id + 1, " ", product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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

/***/ 117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _components_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(116);
/* harmony import */ var _redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(118);
/* harmony import */ var _redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3__);




var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: (0,_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3__.productsSelector)(state)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 118:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/gworonowski/workspaceReact/Kurs_Redux/11_Dzien_18-21/01_Redux_Zaawansowany/01_Zadanie/js/redux/selectors/selectorsProduct.js: Unexpected token (17:33)\n\n\u001b[0m \u001b[90m 15 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m lastAddProducts \u001b[33m=\u001b[39m (products) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 17 |\u001b[39m     \u001b[36mconst\u001b[39m lastProducts \u001b[33m=\u001b[39m product[]\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 |\u001b[39m     \u001b[36mreturn\u001b[39m products\u001b[33m.\u001b[39mfilter(element \u001b[33m=>\u001b[39m element\u001b[33m.\u001b[39mid \u001b[33m===\u001b[39m selector)\u001b[0m\n\u001b[0m \u001b[90m 19 |\u001b[39m }\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:947:12)\n    at JSXParserMixin.raise (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:3261:19)\n    at JSXParserMixin.unexpected (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:3291:16)\n    at JSXParserMixin.parseExprAtom (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:11259:16)\n    at JSXParserMixin.parseExprAtom (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:6998:20)\n    at JSXParserMixin.parseExprSubscripts (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:10870:23)\n    at JSXParserMixin.parseUpdate (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:10853:21)\n    at JSXParserMixin.parseMaybeUnary (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:10829:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:10667:61)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("13aad3c17648b912a81d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40MTZjZmQ0ZjhjZjAwYTY2MmU5OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNLO0FBQ3VCO0FBRWxFLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQUMsSUFBQSxFQUF3QjtFQUFBLElBQWxCQyxXQUFXLEdBQUFELElBQUEsQ0FBWEMsV0FBVztFQUNoQyxJQUFBQyxTQUFBLEdBQWtDTiwrQ0FBUSxDQUFDQywyREFBUyxFQUFFLENBQUNNLEVBQUUsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUgsU0FBQTtJQUFuREksU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTtFQUU5QixJQUFNSSxhQUFhLEdBQUdWLDZFQUFVLENBQUNHLFdBQVcsRUFBRVEsUUFBUSxDQUFDSCxTQUFTLENBQUMsQ0FBQztFQUNsRSxJQUFNSSxPQUFPLEdBQUdGLGFBQWEsQ0FBQyxDQUFDLENBQUM7RUFFaEMsb0JBQ0liLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFTaUIsU0FBUyxFQUFDO0VBQWlCLGdCQUNoQ2pCLDBEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBZ0IsZ0JBQzNCakIsMERBQUEsWUFBRyxVQUFRLEVBQUNlLE9BQU8sQ0FBQ1AsRUFBRSxHQUFHLENBQUMsRUFBQyxHQUFDLEVBQUNPLE9BQU8sQ0FBQ0csSUFBSSxDQUFLLGVBQzlDbEIsMERBQUE7SUFBUW1CLElBQUksRUFBQyxRQUFRO0lBQUNGLFNBQVMsRUFBQyxRQUFRO0lBQUNHLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTSxJQUFJO0lBQUE7RUFBQyxFQUFHLENBQzlELGVBQ05wQiwwREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQWMsZ0JBQ3pCakIsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFPLGdCQUNsQmpCLDBEQUFBO0lBQUdpQixTQUFTLEVBQUM7RUFBd0IsZ0JBQ2pEakIsMERBQUE7SUFBTWlCLFNBQVMsRUFBQztFQUFRLGdCQUN0QmpCLDBEQUFBO0lBQVFxQixRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsQ0FBQztNQUFBLE9BQUtWLFlBQVksQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUFBLENBQUM7SUFBQ0EsS0FBSyxFQUFFYjtFQUFVLGdCQUN0RVgsMERBQUEsaUJBQVEsWUFBVSxDQUFTLEVBQ3hCTSxXQUFXLENBQUNtQixHQUFHLENBQUMsVUFBQVYsT0FBTztJQUFBLG9CQUNwQmYsMERBQUE7TUFBUTBCLEdBQUcsRUFBRVgsT0FBTyxDQUFDUCxFQUFHO01BQUNnQixLQUFLLEVBQUVULE9BQU8sQ0FBQ1A7SUFBRyxHQUFFTyxPQUFPLENBQUNHLElBQUksQ0FBVTtFQUFBLENBQ3RFLENBQUMsQ0FDRyxDQUNKLGVBQ1NsQiwwREFBQTtJQUFNaUIsU0FBUyxFQUFDO0VBQXVCLGdCQUFDakIsMERBQUE7SUFBR2lCLFNBQVMsRUFBQztFQUFvQixFQUFLLENBQU8sQ0FDckYsQ0FDRixDQUNKLENBQ0EsQ0FDUjtBQUVkLENBQUM7QUFFRCxpRUFBZWIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNGO0FBQ1U7QUFDZ0M7QUFDSTtBQUV4RSxJQUFNeUIsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QnhCLFdBQVcsRUFBRXNCLG1GQUFnQixDQUFDRSxLQUFLO0VBQ3ZDLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVILG9EQUFPLENBQUNFLGVBQWUsQ0FBQyxDQUFDekIsMEVBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O1VDVHREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Qcm9kdWN0cy9TaW5nbGVQcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Z2V0UHJvZHVjdH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNQcm9kdWN0XCI7XG5cbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoeyBhbGxQcm9kdWN0cyB9KSA9PiB7XG4gICAgY29uc3QgW2lkUHJvZHVjdCwgc2V0SWRQcm9kdWN0XSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxuXG4gICAgY29uc3QgZmlsdGVyZWRTdGF0ZSA9IGdldFByb2R1Y3QoYWxsUHJvZHVjdHMsIHBhcnNlSW50KGlkUHJvZHVjdCkpO1xuICAgIGNvbnN0IHByb2R1Y3QgPSBmaWx0ZXJlZFN0YXRlWzBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Qcm9kdWt0IHtwcm9kdWN0LmlkICsgMX0ge3Byb2R1Y3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRJZFByb2R1Y3QoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWRQcm9kdWN0fT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPld5YmllcnouLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIHthbGxQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3Byb2R1Y3QuaWR9IHZhbHVlPXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1waXp6YS1zbGljZVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3RcIjtcbmltcG9ydCB7cHJvZHVjdHNTZWxlY3Rvcn0gZnJvbSBcIi4uLy4uL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNQcm9kdWN0XCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgYWxsUHJvZHVjdHM6IHByb2R1Y3RzU2VsZWN0b3Ioc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNpbmdsZVByb2R1Y3QpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEzYWFkM2MxNzY0OGI5MTJhODFkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJnZXRQcm9kdWN0IiwiU2luZ2xlUHJvZHVjdCIsIl9yZWYiLCJhbGxQcm9kdWN0cyIsIl91c2VTdGF0ZSIsImlkIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaWRQcm9kdWN0Iiwic2V0SWRQcm9kdWN0IiwiZmlsdGVyZWRTdGF0ZSIsInBhcnNlSW50IiwicHJvZHVjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJuYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImtleSIsImNvbm5lY3QiLCJwcm9kdWN0c1NlbGVjdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9