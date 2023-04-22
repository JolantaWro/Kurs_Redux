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
  var selectorId = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().id;
  console.log(selectorId);

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
/******/ 	__webpack_require__.h = () => ("f2aeb20cfc840a24f6b1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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czYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBmYWtlUHJvZHVjdHMgPSBbXG4gIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcbiAge2lkOiAyLCBuYW1lOiBcIlByenlwcmF3YSBjdXJyeVwifSxcbiAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXG4gIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcbiAge2lkOiA1LCBuYW1lOiBcIlppZW1uaWFraVwifVxuXTtcblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICh7aWQsIGluZGV4LCBudW1iZXIsIG9uQ2hhbmdlLCBvbkNsb3NlfSkgPT4ge1xuXG4gICAgY29uc3Qgc2VsZWN0b3JJZCAgPSB1c2VQYXJhbXMoKS5pZDtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RvcklkKVxuXG4gICAgLy8gY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQucHJpY2UgPj0gcGFyc2VJbnQoZmlsdGVyVmFsdWUpKVxuXG4gICAgLy8gY29uc3QgW2lkUHJvZHVjdCwgc2V0UHJvZHVjdElEXSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxuICAgIC8vXG4gICAgLy8gY29uc29sZS5sb2coaWRQcm9kdWN0KVxuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyXCI+XG4gICAgICAgIDxwPlByb2R1a3Qge251bWJlciArIDF9PC9wPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBvbkNsb3NlKGluZGV4KX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdFwiPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGluZGV4LCBlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZH0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+V3liaWVyei4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7ZmFrZVByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1waXp6YS1zbGljZVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn07XG5cblNpbmdsZVByb2R1Y3QucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBudW1iZXI6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMmFlYjIwY2ZjODQwYTI0ZjZiMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwidXNlUGFyYW1zIiwiZmFrZVByb2R1Y3RzIiwiaWQiLCJuYW1lIiwiU2luZ2xlUHJvZHVjdCIsIl9yZWYiLCJpbmRleCIsIm51bWJlciIsIm9uQ2hhbmdlIiwib25DbG9zZSIsInNlbGVjdG9ySWQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNsaWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwicHJvZHVjdCIsInByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJmdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==