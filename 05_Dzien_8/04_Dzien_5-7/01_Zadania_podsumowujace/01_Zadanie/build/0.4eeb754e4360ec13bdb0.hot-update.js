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
        _this2.elementButtonDown.value = el.id;
      });
      elementLi.append(this.elementButtonUp, this.elementButtonDown);
      elementDiv.appendChild(elementLi);
      this.shopList.appendChild(elementDiv);
      // this.elementButtonUp.addEventListener("click", (e)=> console.log("UP",e.target.value))
      // this.elementButtonDown.addEventListener("click", (e)=> console.log("Down", e.target.value))
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
      this.elementButtonUp.addEventListener("click", function (e) {
        return console.log("UP", e.target.value);
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
/******/ 	__webpack_require__.h = () => ("d977a3136201cdd7ad6d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsV0FBVyxDQUFDO1FBQ2pEWCxNQUFJLENBQUNZLGlCQUFpQixDQUFDL0IsS0FBSyxHQUFHMEIsRUFBRSxDQUFDUixFQUFFO01BQ3RDLENBQUMsQ0FBQztNQUNGSyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxJQUFJLENBQUNILGVBQWUsRUFBRSxJQUFJLENBQUNFLGlCQUFpQixDQUFDO01BQzlEWCxVQUFVLENBQUNhLFdBQVcsQ0FBQ1YsU0FBUyxDQUFDO01BRWpDLElBQUksQ0FBQ2xCLFFBQVEsQ0FBQzRCLFdBQVcsQ0FBQ2IsVUFBVSxDQUFDO01BQ3JDO01BQ0E7SUFDRjtFQUFDO0lBQUFyQixHQUFBO0lBQUFDLEtBQUEsRUFNRCxTQUFBSCxjQUFBLEVBQWdCO01BQUEsSUFBQXFDLE1BQUE7TUFDZCxJQUFJLENBQUNoQyxJQUFJLENBQUNpQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO1FBQzFDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQixJQUFHSCxNQUFJLENBQUM5QixVQUFVLENBQUNKLEtBQUssRUFBRTtVQUN4QmIsNkRBQWMsQ0FBQ0UsMERBQVUsQ0FBQzZDLE1BQUksQ0FBQzlCLFVBQVUsQ0FBQ0osS0FBSyxDQUFFLENBQUM7VUFDbEQ7VUFDQWtDLE1BQUksQ0FBQzlCLFVBQVUsQ0FBQ0osS0FBSyxHQUFHLEVBQUU7UUFDNUI7TUFDRixDQUFDLENBQUM7TUFDRixJQUFJLENBQUM2QixlQUFlLENBQUNNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDO1FBQUEsT0FBSXhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBQ3VCLENBQUMsQ0FBQ0csTUFBTSxDQUFDdkMsS0FBSyxDQUFDO01BQUEsRUFBQztJQUN4RjtFQUFDO0VBQUEsT0FBQVQsWUFBQTtBQUFBO0FBTUgsaUVBQWVBLFlBQVk7Ozs7Ozs7O1VDOUYzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9hcHBzL1Nob3BwaW5nTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IHtBRERfUFJPRFVDVCwgYWRkUHJvZHVjdCwgY2hhbmdlT3JkZXJ9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcblxyXG5jbGFzcyBTaG9wcGluZ0xpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcclxuICAgIHRoaXMucmVkdXhDb25uZWN0KCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+TGlzdGEgemFrdXDDs3c8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlByb2R1a3QuLi5cIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwic2hvcC1hZGRcIj5Eb2RhajwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtdC0zXCIgaWQ9XCJzaG9wLWxpc3RcIj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBjb2xsZWN0UmVmcygpIHtcclxuICAgIHRoaXMuZm9ybSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250cm9sXCIpO1xyXG4gICAgdGhpcy5zaG9wTGlzdCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG9wLWxpc3RcIik7XHJcbiAgfVxyXG5cclxuICByZWR1eENvbm5lY3QoKSB7XHJcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZUxpKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5zb3J0KChhLGIpID0+IGIuaWQgLSBhLmlkKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5wcm9kdWN0c0xpc3Quc29ydCgoYSxiKSA9PiBiLmlkIC0gYS5pZCkpKVxyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZUxpKCkge1xyXG4gICAgY29uc3QgZWxlbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnN0IGVsZW1lbnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMaVwiKVxyXG4gICAgZWxlbWVudExpLmNsYXNzTGlzdCA9IFwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIjtcclxuXHJcbiAgICBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgZWxlbWVudExpLmlubmVyVGV4dCA9IGVsLnRleHQ7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAuaW5uZXJUZXh0ID0gXCJVUFwiO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5jbGFzc0xpc3QuYWRkKFwidXBDbGFzc1wiKTtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAudmFsdWUgPSBlbC5pZDtcclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmlubmVyVGV4dCA9IFwiRE9XTlwiO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmNsYXNzTGlzdC5hZGQoXCJkb3duQ2xhc3NcIik7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24udmFsdWUgPSBlbC5pZDtcclxuICAgIH0pXHJcbiAgICBlbGVtZW50TGkuYXBwZW5kKHRoaXMuZWxlbWVudEJ1dHRvblVwLCB0aGlzLmVsZW1lbnRCdXR0b25Eb3duKTtcclxuICAgIGVsZW1lbnREaXYuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxyXG5cclxuICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudERpdilcclxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIlVQXCIsZS50YXJnZXQudmFsdWUpKVxyXG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJEb3duXCIsIGUudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICBhcHBseUhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZih0aGlzLmlucHV0VmFsdWUudmFsdWUpIHtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChhZGRQcm9kdWN0KHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSApKVxyXG4gICAgICAgIC8vIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0FERF9QUk9EVUNUJywgcGF5bG9hZDogdGhpcy5pbnB1dFZhbHVlLnZhbHVlIH0pXHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIlVQXCIsZS50YXJnZXQudmFsdWUpKVxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkOTc3YTMxMzYyMDFjZGQ3YWQ2ZFwiKSJdLCJuYW1lcyI6WyJzdG9yZSIsIkFERF9QUk9EVUNUIiwiYWRkUHJvZHVjdCIsImNoYW5nZU9yZGVyIiwiU2hvcHBpbmdMaXN0Iiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dFZhbHVlIiwic2hvcExpc3QiLCJfdGhpcyIsInN1YnNjcmliZSIsImNyZWF0ZUxpIiwiZ2V0U3RhdGUiLCJwcm9kdWN0cyIsInVuc3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzTGlzdCIsInNvcnQiLCJhIiwiYiIsImlkIiwiX3RoaXMyIiwiZWxlbWVudERpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRMaSIsImNsYXNzTGlzdCIsImZvckVhY2giLCJlbCIsImlubmVyVGV4dCIsInRleHQiLCJlbGVtZW50QnV0dG9uVXAiLCJhZGQiLCJlbGVtZW50QnV0dG9uRG93biIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiX3RoaXMzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BhdGNoIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==