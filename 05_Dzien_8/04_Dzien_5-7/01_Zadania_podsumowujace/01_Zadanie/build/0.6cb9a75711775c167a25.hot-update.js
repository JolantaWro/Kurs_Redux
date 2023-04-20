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
      this.rootElement.innerHTML = "\n      <div class=\"card-header\">Lista zakup\xF3w</div>\n      <div class=\"card-body\">\n        <form>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Produkt...\" />\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-primary\" type=\"button\" id=\"shop-add\">Dodaj</button>\n            </div>\n          </div>\n        </form>\n\n        <ul class=\"list-group mt-3\" id=\"shop-list\">\n        </ul>\n      </div>\n    ";
    }
  }, {
    key: "collectRefs",
    value: function collectRefs() {
      this.form = this.rootElement.querySelector("form");
      this.shopList = this.rootElement.querySelector("#shop-list");
    }
  }, {
    key: "reduxConnect",
    value: function reduxConnect() {
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        return console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products);
      });
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      this.form.addEventListener("click", function (e) {
        console.log(e.target);
        e.preventDefault();
        console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products);
        _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
          type: " ADD_PRODUCT"
        });
      });
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
      // return state.concat([action.payload]);
      return [].concat(_toConsumableArray(state), [action.payload]);
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
/******/ 	__webpack_require__.h = () => ("9fbfe0ebae04d67e2e35")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7SUFDZixLQUFLekIsaURBQVc7TUFDWjtNQUNBLFVBQUFxQyxNQUFBLENBQUFDLGtCQUFBLENBQVdOLEtBQUssSUFBRUksTUFBTSxDQUFDRyxPQUFPO0lBQ3BDO01BQ0ksT0FBT1AsS0FBSztFQUFBO0FBR3hCLENBQUM7QUFFRCxpRUFBZUosc0RBQWUsQ0FBQztFQUMzQkcsT0FBTyxFQUFQQSxPQUFPO0VBQ1BaLFFBQVEsRUFBUkE7QUFDSixDQUFDLENBQUM7Ozs7Ozs7O1VDcENGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcHMvU2hvcHBpbmdMaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7QUREX1BST0RVQ1R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNsYXNzIFNob3BwaW5nTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XG4gICAgdGhpcy5yZWR1eENvbm5lY3QoKTtcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XG4gIH1cblxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpc3RhIHpha3Vww7N3PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUHJvZHVrdC4uLlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBpZD1cInNob3AtYWRkXCI+RG9kYWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtdC0zXCIgaWQ9XCJzaG9wLWxpc3RcIj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBjb2xsZWN0UmVmcygpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIHRoaXMuc2hvcExpc3QgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvcC1saXN0XCIpO1xuICB9XG5cbiAgcmVkdXhDb25uZWN0KCkge1xuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzKSlcblxuICB9XG5cbiAgYXBwbHlIYW5kbGVycygpIHtcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cylcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTpcIiBBRERfUFJPRFVDVFwiXG4gICAgICB9KVxuXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wcGluZ0xpc3Q7XG4iLCIvLyBleHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuLy8gICBjb3VudGVyLFxuLy8gICBwcm9kdWN0cyB6YWQgMlxuLy8gfSk7XG5cbmltcG9ydCB7QUREX1BST0RVQ1QsIERFQ1JFTUVOVCwgSU5DUkVNRU5UfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcblxuY29uc3Qgc3RhdGVDb3VudGVyID0gMDtcbmNvbnN0IHN0YXRlUHJvZHVjdCA9IFtdO1xuY29uc3QgY291bnRlciA9IChzdGF0ZT1zdGF0ZUNvdW50ZXIsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBJTkNSRU1FTlQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyAxO1xuICAgICAgICBjYXNlIERFQ1JFTUVOVDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCBwcm9kdWN0cyA9IChzdGF0ZT1zdGF0ZVByb2R1Y3QsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbiAgICAgICAgICAgIC8vIHJldHVybiBzdGF0ZS5jb25jYXQoW2FjdGlvbi5wYXlsb2FkXSk7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICBjb3VudGVyLFxuICAgIHByb2R1Y3RzXG59KSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjlmYmZlMGViYWUwNGQ2N2UyZTM1XCIpIl0sIm5hbWVzIjpbInN0b3JlIiwiQUREX1BST0RVQ1QiLCJTaG9wcGluZ0xpc3QiLCJyb290RWxlbWVudCIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZVVJIiwicmVkdXhDb25uZWN0IiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbm5lckhUTUwiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsInNob3BMaXN0Iiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2giLCJ0eXBlIiwiREVDUkVNRU5UIiwiSU5DUkVNRU5UIiwiY29tYmluZVJlZHVjZXJzIiwic3RhdGVDb3VudGVyIiwic3RhdGVQcm9kdWN0IiwiY291bnRlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=