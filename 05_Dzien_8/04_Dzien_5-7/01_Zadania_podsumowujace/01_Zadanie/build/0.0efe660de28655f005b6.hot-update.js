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
      var _this2 = this;
      var elementDiv = document.createElement("div");
      var elementLi = document.createElement("Li");
      elementLi.classList = "list-group-item d-flex justify-content-between align-items-center";
      // store.getState().products.forEach(el => elementLi.innerText = el)
      // store.getState().products.productsList.forEach(el => elementLi.innerText = el.text)
      // this.elementButtonUp = document.createElement("button");
      // this.elementButtonUp.innerText = "UP";
      // this.elementButtonUp.classList.add("upClass");
      // this.elementButtonUp.value = elementLi.id;
      // this.elementButtonDown = document.createElement("button");
      // this.elementButtonDown.innerText = "DOWN";
      // this.elementButtonDown.classList.add("downClass");

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
      elementDiv.sort(function (a, b) {
        return Number(a.id) - Number(b.id);
      });
      this.shopList.appendChild(elementDiv);
      this.elementButtonUp.addEventListener("click", function (e) {
        return console.log("Up", e.target.value);
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
/******/ 	__webpack_require__.h = () => ("a0902b87807605f7da9d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wZWZlNjYwZGUyODY1NWYwMDViNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNzQjtBQUFBLElBRW5ERyxZQUFZO0VBQ2hCLFNBQUFBLGFBQVlDLFdBQVcsRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFlBQUE7SUFDdkIsSUFBSSxDQUFDRyxRQUFRLENBQUNGLFdBQVcsQ0FBQztJQUMxQixJQUFJLENBQUNHLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNDLGFBQWEsRUFBRTtFQUN0QjtFQUFDQyxZQUFBLENBQUFQLFlBQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU4sU0FBU0YsV0FBVyxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO01BQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDUyxTQUFTLCtoQkFlekI7SUFDSDtFQUFDO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFKLFlBQUEsRUFBYztNQUNaLElBQUksQ0FBQ00sSUFBSSxHQUFHLElBQUksQ0FBQ1YsV0FBVyxDQUFDVyxhQUFhLENBQUMsTUFBTSxDQUFDO01BQ2xELElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ1osV0FBVyxDQUFDVyxhQUFhLENBQUMsZUFBZSxDQUFDO01BQ2pFLElBQUksQ0FBQ0UsUUFBUSxHQUFHLElBQUksQ0FBQ2IsV0FBVyxDQUFDVyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQzlEO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsYUFBQSxFQUFlO01BQUEsSUFBQVcsS0FBQTtNQUNibEIsOERBQWUsQ0FBQyxZQUFNO1FBQ3BCa0IsS0FBSSxDQUFDRSxRQUFRLEVBQUU7TUFDakIsQ0FBQyxDQUFDO01BQ0ZwQiw4REFBZSxDQUFDO1FBQUEsT0FBTXFCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdEIsNkRBQWMsRUFBRSxDQUFDd0IsUUFBUSxDQUFDO01BQUEsRUFBQztJQUUvRDtFQUFDO0lBQUFiLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFRLFNBQUEsRUFBVztNQUFBLElBQUFLLE1BQUE7TUFDVCxJQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNoRCxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztNQUM5Q0MsU0FBUyxDQUFDQyxTQUFTLEdBQUcsbUVBQW1FO01BQ3pGO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7TUFJQTlCLDZEQUFjLEVBQUUsQ0FBQ3dCLFFBQVEsQ0FBQ08sWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO1FBQ25ESixTQUFTLENBQUNLLFNBQVMsR0FBR0QsRUFBRSxDQUFDRSxJQUFJO1FBQzdCVixNQUFJLENBQUNXLGVBQWUsR0FBR1QsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3ZESCxNQUFJLENBQUNXLGVBQWUsQ0FBQ0YsU0FBUyxHQUFHLElBQUk7UUFDckNULE1BQUksQ0FBQ1csZUFBZSxDQUFDTixTQUFTLENBQUNPLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDN0NaLE1BQUksQ0FBQ1csZUFBZSxDQUFDeEIsS0FBSyxHQUFHcUIsRUFBRSxDQUFDSyxFQUFFO1FBRWxDYixNQUFJLENBQUNjLGlCQUFpQixHQUFHWixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDekRILE1BQUksQ0FBQ2MsaUJBQWlCLENBQUNMLFNBQVMsR0FBRyxNQUFNO1FBQ3pDVCxNQUFJLENBQUNjLGlCQUFpQixDQUFDVCxTQUFTLENBQUNPLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDakRaLE1BQUksQ0FBQ1csZUFBZSxDQUFDeEIsS0FBSyxHQUFHcUIsRUFBRSxDQUFDSyxFQUFFO01BQ3BDLENBQUMsQ0FBQztNQUlGVCxTQUFTLENBQUNXLE1BQU0sQ0FBQyxJQUFJLENBQUNKLGVBQWUsRUFBRSxJQUFJLENBQUNHLGlCQUFpQixDQUFDO01BQzlEYixVQUFVLENBQUNlLFdBQVcsQ0FBQ1osU0FBUyxDQUFDO01BQ2pDSCxVQUFVLENBQUNnQixJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1FBQUEsT0FBS0MsTUFBTSxDQUFDRixDQUFDLENBQUNMLEVBQUUsQ0FBQyxHQUFHTyxNQUFNLENBQUNELENBQUMsQ0FBQ04sRUFBRSxDQUFDO01BQUEsRUFBQztNQUVyRCxJQUFJLENBQUNyQixRQUFRLENBQUN3QixXQUFXLENBQUNmLFVBQVUsQ0FBQztNQUNyQyxJQUFJLENBQUNVLGVBQWUsQ0FBQ1UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUM7UUFBQSxPQUFJMUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxFQUFFeUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNwQyxLQUFLLENBQUM7TUFBQSxFQUFDOztNQUV2Rjs7TUFFQSxJQUFJLENBQUMyQixpQkFBaUIsQ0FBQ08sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUM7UUFBQSxPQUFJMUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxFQUFFeUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNwQyxLQUFLLENBQUM7TUFBQSxFQUFDO0lBRTdGO0VBQUM7SUFBQUQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUgsY0FBQSxFQUFnQjtNQUFBLElBQUF3QyxNQUFBO01BQ2QsSUFBSSxDQUFDbkMsSUFBSSxDQUFDZ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUNDLENBQUMsRUFBSztRQUMxQ0EsQ0FBQyxDQUFDRyxjQUFjLEVBQUU7UUFDbEIsSUFBR0QsTUFBSSxDQUFDakMsVUFBVSxDQUFDSixLQUFLLEVBQUU7VUFDeEJaLDZEQUFjLENBQUNFLDBEQUFVLENBQUMrQyxNQUFJLENBQUNqQyxVQUFVLENBQUNKLEtBQUssQ0FBRSxDQUFDO1VBQ2xEO1VBQ0FxQyxNQUFJLENBQUNqQyxVQUFVLENBQUNKLEtBQUssR0FBRyxFQUFFO1FBQzVCO01BQ0YsQ0FBQyxDQUFDO01BQ0Y7O01BRUE7SUFDRjtFQUFDO0VBQUEsT0FBQVQsWUFBQTtBQUFBO0FBTUgsaUVBQWVBLFlBQVk7Ozs7Ozs7O1VDM0czQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9hcHBzL1Nob3BwaW5nTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7QUREX1BST0RVQ1QsIGFkZFByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNsYXNzIFNob3BwaW5nTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XG4gICAgdGhpcy5yZWR1eENvbm5lY3QoKTtcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XG4gIH1cblxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpc3RhIHpha3Vww7N3PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUHJvZHVrdC4uLlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNob3AtYWRkXCI+RG9kYWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtdC0zXCIgaWQ9XCJzaG9wLWxpc3RcIj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBjb2xsZWN0UmVmcygpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRyb2xcIik7XG4gICAgdGhpcy5zaG9wTGlzdCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG9wLWxpc3RcIik7XG4gIH1cblxuICByZWR1eENvbm5lY3QoKSB7XG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlTGkoKVxuICAgIH0pXG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMpKVxuXG4gIH1cblxuICBjcmVhdGVMaSgpIHtcbiAgICBjb25zdCBlbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGVsZW1lbnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMaVwiKVxuICAgIGVsZW1lbnRMaS5jbGFzc0xpc3QgPSBcImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAvLyBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLmZvckVhY2goZWwgPT4gZWxlbWVudExpLmlubmVyVGV4dCA9IGVsKVxuICAgIC8vIHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMucHJvZHVjdHNMaXN0LmZvckVhY2goZWwgPT4gZWxlbWVudExpLmlubmVyVGV4dCA9IGVsLnRleHQpXG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvblVwLmlubmVyVGV4dCA9IFwiVVBcIjtcbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5jbGFzc0xpc3QuYWRkKFwidXBDbGFzc1wiKTtcbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC52YWx1ZSA9IGVsZW1lbnRMaS5pZDtcbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25Eb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmlubmVyVGV4dCA9IFwiRE9XTlwiO1xuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uY2xhc3NMaXN0LmFkZChcImRvd25DbGFzc1wiKTtcblxuXG5cbiAgICBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsZW1lbnRMaS5pbm5lclRleHQgPSBlbC50ZXh0XG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5pbm5lclRleHQgPSBcIlVQXCI7XG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5jbGFzc0xpc3QuYWRkKFwidXBDbGFzc1wiKTtcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLnZhbHVlID0gZWwuaWQ7XG5cbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi5pbm5lclRleHQgPSBcIkRPV05cIjtcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uY2xhc3NMaXN0LmFkZChcImRvd25DbGFzc1wiKTtcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLnZhbHVlID0gZWwuaWQ7XG4gICAgfSlcblxuXG5cbiAgICBlbGVtZW50TGkuYXBwZW5kKHRoaXMuZWxlbWVudEJ1dHRvblVwLCB0aGlzLmVsZW1lbnRCdXR0b25Eb3duKTtcbiAgICBlbGVtZW50RGl2LmFwcGVuZENoaWxkKGVsZW1lbnRMaSlcbiAgICBlbGVtZW50RGl2LnNvcnQoKGEsYikgPT4gTnVtYmVyKGEuaWQpIC0gTnVtYmVyKGIuaWQpKVxuXG4gICAgdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChlbGVtZW50RGl2KVxuICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIlVwXCIsIGUudGFyZ2V0LnZhbHVlKSlcblxuICAgIC8vc2V0QXJyYXkobXlBcnJheS5tYXAoKHRhc2spID0+IHRhc2suaWQgPT09IGUgPyB7Li4udGFzaywgZG9uZTogdHJ1ZX0gOiB7Li4udGFza30pLnNvcnQoKGEsYikgPT4gTnVtYmVyKGEuZG9uZSkgLSBOdW1iZXIoYi5kb25lKSkpXG5cbiAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIkRvd25cIiwgZS50YXJnZXQudmFsdWUpKVxuXG4gIH1cblxuICBhcHBseUhhbmRsZXJzKCkge1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZih0aGlzLmlucHV0VmFsdWUudmFsdWUpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdCh0aGlzLmlucHV0VmFsdWUudmFsdWUgKSlcbiAgICAgICAgLy8gc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQUREX1BST0RVQ1QnLCBwYXlsb2FkOiB0aGlzLmlucHV0VmFsdWUudmFsdWUgfSlcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBDbGFzc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJ1cFwiKSlcblxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IGNvbnNvbGUubG9nKFwiVXBcIikpXG4gIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTA5MDJiODc4MDc2MDVmN2RhOWRcIikiXSwibmFtZXMiOlsic3RvcmUiLCJBRERfUFJPRFVDVCIsImFkZFByb2R1Y3QiLCJTaG9wcGluZ0xpc3QiLCJyb290RWxlbWVudCIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZVVJIiwicmVkdXhDb25uZWN0IiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbm5lckhUTUwiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImlucHV0VmFsdWUiLCJzaG9wTGlzdCIsIl90aGlzIiwic3Vic2NyaWJlIiwiY3JlYXRlTGkiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJwcm9kdWN0cyIsIl90aGlzMiIsImVsZW1lbnREaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50TGkiLCJjbGFzc0xpc3QiLCJwcm9kdWN0c0xpc3QiLCJmb3JFYWNoIiwiZWwiLCJpbm5lclRleHQiLCJ0ZXh0IiwiZWxlbWVudEJ1dHRvblVwIiwiYWRkIiwiaWQiLCJlbGVtZW50QnV0dG9uRG93biIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwic29ydCIsImEiLCJiIiwiTnVtYmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJfdGhpczMiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==