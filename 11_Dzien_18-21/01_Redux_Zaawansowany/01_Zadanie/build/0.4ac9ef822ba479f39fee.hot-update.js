"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 105:
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
    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
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

/***/ 113:
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
/******/ 	__webpack_require__.h = () => ("85a3d44c02e112260a73")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDdkIsQ0FBQztFQUdELG9CQUNJakIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNvQyw0REFBVztJQUFDSyxXQUFXLEVBQUVBO0VBQVksRUFBRyxlQUN6Q3pDLDBEQUFBLENBQUNFLGdFQUFVO0lBQUNxQixhQUFhLEVBQUVvQjtFQUFpQixFQUFHLENBQ2hEO0FBRVgsQ0FBQztBQUVELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR3RCLEtBQUs7RUFBQSxPQUFLO0lBQzlCbUIsV0FBVyxFQUFFbkIsS0FBSyxDQUFDdUI7RUFDdkIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ0wsWUFBWSxFQUFFLFNBQUFBLGFBQUN6QixLQUFLO01BQUEsT0FBSzhCLFFBQVEsQ0FBQ1QsbUVBQVUsQ0FBQ3JCLEtBQUssQ0FBQyxDQUFDO0lBQUE7RUFDeEQsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZW9CLG9EQUFPLENBQUNPLGVBQWUsRUFBRUUsa0JBQWtCLENBQUMsQ0FBQ1AsaUJBQWlCLENBQUM7Ozs7Ozs7O1VDNUI5RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUHJvZHVjdHMvQWRkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUHJvZHVjdHNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBBZGRQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogXCJcIlxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBzdGF0ZSA9IHtcclxuICAvLyAgIG5hbWU6IFwiXCIsXHJcbiAgLy8gfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIHRoaXMucHJvcHMub25TYXZlUHJvZHVjdCh0aGlzLnN0YXRlLm5hbWUpXHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2RhaiBwcm9kdWt0PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hendhIHByb2R1a3R1PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendhIHByb2R1a3R1XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlua1wiPkRvZGFqIHByb2R1a3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFByb2R1Y3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2FkZFByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RzXCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzL0FkZFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdHNDb250YWluZXIgPSAoe2FsbFByb2R1Y3RzLCBvblByb2R1Y3RBZGQgfSkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlTmV3UHJvZHVjdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIG9uUHJvZHVjdEFkZCh2YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QWxsUHJvZHVjdHMgYWxsUHJvZHVjdHM9e2FsbFByb2R1Y3RzfSAvPlxyXG4gICAgICAgICAgICA8QWRkUHJvZHVjdCBvblNhdmVQcm9kdWN0PXtoYW5kbGVOZXdQcm9kdWN0fSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBhbGxQcm9kdWN0czogc3RhdGUucHJvZHVjdHNcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgb25Qcm9kdWN0QWRkOiAodmFsdWUpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QodmFsdWUpKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2R1Y3RzQ29udGFpbmVyKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODVhM2Q0NGMwMmUxMTIyNjBhNzNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJBZGRQcm9kdWN0IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwib25TYXZlUHJvZHVjdCIsIm5hbWUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhdXRvQ29tcGxldGUiLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiQWxsUHJvZHVjdHMiLCJjb25uZWN0IiwiYWRkUHJvZHVjdCIsIlByb2R1Y3RzQ29udGFpbmVyIiwiX3JlZiIsImFsbFByb2R1Y3RzIiwib25Qcm9kdWN0QWRkIiwiaGFuZGxlTmV3UHJvZHVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInByb2R1Y3RzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9