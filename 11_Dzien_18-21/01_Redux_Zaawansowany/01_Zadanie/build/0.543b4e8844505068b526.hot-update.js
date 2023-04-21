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
/* harmony import */ var _containers_Products_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _containers_Products_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(111);
/* harmony import */ var _Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);








var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Products__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Add__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__["default"], null)
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
      _this.props.onProductAdd(_this.state.name);
      // this.setState({name: ""})
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

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);


var AllProducts = function AllProducts(_ref) {
  var allProducts = _ref.allProducts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "Wszystkie produkty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    iconName: "folder",
    path: "products",
    listElements: allProducts,
    heading: false,
    footer: false
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllProducts);

/***/ }),

/***/ 111:
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




var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onProductAdd: function onProductAdd(value) {
      return dispatch((0,_redux_actions_products__WEBPACK_IMPORTED_MODULE_1__.addProduct)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, mapDispatchToProps)(_components_Products_Add__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ 48:
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
/******/ 	__webpack_require__.h = () => ("8f8be4fc5f1f95b745fa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0M7QUFDcEI7QUFDVjtBQUUxQixJQUFNZ0Qsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcEM1QixZQUFZLEVBQUUsU0FBQUEsYUFBQ1EsS0FBSztNQUFBLE9BQUtvQixRQUFRLENBQUNILG1FQUFVLENBQUNqQixLQUFLLENBQUMsQ0FBQztJQUFBO0VBQ3hELENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVrQixvREFBTyxDQUFDLElBQUksRUFBRUMsa0JBQWtCLENBQUMsQ0FBQy9DLGdFQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1RsQztBQUMwQjtBQUNoQjs7QUFHcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNaUQsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHNUIsS0FBSztFQUFBLE9BQUs7SUFDOUJtQixXQUFXLEVBQUVuQixLQUFLLENBQUM2QjtFQUN2QixDQUFDO0FBQUEsQ0FBQztBQUdGLGlFQUFlSixvREFBTyxDQUFDRyxlQUFlLENBQUMsQ0FBQ2xELDREQUFXLENBQUM7Ozs7Ozs7O1VDbkJwRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Byb2R1Y3RzL0FkZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Byb2R1Y3RzL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUHJvZHVjdHMvQWRkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUHJvZHVjdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVzfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi9SZWNpcGVzL0FkZFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzL1Byb2R1Y3RzXCI7XG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi4vY29udGFpbmVycy9Qcm9kdWN0cy9BZGRcIjtcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuL1JlY2lwZXMvU2luZ2xlUHJvZHVjdFwiO1xuXG5jb25zdCBNYWluID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIiBlbGVtZW50PXs8QWxsUHJvZHVjdHMgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzLzppZFwiIGVsZW1lbnQ9ezxTaW5nbGVQcm9kdWN0Lz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzL2FkZFwiIGVsZW1lbnQ9ezxBZGRQcm9kdWN0IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzL2FkZFwiIGVsZW1lbnQ9ezxBZGRSZWNpcGUgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXMvYWRkXCIgZWxlbWVudD17PEFkZFJlY2lwZSAvPn0gLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFkZFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogXCJcIlxuICAgIH1cbiAgfVxuXG4gIC8vIHN0YXRlID0ge1xuICAvLyAgIG5hbWU6IFwiXCIsXG4gIC8vIH07XG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25Qcm9kdWN0QWRkKHRoaXMuc3RhdGUubmFtZSlcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtuYW1lOiBcIlwifSlcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RG9kYWogcHJvZHVrdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmF6d2EgcHJvZHVrdHU8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendhIHByb2R1a3R1XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpbmtcIj5Eb2RhaiBwcm9kdWt0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvZHVjdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi4vUGFuZWxcIjtcblxuXG5jb25zdCBBbGxQcm9kdWN0cyA9ICh7YWxsUHJvZHVjdHN9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+V3N6eXN0a2llIHByb2R1a3R5PC9oMT5cbiAgICAgIDxQYW5lbCBpY29uTmFtZT17XCJmb2xkZXJcIn0gcGF0aD17XCJwcm9kdWN0c1wifSBsaXN0RWxlbWVudHM9e2FsbFByb2R1Y3RzfSBoZWFkaW5nPXtmYWxzZX0gZm9vdGVyPXtmYWxzZX0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsbFByb2R1Y3RzO1xuIiwiaW1wb3J0IEFkZFByb2R1Y3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHMvQWRkXCI7XG5pbXBvcnQge2FkZFByb2R1Y3R9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBvblByb2R1Y3RBZGQ6ICh2YWx1ZSkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdCh2YWx1ZSkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZFByb2R1Y3QpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cblxuLy8gY29uc3QgUHJvZHVjdHMgPSAoeyBhbGxQcm9kdWN0cyB9KSA9PiB7XG4vL1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDw+XG4vLyAgICAgICAgICAgICA8QWxsUHJvZHVjdHMgYWxsUHJvZHVjdHM9e2FsbFByb2R1Y3RzfSAvPlxuLy8gICAgICAgICA8Lz5cbi8vICAgICApO1xuLy8gfTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBhbGxQcm9kdWN0czogc3RhdGUucHJvZHVjdHNcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBbGxQcm9kdWN0cyk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGY4YmU0ZmM1ZjFmOTViNzQ1ZmFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJBZGRSZWNpcGUiLCJIb21lIiwiQWxsUHJvZHVjdHMiLCJBZGRQcm9kdWN0IiwiU2luZ2xlUHJvZHVjdCIsIk1haW4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJleGFjdCIsInBhdGgiLCJlbGVtZW50IiwiQ29tcG9uZW50IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25Qcm9kdWN0QWRkIiwic3RhdGUiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwic2V0U3RhdGUiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwicmVuZGVyIiwiY2xhc3NOYW1lIiwiYXV0b0NvbXBsZXRlIiwib25TdWJtaXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIlBhbmVsIiwiX3JlZiIsImFsbFByb2R1Y3RzIiwiaWNvbk5hbWUiLCJsaXN0RWxlbWVudHMiLCJoZWFkaW5nIiwiZm9vdGVyIiwiYWRkUHJvZHVjdCIsImNvbm5lY3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm1hcFN0YXRlVG9Qcm9wcyIsInByb2R1Y3RzIl0sInNvdXJjZVJvb3QiOiIifQ==