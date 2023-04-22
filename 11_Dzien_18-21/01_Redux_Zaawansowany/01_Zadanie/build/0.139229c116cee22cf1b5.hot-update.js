"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);
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
    value: id
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

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var fakeProducts = [{
  id: 1,
  name: "Pomidory"
}, {
  id: 2,
  name: "Przyprawa curry"
}, {
  id: 3,
  name: "Olej"
}, {
  id: 4,
  name: "Wołowina 500g"
}, {
  id: 5,
  name: "Ziemniaki"
}];
var SingleProduct = function SingleProduct(_ref) {
  var id = _ref.id,
    index = _ref.index,
    number = _ref.number,
    _onChange = _ref.onChange,
    onClose = _ref.onClose;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", number + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "delete",
    onClick: function onClick() {
      return onClose(index);
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
      return _onChange(index, e.target.value);
    },
    value: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), fakeProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: product.id
    }, product.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  }))))));
};
SingleProduct.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  number: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("98feeb437cdce5353418")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsU0FBUyxFQUFDO0VBQXVCLGdCQUFDakIsMERBQUE7SUFBR2lCLFNBQVMsRUFBQztFQUFvQixFQUFLLENBQU8sQ0FDbkYsQ0FDQSxDQUNGLENBQ0U7QUFFZCxDQUFDO0FBRURiLGFBQWEsQ0FBQzRCLFNBQVMsR0FBRztFQUN4QnhCLEVBQUUsRUFBRW1CLHFFQUEyQjtFQUMvQkUsS0FBSyxFQUFFRixxRUFBMkI7RUFDbENHLE1BQU0sRUFBRUgscUVBQTJCO0VBQ25DTixRQUFRLEVBQUVNLG1FQUF5QjtFQUNuQ0ksT0FBTyxFQUFFSixtRUFBeUJNO0FBQ3BDLENBQUM7QUFHRCxpRUFBZTdCLGFBQWE7Ozs7Ozs7O1VDaEQ1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Z2V0UHJvZHVjdH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNQcm9kdWN0XCI7XG5cbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoeyBhbGxQcm9kdWN0cyB9KSA9PiB7XG4gICAgY29uc3QgW2lkUHJvZHVjdCwgc2V0SWRQcm9kdWN0XSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxuXG4gICAgY29uc3QgZmlsdGVyZWRTdGF0ZSA9IGdldFByb2R1Y3QoYWxsUHJvZHVjdHMsIHBhcnNlSW50KGlkUHJvZHVjdCkpO1xuICAgIGNvbnN0IHByb2R1Y3QgPSBmaWx0ZXJlZFN0YXRlWzBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Qcm9kdWt0IHtwcm9kdWN0LmlkICsgMX0ge3Byb2R1Y3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRJZFByb2R1Y3QoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWR9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24+V3liaWVyei4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAge2FsbFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cHJvZHVjdC5pZH0gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY29uc3QgZmFrZVByb2R1Y3RzID0gW1xuICB7aWQ6IDEsIG5hbWU6IFwiUG9taWRvcnlcIn0sXG4gIHtpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIn0sXG4gIHtpZDogMywgbmFtZTogXCJPbGVqXCJ9LFxuICB7aWQ6IDQsIG5hbWU6IFwiV2/Fgm93aW5hIDUwMGdcIn0sXG4gIHtpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIn1cbl07XG5cbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoe2lkLCBpbmRleCwgbnVtYmVyLCBvbkNoYW5nZSwgb25DbG9zZSB9KSA9PiB7XG5cblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtZGFya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICA8cD5Qcm9kdWt0IHtudW1iZXIgKyAxfTwvcD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gb25DbG9zZShpbmRleCl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShpbmRleCwgZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWR9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPld5YmllcnouLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2Zha2VQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5TaW5nbGVQcm9kdWN0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbnVtYmVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOThmZWViNDM3Y2RjZTUzNTM0MThcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsImdldFByb2R1Y3QiLCJTaW5nbGVQcm9kdWN0IiwiX3JlZiIsImFsbFByb2R1Y3RzIiwiX3VzZVN0YXRlIiwiaWQiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpZFByb2R1Y3QiLCJzZXRJZFByb2R1Y3QiLCJmaWx0ZXJlZFN0YXRlIiwicGFyc2VJbnQiLCJwcm9kdWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm5hbWUiLCJ0eXBlIiwib25DbGljayIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwia2V5IiwiUHJvcFR5cGVzIiwiZmFrZVByb2R1Y3RzIiwiaW5kZXgiLCJudW1iZXIiLCJvbkNsb3NlIiwicHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwic291cmNlUm9vdCI6IiJ9