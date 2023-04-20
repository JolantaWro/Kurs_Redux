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
        _this2.elementButtonUp.value = parseInt(el.id);
        _this2.elementButtonDown = document.createElement("button");
        _this2.elementButtonDown.innerText = "DOWN";
        _this2.elementButtonDown.classList.add("downClass");
        _this2.elementButtonDown.value = el.id;
      });
      elementLi.append(this.elementButtonUp, this.elementButtonDown);
      elementDiv.appendChild(elementLi);
      this.shopList.appendChild(elementDiv);
      // this.elementButtonUp.addEventListener("click", (e)=> console.log("UP",e.target.value))
      this.elementButtonUp.addEventListener("click", function (e) {
        return _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.changeOrder)(parseInt(e.target.value)));
      });
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
/******/ 	__webpack_require__.h = () => ("db3780d4225648cfb88d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kODhjYmRlMzA1NGYwYjhmMmE4My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNtQztBQUFBLElBRWhFSSxZQUFZO0VBQ2hCLFNBQUFBLGFBQVlDLFdBQVcsRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFlBQUE7SUFDdkIsSUFBSSxDQUFDRyxRQUFRLENBQUNGLFdBQVcsQ0FBQztJQUMxQixJQUFJLENBQUNHLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNDLGFBQWEsRUFBRTtFQUN0QjtFQUFDQyxZQUFBLENBQUFQLFlBQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU4sU0FBU0YsV0FBVyxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO01BQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDUyxTQUFTLCtoQkFlekI7SUFDSDtFQUFDO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFKLFlBQUEsRUFBYztNQUNaLElBQUksQ0FBQ00sSUFBSSxHQUFHLElBQUksQ0FBQ1YsV0FBVyxDQUFDVyxhQUFhLENBQUMsTUFBTSxDQUFDO01BQ2xELElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ1osV0FBVyxDQUFDVyxhQUFhLENBQUMsZUFBZSxDQUFDO01BQ2pFLElBQUksQ0FBQ0UsUUFBUSxHQUFHLElBQUksQ0FBQ2IsV0FBVyxDQUFDVyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQzlEO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsYUFBQSxFQUFlO01BQUEsSUFBQVcsS0FBQTtNQUNibkIsOERBQWUsQ0FBQyxZQUFNO1FBQ3BCbUIsS0FBSSxDQUFDRSxRQUFRLENBQUNyQiw2REFBYyxFQUFFLENBQUN1QixRQUFRLENBQUM7TUFDMUMsQ0FBQyxDQUFDO01BQ0YsSUFBTUMsV0FBVyxHQUFHeEIsOERBQWUsQ0FBQyxZQUFNO1FBQ3hDeUIsT0FBTyxDQUFDQyxHQUFHLENBQUMxQiw2REFBYyxFQUFFLENBQUN1QixRQUFRLENBQUNJLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLENBQUMsRUFBQ0MsQ0FBQztVQUFBLE9BQUtBLENBQUMsQ0FBQ0MsRUFBRSxHQUFHRixDQUFDLENBQUNFLEVBQUU7UUFBQSxFQUFDLENBQUM7TUFDaEYsQ0FBQyxDQUFDOztNQUVGO0lBRUY7RUFBQztJQUFBbkIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVEsU0FBQSxFQUFXO01BQUEsSUFBQVcsTUFBQTtNQUNULElBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ2hELElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO01BQzlDQyxTQUFTLENBQUNDLFNBQVMsR0FBRyxtRUFBbUU7TUFFekZyQyw2REFBYyxFQUFFLENBQUN1QixRQUFRLENBQUNJLFlBQVksQ0FBQ1csT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtRQUNuREgsU0FBUyxDQUFDSSxTQUFTLEdBQUdELEVBQUUsQ0FBQ0UsSUFBSTtRQUM3QlQsTUFBSSxDQUFDVSxlQUFlLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN2REgsTUFBSSxDQUFDVSxlQUFlLENBQUNGLFNBQVMsR0FBRyxJQUFJO1FBQ3JDUixNQUFJLENBQUNVLGVBQWUsQ0FBQ0wsU0FBUyxDQUFDTSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQzdDWCxNQUFJLENBQUNVLGVBQWUsQ0FBQzdCLEtBQUssR0FBRytCLFFBQVEsQ0FBQ0wsRUFBRSxDQUFDUixFQUFFLENBQUM7UUFFNUNDLE1BQUksQ0FBQ2EsaUJBQWlCLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN6REgsTUFBSSxDQUFDYSxpQkFBaUIsQ0FBQ0wsU0FBUyxHQUFHLE1BQU07UUFDekNSLE1BQUksQ0FBQ2EsaUJBQWlCLENBQUNSLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUNqRFgsTUFBSSxDQUFDYSxpQkFBaUIsQ0FBQ2hDLEtBQUssR0FBRzBCLEVBQUUsQ0FBQ1IsRUFBRTtNQUN0QyxDQUFDLENBQUM7TUFDRkssU0FBUyxDQUFDVSxNQUFNLENBQUMsSUFBSSxDQUFDSixlQUFlLEVBQUUsSUFBSSxDQUFDRyxpQkFBaUIsQ0FBQztNQUM5RFosVUFBVSxDQUFDYyxXQUFXLENBQUNYLFNBQVMsQ0FBQztNQUVqQyxJQUFJLENBQUNsQixRQUFRLENBQUM2QixXQUFXLENBQUNkLFVBQVUsQ0FBQztNQUNyQztNQUNBLElBQUksQ0FBQ1MsZUFBZSxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQztRQUFBLE9BQUlqRCw2REFBYyxDQUFDRywyREFBVyxDQUFDeUMsUUFBUSxDQUFDSyxDQUFDLENBQUNFLE1BQU0sQ0FBQ3RDLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFBQSxFQUFDO01BQzNHLElBQUksQ0FBQ2dDLGlCQUFpQixDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQztRQUFBLE9BQUl4QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUV1QixDQUFDLENBQUNFLE1BQU0sQ0FBQ3RDLEtBQUssQ0FBQztNQUFBLEVBQUM7SUFDN0Y7RUFBQztJQUFBRCxHQUFBO0lBQUFDLEtBQUEsRUFNRCxTQUFBSCxjQUFBLEVBQWdCO01BQUEsSUFBQTBDLE1BQUE7TUFDZCxJQUFJLENBQUNyQyxJQUFJLENBQUNpQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO1FBQzFDQSxDQUFDLENBQUNJLGNBQWMsRUFBRTtRQUNsQixJQUFHRCxNQUFJLENBQUNuQyxVQUFVLENBQUNKLEtBQUssRUFBRTtVQUN4QmIsNkRBQWMsQ0FBQ0UsMERBQVUsQ0FBQ2tELE1BQUksQ0FBQ25DLFVBQVUsQ0FBQ0osS0FBSyxDQUFFLENBQUM7VUFDbEQ7VUFDQXVDLE1BQUksQ0FBQ25DLFVBQVUsQ0FBQ0osS0FBSyxHQUFHLEVBQUU7UUFDNUI7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQVQsWUFBQTtBQUFBO0FBTUgsaUVBQWVBLFlBQVk7Ozs7Ozs7O1VDOUYzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9hcHBzL1Nob3BwaW5nTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IHtBRERfUFJPRFVDVCwgYWRkUHJvZHVjdCwgY2hhbmdlT3JkZXJ9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcblxyXG5jbGFzcyBTaG9wcGluZ0xpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcclxuICAgIHRoaXMucmVkdXhDb25uZWN0KCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+TGlzdGEgemFrdXDDs3c8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlByb2R1a3QuLi5cIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwic2hvcC1hZGRcIj5Eb2RhajwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtdC0zXCIgaWQ9XCJzaG9wLWxpc3RcIj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBjb2xsZWN0UmVmcygpIHtcclxuICAgIHRoaXMuZm9ybSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250cm9sXCIpO1xyXG4gICAgdGhpcy5zaG9wTGlzdCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG9wLWxpc3RcIik7XHJcbiAgfVxyXG5cclxuICByZWR1eENvbm5lY3QoKSB7XHJcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZUxpKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5zb3J0KChhLGIpID0+IGIuaWQgLSBhLmlkKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5wcm9kdWN0c0xpc3Quc29ydCgoYSxiKSA9PiBiLmlkIC0gYS5pZCkpKVxyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZUxpKCkge1xyXG4gICAgY29uc3QgZWxlbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnN0IGVsZW1lbnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMaVwiKVxyXG4gICAgZWxlbWVudExpLmNsYXNzTGlzdCA9IFwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIjtcclxuXHJcbiAgICBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgZWxlbWVudExpLmlubmVyVGV4dCA9IGVsLnRleHQ7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAuaW5uZXJUZXh0ID0gXCJVUFwiO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5jbGFzc0xpc3QuYWRkKFwidXBDbGFzc1wiKTtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAudmFsdWUgPSBwYXJzZUludChlbC5pZCk7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi5pbm5lclRleHQgPSBcIkRPV05cIjtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi5jbGFzc0xpc3QuYWRkKFwiZG93bkNsYXNzXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLnZhbHVlID0gZWwuaWQ7XHJcbiAgICB9KVxyXG4gICAgZWxlbWVudExpLmFwcGVuZCh0aGlzLmVsZW1lbnRCdXR0b25VcCwgdGhpcy5lbGVtZW50QnV0dG9uRG93bik7XHJcbiAgICBlbGVtZW50RGl2LmFwcGVuZENoaWxkKGVsZW1lbnRMaSlcclxuXHJcbiAgICB0aGlzLnNob3BMaXN0LmFwcGVuZENoaWxkKGVsZW1lbnREaXYpXHJcbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJVUFwiLGUudGFyZ2V0LnZhbHVlKSlcclxuICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBzdG9yZS5kaXNwYXRjaChjaGFuZ2VPcmRlcihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpKSlcclxuICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IGNvbnNvbGUubG9nKFwiRG93blwiLCBlLnRhcmdldC52YWx1ZSkpXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgYXBwbHlIYW5kbGVycygpIHtcclxuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSB7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdCh0aGlzLmlucHV0VmFsdWUudmFsdWUgKSlcclxuICAgICAgICAvLyBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdBRERfUFJPRFVDVCcsIHBheWxvYWQ6IHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSB9KVxyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wcGluZ0xpc3Q7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRiMzc4MGQ0MjI1NjQ4Y2ZiODhkXCIpIl0sIm5hbWVzIjpbInN0b3JlIiwiQUREX1BST0RVQ1QiLCJhZGRQcm9kdWN0IiwiY2hhbmdlT3JkZXIiLCJTaG9wcGluZ0xpc3QiLCJyb290RWxlbWVudCIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZVVJIiwicmVkdXhDb25uZWN0IiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbm5lckhUTUwiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImlucHV0VmFsdWUiLCJzaG9wTGlzdCIsIl90aGlzIiwic3Vic2NyaWJlIiwiY3JlYXRlTGkiLCJnZXRTdGF0ZSIsInByb2R1Y3RzIiwidW5zdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHNMaXN0Iiwic29ydCIsImEiLCJiIiwiaWQiLCJfdGhpczIiLCJlbGVtZW50RGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudExpIiwiY2xhc3NMaXN0IiwiZm9yRWFjaCIsImVsIiwiaW5uZXJUZXh0IiwidGV4dCIsImVsZW1lbnRCdXR0b25VcCIsImFkZCIsInBhcnNlSW50IiwiZWxlbWVudEJ1dHRvbkRvd24iLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGlzcGF0Y2giLCJ0YXJnZXQiLCJfdGhpczMiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=