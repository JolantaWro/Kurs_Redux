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
      _this.setState({
        name: "",
        products: [{
          key: 0
        }],
        lastKey: 0,
        desc: ""
      });
    };
    _this.handleAddProduct = function () {
      _this.setState(function (_ref) {
        var lastKey = _ref.lastKey,
          products = _ref.products;
        return {
          products: [].concat(_toConsumableArray(products), [{
            key: lastKey + 1
          }])
          // products: [...products, {key: lastKey + 1}],
          // lastKey: lastKey + 1
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
      // lastKey: 0,
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7a5068df4c63bd0c4add")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNEO0lBRVg7RUFBQztFQUFBLE9BQUFoRCxTQUFBO0FBQUEsRUFwSHFCRiw0Q0FBUztBQXVIakMsaUVBQWVFLFNBQVM7Ozs7Ozs7O1VDM0h4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9BZGQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdFwiO1xuXG5cbmNsYXNzIEFkZFJlY2lwZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcHJvZHVjdHM6IFt7a2V5OiAwfV0sXG4gICAgICAvLyBsYXN0S2V5OiAwLFxuICAgICAgZGVzY3JpcHRpb246IFwiXCJcbiAgICB9XG4gIH1cbiAgLy8gc3RhdGUgPSB7XG4gIC8vICAgbmFtZTogXCJcIixcbiAgLy8gICBwcm9kdWN0czogW3trZXk6IDB9XSxcbiAgLy8gICBsYXN0S2V5OiAwXG4gIC8vIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnByb3BzLm9uUmVjaXBlQWRkKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHByb2R1Y3RzOiBbe2tleTogMH1dLFxuICAgICAgbGFzdEtleTogMCxcbiAgICAgIGRlc2M6IFwiXCJcbiAgICB9KVxuICB9O1xuXG4gIGhhbmRsZUFkZFByb2R1Y3QgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe2xhc3RLZXksIHByb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBbLi4ucHJvZHVjdHMsIHtrZXk6IGxhc3RLZXkgKyAxfV1cbiAgICAgIC8vIHByb2R1Y3RzOiBbLi4ucHJvZHVjdHMsIHtrZXk6IGxhc3RLZXkgKyAxfV0sXG4gICAgICAvLyBsYXN0S2V5OiBsYXN0S2V5ICsgMVxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVQcm9kdWN0Q2hvb3NlID0gKGluZGV4LCBpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGluZGV4LCBpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoZWwgPT4ge1xuICAgICAgICByZXR1cm4gZWwua2V5ID09PSBpbmRleCA/IHsuLi5lbCwgaWR9IDogZWw7XG4gICAgICB9KVxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVQcm9kdWN0RGVsZXRlID0gKGluZGV4KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5maWx0ZXIoKGVsLCBpKSA9PiBpbmRleCAhPT0gaSlcbiAgICB9KSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2RhaiBwcnplcGlzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5OYXp3YSBwcnplcGlzdTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendhIHByemVwaXN1XCJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5PcGlzPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGlzIHByemVwaXN1XCJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTRcIj5MaXN0YSBwcm9kdWt0w7N3PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+IChcbiAgICAgICAgICAgIDxTaW5nbGVQcm9kdWN0XG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC5rZXl9XG4gICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkID8gcHJvZHVjdC5pZCA6IFwiXCJ9XG4gICAgICAgICAgICAgIGluZGV4PXtwcm9kdWN0LmtleX1cbiAgICAgICAgICAgICAgbnVtYmVyPXtpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0Q2hvb3NlfVxuICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZVByb2R1Y3REZWxldGV9Lz5cbiAgICAgICAgICApKX1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkUHJvZHVjdH0+XG4gICAgICAgICAgICAgICAgRG9kYWogcHJvZHVrdCBkbyBwcnplcGlzdVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rXCI+RG9kYWogcHJ6ZXBpczwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFJlY2lwZTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YTUwNjhkZjRjNjNiZDBjNGFkZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlNpbmdsZVByb2R1Y3QiLCJBZGRSZWNpcGUiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJvblJlY2lwZUFkZCIsIm5hbWUiLCJwcm9kdWN0cyIsImtleSIsImxhc3RLZXkiLCJkZXNjIiwiaGFuZGxlQWRkUHJvZHVjdCIsIl9yZWYiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJoYW5kbGVQcm9kdWN0Q2hvb3NlIiwiaW5kZXgiLCJfcmVmMiIsIm1hcCIsImVsIiwiX29iamVjdFNwcmVhZCIsImhhbmRsZVByb2R1Y3REZWxldGUiLCJfcmVmMyIsImZpbHRlciIsImkiLCJkZXNjcmlwdGlvbiIsIl9jcmVhdGVDbGFzcyIsInJlbmRlciIsIl90aGlzMiIsImNyZWF0ZUVsZW1lbnQiLCJhdXRvQ29tcGxldGUiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYWxsUHJvZHVjdHMiLCJwcm9kdWN0IiwibnVtYmVyIiwib25DbG9zZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9