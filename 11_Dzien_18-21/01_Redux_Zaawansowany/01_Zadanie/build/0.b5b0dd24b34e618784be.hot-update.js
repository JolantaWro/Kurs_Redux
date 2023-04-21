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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
/* harmony import */ var _Products_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(105);
/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(106);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(107);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(109);
/* harmony import */ var _containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(112);
/* harmony import */ var _containers_RecipesContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(113);













var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products_Add__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_RecipesContainer__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
      _this.setState(_objectSpread(_objectSpread({}, state.name), {}, {
        name: ""
      }));
    };
    _this.handleSubmit = function (e) {
      e.preventDefault();
      console.log(_this.state);
      _this.props.onSaveProduct(_this.state.name);
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
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _redux_actions_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _components_Products_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(105);





var ProductsContainer = function ProductsContainer(_ref) {
  var allProducts = _ref.allProducts,
    onProductAdd = _ref.onProductAdd;
  var handleNewProduct = function handleNewProduct(value) {
    onProductAdd(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"], {
    allProducts: allProducts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Products_Add__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSaveProduct: handleNewProduct
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: state.products
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onProductAdd: function onProductAdd(value) {
      return dispatch((0,_redux_actions_products__WEBPACK_IMPORTED_MODULE_3__.addProduct)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(ProductsContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0009b0f6963dca94f641")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNWIwZGQyNGIzNGU2MTg3ODRiZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSTtBQUN3QztBQUNqQztBQUNIO0FBQ047QUFDUztBQUNHO0FBQ0w7QUFDRztBQUNaO0FBQ3NDO0FBQ0Y7QUFFOUQsSUFBTWdCLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBO0VBQUEsb0JBQ05oQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0UsNERBQWEscUJBQ1ZGLDBEQUFBLENBQUNDLCtDQUFNLHFCQUNIRCwwREFBQSxDQUFDSyxxREFBTSxxQkFDSEwsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2dCLEtBQUs7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFckIsMERBQUEsQ0FBQ2EsNkNBQUk7RUFBSSxFQUFHLGVBQzNDYiwwREFBQSxDQUFDRyxvREFBSztJQUFDaUIsSUFBSSxFQUFDLFdBQVc7SUFBQ0MsT0FBTyxlQUFFckIsMERBQUEsQ0FBQ2Msc0VBQWlCO0VBQUksRUFBRyxlQUMxRGQsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2lCLElBQUksRUFBQyxlQUFlO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNVLHFEQUFVO0VBQUksRUFBRyxlQUN2RFYsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2lCLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNlLHFFQUFnQjtFQUFJLEVBQUcsZUFDeERmLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNpQixJQUFJLEVBQUMsY0FBYztJQUFDQyxPQUFPLGVBQUVyQiwwREFBQSxDQUFDWSxvREFBUztFQUFJLEVBQUcsQ0FDaEQsQ0FDSixDQUNHLENBQ2pCO0FBQUEsQ0FDTjtBQUVELGlFQUFlSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCc0I7QUFBQSxJQUVuQ04sVUFBVSwwQkFBQWEsVUFB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QUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDUyw0REFBVztJQUFDaUQsV0FBVyxFQUFFQTtFQUFZLEVBQUcsZUFDekMxRCwwREFBQSxDQUFDVSxnRUFBVTtJQUFDbUMsYUFBYSxFQUFFZTtFQUFpQixFQUFHLENBQ2hEO0FBRVgsQ0FBQztBQUVELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR3RCLEtBQUs7RUFBQSxPQUFLO0lBQzlCbUIsV0FBVyxFQUFFbkIsS0FBSyxDQUFDdUI7RUFDdkIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ0wsWUFBWSxFQUFFLFNBQUFBLGFBQUN0QixLQUFLO01BQUEsT0FBSzJCLFFBQVEsQ0FBQ1IsbUVBQVUsQ0FBQ25CLEtBQUssQ0FBQyxDQUFDO0lBQUE7RUFDeEQsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZWtCLG9EQUFPLENBQUNNLGVBQWUsRUFBRUUsa0JBQWtCLENBQUMsQ0FBQ2pELGlCQUFpQixDQUFDOzs7Ozs7OztVQzVCOUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Qcm9kdWN0cy9BZGQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Qcm9kdWN0c0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcclxuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCJcclxuaW1wb3J0IFBhbmVsIGZyb20gXCIuL1BhbmVsXCI7XHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0cy9BZGRcIjtcclxuaW1wb3J0IEFsbFJlY2lwZXMgZnJvbSBcIi4vUmVjaXBlc1wiO1xyXG5pbXBvcnQgQWRkUmVjaXBlIGZyb20gXCIuL1JlY2lwZXMvQWRkXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuaW1wb3J0IFByb2R1Y3RzQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzQ29udGFpbmVyXCI7XHJcbmltcG9ydCBSZWNpcGVzQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL1JlY2lwZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiIGVsZW1lbnQ9ezxQcm9kdWN0c0NvbnRhaW5lciAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy9hZGRcIiBlbGVtZW50PXs8QWRkUHJvZHVjdCAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzXCIgZWxlbWVudD17PFJlY2lwZXNDb250YWluZXIgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy9hZGRcIiBlbGVtZW50PXs8QWRkUmVjaXBlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgIDwvPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBBZGRQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogXCJcIlxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBzdGF0ZSA9IHtcclxuICAvLyAgIG5hbWU6IFwiXCIsXHJcbiAgLy8gfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Li4uc3RhdGUubmFtZSwgbmFtZTogXCJcIn0pXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgdGhpcy5wcm9wcy5vblNhdmVQcm9kdWN0KHRoaXMuc3RhdGUubmFtZSlcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvZGFqIHByb2R1a3Q8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmF6d2EgcHJvZHVrdHU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF6d2EgcHJvZHVrdHVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rXCI+RG9kYWogcHJvZHVrdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvZHVjdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7YWRkUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdHNcIjtcclxuaW1wb3J0IEFkZFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHMvQWRkXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0c0NvbnRhaW5lciA9ICh7YWxsUHJvZHVjdHMsIG9uUHJvZHVjdEFkZCB9KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVOZXdQcm9kdWN0ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgb25Qcm9kdWN0QWRkKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBbGxQcm9kdWN0cyBhbGxQcm9kdWN0cz17YWxsUHJvZHVjdHN9IC8+XHJcbiAgICAgICAgICAgIDxBZGRQcm9kdWN0IG9uU2F2ZVByb2R1Y3Q9e2hhbmRsZU5ld1Byb2R1Y3R9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGFsbFByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0c1xyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBvblByb2R1Y3RBZGQ6ICh2YWx1ZSkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdCh2YWx1ZSkpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvZHVjdHNDb250YWluZXIpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMDA5YjBmNjk2M2RjYTk0ZjY0MVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlciIsIlJvdXRlcyIsIlByb3ZpZGVyIiwic3RvcmUiLCJQYW5lbCIsIkFsbFByb2R1Y3RzIiwiQWRkUHJvZHVjdCIsIkFsbFJlY2lwZXMiLCJBZGRSZWNpcGUiLCJIb21lIiwiUHJvZHVjdHNDb250YWluZXIiLCJSZWNpcGVzQ29udGFpbmVyIiwiTWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImV4YWN0IiwicGF0aCIsImVsZW1lbnQiLCJDb21wb25lbnQiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsInN0YXRlIiwibmFtZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm9uU2F2ZVByb2R1Y3QiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJhdXRvQ29tcGxldGUiLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiY29ubmVjdCIsImFkZFByb2R1Y3QiLCJfcmVmIiwiYWxsUHJvZHVjdHMiLCJvblByb2R1Y3RBZGQiLCJoYW5kbGVOZXdQcm9kdWN0IiwibWFwU3RhdGVUb1Byb3BzIiwicHJvZHVjdHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=