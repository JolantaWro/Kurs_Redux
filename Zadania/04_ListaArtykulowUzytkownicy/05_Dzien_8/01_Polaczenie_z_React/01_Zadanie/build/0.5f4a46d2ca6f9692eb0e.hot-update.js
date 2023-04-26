"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var _containers_UserInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var _containers_Articles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77);






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_UserInput__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Articles__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("root"));

/***/ }),

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

var ArticleInput = /*#__PURE__*/function (_Component) {
  _inherits(ArticleInput, _Component);
  var _super = _createSuper(ArticleInput);
  function ArticleInput(props) {
    var _this;
    _classCallCheck(this, ArticleInput);
    _this = _super.call(this, props);
    _this.state = {
      userId: "jan",
      title: ""
    };
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onSelectChange = _this.onSelectChange.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ArticleInput, [{
    key: "onInputChange",
    value: function onInputChange(event) {
      this.setState({
        title: event.target.value
      });
    }
  }, {
    key: "onSelectChange",
    value: function onSelectChange(event) {
      this.setState({
        userId: event.target.value
      });
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.props.onArticleAdd(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        value: this.state.title,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        value: this.state.userId,
        onChange: this.onSelectChange
      }, Object.keys(this.props.users).map(function (user) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
          key: user
        }, user);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.onClick
      }, "Dodaj artyku\u0142"));
    }
  }]);
  return ArticleInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
ArticleInput.defaultProps = {
  onArticleAdd: function onArticleAdd() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleInput);

/***/ }),

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ArticleInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var _UsersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var _ArticlesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90);




var Articles = function Articles(_ref) {
  var onAdd = _ref.onAdd,
    users = _ref.users,
    articles = _ref.articles;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ArticleInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    users: users,
    onArticleAdd: onAdd
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UsersList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    users: users
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ArticlesList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    articles: articles
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Articles);

/***/ }),

/***/ 90:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ArticlesList = function ArticlesList(_ref) {
  var _ref$articles = _ref.articles,
    articles = _ref$articles === void 0 ? [] : _ref$articles;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", null, articles.map(function (_ref2) {
    var title = _ref2.title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: title
    }, title);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlesList);

/***/ }),

/***/ 89:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UsersList = function UsersList(_ref) {
  var _ref$users = _ref.users,
    users = _ref$users === void 0 ? {} : _ref$users;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, Object.entries(users).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      user = _ref3[0],
      count = _ref3[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: user
    }, user, ":", count);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersList);

/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);



var mapStateToProps = function mapStateToProps(state) {
  return {
    articles: state.articles,
    users: state.users
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAdd: function onAdd(article) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_0__.addArticle)(article));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Articles__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3e431b9c8f4e7dd34dbe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxDQUFDckQsNERBQVEsQ0FBQzs7Ozs7Ozs7VUNickUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAxX1BvbGFjemVuaWVfel9SZWFjdC8wMV9aYWRhbmllL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAxX1BvbGFjemVuaWVfel9SZWFjdC8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQXJ0aWNsZUlucHV0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA1X0R6aWVuXzgvMDFfUG9sYWN6ZW5pZV96X1JlYWN0LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9BcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAxX1BvbGFjemVuaWVfel9SZWFjdC8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQXJ0aWNsZXNMaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA1X0R6aWVuXzgvMDFfUG9sYWN6ZW5pZV96X1JlYWN0LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Vc2Vyc0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMV9Qb2xhY3plbmllX3pfUmVhY3QvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0FydGljbGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3JlZHV4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuL2NvbnRhaW5lcnMvVXNlcklucHV0XCI7XHJcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi9jb250YWluZXJzL0FydGljbGVzXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8VXNlcklucHV0Lz5cclxuICAgICAgPEFydGljbGVzLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEFydGljbGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvbkFydGljbGVBZGQ6ICgpID0+IHtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdXNlcklkOiBcImphblwiLFxyXG4gICAgICB0aXRsZTogXCJcIlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm9uSW5wdXRDaGFuZ2UgPSB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25TZWxlY3RDaGFuZ2UgPSB0aGlzLm9uU2VsZWN0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3RpdGxlOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VySWQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGljaygpIHtcclxuICAgIHRoaXMucHJvcHMub25BcnRpY2xlQWRkKHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2V9Lz5cclxuICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJJZH0gb25DaGFuZ2U9e3RoaXMub25TZWxlY3RDaGFuZ2V9PlxyXG4gICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMudXNlcnMpLm1hcCgodXNlcikgPT4gPG9wdGlvbiBrZXk9e3VzZXJ9Pnt1c2VyfTwvb3B0aW9uPil9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9PkRvZGFqIGFydHlrdcWCPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVJbnB1dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXJ0aWNsZUlucHV0IGZyb20gXCIuL0FydGljbGVJbnB1dFwiO1xyXG5pbXBvcnQgVXNlcnNMaXN0IGZyb20gXCIuL1VzZXJzTGlzdFwiO1xyXG5pbXBvcnQgQXJ0aWNsZXNMaXN0IGZyb20gXCIuL0FydGljbGVzTGlzdFwiO1xyXG5cclxuY29uc3QgQXJ0aWNsZXMgPSAoe29uQWRkLCB1c2VycywgYXJ0aWNsZXN9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxBcnRpY2xlSW5wdXQgdXNlcnM9e3VzZXJzfSBvbkFydGljbGVBZGQ9e29uQWRkfS8+XHJcbiAgICA8VXNlcnNMaXN0IHVzZXJzPXt1c2Vyc30vPlxyXG4gICAgPEFydGljbGVzTGlzdCBhcnRpY2xlcz17YXJ0aWNsZXN9Lz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBcnRpY2xlc0xpc3QgPSAoe2FydGljbGVzID0gW119KSA9PiAoXHJcbiAgPG9sPlxyXG4gICAge2FydGljbGVzLm1hcCgoe3RpdGxlfSkgPT4gPGxpIGtleT17dGl0bGV9Pnt0aXRsZX08L2xpPil9XHJcbiAgPC9vbD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVXNlcnNMaXN0ID0gKHt1c2VycyA9IHt9fSkgPT4gKFxyXG4gIDx1bD5cclxuICAgIHtPYmplY3QuZW50cmllcyh1c2VycykubWFwKChbdXNlciwgY291bnRdKSA9PiA8bGkga2V5PXt1c2VyfT57dXNlcn06e2NvdW50fTwvbGk+KX1cclxuICA8L3VsPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnNMaXN0O1xyXG4iLCJpbXBvcnQge2FkZEFydGljbGV9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9BcnRpY2xlc1wiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gICAgYXJ0aWNsZXM6IHN0YXRlLmFydGljbGVzLFxyXG4gICAgdXNlcnM6IHN0YXRlLnVzZXJzXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgb25BZGQ6IChhcnRpY2xlKSA9PiBkaXNwYXRjaChhZGRBcnRpY2xlKGFydGljbGUpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXJ0aWNsZXMpO1xyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNlNDMxYjljOGY0ZTdkZDM0ZGJlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJQcm92aWRlciIsInN0b3JlIiwiVXNlcklucHV0IiwiQXJ0aWNsZXMiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNvbXBvbmVudCIsIkFydGljbGVJbnB1dCIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsInN0YXRlIiwidXNlcklkIiwidGl0bGUiLCJvbklucHV0Q2hhbmdlIiwiYmluZCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJvblNlbGVjdENoYW5nZSIsIm9uQ2xpY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJvbkFydGljbGVBZGQiLCJvbkNoYW5nZSIsIk9iamVjdCIsImtleXMiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJkZWZhdWx0UHJvcHMiLCJVc2Vyc0xpc3QiLCJBcnRpY2xlc0xpc3QiLCJfcmVmIiwib25BZGQiLCJhcnRpY2xlcyIsIl9yZWYkYXJ0aWNsZXMiLCJfcmVmMiIsIl9yZWYkdXNlcnMiLCJlbnRyaWVzIiwiX3JlZjMiLCJfc2xpY2VkVG9BcnJheSIsImNvdW50IiwiYWRkQXJ0aWNsZSIsImNvbm5lY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFydGljbGUiXSwic291cmNlUm9vdCI6IiJ9