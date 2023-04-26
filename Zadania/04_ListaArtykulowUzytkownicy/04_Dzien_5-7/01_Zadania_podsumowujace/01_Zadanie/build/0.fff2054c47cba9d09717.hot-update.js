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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8e01ca416411a52324c8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxpRUFBZUEsWUFBWTs7Ozs7Ozs7VUM1RzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcHMvU2hvcHBpbmdMaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtBRERfUFJPRFVDVCwgYWRkUHJvZHVjdCwgY2hhbmdlT3JkZXJ9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNsYXNzIFNob3BwaW5nTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XG4gICAgdGhpcy5yZWR1eENvbm5lY3QoKTtcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XG4gIH1cblxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpc3RhIHpha3Vww7N3PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUHJvZHVrdC4uLlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNob3AtYWRkXCI+RG9kYWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtdC0zXCIgaWQ9XCJzaG9wLWxpc3RcIj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBjb2xsZWN0UmVmcygpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRyb2xcIik7XG4gICAgdGhpcy5zaG9wTGlzdCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG9wLWxpc3RcIik7XG4gIH1cblxuICByZWR1eENvbm5lY3QoKSB7XG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlTGkoc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cylcbiAgICB9KVxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMuc29ydCgoYSxiKSA9PiBiLmlkIC0gYS5pZCkpO1xuICAgIH0pO1xuXG5cbiAgfVxuXG4gIGNyZWF0ZUxpKCkge1xuICAgICAgc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGxldCBlbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgIGxldCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcbiAgICAgICAgICBlbGVtZW50TGkuY2xhc3NMaXN0ID0gXCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgZWxlbWVudExpLmlubmVyVGV4dCA9IGVsZW1lbnRcbiAgICAgICAgICBsZXQgZWxlbWVudEJ1dHRvblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICBlbGVtZW50QnV0dG9uVXAuaW5uZXJUZXh0ID0gXCJVUFwiO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25VcC5jbGFzc0xpc3QuYWRkKFwiVVBcIik7XG4gICAgICAgICAgZWxlbWVudEJ1dHRvblVwLnZhbHVlID0gZWxlbWVudDtcblxuICAgICAgICAgIGxldCBlbGVtZW50QnV0dG9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgZWxlbWVudEJ1dHRvbkRvd24uaW5uZXJUZXh0ID0gXCJET1dOXCI7XG5cbiAgICAgICAgICBlbGVtZW50QnV0dG9uRG93bi5jbGFzc0xpc3QuYWRkKFwiRE9XTlwiKTtcbiAgICAgICAgICBlbGVtZW50QnV0dG9uRG93bi52YWx1ZSA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICBlbGVtZW50TGkuYXBwZW5kKGVsZW1lbnRCdXR0b25VcCwgZWxlbWVudEJ1dHRvbkRvd24pO1xuICAgICAgICAgIGVsZW1lbnREaXYuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxuICAgICAgICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudERpdilcblxuXG4gICAgICAgICAgICAgIC8vIGVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4ge1xuICAgICAgICAgICAgICAvLyAgICAgY29uc3QgcHJvZHVjdCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIC8vICAgICBjb25zdCBhY3Rpb24gPSBlLnRhcmdldC5jbGFzc0xpc3QudmFsdWVcbiAgICAgICAgICAgICAgLy8gICAgIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU9yZGVyKHtwcm9kdWN0LCBhY3Rpb259KSlcbiAgICAgICAgICAgICAgLy8gfSlcblxuXG4gICAgICB9KVxuICAgICAgdGhpcy5zaG9wTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwibGkgYnV0dG9uXCIpLmZvckVhY2goKGJ0bikgPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICBjb25zdCBhY3Rpb24gPSBlLnRhcmdldC5jbGFzc0xpc3QudmFsdWU7XG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2goY2hhbmdlT3JkZXIoe3Byb2R1Y3QsIGFjdGlvbn0pKVxuICAgICAgfSkpXG5cbiAgICB9XG5cblxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIlVwXCIsIGUudGFyZ2V0LnZhbHVlKSlcbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIkRvd25cIiwgZS50YXJnZXQudmFsdWUpKVxuXG4gIGFwcGx5SGFuZGxlcnMoKSB7XG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmKHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSkge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChhZGRQcm9kdWN0KHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSApKVxuICAgICAgICAvLyBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdBRERfUFJPRFVDVCcsIHBheWxvYWQ6IHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSB9KVxuICAgICAgICB0aGlzLmlucHV0VmFsdWUudmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH0pXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cENsYXNzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcInVwXCIpKVxuXG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4gY29uc29sZS5sb2coXCJVcFwiKSlcbiAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wcGluZ0xpc3Q7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ZTAxY2E0MTY0MTFhNTIzMjRjOFwiKSJdLCJuYW1lcyI6WyJzdG9yZSIsIkFERF9QUk9EVUNUIiwiYWRkUHJvZHVjdCIsImNoYW5nZU9yZGVyIiwiU2hvcHBpbmdMaXN0Iiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dFZhbHVlIiwic2hvcExpc3QiLCJfdGhpcyIsInN1YnNjcmliZSIsImNyZWF0ZUxpIiwiZ2V0U3RhdGUiLCJwcm9kdWN0cyIsInVuc3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsInNvcnQiLCJhIiwiYiIsImlkIiwiX3RoaXMyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJlbGVtZW50RGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudExpIiwiY2xhc3NMaXN0IiwiaW5uZXJUZXh0IiwiZWxlbWVudEJ1dHRvblVwIiwiYWRkIiwiZWxlbWVudEJ1dHRvbkRvd24iLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByb2R1Y3QiLCJ0YXJnZXQiLCJhY3Rpb24iLCJkaXNwYXRjaCIsIl90aGlzMyIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==