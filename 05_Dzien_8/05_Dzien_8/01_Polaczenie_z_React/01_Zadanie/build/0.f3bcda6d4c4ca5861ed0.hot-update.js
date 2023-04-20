self["webpackHotUpdatees6_react"](0,{

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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

var UserInput = /*#__PURE__*/function (_Component) {
  _inherits(UserInput, _Component);
  var _super = _createSuper(UserInput);
  function UserInput(props) {
    var _this;
    _classCallCheck(this, UserInput);
    _this = _super.call(this, props);
    _this.state = {
      value: ""
    };
    return _this;
  }
  _createClass(UserInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        value: this.state.value,
        onChange: function onChange(e) {
          return _this2.setState({
            value: e.target.value
          });
        },
        type: "text"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick() {
          return _this2.props.onUserAdd(_this2.state.value);
        }
      }, "Dodaj u\u017Cytkownika"));
    }
  }]);
  return UserInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInput);

/***/ }),

/***/ 77:
/***/ (() => {



/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _components_UserInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);



var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onUserAdd: function onUserAdd(user) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_0__.addUser)(user));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, mapDispatchToProps)(_components_UserInput__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5f4a46d2ca6f9692eb0e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mM2JjZGE2ZDRjNGNhNTg2MWVkMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFBQSxJQUVqQ0UsU0FBUywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFNBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixTQUFBO0VBQ2IsU0FBQUEsVUFBWUssS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFQLFNBQUE7SUFDakJNLEtBQUEsR0FBQUgsTUFBQSxDQUFBSyxJQUFBLE9BQU1ILEtBQUs7SUFDWEMsS0FBQSxDQUFLRyxLQUFLLEdBQUc7TUFDWEMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUFDLE9BQUFKLEtBQUE7RUFDSjtFQUFDSyxZQUFBLENBQUFYLFNBQUE7SUFBQVksR0FBQTtJQUFBRixLQUFBLEVBRUQsU0FBQUcsT0FBQSxFQUFTO01BQUEsSUFBQUMsTUFBQTtNQUNQLG9CQUNFaEIsMERBQUEsMkJBQ0VBLDBEQUFBO1FBQU9ZLEtBQUssRUFBRSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsS0FBTTtRQUFDTSxRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsQ0FBQztVQUFBLE9BQUtILE1BQUksQ0FBQ0ksUUFBUSxDQUFDO1lBQUNSLEtBQUssRUFBRU8sQ0FBQyxDQUFDRSxNQUFNLENBQUNUO1VBQUssQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUFDVSxJQUFJLEVBQUM7TUFBTSxFQUFFLGVBQ3RHdEIsMERBQUE7UUFBUXVCLE9BQU8sRUFBRSxTQUFBQSxRQUFBO1VBQUEsT0FBTVAsTUFBSSxDQUFDVCxLQUFLLENBQUNpQixTQUFTLENBQUNSLE1BQUksQ0FBQ0wsS0FBSyxDQUFDQyxLQUFLLENBQUM7UUFBQTtNQUFDLEdBQUMsd0JBQWlCLENBQVMsQ0FDckY7SUFFVjtFQUFDO0VBQUEsT0FBQVYsU0FBQTtBQUFBLEVBZnFCRCw0Q0FBUztBQWtCakMsaUVBQWVDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmlCO0FBQ087QUFDWjtBQUVwQyxJQUFNeUIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSUMsUUFBUTtFQUFBLE9BQU07SUFDdENKLFNBQVMsRUFBRSxTQUFBQSxVQUFDSyxJQUFJO01BQUEsT0FBS0QsUUFBUSxDQUFDSCx1REFBTyxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUFBO0VBQ2hELENBQUM7QUFBQSxDQUFDO0FBQ0YsaUVBQWVILG9EQUFPLENBQUMsSUFBSSxFQUFFQyxrQkFBa0IsQ0FBQyxDQUFDekIsNkRBQVMsQ0FBQzs7Ozs7Ozs7VUNQM0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAxX1BvbGFjemVuaWVfel9SZWFjdC8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvVXNlcklucHV0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA1X0R6aWVuXzgvMDFfUG9sYWN6ZW5pZV96X1JlYWN0LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Vc2VySW5wdXQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgVXNlcklucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmFsdWU6IFwiXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZS50YXJnZXQudmFsdWV9KX0gdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uVXNlckFkZCh0aGlzLnN0YXRlLnZhbHVlKX0+RG9kYWogdcW8eXRrb3duaWthPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJJbnB1dDtcclxuIiwiaW1wb3J0IHthZGRVc2VyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbnB1dFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgb25Vc2VyQWRkOiAodXNlcikgPT4gZGlzcGF0Y2goYWRkVXNlcih1c2VyKSlcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJJbnB1dCk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVmNGE0NmQyY2E2Zjk2OTJlYjBlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVXNlcklucHV0IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwic3RhdGUiLCJ2YWx1ZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInJlbmRlciIsIl90aGlzMiIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInR5cGUiLCJvbkNsaWNrIiwib25Vc2VyQWRkIiwiYWRkVXNlciIsImNvbm5lY3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9