"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);



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
    onClose = _ref.onClose,
    products = _ref.products;
  var selectorId = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().id;
  console.log(selectorId);
  console.log({
    products: products
  });

  // const filteredProducts = products.filter(element => element.price >= parseInt(filterValue))

  // const [idProduct, setProductID] = useState(useParams().id)
  //
  // console.log(idProduct)

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
  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
  number: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("891537a94660c8e40aa1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNuQ1UsT0FBTyxFQUFFVixtRUFBeUJ5QjtBQUNwQyxDQUFDO0FBR0QsaUVBQWVwQixhQUFhOzs7Ozs7OztVQzFENUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBmYWtlUHJvZHVjdHMgPSBbXG4gIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcbiAge2lkOiAyLCBuYW1lOiBcIlByenlwcmF3YSBjdXJyeVwifSxcbiAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXG4gIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcbiAge2lkOiA1LCBuYW1lOiBcIlppZW1uaWFraVwifVxuXTtcblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICh7aWQsIGluZGV4LCBudW1iZXIsIG9uQ2hhbmdlLCBvbkNsb3NlLCBwcm9kdWN0cyB9KSA9PiB7XG5cbiAgICBjb25zdCBzZWxlY3RvcklkICA9IHVzZVBhcmFtcygpLmlkO1xuICAgIGNvbnNvbGUubG9nKHNlbGVjdG9ySWQpXG4gICAgY29uc29sZS5sb2coe3Byb2R1Y3RzfSlcblxuICAgIC8vIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LnByaWNlID49IHBhcnNlSW50KGZpbHRlclZhbHVlKSlcblxuICAgIC8vIGNvbnN0IFtpZFByb2R1Y3QsIHNldFByb2R1Y3RJRF0gPSB1c2VTdGF0ZSh1c2VQYXJhbXMoKS5pZClcbiAgICAvL1xuICAgIC8vIGNvbnNvbGUubG9nKGlkUHJvZHVjdClcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtZGFya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICA8cD5Qcm9kdWt0IHtudW1iZXIgKyAxfTwvcD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gb25DbG9zZShpbmRleCl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShpbmRleCwgZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWR9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPld5YmllcnouLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2Zha2VQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5TaW5nbGVQcm9kdWN0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbnVtYmVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODkxNTM3YTk0NjYwYzhlNDBhYTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsInVzZVBhcmFtcyIsImZha2VQcm9kdWN0cyIsImlkIiwibmFtZSIsIlNpbmdsZVByb2R1Y3QiLCJfcmVmIiwiaW5kZXgiLCJudW1iZXIiLCJvbkNoYW5nZSIsIm9uQ2xvc2UiLCJwcm9kdWN0cyIsInNlbGVjdG9ySWQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNsaWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwicHJvZHVjdCIsInByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJmdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==