"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
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
      // this.props.onRecipeAdd({
      //   name: this.state.name,
      //   products: this.state.products,
      //   description: this.state.description})
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
      lastKey: 0,
      description: ""
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
        name: "description",
        id: "description",
        placeholder: "Opis przepisu",
        onChange: this.handleChange
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "subtitle is-4"
      }, "Lista produkt\xF3w"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, this.props.allProducts.map(function (product, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerRecipes": () => (/* binding */ reducerRecipes)
/* harmony export */ });
/* harmony import */ var _actions_recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function maxIdProduct(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var initialStateRecipes = [];
// const initialStateRecipes = [{
//     name: "",
//     description: "",
//     products: [],
//     lastKey: 0
// }]

var reducerRecipes = function reducerRecipes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateRecipes;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_recipes__WEBPACK_IMPORTED_MODULE_0__.ADD_RECIPE:
      var recipeId = maxIdProduct(state);
      return [].concat(_toConsumableArray(state), [_objectSpread({
        id: recipeId
      }, action.payload)]);
    // case REMOVE_PRODUCT:
    //     return state.filter(element => element.name !== action.payload.name);
    default:
      return state;
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9b9d7d53cc2cadbae6d5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0I7QUFFOUMsU0FBU3lELFlBQVlBLENBQUNDLEtBQUssRUFBRTtFQUN6QixJQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUNELEtBQUssRUFBRUUsT0FBTztJQUFBLE9BQUtDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUMvQyxFQUFFLEVBQUU2QyxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9FLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBRUEsSUFBTUssbUJBQW1CLEdBQUcsRUFBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQTJDO0VBQUEsSUFBdkM3QyxLQUFLLEdBQUE4QyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRUYsbUJBQW1CO0VBQUEsSUFBRUssTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQzdELFFBQVFDLE1BQU0sQ0FBQ3JCLElBQUk7SUFDZixLQUFLUSx3REFBVTtNQUNYLElBQU1jLFFBQVEsR0FBR2IsWUFBWSxDQUFDckMsS0FBSyxDQUFDO01BQ3BDLFVBQUFNLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV1AsS0FBSyxJQUFBYyxhQUFBO1FBQUlwQixFQUFFLEVBQUV3RDtNQUFRLEdBQUtELE1BQU0sQ0FBQ0UsT0FBTztJQUN2RDtJQUNBO0lBQ0E7TUFDSSxPQUFPbkQsS0FBSztFQUFBO0FBRXhCLENBQUM7Ozs7Ozs7O1VDekJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL0FkZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy9yZWNpcGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi8uLi9jb250YWluZXJzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3RcIjtcblxuXG5jbGFzcyBBZGRSZWNpcGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHByb2R1Y3RzOiBbe2tleTogMH1dLFxuICAgICAgbGFzdEtleTogMCxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiXG4gICAgfVxuICB9XG4gIC8vIHN0YXRlID0ge1xuICAvLyAgIG5hbWU6IFwiXCIsXG4gIC8vICAgcHJvZHVjdHM6IFt7a2V5OiAwfV0sXG4gIC8vICAgbGFzdEtleTogMFxuICAvLyB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgLy8gdGhpcy5wcm9wcy5vblJlY2lwZUFkZCh7XG4gICAgLy8gICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgLy8gICBwcm9kdWN0czogdGhpcy5zdGF0ZS5wcm9kdWN0cyxcbiAgICAvLyAgIGRlc2NyaXB0aW9uOiB0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSlcbiAgICB0aGlzLnByb3BzLm9uUmVjaXBlQWRkKHRoaXMuc3RhdGUpXG4gIH07XG5cbiAgaGFuZGxlQWRkUHJvZHVjdCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKCh7bGFzdEtleSwgcHJvZHVjdHN9KSA9PiAoe1xuICAgICAgcHJvZHVjdHM6IFsuLi5wcm9kdWN0cywge2tleTogbGFzdEtleSArIDF9XSxcbiAgICAgIGxhc3RLZXk6IGxhc3RLZXkgKyAxXG4gICAgfSkpO1xuICB9O1xuXG4gIGhhbmRsZVByb2R1Y3RDaG9vc2UgPSAoaW5kZXgsIGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2coaW5kZXgsIGlkKTtcbiAgICB0aGlzLnNldFN0YXRlKCh7cHJvZHVjdHN9KSA9PiAoe1xuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLm1hcChlbCA9PiB7XG4gICAgICAgIHJldHVybiBlbC5rZXkgPT09IGluZGV4ID8gey4uLmVsLCBpZH0gOiBlbDtcbiAgICAgIH0pXG4gICAgfSkpO1xuICB9O1xuXG4gIGhhbmRsZVByb2R1Y3REZWxldGUgPSAoaW5kZXgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKCh7cHJvZHVjdHN9KSA9PiAoe1xuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLmZpbHRlcigoZWwsIGkpID0+IGluZGV4ICE9PSBpKVxuICAgIH0pKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvZGFqIHByemVwaXM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hendhIHByemVwaXN1PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF6d2EgcHJ6ZXBpc3VcIlxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk9waXM8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9waXMgcHJ6ZXBpc3VcIlxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtNFwiPkxpc3RhIHByb2R1a3TDs3c8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmFsbFByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4gKFxuICAgICAgICAgICAgPFNpbmdsZVByb2R1Y3RcbiAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmtleX1cbiAgICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWQgPyBwcm9kdWN0LmlkIDogXCJcIn1cbiAgICAgICAgICAgICAgaW5kZXg9e3Byb2R1Y3Qua2V5fVxuICAgICAgICAgICAgICBudW1iZXI9e2l9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RDaG9vc2V9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlUHJvZHVjdERlbGV0ZX0vPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGRQcm9kdWN0fT5cbiAgICAgICAgICAgICAgICBEb2RhaiBwcm9kdWt0IGRvIHByemVwaXN1XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpbmtcIj5Eb2RhaiBwcnplcGlzPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkUmVjaXBlOyIsImltcG9ydCB7QUREX1JFQ0lQRX0gZnJvbSBcIi4uL2FjdGlvbnMvcmVjaXBlc1wiO1xuXG5mdW5jdGlvbiBtYXhJZFByb2R1Y3QoYXJyYXkpIHtcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXG4gICAgcmV0dXJuIG1heElkICsgMVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGVSZWNpcGVzID0gW11cbi8vIGNvbnN0IGluaXRpYWxTdGF0ZVJlY2lwZXMgPSBbe1xuLy8gICAgIG5hbWU6IFwiXCIsXG4vLyAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4vLyAgICAgcHJvZHVjdHM6IFtdLFxuLy8gICAgIGxhc3RLZXk6IDBcbi8vIH1dXG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUmVjaXBlcyA9IChzdGF0ZT0gaW5pdGlhbFN0YXRlUmVjaXBlcywgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9SRUNJUEU6XG4gICAgICAgICAgICBjb25zdCByZWNpcGVJZCA9IG1heElkUHJvZHVjdChzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHsgaWQ6IHJlY2lwZUlkLCAuLi5hY3Rpb24ucGF5bG9hZCwgfV1cbiAgICAgICAgLy8gY2FzZSBSRU1PVkVfUFJPRFVDVDpcbiAgICAgICAgLy8gICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLm5hbWUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjliOWQ3ZDUzY2MyY2FkYmFlNmQ1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2luZ2xlUHJvZHVjdCIsIkFkZFJlY2lwZSIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsIm9uUmVjaXBlQWRkIiwiaGFuZGxlQWRkUHJvZHVjdCIsIl9yZWYiLCJsYXN0S2V5IiwicHJvZHVjdHMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJrZXkiLCJoYW5kbGVQcm9kdWN0Q2hvb3NlIiwiaW5kZXgiLCJfcmVmMiIsIm1hcCIsImVsIiwiX29iamVjdFNwcmVhZCIsImhhbmRsZVByb2R1Y3REZWxldGUiLCJfcmVmMyIsImZpbHRlciIsImkiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJfY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJfdGhpczIiLCJjcmVhdGVFbGVtZW50IiwiYXV0b0NvbXBsZXRlIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImFsbFByb2R1Y3RzIiwicHJvZHVjdCIsIm51bWJlciIsIm9uQ2xvc2UiLCJvbkNsaWNrIiwiQUREX1JFQ0lQRSIsIm1heElkUHJvZHVjdCIsImFycmF5IiwibWF4SWQiLCJyZWR1Y2UiLCJlbGVtZW50IiwiTWF0aCIsIm1heCIsImluaXRpYWxTdGF0ZVJlY2lwZXMiLCJyZWR1Y2VyUmVjaXBlcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInJlY2lwZUlkIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=