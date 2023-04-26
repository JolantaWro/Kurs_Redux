"use strict";
self["webpackHotUpdatees6_react"](0,{

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
      _this.handleChange("");
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
/******/ 	__webpack_require__.h = () => ("fe93596b451284ec8b3c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xOGJiOTA5N2YzNDNiZDMwNzk3OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQUEsSUFFcEJDLElBQUksMEJBQUFDLGdCQUFBO0VBQUFDLFNBQUEsQ0FBQUYsSUFBQSxFQUFBQyxnQkFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixJQUFBO0VBQ1IsU0FBQUEsS0FBWUssS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFQLElBQUE7SUFDakJNLEtBQUEsR0FBQUgsTUFBQSxDQUFBSyxJQUFBLE9BQU1ILEtBQUs7SUFBRUMsS0FBQSxDQU9mRyxRQUFRLEdBQUcsVUFBQ0MsQ0FBQyxFQUFLO01BQ2hCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtNQUNsQkwsS0FBQSxDQUFLRCxLQUFLLENBQUNPLFVBQVUsQ0FBQ04sS0FBQSxDQUFLTyxLQUFLLENBQUM7TUFDakNQLEtBQUEsQ0FBS1EsWUFBWSxDQUFDLEVBQUUsQ0FBQztNQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNWLEtBQUEsQ0FBS08sS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFBQVAsS0FBQSxDQUNEUSxZQUFZLEdBQUcsVUFBQ0osQ0FBQyxFQUFLO01BQ3BCSixLQUFBLENBQUtXLFFBQVEsQ0FBQUMsZUFBQSxLQUNWUixDQUFDLENBQUNTLE1BQU0sQ0FBQ0MsSUFBSSxFQUFHVixDQUFDLENBQUNTLE1BQU0sQ0FBQ0UsS0FBSyxFQUMvQjtJQUVKLENBQUM7SUFqQkNmLEtBQUEsQ0FBS08sS0FBSyxHQUFHO01BQ1hPLElBQUksRUFBRSxFQUFFO01BQ1JFLEtBQUssRUFBRTtJQUNULENBQUM7SUFBQyxPQUFBaEIsS0FBQTtFQUNKO0VBQUNpQixZQUFBLENBQUF2QixJQUFBO0lBQUF3QixHQUFBO0lBQUFILEtBQUEsRUFlRCxTQUFBSSxPQUFBLEVBQVM7TUFDUCxJQUFBQyxXQUFBLEdBQXdCLElBQUksQ0FBQ2IsS0FBSztRQUExQk8sSUFBSSxHQUFBTSxXQUFBLENBQUpOLElBQUk7UUFBRUUsS0FBSyxHQUFBSSxXQUFBLENBQUxKLEtBQUs7TUFDbkIsb0JBQ0V2QiwwREFBQTtRQUFNVSxRQUFRLEVBQUUsSUFBSSxDQUFDQTtNQUFTLGdCQUM1QlYsMERBQUE7UUFBTzZCLElBQUksRUFBQyxNQUFNO1FBQUNSLElBQUksRUFBQyxNQUFNO1FBQUNTLFdBQVcsRUFBQyxPQUFPO1FBQUNDLFFBQVEsRUFBRSxJQUFJLENBQUNoQixZQUFhO1FBQUNPLEtBQUssRUFBRUQ7TUFBSyxFQUFHLGVBQy9GckIsMERBQUE7UUFBTzZCLElBQUksRUFBQyxRQUFRO1FBQUNSLElBQUksRUFBQyxPQUFPO1FBQUNTLFdBQVcsRUFBQyxNQUFNO1FBQUNDLFFBQVEsRUFBRSxJQUFJLENBQUNoQixZQUFhO1FBQUNPLEtBQUssRUFBRUM7TUFBTSxFQUFHLGVBQ2xHdkIsMERBQUE7UUFBUTZCLElBQUksRUFBQztNQUFRLEdBQUMsZUFBYSxDQUFTLENBQ3ZDO0lBRVg7RUFBQztFQUFBLE9BQUE1QixJQUFBO0FBQUEsRUEvQmdCRCx3REFBZTtBQWtDbEMsaUVBQWVDLElBQUk7Ozs7Ozs7O1VDcENuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBwcmljZTogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmFkZFByb2R1Y3QodGhpcy5zdGF0ZSk7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShcIlwiKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgfTtcclxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuXHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBwcmljZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmF6d2FcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtuYW1lfSAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByaWNlXCIgcGxhY2Vob2xkZXI9XCJjZW5hXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17cHJpY2V9IC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RG9kYWogcHJvZHVrdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmU5MzU5NmI0NTEyODRlYzhiM2NcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiX1JlYWN0JENvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRQcm9kdWN0Iiwic3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmljZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInJlbmRlciIsIl90aGlzJHN0YXRlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==