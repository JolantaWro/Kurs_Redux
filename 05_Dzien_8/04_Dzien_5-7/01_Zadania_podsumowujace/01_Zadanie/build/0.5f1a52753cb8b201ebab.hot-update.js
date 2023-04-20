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
/******/ 	__webpack_require__.h = () => ("a622333e75331bc22cc6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZjFhNTI3NTNjYjhiMjAxZWJhYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNtQztBQUFBLElBRWhFSSxZQUFZO0VBQ2hCLFNBQUFBLGFBQVlDLFdBQVcsRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFlBQUE7SUFDdkIsSUFBSSxDQUFDRyxRQUFRLENBQUNGLFdBQVcsQ0FBQztJQUMxQixJQUFJLENBQUNHLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNDLGFBQWEsRUFBRTtFQUN0QjtFQUFDQyxZQUFBLENBQUFQLFlBQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU4sU0FBU0YsV0FBVyxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO01BQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDUyxTQUFTLCtoQkFlekI7SUFDSDtFQUFDO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFKLFlBQUEsRUFBYztNQUNaLElBQUksQ0FBQ00sSUFBSSxHQUFHLElBQUksQ0FBQ1YsV0FBVyxDQUFDVyxhQUFhLENBQUMsTUFBTSxDQUFDO01BQ2xELElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ1osV0FBVyxDQUFDVyxhQUFhLENBQUMsZUFBZSxDQUFDO01BQ2pFLElBQUksQ0FBQ0UsUUFBUSxHQUFHLElBQUksQ0FBQ2IsV0FBVyxDQUFDVyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQzlEO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsYUFBQSxFQUFlO01BQUEsSUFBQVcsS0FBQTtNQUNibkIsOERBQWUsQ0FBQyxZQUFNO1FBQ3BCbUIsS0FBSSxDQUFDRSxRQUFRLENBQUNyQiw2REFBYyxFQUFFLENBQUN1QixRQUFRLENBQUM7TUFDMUMsQ0FBQyxDQUFDO01BRUZ2Qiw4REFBZSxDQUFDO1FBQUEsT0FBTXdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDekIsNkRBQWMsRUFBRSxDQUFDdUIsUUFBUSxDQUFDRyxZQUFZLENBQUNDLElBQUksQ0FBQyxVQUFDQyxDQUFDLEVBQUNDLENBQUM7VUFBQSxPQUFLQSxDQUFDLENBQUNDLEVBQUUsR0FBR0YsQ0FBQyxDQUFDRSxFQUFFO1FBQUEsRUFBQyxDQUFDO01BQUEsRUFBQztJQUV2RztFQUFDO0lBQUFsQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBUSxTQUFBLEVBQVc7TUFBQSxJQUFBVSxNQUFBO01BQ1QsSUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDaEQsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDOUNDLFNBQVMsQ0FBQ0MsU0FBUyxHQUFHLG1FQUFtRTtNQUV6RnBDLDZEQUFjLEVBQUUsQ0FBQ3VCLFFBQVEsQ0FBQ0csWUFBWSxDQUFDVyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO1FBQ25ESCxTQUFTLENBQUNJLFNBQVMsR0FBR0QsRUFBRSxDQUFDRSxJQUFJO1FBQzdCVCxNQUFJLENBQUNVLGVBQWUsR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3ZESCxNQUFJLENBQUNVLGVBQWUsQ0FBQ0YsU0FBUyxHQUFHLElBQUk7UUFDckNSLE1BQUksQ0FBQ1UsZUFBZSxDQUFDTCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDN0NYLE1BQUksQ0FBQ1UsZUFBZSxDQUFDNUIsS0FBSyxHQUFHeUIsRUFBRSxDQUFDUixFQUFFO1FBRWxDQyxNQUFJLENBQUNZLGlCQUFpQixHQUFHVixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDekRILE1BQUksQ0FBQ1ksaUJBQWlCLENBQUNKLFNBQVMsR0FBRyxNQUFNO1FBQ3pDUixNQUFJLENBQUNZLGlCQUFpQixDQUFDUCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDakRYLE1BQUksQ0FBQ1UsZUFBZSxDQUFDNUIsS0FBSyxHQUFHeUIsRUFBRSxDQUFDUixFQUFFO01BQ3BDLENBQUMsQ0FBQztNQUNGSyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxJQUFJLENBQUNILGVBQWUsRUFBRSxJQUFJLENBQUNFLGlCQUFpQixDQUFDO01BQzlEWCxVQUFVLENBQUNhLFdBQVcsQ0FBQ1YsU0FBUyxDQUFDO01BRWpDLElBQUksQ0FBQ2pCLFFBQVEsQ0FBQzJCLFdBQVcsQ0FBQ2IsVUFBVSxDQUFDO01BQ3JDLElBQUksQ0FBQ1MsZUFBZSxDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQztRQUFBLE9BQUkvQyw2REFBYyxDQUFDRywyREFBVyxDQUFDOEMsUUFBUSxDQUFDRixDQUFDLENBQUNHLE1BQU0sQ0FBQ3JDLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFBQSxFQUFDO01BQzNHLElBQUksQ0FBQzhCLGlCQUFpQixDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQztRQUFBLE9BQUl2QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVzQixDQUFDLENBQUNHLE1BQU0sQ0FBQ3JDLEtBQUssQ0FBQztNQUFBLEVBQUM7SUFDN0Y7RUFBQztJQUFBRCxHQUFBO0lBQUFDLEtBQUEsRUFNRCxTQUFBSCxjQUFBLEVBQWdCO01BQUEsSUFBQXlDLE1BQUE7TUFDZCxJQUFJLENBQUNwQyxJQUFJLENBQUMrQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO1FBQzFDQSxDQUFDLENBQUNLLGNBQWMsRUFBRTtRQUNsQixJQUFHRCxNQUFJLENBQUNsQyxVQUFVLENBQUNKLEtBQUssRUFBRTtVQUN4QmIsNkRBQWMsQ0FBQ0UsMERBQVUsQ0FBQ2lELE1BQUksQ0FBQ2xDLFVBQVUsQ0FBQ0osS0FBSyxDQUFFLENBQUM7VUFDbEQ7VUFDQXNDLE1BQUksQ0FBQ2xDLFVBQVUsQ0FBQ0osS0FBSyxHQUFHLEVBQUU7UUFDNUI7TUFDRixDQUFDLENBQUM7TUFDRjs7TUFFQTtJQUNGO0VBQUM7RUFBQSxPQUFBVCxZQUFBO0FBQUE7QUFNSCxpRUFBZUEsWUFBWTs7Ozs7Ozs7VUM3RjNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcHMvU2hvcHBpbmdMaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQge0FERF9QUk9EVUNULCBhZGRQcm9kdWN0LCBjaGFuZ2VPcmRlcn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuXHJcbmNsYXNzIFNob3BwaW5nTGlzdCB7XHJcbiAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xyXG4gICAgdGhpcy5yZWR1eENvbm5lY3QoKTtcclxuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcclxuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5MaXN0YSB6YWt1cMOzdzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUHJvZHVrdC4uLlwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzaG9wLWFkZFwiPkRvZGFqPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIG10LTNcIiBpZD1cInNob3AtbGlzdFwiPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGNvbGxlY3RSZWZzKCkge1xyXG4gICAgdGhpcy5mb3JtID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRyb2xcIik7XHJcbiAgICB0aGlzLnNob3BMaXN0ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3AtbGlzdFwiKTtcclxuICB9XHJcblxyXG4gIHJlZHV4Q29ubmVjdCgpIHtcclxuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlTGkoc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cylcclxuICAgIH0pXHJcblxyXG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMucHJvZHVjdHNMaXN0LnNvcnQoKGEsYikgPT4gYi5pZCAtIGEuaWQpKSlcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVMaSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb25zdCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcclxuICAgIGVsZW1lbnRMaS5jbGFzc0xpc3QgPSBcImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcclxuXHJcbiAgICBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgZWxlbWVudExpLmlubmVyVGV4dCA9IGVsLnRleHRcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5pbm5lclRleHQgPSBcIlVQXCI7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmNsYXNzTGlzdC5hZGQoXCJ1cENsYXNzXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC52YWx1ZSA9IGVsLmlkO1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uaW5uZXJUZXh0ID0gXCJET1dOXCI7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uY2xhc3NMaXN0LmFkZChcImRvd25DbGFzc1wiKTtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAudmFsdWUgPSBlbC5pZDtcclxuICAgIH0pXHJcbiAgICBlbGVtZW50TGkuYXBwZW5kKHRoaXMuZWxlbWVudEJ1dHRvblVwLCB0aGlzLmVsZW1lbnRCdXR0b25Eb3duKTtcclxuICAgIGVsZW1lbnREaXYuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxyXG5cclxuICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudERpdilcclxuICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBzdG9yZS5kaXNwYXRjaChjaGFuZ2VPcmRlcihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpKSlcclxuICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IGNvbnNvbGUubG9nKFwiRG93blwiLCBlLnRhcmdldC52YWx1ZSkpXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgYXBwbHlIYW5kbGVycygpIHtcclxuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSB7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdCh0aGlzLmlucHV0VmFsdWUudmFsdWUgKSlcclxuICAgICAgICAvLyBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdBRERfUFJPRFVDVCcsIHBheWxvYWQ6IHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSB9KVxyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwQ2xhc3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKFwidXBcIikpXHJcblxyXG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4gY29uc29sZS5sb2coXCJVcFwiKSlcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BwaW5nTGlzdDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTYyMjMzM2U3NTMzMWJjMjJjYzZcIikiXSwibmFtZXMiOlsic3RvcmUiLCJBRERfUFJPRFVDVCIsImFkZFByb2R1Y3QiLCJjaGFuZ2VPcmRlciIsIlNob3BwaW5nTGlzdCIsInJvb3RFbGVtZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlVUkiLCJyZWR1eENvbm5lY3QiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRWYWx1ZSIsInNob3BMaXN0IiwiX3RoaXMiLCJzdWJzY3JpYmUiLCJjcmVhdGVMaSIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHNMaXN0Iiwic29ydCIsImEiLCJiIiwiaWQiLCJfdGhpczIiLCJlbGVtZW50RGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudExpIiwiY2xhc3NMaXN0IiwiZm9yRWFjaCIsImVsIiwiaW5uZXJUZXh0IiwidGV4dCIsImVsZW1lbnRCdXR0b25VcCIsImFkZCIsImVsZW1lbnRCdXR0b25Eb3duIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRpc3BhdGNoIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJfdGhpczMiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=