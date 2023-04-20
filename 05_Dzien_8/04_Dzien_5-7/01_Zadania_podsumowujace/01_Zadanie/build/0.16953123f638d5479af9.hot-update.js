"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apps_ShoppingList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _apps_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);


new _apps_Counter__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector("#counter"));
new _apps_ShoppingList__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector("#shop"));

/***/ }),

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
      // store.subscribe(() => {
      //   for (let i = 0; i < store.getState().products.length; i ++) {
      //     const elementLi = document.createElement("Li")
      //     elementLi.innerText = store.getState().products[i]
      //     this.shopList.appendChild(elementLi)
      //   }
      //
      // })
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        return console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products);
      });
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        return _this.shopList.innerText = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products;
      });
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      var _this2 = this;
      this.form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (_this2.inputValue.value) {
          _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.addProduct)(_this2.inputValue.value));
          _this2.inputValue.value = "";
        }
        for (var i = 0; i < _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.length; i++) {
          var elementLi = document.createElement("Li");
          elementLi.innerText = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products[i];
          _this2.shopList.appendChild(elementLi);
        }
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
/******/ 	__webpack_require__.h = () => ("3b6fa75e95884282d4f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxpRUFBZUEsWUFBWTs7Ozs7Ozs7VUN0RTNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9TaG9wcGluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hvcHBpbmdMaXN0IGZyb20gXCIuL2FwcHMvU2hvcHBpbmdMaXN0XCI7XG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi9hcHBzL0NvdW50ZXJcIjtcblxubmV3IENvdW50ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyXCIpKTtcbm5ldyBTaG9wcGluZ0xpc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG9wXCIpKTtcbiIsImltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7QUREX1BST0RVQ1QsIGFkZFByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNsYXNzIFNob3BwaW5nTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XG4gICAgdGhpcy5yZWR1eENvbm5lY3QoKTtcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XG4gIH1cblxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpc3RhIHpha3Vww7N3PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUHJvZHVrdC4uLlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNob3AtYWRkXCI+RG9kYWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtdC0zXCIgaWQ9XCJzaG9wLWxpc3RcIj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBjb2xsZWN0UmVmcygpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRyb2xcIik7XG4gICAgdGhpcy5zaG9wTGlzdCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG9wLWxpc3RcIik7XG4gIH1cblxuICByZWR1eENvbm5lY3QoKSB7XG4gICAgLy8gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5sZW5ndGg7IGkgKyspIHtcbiAgICAvLyAgICAgY29uc3QgZWxlbWVudExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxpXCIpXG4gICAgLy8gICAgIGVsZW1lbnRMaS5pbm5lclRleHQgPSBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzW2ldXG4gICAgLy8gICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gfSlcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cykpXG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2hvcExpc3QuaW5uZXJUZXh0ID0gc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cylcblxuICB9XG5cbiAgYXBwbHlIYW5kbGVycygpIHtcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZFByb2R1Y3QodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSk7XG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCI7XG5cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxpXCIpXG4gICAgICAgIGVsZW1lbnRMaS5pbm5lclRleHQgPSBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzW2ldXG4gICAgICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxuICAgICAgfVxuXG5cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BwaW5nTGlzdDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNiNmZhNzVlOTU4ODQyODJkNGY0XCIpIl0sIm5hbWVzIjpbIlNob3BwaW5nTGlzdCIsIkNvdW50ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdG9yZSIsIkFERF9QUk9EVUNUIiwiYWRkUHJvZHVjdCIsInJvb3RFbGVtZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlVUkiLCJyZWR1eENvbm5lY3QiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImZvcm0iLCJpbnB1dFZhbHVlIiwic2hvcExpc3QiLCJfdGhpcyIsInN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsInByb2R1Y3RzIiwiaW5uZXJUZXh0IiwiX3RoaXMyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BhdGNoIiwiaSIsImxlbmd0aCIsImVsZW1lbnRMaSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=