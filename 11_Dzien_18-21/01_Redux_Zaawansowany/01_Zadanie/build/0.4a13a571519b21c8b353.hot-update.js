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
        name: "desc",
        id: "desc",
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b385bfd5f78ee31f8270")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YTEzYTU3MTUxOWIyMWM4YjM1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQzZCO0FBQUEsSUFHOURHLFNBQVMsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixTQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosU0FBQTtFQUNiLFNBQUFBLFVBQVlLLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBUCxTQUFBO0lBQ2pCTSxLQUFBLEdBQUFILE1BQUEsQ0FBQUssSUFBQSxPQUFNSCxLQUFLO0lBU2I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUFBQyxLQUFBLENBRUFHLFlBQVksR0FBRyxVQUFBQyxDQUFDLEVBQUk7TUFDbEJKLEtBQUEsQ0FBS0ssUUFBUSxDQUFBQyxlQUFBLEtBQ1ZGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxFQUFFLEVBQUdKLENBQUMsQ0FBQ0csTUFBTSxDQUFDRSxLQUFLLEVBQzdCO0lBQ0osQ0FBQztJQUFBVCxLQUFBLENBRURVLFlBQVksR0FBRyxVQUFBTixDQUFDLEVBQUk7TUFDbEJBLENBQUMsQ0FBQ08sY0FBYyxFQUFFO01BQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsS0FBQSxDQUFLYyxLQUFLLENBQUM7TUFDdkJkLEtBQUEsQ0FBS0QsS0FBSyxDQUFDZ0IsV0FBVyxDQUFDZixLQUFBLENBQUtjLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQUFkLEtBQUEsQ0FFRGdCLGdCQUFnQixHQUFHLFlBQU07TUFDdkJoQixLQUFBLENBQUtLLFFBQVEsQ0FBQyxVQUFBWSxJQUFBO1FBQUEsSUFBRUMsT0FBTyxHQUFBRCxJQUFBLENBQVBDLE9BQU87VUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7UUFBQSxPQUFPO1VBQ3RDQSxRQUFRLEtBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBTUYsUUFBUSxJQUFFO1lBQUNHLEdBQUcsRUFBRUosT0FBTyxHQUFHO1VBQUMsQ0FBQyxFQUFDO1VBQzNDQSxPQUFPLEVBQUVBLE9BQU8sR0FBRztRQUNyQixDQUFDO01BQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBbEIsS0FBQSxDQUVEdUIsbUJBQW1CLEdBQUcsVUFBQ0MsS0FBSyxFQUFFaEIsRUFBRSxFQUFLO01BQ25DSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1csS0FBSyxFQUFFaEIsRUFBRSxDQUFDO01BQ3RCUixLQUFBLENBQUtLLFFBQVEsQ0FBQyxVQUFBb0IsS0FBQTtRQUFBLElBQUVOLFFBQVEsR0FBQU0sS0FBQSxDQUFSTixRQUFRO1FBQUEsT0FBTztVQUM3QkEsUUFBUSxFQUFFQSxRQUFRLENBQUNPLEdBQUcsQ0FBQyxVQUFBQyxFQUFFLEVBQUk7WUFDM0IsT0FBT0EsRUFBRSxDQUFDTCxHQUFHLEtBQUtFLEtBQUssR0FBQUksYUFBQSxDQUFBQSxhQUFBLEtBQU9ELEVBQUU7Y0FBRW5CLEVBQUUsRUFBRkE7WUFBRSxLQUFJbUIsRUFBRTtVQUM1QyxDQUFDO1FBQ0gsQ0FBQztNQUFBLENBQUMsQ0FBQztJQUNMLENBQUM7SUFBQTNCLEtBQUEsQ0FFRDZCLG1CQUFtQixHQUFHLFVBQUNMLEtBQUssRUFBSztNQUMvQnhCLEtBQUEsQ0FBS0ssUUFBUSxDQUFDLFVBQUF5QixLQUFBO1FBQUEsSUFBRVgsUUFBUSxHQUFBVyxLQUFBLENBQVJYLFFBQVE7UUFBQSxPQUFPO1VBQzdCQSxRQUFRLEVBQUVBLFFBQVEsQ0FBQ1ksTUFBTSxDQUFDLFVBQUNKLEVBQUUsRUFBRUssQ0FBQztZQUFBLE9BQUtSLEtBQUssS0FBS1EsQ0FBQztVQUFBO1FBQ2xELENBQUM7TUFBQSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBOUNDaEMsS0FBQSxDQUFLYyxLQUFLLEdBQUc7TUFDWG1CLElBQUksRUFBRSxFQUFFO01BQ1JkLFFBQVEsRUFBRSxDQUFDO1FBQUNHLEdBQUcsRUFBRTtNQUFDLENBQUMsQ0FBQztNQUNwQkosT0FBTyxFQUFFLENBQUM7TUFDVmdCLFdBQVcsRUFBRTtJQUVmLENBQUM7SUFBQSxPQUFBbEMsS0FBQTtFQUNIO0VBQUNtQyxZQUFBLENBQUF6QyxTQUFBO0lBQUE0QixHQUFBO0lBQUFiLEtBQUEsRUF5Q0QsU0FBQTJCLE9BQUEsRUFBUztNQUFBLElBQUFDLE1BQUE7TUFDUCxvQkFDRTlDLDBEQUFBO1FBQU1nRCxZQUFZLEVBQUMsS0FBSztRQUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDOUI7TUFBYSxnQkFDbkRuQiwwREFBQTtRQUFJa0QsU0FBUyxFQUFDO01BQU8sR0FBQyxlQUFhLENBQUssZUFDeENsRCwwREFBQTtRQUFLa0QsU0FBUyxFQUFDO01BQUssZ0JBQ2xCbEQsMERBQUE7UUFBS2tELFNBQVMsRUFBQztNQUFPLGdCQUNwQmxELDBEQUFBO1FBQU9rRCxTQUFTLEVBQUM7TUFBTyxHQUFDLGdCQUFjLENBQVEsZUFDL0NsRCwwREFBQTtRQUFLa0QsU0FBUyxFQUFDO01BQVMsZ0JBQ3RCbEQsMERBQUE7UUFBT2tELFNBQVMsRUFBQyxPQUFPO1FBQ2pCQyxJQUFJLEVBQUMsTUFBTTtRQUNYVCxJQUFJLEVBQUMsTUFBTTtRQUNYekIsRUFBRSxFQUFDLE1BQU07UUFDVG1DLFdBQVcsRUFBQyxnQkFBZ0I7UUFDNUJDLFFBQVEsRUFBRSxJQUFJLENBQUN6QztNQUFhLEVBQUUsQ0FDakMsQ0FDRixlQUVOWiwwREFBQTtRQUFLa0QsU0FBUyxFQUFDO01BQU8sZ0JBQ3BCbEQsMERBQUE7UUFBT2tELFNBQVMsRUFBQztNQUFPLEdBQUMsTUFBSSxDQUFRLGVBQ3JDbEQsMERBQUE7UUFBS2tELFNBQVMsRUFBQztNQUFTLGdCQUN0QmxELDBEQUFBO1FBQU9rRCxTQUFTLEVBQUMsT0FBTztRQUNqQkMsSUFBSSxFQUFDLE1BQU07UUFDWFQsSUFBSSxFQUFDLE1BQU07UUFDWHpCLEVBQUUsRUFBQyxNQUFNO1FBQ1RtQyxXQUFXLEVBQUMsZUFBZTtRQUMzQkMsUUFBUSxFQUFFLElBQUksQ0FBQ3pDO01BQWEsRUFBRSxDQUNqQyxDQUNGLENBQ0YsZUFHTlosMERBQUE7UUFBSWtELFNBQVMsRUFBQztNQUFlLEdBQUMsb0JBQWUsQ0FBSyxlQUNsRGxELDBEQUFBO1FBQUtrRCxTQUFTLEVBQUM7TUFBSyxHQUNqQixJQUFJLENBQUMxQyxLQUFLLENBQUM4QyxXQUFXLENBQUNuQixHQUFHLENBQUMsVUFBQ29CLE9BQU8sRUFBRWQsQ0FBQztRQUFBLG9CQUNyQ3pDLDBEQUFBLENBQUNFLDBFQUFhO1VBQ1o2QixHQUFHLEVBQUV3QixPQUFPLENBQUN4QixHQUFJO1VBQ2pCZCxFQUFFLEVBQUVzQyxPQUFPLENBQUN0QyxFQUFFLEdBQUdzQyxPQUFPLENBQUN0QyxFQUFFLEdBQUcsRUFBRztVQUNqQ2dCLEtBQUssRUFBRXNCLE9BQU8sQ0FBQ3hCLEdBQUk7VUFDbkJ5QixNQUFNLEVBQUVmLENBQUU7VUFDVlksUUFBUSxFQUFFUCxNQUFJLENBQUNkLG1CQUFvQjtVQUNuQ3lCLE9BQU8sRUFBRVgsTUFBSSxDQUFDUjtRQUFvQixFQUFFO01BQUEsQ0FDdkMsQ0FBQyxlQUVGdEMsMERBQUE7UUFBS2tELFNBQVMsRUFBQztNQUFPLGdCQUNwQmxELDBEQUFBO1FBQUtrRCxTQUFTLEVBQUM7TUFBUyxnQkFDdEJsRCwwREFBQTtRQUFHa0QsU0FBUyxFQUFDLG1CQUFtQjtRQUFDUSxPQUFPLEVBQUUsSUFBSSxDQUFDakM7TUFBaUIsR0FBQywyQkFFakUsQ0FBSSxDQUNBLENBQ0YsQ0FDRixlQUVOekIsMERBQUE7UUFBS2tELFNBQVMsRUFBQztNQUFrQixnQkFDL0JsRCwwREFBQTtRQUFLa0QsU0FBUyxFQUFDO01BQVMsZ0JBQ3RCbEQsMERBQUE7UUFBUWtELFNBQVMsRUFBQztNQUFnQixHQUFDLGVBQWEsQ0FBUyxDQUNyRCxDQUNGLENBQ0Q7SUFFWDtFQUFDO0VBQUEsT0FBQS9DLFNBQUE7QUFBQSxFQTlHcUJGLDRDQUFTO0FBaUhqQyxpRUFBZUUsU0FBUzs7Ozs7Ozs7VUNySHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL0FkZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2luZ2xlUHJvZHVjdCBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9Qcm9kdWN0cy9TaW5nbGVQcm9kdWN0XCI7XG5cblxuY2xhc3MgQWRkUmVjaXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwcm9kdWN0czogW3trZXk6IDB9XSxcbiAgICAgIGxhc3RLZXk6IDAsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcblxuICAgIH1cbiAgfVxuICAvLyBzdGF0ZSA9IHtcbiAgLy8gICBuYW1lOiBcIlwiLFxuICAvLyAgIHByb2R1Y3RzOiBbe2tleTogMH1dLFxuICAvLyAgIGxhc3RLZXk6IDBcbiAgLy8gfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMucHJvcHMub25SZWNpcGVBZGQodGhpcy5zdGF0ZSlcbiAgfTtcblxuICBoYW5kbGVBZGRQcm9kdWN0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHtsYXN0S2V5LCBwcm9kdWN0c30pID0+ICh7XG4gICAgICBwcm9kdWN0czogWy4uLnByb2R1Y3RzLCB7a2V5OiBsYXN0S2V5ICsgMX1dLFxuICAgICAgbGFzdEtleTogbGFzdEtleSArIDFcbiAgICB9KSk7XG4gIH07XG5cbiAgaGFuZGxlUHJvZHVjdENob29zZSA9IChpbmRleCwgaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCwgaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoKHtwcm9kdWN0c30pID0+ICh7XG4gICAgICBwcm9kdWN0czogcHJvZHVjdHMubWFwKGVsID0+IHtcbiAgICAgICAgcmV0dXJuIGVsLmtleSA9PT0gaW5kZXggPyB7Li4uZWwsIGlkfSA6IGVsO1xuICAgICAgfSlcbiAgICB9KSk7XG4gIH07XG5cbiAgaGFuZGxlUHJvZHVjdERlbGV0ZSA9IChpbmRleCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHtwcm9kdWN0c30pID0+ICh7XG4gICAgICBwcm9kdWN0czogcHJvZHVjdHMuZmlsdGVyKChlbCwgaSkgPT4gaW5kZXggIT09IGkpXG4gICAgfSkpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RG9kYWogcHJ6ZXBpczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmF6d2EgcHJ6ZXBpc3U8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYXp3YSBwcnplcGlzdVwiXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+T3BpczwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9waXMgcHJ6ZXBpc3VcIlxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtNFwiPkxpc3RhIHByb2R1a3TDs3c8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmFsbFByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4gKFxuICAgICAgICAgICAgPFNpbmdsZVByb2R1Y3RcbiAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmtleX1cbiAgICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWQgPyBwcm9kdWN0LmlkIDogXCJcIn1cbiAgICAgICAgICAgICAgaW5kZXg9e3Byb2R1Y3Qua2V5fVxuICAgICAgICAgICAgICBudW1iZXI9e2l9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RDaG9vc2V9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlUHJvZHVjdERlbGV0ZX0vPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGRQcm9kdWN0fT5cbiAgICAgICAgICAgICAgICBEb2RhaiBwcm9kdWt0IGRvIHByemVwaXN1XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpbmtcIj5Eb2RhaiBwcnplcGlzPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkUmVjaXBlOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIzODViZmQ1Zjc4ZWUzMWY4MjcwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2luZ2xlUHJvZHVjdCIsIkFkZFJlY2lwZSIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsIm9uUmVjaXBlQWRkIiwiaGFuZGxlQWRkUHJvZHVjdCIsIl9yZWYiLCJsYXN0S2V5IiwicHJvZHVjdHMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJrZXkiLCJoYW5kbGVQcm9kdWN0Q2hvb3NlIiwiaW5kZXgiLCJfcmVmMiIsIm1hcCIsImVsIiwiX29iamVjdFNwcmVhZCIsImhhbmRsZVByb2R1Y3REZWxldGUiLCJfcmVmMyIsImZpbHRlciIsImkiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJfY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJfdGhpczIiLCJjcmVhdGVFbGVtZW50IiwiYXV0b0NvbXBsZXRlIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImFsbFByb2R1Y3RzIiwicHJvZHVjdCIsIm51bWJlciIsIm9uQ2xvc2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==