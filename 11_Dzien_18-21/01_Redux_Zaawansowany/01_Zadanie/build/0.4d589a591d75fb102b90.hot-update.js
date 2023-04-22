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
    onClose = _ref.onClose;
  var selectorId = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().id.selectorId;
  console.log(selectorId);

  // const filteredProducts = products.filter(element => element.price >= parseInt(filterValue))

  // const [idProduct, setProductID] = useState(useParams().id)
  //
  // console.log(id)

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
/******/ 	__webpack_require__.h = () => ("cd6af6ffef88f6895f1b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBmYWtlUHJvZHVjdHMgPSBbXG4gIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcbiAge2lkOiAyLCBuYW1lOiBcIlByenlwcmF3YSBjdXJyeVwifSxcbiAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXG4gIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcbiAge2lkOiA1LCBuYW1lOiBcIlppZW1uaWFraVwifVxuXTtcblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICh7aWQsIGluZGV4LCBudW1iZXIsIG9uQ2hhbmdlLCBvbkNsb3NlfSkgPT4ge1xuXG4gICAgY29uc3QgeyBzZWxlY3RvcklkIH0gPSB1c2VQYXJhbXMoKS5pZDtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RvcklkKVxuXG4gICAgLy8gY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQucHJpY2UgPj0gcGFyc2VJbnQoZmlsdGVyVmFsdWUpKVxuXG4gICAgLy8gY29uc3QgW2lkUHJvZHVjdCwgc2V0UHJvZHVjdElEXSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxuICAgIC8vXG4gICAgLy8gY29uc29sZS5sb2coaWQpXG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLWRhcmtcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj5cbiAgICAgICAgPHA+UHJvZHVrdCB7bnVtYmVyICsgMX08L3A+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IG9uQ2xvc2UoaW5kZXgpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIHtmYWtlUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuU2luZ2xlUHJvZHVjdC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG51bWJlcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNkNmFmNmZmZWY4OGY2ODk1ZjFiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJ1c2VQYXJhbXMiLCJmYWtlUHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJTaW5nbGVQcm9kdWN0IiwiX3JlZiIsImluZGV4IiwibnVtYmVyIiwib25DaGFuZ2UiLCJvbkNsb3NlIiwic2VsZWN0b3JJZCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJwcm9kdWN0IiwicHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwic291cmNlUm9vdCI6IiJ9