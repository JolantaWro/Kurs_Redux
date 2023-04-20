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
      for (var i = 0; i < _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.length; i++) {
        var elementLi = document.createElement("Li");
        elementLi.innerText = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products[i];
        this.shopList.appendChild(elementLi);
        _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
          return _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products;
        });
        //store.subscribe(() => this.shopList.innerHTML = `<li>${store.getState().products}</li>`)
      }

      // store.subscribe(() => this.shopList.innerHTML = `<li>${store.getState().products}</li>`)
      // store.subscribe(() => this.shopList.innerText = store.getState().products)
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      var _this = this;
      this.form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (_this.inputValue.value) {
          _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.addProduct)(_this.inputValue.value));
          var elementLi = document.createElement("Li");
          // elementLi.innerText = store.getState().products[i]
          _this.shopList.appendChild(elementLi);
          _this.inputValue.value = "";
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
/******/ 	__webpack_require__.h = () => ("cc876e1b3257e63016e0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcHMvU2hvcHBpbmdMaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtBRERfUFJPRFVDVCwgYWRkUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY2xhc3MgU2hvcHBpbmdMaXN0IHtcbiAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQpIHtcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcbiAgICB0aGlzLnJlZHV4Q29ubmVjdCgpO1xuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcbiAgfVxuXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+TGlzdGEgemFrdXDDs3c8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9kdWt0Li4uXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwic2hvcC1hZGRcIj5Eb2RhajwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIG10LTNcIiBpZD1cInNob3AtbGlzdFwiPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGNvbGxlY3RSZWZzKCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udHJvbFwiKTtcbiAgICB0aGlzLnNob3BMaXN0ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3AtbGlzdFwiKTtcbiAgfVxuXG4gIHJlZHV4Q29ubmVjdCgpIHtcbiAgICAvLyBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLmxlbmd0aDsgaSArKykge1xuICAgIC8vICAgICBjb25zdCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcbiAgICAvLyAgICAgZWxlbWVudExpLmlubmVyVGV4dCA9IHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHNbaV1cbiAgICAvLyAgICAgdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChlbGVtZW50TGkpXG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyB9KVxuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzKSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMaVwiKVxuICAgICAgZWxlbWVudExpLmlubmVyVGV4dCA9IHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHNbaV1cbiAgICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxuICAgICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMpXG4gICAgICAvL3N0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNob3BMaXN0LmlubmVySFRNTCA9IGA8bGk+JHtzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzfTwvbGk+YClcbiAgICB9XG5cbiAgICAvLyBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaG9wTGlzdC5pbm5lckhUTUwgPSBgPGxpPiR7c3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0c308L2xpPmApXG4gICAgLy8gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2hvcExpc3QuaW5uZXJUZXh0ID0gc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cylcblxuICB9XG5cbiAgYXBwbHlIYW5kbGVycygpIHtcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZFByb2R1Y3QodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMaVwiKVxuICAgICAgICAvLyBlbGVtZW50TGkuaW5uZXJUZXh0ID0gc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0c1tpXVxuICAgICAgICB0aGlzLnNob3BMaXN0LmFwcGVuZENoaWxkKGVsZW1lbnRMaSlcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlID0gXCJcIjtcblxuICAgICAgfVxuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLmxlbmd0aDsgaSArKykge1xuICAgICAgLy8gICBjb25zdCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcbiAgICAgIC8vICAgZWxlbWVudExpLmlubmVyVGV4dCA9IHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHNbaV1cbiAgICAgIC8vICAgdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChlbGVtZW50TGkpXG4gICAgICAvLyB9XG5cblxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2M4NzZlMWIzMjU3ZTYzMDE2ZTBcIikiXSwibmFtZXMiOlsic3RvcmUiLCJBRERfUFJPRFVDVCIsImFkZFByb2R1Y3QiLCJTaG9wcGluZ0xpc3QiLCJyb290RWxlbWVudCIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZVVJIiwicmVkdXhDb25uZWN0IiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbm5lckhUTUwiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImlucHV0VmFsdWUiLCJzaG9wTGlzdCIsInN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsInByb2R1Y3RzIiwiaSIsImxlbmd0aCIsImVsZW1lbnRMaSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9