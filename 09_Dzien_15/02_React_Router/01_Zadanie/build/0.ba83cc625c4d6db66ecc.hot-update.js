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
/******/ 	__webpack_require__.h = () => ("770c898ea538c71a59e2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYTgzY2M2MjVjNGQ2ZGI2NmVjYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQUEsSUFFcEJDLElBQUksMEJBQUFDLGdCQUFBO0VBQUFDLFNBQUEsQ0FBQUYsSUFBQSxFQUFBQyxnQkFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixJQUFBO0VBQ1IsU0FBQUEsS0FBWUssS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFQLElBQUE7SUFDakJNLEtBQUEsR0FBQUgsTUFBQSxDQUFBSyxJQUFBLE9BQU1ILEtBQUs7SUFBRUMsS0FBQSxDQU9mRyxRQUFRLEdBQUcsVUFBQ0MsQ0FBQyxFQUFLO01BQ2hCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtNQUNsQkwsS0FBQSxDQUFLRCxLQUFLLENBQUNPLFVBQVUsQ0FBQ04sS0FBQSxDQUFLTyxLQUFLLENBQUM7TUFDakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxLQUFBLENBQUtPLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQUFQLEtBQUEsQ0FDRFUsWUFBWSxHQUFHLFVBQUNOLENBQUMsRUFBSztNQUNwQkosS0FBQSxDQUFLVyxRQUFRLENBQUFDLGVBQUEsS0FDVlIsQ0FBQyxDQUFDUyxNQUFNLENBQUNDLElBQUksRUFBR1YsQ0FBQyxDQUFDUyxNQUFNLENBQUNFLEtBQUssRUFDL0I7SUFFSixDQUFDO0lBaEJDZixLQUFBLENBQUtPLEtBQUssR0FBRztNQUNYTyxJQUFJLEVBQUUsRUFBRTtNQUNSRSxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQUMsT0FBQWhCLEtBQUE7RUFDSjtFQUFDaUIsWUFBQSxDQUFBdkIsSUFBQTtJQUFBd0IsR0FBQTtJQUFBSCxLQUFBLEVBY0QsU0FBQUksT0FBQSxFQUFTO01BQ1AsSUFBQUMsV0FBQSxHQUF3QixJQUFJLENBQUNiLEtBQUs7UUFBMUJPLElBQUksR0FBQU0sV0FBQSxDQUFKTixJQUFJO1FBQUVFLEtBQUssR0FBQUksV0FBQSxDQUFMSixLQUFLO01BQ25CLG9CQUNFdkIsMERBQUE7UUFBTVUsUUFBUSxFQUFFLElBQUksQ0FBQ0E7TUFBUyxnQkFDNUJWLDBEQUFBO1FBQU82QixJQUFJLEVBQUMsTUFBTTtRQUFDUixJQUFJLEVBQUMsTUFBTTtRQUFDUyxXQUFXLEVBQUMsT0FBTztRQUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDZCxZQUFhO1FBQUNLLEtBQUssRUFBRUQ7TUFBSyxFQUFHLGVBQy9GckIsMERBQUE7UUFBTzZCLElBQUksRUFBQyxRQUFRO1FBQUNSLElBQUksRUFBQyxPQUFPO1FBQUNTLFdBQVcsRUFBQyxNQUFNO1FBQUNDLFFBQVEsRUFBRSxJQUFJLENBQUNkLFlBQWE7UUFBQ0ssS0FBSyxFQUFFQztNQUFNLEVBQUcsZUFDbEd2QiwwREFBQTtRQUFRNkIsSUFBSSxFQUFDO01BQVEsR0FBQyxlQUFhLENBQVMsQ0FDdkM7SUFFWDtFQUFDO0VBQUEsT0FBQTVCLElBQUE7QUFBQSxFQTlCZ0JELHdEQUFlO0FBaUNsQyxpRUFBZUMsSUFBSTs7Ozs7Ozs7VUNuQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIHByaWNlOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuYWRkUHJvZHVjdCh0aGlzLnN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gIH07XHJcbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hendhXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17bmFtZX0gLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwcmljZVwiIHBsYWNlaG9sZGVyPVwiY2VuYVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3ByaWNlfSAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkRvZGFqIHByb2R1a3Q8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc3MGM4OThlYTUzOGM3MWE1OWUyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIl9SZWFjdCRDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkUHJvZHVjdCIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInNldFN0YXRlIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJpY2UiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJyZW5kZXIiLCJfdGhpcyRzdGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=