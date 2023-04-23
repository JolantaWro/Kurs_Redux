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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sum),
    _useState2 = _slicedToArray(_useState, 2),
    sumValue = _useState2[0],
    setSum = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    addProduct: addProduct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    removeProduct: removeProduct,
    products: products
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Do zap\u0142aty: ", sumValue, " PLN"));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  };
};
var CartContainer = function CartContainer(props) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    filterValue = _useParams.filterValue;
  var filteredProduct = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.filteredProducts)(props.products, filterValue);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, filterValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: filteredProduct
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: props.products
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CartContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("877a5642c96a581945ad")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcblxuXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHN1bSwgYWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCB9KSA9PiB7XG4gICAgY29uc3QgW3N1bVZhbHVlLCBzZXRTdW1dID0gdXNlU3RhdGUoc3VtKVxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZvcm0gYWRkUHJvZHVjdD17YWRkUHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgPExpc3QgcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgICAgICAgICA8aDE+RG8gemFwxYJhdHk6IHtzdW1WYWx1ZX0gUExOPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHByaWNlOiBcIlwiLFxuICAgIH07XG4gIH1cblxuICBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuYWRkUHJvZHVjdCh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBcIlwiLCBwcmljZTogXCJcIn0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIH07XG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hendhXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17bmFtZX0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpY2VcIiBwbGFjZWhvbGRlcj1cImNlbmFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtwcmljZX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RG9kYWogcHJvZHVrdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGlzdCA9ICh7IHByb2R1Y3RzLCByZW1vdmVQcm9kdWN0LCBmaWx0ZXJWYWx1ZSB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cHJvZHVjdC5uYW1lfT5cbiAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX0gLSB7cHJvZHVjdC5wcmljZX0gUExOXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlUHJvZHVjdChwcm9kdWN0KX0+VXN1xYQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCIvLyBXIHR5bSBwbGlrdSBuYWxlxbx5IHd5a29uYcSHIGNvbm5lY3Rcbi8vIG9yYXogc2tvcnp5c3RhxIcgeiBzZWxla3RvcsOzdyB6YWltcGxlbWVudG93YW55Y2ggdyBwbGlrdSByZWR1eC9zZWxlY3RvcnNcbi8vIHBhbWnEmXRhaiBvIHd5ZWtzcG9ydG93YW5pdSBrb250ZW5lcmE6XG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ2FydCk7XG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XG5pbXBvcnQge2FkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQge2ZpbHRlcmVkUHJvZHVjdHMsIHByb2R1Y3RzU2VsZWN0b3IsIHN1bVByaWNlU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHByb2R1Y3RzOiBwcm9kdWN0c1NlbGVjdG9yKHN0YXRlKSxcbiAgICBzdW06IHN1bVByaWNlU2VsZWN0b3Ioc3RhdGUpXG59KTtcblxuLy92YWx1ZXM6IHN0YXRlLnJvdXRlc1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGFkZFByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChhZGRQcm9kdWN0KHByb2R1Y3QpKSxcbiAgICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2gocmVtb3ZlUHJvZHVjdChwcm9kdWN0KSksXG59KTtcblxuXG5jb25zdCBDYXJ0Q29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBmaWx0ZXJWYWx1ZSB9ID0gdXNlUGFyYW1zKCk7XG4gICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0ID0gZmlsdGVyZWRQcm9kdWN0cyhwcm9wcy5wcm9kdWN0cywgZmlsdGVyVmFsdWUpXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtmaWx0ZXJWYWx1ZSA/IDxDYXJ0IHsgLi4ucHJvcHN9IHByb2R1Y3RzPXtmaWx0ZXJlZFByb2R1Y3R9IC8+IDogIDxDYXJ0IHsgLi4ucHJvcHN9IHByb2R1Y3RzPXtwcm9wcy5wcm9kdWN0c30gLz59XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0Q29udGFpbmVyKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg3N2E1NjQyYzk2YTU4MTk0NWFkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiTGlzdCIsIkNhcnQiLCJfcmVmIiwicHJvZHVjdHMiLCJzdW0iLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInN1bVZhbHVlIiwic2V0U3VtIiwiY3JlYXRlRWxlbWVudCIsIl9SZWFjdCRDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIm5hbWUiLCJwcmljZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInJlbmRlciIsIl90aGlzJHN0YXRlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJDb21wb25lbnQiLCJmaWx0ZXJWYWx1ZSIsIm1hcCIsInByb2R1Y3QiLCJvbkNsaWNrIiwidXNlUGFyYW1zIiwiY29ubmVjdCIsImZpbHRlcmVkUHJvZHVjdHMiLCJwcm9kdWN0c1NlbGVjdG9yIiwic3VtUHJpY2VTZWxlY3RvciIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiQ2FydENvbnRhaW5lciIsIl91c2VQYXJhbXMiLCJmaWx0ZXJlZFByb2R1Y3QiLCJGcmFnbWVudCIsIl9leHRlbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==