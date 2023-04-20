"use strict";
self["webpackHotUpdatees6_react"](0,{

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);




var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct;
  // const { filter } = useParams()
  // console.log(useParams().filter)
  // useEffect(()=>{
  //     filterProducts(Number(filter))
  // })

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/"
  }, "Wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/10"
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/50"
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/100"
  }, "do 100z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);





var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products,
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.getSum)(state.products.price)
  };
};

//values: state.routes

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    }
    // filterProducts : (filterValue) => dispatch(setFilter(filterValue)),
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 81:
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
  products.reducer(function (a, b) {
    return Number(a.price) + Number(b.price);
  });
};
var getFilteredContacts = function getFilteredContacts(contacts, text) {
  var contactsSearch = text.toLowerCase();
  return contacts.filter(function (contact) {
    var _contact$name = contact.name,
      first = _contact$name.first,
      last = _contact$name.last;
    return first.toLowerCase().includes(contactsSearch) || last.toLowerCase().includes(contactsSearch);
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("563c54516b4961b077bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyw2REFBYSxDQUFDcUMsT0FBTyxDQUFDLENBQUM7SUFBQTtJQUM1RDtFQUVKLENBQUM7QUFBQSxDQUFDOztBQUVGLGlFQUFlTCxvREFBTyxDQUFDRSxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLENBQUN4Qyx3REFBSSxDQUFDOzs7Ozs7Ozs7Ozs7QUMzQmpFO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1zQyxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSXBDLFFBQVEsRUFBSztFQUNoQ0EsUUFBUSxDQUFDeUMsT0FBTyxDQUFDLFVBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFLO0lBRXZCLE9BQU9DLE1BQU0sQ0FBQ0YsQ0FBQyxDQUFDaEIsS0FBSyxDQUFDLEdBQUdrQixNQUFNLENBQUNELENBQUMsQ0FBQ2pCLEtBQUssQ0FBQztFQUM1QyxDQUFDLENBQUM7QUFDTixDQUFDO0FBRU0sSUFBTW1CLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUlDLFFBQVEsRUFBRUMsSUFBSSxFQUFLO0VBQ25ELElBQU1DLGNBQWMsR0FBR0QsSUFBSSxDQUFDRSxXQUFXLEVBQUU7RUFFekMsT0FBT0gsUUFBUSxDQUFDSSxNQUFNLENBQUMsVUFBQ0MsT0FBTyxFQUFLO0lBQ2hDLElBQUFDLGFBQUEsR0FBd0JELE9BQU8sQ0FBQzFCLElBQUk7TUFBNUI0QixLQUFLLEdBQUFELGFBQUEsQ0FBTEMsS0FBSztNQUFFQyxJQUFJLEdBQUFGLGFBQUEsQ0FBSkUsSUFBSTtJQUVuQixPQUFPRCxLQUFLLENBQUNKLFdBQVcsRUFBRSxDQUFDTSxRQUFRLENBQUNQLGNBQWMsQ0FBQyxJQUFJTSxJQUFJLENBQUNMLFdBQVcsRUFBRSxDQUFDTSxRQUFRLENBQUNQLGNBQWMsQ0FBQztFQUN0RyxDQUFDLENBQUM7QUFDTixDQUFDOzs7Ozs7OztVQ3BCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQge0xpbmssIHVzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgQ2FydCA9ICh7IHByb2R1Y3RzLCBzdW0sIGFkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3QgfSkgPT4ge1xuICAgIC8vIGNvbnN0IHsgZmlsdGVyIH0gPSB1c2VQYXJhbXMoKVxuICAgIC8vIGNvbnNvbGUubG9nKHVzZVBhcmFtcygpLmZpbHRlcilcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgICAvLyAgICAgZmlsdGVyUHJvZHVjdHMoTnVtYmVyKGZpbHRlcikpXG4gICAgLy8gfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz17XCIvXCJ9PldzenlzdGtpZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMFwifT5kbyAxMHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtcIi81MFwifT5kbyA1MHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtcIi8xMDBcIn0+ZG8gMTAwesWCPC9MaW5rPjxiciAvPlxuXG4gICAgICAgICAgICA8Rm9ybSBhZGRQcm9kdWN0PXthZGRQcm9kdWN0fSAvPlxuICAgICAgICAgICAgPExpc3QgcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgICAgICAgPGgxPkRvIHphcMWCYXR5OiB7c3VtfSBQTE48L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHByaWNlOiBcIlwiLFxuICAgIH07XG4gIH1cblxuICBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuYWRkUHJvZHVjdCh0aGlzLnN0YXRlKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcblxuICB9O1xuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hendhXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17bmFtZX0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpY2VcIiBwbGFjZWhvbGRlcj1cImNlbmFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtwcmljZX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RG9kYWogcHJvZHVrdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsIi8vIFcgdHltIHBsaWt1IG5hbGXFvHkgd3lrb25hxIcgY29ubmVjdFxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xuLy8gcGFtacSZdGFqIG8gd3lla3Nwb3J0b3dhbml1IGtvbnRlbmVyYTpcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYXJ0KTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydFwiO1xuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IHtnZXRTdW19IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcbiAgICBzdW06IGdldFN1bShzdGF0ZS5wcm9kdWN0cy5wcmljZSlcblxuXG59KTtcblxuLy92YWx1ZXM6IHN0YXRlLnJvdXRlc1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGFkZFByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChhZGRQcm9kdWN0KHByb2R1Y3QpKSxcbiAgICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2gocmVtb3ZlUHJvZHVjdChwcm9kdWN0KSksXG4gICAgLy8gZmlsdGVyUHJvZHVjdHMgOiAoZmlsdGVyVmFsdWUpID0+IGRpc3BhdGNoKHNldEZpbHRlcihmaWx0ZXJWYWx1ZSkpLFxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7XG4iLCIvLyBNaWVqc2NlIG5hIHNlbGVrdG9yeTpcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XG4vLyBzdW0gLSBkbyBvYmxpY3phbmlhIHN1bXlcbi8vIHBhbWnEmXRhaiBhYnkgamUgd3lla3Nwb3J0b3dhxIdcblxuZXhwb3J0IGNvbnN0IGdldFN1bSA9IChwcm9kdWN0cykgPT4ge1xuICAgIHByb2R1Y3RzLnJlZHVjZXIoKGEsIGIpID0+IHtcblxuICAgICAgICByZXR1cm4gTnVtYmVyKGEucHJpY2UpICsgTnVtYmVyKGIucHJpY2UpXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZpbHRlcmVkQ29udGFjdHMgPSAoY29udGFjdHMsIHRleHQpID0+IHtcbiAgICBjb25zdCBjb250YWN0c1NlYXJjaCA9IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiBjb250YWN0cy5maWx0ZXIoKGNvbnRhY3QpID0+IHtcbiAgICAgICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gY29udGFjdC5uYW1lO1xuXG4gICAgICAgIHJldHVybiBmaXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvbnRhY3RzU2VhcmNoKSB8fCBsYXN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY29udGFjdHNTZWFyY2gpO1xuICAgIH0pO1xufTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU2M2M1NDUxNmI0OTYxYjA3N2JkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiRm9ybSIsIkxpc3QiLCJMaW5rIiwidXNlUGFyYW1zIiwiQ2FydCIsIl9yZWYiLCJwcm9kdWN0cyIsInN1bSIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiY3JlYXRlRWxlbWVudCIsInRvIiwiX1JlYWN0JENvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiX2RlZmluZVByb3BlcnR5IiwibmFtZSIsInByaWNlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwicmVuZGVyIiwiX3RoaXMkc3RhdGUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJnZXRTdW0iLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByb2R1Y3QiLCJyZWR1Y2VyIiwiYSIsImIiLCJOdW1iZXIiLCJnZXRGaWx0ZXJlZENvbnRhY3RzIiwiY29udGFjdHMiLCJ0ZXh0IiwiY29udGFjdHNTZWFyY2giLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsImNvbnRhY3QiLCJfY29udGFjdCRuYW1lIiwiZmlyc3QiLCJsYXN0IiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9