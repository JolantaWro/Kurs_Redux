"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stopper": () => (/* binding */ Stopper),
/* harmony export */   "StopperWithTimer": () => (/* binding */ StopperWithTimer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);



// Zamień ciało funkcji tak aby renderowała Stopper wg. treści zadania
var Stopper = function Stopper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: props.startTime
  }, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: props.stopTime
  }, "Stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Counter: ", props.counter), props.children);
};

// Zamień deklarację komponentu poniżej tak aby korzystał z wczesniej zamiplementowanego HOC withTimer
var StopperWithTimer = (0,_hoc_withTimer__WEBPACK_IMPORTED_MODULE_1__["default"])(Stopper);


/***/ }),

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

// import * as React from 'react';

// const initialState = { count: 0 };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return { ...state, count: state.count + 1 };

//         default:
//             return state;
//     }
// }

// export default function App() {
//     const [state, dispatch] = React.useReducer(reducer, initialState);
//
//     function handleClick() {
//         dispatch({ type: 'increment' });
//     }
//
//     return (
//         <div>
//             <p>{state.count}</p>
//             <button onClick={handleClick}>Update</button>
//         </div>
//     );
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0cf9cd3b7372df144a8e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxHQUFLLElBQUksQ0FBQzVCLEtBQUssRUFBSTtNQUMzRTtJQUFDO0lBQUEsT0FBQVksT0FBQTtFQUFBLEVBNUJnQmYsd0RBQWU7QUErQnhDO0FBQ0EsaUVBQWVDLFNBQVMsRUFBQzs7QUFFekI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNyRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wM19Eemllbl80LzAxX0tvbXBvbmVudHkvMDFfWmFkYW5pZV8xL2pzL2NvbXBvbmVudHMvU3RvcHBlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wM19Eemllbl80LzAxX0tvbXBvbmVudHkvMDFfWmFkYW5pZV8xL2pzL2hvYy93aXRoVGltZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2l0aFRpbWVyIGZyb20gXCIuLi9ob2Mvd2l0aFRpbWVyXCJcblxuLy8gWmFtaWXFhCBjaWHFgm8gZnVua2NqaSB0YWsgYWJ5IHJlbmRlcm93YcWCYSBTdG9wcGVyIHdnLiB0cmXFm2NpIHphZGFuaWFcbmNvbnN0IFN0b3BwZXIgPSAocHJvcHMpID0+XG4gICAgPD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5zdGFydFRpbWV9PlN0YXJ0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuc3RvcFRpbWV9PlN0b3A8L2J1dHRvbj5cbiAgICAgICAgPHA+Q291bnRlcjoge3Byb3BzLmNvdW50ZXJ9PC9wPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG5cbiAgICA8Lz5cblxuLy8gWmFtaWXFhCBkZWtsYXJhY2rEmSBrb21wb25lbnR1IHBvbmnFvGVqIHRhayBhYnkga29yenlzdGHFgiB6IHdjemVzbmllaiB6YW1pcGxlbWVudG93YW5lZ28gSE9DIHdpdGhUaW1lclxuY29uc3QgU3RvcHBlcldpdGhUaW1lciA9IHdpdGhUaW1lcihTdG9wcGVyKVxuXG5leHBvcnQgeyBTdG9wcGVyLCBTdG9wcGVyV2l0aFRpbWVyIH07XG4iLCIvKipcbiAqIE5hcGlzeiBIT0MgaW1wbGVtZW50dWrEhWN5IGxpY3puaWtcbiAqXG4gKiBOaWUgemFwb21uaWogd3lla3Nwb3J0b3dhxIchXG4gKiBleHBvcnQgZGVmYXVsdCB3aXRoVGltZXI7XG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIHdpdGhUaW1lcihXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBjb3VudGVyOiAwLFxuICAgICAgICAgICAgaXNSdW5uaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHN0YXJ0VGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZS5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogdGhpcy5zdGF0ZS5jb3VudGVyICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUnVubmluZzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3BUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIGlzUnVubmluZzogZmFsc2V9KVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSUQpXG4gICAgICAgIH1cblxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCBjb3VudGVyPXt0aGlzLnN0YXRlLmNvdW50ZXJ9IHN0b3BUaW1lPXt0aGlzLnN0b3BUaW1lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWU9e3RoaXMuc3RhcnRUaW1lcn0gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaW1lcjtcblxuLy8gaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7IGNvdW50OiAwIH07XG5cbi8vIGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuLy8gICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbi8vICAgICAgICAgY2FzZSAnaW5jcmVtZW50Jzpcbi8vICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb3VudDogc3RhdGUuY291bnQgKyAxIH07XG5cbi8vICAgICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbi8vICAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbi8vXG4vLyAgICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4vLyAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2luY3JlbWVudCcgfSk7XG4vLyAgICAgfVxuLy9cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPHA+e3N0YXRlLmNvdW50fTwvcD5cbi8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlVwZGF0ZTwvYnV0dG9uPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBjZjljZDNiNzM3MmRmMTQ0YThlXCIpIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aFRpbWVyIiwiU3RvcHBlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25DbGljayIsInN0YXJ0VGltZSIsInN0b3BUaW1lIiwiY291bnRlciIsImNoaWxkcmVuIiwiU3RvcHBlcldpdGhUaW1lciIsIldyYXBwZWRDb21wb25lbnQiLCJfUmVhY3QkQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX2NsYXNzMiIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsImlzUnVubmluZyIsInN0YXJ0VGltZXIiLCJpbnRlcnZhbElEIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInN0b3BUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJfb2JqZWN0U3ByZWFkIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIl9leHRlbmRzIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==