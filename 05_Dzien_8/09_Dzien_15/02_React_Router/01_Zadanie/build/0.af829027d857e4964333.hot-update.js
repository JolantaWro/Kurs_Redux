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



var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    addProduct: addProduct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    removeProduct: removeProduct,
    products: products
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Do zap\u0142aty: ", sum, " PLN"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ 78:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);
  var _super = _createSuper(Form);
  function Form(props) {
    var _this;
    _classCallCheck(this, Form);
    _this = _super.call(this, props);
    _this.onSubmit = function (e) {
      e.preventDefault();
      _this.props.addProduct(_this.state);
      console.log(_this.state);
    };
    _this.handleChange = function (e) {
      console.log(e.target.value);
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    };
    _this.state = {
      name: "",
      price: ""
    };
    return _this;
  }
  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
        name = _this$state.name,
        price = _this$state.price;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: this.onSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        name: "name",
        placeholder: "nazwa",
        onChange: this.handleChange,
        value: name
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "number",
        name: "price",
        placeholder: "cena",
        onChange: this.handleChange,
        value: price
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "submit"
      }, "Dodaj produkt"));
    }
  }]);
  return Form;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ 79:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var List = function List(_ref) {
  var products = _ref.products,
    removeProduct = _ref.removeProduct;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: product.name
    }, product.name, " - ", product.price, " PLN", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return removeProduct(product);
      }
    }, "Usu\u0144"));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);



var CartContainer = function CartContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    products: products,
    sum: sum,
    addProduct: addProduct,
    removeProduct: removeProduct
  }));
};
var mapStateToProps = function mapStateToProps(store) {
  return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CartContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fbca7f7d6ad7313baf67")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUssQ0FFeEMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUwsb0RBQU8sQ0FBQ0UsZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUFDSCxhQUFhLENBQUM7Ozs7Ozs7O1VDM0IxRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9MaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcblxuY29uc3QgQ2FydCA9ICh7IHByb2R1Y3RzLCBzdW0sIGFkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3QgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxGb3JtIGFkZFByb2R1Y3Q9e2FkZFByb2R1Y3R9IC8+XG4gICAgPExpc3QgcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgIDxoMT5EbyB6YXDFgmF0eToge3N1bX0gUExOPC9oMT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwcmljZTogXCJcIixcbiAgICB9O1xuICB9XG5cbiAgb25TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmFkZFByb2R1Y3QodGhpcy5zdGF0ZSk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIH07XG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBwcmljZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmF6d2FcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtuYW1lfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwcmljZVwiIHBsYWNlaG9sZGVyPVwiY2VuYVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3ByaWNlfSAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Eb2RhaiBwcm9kdWt0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMaXN0ID0gKHsgcHJvZHVjdHMsIHJlbW92ZVByb2R1Y3QgfSkgPT4gKFxuICA8dWw+XG4gICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgPGxpIGtleT17cHJvZHVjdC5uYW1lfT5cbiAgICAgICAge3Byb2R1Y3QubmFtZX0gLSB7cHJvZHVjdC5wcmljZX0gUExOXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlUHJvZHVjdChwcm9kdWN0KX0+VXN1xYQ8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgKSl9XG4gIDwvdWw+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIiwiLy8gVyB0eW0gcGxpa3UgbmFsZcW8eSB3eWtvbmHEhyBjb25uZWN0XG4vLyBvcmF6IHNrb3J6eXN0YcSHIHogc2VsZWt0b3LDs3cgemFpbXBsZW1lbnRvd2FueWNoIHcgcGxpa3UgcmVkdXgvc2VsZWN0b3JzXG4vLyBwYW1pxJl0YWogbyB3eWVrc3BvcnRvd2FuaXUga29udGVuZXJhOlxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKENhcnQpO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XG5cbmNvbnN0IENhcnRDb250YWluZXIgPSAoKSA9PiB7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q2FydCBwcm9kdWN0cz17cHJvZHVjdHN9IHN1bT17c3VtfSBhZGRQcm9kdWN0PXthZGRQcm9kdWN0fSByZW1vdmVQcm9kdWN0PXtyZW1vdmVQcm9kdWN0fS8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+ICh7XG5cbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydENvbnRhaW5lcik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmYmNhN2Y3ZDZhZDczMTNiYWY2N1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJMaXN0IiwiQ2FydCIsIl9yZWYiLCJwcm9kdWN0cyIsInN1bSIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiY3JlYXRlRWxlbWVudCIsIl9SZWFjdCRDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm5hbWUiLCJwcmljZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInJlbmRlciIsIl90aGlzJHN0YXRlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJDb21wb25lbnQiLCJtYXAiLCJwcm9kdWN0Iiwib25DbGljayIsImNvbm5lY3QiLCJDYXJ0Q29udGFpbmVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=