"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */

function withTimer(WrappedComponent) {
  return /*#__PURE__*/function (_React$Component) {
    _inherits(_class2, _React$Component);
    var _super = _createSuper(_class2);
    function _class2() {
      var _this;
      _classCallCheck(this, _class2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _this.state = {
        counter: 0,
        isRunning: false
      };
      _this.startTimer = function () {
        if (!_this.state.isRunning) {
          _this.intervalID = setInterval(function () {
            _this.setState({
              counter: _this.state.counter + 1,
              isRunning: true
            });
          }, 100);
        }
      };
      _this.stopTimer = function () {
        clearInterval(_this.intervalID);
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          isRunning: false
        }));
      };
      return _this;
    }
    _createClass(_class2, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearInterval(this.intervalID);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, _extends({
          counter: this.state.counter,
          stopTime: this.stopTimer,
          startTime: this.startTimer
        }, this.props));
      }
    }]);
    return _class2;
  }((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withTimer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a85b7af12344db2b7d2a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MmM2NWFkNGQ4ZTE4Y2M5OWYzMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzFCLFNBQVNDLFNBQVNBLENBQUNDLGdCQUFnQixFQUFFO0VBQ2pDLDhCQUFBQyxnQkFBQTtJQUFBQyxTQUFBLENBQUFDLE9BQUEsRUFBQUYsZ0JBQUE7SUFBQSxJQUFBRyxNQUFBLEdBQUFDLFlBQUEsQ0FBQUYsT0FBQTtJQUFBLFNBQUFBLFFBQUE7TUFBQSxJQUFBRyxLQUFBO01BQUFDLGVBQUEsT0FBQUosT0FBQTtNQUFBLFNBQUFLLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7UUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtNQUFBO01BQUFQLEtBQUEsR0FBQUYsTUFBQSxDQUFBVSxJQUFBLENBQUFDLEtBQUEsQ0FBQVgsTUFBQSxTQUFBWSxNQUFBLENBQUFMLElBQUE7TUFBQUwsS0FBQSxDQUNJVyxLQUFLLEdBQUc7UUFDSkMsT0FBTyxFQUFFLENBQUM7UUFDVkMsU0FBUyxFQUFFO01BQ2YsQ0FBQztNQUFBYixLQUFBLENBQ0RjLFVBQVUsR0FBRyxZQUFNO1FBQ2YsSUFBRyxDQUFDZCxLQUFBLENBQUtXLEtBQUssQ0FBQ0UsU0FBUyxFQUFFO1VBQ3RCYixLQUFBLENBQUtlLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQU07WUFDaENoQixLQUFBLENBQUtpQixRQUFRLENBQUM7Y0FDVkwsT0FBTyxFQUFFWixLQUFBLENBQUtXLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7Y0FDL0JDLFNBQVMsRUFBRTtZQUNmLENBQUMsQ0FBQztVQUNOLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDWDtNQUNKLENBQUM7TUFBQWIsS0FBQSxDQUVEa0IsU0FBUyxHQUFHLFlBQU07UUFDZEMsYUFBYSxDQUFDbkIsS0FBQSxDQUFLZSxVQUFVLENBQUM7UUFDOUJmLEtBQUEsQ0FBS2lCLFFBQVEsQ0FBQUcsYUFBQSxDQUFBQSxhQUFBLEtBQUtwQixLQUFBLENBQUtXLEtBQUs7VUFBRUUsU0FBUyxFQUFFO1FBQUssR0FBRTtNQUNwRCxDQUFDO01BQUEsT0FBQWIsS0FBQTtJQUFBO0lBQUFxQixZQUFBLENBQUF4QixPQUFBO01BQUF5QixHQUFBO01BQUFDLEtBQUEsRUFDRCxTQUFBQyxxQkFBQSxFQUF1QjtRQUNuQkwsYUFBYSxDQUFDLElBQUksQ0FBQ0osVUFBVSxDQUFDO01BQ2xDO0lBQUM7TUFBQU8sR0FBQTtNQUFBQyxLQUFBLEVBR0QsU0FBQUUsT0FBQSxFQUFTO1FBQ0wsb0JBQU9qQywwREFBQSxDQUFDRSxnQkFBZ0IsRUFBQWlDLFFBQUE7VUFBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxPQUFRO1VBQUNnQixRQUFRLEVBQUUsSUFBSSxDQUFDVixTQUFVO1VBQ3REVyxTQUFTLEVBQUUsSUFBSSxDQUFDZjtRQUFXLEdBQUssSUFBSSxDQUFDZ0IsS0FBSyxFQUFJO01BQzNFO0lBQUM7SUFBQSxPQUFBakMsT0FBQTtFQUFBLEVBNUJnQkwsd0RBQWU7QUErQnhDO0FBQ0EsaUVBQWVDLFNBQVM7Ozs7Ozs7O1VDeEN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAzX0R6aWVuXzQvMDFfS29tcG9uZW50eS8wMV9aYWRhbmllXzEvanMvaG9jL3dpdGhUaW1lci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTmFwaXN6IEhPQyBpbXBsZW1lbnR1asSFY3kgbGljem5pa1xuICpcbiAqIE5pZSB6YXBvbW5paiB3eWVrc3BvcnRvd2HEhyFcbiAqIGV4cG9ydCBkZWZhdWx0IHdpdGhUaW1lcjtcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gd2l0aFRpbWVyKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvdW50ZXI6IDAsXG4gICAgICAgICAgICBpc1J1bm5pbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlLmlzUnVubmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiB0aGlzLnN0YXRlLmNvdW50ZXIgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSdW5uaW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RvcFRpbWVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSUQpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgaXNSdW5uaW5nOiBmYWxzZX0pXG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJRClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IGNvdW50ZXI9e3RoaXMuc3RhdGUuY291bnRlcn0gc3RvcFRpbWU9e3RoaXMuc3RvcFRpbWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZT17dGhpcy5zdGFydFRpbWVyfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgfVxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFRpbWVyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE4NWI3YWYxMjM0NGRiMmI3ZDJhXCIpIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aFRpbWVyIiwiV3JhcHBlZENvbXBvbmVudCIsIl9SZWFjdCRDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfY2xhc3MyIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiY291bnRlciIsImlzUnVubmluZyIsInN0YXJ0VGltZXIiLCJpbnRlcnZhbElEIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInN0b3BUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJfb2JqZWN0U3ByZWFkIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsInN0b3BUaW1lIiwic3RhcnRUaW1lIiwicHJvcHMiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9