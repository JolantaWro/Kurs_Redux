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
      // store.subscribe(() => {
      //   this.createLi(store.getState().products)
      // })
      var unsubscribe = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.productsList.sort(function (a, b) {
          return b.id - a.id;
        }));
        _this.createLi();
      });
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("55fd0abe4bfbba18e23f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQU1ILGlFQUFlQSxZQUFZOzs7Ozs7OztVQzNGM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9TaG9wcGluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7QUREX1BST0RVQ1QsIGFkZFByb2R1Y3QsIGNoYW5nZU9yZGVyLCBjaGFuZ2VPcmRlclVwfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgU2hvcHBpbmdMaXN0IHtcclxuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XHJcbiAgICB0aGlzLnJlZHV4Q29ubmVjdCgpO1xyXG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xyXG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpc3RhIHpha3Vww7N3PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9kdWt0Li4uXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNob3AtYWRkXCI+RG9kYWo8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbXQtM1wiIGlkPVwic2hvcC1saXN0XCI+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgY29sbGVjdFJlZnMoKSB7XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udHJvbFwiKTtcclxuICAgIHRoaXMuc2hvcExpc3QgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvcC1saXN0XCIpO1xyXG4gIH1cclxuXHJcbiAgcmVkdXhDb25uZWN0KCkge1xyXG4gICAgLy8gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgIC8vICAgdGhpcy5jcmVhdGVMaShzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzKVxyXG4gICAgLy8gfSlcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5wcm9kdWN0c0xpc3Quc29ydCgoYSxiKSA9PiBiLmlkIC0gYS5pZCkpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUxpKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGkoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29uc3QgZWxlbWVudExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxpXCIpXHJcbiAgICBlbGVtZW50TGkuY2xhc3NMaXN0ID0gXCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiO1xyXG5cclxuICAgIHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMucHJvZHVjdHNMaXN0LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICBlbGVtZW50TGkuaW5uZXJUZXh0ID0gZWwudGV4dDtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5pbm5lclRleHQgPSBcIlVQXCI7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmNsYXNzTGlzdC5hZGQoXCJ1cENsYXNzXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC52YWx1ZSA9IGVsLmlkO1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uaW5uZXJUZXh0ID0gXCJET1dOXCI7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uY2xhc3NMaXN0LmFkZChcImRvd25DbGFzc1wiKTtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi52YWx1ZSA9IGVsLmlkO1xyXG4gICAgfSlcclxuICAgIGVsZW1lbnRMaS5hcHBlbmQodGhpcy5lbGVtZW50QnV0dG9uVXAsIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24pO1xyXG4gICAgZWxlbWVudERpdi5hcHBlbmRDaGlsZChlbGVtZW50TGkpXHJcblxyXG4gICAgdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChlbGVtZW50RGl2KVxyXG4gICAgdGhpcy5lbGVtZW50QnV0dG9uVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHN0b3JlLmRpc3BhdGNoKGNoYW5nZU9yZGVyVXAocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKSkpXHJcbiAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBzdG9yZS5kaXNwYXRjaChjaGFuZ2VPcmRlclVwKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSkpKVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIGFwcGx5SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmKHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSkge1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZFByb2R1Y3QodGhpcy5pbnB1dFZhbHVlLnZhbHVlICkpXHJcbiAgICAgICAgLy8gc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQUREX1BST0RVQ1QnLCBwYXlsb2FkOiB0aGlzLmlucHV0VmFsdWUudmFsdWUgfSlcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1NWZkMGFiZTRiZmJiYTE4ZTIzZlwiKSJdLCJuYW1lcyI6WyJzdG9yZSIsIkFERF9QUk9EVUNUIiwiYWRkUHJvZHVjdCIsImNoYW5nZU9yZGVyIiwiY2hhbmdlT3JkZXJVcCIsIlNob3BwaW5nTGlzdCIsInJvb3RFbGVtZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlVUkiLCJyZWR1eENvbm5lY3QiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRWYWx1ZSIsInNob3BMaXN0IiwiX3RoaXMiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsInByb2R1Y3RzIiwicHJvZHVjdHNMaXN0Iiwic29ydCIsImEiLCJiIiwiaWQiLCJjcmVhdGVMaSIsIl90aGlzMiIsImVsZW1lbnREaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50TGkiLCJjbGFzc0xpc3QiLCJmb3JFYWNoIiwiZWwiLCJpbm5lclRleHQiLCJ0ZXh0IiwiZWxlbWVudEJ1dHRvblVwIiwiYWRkIiwiZWxlbWVudEJ1dHRvbkRvd24iLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGlzcGF0Y2giLCJwYXJzZUludCIsInRhcmdldCIsIl90aGlzMyIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==