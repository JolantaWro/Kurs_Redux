"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _containers_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(111);
/* harmony import */ var _containers_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var _Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);








var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Add__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 113:
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

var AddProduct = /*#__PURE__*/function (_Component) {
  _inherits(AddProduct, _Component);
  var _super = _createSuper(AddProduct);
  function AddProduct(props) {
    var _this;
    _classCallCheck(this, AddProduct);
    _this = _super.call(this, props);
    // state = {
    //   name: "",
    // };
    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.onSaveProduct(_this.state.name);
      // this.setState({name: ""}) do poprawy
    };
    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
    };
    _this.state = {
      name: ""
    };
    return _this;
  }
  _createClass(AddProduct, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
        className: "title"
      }, "Dodaj produkt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        autoComplete: "off",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Nazwa produktu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Nazwa produktu",
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field is-grouped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "button is-link"
      }, "Dodaj produkt"))))));
    }
  }]);
  return AddProduct;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProduct);

/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Products_Add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _redux_actions_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(101);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





// const AddProductContainer = ({ onProductAdd }) => {

//     const handleNewProduct = (value) => {
//         onProductAdd(value)
//     }

//     return (
//         <>
//             <AddProduct onSaveProduct={handleNewProduct} />
//         </>
//     );
// };

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onProductAdd: function onProductAdd(value) {
      return dispatch((0,_redux_actions_products__WEBPACK_IMPORTED_MODULE_1__.addProduct)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, mapDispatchToProps)(_components_Products_Add__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ 111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);




// const Products = ({ allProducts }) => {
//
//     return (
//         <>
//             <AllProducts allProducts={allProducts} />
//         </>
//     );
// };

var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: state.products
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e19c81f5b8cf0297b0ac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUN3QjtFQUN2QixDQUFDO0FBQUEsQ0FBQztBQUdGLGlFQUFlTixvREFBTyxDQUFDSSxlQUFlLENBQUMsQ0FBQzVDLDREQUFXLENBQUM7Ozs7Ozs7O1VDbkJwRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Byb2R1Y3RzL0FkZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0FkZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1Byb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlciwgUm91dGVzfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi9SZWNpcGVzL0FkZFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzXCI7XG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi4vY29udGFpbmVycy9BZGRcIjtcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuL1JlY2lwZXMvU2luZ2xlUHJvZHVjdFwiO1xuXG5jb25zdCBNYWluID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCIgZWxlbWVudD17PFByb2R1Y3RzQ29udGFpbmVyIC8+fSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIiBlbGVtZW50PXs8QWxsUHJvZHVjdHMgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzLzppZFwiIGVsZW1lbnQ9ezxTaW5nbGVQcm9kdWN0Lz59IC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy9hZGRcIiBlbGVtZW50PXs8QWRkUHJvZHVjdCAvPn0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzL2FkZFwiIGVsZW1lbnQ9ezxBZGRQcm9kdWN0IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICB7Lyo8Um91dGUgcGF0aD1cIi9yZWNpcGVzXCIgZWxlbWVudD17PFJlY2lwZXNDb250YWluZXIgLz59IC8+Ki99XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXMvYWRkXCIgZWxlbWVudD17PEFkZFJlY2lwZSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgey8qPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy86aWRcIiBlbGVtZW50PXs8U2luZ2xlUmVjaXBlLz59Lz4qL31cbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFkZFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogXCJcIlxuICAgIH1cbiAgfVxuXG4gIC8vIHN0YXRlID0ge1xuICAvLyAgIG5hbWU6IFwiXCIsXG4gIC8vIH07XG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25TYXZlUHJvZHVjdCh0aGlzLnN0YXRlLm5hbWUpXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7bmFtZTogXCJcIn0pIGRvIHBvcHJhd3lcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RG9kYWogcHJvZHVrdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmF6d2EgcHJvZHVrdHU8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendhIHByb2R1a3R1XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpbmtcIj5Eb2RhaiBwcm9kdWt0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvZHVjdDtcbiIsImltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzL0FkZFwiO1xuaW1wb3J0IHthZGRQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9wcm9kdWN0c1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuLy8gY29uc3QgQWRkUHJvZHVjdENvbnRhaW5lciA9ICh7IG9uUHJvZHVjdEFkZCB9KSA9PiB7XG5cbi8vICAgICBjb25zdCBoYW5kbGVOZXdQcm9kdWN0ID0gKHZhbHVlKSA9PiB7XG4vLyAgICAgICAgIG9uUHJvZHVjdEFkZCh2YWx1ZSlcbi8vICAgICB9XG5cblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDw+XG4vLyAgICAgICAgICAgICA8QWRkUHJvZHVjdCBvblNhdmVQcm9kdWN0PXtoYW5kbGVOZXdQcm9kdWN0fSAvPlxuLy8gICAgICAgICA8Lz5cbi8vICAgICApO1xuLy8gfTtcblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIG9uUHJvZHVjdEFkZDogKHZhbHVlKSA9PiBkaXNwYXRjaChhZGRQcm9kdWN0KHZhbHVlKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkUHJvZHVjdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0c1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuXG4vLyBjb25zdCBQcm9kdWN0cyA9ICh7IGFsbFByb2R1Y3RzIH0pID0+IHtcbi8vXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPD5cbi8vICAgICAgICAgICAgIDxBbGxQcm9kdWN0cyBhbGxQcm9kdWN0cz17YWxsUHJvZHVjdHN9IC8+XG4vLyAgICAgICAgIDwvPlxuLy8gICAgICk7XG4vLyB9O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGFsbFByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0c1xufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFsbFByb2R1Y3RzKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMTljODFmNWI4Y2YwMjk3YjBhY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlciIsIlJvdXRlcyIsIkFkZFJlY2lwZSIsIkhvbWUiLCJBbGxQcm9kdWN0cyIsIkFkZFByb2R1Y3QiLCJTaW5nbGVQcm9kdWN0IiwiTWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImV4YWN0IiwicGF0aCIsImVsZW1lbnQiLCJDb21wb25lbnQiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJvblNhdmVQcm9kdWN0Iiwic3RhdGUiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwic2V0U3RhdGUiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwicmVuZGVyIiwiY2xhc3NOYW1lIiwiYXV0b0NvbXBsZXRlIiwib25TdWJtaXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImFkZFByb2R1Y3QiLCJjb25uZWN0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvblByb2R1Y3RBZGQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhbGxQcm9kdWN0cyIsInByb2R1Y3RzIl0sInNvdXJjZVJvb3QiOiIifQ==