"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _containers_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92);






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

// const Root = ({ store }) => {
//     return (
//         <Provider store={store}>
//             <HashRouter>
//                 <Routes>
//                     <Route path="/:filter" element={<Cart />} />
//                     <Route path="" element={<Cart />} />
//                 </Routes>
//             </HashRouter>
//         </Provider>
//     )
// }
//
// //<Route path="/:field" element={<App />} />
//
// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<Root store={store} />);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90);




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
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);




var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4dec7c85bee98978e194")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNVO0FBQ0U7QUFDcUI7QUFJM0QsSUFBTTJDLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR25CLEtBQUs7RUFBQSxPQUFLO0lBQzlCcEIsUUFBUSxFQUFFb0IsS0FBSyxDQUFDcEI7RUFHcEIsQ0FBQztBQUFBLENBQUM7O0FBRUY7O0FBRUEsSUFBTXdDLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDdkMsVUFBVSxFQUFFLFNBQUFBLFdBQUNrQyxPQUFPO01BQUEsT0FBS0ssUUFBUSxDQUFDdkMsMERBQVUsQ0FBQ2tDLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDdERqQyxhQUFhLEVBQUUsU0FBQUEsY0FBQ2lDLE9BQU87TUFBQSxPQUFLSyxRQUFRLENBQUN0Qyw2REFBYSxDQUFDaUMsT0FBTyxDQUFDLENBQUM7SUFBQTtFQUdoRSxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlRSxvREFBTyxDQUFDQyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLENBQUM5RCx3REFBSSxDQUFDOzs7Ozs7OztVQzFCakUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4vY29udGFpbmVycy9DYXJ0XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVzfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi86ZmlsdGVyVmFsdWVcIiBlbGVtZW50PXs8Q2FydCAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdCAgZWxlbWVudD17PENhcnQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8QXBwIC8+XHJcbiAgICA8L1Byb3ZpZGVyPilcclxuXHJcblxyXG4vLyBjb25zdCBSb290ID0gKHsgc3RvcmUgfSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuLy8gICAgICAgICAgICAgPEhhc2hSb3V0ZXI+XHJcbi8vICAgICAgICAgICAgICAgICA8Um91dGVzPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiLzpmaWx0ZXJcIiBlbGVtZW50PXs8Q2FydCAvPn0gLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIlwiIGVsZW1lbnQ9ezxDYXJ0IC8+fSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbi8vICAgICAgICAgICAgIDwvSGFzaFJvdXRlcj5cclxuLy8gICAgICAgICA8L1Byb3ZpZGVyPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcbi8vXHJcbi8vIC8vPFJvdXRlIHBhdGg9XCIvOmZpZWxkXCIgZWxlbWVudD17PEFwcCAvPn0gLz5cclxuLy9cclxuLy8gY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbi8vIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbi8vIHJvb3QucmVuZGVyKDxSb290IHN0b3JlPXtzdG9yZX0gLz4pOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XHJcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgQ2FydCA9ICh7IHByb2R1Y3RzLCBzdW0sIGFkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3QgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBmaWx0ZXJWYWx1ZSB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZmlsdGVyVmFsdWUpXHJcbiAgICBjb25zb2xlLmxvZyh1c2VQYXJhbXMoKSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvXCJ9PldzenlzdGtpZTwvTGluaz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMFwifT5kbyAxMHrFgjwvTGluaz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi81MFwifT5kbyA1MHrFgjwvTGluaz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMDBcIn0+ZG8gMTAwesWCPC9MaW5rPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gYWRkUHJvZHVjdD17YWRkUHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0IHJlbW92ZVByb2R1Y3Q9e3JlbW92ZVByb2R1Y3R9IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cclxuICAgICAgICAgICAgICAgIDxoMT5EbyB6YXDFgmF0eToge3N1bX0gUExOPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIHByaWNlOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuYWRkUHJvZHVjdCh0aGlzLnN0YXRlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6IFwiXCIsIHByaWNlOiBcIlwifSlcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gIH07XHJcbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hendhXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17bmFtZX0gLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwcmljZVwiIHBsYWNlaG9sZGVyPVwiY2VuYVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3ByaWNlfSAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkRvZGFqIHByb2R1a3Q8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExpc3QgPSAoeyBwcm9kdWN0cywgcmVtb3ZlUHJvZHVjdCB9KSA9PiAoXHJcbiAgPHVsPlxyXG4gICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICA8bGkga2V5PXtwcm9kdWN0Lm5hbWV9PlxyXG4gICAgICAgIHtwcm9kdWN0Lm5hbWV9IC0ge3Byb2R1Y3QucHJpY2V9IFBMTlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlUHJvZHVjdChwcm9kdWN0KX0+VXN1xYQ8L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgICkpfVxyXG4gIDwvdWw+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iLCIvLyBXIHR5bSBwbGlrdSBuYWxlxbx5IHd5a29uYcSHIGNvbm5lY3RcclxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xyXG4vLyBwYW1pxJl0YWogbyB3eWVrc3BvcnRvd2FuaXUga29udGVuZXJhOlxyXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ2FydCk7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRcIjtcclxuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzXHJcblxyXG5cclxufSk7XHJcblxyXG4vL3ZhbHVlczogc3RhdGUucm91dGVzXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgYWRkUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QocHJvZHVjdCkpLFxyXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpLFxyXG4gICAgXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnQpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRkZWM3Yzg1YmVlOTg5NzhlMTk0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkNhcnQiLCJzdG9yZSIsIlByb3ZpZGVyIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwicGF0aCIsImVsZW1lbnQiLCJleGFjdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiRm9ybSIsIkxpc3QiLCJMaW5rIiwidXNlUGFyYW1zIiwiX3JlZiIsInByb2R1Y3RzIiwic3VtIiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJfdXNlUGFyYW1zIiwiZmlsdGVyVmFsdWUiLCJjb25zb2xlIiwibG9nIiwidG8iLCJfUmVhY3QkQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwic2V0U3RhdGUiLCJuYW1lIiwicHJpY2UiLCJoYW5kbGVDaGFuZ2UiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsIl90aGlzJHN0YXRlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJDb21wb25lbnQiLCJtYXAiLCJwcm9kdWN0Iiwib25DbGljayIsImNvbm5lY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=