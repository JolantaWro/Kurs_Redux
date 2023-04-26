"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _containers_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80);






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/:filterValue",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/",
    exact: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }))));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null)));

/***/ }),

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);




var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    filterValue = _useParams.filterValue;
  console.log(filterValue);
  console.log((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/"
  }, "Wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/10"
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/50"
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
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
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);





var mapStateToProps = function mapStateToProps(state) {
  var products = state.products.products;
  var sum = 0;
  if (products.length > 0) {
    products.reduce(function (acc, item) {
      return acc + item.price;
    });
  }
  return {
    products: products,
    sum: sum
  };
};
// const mapStateToProps = state => ({
//     products: state.products,
//     // sum: sumPriceSelector(state.products)
// });

//values: state.routes

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    }
    // filterPrice: (value) => dispatch(filterProductsPrice(value))
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować


// export const filterProductsPrice = (products, status) => {
//     return products.filter(item => item.price >= status);
// };

// const productsSelector = state => state.products
// export const sumPriceSelector = createSelector(
//     filterProductsPrice,
//     products=> products.reduce((acc, item) => (
//         acc + item.price
//     ), 0)
// )

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4fc7dcc9cb92380a91fb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBSztFQUMvQixJQUFRcEIsUUFBUSxHQUFLb0IsS0FBSyxDQUFDcEIsUUFBUSxDQUEzQkEsUUFBUTtFQUNoQixJQUFJQyxHQUFHLEdBQUcsQ0FBQztFQUVYLElBQUdELFFBQVEsQ0FBQzBDLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDcEIxQyxRQUFRLENBQUMyQyxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO01BQUEsT0FBS0QsR0FBRyxHQUFHQyxJQUFJLENBQUN0QixLQUFLO0lBQUEsRUFBQztFQUNwRDtFQUVBLE9BQU07SUFDRnZCLFFBQVEsRUFBUkEsUUFBUTtJQUNSQyxHQUFHLEVBQUhBO0VBQ0osQ0FBQztBQUVMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFNNkMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcEM3QyxVQUFVLEVBQUUsU0FBQUEsV0FBQ2tDLE9BQU87TUFBQSxPQUFLVyxRQUFRLENBQUM3QywwREFBVSxDQUFDa0MsT0FBTyxDQUFDLENBQUM7SUFBQTtJQUN0RGpDLGFBQWEsRUFBRSxTQUFBQSxjQUFDaUMsT0FBTztNQUFBLE9BQUtXLFFBQVEsQ0FBQzVDLDZEQUFhLENBQUNpQyxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQzVEO0VBR0osQ0FBQztBQUFBLENBQUM7O0FBRUYsaUVBQWVFLG9EQUFPLENBQUNHLGVBQWUsRUFBRUssa0JBQWtCLENBQUMsQ0FBQ3BFLHdEQUFJLENBQUM7Ozs7Ozs7O0FDeENqRTtBQUNBO0FBQ0E7QUFDQTtBQUN5Qzs7QUFFekM7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2xCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4vY29udGFpbmVycy9DYXJ0XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVzfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi86ZmlsdGVyVmFsdWVcIiBlbGVtZW50PXs8Q2FydCAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdCAgZWxlbWVudD17PENhcnQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8QXBwIC8+XHJcbiAgICA8L1Byb3ZpZGVyPilcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcclxuaW1wb3J0IHtMaW5rLCB1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHN1bSwgYWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGZpbHRlclZhbHVlIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJWYWx1ZSlcclxuICAgIGNvbnNvbGUubG9nKHVzZVBhcmFtcygpKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9cIn0+V3N6eXN0a2llPC9MaW5rPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzEwXCJ9PmRvIDEwesWCPC9MaW5rPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzUwXCJ9PmRvIDUwesWCPC9MaW5rPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzEwMFwifT5kbyAxMDB6xYI8L0xpbms+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBhZGRQcm9kdWN0PXthZGRQcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QgcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgxPkRvIHphcMWCYXR5OiB7c3VtfSBQTE48L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgcHJpY2U6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5hZGRQcm9kdWN0KHRoaXMuc3RhdGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTogXCJcIiwgcHJpY2U6IFwiXCJ9KVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgfTtcclxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuXHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBwcmljZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmF6d2FcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtuYW1lfSAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByaWNlXCIgcGxhY2Vob2xkZXI9XCJjZW5hXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17cHJpY2V9IC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RG9kYWogcHJvZHVrdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTGlzdCA9ICh7IHByb2R1Y3RzLCByZW1vdmVQcm9kdWN0IH0pID0+IChcclxuICA8dWw+XHJcbiAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgIDxsaSBrZXk9e3Byb2R1Y3QubmFtZX0+XHJcbiAgICAgICAge3Byb2R1Y3QubmFtZX0gLSB7cHJvZHVjdC5wcmljZX0gUExOXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVQcm9kdWN0KHByb2R1Y3QpfT5Vc3XFhDwvYnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSl9XHJcbiAgPC91bD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiIsIi8vIFcgdHltIHBsaWt1IG5hbGXFvHkgd3lrb25hxIcgY29ubmVjdFxyXG4vLyBvcmF6IHNrb3J6eXN0YcSHIHogc2VsZWt0b3LDs3cgemFpbXBsZW1lbnRvd2FueWNoIHcgcGxpa3UgcmVkdXgvc2VsZWN0b3JzXHJcbi8vIHBhbWnEmXRhaiBvIHd5ZWtzcG9ydG93YW5pdSBrb250ZW5lcmE6XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYXJ0KTtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydFwiO1xyXG5pbXBvcnQge2FkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7ZmlsdGVyUHJvZHVjdHNQcmljZSwgc3VtUHJpY2VTZWxlY3Rvcn0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gc3RhdGUucHJvZHVjdHNcclxuICAgIGxldCBzdW0gPSAwXHJcblxyXG4gICAgaWYocHJvZHVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnByaWNlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9kdWN0cyxcclxuICAgICAgICBzdW1cclxuICAgIH1cclxuXHJcbn1cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuLy8gICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcclxuLy8gICAgIC8vIHN1bTogc3VtUHJpY2VTZWxlY3RvcihzdGF0ZS5wcm9kdWN0cylcclxuLy8gfSk7XHJcblxyXG4vL3ZhbHVlczogc3RhdGUucm91dGVzXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgYWRkUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QocHJvZHVjdCkpLFxyXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpLFxyXG4gICAgLy8gZmlsdGVyUHJpY2U6ICh2YWx1ZSkgPT4gZGlzcGF0Y2goZmlsdGVyUHJvZHVjdHNQcmljZSh2YWx1ZSkpXHJcblxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0KTsiLCIvLyBNaWVqc2NlIG5hIHNlbGVrdG9yeTpcclxuLy8gc2VsZWN0UHJvZHVjdHMgLSBkbyB3eWJpZXJhbmlhL2ZpbHRyb3dhbmlhIHByb2R1a3TDs3dcclxuLy8gc3VtIC0gZG8gb2JsaWN6YW5pYSBzdW15XHJcbi8vIHBhbWnEmXRhaiBhYnkgamUgd3lla3Nwb3J0b3dhxIdcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBmaWx0ZXJQcm9kdWN0c1ByaWNlID0gKHByb2R1Y3RzLCBzdGF0dXMpID0+IHtcclxuLy8gICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnByaWNlID49IHN0YXR1cyk7XHJcbi8vIH07XHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IHByb2R1Y3RzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0c1xyXG4vLyBleHBvcnQgY29uc3Qgc3VtUHJpY2VTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4vLyAgICAgZmlsdGVyUHJvZHVjdHNQcmljZSxcclxuLy8gICAgIHByb2R1Y3RzPT4gcHJvZHVjdHMucmVkdWNlKChhY2MsIGl0ZW0pID0+IChcclxuLy8gICAgICAgICBhY2MgKyBpdGVtLnByaWNlXHJcbi8vICAgICApLCAwKVxyXG4vLyApXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRmYzdkY2M5Y2I5MjM4MGE5MWZiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkNhcnQiLCJzdG9yZSIsIlByb3ZpZGVyIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwicGF0aCIsImVsZW1lbnQiLCJleGFjdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiRm9ybSIsIkxpc3QiLCJMaW5rIiwidXNlUGFyYW1zIiwiX3JlZiIsInByb2R1Y3RzIiwic3VtIiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJfdXNlUGFyYW1zIiwiZmlsdGVyVmFsdWUiLCJjb25zb2xlIiwibG9nIiwidG8iLCJfUmVhY3QkQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwic2V0U3RhdGUiLCJuYW1lIiwicHJpY2UiLCJoYW5kbGVDaGFuZ2UiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsIl90aGlzJHN0YXRlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJDb21wb25lbnQiLCJtYXAiLCJwcm9kdWN0Iiwib25DbGljayIsImNvbm5lY3QiLCJmaWx0ZXJQcm9kdWN0c1ByaWNlIiwic3VtUHJpY2VTZWxlY3RvciIsIm1hcFN0YXRlVG9Qcm9wcyIsImxlbmd0aCIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNyZWF0ZVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==