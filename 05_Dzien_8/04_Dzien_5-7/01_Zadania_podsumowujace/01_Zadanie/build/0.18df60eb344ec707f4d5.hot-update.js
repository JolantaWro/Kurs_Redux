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
      // const unsubscribe = store.subscribe(() => {
      //   console.log(store.getState().products.productsList.sort((a,b) => b.id - a.id));
      // });
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
        elementButtonUp.setAttribute('name', 'UP');
        var elementButtonDown = document.createElement("button");
        elementButtonDown.innerText = "DOWN";
        elementButtonUp.setAttribute('name', 'DOWN');
        elementLi.append(elementButtonUp, elementButtonDown);
        elementDiv.appendChild(elementLi);
        _this2.shopList.appendChild(elementDiv);
      });
      elementButtonUp.addEventListener("click", function (e) {
        return console.log("Up", e.target.value);
      });
      elementButtonDown.addEventListener("click", function (e) {
        return console.log("Down", e.target.value);
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
/******/ 	__webpack_require__.h = () => ("4677648193d1ca2801f0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxDQUFDO1FBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxFQUFFRixDQUFDLENBQUNHLE1BQU0sQ0FBQzdCLEtBQUssQ0FBQztNQUFBLEVBQUM7SUFJeEY7O0lBRUE7SUFDQTtFQUFBO0lBQUFELEdBQUE7SUFBQUMsS0FBQSxFQUVGLFNBQUFILGNBQUEsRUFBZ0I7TUFBQSxJQUFBaUMsTUFBQTtNQUNkLElBQUksQ0FBQzVCLElBQUksQ0FBQ3VCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDQyxDQUFDLEVBQUs7UUFDMUNBLENBQUMsQ0FBQ0ssY0FBYyxFQUFFO1FBQ2xCLElBQUdELE1BQUksQ0FBQzFCLFVBQVUsQ0FBQ0osS0FBSyxFQUFFO1VBQ3hCYiw2REFBYyxDQUFDRSwwREFBVSxDQUFDeUMsTUFBSSxDQUFDMUIsVUFBVSxDQUFDSixLQUFLLENBQUUsQ0FBQztVQUNsRDtVQUNBOEIsTUFBSSxDQUFDMUIsVUFBVSxDQUFDSixLQUFLLEdBQUcsRUFBRTtRQUM1QjtNQUNGLENBQUMsQ0FBQztNQUNGOztNQUVBO0lBQ0Y7RUFBQztFQUFBLE9BQUFULFlBQUE7QUFBQTtBQU1ILGlFQUFlQSxZQUFZOzs7Ozs7OztVQy9GM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9TaG9wcGluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQge0FERF9QUk9EVUNULCBhZGRQcm9kdWN0LCBjaGFuZ2VPcmRlcn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY2xhc3MgU2hvcHBpbmdMaXN0IHtcbiAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQpIHtcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcbiAgICB0aGlzLnJlZHV4Q29ubmVjdCgpO1xuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcbiAgfVxuXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+TGlzdGEgemFrdXDDs3c8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9kdWt0Li4uXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwic2hvcC1hZGRcIj5Eb2RhajwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIG10LTNcIiBpZD1cInNob3AtbGlzdFwiPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGNvbGxlY3RSZWZzKCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udHJvbFwiKTtcbiAgICB0aGlzLnNob3BMaXN0ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3AtbGlzdFwiKTtcbiAgfVxuXG4gIHJlZHV4Q29ubmVjdCgpIHtcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVMaShzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzKVxuICAgIH0pXG4gICAgLy8gY29uc3QgdW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5wcm9kdWN0c0xpc3Quc29ydCgoYSxiKSA9PiBiLmlkIC0gYS5pZCkpO1xuICAgIC8vIH0pO1xuXG5cbiAgfVxuXG4gIGNyZWF0ZUxpKCkge1xuICAgICAgc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGxldCBlbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgIGxldCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcbiAgICAgICAgICBlbGVtZW50TGkuY2xhc3NMaXN0ID0gXCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgZWxlbWVudExpLmlubmVyVGV4dCA9IGVsZW1lbnRcbiAgICAgICAgICBsZXQgZWxlbWVudEJ1dHRvblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICBlbGVtZW50QnV0dG9uVXAuaW5uZXJUZXh0ID0gXCJVUFwiO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25VcC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVVAnKTtcblxuICAgICAgICAgIGxldCBlbGVtZW50QnV0dG9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgZWxlbWVudEJ1dHRvbkRvd24uaW5uZXJUZXh0ID0gXCJET1dOXCI7XG4gICAgICAgICAgZWxlbWVudEJ1dHRvblVwLnNldEF0dHJpYnV0ZSgnbmFtZScsICdET1dOJyk7XG5cbiAgICAgICAgICBlbGVtZW50TGkuYXBwZW5kKGVsZW1lbnRCdXR0b25VcCwgZWxlbWVudEJ1dHRvbkRvd24pO1xuICAgICAgICAgIGVsZW1lbnREaXYuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxuICAgICAgICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudERpdilcblxuICAgICAgfSlcbiAgICAgIGVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJVcFwiLCBlLnRhcmdldC52YWx1ZSkpXG4gICAgICBlbGVtZW50QnV0dG9uRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJEb3duXCIsIGUudGFyZ2V0LnZhbHVlKSlcblxuXG5cbiAgICB9XG5cbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJVcFwiLCBlLnRhcmdldC52YWx1ZSkpXG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJEb3duXCIsIGUudGFyZ2V0LnZhbHVlKSlcblxuICBhcHBseUhhbmRsZXJzKCkge1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZih0aGlzLmlucHV0VmFsdWUudmFsdWUpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdCh0aGlzLmlucHV0VmFsdWUudmFsdWUgKSlcbiAgICAgICAgLy8gc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQUREX1BST0RVQ1QnLCBwYXlsb2FkOiB0aGlzLmlucHV0VmFsdWUudmFsdWUgfSlcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBDbGFzc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJ1cFwiKSlcblxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IGNvbnNvbGUubG9nKFwiVXBcIikpXG4gIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDY3NzY0ODE5M2QxY2EyODAxZjBcIikiXSwibmFtZXMiOlsic3RvcmUiLCJBRERfUFJPRFVDVCIsImFkZFByb2R1Y3QiLCJjaGFuZ2VPcmRlciIsIlNob3BwaW5nTGlzdCIsInJvb3RFbGVtZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlVUkiLCJyZWR1eENvbm5lY3QiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRWYWx1ZSIsInNob3BMaXN0IiwiX3RoaXMiLCJzdWJzY3JpYmUiLCJjcmVhdGVMaSIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJfdGhpczIiLCJmb3JFYWNoIiwiZWxlbWVudCIsImVsZW1lbnREaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50TGkiLCJjbGFzc0xpc3QiLCJpbm5lclRleHQiLCJlbGVtZW50QnV0dG9uVXAiLCJzZXRBdHRyaWJ1dGUiLCJlbGVtZW50QnV0dG9uRG93biIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiX3RoaXMzIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=