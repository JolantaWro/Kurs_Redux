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
    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.onSaveProduct(_this.state);
      _this.setState({
        name: ""
      });
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6b2c079b68694efc27a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMzUwMzc5OTFkNDI3OGJhNDBhNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQUEsSUFFbkNFLFVBQVUsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixVQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosVUFBQTtFQUNkLFNBQUFBLFdBQVlLLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBUCxVQUFBO0lBQ2pCTSxLQUFBLEdBQUFILE1BQUEsQ0FBQUssSUFBQSxPQUFNSCxLQUFLO0lBTWI7SUFDQTtJQUNBO0lBQUFDLEtBQUEsQ0FDQUcsWUFBWSxHQUFHLFVBQUNDLENBQUMsRUFBSztNQUNwQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7TUFDbEJMLEtBQUEsQ0FBS0QsS0FBSyxDQUFDTyxhQUFhLENBQUNOLEtBQUEsQ0FBS08sS0FBSyxDQUFDO01BQ3BDUCxLQUFBLENBQUtRLFFBQVEsQ0FBQztRQUFDQyxJQUFJLEVBQUU7TUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUFBVCxLQUFBLENBRURVLFlBQVksR0FBRyxVQUFDTixDQUFDLEVBQUs7TUFDcEJKLEtBQUEsQ0FBS1EsUUFBUSxDQUFBRyxlQUFBLEtBQ1ZQLENBQUMsQ0FBQ1EsTUFBTSxDQUFDQyxFQUFFLEVBQUdULENBQUMsQ0FBQ1EsTUFBTSxDQUFDRSxLQUFLLEVBQzdCO0lBQ0osQ0FBQztJQWxCQ2QsS0FBQSxDQUFLTyxLQUFLLEdBQUc7TUFDWEUsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUFBLE9BQUFULEtBQUE7RUFDSDtFQUFDZSxZQUFBLENBQUFyQixVQUFBO0lBQUFzQixHQUFBO0lBQUFGLEtBQUEsRUFtQkQsU0FBQUcsT0FBQSxFQUFTO01BQ1Asb0JBQ0V6QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7UUFBSTRCLFNBQVMsRUFBQztNQUFPLEdBQUMsZUFBYSxDQUFLLGVBQ3hDNUIsMERBQUE7UUFBSzRCLFNBQVMsRUFBQztNQUFLLGdCQUNsQjVCLDBEQUFBO1FBQU02QixZQUFZLEVBQUMsS0FBSztRQUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDbkI7TUFBYSxnQkFDbkRYLDBEQUFBO1FBQUs0QixTQUFTLEVBQUM7TUFBTyxnQkFDcEI1QiwwREFBQTtRQUFPNEIsU0FBUyxFQUFDO01BQU8sR0FBQyxnQkFBYyxDQUFRLGVBQy9DNUIsMERBQUE7UUFBSzRCLFNBQVMsRUFBQztNQUFTLGdCQUN0QjVCLDBEQUFBO1FBQ0U0QixTQUFTLEVBQUMsT0FBTztRQUNqQkcsSUFBSSxFQUFDLE1BQU07UUFDWGQsSUFBSSxFQUFDLE1BQU07UUFDWEksRUFBRSxFQUFDLE1BQU07UUFDVFcsV0FBVyxFQUFDLGdCQUFnQjtRQUM1QkMsUUFBUSxFQUFFLElBQUksQ0FBQ2Y7TUFBYSxFQUM1QixDQUNFLENBQ0YsZUFDTmxCLDBEQUFBO1FBQUs0QixTQUFTLEVBQUM7TUFBa0IsZ0JBQy9CNUIsMERBQUE7UUFBSzRCLFNBQVMsRUFBQztNQUFTLGdCQUN0QjVCLDBEQUFBO1FBQVE0QixTQUFTLEVBQUM7TUFBZ0IsR0FBQyxlQUFhLENBQVMsQ0FDckQsQ0FDRixDQUNELENBQ0gsQ0FDTDtJQUVQO0VBQUM7RUFBQSxPQUFBMUIsVUFBQTtBQUFBLEVBckRzQkQsNENBQVM7QUF3RGxDLGlFQUFlQyxVQUFVOzs7Ozs7OztVQzFEekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Byb2R1Y3RzL0FkZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEFkZFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiBcIlwiXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBzdGF0ZSA9IHtcclxuICAvLyAgIG5hbWU6IFwiXCIsXHJcbiAgLy8gfTtcclxuICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5vblNhdmVQcm9kdWN0KHRoaXMuc3RhdGUpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBcIlwifSlcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvZGFqIHByb2R1a3Q8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmF6d2EgcHJvZHVrdHU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF6d2EgcHJvZHVrdHVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rXCI+RG9kYWogcHJvZHVrdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvZHVjdDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmIyYzA3OWI2ODY5NGVmYzI3YTRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJBZGRQcm9kdWN0IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25TYXZlUHJvZHVjdCIsInN0YXRlIiwic2V0U3RhdGUiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsImF1dG9Db21wbGV0ZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9