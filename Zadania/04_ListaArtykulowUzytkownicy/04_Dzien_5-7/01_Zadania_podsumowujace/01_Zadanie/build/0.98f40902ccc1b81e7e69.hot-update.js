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
        _this.createLi();
      });
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        return console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products);
      });
    }
  }, {
    key: "createLi",
    value: function createLi() {
      var _this2 = this;
      var elementDiv = document.createElement("div");
      var elementLi = document.createElement("Li");
      elementLi.classList = "list-group-item d-flex justify-content-between align-items-center";
      // store.getState().products.forEach(el => elementLi.innerText = el)
      // store.getState().products.productsList.forEach(el => elementLi.innerText = el.text)
      // this.elementButtonUp = document.createElement("button");
      // this.elementButtonUp.innerText = "UP";
      // this.elementButtonUp.classList.add("upClass");
      // this.elementButtonUp.value = elementLi.id;
      // this.elementButtonDown = document.createElement("button");
      // this.elementButtonDown.innerText = "DOWN";
      // this.elementButtonDown.classList.add("downClass");

      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.productsList.forEach(function (el) {
        elementLi.innerText = el.text;
        _this2.elementButtonUp = document.createElement("button");
        _this2.elementButtonUp.innerText = "UP";
        _this2.elementButtonUp.classList.add("upClass");
        _this2.elementButtonUp.value = el.id;
        _this2.elementButtonDown = document.createElement("button");
        _this2.elementButtonDown.innerText = "DOWN";
        _this2.elementButtonDown.classList.add("downClass");
        _this2.elementButtonUp.value = el.id;
      });
      elementLi.append(this.elementButtonUp, this.elementButtonDown);
      elementLi.sort(function (a, b) {
        return Number(a.id) - Number(b.id);
      });
      elementDiv.appendChild(elementLi);
      this.shopList.appendChild(elementDiv);
      this.elementButtonUp.addEventListener("click", function (e) {
        return console.log("Up", e.target.value);
      });

      //setArray(myArray.map((task) => task.id === e ? {...task, done: true} : {...task}).sort((a,b) => Number(a.done) - Number(b.done)))

      this.elementButtonDown.addEventListener("click", function (e) {
        return console.log("Down", e.target.value);
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
      // document.querySelector(".upClass").addEventListener("click", () => console.log("up"))

      // this.elementButtonUp.addEventListener("click", ()=> console.log("Up"))
    }
  }]);
  return ShoppingList;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingList);

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
    case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ORDER:
      return _objectSpread(_objectSpread({}, state), {}, {
        productsList: state.productsList.map(function (product) {
          if (product.id > action.payload.id) {
            return product.id + 1;
          } else if (product.id < action.payload.id) {
            return product.id - 1;
          }
          // if(product.id !== action.payload.id) {
          //     return product
          // } else if (product.id === action.payload.id) {
          //     return product.id + 1
          // }
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
/******/ 	__webpack_require__.h = () => ("0efe660de28655f005b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ni1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9hcHBzL1Nob3BwaW5nTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQge0FERF9QUk9EVUNULCBhZGRQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jbGFzcyBTaG9wcGluZ0xpc3Qge1xuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCkge1xuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xuICAgIHRoaXMucmVkdXhDb25uZWN0KCk7XG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xuICB9XG5cbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5MaXN0YSB6YWt1cMOzdzwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlByb2R1a3QuLi5cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzaG9wLWFkZFwiPkRvZGFqPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbXQtM1wiIGlkPVwic2hvcC1saXN0XCI+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgY29sbGVjdFJlZnMoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250cm9sXCIpO1xuICAgIHRoaXMuc2hvcExpc3QgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvcC1saXN0XCIpO1xuICB9XG5cbiAgcmVkdXhDb25uZWN0KCkge1xuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUxpKClcbiAgICB9KVxuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzKSlcblxuICB9XG5cbiAgY3JlYXRlTGkoKSB7XG4gICAgY29uc3QgZWxlbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcbiAgICBlbGVtZW50TGkuY2xhc3NMaXN0ID0gXCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgLy8gc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5mb3JFYWNoKGVsID0+IGVsZW1lbnRMaS5pbm5lclRleHQgPSBlbClcbiAgICAvLyBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5mb3JFYWNoKGVsID0+IGVsZW1lbnRMaS5pbm5lclRleHQgPSBlbC50ZXh0KVxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5pbm5lclRleHQgPSBcIlVQXCI7XG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uVXAuY2xhc3NMaXN0LmFkZChcInVwQ2xhc3NcIik7XG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uVXAudmFsdWUgPSBlbGVtZW50TGkuaWQ7XG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uRG93bi5pbm5lclRleHQgPSBcIkRPV05cIjtcbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmNsYXNzTGlzdC5hZGQoXCJkb3duQ2xhc3NcIik7XG5cblxuXG4gICAgc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5wcm9kdWN0c0xpc3QuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbGVtZW50TGkuaW5uZXJUZXh0ID0gZWwudGV4dFxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAuaW5uZXJUZXh0ID0gXCJVUFwiO1xuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAuY2xhc3NMaXN0LmFkZChcInVwQ2xhc3NcIik7XG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC52YWx1ZSA9IGVsLmlkO1xuXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uaW5uZXJUZXh0ID0gXCJET1dOXCI7XG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmNsYXNzTGlzdC5hZGQoXCJkb3duQ2xhc3NcIik7XG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC52YWx1ZSA9IGVsLmlkO1xuICAgIH0pXG5cblxuXG4gICAgZWxlbWVudExpLmFwcGVuZCh0aGlzLmVsZW1lbnRCdXR0b25VcCwgdGhpcy5lbGVtZW50QnV0dG9uRG93bik7XG4gICAgZWxlbWVudExpLnNvcnQoKGEsYikgPT4gTnVtYmVyKGEuaWQpIC0gTnVtYmVyKGIuaWQpKVxuICAgIGVsZW1lbnREaXYuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxuXG4gICAgdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChlbGVtZW50RGl2KVxuICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIlVwXCIsIGUudGFyZ2V0LnZhbHVlKSlcblxuICAgIC8vc2V0QXJyYXkobXlBcnJheS5tYXAoKHRhc2spID0+IHRhc2suaWQgPT09IGUgPyB7Li4udGFzaywgZG9uZTogdHJ1ZX0gOiB7Li4udGFza30pLnNvcnQoKGEsYikgPT4gTnVtYmVyKGEuZG9uZSkgLSBOdW1iZXIoYi5kb25lKSkpXG5cbiAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIkRvd25cIiwgZS50YXJnZXQudmFsdWUpKVxuXG4gIH1cblxuICBhcHBseUhhbmRsZXJzKCkge1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZih0aGlzLmlucHV0VmFsdWUudmFsdWUpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdCh0aGlzLmlucHV0VmFsdWUudmFsdWUgKSlcbiAgICAgICAgLy8gc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQUREX1BST0RVQ1QnLCBwYXlsb2FkOiB0aGlzLmlucHV0VmFsdWUudmFsdWUgfSlcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBDbGFzc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJ1cFwiKSlcblxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IGNvbnNvbGUubG9nKFwiVXBcIikpXG4gIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xuIiwiLy8gZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbi8vICAgY291bnRlcixcbi8vICAgcHJvZHVjdHMgemFkIDJcbi8vIH0pO1xuXG5pbXBvcnQge0FERF9QUk9EVUNULCBDSEFOR0VfT1JERVIsIERFQ1JFTUVOVCwgSU5DUkVNRU5UfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcblxuY29uc3Qgc3RhdGVDb3VudGVyID0gMDtcbi8vIGNvbnN0IHN0YXRlUHJvZHVjdCA9IHtwcm9kdWN0c0xpc3Q6IFtcbi8vICAgICBdLCBjb3VudGVyIDogMH1cbmNvbnN0IHN0YXRlUHJvZHVjdCA9IHtwcm9kdWN0c0xpc3Q6IFtcbiAgICAgICAgXX07XG5cblxuZnVuY3Rpb24gbWF4SWRQcm9kdWN0cyhhcnJheSkge1xuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcbiAgICByZXR1cm4gbWF4SWQgKyAxXG59XG5jb25zdCBjb3VudGVyID0gKHN0YXRlPSBzdGF0ZUNvdW50ZXIsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBJTkNSRU1FTlQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyAxO1xuICAgICAgICBjYXNlIERFQ1JFTUVOVDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCBwcm9kdWN0cyA9IChzdGF0ZT0gc3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzTGlzdDogWy4uLnN0YXRlLnByb2R1Y3RzTGlzdCwge1xuICAgICAgICAgICAgICAgICAgICBpZDogbWF4SWRQcm9kdWN0cyhzdGF0ZS5wcm9kdWN0c0xpc3QpLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0hBTkdFX09SREVSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0c0xpc3Q6IHN0YXRlLnByb2R1Y3RzTGlzdC5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3QuaWQgPiBhY3Rpb24ucGF5bG9hZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QuaWQgKyAxXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZHVjdC5pZCA8IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5pZCAtIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZihwcm9kdWN0LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChwcm9kdWN0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHByb2R1Y3QuaWQgKyAxXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICBjb3VudGVyLFxuICAgIHByb2R1Y3RzXG59KSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBlZmU2NjBkZTI4NjU1ZjAwNWI2XCIpIl0sIm5hbWVzIjpbInN0b3JlIiwiQUREX1BST0RVQ1QiLCJhZGRQcm9kdWN0IiwiU2hvcHBpbmdMaXN0Iiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dFZhbHVlIiwic2hvcExpc3QiLCJfdGhpcyIsInN1YnNjcmliZSIsImNyZWF0ZUxpIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJfdGhpczIiLCJlbGVtZW50RGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudExpIiwiY2xhc3NMaXN0IiwicHJvZHVjdHNMaXN0IiwiZm9yRWFjaCIsImVsIiwiaW5uZXJUZXh0IiwidGV4dCIsImVsZW1lbnRCdXR0b25VcCIsImFkZCIsImlkIiwiZWxlbWVudEJ1dHRvbkRvd24iLCJhcHBlbmQiLCJzb3J0IiwiYSIsImIiLCJOdW1iZXIiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiX3RoaXMzIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCIsIkNIQU5HRV9PUkRFUiIsIkRFQ1JFTUVOVCIsIklOQ1JFTUVOVCIsImNvbWJpbmVSZWR1Y2VycyIsInN0YXRlQ291bnRlciIsInN0YXRlUHJvZHVjdCIsIm1heElkUHJvZHVjdHMiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJjb3VudGVyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwiX29iamVjdFNwcmVhZCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInBheWxvYWQiLCJtYXAiLCJwcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==