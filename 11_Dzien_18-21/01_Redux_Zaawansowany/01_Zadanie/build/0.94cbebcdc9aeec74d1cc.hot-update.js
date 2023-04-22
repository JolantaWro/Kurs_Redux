"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31);
/* harmony import */ var _containers_Products_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var _containers_Products_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);
/* harmony import */ var _containers_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(117);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(121);
/* harmony import */ var _containers_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(122);
/* harmony import */ var _containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(101);











var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Home__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Products__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Add__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 32:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
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
      _this.props.onRecipeAdd(_this.state);
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

/***/ 102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);


var AllRecipes = function AllRecipes(_ref) {
  var allRecipes = _ref.allRecipes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "Wszystkie przepisy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    iconName: "folder",
    path: "recipes",
    listElements: allRecipes,
    heading: false,
    footer: false
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllRecipes);

/***/ }),

/***/ 122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _redux_actions_recipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(108);




var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onRecipeAdd: function onRecipeAdd(value) {
      return dispatch((0,_redux_actions_recipes__WEBPACK_IMPORTED_MODULE_3__.addRecipe)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(null, mapDispatchToProps)(_components_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _components_Recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(102);



var mapStateToProps = function mapStateToProps(state) {
  return {
    allRecipes: state.recipes
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Recipes__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d7fd0bcd55068ffd239c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQUEsSUFBakIrQixVQUFVLEdBQUEvQixJQUFBLENBQVYrQixVQUFVO0VBRTlCLG9CQUNFekUsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBO0lBQUlnRSxTQUFTLEVBQUM7RUFBTyxHQUFDLG9CQUFrQixDQUFLLGVBQzdDaEUsMERBQUEsQ0FBQ3dFLDhDQUFLO0lBQUNFLFFBQVEsRUFBRSxRQUFTO0lBQ25CekQsSUFBSSxFQUFFLFNBQVU7SUFDaEIwRCxZQUFZLEVBQUVGLFVBQVc7SUFDekJHLE9BQU8sRUFBRSxLQUFNO0lBQ2ZDLE1BQU0sRUFBRTtFQUFNLEVBQ25CLENBQ0Q7QUFFUCxDQUFDO0FBRUQsaUVBQWVqRSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJXO0FBQ1Y7QUFDMkI7QUFDQztBQUV0RCxJQUFNb0Usa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcEN6QyxXQUFXLEVBQUUsU0FBQUEsWUFBQ04sS0FBSztNQUFBLE9BQUsrQyxRQUFRLENBQUNGLGlFQUFTLENBQUM3QyxLQUFLLENBQUMsQ0FBQztJQUFBO0VBQ3RELENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWU0QyxvREFBTyxDQUFDLElBQUksRUFBRUUsa0JBQWtCLENBQUMsQ0FBQ3JFLCtEQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1RqQztBQUNVO0FBQ2M7QUFFbEQsSUFBTXVFLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBRzNDLEtBQUs7RUFBQSxPQUFLO0lBQzlCa0MsVUFBVSxFQUFFbEMsS0FBSyxDQUFDNEM7RUFDdEIsQ0FBQztBQUFBLENBQUM7QUFHRixpRUFBZUwsb0RBQU8sQ0FBQ0ksZUFBZSxDQUFDLENBQUN0RSwyREFBVSxDQUFDOzs7Ozs7OztVQ1RuRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvQWRkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1JlY2lwZXMvQWRkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUmVjaXBlcy9SZWNpcGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi4vY29udGFpbmVycy9Qcm9kdWN0cy9Qcm9kdWN0c1wiO1xuaW1wb3J0IEFkZFByb2R1Y3QgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvQWRkXCI7XG5cbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3RcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvSG9tZVwiO1xuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi4vY29udGFpbmVycy9SZWNpcGVzL0FkZFwiO1xuaW1wb3J0IEFsbFJlY2lwZXMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUmVjaXBlcy9SZWNpcGVzXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiIGVsZW1lbnQ9ezxBbGxQcm9kdWN0cyAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzLzppZFwiIGVsZW1lbnQ9ezxTaW5nbGVQcm9kdWN0Lz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy9hZGRcIiBlbGVtZW50PXs8QWRkUHJvZHVjdCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXMvYWRkXCIgZWxlbWVudD17PEFkZFJlY2lwZSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXNcIiBlbGVtZW50PXs8QWxsUmVjaXBlcyAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4vU2luZ2xlUHJvZHVjdFwiO1xuXG5cbmNsYXNzIEFkZFJlY2lwZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcHJvZHVjdHM6IFt7a2V5OiAwfV0sXG4gICAgICBsYXN0S2V5OiAwXG4gICAgfVxuICB9XG4gIC8vIHN0YXRlID0ge1xuICAvLyAgIG5hbWU6IFwiXCIsXG4gIC8vICAgcHJvZHVjdHM6IFt7a2V5OiAwfV0sXG4gIC8vICAgbGFzdEtleTogMFxuICAvLyB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5wcm9wcy5vblJlY2lwZUFkZCh0aGlzLnN0YXRlKVxuICB9O1xuXG4gIGhhbmRsZUFkZFByb2R1Y3QgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe2xhc3RLZXksIHByb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBbLi4ucHJvZHVjdHMsIHtrZXk6IGxhc3RLZXkgKyAxfV0sXG4gICAgICBsYXN0S2V5OiBsYXN0S2V5ICsgMVxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVQcm9kdWN0Q2hvb3NlID0gKGluZGV4LCBpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGluZGV4LCBpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoZWwgPT4ge1xuICAgICAgICByZXR1cm4gZWwua2V5ID09PSBpbmRleCA/IHsuLi5lbCwgaWR9IDogZWw7XG4gICAgICB9KVxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVQcm9kdWN0RGVsZXRlID0gKGluZGV4KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5maWx0ZXIoKGVsLCBpKSA9PiBpbmRleCAhPT0gaSlcbiAgICB9KSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2RhaiBwcnplcGlzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5OYXp3YSBwcnplcGlzdTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendhIHByemVwaXN1XCJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5PcGlzPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BpcyBwcnplcGlzdVwiXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy00XCI+TGlzdGEgcHJvZHVrdMOzdzwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUucHJvZHVjdHMubWFwKChwcm9kdWN0LCBpKSA9PiAoXG4gICAgICAgICAgICA8U2luZ2xlUHJvZHVjdFxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3Qua2V5fVxuICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZCA/IHByb2R1Y3QuaWQgOiBcIlwifVxuICAgICAgICAgICAgICBpbmRleD17cHJvZHVjdC5rZXl9XG4gICAgICAgICAgICAgIG51bWJlcj17aX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdENob29zZX1cbiAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVQcm9kdWN0RGVsZXRlfS8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFByb2R1Y3R9PlxuICAgICAgICAgICAgICAgIERvZGFqIHByb2R1a3QgZG8gcHJ6ZXBpc3VcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlua1wiPkRvZGFqIHByemVwaXM8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRSZWNpcGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhbmVsIGZyb20gXCIuLi9QYW5lbFwiO1xuXG5jb25zdCBBbGxSZWNpcGVzID0gKHsgYWxsUmVjaXBlcyB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+V3N6eXN0a2llIHByemVwaXN5PC9oMT5cbiAgICAgIDxQYW5lbCBpY29uTmFtZT17XCJmb2xkZXJcIn1cbiAgICAgICAgICAgICBwYXRoPXtcInJlY2lwZXNcIn1cbiAgICAgICAgICAgICBsaXN0RWxlbWVudHM9e2FsbFJlY2lwZXN9XG4gICAgICAgICAgICAgaGVhZGluZz17ZmFsc2V9XG4gICAgICAgICAgICAgZm9vdGVyPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxSZWNpcGVzO1xuXG4iLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRSZWNpcGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUmVjaXBlcy9BZGRcIjtcbmltcG9ydCB7YWRkUmVjaXBlfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9yZWNpcGVzXCI7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgb25SZWNpcGVBZGQ6ICh2YWx1ZSkgPT4gZGlzcGF0Y2goYWRkUmVjaXBlKHZhbHVlKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkUmVjaXBlKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBBbGxSZWNpcGVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1JlY2lwZXNcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBhbGxSZWNpcGVzOiBzdGF0ZS5yZWNpcGVzXG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQWxsUmVjaXBlcyk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDdmZDBiY2Q1NTA2OGZmZDIzOWNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJBbGxQcm9kdWN0cyIsIkFkZFByb2R1Y3QiLCJTaW5nbGVQcm9kdWN0Iiwic3RvcmUiLCJQcm92aWRlciIsIkhvbWUiLCJBZGRSZWNpcGUiLCJBbGxSZWNpcGVzIiwiTWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImV4YWN0IiwicGF0aCIsImVsZW1lbnQiLCJDb21wb25lbnQiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJvblJlY2lwZUFkZCIsImhhbmRsZUFkZFByb2R1Y3QiLCJfcmVmIiwibGFzdEtleSIsInByb2R1Y3RzIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwia2V5IiwiaGFuZGxlUHJvZHVjdENob29zZSIsImluZGV4IiwiX3JlZjIiLCJtYXAiLCJlbCIsIl9vYmplY3RTcHJlYWQiLCJoYW5kbGVQcm9kdWN0RGVsZXRlIiwiX3JlZjMiLCJmaWx0ZXIiLCJpIiwibmFtZSIsIl9jcmVhdGVDbGFzcyIsInJlbmRlciIsIl90aGlzMiIsImF1dG9Db21wbGV0ZSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJwcm9kdWN0IiwibnVtYmVyIiwib25DbG9zZSIsIm9uQ2xpY2siLCJQYW5lbCIsImFsbFJlY2lwZXMiLCJpY29uTmFtZSIsImxpc3RFbGVtZW50cyIsImhlYWRpbmciLCJmb290ZXIiLCJjb25uZWN0IiwiYWRkUmVjaXBlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWNpcGVzIl0sInNvdXJjZVJvb3QiOiIifQ==