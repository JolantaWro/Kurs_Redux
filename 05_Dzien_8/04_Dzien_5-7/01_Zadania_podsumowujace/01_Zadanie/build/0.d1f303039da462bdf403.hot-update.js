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
      //   this.createLi()
      // })
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        createstore.getState().products;
      });
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        return console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.productsList.sort(function (a, b) {
          return b.id - a.id;
        }));
      });
    }
  }, {
    key: "createLi",
    value: function createLi(arryList) {
      var _this = this;
      // const elementDiv = document.createElement("div")
      // const elementLi = document.createElement("Li")
      // elementLi.classList = "list-group-item d-flex justify-content-between align-items-center"
      //
      // store.getState().products.productsList.forEach(el => {
      //   elementLi.innerText = el.text
      //   this.elementButtonUp = document.createElement("button");
      //   this.elementButtonUp.innerText = "UP";
      //   this.elementButtonUp.classList.add("upClass");
      //   this.elementButtonUp.value = el.id;
      //
      //   this.elementButtonDown = document.createElement("button");
      //   this.elementButtonDown.innerText = "DOWN";
      //   this.elementButtonDown.classList.add("downClass");
      //   this.elementButtonUp.value = el.id;
      // })
      // elementLi.append(this.elementButtonUp, this.elementButtonDown);
      // elementDiv.appendChild(elementLi)
      //
      // this.shopList.appendChild(elementDiv)
      // this.elementButtonUp.addEventListener("click", (e)=> store.dispatch(changeOrder(parseInt(e.target.value))))
      // this.elementButtonDown.addEventListener("click", (e)=> console.log("Down", e.target.value))

      var elementDiv = document.createElement("div");
      var elementLi = document.createElement("Li");
      elementLi.classList = "list-group-item d-flex justify-content-between align-items-center";
      arryList.forEach(function (el) {
        elementLi.innerText = el.text;
        _this.elementButtonUp = document.createElement("button");
        _this.elementButtonUp.innerText = "UP";
        _this.elementButtonUp.classList.add("upClass");
        _this.elementButtonUp.value = el.id;
        _this.elementButtonDown = document.createElement("button");
        _this.elementButtonDown.innerText = "DOWN";
        _this.elementButtonDown.classList.add("downClass");
        _this.elementButtonUp.value = el.id;
      });
      elementLi.append(this.elementButtonUp, this.elementButtonDown);
      elementDiv.appendChild(elementLi);
      this.shopList.appendChild(elementDiv);
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
/******/ 	__webpack_require__.h = () => ("57fd42a6325dbf0faa74")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBSSxDQUFDbkMsVUFBVSxDQUFDSixLQUFLLEdBQUcsRUFBRTtRQUM1QjtNQUNGLENBQUMsQ0FBQztNQUNGOztNQUVBO0lBQ0Y7RUFBQztFQUFBLE9BQUFULFlBQUE7QUFBQTtBQU1ILGlFQUFlQSxZQUFZOzs7Ozs7OztVQ25IM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9TaG9wcGluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7QUREX1BST0RVQ1QsIGFkZFByb2R1Y3QsIGNoYW5nZU9yZGVyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgU2hvcHBpbmdMaXN0IHtcclxuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XHJcbiAgICB0aGlzLnJlZHV4Q29ubmVjdCgpO1xyXG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xyXG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpc3RhIHpha3Vww7N3PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9kdWt0Li4uXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNob3AtYWRkXCI+RG9kYWo8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbXQtM1wiIGlkPVwic2hvcC1saXN0XCI+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgY29sbGVjdFJlZnMoKSB7XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udHJvbFwiKTtcclxuICAgIHRoaXMuc2hvcExpc3QgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvcC1saXN0XCIpO1xyXG4gIH1cclxuXHJcbiAgcmVkdXhDb25uZWN0KCkge1xyXG4gICAgLy8gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgIC8vICAgdGhpcy5jcmVhdGVMaSgpXHJcbiAgICAvLyB9KVxyXG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY3JlYXRlc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0c1xyXG4gICAgfSlcclxuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5zb3J0KChhLGIpID0+IGIuaWQgLSBhLmlkKSkpXHJcblxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGkoYXJyeUxpc3QpIHtcclxuICAgIC8vIGNvbnN0IGVsZW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAvLyBjb25zdCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcclxuICAgIC8vIGVsZW1lbnRMaS5jbGFzc0xpc3QgPSBcImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgIC8vXHJcbiAgICAvLyBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5mb3JFYWNoKGVsID0+IHtcclxuICAgIC8vICAgZWxlbWVudExpLmlubmVyVGV4dCA9IGVsLnRleHRcclxuICAgIC8vICAgdGhpcy5lbGVtZW50QnV0dG9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgLy8gICB0aGlzLmVsZW1lbnRCdXR0b25VcC5pbm5lclRleHQgPSBcIlVQXCI7XHJcbiAgICAvLyAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmNsYXNzTGlzdC5hZGQoXCJ1cENsYXNzXCIpO1xyXG4gICAgLy8gICB0aGlzLmVsZW1lbnRCdXR0b25VcC52YWx1ZSA9IGVsLmlkO1xyXG4gICAgLy9cclxuICAgIC8vICAgdGhpcy5lbGVtZW50QnV0dG9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAvLyAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uaW5uZXJUZXh0ID0gXCJET1dOXCI7XHJcbiAgICAvLyAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uY2xhc3NMaXN0LmFkZChcImRvd25DbGFzc1wiKTtcclxuICAgIC8vICAgdGhpcy5lbGVtZW50QnV0dG9uVXAudmFsdWUgPSBlbC5pZDtcclxuICAgIC8vIH0pXHJcbiAgICAvLyBlbGVtZW50TGkuYXBwZW5kKHRoaXMuZWxlbWVudEJ1dHRvblVwLCB0aGlzLmVsZW1lbnRCdXR0b25Eb3duKTtcclxuICAgIC8vIGVsZW1lbnREaXYuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxyXG4gICAgLy9cclxuICAgIC8vIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudERpdilcclxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBzdG9yZS5kaXNwYXRjaChjaGFuZ2VPcmRlcihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpKSlcclxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IGNvbnNvbGUubG9nKFwiRG93blwiLCBlLnRhcmdldC52YWx1ZSkpXHJcblxyXG4gICAgY29uc3QgZWxlbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnN0IGVsZW1lbnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMaVwiKVxyXG4gICAgZWxlbWVudExpLmNsYXNzTGlzdCA9IFwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG5cclxuICAgIGFycnlMaXN0LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICBlbGVtZW50TGkuaW5uZXJUZXh0ID0gZWwudGV4dFxyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmlubmVyVGV4dCA9IFwiVVBcIjtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAuY2xhc3NMaXN0LmFkZChcInVwQ2xhc3NcIik7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLnZhbHVlID0gZWwuaWQ7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi5pbm5lclRleHQgPSBcIkRPV05cIjtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi5jbGFzc0xpc3QuYWRkKFwiZG93bkNsYXNzXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC52YWx1ZSA9IGVsLmlkO1xyXG4gICAgfSlcclxuICAgIGVsZW1lbnRMaS5hcHBlbmQodGhpcy5lbGVtZW50QnV0dG9uVXAsIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24pO1xyXG4gICAgZWxlbWVudERpdi5hcHBlbmRDaGlsZChlbGVtZW50TGkpXHJcblxyXG4gICAgdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChlbGVtZW50RGl2KVxyXG4gICAgdGhpcy5lbGVtZW50QnV0dG9uVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHN0b3JlLmRpc3BhdGNoKGNoYW5nZU9yZGVyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSkpKVxyXG4gICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJEb3duXCIsIGUudGFyZ2V0LnZhbHVlKSlcclxuXHJcbiAgfVxyXG5cclxuICBhcHBseUhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZih0aGlzLmlucHV0VmFsdWUudmFsdWUpIHtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChhZGRQcm9kdWN0KHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSApKVxyXG4gICAgICAgIC8vIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0FERF9QUk9EVUNUJywgcGF5bG9hZDogdGhpcy5pbnB1dFZhbHVlLnZhbHVlIH0pXHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBDbGFzc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJ1cFwiKSlcclxuXHJcbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiBjb25zb2xlLmxvZyhcIlVwXCIpKVxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1N2ZkNDJhNjMyNWRiZjBmYWE3NFwiKSJdLCJuYW1lcyI6WyJzdG9yZSIsIkFERF9QUk9EVUNUIiwiYWRkUHJvZHVjdCIsImNoYW5nZU9yZGVyIiwiU2hvcHBpbmdMaXN0Iiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dFZhbHVlIiwic2hvcExpc3QiLCJzdWJzY3JpYmUiLCJjcmVhdGVzdG9yZSIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHNMaXN0Iiwic29ydCIsImEiLCJiIiwiaWQiLCJjcmVhdGVMaSIsImFycnlMaXN0IiwiX3RoaXMiLCJlbGVtZW50RGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudExpIiwiY2xhc3NMaXN0IiwiZm9yRWFjaCIsImVsIiwiaW5uZXJUZXh0IiwidGV4dCIsImVsZW1lbnRCdXR0b25VcCIsImFkZCIsImVsZW1lbnRCdXR0b25Eb3duIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRpc3BhdGNoIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJfdGhpczIiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=