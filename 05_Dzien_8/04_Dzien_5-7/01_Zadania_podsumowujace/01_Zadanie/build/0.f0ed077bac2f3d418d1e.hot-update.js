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
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        _this.createLi(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products);
      });
      var unsubscribe = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.productsList.sort(function (a, b) {
          return b.id - a.id;
        }));
      });

      // store.subscribe(() => console.log(store.getState().products.productsList.sort((a,b) => b.id - a.id)))
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
      });
      elementLi.append(this.elementButtonUp, this.elementButtonDown);
      elementDiv.appendChild(elementLi);
      this.shopList.appendChild(elementDiv);
      this.elementButtonUp.addEventListener("click", function (e) {
        return console.log("UP", e.target.value);
      });
      this.elementButtonDown.addEventListener("click", function (e) {
        return console.log("Downnnn", e.target.value);
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
/******/ 	__webpack_require__.h = () => ("5243bd080f07df6730f7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0gsS0FBSyxFQUFFO1VBQ3hCWiw2REFBYyxDQUFDRSwwREFBVSxDQUFDNkMsTUFBSSxDQUFDaEMsVUFBVSxDQUFDSCxLQUFLLENBQUUsQ0FBQztVQUNsRDtVQUNBbUMsTUFBSSxDQUFDaEMsVUFBVSxDQUFDSCxLQUFLLEdBQUcsRUFBRTtRQUM1QjtNQUNGLENBQUMsQ0FBQztNQUNGOztNQUVBO0lBQ0Y7RUFBQztFQUFBLE9BQUFoQixZQUFBO0FBQUE7QUFNSCxpRUFBZUEsWUFBWTs7Ozs7Ozs7VUNoRzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9TaG9wcGluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hvcHBpbmdMaXN0IGZyb20gXCIuL2FwcHMvU2hvcHBpbmdMaXN0XCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuL2FwcHMvQ291bnRlclwiO1xyXG5cclxubmV3IENvdW50ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyXCIpKTtcclxubmV3IFNob3BwaW5nTGlzdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3BcIikpO1xyXG4iLCJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7QUREX1BST0RVQ1QsIGFkZFByb2R1Y3QsIGNoYW5nZU9yZGVyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgU2hvcHBpbmdMaXN0IHtcclxuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XHJcbiAgICB0aGlzLnJlZHV4Q29ubmVjdCgpO1xyXG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xyXG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpc3RhIHpha3Vww7N3PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9kdWt0Li4uXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNob3AtYWRkXCI+RG9kYWo8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbXQtM1wiIGlkPVwic2hvcC1saXN0XCI+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgY29sbGVjdFJlZnMoKSB7XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udHJvbFwiKTtcclxuICAgIHRoaXMuc2hvcExpc3QgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvcC1saXN0XCIpO1xyXG4gIH1cclxuXHJcbiAgcmVkdXhDb25uZWN0KCkge1xyXG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jcmVhdGVMaShzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzKVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5wcm9kdWN0c0xpc3Quc29ydCgoYSxiKSA9PiBiLmlkIC0gYS5pZCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMucHJvZHVjdHNMaXN0LnNvcnQoKGEsYikgPT4gYi5pZCAtIGEuaWQpKSlcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVMaSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb25zdCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcclxuICAgIGVsZW1lbnRMaS5jbGFzc0xpc3QgPSBcImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcclxuXHJcbiAgICBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgZWxlbWVudExpLmlubmVyVGV4dCA9IGVsLnRleHRcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5pbm5lclRleHQgPSBcIlVQXCI7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmNsYXNzTGlzdC5hZGQoXCJ1cENsYXNzXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC52YWx1ZSA9IGVsLmlkO1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uaW5uZXJUZXh0ID0gXCJET1dOXCI7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uY2xhc3NMaXN0LmFkZChcImRvd25DbGFzc1wiKTtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAudmFsdWUgPSBlbC5pZDtcclxuICAgIH0pXHJcbiAgICBlbGVtZW50TGkuYXBwZW5kKHRoaXMuZWxlbWVudEJ1dHRvblVwLCB0aGlzLmVsZW1lbnRCdXR0b25Eb3duKTtcclxuICAgIGVsZW1lbnREaXYuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxyXG5cclxuICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudERpdilcclxuICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIlVQXCIsZS50YXJnZXQudmFsdWUpKVxyXG4gICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJEb3dubm5uXCIsIGUudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICBhcHBseUhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZih0aGlzLmlucHV0VmFsdWUudmFsdWUpIHtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChhZGRQcm9kdWN0KHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSApKVxyXG4gICAgICAgIC8vIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0FERF9QUk9EVUNUJywgcGF5bG9hZDogdGhpcy5pbnB1dFZhbHVlLnZhbHVlIH0pXHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBDbGFzc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJ1cFwiKSlcclxuXHJcbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiBjb25zb2xlLmxvZyhcIlVwXCIpKVxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MjQzYmQwODBmMDdkZjY3MzBmN1wiKSJdLCJuYW1lcyI6WyJTaG9wcGluZ0xpc3QiLCJDb3VudGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RvcmUiLCJBRERfUFJPRFVDVCIsImFkZFByb2R1Y3QiLCJjaGFuZ2VPcmRlciIsInJvb3RFbGVtZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlVUkiLCJyZWR1eENvbm5lY3QiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImZvcm0iLCJpbnB1dFZhbHVlIiwic2hvcExpc3QiLCJfdGhpcyIsInN1YnNjcmliZSIsImNyZWF0ZUxpIiwiZ2V0U3RhdGUiLCJwcm9kdWN0cyIsInVuc3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzTGlzdCIsInNvcnQiLCJhIiwiYiIsImlkIiwiX3RoaXMyIiwiZWxlbWVudERpdiIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50TGkiLCJjbGFzc0xpc3QiLCJmb3JFYWNoIiwiZWwiLCJpbm5lclRleHQiLCJ0ZXh0IiwiZWxlbWVudEJ1dHRvblVwIiwiYWRkIiwiZWxlbWVudEJ1dHRvbkRvd24iLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiX3RoaXMzIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=