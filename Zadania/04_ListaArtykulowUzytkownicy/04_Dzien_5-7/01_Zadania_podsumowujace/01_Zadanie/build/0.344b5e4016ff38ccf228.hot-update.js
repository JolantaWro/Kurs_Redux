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
      var unsubscribe = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.sort(function (a, b) {
          return b.id - a.id;
        }));
      });
    }
  }, {
    key: "createLi",
    value: function createLi() {
      var _this2 = this;
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.forEach(function (element) {
        var elementDiv = document.createElement("div");
        var elementLi = document.createElement("Li");
        elementLi.classList = "list-group-item d-flex justify-content-between align-items-center";
        elementLi.innerText = element;
        var elementButtonUp = document.createElement("button");
        elementButtonUp.innerText = "UP";
        elementButtonUp.classList.add("UP");
        elementButtonUp.value = element;
        var elementButtonDown = document.createElement("button");
        elementButtonDown.innerText = "DOWN";
        elementButtonDown.classList.add("DOWN");
        elementButtonDown.value = element;
        elementLi.append(elementButtonUp, elementButtonDown);
        elementDiv.appendChild(elementLi);
        _this2.shopList.appendChild(elementDiv);
        // elementButtonUp.addEventListener("click", (e)=> {
        //     const product = e.target.value
        //     const action = e.target.classList.value
        //     store.dispatch(changeOrder({product, action}))
        // })
      });

      this.shopList.querySelectorAll("li button").forEach(function (btn) {
        return btn.addEventListener("click", function (e) {
          var product = e.target.value;
          var action = e.target.classList.value;
          _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.changeOrder)({
            product: product,
            action: action
          }));
        });
      });
    }

    // this.elementButtonUp.addEventListener("click", (e)=> console.log("Up", e.target.value))
    // this.elementButtonDown.addEventListener("click", (e)=> console.log("Down", e.target.value))
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// export default combineReducers({
//   counter,
//   products zad 2
// });



var stateCounter = 0;
var stateProduct = [];
// const stateProduct = {productsList: [
//     ], counter : 0}
// const stateProduct = {productsList: [
//         ]};

function maxIdProducts(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var counterReducer = function counterReducer() {
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
  console.log(state);
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      return [].concat(_toConsumableArray(state), [action.payload]);
    case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ORDER:
      var newState = _toConsumableArray(state);
      var index = state.findIndex(function (element) {
        return element === action.payload.product;
      });
      if (action.payload.action === "UP") {
        if (!index) {
          return state;
        }
        var _ref = [newState[index], newState[index - 1]];
        newState[index - 1] = _ref[0];
        newState[index] = _ref[1];
      } else {
        if (index === newState.length - 1) {
          return state;
        }
        var choseElement = newState[index];
        newState.splice(index, 1);
        newState.splice(index + 1, 0, choseElement);
      }
      return newState;
    default:
      return state;
  }
};
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counterReducer,
  products: products
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5bf42bef689ce4b85ee4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFJRCxJQUFNYyxXQUFXLEdBQUd4QixzREFBZSxDQUFDO0VBQ2hDeUIsT0FBTyxFQUFFaEIsY0FBYztFQUN2QnpDLFFBQVEsRUFBRUE7QUFDZCxDQUFDLENBQUM7QUFFRixpRUFBZXdELFdBQVc7Ozs7Ozs7O1VDckUxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9hcHBzL1Nob3BwaW5nTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQge0FERF9QUk9EVUNULCBhZGRQcm9kdWN0LCBjaGFuZ2VPcmRlcn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY2xhc3MgU2hvcHBpbmdMaXN0IHtcbiAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQpIHtcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcbiAgICB0aGlzLnJlZHV4Q29ubmVjdCgpO1xuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcbiAgfVxuXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+TGlzdGEgemFrdXDDs3c8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9kdWt0Li4uXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwic2hvcC1hZGRcIj5Eb2RhajwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIG10LTNcIiBpZD1cInNob3AtbGlzdFwiPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGNvbGxlY3RSZWZzKCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udHJvbFwiKTtcbiAgICB0aGlzLnNob3BMaXN0ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3AtbGlzdFwiKTtcbiAgfVxuXG4gIHJlZHV4Q29ubmVjdCgpIHtcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVMaSgpXG4gICAgfSlcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnNvcnQoKGEsYikgPT4gYi5pZCAtIGEuaWQpKTtcbiAgICB9KTtcblxuXG4gIH1cblxuICBjcmVhdGVMaSgpIHtcbiAgICAgIHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBsZXQgZWxlbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICBsZXQgZWxlbWVudExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxpXCIpXG4gICAgICAgICAgZWxlbWVudExpLmNsYXNzTGlzdCA9IFwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgIGVsZW1lbnRMaS5pbm5lclRleHQgPSBlbGVtZW50XG4gICAgICAgICAgbGV0IGVsZW1lbnRCdXR0b25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgZWxlbWVudEJ1dHRvblVwLmlubmVyVGV4dCA9IFwiVVBcIjtcbiAgICAgICAgICBlbGVtZW50QnV0dG9uVXAuY2xhc3NMaXN0LmFkZChcIlVQXCIpO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25VcC52YWx1ZSA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICBsZXQgZWxlbWVudEJ1dHRvbkRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25Eb3duLmlubmVyVGV4dCA9IFwiRE9XTlwiO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25Eb3duLmNsYXNzTGlzdC5hZGQoXCJET1dOXCIpO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25Eb3duLnZhbHVlID0gZWxlbWVudDtcblxuICAgICAgICAgIGVsZW1lbnRMaS5hcHBlbmQoZWxlbWVudEJ1dHRvblVwLCBlbGVtZW50QnV0dG9uRG93bik7XG4gICAgICAgICAgZWxlbWVudERpdi5hcHBlbmRDaGlsZChlbGVtZW50TGkpXG4gICAgICAgICAgdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChlbGVtZW50RGl2KVxuICAgICAgICAgICAgICAvLyBlbGVtZW50QnV0dG9uVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHtcbiAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHByb2R1Y3QgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAvLyAgICAgY29uc3QgYWN0aW9uID0gZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlXG4gICAgICAgICAgICAgIC8vICAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VPcmRlcih7cHJvZHVjdCwgYWN0aW9ufSkpXG4gICAgICAgICAgICAgIC8vIH0pXG5cblxuICAgICAgfSlcbiAgICAgIHRoaXMuc2hvcExpc3QucXVlcnlTZWxlY3RvckFsbChcImxpIGJ1dHRvblwiKS5mb3JFYWNoKChidG4pID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgY29uc3QgYWN0aW9uID0gZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlO1xuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU9yZGVyKHtwcm9kdWN0LCBhY3Rpb259KSlcbiAgICAgIH0pKVxuXG4gICAgfVxuXG5cbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJVcFwiLCBlLnRhcmdldC52YWx1ZSkpXG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJEb3duXCIsIGUudGFyZ2V0LnZhbHVlKSlcblxuICBhcHBseUhhbmRsZXJzKCkge1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZih0aGlzLmlucHV0VmFsdWUudmFsdWUpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdCh0aGlzLmlucHV0VmFsdWUudmFsdWUgKSlcbiAgICAgICAgLy8gc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQUREX1BST0RVQ1QnLCBwYXlsb2FkOiB0aGlzLmlucHV0VmFsdWUudmFsdWUgfSlcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBDbGFzc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJ1cFwiKSlcblxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IGNvbnNvbGUubG9nKFwiVXBcIikpXG4gIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xuIiwiLy8gZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbi8vICAgY291bnRlcixcbi8vICAgcHJvZHVjdHMgemFkIDJcbi8vIH0pO1xuXG5pbXBvcnQge0FERF9QUk9EVUNULCBDSEFOR0VfT1JERVIsIERFQ1JFTUVOVCwgSU5DUkVNRU5UfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcblxuY29uc3Qgc3RhdGVDb3VudGVyID0gMDtcbmNvbnN0IHN0YXRlUHJvZHVjdCA9IFtdO1xuLy8gY29uc3Qgc3RhdGVQcm9kdWN0ID0ge3Byb2R1Y3RzTGlzdDogW1xuLy8gICAgIF0sIGNvdW50ZXIgOiAwfVxuLy8gY29uc3Qgc3RhdGVQcm9kdWN0ID0ge3Byb2R1Y3RzTGlzdDogW1xuLy8gICAgICAgICBdfTtcblxuXG5cbmZ1bmN0aW9uIG1heElkUHJvZHVjdHMoYXJyYXkpIHtcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXG4gICAgcmV0dXJuIG1heElkICsgMVxufVxuY29uc3QgY291bnRlclJlZHVjZXIgPSAoc3RhdGU9IHN0YXRlQ291bnRlciwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIElOQ1JFTUVOVDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgICAgIGNhc2UgREVDUkVNRU5UOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmNvbnN0IHByb2R1Y3RzID0gKHN0YXRlPSBzdGF0ZVByb2R1Y3QsIGFjdGlvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgICBjYXNlIENIQU5HRV9PUkRFUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0KTtcbiAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkLmFjdGlvbiA9PT0gXCJVUFwiKSB7XG4gICAgICAgICAgICAgICAgaWYoIWluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgW25ld1N0YXRlW2luZGV4IC0gMV0sIG5ld1N0YXRlW2luZGV4XV0gPSBbbmV3U3RhdGVbaW5kZXhdLCBuZXdTdGF0ZVtpbmRleCAtIDFdXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuZXdTdGF0ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvc2VFbGVtZW50ID0gbmV3U3RhdGVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4KzEsIDAsIGNob3NlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cblxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY291bnRlcjogY291bnRlclJlZHVjZXIsXG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWJmNDJiZWY2ODljZTRiODVlZTRcIikiXSwibmFtZXMiOlsic3RvcmUiLCJBRERfUFJPRFVDVCIsImFkZFByb2R1Y3QiLCJjaGFuZ2VPcmRlciIsIlNob3BwaW5nTGlzdCIsInJvb3RFbGVtZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlVUkiLCJyZWR1eENvbm5lY3QiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRWYWx1ZSIsInNob3BMaXN0IiwiX3RoaXMiLCJzdWJzY3JpYmUiLCJjcmVhdGVMaSIsInVuc3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJzb3J0IiwiYSIsImIiLCJpZCIsIl90aGlzMiIsImZvckVhY2giLCJlbGVtZW50IiwiZWxlbWVudERpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRMaSIsImNsYXNzTGlzdCIsImlubmVyVGV4dCIsImVsZW1lbnRCdXR0b25VcCIsImFkZCIsImVsZW1lbnRCdXR0b25Eb3duIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcm9kdWN0IiwidGFyZ2V0IiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJfdGhpczMiLCJwcmV2ZW50RGVmYXVsdCIsIkNIQU5HRV9PUkRFUiIsIkRFQ1JFTUVOVCIsIklOQ1JFTUVOVCIsImNvbWJpbmVSZWR1Y2VycyIsInN0YXRlQ291bnRlciIsInN0YXRlUHJvZHVjdCIsIm1heElkUHJvZHVjdHMiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiTWF0aCIsIm1heCIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCIsIm5ld1N0YXRlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJfcmVmIiwiY2hvc2VFbGVtZW50Iiwic3BsaWNlIiwicm9vdFJlZHVjZXIiLCJjb3VudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==