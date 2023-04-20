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
        return console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.productsList.sort(function (a, b) {
          return b.id - a.id;
        }));
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
        _this2.elementButtonUp.value = el.id;
      }).sort(function (a, b) {
        return b.id - a.id;
      });
      elementLi.append(this.elementButtonUp, this.elementButtonDown);
      elementDiv.appendChild(elementLi);
      this.shopList.appendChild(elementDiv);
      this.elementButtonUp.addEventListener("click", function (e) {
        return _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.changeOrder)(parseInt(e.target.value)));
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3e2d28bf9329c7e40b22")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQXNDLE1BQUksQ0FBQ2xDLFVBQVUsQ0FBQ0osS0FBSyxHQUFHLEVBQUU7UUFDNUI7TUFDRixDQUFDLENBQUM7TUFDRjs7TUFFQTtJQUNGO0VBQUM7RUFBQSxPQUFBVCxZQUFBO0FBQUE7QUFNSCxpRUFBZUEsWUFBWTs7Ozs7Ozs7VUMvRjNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcHMvU2hvcHBpbmdMaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtBRERfUFJPRFVDVCwgYWRkUHJvZHVjdCwgY2hhbmdlT3JkZXJ9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNsYXNzIFNob3BwaW5nTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XG4gICAgdGhpcy5yZWR1eENvbm5lY3QoKTtcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XG4gIH1cblxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpc3RhIHpha3Vww7N3PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUHJvZHVrdC4uLlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNob3AtYWRkXCI+RG9kYWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtdC0zXCIgaWQ9XCJzaG9wLWxpc3RcIj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBjb2xsZWN0UmVmcygpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRyb2xcIik7XG4gICAgdGhpcy5zaG9wTGlzdCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG9wLWxpc3RcIik7XG4gIH1cblxuICByZWR1eENvbm5lY3QoKSB7XG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlTGkoKVxuICAgIH0pXG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMucHJvZHVjdHNMaXN0LnNvcnQoKGEsYikgPT4gYi5pZCAtIGEuaWQpKSlcblxuICB9XG5cbiAgY3JlYXRlTGkoKSB7XG4gICAgY29uc3QgZWxlbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcbiAgICBlbGVtZW50TGkuY2xhc3NMaXN0ID0gXCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG5cbiAgICBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsZW1lbnRMaS5pbm5lclRleHQgPSBlbC50ZXh0XG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5pbm5lclRleHQgPSBcIlVQXCI7XG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5jbGFzc0xpc3QuYWRkKFwidXBDbGFzc1wiKTtcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLnZhbHVlID0gZWwuaWQ7XG5cbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi5pbm5lclRleHQgPSBcIkRPV05cIjtcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uY2xhc3NMaXN0LmFkZChcImRvd25DbGFzc1wiKTtcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLnZhbHVlID0gZWwuaWQ7XG4gICAgfSkuc29ydCgoYSxiKSA9PiBiLmlkIC0gYS5pZClcblxuXG5cbiAgICBlbGVtZW50TGkuYXBwZW5kKHRoaXMuZWxlbWVudEJ1dHRvblVwLCB0aGlzLmVsZW1lbnRCdXR0b25Eb3duKTtcbiAgICBlbGVtZW50RGl2LmFwcGVuZENoaWxkKGVsZW1lbnRMaSlcblxuICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudERpdilcbiAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gc3RvcmUuZGlzcGF0Y2goY2hhbmdlT3JkZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKSkpXG5cbiAgICAvL3NldEFycmF5KG15QXJyYXkubWFwKCh0YXNrKSA9PiB0YXNrLmlkID09PSBlID8gey4uLnRhc2ssIGRvbmU6IHRydWV9IDogey4uLnRhc2t9KS5zb3J0KChhLGIpID0+IE51bWJlcihhLmRvbmUpIC0gTnVtYmVyKGIuZG9uZSkpKVxuXG4gICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJEb3duXCIsIGUudGFyZ2V0LnZhbHVlKSlcblxuICB9XG5cbiAgYXBwbHlIYW5kbGVycygpIHtcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZFByb2R1Y3QodGhpcy5pbnB1dFZhbHVlLnZhbHVlICkpXG4gICAgICAgIC8vIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0FERF9QUk9EVUNUJywgcGF5bG9hZDogdGhpcy5pbnB1dFZhbHVlLnZhbHVlIH0pXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwQ2xhc3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKFwidXBcIikpXG5cbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiBjb25zb2xlLmxvZyhcIlVwXCIpKVxuICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BwaW5nTGlzdDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNlMmQyOGJmOTMyOWM3ZTQwYjIyXCIpIl0sIm5hbWVzIjpbInN0b3JlIiwiQUREX1BST0RVQ1QiLCJhZGRQcm9kdWN0IiwiY2hhbmdlT3JkZXIiLCJTaG9wcGluZ0xpc3QiLCJyb290RWxlbWVudCIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZVVJIiwicmVkdXhDb25uZWN0IiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbm5lckhUTUwiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImlucHV0VmFsdWUiLCJzaG9wTGlzdCIsIl90aGlzIiwic3Vic2NyaWJlIiwiY3JlYXRlTGkiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJwcm9kdWN0cyIsInByb2R1Y3RzTGlzdCIsInNvcnQiLCJhIiwiYiIsImlkIiwiX3RoaXMyIiwiZWxlbWVudERpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRMaSIsImNsYXNzTGlzdCIsImZvckVhY2giLCJlbCIsImlubmVyVGV4dCIsInRleHQiLCJlbGVtZW50QnV0dG9uVXAiLCJhZGQiLCJlbGVtZW50QnV0dG9uRG93biIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkaXNwYXRjaCIsInBhcnNlSW50IiwidGFyZ2V0IiwiX3RoaXMzIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9