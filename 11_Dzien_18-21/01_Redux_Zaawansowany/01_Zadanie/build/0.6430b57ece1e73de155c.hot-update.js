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


var fakeProducts = [{
  id: 1,
  name: "Pomidory"
}, {
  id: 2,
  name: "Przyprawa curry"
}, {
  id: 3,
  name: "Olej"
}, {
  id: 4,
  name: "Wołowina 500g"
}, {
  id: 5,
  name: "Ziemniaki"
}];
var SingleProduct = function SingleProduct(_ref) {
  var id = _ref.id,
    index = _ref.index,
    number = _ref.number,
    _onChange = _ref.onChange,
    onClose = _ref.onClose;
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), fakeProducts.map(function (product) {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("066ce077d8d5271a8d67")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQVEsZ0JBQ3RCakQsMERBQUE7SUFBUW9ELFFBQVEsRUFBRSxTQUFBQSxTQUFDdkMsQ0FBQztNQUFBLE9BQUt1QyxTQUFRLENBQUNuQixLQUFLLEVBQUVwQixDQUFDLENBQUNHLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUFDQSxLQUFLLEVBQUVEO0VBQUcsZ0JBQ2xFakIsMERBQUEsaUJBQVEsWUFBVSxDQUFTLEVBQzFCMEQsWUFBWSxDQUFDdkIsR0FBRyxDQUFDLFVBQUFrQixPQUFPO0lBQUEsb0JBQ3ZCckQsMERBQUE7TUFBUWtCLEtBQUssRUFBRW1DLE9BQU8sQ0FBQ3BDO0lBQUcsR0FBRW9DLE9BQU8sQ0FBQ1gsSUFBSSxDQUFVO0VBQUEsQ0FDbkQsQ0FBQyxDQUNLLENBQ0osZUFDWDFDLDBEQUFBO0lBQU1pRCxTQUFTLEVBQUM7RUFBdUIsZ0JBQUNqRCwwREFBQTtJQUFHaUQsU0FBUyxFQUFDO0VBQW9CLEVBQUssQ0FBTyxDQUNuRixDQUNBLENBQ0YsQ0FDRTtBQUVkLENBQUM7QUFFRC9DLGFBQWEsQ0FBQ3lELFNBQVMsR0FBRztFQUN4QjFDLEVBQUUsRUFBRXdDLHFFQUEyQjtFQUMvQnhCLEtBQUssRUFBRXdCLHFFQUEyQjtFQUNsQ0gsTUFBTSxFQUFFRyxxRUFBMkI7RUFDbkNMLFFBQVEsRUFBRUssbUVBQXlCO0VBQ25DRixPQUFPLEVBQUVFLG1FQUF5Qkc7QUFDcEMsQ0FBQztBQUdELGlFQUFlMUQsYUFBYTs7Ozs7Ozs7VUMvQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL0FkZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuL1NpbmdsZVByb2R1Y3RcIjtcclxuXHJcblxyXG5jbGFzcyBBZGRSZWNpcGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBwcm9kdWN0czogW3trZXk6IDB9XSxcclxuICAgICAgbGFzdEtleTogMFxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBzdGF0ZSA9IHtcclxuICAvLyAgIG5hbWU6IFwiXCIsXHJcbiAgLy8gICBwcm9kdWN0czogW3trZXk6IDB9XSxcclxuICAvLyAgIGxhc3RLZXk6IDBcclxuICAvLyB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIHRoaXMucHJvcHMub25TYXZlUmVjaXBlKHRoaXMuc3RhdGUpXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHtsYXN0S2V5LCBwcm9kdWN0c30pID0+ICh7XHJcbiAgICAgIHByb2R1Y3RzOiBbLi4ucHJvZHVjdHMsIHtrZXk6IGxhc3RLZXkgKyAxfV0sXHJcbiAgICAgIGxhc3RLZXk6IGxhc3RLZXkgKyAxXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUHJvZHVjdENob29zZSA9IChpbmRleCwgaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4LCBpZCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKCh7cHJvZHVjdHN9KSA9PiAoe1xyXG4gICAgICBwcm9kdWN0czogcHJvZHVjdHMubWFwKGVsID0+IHtcclxuICAgICAgICByZXR1cm4gZWwua2V5ID09PSBpbmRleCA/IHsuLi5lbCwgaWR9IDogZWw7XHJcbiAgICAgIH0pXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUHJvZHVjdERlbGV0ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcclxuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLmZpbHRlcigoZWwsIGkpID0+IGluZGV4ICE9PSBpKVxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RG9kYWogcHJ6ZXBpczwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmF6d2EgcHJ6ZXBpc3U8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYXp3YSBwcnplcGlzdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+T3BpczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NcIlxyXG4gICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NcIlxyXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9waXMgcHJ6ZXBpc3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy00XCI+TGlzdGEgcHJvZHVrdMOzdzwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8U2luZ2xlUHJvZHVjdFxyXG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC5rZXl9XHJcbiAgICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWQgPyBwcm9kdWN0LmlkIDogXCJcIn1cclxuICAgICAgICAgICAgICBpbmRleD17cHJvZHVjdC5rZXl9XHJcbiAgICAgICAgICAgICAgbnVtYmVyPXtpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RDaG9vc2V9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVQcm9kdWN0RGVsZXRlfS8+XHJcbiAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGRQcm9kdWN0fT5cclxuICAgICAgICAgICAgICAgIERvZGFqIHByb2R1a3QgZG8gcHJ6ZXBpc3VcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpbmtcIj5Eb2RhaiBwcnplcGlzPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFJlY2lwZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNvbnN0IGZha2VQcm9kdWN0cyA9IFtcclxuICB7aWQ6IDEsIG5hbWU6IFwiUG9taWRvcnlcIn0sXHJcbiAge2lkOiAyLCBuYW1lOiBcIlByenlwcmF3YSBjdXJyeVwifSxcclxuICB7aWQ6IDMsIG5hbWU6IFwiT2xlalwifSxcclxuICB7aWQ6IDQsIG5hbWU6IFwiV2/Fgm93aW5hIDUwMGdcIn0sXHJcbiAge2lkOiA1LCBuYW1lOiBcIlppZW1uaWFraVwifVxyXG5dO1xyXG5cclxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICh7aWQsIGluZGV4LCBudW1iZXIsIG9uQ2hhbmdlLCBvbkNsb3NlfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj5cclxuICAgICAgICA8cD5Qcm9kdWt0IHtudW1iZXIgKyAxfTwvcD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBvbkNsb3NlKGluZGV4KX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGluZGV4LCBlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zha2VQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblNpbmdsZVByb2R1Y3QucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBudW1iZXI6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNjZjZTA3N2Q4ZDUyNzFhOGQ2N1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlNpbmdsZVByb2R1Y3QiLCJBZGRSZWNpcGUiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJvblNhdmVSZWNpcGUiLCJoYW5kbGVBZGRQcm9kdWN0IiwiX3JlZiIsImxhc3RLZXkiLCJwcm9kdWN0cyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImtleSIsImhhbmRsZVByb2R1Y3RDaG9vc2UiLCJpbmRleCIsIl9yZWYyIiwibWFwIiwiZWwiLCJfb2JqZWN0U3ByZWFkIiwiaGFuZGxlUHJvZHVjdERlbGV0ZSIsIl9yZWYzIiwiZmlsdGVyIiwiaSIsIm5hbWUiLCJfY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJfdGhpczIiLCJjcmVhdGVFbGVtZW50IiwiYXV0b0NvbXBsZXRlIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInByb2R1Y3QiLCJudW1iZXIiLCJvbkNsb3NlIiwib25DbGljayIsIlByb3BUeXBlcyIsImZha2VQcm9kdWN0cyIsInByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJmdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==