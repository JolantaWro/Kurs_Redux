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
      _this.props.onSaveProduct(_this.state.name);
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
/******/ 	__webpack_require__.h = () => ("ddb1cc7206d451f2c63f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YjJjMDc5YjY4Njk0ZWZjMjdhNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQUEsSUFFbkNFLFVBQVUsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixVQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosVUFBQTtFQUNkLFNBQUFBLFdBQVlLLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBUCxVQUFBO0lBQ2pCTSxLQUFBLEdBQUFILE1BQUEsQ0FBQUssSUFBQSxPQUFNSCxLQUFLO0lBTWI7SUFDQTtJQUNBO0lBQUFDLEtBQUEsQ0FDQUcsWUFBWSxHQUFHLFVBQUNDLENBQUMsRUFBSztNQUNwQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7TUFDbEJMLEtBQUEsQ0FBS0QsS0FBSyxDQUFDTyxhQUFhLENBQUNOLEtBQUEsQ0FBS08sS0FBSyxDQUFDQyxJQUFJLENBQUM7TUFDekNSLEtBQUEsQ0FBS1MsUUFBUSxDQUFDO1FBQUNELElBQUksRUFBRTtNQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQUFSLEtBQUEsQ0FFRFUsWUFBWSxHQUFHLFVBQUNOLENBQUMsRUFBSztNQUNwQkosS0FBQSxDQUFLUyxRQUFRLENBQUFFLGVBQUEsS0FDVlAsQ0FBQyxDQUFDUSxNQUFNLENBQUNDLEVBQUUsRUFBR1QsQ0FBQyxDQUFDUSxNQUFNLENBQUNFLEtBQUssRUFDN0I7SUFDSixDQUFDO0lBbEJDZCxLQUFBLENBQUtPLEtBQUssR0FBRztNQUNYQyxJQUFJLEVBQUU7SUFDUixDQUFDO0lBQUEsT0FBQVIsS0FBQTtFQUNIO0VBQUNlLFlBQUEsQ0FBQXJCLFVBQUE7SUFBQXNCLEdBQUE7SUFBQUYsS0FBQSxFQW1CRCxTQUFBRyxPQUFBLEVBQVM7TUFDUCxvQkFDRXpCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtRQUFJNEIsU0FBUyxFQUFDO01BQU8sR0FBQyxlQUFhLENBQUssZUFDeEM1QiwwREFBQTtRQUFLNEIsU0FBUyxFQUFDO01BQUssZ0JBQ2xCNUIsMERBQUE7UUFBTTZCLFlBQVksRUFBQyxLQUFLO1FBQUNDLFFBQVEsRUFBRSxJQUFJLENBQUNuQjtNQUFhLGdCQUNuRFgsMERBQUE7UUFBSzRCLFNBQVMsRUFBQztNQUFPLGdCQUNwQjVCLDBEQUFBO1FBQU80QixTQUFTLEVBQUM7TUFBTyxHQUFDLGdCQUFjLENBQVEsZUFDL0M1QiwwREFBQTtRQUFLNEIsU0FBUyxFQUFDO01BQVMsZ0JBQ3RCNUIsMERBQUE7UUFDRTRCLFNBQVMsRUFBQyxPQUFPO1FBQ2pCRyxJQUFJLEVBQUMsTUFBTTtRQUNYZixJQUFJLEVBQUMsTUFBTTtRQUNYSyxFQUFFLEVBQUMsTUFBTTtRQUNUVyxXQUFXLEVBQUMsZ0JBQWdCO1FBQzVCQyxRQUFRLEVBQUUsSUFBSSxDQUFDZjtNQUFhLEVBQzVCLENBQ0UsQ0FDRixlQUNObEIsMERBQUE7UUFBSzRCLFNBQVMsRUFBQztNQUFrQixnQkFDL0I1QiwwREFBQTtRQUFLNEIsU0FBUyxFQUFDO01BQVMsZ0JBQ3RCNUIsMERBQUE7UUFBUTRCLFNBQVMsRUFBQztNQUFnQixHQUFDLGVBQWEsQ0FBUyxDQUNyRCxDQUNGLENBQ0QsQ0FDSCxDQUNMO0lBRVA7RUFBQztFQUFBLE9BQUExQixVQUFBO0FBQUEsRUFyRHNCRCw0Q0FBUztBQXdEbEMsaUVBQWVDLFVBQVU7Ozs7Ozs7O1VDMUR6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUHJvZHVjdHMvQWRkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgQWRkUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6IFwiXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHN0YXRlID0ge1xyXG4gIC8vICAgbmFtZTogXCJcIixcclxuICAvLyB9O1xyXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLm9uU2F2ZVByb2R1Y3QodGhpcy5zdGF0ZS5uYW1lKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTogXCJcIn0pXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2RhaiBwcm9kdWt0PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hendhIHByb2R1a3R1PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendhIHByb2R1a3R1XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlua1wiPkRvZGFqIHByb2R1a3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFByb2R1Y3Q7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRkYjFjYzcyMDZkNDUxZjJjNjNmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQWRkUHJvZHVjdCIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU2F2ZVByb2R1Y3QiLCJzdGF0ZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhdXRvQ29tcGxldGUiLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==