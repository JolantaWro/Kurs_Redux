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
        _this.shopList.innerHTML = "";
        _this.createLi();
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
/******/ 	__webpack_require__.h = () => ("8445dfc58dbdbd0f53b8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZWI3MzdiZmEwODRlNmRkZjJmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNtQztBQUFBLElBRWhFSSxZQUFZO0VBQ2hCLFNBQUFBLGFBQVlDLFdBQVcsRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFlBQUE7SUFDdkIsSUFBSSxDQUFDRyxRQUFRLENBQUNGLFdBQVcsQ0FBQztJQUMxQixJQUFJLENBQUNHLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNDLGFBQWEsRUFBRTtFQUN0QjtFQUFDQyxZQUFBLENBQUFQLFlBQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU4sU0FBU0YsV0FBVyxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO01BQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDUyxTQUFTLCtoQkFlekI7SUFDSDtFQUFDO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFKLFlBQUEsRUFBYztNQUNaLElBQUksQ0FBQ00sSUFBSSxHQUFHLElBQUksQ0FBQ1YsV0FBVyxDQUFDVyxhQUFhLENBQUMsTUFBTSxDQUFDO01BQ2xELElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ1osV0FBVyxDQUFDVyxhQUFhLENBQUMsZUFBZSxDQUFDO01BQ2pFLElBQUksQ0FBQ0UsUUFBUSxHQUFHLElBQUksQ0FBQ2IsV0FBVyxDQUFDVyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQzlEO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsYUFBQSxFQUFlO01BQUEsSUFBQVcsS0FBQTtNQUNibkIsOERBQWUsQ0FBQyxZQUFNO1FBQ2xCbUIsS0FBSSxDQUFDRCxRQUFRLENBQUNKLFNBQVMsR0FBRyxFQUFFO1FBQzVCSyxLQUFJLENBQUNFLFFBQVEsRUFBRTtNQUNuQixDQUFDLENBQUM7TUFDRixJQUFNQyxXQUFXLEdBQUd0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WUFBQTtBQUFBO0FBTUgsaUVBQWVBLFlBQVk7Ozs7Ozs7O1VDMUczQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9hcHBzL1Nob3BwaW5nTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7QUREX1BST0RVQ1QsIGFkZFByb2R1Y3QsIGNoYW5nZU9yZGVyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jbGFzcyBTaG9wcGluZ0xpc3Qge1xuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCkge1xuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xuICAgIHRoaXMucmVkdXhDb25uZWN0KCk7XG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xuICB9XG5cbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5MaXN0YSB6YWt1cMOzdzwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlByb2R1a3QuLi5cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzaG9wLWFkZFwiPkRvZGFqPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbXQtM1wiIGlkPVwic2hvcC1saXN0XCI+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgY29sbGVjdFJlZnMoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250cm9sXCIpO1xuICAgIHRoaXMuc2hvcExpc3QgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvcC1saXN0XCIpO1xuICB9XG5cbiAgcmVkdXhDb25uZWN0KCkge1xuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2hvcExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5jcmVhdGVMaSgpXG4gICAgfSlcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnNvcnQoKGEsYikgPT4gYi5pZCAtIGEuaWQpKTtcbiAgICB9KTtcblxuXG4gIH1cblxuICBjcmVhdGVMaSgpIHtcbiAgICAgIHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBsZXQgZWxlbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICBsZXQgZWxlbWVudExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxpXCIpXG4gICAgICAgICAgZWxlbWVudExpLmNsYXNzTGlzdCA9IFwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgIGVsZW1lbnRMaS5pbm5lclRleHQgPSBlbGVtZW50XG4gICAgICAgICAgbGV0IGVsZW1lbnRCdXR0b25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgZWxlbWVudEJ1dHRvblVwLmlubmVyVGV4dCA9IFwiVVBcIjtcbiAgICAgICAgICBlbGVtZW50QnV0dG9uVXAuY2xhc3NMaXN0LmFkZChcIlVQXCIpO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25VcC52YWx1ZSA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICBsZXQgZWxlbWVudEJ1dHRvbkRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25Eb3duLmlubmVyVGV4dCA9IFwiRE9XTlwiO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25Eb3duLmNsYXNzTGlzdC5hZGQoXCJET1dOXCIpO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25Eb3duLnZhbHVlID0gZWxlbWVudDtcblxuICAgICAgICAgIGVsZW1lbnRMaS5hcHBlbmQoZWxlbWVudEJ1dHRvblVwLCBlbGVtZW50QnV0dG9uRG93bik7XG4gICAgICAgICAgZWxlbWVudERpdi5hcHBlbmRDaGlsZChlbGVtZW50TGkpXG4gICAgICAgICAgdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChlbGVtZW50RGl2KVxuICAgICAgICAgICAgICAvLyBlbGVtZW50QnV0dG9uVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHtcbiAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHByb2R1Y3QgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAvLyAgICAgY29uc3QgYWN0aW9uID0gZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlXG4gICAgICAgICAgICAgIC8vICAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VPcmRlcih7cHJvZHVjdCwgYWN0aW9ufSkpXG4gICAgICAgICAgICAgIC8vIH0pXG5cblxuICAgICAgfSlcbiAgICAgIHRoaXMuc2hvcExpc3QucXVlcnlTZWxlY3RvckFsbChcImxpIGJ1dHRvblwiKS5mb3JFYWNoKChidG4pID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgY29uc3QgYWN0aW9uID0gZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlO1xuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU9yZGVyKHtwcm9kdWN0LCBhY3Rpb259KSlcbiAgICAgIH0pKVxuXG4gICAgfVxuXG5cbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJVcFwiLCBlLnRhcmdldC52YWx1ZSkpXG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJEb3duXCIsIGUudGFyZ2V0LnZhbHVlKSlcblxuICBhcHBseUhhbmRsZXJzKCkge1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZih0aGlzLmlucHV0VmFsdWUudmFsdWUpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdCh0aGlzLmlucHV0VmFsdWUudmFsdWUgKSlcbiAgICAgICAgLy8gc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQUREX1BST0RVQ1QnLCBwYXlsb2FkOiB0aGlzLmlucHV0VmFsdWUudmFsdWUgfSlcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBDbGFzc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJ1cFwiKSlcblxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IGNvbnNvbGUubG9nKFwiVXBcIikpXG4gIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODQ0NWRmYzU4ZGJkYmQwZjUzYjhcIikiXSwibmFtZXMiOlsic3RvcmUiLCJBRERfUFJPRFVDVCIsImFkZFByb2R1Y3QiLCJjaGFuZ2VPcmRlciIsIlNob3BwaW5nTGlzdCIsInJvb3RFbGVtZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlVUkiLCJyZWR1eENvbm5lY3QiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRWYWx1ZSIsInNob3BMaXN0IiwiX3RoaXMiLCJzdWJzY3JpYmUiLCJjcmVhdGVMaSIsInVuc3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJzb3J0IiwiYSIsImIiLCJpZCIsIl90aGlzMiIsImZvckVhY2giLCJlbGVtZW50IiwiZWxlbWVudERpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRMaSIsImNsYXNzTGlzdCIsImlubmVyVGV4dCIsImVsZW1lbnRCdXR0b25VcCIsImFkZCIsImVsZW1lbnRCdXR0b25Eb3duIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcm9kdWN0IiwidGFyZ2V0IiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJfdGhpczMiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=