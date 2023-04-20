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
      var elementDiv = document.createElement("div");
      var elementLi = document.createElement("Li");
      elementLi.classList = "list-group-item d-flex justify-content-between align-items-center";
      // store.getState().products.forEach(el => elementLi.innerText = el)
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.productsList.forEach(function (el) {
        return elementLi.innerText = el.text;
      });
      this.elementButtonUp = document.createElement("button");
      this.elementButtonUp.innerText = "UP";
      this.elementButtonUp.classList.add("upClass");
      this.elementButtonDown = document.createElement("button");
      this.elementButtonDown.innerText = "DOWN";
      this.elementButtonDown.classList.add("downClass");
      elementLi.append(this.elementButtonUp, this.elementButtonDown);
      elementDiv.appendChild(elementLi);
      this.shopList.appendChild(elementDiv);
      this.elementButtonUp.addEventListener("click", function (e) {
        return console.log("Up", e);
      });
      this.elementButtonDown.addEventListener("click", function () {
        return console.log("Down");
      });

      // this.shopList.appendChild(elementLi)
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      var _this2 = this;
      this.form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (_this2.inputValue.value) {
          _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.addProduct)(_this2.inputValue.value));
          // store.dispatch({ type: 'ADD_PRODUCT', payload: this.inputValue.value })
          _this2.inputValue.value = "";
        }
      });
      // document.querySelector(".upClass").addEventListener("click", () => console.log("up"))

      // this.elementButtonUp.addEventListener("click", ()=> console.log("Up"))
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
/******/ 	__webpack_require__.h = () => ("ed2dbdbf09e951440432")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztRQUFBLE9BQUlwQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLEVBQUVtQixDQUFDLENBQUM7TUFBQSxFQUFDO01BQzFFLElBQUksQ0FBQ0osaUJBQWlCLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUFBLE9BQUtuQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFBQSxFQUFDOztNQUUxRTtJQUNGO0VBQUM7SUFBQVgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUgsY0FBQSxFQUFnQjtNQUFBLElBQUFpQyxNQUFBO01BQ2QsSUFBSSxDQUFDNUIsSUFBSSxDQUFDMEIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUNDLENBQUMsRUFBSztRQUMxQ0EsQ0FBQyxDQUFDRSxjQUFjLEVBQUU7UUFDbEIsSUFBR0QsTUFBSSxDQUFDMUIsVUFBVSxDQUFDSixLQUFLLEVBQUU7VUFDeEJaLDZEQUFjLENBQUNFLDBEQUFVLENBQUN3QyxNQUFJLENBQUMxQixVQUFVLENBQUNKLEtBQUssQ0FBRSxDQUFDO1VBQ2xEO1VBQ0E4QixNQUFJLENBQUMxQixVQUFVLENBQUNKLEtBQUssR0FBRyxFQUFFO1FBQzVCO01BQ0YsQ0FBQyxDQUFDO01BQ0Y7O01BRUE7SUFDRjtFQUFDO0VBQUEsT0FBQVQsWUFBQTtBQUFBO0FBTUgsaUVBQWVBLFlBQVk7Ozs7Ozs7O1VDckYzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9hcHBzL1Nob3BwaW5nTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7QUREX1BST0RVQ1QsIGFkZFByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNsYXNzIFNob3BwaW5nTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XG4gICAgdGhpcy5yZWR1eENvbm5lY3QoKTtcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XG4gIH1cblxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpc3RhIHpha3Vww7N3PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUHJvZHVrdC4uLlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNob3AtYWRkXCI+RG9kYWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtdC0zXCIgaWQ9XCJzaG9wLWxpc3RcIj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBjb2xsZWN0UmVmcygpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRyb2xcIik7XG4gICAgdGhpcy5zaG9wTGlzdCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG9wLWxpc3RcIik7XG4gIH1cblxuICByZWR1eENvbm5lY3QoKSB7XG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlTGkoKVxuICAgIH0pXG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMpKVxuXG4gIH1cblxuICBjcmVhdGVMaSgpIHtcbiAgICBjb25zdCBlbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGVsZW1lbnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMaVwiKVxuICAgIGVsZW1lbnRMaS5jbGFzc0xpc3QgPSBcImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAvLyBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLmZvckVhY2goZWwgPT4gZWxlbWVudExpLmlubmVyVGV4dCA9IGVsKVxuICAgIHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMucHJvZHVjdHNMaXN0LmZvckVhY2goZWwgPT4gZWxlbWVudExpLmlubmVyVGV4dCA9IGVsLnRleHQpXG4gICAgdGhpcy5lbGVtZW50QnV0dG9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmlubmVyVGV4dCA9IFwiVVBcIjtcbiAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5jbGFzc0xpc3QuYWRkKFwidXBDbGFzc1wiKTtcbiAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmlubmVyVGV4dCA9IFwiRE9XTlwiO1xuICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uY2xhc3NMaXN0LmFkZChcImRvd25DbGFzc1wiKTtcbiAgICBlbGVtZW50TGkuYXBwZW5kKHRoaXMuZWxlbWVudEJ1dHRvblVwLCB0aGlzLmVsZW1lbnRCdXR0b25Eb3duKTtcbiAgICBlbGVtZW50RGl2LmFwcGVuZENoaWxkKGVsZW1lbnRMaSlcblxuICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudERpdilcbiAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJVcFwiLCBlKSlcbiAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IGNvbnNvbGUubG9nKFwiRG93blwiKSlcblxuICAgIC8vIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxuICB9XG5cbiAgYXBwbHlIYW5kbGVycygpIHtcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZFByb2R1Y3QodGhpcy5pbnB1dFZhbHVlLnZhbHVlICkpXG4gICAgICAgIC8vIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0FERF9QUk9EVUNUJywgcGF5bG9hZDogdGhpcy5pbnB1dFZhbHVlLnZhbHVlIH0pXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwQ2xhc3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKFwidXBcIikpXG5cbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiBjb25zb2xlLmxvZyhcIlVwXCIpKVxuICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BwaW5nTGlzdDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVkMmRiZGJmMDllOTUxNDQwNDMyXCIpIl0sIm5hbWVzIjpbInN0b3JlIiwiQUREX1BST0RVQ1QiLCJhZGRQcm9kdWN0IiwiU2hvcHBpbmdMaXN0Iiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dFZhbHVlIiwic2hvcExpc3QiLCJfdGhpcyIsInN1YnNjcmliZSIsImNyZWF0ZUxpIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJlbGVtZW50RGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudExpIiwiY2xhc3NMaXN0IiwicHJvZHVjdHNMaXN0IiwiZm9yRWFjaCIsImVsIiwiaW5uZXJUZXh0IiwidGV4dCIsImVsZW1lbnRCdXR0b25VcCIsImFkZCIsImVsZW1lbnRCdXR0b25Eb3duIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIl90aGlzMiIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9