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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
      var _this2;
      e.preventDefault();
      _this.props.addProduct(_this.state);
      (_this2 = _this).setState.apply(_this2, _toConsumableArray(_this.state).concat([{}]));
      console.log(_this.state);
    };
    _this.handleChange = function (e) {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18bb9097f343bd307979")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsRUFBRSxJQUFJLENBQUNaLFlBQWE7UUFBQ0ksS0FBSyxFQUFFQztNQUFNLEVBQUcsZUFDbEdsQywwREFBQTtRQUFRdUMsSUFBSSxFQUFDO01BQVEsR0FBQyxlQUFhLENBQVMsQ0FDdkM7SUFFWDtFQUFDO0VBQUEsT0FBQXRDLElBQUE7QUFBQSxFQS9CZ0JELHdEQUFlO0FBa0NsQyxpRUFBZUMsSUFBSTs7Ozs7Ozs7VUNwQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XHJcblxyXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHN1bSwgYWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxGb3JtIGFkZFByb2R1Y3Q9e2FkZFByb2R1Y3R9IC8+XHJcbiAgICA8TGlzdCByZW1vdmVQcm9kdWN0PXtyZW1vdmVQcm9kdWN0fSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XHJcbiAgICA8aDE+RG8gemFwxYJhdHk6IHtzdW19IFBMTjwvaDE+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgcHJpY2U6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5hZGRQcm9kdWN0KHRoaXMuc3RhdGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSguLi50aGlzLnN0YXRlLCB7fSlcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gIH07XHJcbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hendhXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17bmFtZX0gLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwcmljZVwiIHBsYWNlaG9sZGVyPVwiY2VuYVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3ByaWNlfSAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkRvZGFqIHByb2R1a3Q8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE4YmI5MDk3ZjM0M2JkMzA3OTc5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIkxpc3QiLCJDYXJ0IiwiX3JlZiIsInByb2R1Y3RzIiwic3VtIiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJjcmVhdGVFbGVtZW50IiwiX1JlYWN0JENvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwib25TdWJtaXQiLCJlIiwiX3RoaXMyIiwicHJldmVudERlZmF1bHQiLCJzdGF0ZSIsInNldFN0YXRlIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJpY2UiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJyZW5kZXIiLCJfdGhpcyRzdGF0ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==