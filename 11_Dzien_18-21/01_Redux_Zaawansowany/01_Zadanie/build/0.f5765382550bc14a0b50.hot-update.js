"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(103);




// import "@bulma"

var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Main__WEBPACK_IMPORTED_MODULE_1__["default"], null));

// ReactDOM.render(<Main />, document.getElementById("app"));

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

/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);



var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: state.products
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ 117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _components_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(116);
/* harmony import */ var _redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(118);




var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: (0,_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3__.productsSelector)(state)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProduct": () => (/* binding */ getProduct),
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector)
/* harmony export */ });

var productsSelector = function productsSelector(state) {
  return state.products;
};
// export const sumPriceSelector = createSelector(
//     productsSelector,
//     products=> products.reduce((acc, item) => (
//         acc + Number(item.price)
//     ), 0)
// )

var getProduct = function getProduct(products, selector) {
  return products.filter(function (element) {
    return element.id === selector;
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("139229c116cee22cf1b5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVULG1FQUF5Qm1CO0FBQ3BDLENBQUM7QUFHRCxpRUFBZWYsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDaERGO0FBQzBCO0FBQ2hCO0FBRXBDLElBQU1tQixlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCQyxXQUFXLEVBQUVELEtBQUssQ0FBQ0U7RUFDdkIsQ0FBQztBQUFBLENBQUM7QUFHRixpRUFBZUosb0RBQU8sQ0FBQ0MsZUFBZSxDQUFDLENBQUNGLDREQUFXLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUMUI7QUFDVTtBQUNnQztBQUNJO0FBRXhFLElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJDLFdBQVcsRUFBRUUsbUZBQWdCLENBQUNILEtBQUs7RUFDdkMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUYsb0RBQU8sQ0FBQ0MsZUFBZSxDQUFDLENBQUNuQiwwRUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7QUNUYjtBQUdsQyxJQUFNdUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBR0gsS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0UsUUFBUTtBQUFBO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUgsUUFBUSxFQUFFSSxRQUFRLEVBQUs7RUFDOUMsT0FBT0osUUFBUSxDQUFDSyxNQUFNLENBQUMsVUFBQUMsT0FBTztJQUFBLE9BQUlBLE9BQU8sQ0FBQzlCLEVBQUUsS0FBSzRCLFFBQVE7RUFBQSxFQUFDO0FBQzlELENBQUM7Ozs7Ozs7O1VDYkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9yc1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL01haW5cIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuLy8gaW1wb3J0IFwiQGJ1bG1hXCJcblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8TWFpbiAvPik7XG5cbi8vIFJlYWN0RE9NLnJlbmRlcig8TWFpbiAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY29uc3QgZmFrZVByb2R1Y3RzID0gW1xuICB7aWQ6IDEsIG5hbWU6IFwiUG9taWRvcnlcIn0sXG4gIHtpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIn0sXG4gIHtpZDogMywgbmFtZTogXCJPbGVqXCJ9LFxuICB7aWQ6IDQsIG5hbWU6IFwiV2/Fgm93aW5hIDUwMGdcIn0sXG4gIHtpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIn1cbl07XG5cbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoe2lkLCBpbmRleCwgbnVtYmVyLCBvbkNoYW5nZSwgb25DbG9zZSB9KSA9PiB7XG4gICAgXG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLWRhcmtcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj5cbiAgICAgICAgPHA+UHJvZHVrdCB7bnVtYmVyICsgMX08L3A+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IG9uQ2xvc2UoaW5kZXgpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIHtmYWtlUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuU2luZ2xlUHJvZHVjdC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG51bWJlcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgYWxsUHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzXG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQWxsUHJvZHVjdHMpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdFwiO1xuaW1wb3J0IHtwcm9kdWN0c1NlbGVjdG9yfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9yc1Byb2R1Y3RcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBhbGxQcm9kdWN0czogcHJvZHVjdHNTZWxlY3RvcihzdGF0ZSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2luZ2xlUHJvZHVjdCk7IiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcblxuXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzXG4vLyBleHBvcnQgY29uc3Qgc3VtUHJpY2VTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuLy8gICAgIHByb2R1Y3RzU2VsZWN0b3IsXG4vLyAgICAgcHJvZHVjdHM9PiBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxuLy8gICAgICAgICBhY2MgKyBOdW1iZXIoaXRlbS5wcmljZSlcbi8vICAgICApLCAwKVxuLy8gKVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdCA9IChwcm9kdWN0cywgc2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5pZCA9PT0gc2VsZWN0b3IpXG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEzOTIyOWMxMTZjZWUyMmNmMWI1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWFpbiIsImNyZWF0ZVJvb3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImZha2VQcm9kdWN0cyIsImlkIiwibmFtZSIsIlNpbmdsZVByb2R1Y3QiLCJfcmVmIiwiaW5kZXgiLCJudW1iZXIiLCJvbkNoYW5nZSIsIm9uQ2xvc2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInByb2R1Y3QiLCJwcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIkFsbFByb2R1Y3RzIiwiY29ubmVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiYWxsUHJvZHVjdHMiLCJwcm9kdWN0cyIsInByb2R1Y3RzU2VsZWN0b3IiLCJjcmVhdGVTZWxlY3RvciIsImdldFByb2R1Y3QiLCJzZWxlY3RvciIsImZpbHRlciIsImVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9