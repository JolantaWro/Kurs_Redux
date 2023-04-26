"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _containers_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);





var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);



var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    addProduct: addProduct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    removeProduct: removeProduct,
    products: products
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Do zap\u0142aty: ", sum, " PLN"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

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
      console.log(e.target.value);
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

/***/ }),

/***/ 79:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var List = function List(_ref) {
  var products = _ref.products,
    removeProduct = _ref.removeProduct;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: product.name
    }, product.name, " - ", product.price, " PLN", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return removeProduct(product);
      }
    }, "Usu\u0144"));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);





var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products,
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.getSum)(state.products)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 90:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFilteredContacts": () => (/* binding */ getFilteredContacts),
/* harmony export */   "getSum": () => (/* binding */ getSum)
/* harmony export */ });
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować

var getSum = function getSum(products) {
  return products.filter(function (element) {
    var _contact$name = contact.name,
      first = _contact$name.first,
      last = _contact$name.last;
    return first.toLowerCase().includes(contactsSearch) || last.toLowerCase().includes(contactsSearch);
  });
};
var getFilteredContacts = function getFilteredContacts(contacts, text) {
  var contactsSearch = text.toLowerCase();
  return contacts.filter(function (contact) {
    var _contact$name2 = contact.name,
      first = _contact$name2.first,
      last = _contact$name2.last;
    return first.toLowerCase().includes(contactsSearch) || last.toLowerCase().includes(contactsSearch);
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b1ddff56192bc125f245")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUNDLFdBQVcsRUFBRSxDQUFDQyxRQUFRLENBQUNDLGNBQWMsQ0FBQztFQUN0RyxDQUFDLENBQUM7QUFDTixDQUFDO0FBRU0sSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBSUMsUUFBUSxFQUFFQyxJQUFJLEVBQUs7RUFDbkQsSUFBTUgsY0FBYyxHQUFHRyxJQUFJLENBQUNMLFdBQVcsRUFBRTtFQUV6QyxPQUFPSSxRQUFRLENBQUNWLE1BQU0sQ0FBQyxVQUFDRyxPQUFPLEVBQUs7SUFDaEMsSUFBQVMsY0FBQSxHQUF3QlQsT0FBTyxDQUFDcEIsSUFBSTtNQUE1QnFCLEtBQUssR0FBQVEsY0FBQSxDQUFMUixLQUFLO01BQUVDLElBQUksR0FBQU8sY0FBQSxDQUFKUCxJQUFJO0lBRW5CLE9BQU9ELEtBQUssQ0FBQ0UsV0FBVyxFQUFFLENBQUNDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLElBQUlILElBQUksQ0FBQ0MsV0FBVyxFQUFFLENBQUNDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDO0VBQ3RHLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7O1VDdEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9MaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuL2NvbnRhaW5lcnMvQ2FydFwiO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vcmVkdXgvc3RvcmVcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8Q2FydCAvPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxuXG59O1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcblxuY29uc3QgQ2FydCA9ICh7IHByb2R1Y3RzLCBzdW0sIGFkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3QgfSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxGb3JtIGFkZFByb2R1Y3Q9e2FkZFByb2R1Y3R9IC8+XG4gICAgICAgIDxMaXN0IHJlbW92ZVByb2R1Y3Q9e3JlbW92ZVByb2R1Y3R9IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgICAgPGgxPkRvIHphcMWCYXR5OiB7c3VtfSBQTE48L2gxPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcHJpY2U6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5hZGRQcm9kdWN0KHRoaXMuc3RhdGUpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICB9O1xuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hendhXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17bmFtZX0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpY2VcIiBwbGFjZWhvbGRlcj1cImNlbmFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtwcmljZX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RG9kYWogcHJvZHVrdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGlzdCA9ICh7IHByb2R1Y3RzLCByZW1vdmVQcm9kdWN0IH0pID0+IChcbiAgPHVsPlxuICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgIDxsaSBrZXk9e3Byb2R1Y3QubmFtZX0+XG4gICAgICAgIHtwcm9kdWN0Lm5hbWV9IC0ge3Byb2R1Y3QucHJpY2V9IFBMTlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZVByb2R1Y3QocHJvZHVjdCl9PlVzdcWEPC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgICkpfVxuICA8L3VsPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsIi8vIFcgdHltIHBsaWt1IG5hbGXFvHkgd3lrb25hxIcgY29ubmVjdFxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xuLy8gcGFtacSZdGFqIG8gd3lla3Nwb3J0b3dhbml1IGtvbnRlbmVyYTpcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYXJ0KTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydFwiO1xuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IHtnZXRTdW19IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcbiAgICBzdW06IGdldFN1bShzdGF0ZS5wcm9kdWN0cylcblxuXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0KTtcbiIsIi8vIE1pZWpzY2UgbmEgc2VsZWt0b3J5OlxuLy8gc2VsZWN0UHJvZHVjdHMgLSBkbyB3eWJpZXJhbmlhL2ZpbHRyb3dhbmlhIHByb2R1a3TDs3dcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxuLy8gcGFtacSZdGFqIGFieSBqZSB3eWVrc3BvcnRvd2HEh1xuXG5leHBvcnQgY29uc3QgZ2V0U3VtID0gKHByb2R1Y3RzKSA9PiB7XG5cbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGNvbnRhY3QubmFtZTtcblxuICAgICAgICByZXR1cm4gZmlyc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjb250YWN0c1NlYXJjaCkgfHwgbGFzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvbnRhY3RzU2VhcmNoKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWx0ZXJlZENvbnRhY3RzID0gKGNvbnRhY3RzLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgY29udGFjdHNTZWFyY2ggPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gY29udGFjdHMuZmlsdGVyKChjb250YWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGNvbnRhY3QubmFtZTtcblxuICAgICAgICByZXR1cm4gZmlyc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjb250YWN0c1NlYXJjaCkgfHwgbGFzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvbnRhY3RzU2VhcmNoKTtcbiAgICB9KTtcbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMWRkZmY1NjE5MmJjMTI1ZjI0NVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJDYXJ0IiwiUHJvdmlkZXIiLCJzdG9yZSIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiRm9ybSIsIkxpc3QiLCJfcmVmIiwicHJvZHVjdHMiLCJzdW0iLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsIl9SZWFjdCRDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm5hbWUiLCJwcmljZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsIl90aGlzJHN0YXRlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJDb21wb25lbnQiLCJtYXAiLCJwcm9kdWN0Iiwib25DbGljayIsImNvbm5lY3QiLCJnZXRTdW0iLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZpbHRlciIsImVsZW1lbnQiLCJfY29udGFjdCRuYW1lIiwiY29udGFjdCIsImZpcnN0IiwibGFzdCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjb250YWN0c1NlYXJjaCIsImdldEZpbHRlcmVkQ29udGFjdHMiLCJjb250YWN0cyIsInRleHQiLCJfY29udGFjdCRuYW1lMiJdLCJzb3VyY2VSb290IjoiIn0=