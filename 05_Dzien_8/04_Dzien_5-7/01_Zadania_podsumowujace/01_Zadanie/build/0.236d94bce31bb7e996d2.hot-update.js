"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var ShoppingList = /*#__PURE__*/function () {
  function ShoppingList(rootElement) {
    _classCallCheck(this, ShoppingList);
    this.createUI(rootElement);
    this.reduxConnect();
    this.collectRefs();
    this.applyHandlers();
  }
  _createClass(ShoppingList, [{
    key: "createUI",
    value: function createUI(rootElement) {
      this.rootElement = rootElement;
      this.rootElement.innerHTML = "\n      <div class=\"card-header\">Lista zakup\xF3w</div>\n      <div class=\"card-body\">\n        <form>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Produkt...\" />\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-primary\" type=\"submit\" id=\"shop-add\">Dodaj</button>\n            </div>\n          </div>\n        </form>\n\n        <ul class=\"list-group mt-3\" id=\"shop-list\">\n        </ul>\n      </div>\n    ";
    }
  }, {
    key: "collectRefs",
    value: function collectRefs() {
      this.form = this.rootElement.querySelector("form");
      this.inputValue = this.rootElement.querySelector(".form-control");
      this.shopList = this.rootElement.querySelector("#shop-list");
    }
  }, {
    key: "reduxConnect",
    value: function reduxConnect() {
      var _this = this;
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        _this.createLi(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products);
      });
      var unsubscribe = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.productsList.sort(function (a, b) {
          return b.id - a.id;
        }));
      });

      // store.subscribe(() => console.log(store.getState().products.productsList.sort((a,b) => b.id - a.id)))
    }
  }, {
    key: "createLi",
    value: function createLi() {
      var _this2 = this;
      var elementDiv = document.createElement("div");
      var elementLi = document.createElement("Li");
      elementLi.classList = "list-group-item d-flex justify-content-between align-items-center";
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.productsList.forEach(function (el) {
        elementLi.innerText = el.text;
        _this2.elementButtonUp = document.createElement("button");
        _this2.elementButtonUp.innerText = "UP";
        _this2.elementButtonUp.classList.add("upClass");
        _this2.elementButtonUp.value = el.id;
        _this2.elementButtonDown = document.createElement("button");
        _this2.elementButtonDown.innerText = "DOWN";
        _this2.elementButtonDown.classList.add("downClass");
        _this2.elementButtonDown.value = el.id;
      });
      elementLi.append(this.elementButtonUp, this.elementButtonDown);
      elementDiv.appendChild(elementLi);
      this.shopList.appendChild(elementDiv);
      this.elementButtonUp.addEventListener("click", function (e) {
        return _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.changeOrderUp)(parseInt(e.target.value)));
      });
      this.elementButtonDown.addEventListener("click", function (e) {
        return _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.changeOrderUp)(parseInt(e.target.value)));
      });
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      var _this3 = this;
      this.form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (_this3.inputValue.value) {
          _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.addProduct)(_this3.inputValue.value));
          // store.dispatch({ type: 'ADD_PRODUCT', payload: this.inputValue.value })
          _this3.inputValue.value = "";
        }
      });
    }
  }]);
  return ShoppingList;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingList);

/***/ }),

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_PRODUCT": () => (/* binding */ ADD_PRODUCT),
/* harmony export */   "CHANGE_ORDER_DOWN": () => (/* binding */ CHANGE_ORDER_DOWN),
/* harmony export */   "CHANGE_ORDER_UP": () => (/* binding */ CHANGE_ORDER_UP),
/* harmony export */   "DECREMENT": () => (/* binding */ DECREMENT),
/* harmony export */   "INCREMENT": () => (/* binding */ INCREMENT),
/* harmony export */   "addProduct": () => (/* binding */ addProduct),
/* harmony export */   "changeOrderDown": () => (/* binding */ changeOrderDown),
/* harmony export */   "changeOrderUp": () => (/* binding */ changeOrderUp),
/* harmony export */   "decrement": () => (/* binding */ decrement),
/* harmony export */   "increment": () => (/* binding */ increment)
/* harmony export */ });
var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";
var ADD_PRODUCT = "ADD_PRODUCT";
var CHANGE_ORDER_UP = "CHANGE_ORDER_UP";
var CHANGE_ORDER_DOWN = "CHANGE_ORDER_DOWN";
var increment = function increment(updateValue) {
  return {
    type: INCREMENT,
    payload: updateValue
  };
};
var decrement = function decrement(updateValue) {
  return {
    type: DECREMENT,
    payload: updateValue
  };
};
var addProduct = function addProduct(updateValue) {
  return {
    type: ADD_PRODUCT,
    payload: updateValue
  };
};
var changeOrderUp = function changeOrderUp(id) {
  return {
    type: CHANGE_ORDER_UP,
    payload: {
      id: id
    }
  };
};
var changeOrderDown = function changeOrderDown(id) {
  return {
    type: CHANGE_ORDER_DOWN,
    payload: {
      id: id
    }
  };
};


/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// export default combineReducers({
//   counter,
//   products zad 2
// });



var stateCounter = 0;
// const stateProduct = {productsList: [
//     ], counter : 0}
var stateProduct = {
  productsList: []
};
function maxIdProducts(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var counter = function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateCounter;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.INCREMENT:
      return state + 1;
    case _actions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
var products = function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateProduct;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      return _objectSpread(_objectSpread({}, state), {}, {
        productsList: [].concat(_toConsumableArray(state.productsList), [{
          id: maxIdProducts(state.productsList),
          text: action.payload
        }])
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ORDER_UP:
      return _objectSpread(_objectSpread({}, state), {}, {
        productsList: state.productsList.map(function (product) {
          if (product.id === action.payload.id) {
            return _objectSpread(_objectSpread({}, product), {}, {
              id: product.id + 1
            });
          } else {
            return product;
          }
        })
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ORDER_DOWN:
      return _objectSpread(_objectSpread({}, state), {}, {
        productsList: state.productsList.map(function (product) {
          if (product.id === action.payload.id) {
            return _objectSpread(_objectSpread({}, product), {}, {
              id: product.id - 1
            });
          } else {
            return product;
          }
        })
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counter,
  products: products
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2109eb57e639d67d932b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQUM7SUFHVjtNQUNJLE9BQU9ULEtBQUs7RUFBQTtBQUV4QixDQUFDO0FBSUQsaUVBQWVYLHNEQUFlLENBQUM7RUFDM0JVLE9BQU8sRUFBUEEsT0FBTztFQUNQcEQsUUFBUSxFQUFSQTtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7VUM3RUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9TaG9wcGluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQge0FERF9QUk9EVUNULCBhZGRQcm9kdWN0LCBjaGFuZ2VPcmRlciwgY2hhbmdlT3JkZXJVcH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuXHJcbmNsYXNzIFNob3BwaW5nTGlzdCB7XHJcbiAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xyXG4gICAgdGhpcy5yZWR1eENvbm5lY3QoKTtcclxuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcclxuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5MaXN0YSB6YWt1cMOzdzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUHJvZHVrdC4uLlwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzaG9wLWFkZFwiPkRvZGFqPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIG10LTNcIiBpZD1cInNob3AtbGlzdFwiPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGNvbGxlY3RSZWZzKCkge1xyXG4gICAgdGhpcy5mb3JtID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRyb2xcIik7XHJcbiAgICB0aGlzLnNob3BMaXN0ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3AtbGlzdFwiKTtcclxuICB9XHJcblxyXG4gIHJlZHV4Q29ubmVjdCgpIHtcclxuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlTGkoc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cylcclxuICAgIH0pXHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMucHJvZHVjdHNMaXN0LnNvcnQoKGEsYikgPT4gYi5pZCAtIGEuaWQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5zb3J0KChhLGIpID0+IGIuaWQgLSBhLmlkKSkpXHJcblxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGkoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29uc3QgZWxlbWVudExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxpXCIpXHJcbiAgICBlbGVtZW50TGkuY2xhc3NMaXN0ID0gXCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiO1xyXG5cclxuICAgIHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMucHJvZHVjdHNMaXN0LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICBlbGVtZW50TGkuaW5uZXJUZXh0ID0gZWwudGV4dDtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5pbm5lclRleHQgPSBcIlVQXCI7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmNsYXNzTGlzdC5hZGQoXCJ1cENsYXNzXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC52YWx1ZSA9IGVsLmlkO1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uaW5uZXJUZXh0ID0gXCJET1dOXCI7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uY2xhc3NMaXN0LmFkZChcImRvd25DbGFzc1wiKTtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi52YWx1ZSA9IGVsLmlkO1xyXG4gICAgfSlcclxuICAgIGVsZW1lbnRMaS5hcHBlbmQodGhpcy5lbGVtZW50QnV0dG9uVXAsIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24pO1xyXG4gICAgZWxlbWVudERpdi5hcHBlbmRDaGlsZChlbGVtZW50TGkpXHJcblxyXG4gICAgdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChlbGVtZW50RGl2KVxyXG4gICAgdGhpcy5lbGVtZW50QnV0dG9uVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHN0b3JlLmRpc3BhdGNoKGNoYW5nZU9yZGVyVXAocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKSkpXHJcbiAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBzdG9yZS5kaXNwYXRjaChjaGFuZ2VPcmRlclVwKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSkpKVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIGFwcGx5SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmKHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSkge1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZFByb2R1Y3QodGhpcy5pbnB1dFZhbHVlLnZhbHVlICkpXHJcbiAgICAgICAgLy8gc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQUREX1BST0RVQ1QnLCBwYXlsb2FkOiB0aGlzLmlucHV0VmFsdWUudmFsdWUgfSlcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xyXG4iLCJjb25zdCBJTkNSRU1FTlQgPSBcIklOQ1JFTUVOVFwiO1xyXG5jb25zdCBERUNSRU1FTlQgPSBcIkRFQ1JFTUVOVFwiO1xyXG5jb25zdCBBRERfUFJPRFVDVCA9IFwiQUREX1BST0RVQ1RcIjtcclxuY29uc3QgQ0hBTkdFX09SREVSX1VQID0gXCJDSEFOR0VfT1JERVJfVVBcIjtcclxuY29uc3QgQ0hBTkdFX09SREVSX0RPV04gPSBcIkNIQU5HRV9PUkRFUl9ET1dOXCI7XHJcblxyXG5cclxuY29uc3QgaW5jcmVtZW50ID0gKHVwZGF0ZVZhbHVlKSA9PiAoe1xyXG4gICAgdHlwZTogSU5DUkVNRU5ULFxyXG4gICAgcGF5bG9hZDogdXBkYXRlVmFsdWVcclxufSk7XHJcblxyXG5jb25zdCBkZWNyZW1lbnQgPSAodXBkYXRlVmFsdWUpID0+ICh7XHJcbiAgICB0eXBlOiBERUNSRU1FTlQsXHJcbiAgICBwYXlsb2FkOiB1cGRhdGVWYWx1ZVxyXG59KTtcclxuXHJcblxyXG5jb25zdCBhZGRQcm9kdWN0ID0gKHVwZGF0ZVZhbHVlKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BST0RVQ1QsXHJcbiAgICBwYXlsb2FkOiB1cGRhdGVWYWx1ZVxyXG59KVxyXG5cclxuY29uc3QgY2hhbmdlT3JkZXJVcCA9IChpZCkgPT4gKHtcclxuICAgIHR5cGU6IENIQU5HRV9PUkRFUl9VUCxcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBpZFxyXG4gICAgfVxyXG59KVxyXG5jb25zdCBjaGFuZ2VPcmRlckRvd24gPSAoaWQpID0+ICh7XHJcbiAgICB0eXBlOiBDSEFOR0VfT1JERVJfRE9XTixcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBpZFxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIEFERF9QUk9EVUNULCBDSEFOR0VfT1JERVJfVVAsIENIQU5HRV9PUkRFUl9ET1dOLCBpbmNyZW1lbnQsIGRlY3JlbWVudCxcclxuICAgIGFkZFByb2R1Y3QsIGNoYW5nZU9yZGVyVXAsIGNoYW5nZU9yZGVyRG93biB9OyIsIi8vIGV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbi8vICAgY291bnRlcixcclxuLy8gICBwcm9kdWN0cyB6YWQgMlxyXG4vLyB9KTtcclxuXHJcbmltcG9ydCB7QUREX1BST0RVQ1QsIENIQU5HRV9PUkRFUiwgQ0hBTkdFX09SREVSX0RPV04sIENIQU5HRV9PUkRFUl9VUCwgREVDUkVNRU5ULCBJTkNSRU1FTlR9IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IHN0YXRlQ291bnRlciA9IDA7XHJcbi8vIGNvbnN0IHN0YXRlUHJvZHVjdCA9IHtwcm9kdWN0c0xpc3Q6IFtcclxuLy8gICAgIF0sIGNvdW50ZXIgOiAwfVxyXG5jb25zdCBzdGF0ZVByb2R1Y3QgPSB7cHJvZHVjdHNMaXN0OiBbXHJcbiAgICAgICAgXX07XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1heElkUHJvZHVjdHMoYXJyYXkpIHtcclxuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcclxuICAgIHJldHVybiBtYXhJZCArIDFcclxufVxyXG5jb25zdCBjb3VudGVyID0gKHN0YXRlPSBzdGF0ZUNvdW50ZXIsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSU5DUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyAxO1xyXG4gICAgICAgIGNhc2UgREVDUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcHJvZHVjdHMgPSAoc3RhdGU9IHN0YXRlUHJvZHVjdCwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHNMaXN0OiBbLi4uc3RhdGUucHJvZHVjdHNMaXN0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG1heElkUHJvZHVjdHMoc3RhdGUucHJvZHVjdHNMaXN0KSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0hBTkdFX09SREVSX1VQOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0c0xpc3Q6IHN0YXRlLnByb2R1Y3RzTGlzdC5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLnByb2R1Y3QsIGlkOiBwcm9kdWN0LmlkICsgMX1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0hBTkdFX09SREVSX0RPV046XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzTGlzdDogc3RhdGUucHJvZHVjdHNMaXN0Lm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3QuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4ucHJvZHVjdCwgaWQ6IHByb2R1Y3QuaWQgLSAxfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjb3VudGVyLFxyXG4gICAgcHJvZHVjdHNcclxufSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMTA5ZWI1N2U2MzlkNjdkOTMyYlwiKSJdLCJuYW1lcyI6WyJzdG9yZSIsIkFERF9QUk9EVUNUIiwiYWRkUHJvZHVjdCIsImNoYW5nZU9yZGVyIiwiY2hhbmdlT3JkZXJVcCIsIlNob3BwaW5nTGlzdCIsInJvb3RFbGVtZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlVUkiLCJyZWR1eENvbm5lY3QiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRWYWx1ZSIsInNob3BMaXN0IiwiX3RoaXMiLCJzdWJzY3JpYmUiLCJjcmVhdGVMaSIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJ1bnN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0c0xpc3QiLCJzb3J0IiwiYSIsImIiLCJpZCIsIl90aGlzMiIsImVsZW1lbnREaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50TGkiLCJjbGFzc0xpc3QiLCJmb3JFYWNoIiwiZWwiLCJpbm5lclRleHQiLCJ0ZXh0IiwiZWxlbWVudEJ1dHRvblVwIiwiYWRkIiwiZWxlbWVudEJ1dHRvbkRvd24iLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGlzcGF0Y2giLCJwYXJzZUludCIsInRhcmdldCIsIl90aGlzMyIsInByZXZlbnREZWZhdWx0IiwiSU5DUkVNRU5UIiwiREVDUkVNRU5UIiwiQ0hBTkdFX09SREVSX1VQIiwiQ0hBTkdFX09SREVSX0RPV04iLCJpbmNyZW1lbnQiLCJ1cGRhdGVWYWx1ZSIsInR5cGUiLCJwYXlsb2FkIiwiZGVjcmVtZW50IiwiY2hhbmdlT3JkZXJEb3duIiwiQ0hBTkdFX09SREVSIiwiY29tYmluZVJlZHVjZXJzIiwic3RhdGVDb3VudGVyIiwic3RhdGVQcm9kdWN0IiwibWF4SWRQcm9kdWN0cyIsImFycmF5IiwibWF4SWQiLCJyZWR1Y2UiLCJlbGVtZW50IiwiTWF0aCIsIm1heCIsImNvdW50ZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsIl9vYmplY3RTcHJlYWQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJtYXAiLCJwcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==