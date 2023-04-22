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
    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
    };
    _this.handleSubmit = function (e) {
      e.preventDefault();
      console.log(_this.state);
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
        name: "description",
        id: "description",
        placeholder: "Opis przepisu",
        onChange: this.handleChange
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "subtitle is-4"
      }, "Lista produkt\xF3w"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, this.state.products.map(function (product, i) {
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
/******/ 	__webpack_require__.h = () => ("5ced16ac4413a75e4bde")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9BZGQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdFwiO1xuXG5cbmNsYXNzIEFkZFJlY2lwZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcHJvZHVjdHM6IFt7a2V5OiAwfV0sXG4gICAgICBsYXN0S2V5OiAwLFxuICAgICAgZGVzY3JpcHRpb246IFwiXCJcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuXG4gICAgdGhpcy5wcm9wcy5vblJlY2lwZUFkZCh0aGlzLnN0YXRlKTtcbiAgfTtcblxuICBoYW5kbGVBZGRQcm9kdWN0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHtsYXN0S2V5LCBwcm9kdWN0c30pID0+ICh7XG4gICAgICBwcm9kdWN0czogWy4uLnByb2R1Y3RzLCB7a2V5OiBsYXN0S2V5ICsgMX1dLFxuICAgICAgbGFzdEtleTogbGFzdEtleSArIDFcbiAgICB9KSk7XG4gIH07XG5cbiAgaGFuZGxlUHJvZHVjdENob29zZSA9IChpbmRleCwgaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCwgaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoKHtwcm9kdWN0c30pID0+ICh7XG4gICAgICBwcm9kdWN0czogcHJvZHVjdHMubWFwKGVsID0+IHtcbiAgICAgICAgcmV0dXJuIGVsLmtleSA9PT0gaW5kZXggPyB7Li4uZWwsIGlkfSA6IGVsO1xuICAgICAgfSlcbiAgICB9KSk7XG4gIH07XG5cbiAgaGFuZGxlUHJvZHVjdERlbGV0ZSA9IChpbmRleCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHtwcm9kdWN0c30pID0+ICh7XG4gICAgICBwcm9kdWN0czogcHJvZHVjdHMuZmlsdGVyKChlbCwgaSkgPT4gaW5kZXggIT09IGkpXG4gICAgfSkpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RG9kYWogcHJ6ZXBpczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmF6d2EgcHJ6ZXBpc3U8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYXp3YSBwcnplcGlzdVwiXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+T3BpczwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BpcyBwcnplcGlzdVwiXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy00XCI+TGlzdGEgcHJvZHVrdMOzdzwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUucHJvZHVjdHMubWFwKChwcm9kdWN0LCBpKSA9PiAoXG4gICAgICAgICAgICA8U2luZ2xlUHJvZHVjdFxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3Qua2V5fVxuICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZCA/IHByb2R1Y3QuaWQgOiBcIlwifVxuICAgICAgICAgICAgICBpbmRleD17cHJvZHVjdC5rZXl9XG4gICAgICAgICAgICAgIG51bWJlcj17aX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdENob29zZX1cbiAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVQcm9kdWN0RGVsZXRlfS8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFByb2R1Y3R9PlxuICAgICAgICAgICAgICAgIERvZGFqIHByb2R1a3QgZG8gcHJ6ZXBpc3VcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlua1wiPkRvZGFqIHByemVwaXM8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRSZWNpcGU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWNlZDE2YWM0NDEzYTc1ZTRiZGVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTaW5nbGVQcm9kdWN0IiwiQWRkUmVjaXBlIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwib25SZWNpcGVBZGQiLCJoYW5kbGVBZGRQcm9kdWN0IiwiX3JlZiIsImxhc3RLZXkiLCJwcm9kdWN0cyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImtleSIsImhhbmRsZVByb2R1Y3RDaG9vc2UiLCJpbmRleCIsIl9yZWYyIiwibWFwIiwiZWwiLCJfb2JqZWN0U3ByZWFkIiwiaGFuZGxlUHJvZHVjdERlbGV0ZSIsIl9yZWYzIiwiZmlsdGVyIiwiaSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIl9jcmVhdGVDbGFzcyIsInJlbmRlciIsIl90aGlzMiIsImNyZWF0ZUVsZW1lbnQiLCJhdXRvQ29tcGxldGUiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicHJvZHVjdCIsIm51bWJlciIsIm9uQ2xvc2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==