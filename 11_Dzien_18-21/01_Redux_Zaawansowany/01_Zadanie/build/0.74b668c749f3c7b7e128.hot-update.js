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
/******/ 	__webpack_require__.h = () => ("965b2b019541e9792b41")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NGI2NjhjNzQ5ZjNjN2I3ZTEyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQzZCO0FBQUEsSUFLOURHLFNBQVMsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixTQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosU0FBQTtFQUNiLFNBQUFBLFVBQVlLLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBUCxTQUFBO0lBQ2pCTSxLQUFBLEdBQUFILE1BQUEsQ0FBQUssSUFBQSxPQUFNSCxLQUFLO0lBT2I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUFBQyxLQUFBLENBRUFHLFlBQVksR0FBRyxVQUFBQyxDQUFDLEVBQUk7TUFDbEJKLEtBQUEsQ0FBS0ssUUFBUSxDQUFBQyxlQUFBLEtBQ1ZGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxFQUFFLEVBQUdKLENBQUMsQ0FBQ0csTUFBTSxDQUFDRSxLQUFLLEVBQzdCO0lBQ0osQ0FBQztJQUFBVCxLQUFBLENBRURVLFlBQVksR0FBRyxVQUFBTixDQUFDLEVBQUk7TUFDbEJBLENBQUMsQ0FBQ08sY0FBYyxFQUFFO01BQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsS0FBQSxDQUFLYyxLQUFLLENBQUM7TUFDdkJkLEtBQUEsQ0FBS0QsS0FBSyxDQUFDZ0IsV0FBVyxDQUFDZixLQUFBLENBQUtjLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQUFkLEtBQUEsQ0FFRGdCLGdCQUFnQixHQUFHLFlBQU07TUFDdkJoQixLQUFBLENBQUtLLFFBQVEsQ0FBQyxVQUFBWSxJQUFBO1FBQUEsSUFBRUMsT0FBTyxHQUFBRCxJQUFBLENBQVBDLE9BQU87VUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7UUFBQSxPQUFPO1VBQ3RDQSxRQUFRLEtBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FB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eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvQWRkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi8uLi9jb250YWluZXJzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3RcIjtcblxuXG5cblxuY2xhc3MgQWRkUmVjaXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwcm9kdWN0czogW3trZXk6IDB9XSxcbiAgICAgIGxhc3RLZXk6IDBcbiAgICB9XG4gIH1cbiAgLy8gc3RhdGUgPSB7XG4gIC8vICAgbmFtZTogXCJcIixcbiAgLy8gICBwcm9kdWN0czogW3trZXk6IDB9XSxcbiAgLy8gICBsYXN0S2V5OiAwXG4gIC8vIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnByb3BzLm9uUmVjaXBlQWRkKHRoaXMuc3RhdGUpXG4gIH07XG5cbiAgaGFuZGxlQWRkUHJvZHVjdCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKCh7bGFzdEtleSwgcHJvZHVjdHN9KSA9PiAoe1xuICAgICAgcHJvZHVjdHM6IFsuLi5wcm9kdWN0cywge2tleTogbGFzdEtleSArIDF9XSxcbiAgICAgIGxhc3RLZXk6IGxhc3RLZXkgKyAxXG4gICAgfSkpO1xuICB9O1xuXG4gIGhhbmRsZVByb2R1Y3RDaG9vc2UgPSAoaW5kZXgsIGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2coaW5kZXgsIGlkKTtcbiAgICB0aGlzLnNldFN0YXRlKCh7cHJvZHVjdHN9KSA9PiAoe1xuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLm1hcChlbCA9PiB7XG4gICAgICAgIHJldHVybiBlbC5rZXkgPT09IGluZGV4ID8gey4uLmVsLCBpZH0gOiBlbDtcbiAgICAgIH0pXG4gICAgfSkpO1xuICB9O1xuXG4gIGhhbmRsZVByb2R1Y3REZWxldGUgPSAoaW5kZXgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKCh7cHJvZHVjdHN9KSA9PiAoe1xuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLmZpbHRlcigoZWwsIGkpID0+IGluZGV4ICE9PSBpKVxuICAgIH0pKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvZGFqIHByemVwaXM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hendhIHByemVwaXN1PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF6d2EgcHJ6ZXBpc3VcIlxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk9waXM8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGlzIHByemVwaXN1XCJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTRcIj5MaXN0YSBwcm9kdWt0w7N3PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+IChcbiAgICAgICAgICAgIDxTaW5nbGVQcm9kdWN0XG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC5rZXl9XG4gICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkID8gcHJvZHVjdC5pZCA6IFwiXCJ9XG4gICAgICAgICAgICAgIGluZGV4PXtwcm9kdWN0LmtleX1cbiAgICAgICAgICAgICAgbnVtYmVyPXtpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0Q2hvb3NlfVxuICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZVByb2R1Y3REZWxldGV9Lz5cbiAgICAgICAgICApKX1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkUHJvZHVjdH0+XG4gICAgICAgICAgICAgICAgRG9kYWogcHJvZHVrdCBkbyBwcnplcGlzdVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rXCI+RG9kYWogcHJ6ZXBpczwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFJlY2lwZTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NjViMmIwMTk1NDFlOTc5MmI0MVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlNpbmdsZVByb2R1Y3QiLCJBZGRSZWNpcGUiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJvblJlY2lwZUFkZCIsImhhbmRsZUFkZFByb2R1Y3QiLCJfcmVmIiwibGFzdEtleSIsInByb2R1Y3RzIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwia2V5IiwiaGFuZGxlUHJvZHVjdENob29zZSIsImluZGV4IiwiX3JlZjIiLCJtYXAiLCJlbCIsIl9vYmplY3RTcHJlYWQiLCJoYW5kbGVQcm9kdWN0RGVsZXRlIiwiX3JlZjMiLCJmaWx0ZXIiLCJpIiwibmFtZSIsIl9jcmVhdGVDbGFzcyIsInJlbmRlciIsIl90aGlzMiIsImNyZWF0ZUVsZW1lbnQiLCJhdXRvQ29tcGxldGUiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYWxsUHJvZHVjdHMiLCJwcm9kdWN0IiwibnVtYmVyIiwib25DbG9zZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9