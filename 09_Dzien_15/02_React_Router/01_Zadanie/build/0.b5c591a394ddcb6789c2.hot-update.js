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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)().filterValue),
    _useState2 = _slicedToArray(_useState, 2),
    selectorValue = _useState2[0],
    setSelectorValue = _useState2[1];
  console.log("selectorValue", selectorValue);
  var newStateProducts = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_3__.filteredProducts)(products, parseInt(selectorValue));

  //
  // const filteredState = getProduct(allProducts, parseInt(idProduct));
  // const product = filteredState[0]

  // const { filterValue } = useParams();
  //
  // console.log("filterValue", filterValue)
  // console.log("sum", sum, typeof sum)

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/"
  }, "Wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/10"
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/50"
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/100"
  }, "do 100z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
      _this.setState({
        name: "",
        price: ""
      });
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
    removeProduct = _ref.removeProduct,
    filterValue = _ref.filterValue;
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
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);





var mapStateToProps = function mapStateToProps(state) {
  return {
    products: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.productsSelector)(state),
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.sumPriceSelector)(state)
  };
};

//values: state.routes

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    }
    // filterPrice: (value) => dispatch(getPriceValue(value))
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("69cfa50c1674bd4eb8af")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0ksZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxDQUFDckQsd0RBQUksQ0FBQzs7Ozs7Ozs7VUMxQmpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQge0xpbmssIHVzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7ZmlsdGVyZWRQcm9kdWN0c30gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xuXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHN1bSwgYWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCB9KSA9PiB7XG5cbiAgICBjb25zdCBbc2VsZWN0b3JWYWx1ZSwgc2V0U2VsZWN0b3JWYWx1ZV0gPSB1c2VTdGF0ZSh1c2VQYXJhbXMoKS5maWx0ZXJWYWx1ZSlcblxuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0b3JWYWx1ZVwiLCBzZWxlY3RvclZhbHVlKVxuXG4gICAgY29uc3QgbmV3U3RhdGVQcm9kdWN0cyA9IGZpbHRlcmVkUHJvZHVjdHMocHJvZHVjdHMsIHBhcnNlSW50KHNlbGVjdG9yVmFsdWUpKVxuXG4gICAgLy9cbiAgICAvLyBjb25zdCBmaWx0ZXJlZFN0YXRlID0gZ2V0UHJvZHVjdChhbGxQcm9kdWN0cywgcGFyc2VJbnQoaWRQcm9kdWN0KSk7XG4gICAgLy8gY29uc3QgcHJvZHVjdCA9IGZpbHRlcmVkU3RhdGVbMF1cblxuICAgIC8vIGNvbnN0IHsgZmlsdGVyVmFsdWUgfSA9IHVzZVBhcmFtcygpO1xuICAgIC8vXG4gICAgLy8gY29uc29sZS5sb2coXCJmaWx0ZXJWYWx1ZVwiLCBmaWx0ZXJWYWx1ZSlcbiAgICAvLyBjb25zb2xlLmxvZyhcInN1bVwiLCBzdW0sIHR5cGVvZiBzdW0pXG5cblxuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9cIn0+V3N6eXN0a2llPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMFwifT5kbyAxMHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvNTBcIn0+ZG8gNTB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzEwMFwifT5kbyAxMDB6xYI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPEZvcm0gYWRkUHJvZHVjdD17YWRkUHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICA8TGlzdCByZW1vdmVQcm9kdWN0PXtyZW1vdmVQcm9kdWN0fSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG4gICAgICAgICAgICAgICAgPGgxPkRvIHphcMWCYXR5OiB7c3VtfSBQTE48L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcHJpY2U6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5hZGRQcm9kdWN0KHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6IFwiXCIsIHByaWNlOiBcIlwifSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfTtcbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG5cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBwcmljZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmF6d2FcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtuYW1lfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwcmljZVwiIHBsYWNlaG9sZGVyPVwiY2VuYVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3ByaWNlfSAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Eb2RhaiBwcm9kdWt0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMaXN0ID0gKHsgcHJvZHVjdHMsIHJlbW92ZVByb2R1Y3QsIGZpbHRlclZhbHVlIH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtwcm9kdWN0Lm5hbWV9PlxuICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfSAtIHtwcm9kdWN0LnByaWNlfSBQTE5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVQcm9kdWN0KHByb2R1Y3QpfT5Vc3XFhDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsIi8vIFcgdHltIHBsaWt1IG5hbGXFvHkgd3lrb25hxIcgY29ubmVjdFxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xuLy8gcGFtacSZdGFqIG8gd3lla3Nwb3J0b3dhbml1IGtvbnRlbmVyYTpcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYXJ0KTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydFwiO1xuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IHtnZXRQcmljZVZhbHVlLCBwcm9kdWN0c1NlbGVjdG9yLCBzdW1QcmljZVNlbGVjdG9yfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBwcm9kdWN0czogcHJvZHVjdHNTZWxlY3RvcihzdGF0ZSksXG4gICAgc3VtOiBzdW1QcmljZVNlbGVjdG9yKHN0YXRlKVxufSk7XG5cbi8vdmFsdWVzOiBzdGF0ZS5yb3V0ZXNcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpLFxuICAgIC8vIGZpbHRlclByaWNlOiAodmFsdWUpID0+IGRpc3BhdGNoKGdldFByaWNlVmFsdWUodmFsdWUpKVxuXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2OWNmYTUwYzE2NzRiZDRlYjhhZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkxpc3QiLCJMaW5rIiwidXNlUGFyYW1zIiwiZmlsdGVyZWRQcm9kdWN0cyIsIkNhcnQiLCJfcmVmIiwicHJvZHVjdHMiLCJzdW0iLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsIl91c2VTdGF0ZSIsImZpbHRlclZhbHVlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0b3JWYWx1ZSIsInNldFNlbGVjdG9yVmFsdWUiLCJjb25zb2xlIiwibG9nIiwibmV3U3RhdGVQcm9kdWN0cyIsInBhcnNlSW50IiwiY3JlYXRlRWxlbWVudCIsInRvIiwiX1JlYWN0JENvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGF0ZSIsInNldFN0YXRlIiwibmFtZSIsInByaWNlIiwiaGFuZGxlQ2hhbmdlIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0IiwidmFsdWUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJyZW5kZXIiLCJfdGhpcyRzdGF0ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiQ29tcG9uZW50IiwibWFwIiwicHJvZHVjdCIsIm9uQ2xpY2siLCJjb25uZWN0IiwiZ2V0UHJpY2VWYWx1ZSIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdW1QcmljZVNlbGVjdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9