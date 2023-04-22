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
  var selectorId = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
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
/******/ 	__webpack_require__.h = () => ("62d61c685e061487e57c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgZmFrZVByb2R1Y3RzID0gW1xuICB7aWQ6IDEsIG5hbWU6IFwiUG9taWRvcnlcIn0sXG4gIHtpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIn0sXG4gIHtpZDogMywgbmFtZTogXCJPbGVqXCJ9LFxuICB7aWQ6IDQsIG5hbWU6IFwiV2/Fgm93aW5hIDUwMGdcIn0sXG4gIHtpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIn1cbl07XG5cbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoe2lkLCBpbmRleCwgbnVtYmVyLCBvbkNoYW5nZSwgb25DbG9zZX0pID0+IHtcblxuICAgIGNvbnN0IHNlbGVjdG9ySWQgID0gdXNlUGFyYW1zKCk7XG4gICAgY29uc29sZS5sb2coc2VsZWN0b3JJZClcblxuICAgIC8vIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LnByaWNlID49IHBhcnNlSW50KGZpbHRlclZhbHVlKSlcblxuICAgIC8vIGNvbnN0IFtpZFByb2R1Y3QsIHNldFByb2R1Y3RJRF0gPSB1c2VTdGF0ZSh1c2VQYXJhbXMoKS5pZClcbiAgICAvL1xuICAgIC8vIGNvbnNvbGUubG9nKGlkUHJvZHVjdClcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtZGFya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICA8cD5Qcm9kdWt0IHtudW1iZXIgKyAxfTwvcD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gb25DbG9zZShpbmRleCl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShpbmRleCwgZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWR9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPld5YmllcnouLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2Zha2VQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5TaW5nbGVQcm9kdWN0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbnVtYmVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjJkNjFjNjg1ZTA2MTQ4N2U1N2NcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsInVzZVBhcmFtcyIsImZha2VQcm9kdWN0cyIsImlkIiwibmFtZSIsIlNpbmdsZVByb2R1Y3QiLCJfcmVmIiwiaW5kZXgiLCJudW1iZXIiLCJvbkNoYW5nZSIsIm9uQ2xvc2UiLCJzZWxlY3RvcklkIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInByb2R1Y3QiLCJwcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJzb3VyY2VSb290IjoiIn0=