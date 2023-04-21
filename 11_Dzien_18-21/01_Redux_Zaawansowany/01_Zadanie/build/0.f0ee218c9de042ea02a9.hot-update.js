"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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


var AddRecipe = /*#__PURE__*/function (_Component) {
  _inherits(AddRecipe, _Component);
  var _super = _createSuper(AddRecipe);
  function AddRecipe(props) {
    var _this;
    _classCallCheck(this, AddRecipe);
    _this = _super.call(this, props);
    // state = {
    //   name: "",
    //   products: [{key: 0}],
    //   lastKey: 0
    // };
    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
    };
    _this.handleSubmit = function (e) {
      e.preventDefault();
      console.log(_this.state);
      _this.props.onSaveRecipe(_this.state);
    };
    _this.handleAddProduct = function () {
      _this.setState(function (_ref) {
        var lastKey = _ref.lastKey,
          products = _ref.products;
        return {
          products: [].concat(_toConsumableArray(products), [{
            key: lastKey + 1
          }]),
          lastKey: lastKey + 1
        };
      });
    };
    _this.handleProductChoose = function (index, id) {
      console.log(index, id);
      _this.setState(function (_ref2) {
        var products = _ref2.products;
        return {
          products: products.map(function (el) {
            return el.key === index ? _objectSpread(_objectSpread({}, el), {}, {
              id: id
            }) : el;
          })
        };
      });
    };
    _this.handleProductDelete = function (index) {
      _this.setState(function (_ref3) {
        var products = _ref3.products;
        return {
          products: products.filter(function (el, i) {
            return index !== i;
          })
        };
      });
    };
    _this.state = {
      name: "",
      products: [{
        key: 0
      }],
      lastKey: 0
    };
    return _this;
  }
  _createClass(AddRecipe, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        autoComplete: "off",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
        className: "title"
      }, "Dodaj przepis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Nazwa przepisu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Nazwa przepisu",
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "text",
        name: "desc",
        id: "desc",
        placeholder: "Opis przepisu",
        onChange: this.handleChange
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "subtitle is-4"
      }, "Lista produkt\xF3w"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, this.state.products.map(function (product, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SingleProduct__WEBPACK_IMPORTED_MODULE_1__["default"], {
          allProducts: _this2.props.allProducts,
          key: product.key,
          id: product.id ? product.id : "",
          index: product.key,
          number: i,
          onChange: _this2.handleProductChoose,
          onClose: _this2.handleProductDelete
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "button is-primary",
        onClick: this.handleAddProduct
      }, "Dodaj produkt do przepisu")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field is-grouped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "button is-link"
      }, "Dodaj przepis"))));
    }
  }]);
  return AddRecipe;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddRecipe);

/***/ }),

/***/ 108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



// const fakeProducts = [
//   {id: 1, name: "Pomidory"},
//   {id: 2, name: "Przyprawa curry"},
//   {id: 3, name: "Olej"},
//   {id: 4, name: "Wołowina 500g"},
//   {id: 5, name: "Ziemniaki"}
// ];

var SingleProduct = function SingleProduct(_ref) {
  var id = _ref.id,
    index = _ref.index,
    number = _ref.number,
    _onChange = _ref.onChange,
    onClose = _ref.onClose,
    allProducts = _ref.allProducts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", number + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "delete",
    onClick: function onClick() {
      return onClose(index);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "control has-icons-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: function onChange(e) {
      return _onChange(index, e.target.value);
    },
    value: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), allProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: product.id
    }, product.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  }))))));
};
SingleProduct.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  number: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ }),

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _redux_actions_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _components_Products_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(105);
/* harmony import */ var _components_Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(108);






var ProductsContainer = function ProductsContainer(_ref) {
  var allProducts = _ref.allProducts,
    onProductAdd = _ref.onProductAdd;
  var handleNewProduct = function handleNewProduct(value) {
    onProductAdd(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"], {
    allProducts: allProducts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Products_Add__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSaveProduct: handleNewProduct,
    allProducts: allProducts
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: state.products
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onProductAdd: function onProductAdd(value) {
      return dispatch((0,_redux_actions_products__WEBPACK_IMPORTED_MODULE_3__.addProduct)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(ProductsContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6430b57ece1e73de155c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDMUU7QUFFWCxDQUFDO0FBRUQsSUFBTWlCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR2hELEtBQUs7RUFBQSxPQUFLO0lBQzlCK0IsV0FBVyxFQUFFL0IsS0FBSyxDQUFDSztFQUN2QixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU00QyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ04sWUFBWSxFQUFFLFNBQUFBLGFBQUNqRCxLQUFLO01BQUEsT0FBS3VELFFBQVEsQ0FBQ1QsbUVBQVUsQ0FBQzlDLEtBQUssQ0FBQyxDQUFDO0lBQUE7RUFDeEQsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZTZDLG9EQUFPLENBQUNRLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsQ0FBQ04saUJBQWlCLENBQUM7Ozs7Ozs7O1VDN0I5RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9BZGQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Qcm9kdWN0c0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuL1NpbmdsZVByb2R1Y3RcIjtcclxuXHJcblxyXG5jbGFzcyBBZGRSZWNpcGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBwcm9kdWN0czogW3trZXk6IDB9XSxcclxuICAgICAgbGFzdEtleTogMFxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBzdGF0ZSA9IHtcclxuICAvLyAgIG5hbWU6IFwiXCIsXHJcbiAgLy8gICBwcm9kdWN0czogW3trZXk6IDB9XSxcclxuICAvLyAgIGxhc3RLZXk6IDBcclxuICAvLyB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIHRoaXMucHJvcHMub25TYXZlUmVjaXBlKHRoaXMuc3RhdGUpXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHtsYXN0S2V5LCBwcm9kdWN0c30pID0+ICh7XHJcbiAgICAgIHByb2R1Y3RzOiBbLi4ucHJvZHVjdHMsIHtrZXk6IGxhc3RLZXkgKyAxfV0sXHJcbiAgICAgIGxhc3RLZXk6IGxhc3RLZXkgKyAxXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUHJvZHVjdENob29zZSA9IChpbmRleCwgaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4LCBpZCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKCh7cHJvZHVjdHN9KSA9PiAoe1xyXG4gICAgICBwcm9kdWN0czogcHJvZHVjdHMubWFwKGVsID0+IHtcclxuICAgICAgICByZXR1cm4gZWwua2V5ID09PSBpbmRleCA/IHsuLi5lbCwgaWR9IDogZWw7XHJcbiAgICAgIH0pXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUHJvZHVjdERlbGV0ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcclxuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLmZpbHRlcigoZWwsIGkpID0+IGluZGV4ICE9PSBpKVxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RG9kYWogcHJ6ZXBpczwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmF6d2EgcHJ6ZXBpc3U8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYXp3YSBwcnplcGlzdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+T3BpczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NcIlxyXG4gICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NcIlxyXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9waXMgcHJ6ZXBpc3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy00XCI+TGlzdGEgcHJvZHVrdMOzdzwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8U2luZ2xlUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgYWxsUHJvZHVjdHM9e3RoaXMucHJvcHMuYWxsUHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3Qua2V5fVxyXG4gICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkID8gcHJvZHVjdC5pZCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e3Byb2R1Y3Qua2V5fVxyXG4gICAgICAgICAgICAgIG51bWJlcj17aX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0Q2hvb3NlfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlUHJvZHVjdERlbGV0ZX0vPlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgICBEb2RhaiBwcm9kdWt0IGRvIHByemVwaXN1XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rXCI+RG9kYWogcHJ6ZXBpczwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRSZWNpcGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG4vLyBjb25zdCBmYWtlUHJvZHVjdHMgPSBbXHJcbi8vICAge2lkOiAxLCBuYW1lOiBcIlBvbWlkb3J5XCJ9LFxyXG4vLyAgIHtpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIn0sXHJcbi8vICAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXHJcbi8vICAge2lkOiA0LCBuYW1lOiBcIldvxYJvd2luYSA1MDBnXCJ9LFxyXG4vLyAgIHtpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIn1cclxuLy8gXTtcclxuXHJcbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoe2lkLCBpbmRleCwgbnVtYmVyLCBvbkNoYW5nZSwgb25DbG9zZSAsIGFsbFByb2R1Y3RzfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj5cclxuICAgICAgICA8cD5Qcm9kdWt0IHtudW1iZXIgKyAxfTwvcD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBvbkNsb3NlKGluZGV4KX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGluZGV4LCBlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge2FsbFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuU2luZ2xlUHJvZHVjdC5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIG51bWJlcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2FkZFByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RzXCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzL0FkZFwiO1xyXG5pbXBvcnQgU2luZ2xlUHJvZHVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWNpcGVzL1NpbmdsZVByb2R1Y3RcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RzQ29udGFpbmVyID0gKHthbGxQcm9kdWN0cywgb25Qcm9kdWN0QWRkIH0pID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZU5ld1Byb2R1Y3QgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBvblByb2R1Y3RBZGQodmFsdWUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEFsbFByb2R1Y3RzIGFsbFByb2R1Y3RzPXthbGxQcm9kdWN0c30gLz5cclxuICAgICAgICAgICAgPEFkZFByb2R1Y3Qgb25TYXZlUHJvZHVjdD17aGFuZGxlTmV3UHJvZHVjdH0gYWxsUHJvZHVjdHM9e2FsbFByb2R1Y3RzfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBhbGxQcm9kdWN0czogc3RhdGUucHJvZHVjdHNcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgb25Qcm9kdWN0QWRkOiAodmFsdWUpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QodmFsdWUpKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2R1Y3RzQ29udGFpbmVyKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjQzMGI1N2VjZTFlNzNkZTE1NWNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTaW5nbGVQcm9kdWN0IiwiQWRkUmVjaXBlIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwib25TYXZlUmVjaXBlIiwiaGFuZGxlQWRkUHJvZHVjdCIsIl9yZWYiLCJsYXN0S2V5IiwicHJvZHVjdHMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJrZXkiLCJoYW5kbGVQcm9kdWN0Q2hvb3NlIiwiaW5kZXgiLCJfcmVmMiIsIm1hcCIsImVsIiwiX29iamVjdFNwcmVhZCIsImhhbmRsZVByb2R1Y3REZWxldGUiLCJfcmVmMyIsImZpbHRlciIsImkiLCJuYW1lIiwiX2NyZWF0ZUNsYXNzIiwicmVuZGVyIiwiX3RoaXMyIiwiY3JlYXRlRWxlbWVudCIsImF1dG9Db21wbGV0ZSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJwcm9kdWN0IiwiYWxsUHJvZHVjdHMiLCJudW1iZXIiLCJvbkNsb3NlIiwib25DbGljayIsIlByb3BUeXBlcyIsInByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiQWxsUHJvZHVjdHMiLCJjb25uZWN0IiwiYWRkUHJvZHVjdCIsIkFkZFByb2R1Y3QiLCJQcm9kdWN0c0NvbnRhaW5lciIsIm9uUHJvZHVjdEFkZCIsImhhbmRsZU5ld1Byb2R1Y3QiLCJGcmFnbWVudCIsIm9uU2F2ZVByb2R1Y3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=