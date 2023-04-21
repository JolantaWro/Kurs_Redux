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

/***/ 113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(106);
/* harmony import */ var _components_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(107);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _redux_actions_recipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);





var RecipesContainer = function RecipesContainer(_ref) {
  var allRecipes = _ref.allRecipes,
    onRecipeAdd = _ref.onRecipeAdd;
  var handleNewRecipe = function handleNewRecipe(value) {
    onRecipeAdd(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Recipes__WEBPACK_IMPORTED_MODULE_1__["default"], {
    allRecipes: allRecipes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onSaveRecipe: handleNewRecipe
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    allRecipes: state.recipes
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onRecipeAdd: function onRecipeAdd(value) {
      return dispatch((0,_redux_actions_recipes__WEBPACK_IMPORTED_MODULE_4__.addRecipe)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(RecipesContainer));

/***/ }),

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_RECIPE": () => (/* binding */ ADD_RECIPE),
/* harmony export */   "addRecipe": () => (/* binding */ addRecipe)
/* harmony export */ });
var ADD_RECIPE = "ADD_RECIPE";
var addRecipe = function addRecipe(recipe) {
  return {
    type: ADD_RECIPE,
    payload: recipe
  };
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("26e44b154b082f9fc20a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMGVhNjVjN2M1NzAxMmU1M2MxOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0s7QUFBQSxJQUd0Q0csU0FBUywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFNBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixTQUFBO0VBQ2IsU0FBQUEsVUFBWUssS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFQLFNBQUE7SUFDakJNLEtBQUEsR0FBQUgsTUFBQSxDQUFBSyxJQUFBLE9BQU1ILEtBQUs7SUFPYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQUFDLEtBQUEsQ0FFQUcsWUFBWSxHQUFHLFVBQUFDLENBQUMsRUFBSTtNQUNsQkosS0FBQSxDQUFLSyxRQUFRLENBQUFDLGVBQUEsS0FDVkYsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEVBQUUsRUFBR0osQ0FBQyxDQUFDRyxNQUFNLENBQUNFLEtBQUssRUFDN0I7SUFDSixDQUFDO0lBQUFULEtBQUEsQ0FFRFUsWUFBWSxHQUFHLFVBQUFOLENBQUMsRUFBSTtNQUNsQkEsQ0FBQyxDQUFDTyxjQUFjLEVBQUU7TUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixLQUFBLENBQUtjLEtBQUssQ0FBQztNQUN2QmQsS0FBQSxDQUFLRCxLQUFLLENBQUNnQixZQUFZLENBQUNmLEtBQUEsQ0FBS2MsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFBQWQsS0FBQSxDQUVEZ0IsZ0JBQWdCLEdBQUcsWUFBTTtNQUN2QmhCLEtBQUEsQ0FBS0ssUUFBUSxDQUFDLFVBQUFZLElBQUE7UUFBQSxJQUFFQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztVQUFFQyxRQUFRLEdBQUFGLElBQUEsQ0FBUkUsUUFBUTtRQUFBLE9BQU87VUFDdENBLFFBQVEsS0FBQUMsTUFBQSxDQUFBQyxrQkFBQSxDQUFNRixRQUFRLElBQUU7WUFBQ0csR0FBRyxFQUFFSixPQUFPLEdBQUc7VUFBQyxDQUFDLEVBQUM7VUFDM0NBLE9BQU8sRUFBRUEsT0FBTyxHQUFHO1FBQ3JCLENBQUM7TUFBQSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUFsQixLQUFBLENBRUR1QixtQkFBbUIsR0FBRyxVQUFDQyxLQUFLLEVBQUVoQixFQUFFLEVBQUs7TUFDbkNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxLQUFLLEVBQUVoQixFQUFFLENBQUM7TUFDdEJSLEtBQUEsQ0FBS0ssUUFBUSxDQUFDLFVBQUFvQixLQUFBO1FBQUEsSUFBRU4sUUFBUSxHQUFBTSxLQUFBLENBQVJOLFFBQVE7UUFBQSxPQUFPO1VBQzdCQSxRQUFRLEVBQUVBLFFBQVEsQ0FBQ08sR0FBRyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtZQUMzQixPQUFPQSxFQUFFLENBQUNMLEdBQUcsS0FBS0UsS0FBSyxHQUFBSSxhQUFBLENBQUFBLGFBQUEsS0FBT0QsRUFBRTtjQUFFbkIsRUFBRSxFQUFGQTtZQUFFLEtBQUltQixFQUFFO1VBQzVDLENBQUM7UUFDSCxDQUFDO01BQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBM0IsS0FBQSxDQUVENkIsbUJBQW1CLEdBQUcsVUFBQ0wsS0FBSyxFQUFLO01BQy9CeEIsS0FBQSxDQUFLSyxRQUFRLENBQUMsVUFBQXlCLEtBQUE7UUFBQSxJQUFFWCxRQUFRLEdBQUFXLEtBQUEsQ0FBUlgsUUFBUTtRQUFBLE9BQU87VUFDN0JBLFFBQVEsRUFBRUEsUUFBUSxDQUFDWSxNQUFNLENBQUMsVUFBQ0osRUFBRSxFQUFFSyxDQUFDO1lBQUEsT0FBS1IsS0FBSyxLQUFLUSxDQUFDO1VBQUE7UUFDbEQsQ0FBQztNQUFBLENBQUMsQ0FBQztJQUNMLENBQUM7SUE1Q0NoQyxLQUFBLENBQUtjLEtBQUssR0FBRztNQUNYbUIsSUFBSSxFQUFFLEVBQUU7TUFDUmQsUUFBUSxFQUFFLENBQUM7UUFBQ0csR0FBRyxFQUFFO01BQUMsQ0FBQyxDQUFDO01BQ3BCSixPQUFPLEVBQUU7SUFDWCxDQUFDO0lBQUEsT0FBQWxCLEtBQUE7RUFDSDtFQUFDa0MsWUFBQSxDQUFBeEMsU0FBQTtJQUFBNEIsR0FBQTtJQUFBYixLQUFBLEVBeUNELFNBQUEwQixPQUFBLEVBQVM7TUFBQSxJQUFBQyxNQUFBO01BQ1Asb0JBQ0U3QywwREFBQTtRQUFNK0MsWUFBWSxFQUFDLEtBQUs7UUFBQ0MsUUFBUSxFQUFFLElBQUksQ0FBQzdCO01BQWEsZ0JBQ25EbkIsMERBQUE7UUFBSWlELFNBQVMsRUFBQztNQUFPLEdBQUMsZUFBYSxDQUFLLGVBQ3hDakQsMERBQUE7UUFBS2lELFNBQVMsRUFBQztNQUFLLGdCQUNsQmpELDBEQUFBO1FBQUtpRCxTQUFTLEVBQUM7TUFBTyxnQkFDcEJqRCwwREFBQTtRQUFPaUQsU0FBUyxFQUFDO01BQU8sR0FBQyxnQkFBYyxDQUFRLGVBQy9DakQsMERBQUE7UUFBS2lELFNBQVMsRUFBQztNQUFTLGdCQUN0QmpELDBEQUFBO1FBQU9pRCxTQUFTLEVBQUMsT0FBTztRQUNqQkMsSUFBSSxFQUFDLE1BQU07UUFDWFIsSUFBSSxFQUFDLE1BQU07UUFDWHpCLEVBQUUsRUFBQyxNQUFNO1FBQ1RrQyxXQUFXLEVBQUMsZ0JBQWdCO1FBQzVCQyxRQUFRLEVBQUUsSUFBSSxDQUFDeEM7TUFBYSxFQUFFLENBQ2pDLENBQ0YsZUFFTlosMERBQUE7UUFBS2lELFNBQVMsRUFBQztNQUFPLGdCQUNwQmpELDBEQUFBO1FBQU9pRCxTQUFTLEVBQUM7TUFBTyxHQUFDLE1BQUksQ0FBUSxlQUNyQ2pELDBEQUFBO1FBQUtpRCxTQUFTLEVBQUM7TUFBUyxnQkFDdEJqRCwwREFBQTtRQUFPaUQsU0FBUyxFQUFDLE9BQU87UUFDakJDLElBQUksRUFBQyxNQUFNO1FBQ1hSLElBQUksRUFBQyxNQUFNO1FBQ1h6QixFQUFFLEVBQUMsTUFBTTtRQUNUa0MsV0FBVyxFQUFDLGVBQWU7UUFDM0JDLFFBQVEsRUFBRSxJQUFJLENBQUN4QztNQUFhLEVBQUUsQ0FDakMsQ0FDRixDQUNGLGVBR05aLDBEQUFBO1FBQUlpRCxTQUFTLEVBQUM7TUFBZSxHQUFDLG9CQUFlLENBQUssZUFDbERqRCwwREFBQTtRQUFLaUQsU0FBUyxFQUFDO01BQUssR0FDakIsSUFBSSxDQUFDMUIsS0FBSyxDQUFDSyxRQUFRLENBQUNPLEdBQUcsQ0FBQyxVQUFDa0IsT0FBTyxFQUFFWixDQUFDO1FBQUEsb0JBQ2xDekMsMERBQUEsQ0FBQ0Usc0RBQWE7VUFDWjZCLEdBQUcsRUFBRXNCLE9BQU8sQ0FBQ3RCLEdBQUk7VUFDakJkLEVBQUUsRUFBRW9DLE9BQU8sQ0FBQ3BDLEVBQUUsR0FBR29DLE9BQU8sQ0FBQ3BDLEVBQUUsR0FBRyxFQUFHO1VBQ2pDZ0IsS0FBSyxFQUFFb0IsT0FBTyxDQUFDdEIsR0FBSTtVQUNuQnVCLE1BQU0sRUFBRWIsQ0FBRTtVQUNWVyxRQUFRLEVBQUVQLE1BQUksQ0FBQ2IsbUJBQW9CO1VBQ25DdUIsT0FBTyxFQUFFVixNQUFJLENBQUNQO1FBQW9CLEVBQUU7TUFBQSxDQUN2QyxDQUFDLGVBRUZ0QywwREFBQTtRQUFLaUQsU0FBUyxFQUFDO01BQU8sZ0JBQ3BCakQsMERBQUE7UUFBS2lELFNBQVMsRUFBQztNQUFTLGdCQUN0QmpELDBEQUFBO1FBQUdpRCxTQUFTLEVBQUMsbUJBQW1CO1FBQUNPLE9BQU8sRUFBRSxJQUFJLENBQUMvQjtNQUFpQixHQUFDLDJCQUVqRSxDQUFJLENBQ0EsQ0FDRixDQUNGLGVBRU56QiwwREFBQTtRQUFLaUQsU0FBUyxFQUFDO01BQWtCLGdCQUMvQmpELDBEQUFBO1FBQUtpRCxTQUFTLEVBQUM7TUFBUyxnQkFDdEJqRCwwREFBQTtRQUFRaUQsU0FBUyxFQUFDO01BQWdCLEdBQUMsZUFBYSxDQUFTLENBQ3JELENBQ0YsQ0FDRDtJQUVYO0VBQUM7RUFBQSxPQUFBOUMsU0FBQTtBQUFBLEVBNUdxQkYsNENBQVM7QUErR2pDLGlFQUFlRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25IRTtBQUNxQjtBQUNHO0FBQ2Q7QUFDZTtBQUVuRCxJQUFNeUQsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQWxDLElBQUEsRUFBa0M7RUFBQSxJQUE3Qm1DLFVBQVUsR0FBQW5DLElBQUEsQ0FBVm1DLFVBQVU7SUFBRUMsV0FBVyxHQUFBcEMsSUFBQSxDQUFYb0MsV0FBVztFQUU5QyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUk3QyxLQUFLLEVBQUs7SUFDL0I0QyxXQUFXLENBQUM1QyxLQUFLLENBQUM7RUFDdEIsQ0FBQztFQUVELG9CQUNJbEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUN5RCwyREFBVTtJQUFDSSxVQUFVLEVBQUVBO0VBQVcsRUFBRSxlQUNyQzdELDBEQUFBLENBQUNHLCtEQUFTO0lBQUNxQixZQUFZLEVBQUV1QztFQUFnQixFQUFFLENBQzVDO0FBRVgsQ0FBQztBQUVELElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBRzFDLEtBQUs7RUFBQSxPQUFLO0lBQzlCc0MsVUFBVSxFQUFFdEMsS0FBSyxDQUFDMkM7RUFDdEIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ04sV0FBVyxFQUFFLFNBQUFBLFlBQUM1QyxLQUFLO01BQUEsT0FBS2tELFFBQVEsQ0FBQ1QsaUVBQVMsQ0FBQ3pDLEtBQUssQ0FBQyxDQUFDO0lBQUE7RUFDdEQsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZXdDLG9EQUFPLENBQUNPLGVBQWUsRUFBRUUsa0JBQWtCLENBQUMsQ0FBQ1AsZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7OztBQzVCdEUsSUFBTVMsVUFBVSxHQUFHLFlBQVk7QUFFL0IsSUFBTVYsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlXLE1BQU07RUFBQSxPQUFNO0lBQ2xDcEIsSUFBSSxFQUFFbUIsVUFBVTtJQUNoQkUsT0FBTyxFQUFFRDtFQUNiLENBQUM7QUFBQSxDQUFDOzs7Ozs7OztVQ0xGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL0FkZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1JlY2lwZXNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvcmVkdXgvYWN0aW9ucy9yZWNpcGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4vU2luZ2xlUHJvZHVjdFwiO1xyXG5cclxuXHJcbmNsYXNzIEFkZFJlY2lwZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIHByb2R1Y3RzOiBbe2tleTogMH1dLFxyXG4gICAgICBsYXN0S2V5OiAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIHN0YXRlID0ge1xyXG4gIC8vICAgbmFtZTogXCJcIixcclxuICAvLyAgIHByb2R1Y3RzOiBbe2tleTogMH1dLFxyXG4gIC8vICAgbGFzdEtleTogMFxyXG4gIC8vIH07XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgdGhpcy5wcm9wcy5vblNhdmVSZWNpcGUodGhpcy5zdGF0ZSlcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoe2xhc3RLZXksIHByb2R1Y3RzfSkgPT4gKHtcclxuICAgICAgcHJvZHVjdHM6IFsuLi5wcm9kdWN0cywge2tleTogbGFzdEtleSArIDF9XSxcclxuICAgICAgbGFzdEtleTogbGFzdEtleSArIDFcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVQcm9kdWN0Q2hvb3NlID0gKGluZGV4LCBpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW5kZXgsIGlkKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHtwcm9kdWN0c30pID0+ICh7XHJcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoZWwgPT4ge1xyXG4gICAgICAgIHJldHVybiBlbC5rZXkgPT09IGluZGV4ID8gey4uLmVsLCBpZH0gOiBlbDtcclxuICAgICAgfSlcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVQcm9kdWN0RGVsZXRlID0gKGluZGV4KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKCh7cHJvZHVjdHN9KSA9PiAoe1xyXG4gICAgICBwcm9kdWN0czogcHJvZHVjdHMuZmlsdGVyKChlbCwgaSkgPT4gaW5kZXggIT09IGkpXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2RhaiBwcnplcGlzPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5OYXp3YSBwcnplcGlzdTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendhIHByemVwaXN1XCJcclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5PcGlzPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BpcyBwcnplcGlzdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTRcIj5MaXN0YSBwcm9kdWt0w7N3PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUucHJvZHVjdHMubWFwKChwcm9kdWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxTaW5nbGVQcm9kdWN0XHJcbiAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmtleX1cclxuICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZCA/IHByb2R1Y3QuaWQgOiBcIlwifVxyXG4gICAgICAgICAgICAgIGluZGV4PXtwcm9kdWN0LmtleX1cclxuICAgICAgICAgICAgICBudW1iZXI9e2l9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdENob29zZX1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZVByb2R1Y3REZWxldGV9Lz5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFByb2R1Y3R9PlxyXG4gICAgICAgICAgICAgICAgRG9kYWogcHJvZHVrdCBkbyBwcnplcGlzdVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlua1wiPkRvZGFqIHByemVwaXM8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUmVjaXBlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbGxSZWNpcGVzIGZyb20gXCIuLi9jb21wb25lbnRzL1JlY2lwZXNcIjtcclxuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWNpcGVzL0FkZFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2FkZFJlY2lwZX0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvcmVjaXBlc1wiO1xyXG5cclxuY29uc3QgUmVjaXBlc0NvbnRhaW5lciA9ICh7YWxsUmVjaXBlcywgb25SZWNpcGVBZGR9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTmV3UmVjaXBlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgb25SZWNpcGVBZGQodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QWxsUmVjaXBlcyBhbGxSZWNpcGVzPXthbGxSZWNpcGVzfS8+XHJcbiAgICAgICAgICAgIDxBZGRSZWNpcGUgb25TYXZlUmVjaXBlPXtoYW5kbGVOZXdSZWNpcGV9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgYWxsUmVjaXBlczogc3RhdGUucmVjaXBlc1xyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBvblJlY2lwZUFkZDogKHZhbHVlKSA9PiBkaXNwYXRjaChhZGRSZWNpcGUodmFsdWUpKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFJlY2lwZXNDb250YWluZXIpOyIsImV4cG9ydCBjb25zdCBBRERfUkVDSVBFID0gXCJBRERfUkVDSVBFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUmVjaXBlID0gKHJlY2lwZSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9SRUNJUEUsXHJcbiAgICBwYXlsb2FkOiByZWNpcGVcclxufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjZlNDRiMTU0YjA4MmY5ZmMyMGFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTaW5nbGVQcm9kdWN0IiwiQWRkUmVjaXBlIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwib25TYXZlUmVjaXBlIiwiaGFuZGxlQWRkUHJvZHVjdCIsIl9yZWYiLCJsYXN0S2V5IiwicHJvZHVjdHMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJrZXkiLCJoYW5kbGVQcm9kdWN0Q2hvb3NlIiwiaW5kZXgiLCJfcmVmMiIsIm1hcCIsImVsIiwiX29iamVjdFNwcmVhZCIsImhhbmRsZVByb2R1Y3REZWxldGUiLCJfcmVmMyIsImZpbHRlciIsImkiLCJuYW1lIiwiX2NyZWF0ZUNsYXNzIiwicmVuZGVyIiwiX3RoaXMyIiwiY3JlYXRlRWxlbWVudCIsImF1dG9Db21wbGV0ZSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJwcm9kdWN0IiwibnVtYmVyIiwib25DbG9zZSIsIm9uQ2xpY2siLCJBbGxSZWNpcGVzIiwiY29ubmVjdCIsImFkZFJlY2lwZSIsIlJlY2lwZXNDb250YWluZXIiLCJhbGxSZWNpcGVzIiwib25SZWNpcGVBZGQiLCJoYW5kbGVOZXdSZWNpcGUiLCJGcmFnbWVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInJlY2lwZXMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkFERF9SRUNJUEUiLCJyZWNpcGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==