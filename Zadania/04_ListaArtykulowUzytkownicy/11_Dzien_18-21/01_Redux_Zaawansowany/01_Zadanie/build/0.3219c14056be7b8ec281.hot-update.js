"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(103);
/* harmony import */ var _Products_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(104);
/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(105);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(106);










var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/products-add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products_Add__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/recipes:add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107);
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
  function AddRecipe() {
    var _this;
    _classCallCheck(this, AddRecipe);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      name: "",
      products: [{
        key: 0
      }],
      lastKey: 0
    };
    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
    };
    _this.handleSubmit = function (e) {
      e.preventDefault();
      console.log(_this.state);
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

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
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
/******/ 	__webpack_require__.h = () => ("99de4109404857f0ce7e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMjE5YzE0MDU2YmU3YjhlYzI4MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSTtBQUN3QztBQUNqQztBQUNIO0FBQ047QUFDUztBQUNHO0FBQ0w7QUFDRztBQUV0QyxJQUFNYSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQTtFQUFBLG9CQUNOYiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ00saURBQVE7SUFBQ0MsS0FBSyxFQUFFQSxvREFBS0E7RUFBQyxnQkFDbkJQLDBEQUFBLENBQUNFLDJEQUFhLHFCQUNWRiwwREFBQSxDQUFDQywrQ0FBTSxxQkFDSEQsMERBQUEsQ0FBQ0sscURBQU0scUJBQ0hMLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNhLElBQUksRUFBQyxlQUFlO0lBQUNDLE9BQU8sZUFBRWpCLDBEQUFBLENBQUNVLHFEQUFVO0VBQUksRUFBRyxlQUN2RFYsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2EsSUFBSSxFQUFDLFdBQVc7SUFBQ0MsT0FBTyxlQUFFakIsMERBQUEsQ0FBQ1MsaURBQVc7RUFBSSxFQUFHLGVBQ3BEVCwwREFBQSxDQUFDRyxvREFBSztJQUFDYSxJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUVqQiwwREFBQSxDQUFDVyxnREFBVTtFQUFJLEVBQUcsZUFDbERYLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNhLElBQUksRUFBQyxjQUFjO0lBQUNDLE9BQU8sZUFBRWpCLDBEQUFBLENBQUNZLG9EQUFTO0VBQUksRUFBRyxDQUNoRCxDQUNKLENBQ0csQ0FFVCxDQUNaO0FBQUEsQ0FDTjtBQUVELGlFQUFlQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qm9CO0FBQ0s7QUFBQSxJQUd0Q0QsU0FBUywwQkFBQVEsVUFBQTtFQUFBQyxTQUFBLENBQUFULFNBQUEsRUFBQVEsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFB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LE1BQU0sQ0FBQ0UsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUFDQSxLQUFLLEVBQUVEO0VBQUcsZ0JBQ2xFN0MsMERBQUEsaUJBQVEsWUFBVSxDQUFTLEVBQzFCOEUsWUFBWSxDQUFDckIsR0FBRyxDQUFDLFVBQUFnQixPQUFPO0lBQUEsb0JBQ3ZCekUsMERBQUE7TUFBUThDLEtBQUssRUFBRTJCLE9BQU8sQ0FBQzVCO0lBQUcsR0FBRTRCLE9BQU8sQ0FBQ3JDLElBQUksQ0FBVTtFQUFBLENBQ25ELENBQUMsQ0FDSyxDQUNKLGVBQ1hwQywwREFBQTtJQUFNcUUsU0FBUyxFQUFDO0VBQXVCLGdCQUFDckUsMERBQUE7SUFBR3FFLFNBQVMsRUFBQztFQUFvQixFQUFLLENBQU8sQ0FDbkYsQ0FDQSxDQUNGLENBQ0U7QUFFZCxDQUFDO0FBRURsRCxhQUFhLENBQUM0RCxTQUFTLEdBQUc7RUFDeEJsQyxFQUFFLEVBQUVnQyxxRUFBMkI7RUFDL0J0QixLQUFLLEVBQUVzQixxRUFBMkI7RUFDbENILE1BQU0sRUFBRUcscUVBQTJCO0VBQ25DTCxRQUFRLEVBQUVLLG1FQUF5QjtFQUNuQ0YsT0FBTyxFQUFFRSxtRUFBeUJHO0FBQ3BDLENBQUM7QUFHRCxpRUFBZTdELGFBQWE7Ozs7Ozs7O1VDOUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvQWRkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9TaW5nbGVQcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlciwgUm91dGVzfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCJcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi9QYW5lbFwiO1xuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuL1Byb2R1Y3RzXCI7XG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0cy9BZGRcIjtcbmltcG9ydCBBbGxSZWNpcGVzIGZyb20gXCIuL1JlY2lwZXNcIjtcbmltcG9ydCBBZGRSZWNpcGUgZnJvbSBcIi4vUmVjaXBlcy9BZGRcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IChcbiAgICA8PlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy1hZGRcIiBlbGVtZW50PXs8QWRkUHJvZHVjdCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCIgZWxlbWVudD17PEFsbFByb2R1Y3RzIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlc1wiIGVsZW1lbnQ9ezxBbGxSZWNpcGVzIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlczphZGRcIiBlbGVtZW50PXs8QWRkUmVjaXBlIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgIHsvKjxQYW5lbCAvPiovfVxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuL1NpbmdsZVByb2R1Y3RcIjtcblxuXG5jbGFzcyBBZGRSZWNpcGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHByb2R1Y3RzOiBbe2tleTogMH1dLFxuICAgIGxhc3RLZXk6IDBcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICB9O1xuXG4gIGhhbmRsZUFkZFByb2R1Y3QgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe2xhc3RLZXksIHByb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBbLi4ucHJvZHVjdHMsIHtrZXk6IGxhc3RLZXkgKyAxfV0sXG4gICAgICBsYXN0S2V5OiBsYXN0S2V5ICsgMVxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVQcm9kdWN0Q2hvb3NlID0gKGluZGV4LCBpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGluZGV4LCBpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoZWwgPT4ge1xuICAgICAgICByZXR1cm4gZWwua2V5ID09PSBpbmRleCA/IHsuLi5lbCwgaWR9IDogZWw7XG4gICAgICB9KVxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVQcm9kdWN0RGVsZXRlID0gKGluZGV4KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5maWx0ZXIoKGVsLCBpKSA9PiBpbmRleCAhPT0gaSlcbiAgICB9KSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2RhaiBwcnplcGlzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5OYXp3YSBwcnplcGlzdTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendhIHByemVwaXN1XCJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5PcGlzPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BpcyBwcnplcGlzdVwiXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy00XCI+TGlzdGEgcHJvZHVrdMOzdzwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUucHJvZHVjdHMubWFwKChwcm9kdWN0LCBpKSA9PiAoXG4gICAgICAgICAgICA8U2luZ2xlUHJvZHVjdFxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3Qua2V5fVxuICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZCA/IHByb2R1Y3QuaWQgOiBcIlwifVxuICAgICAgICAgICAgICBpbmRleD17cHJvZHVjdC5rZXl9XG4gICAgICAgICAgICAgIG51bWJlcj17aX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdENob29zZX1cbiAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVQcm9kdWN0RGVsZXRlfS8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFByb2R1Y3R9PlxuICAgICAgICAgICAgICAgIERvZGFqIHByb2R1a3QgZG8gcHJ6ZXBpc3VcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlua1wiPkRvZGFqIHByemVwaXM8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRSZWNpcGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jb25zdCBmYWtlUHJvZHVjdHMgPSBbXG4gIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcbiAge2lkOiAyLCBuYW1lOiBcIlByenlwcmF3YSBjdXJyeVwifSxcbiAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXG4gIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcbiAge2lkOiA1LCBuYW1lOiBcIlppZW1uaWFraVwifVxuXTtcblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICh7aWQsIGluZGV4LCBudW1iZXIsIG9uQ2hhbmdlLCBvbkNsb3NlfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtZGFya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICA8cD5Qcm9kdWt0IHtudW1iZXIgKyAxfTwvcD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gb25DbG9zZShpbmRleCl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShpbmRleCwgZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWR9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPld5YmllcnouLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2Zha2VQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5TaW5nbGVQcm9kdWN0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbnVtYmVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTlkZTQxMDk0MDQ4NTdmMGNlN2VcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJQcm92aWRlciIsInN0b3JlIiwiUGFuZWwiLCJBbGxQcm9kdWN0cyIsIkFkZFByb2R1Y3QiLCJBbGxSZWNpcGVzIiwiQWRkUmVjaXBlIiwiTWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInBhdGgiLCJlbGVtZW50IiwiQ29tcG9uZW50IiwiU2luZ2xlUHJvZHVjdCIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJuYW1lIiwicHJvZHVjdHMiLCJrZXkiLCJsYXN0S2V5IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUFkZFByb2R1Y3QiLCJfcmVmIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaGFuZGxlUHJvZHVjdENob29zZSIsImluZGV4IiwiX3JlZjIiLCJtYXAiLCJlbCIsIl9vYmplY3RTcHJlYWQiLCJoYW5kbGVQcm9kdWN0RGVsZXRlIiwiX3JlZjMiLCJmaWx0ZXIiLCJpIiwiX2NyZWF0ZUNsYXNzIiwicmVuZGVyIiwiX3RoaXMyIiwiYXV0b0NvbXBsZXRlIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInByb2R1Y3QiLCJudW1iZXIiLCJvbkNsb3NlIiwib25DbGljayIsIlByb3BUeXBlcyIsImZha2VQcm9kdWN0cyIsInByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJmdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==