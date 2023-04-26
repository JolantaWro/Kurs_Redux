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
        for (var i = 0; i < _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.length; i++) {
          var elementLi = document.createElement("Li");
          elementLi.innerText = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products[i];
          _this.shopList.appendChild(elementLi);
        }
      });
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        return console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products);
      });

      // for (let i = 0; i < store.getState().products.length; i ++) {
      //   const elementLi = document.createElement("Li")
      //   elementLi.innerHTML = `<li>${store.getState().products[i]}</li>`
      //   this.shopList.appendChild(elementLi)
      // store.subscribe(() => store.getState().products)
      //store.subscribe(() => this.shopList.innerHTML = `<li>${store.getState().products}</li>`)
      // }

      // store.subscribe(() => this.shopList.innerHTML = `<li>${store.getState().products}</li>`)
      // store.subscribe(() => this.shopList.innerText = store.getState().products)
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      var _this2 = this;
      this.form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (_this2.inputValue.value) {
          _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.addProduct)(_this2.inputValue.value));
          var elementLi = document.createElement("Li");
          // elementLi.innerText = store.getState().products[i]
          _this2.shopList.appendChild(elementLi);
          _this2.inputValue.value = "";
        }
        // for (let i = 0; i < store.getState().products.length; i ++) {
        //   const elementLi = document.createElement("Li")
        //   elementLi.innerText = store.getState().products[i]
        //   this.shopList.appendChild(elementLi)
        // }
      });
    }
  }]);
  return ShoppingList;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("de0ded5654e55d4b5995")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9hcHBzL1Nob3BwaW5nTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7QUREX1BST0RVQ1QsIGFkZFByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNsYXNzIFNob3BwaW5nTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XG4gICAgdGhpcy5yZWR1eENvbm5lY3QoKTtcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XG4gIH1cblxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpc3RhIHpha3Vww7N3PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUHJvZHVrdC4uLlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNob3AtYWRkXCI+RG9kYWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtdC0zXCIgaWQ9XCJzaG9wLWxpc3RcIj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBjb2xsZWN0UmVmcygpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRyb2xcIik7XG4gICAgdGhpcy5zaG9wTGlzdCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG9wLWxpc3RcIik7XG4gIH1cblxuICByZWR1eENvbm5lY3QoKSB7XG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxpXCIpXG4gICAgICAgIGVsZW1lbnRMaS5pbm5lclRleHQgPSBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzW2ldXG4gICAgICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxuICAgICAgfVxuXG4gICAgfSlcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cykpXG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMubGVuZ3RoOyBpICsrKSB7XG4gICAgLy8gICBjb25zdCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcbiAgICAvLyAgIGVsZW1lbnRMaS5pbm5lckhUTUwgPSBgPGxpPiR7c3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0c1tpXX08L2xpPmBcbiAgICAvLyAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxuICAgICAgLy8gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMpXG4gICAgICAvL3N0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNob3BMaXN0LmlubmVySFRNTCA9IGA8bGk+JHtzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzfTwvbGk+YClcbiAgICAvLyB9XG5cbiAgICAvLyBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaG9wTGlzdC5pbm5lckhUTUwgPSBgPGxpPiR7c3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0c308L2xpPmApXG4gICAgLy8gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2hvcExpc3QuaW5uZXJUZXh0ID0gc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cylcblxuICB9XG5cbiAgYXBwbHlIYW5kbGVycygpIHtcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZFByb2R1Y3QodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMaVwiKVxuICAgICAgICAvLyBlbGVtZW50TGkuaW5uZXJUZXh0ID0gc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0c1tpXVxuICAgICAgICB0aGlzLnNob3BMaXN0LmFwcGVuZENoaWxkKGVsZW1lbnRMaSlcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlID0gXCJcIjtcblxuICAgICAgfVxuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLmxlbmd0aDsgaSArKykge1xuICAgICAgLy8gICBjb25zdCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcbiAgICAgIC8vICAgZWxlbWVudExpLmlubmVyVGV4dCA9IHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHNbaV1cbiAgICAgIC8vICAgdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChlbGVtZW50TGkpXG4gICAgICAvLyB9XG5cblxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGUwZGVkNTY1NGU1NWQ0YjU5OTVcIikiXSwibmFtZXMiOlsic3RvcmUiLCJBRERfUFJPRFVDVCIsImFkZFByb2R1Y3QiLCJTaG9wcGluZ0xpc3QiLCJyb290RWxlbWVudCIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZVVJIiwicmVkdXhDb25uZWN0IiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbm5lckhUTUwiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImlucHV0VmFsdWUiLCJzaG9wTGlzdCIsIl90aGlzIiwic3Vic2NyaWJlIiwiaSIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJsZW5ndGgiLCJlbGVtZW50TGkiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9