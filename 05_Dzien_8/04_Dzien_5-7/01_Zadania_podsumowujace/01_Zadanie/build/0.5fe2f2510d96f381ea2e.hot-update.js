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
      this.elementButtonUp.addEventListener("click", function (e) {
        return console.log("Up", e.target.value);
      });
      this.elementButtonDown.addEventListener("click", function (e) {
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
/******/ 	__webpack_require__.h = () => ("18df60eb344ec707f4d5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQztRQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBRUYsQ0FBQyxDQUFDRyxNQUFNLENBQUMzQixLQUFLLENBQUM7TUFBQSxFQUFDO01BQ3ZGLElBQUksQ0FBQ29CLGlCQUFpQixDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQztRQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUYsQ0FBQyxDQUFDRyxNQUFNLENBQUMzQixLQUFLLENBQUM7TUFBQSxFQUFDO0lBSTdGOztJQUVBO0lBQ0E7RUFBQTtJQUFBRCxHQUFBO0lBQUFDLEtBQUEsRUFFRixTQUFBSCxjQUFBLEVBQWdCO01BQUEsSUFBQStCLE1BQUE7TUFDZCxJQUFJLENBQUMxQixJQUFJLENBQUNxQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO1FBQzFDQSxDQUFDLENBQUNLLGNBQWMsRUFBRTtRQUNsQixJQUFHRCxNQUFJLENBQUN6QixVQUFVLENBQUNILEtBQUssRUFBRTtVQUN4QlosNkRBQWMsQ0FBQ0UsMERBQVUsQ0FBQ3NDLE1BQUksQ0FBQ3pCLFVBQVUsQ0FBQ0gsS0FBSyxDQUFFLENBQUM7VUFDbEQ7VUFDQTRCLE1BQUksQ0FBQ3pCLFVBQVUsQ0FBQ0gsS0FBSyxHQUFHLEVBQUU7UUFDNUI7TUFDRixDQUFDLENBQUM7TUFDRjs7TUFFQTtJQUNGO0VBQUM7RUFBQSxPQUFBaEIsWUFBQTtBQUFBO0FBTUgsaUVBQWVBLFlBQVk7Ozs7Ozs7O1VDL0YzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcHMvU2hvcHBpbmdMaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNob3BwaW5nTGlzdCBmcm9tIFwiLi9hcHBzL1Nob3BwaW5nTGlzdFwiO1xuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4vYXBwcy9Db3VudGVyXCI7XG5cbm5ldyBDb3VudGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRlclwiKSk7XG5uZXcgU2hvcHBpbmdMaXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvcFwiKSk7XG4iLCJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQge0FERF9QUk9EVUNULCBhZGRQcm9kdWN0LCBjaGFuZ2VPcmRlcn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY2xhc3MgU2hvcHBpbmdMaXN0IHtcbiAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQpIHtcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcbiAgICB0aGlzLnJlZHV4Q29ubmVjdCgpO1xuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcbiAgfVxuXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+TGlzdGEgemFrdXDDs3c8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9kdWt0Li4uXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwic2hvcC1hZGRcIj5Eb2RhajwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIG10LTNcIiBpZD1cInNob3AtbGlzdFwiPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGNvbGxlY3RSZWZzKCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udHJvbFwiKTtcbiAgICB0aGlzLnNob3BMaXN0ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3AtbGlzdFwiKTtcbiAgfVxuXG4gIHJlZHV4Q29ubmVjdCgpIHtcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVMaShzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzKVxuICAgIH0pXG4gICAgLy8gY29uc3QgdW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5wcm9kdWN0c0xpc3Quc29ydCgoYSxiKSA9PiBiLmlkIC0gYS5pZCkpO1xuICAgIC8vIH0pO1xuXG5cbiAgfVxuXG4gIGNyZWF0ZUxpKCkge1xuICAgICAgc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGxldCBlbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgIGxldCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcbiAgICAgICAgICBlbGVtZW50TGkuY2xhc3NMaXN0ID0gXCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgZWxlbWVudExpLmlubmVyVGV4dCA9IGVsZW1lbnRcbiAgICAgICAgICBsZXQgZWxlbWVudEJ1dHRvblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICBlbGVtZW50QnV0dG9uVXAuaW5uZXJUZXh0ID0gXCJVUFwiO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25VcC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVVAnKTtcblxuICAgICAgICAgIGxldCBlbGVtZW50QnV0dG9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgZWxlbWVudEJ1dHRvbkRvd24uaW5uZXJUZXh0ID0gXCJET1dOXCI7XG4gICAgICAgICAgZWxlbWVudEJ1dHRvblVwLnNldEF0dHJpYnV0ZSgnbmFtZScsICdET1dOJyk7XG5cbiAgICAgICAgICBlbGVtZW50TGkuYXBwZW5kKGVsZW1lbnRCdXR0b25VcCwgZWxlbWVudEJ1dHRvbkRvd24pO1xuICAgICAgICAgIGVsZW1lbnREaXYuYXBwZW5kQ2hpbGQoZWxlbWVudExpKVxuICAgICAgICAgIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudERpdilcblxuICAgICAgfSlcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIlVwXCIsIGUudGFyZ2V0LnZhbHVlKSlcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IGNvbnNvbGUubG9nKFwiRG93blwiLCBlLnRhcmdldC52YWx1ZSkpXG5cblxuXG4gICAgfVxuXG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IGNvbnNvbGUubG9nKFwiVXBcIiwgZS50YXJnZXQudmFsdWUpKVxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IGNvbnNvbGUubG9nKFwiRG93blwiLCBlLnRhcmdldC52YWx1ZSkpXG5cbiAgYXBwbHlIYW5kbGVycygpIHtcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZFByb2R1Y3QodGhpcy5pbnB1dFZhbHVlLnZhbHVlICkpXG4gICAgICAgIC8vIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0FERF9QUk9EVUNUJywgcGF5bG9hZDogdGhpcy5pbnB1dFZhbHVlLnZhbHVlIH0pXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwQ2xhc3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKFwidXBcIikpXG5cbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiBjb25zb2xlLmxvZyhcIlVwXCIpKVxuICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BwaW5nTGlzdDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE4ZGY2MGViMzQ0ZWM3MDdmNGQ1XCIpIl0sIm5hbWVzIjpbIlNob3BwaW5nTGlzdCIsIkNvdW50ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdG9yZSIsIkFERF9QUk9EVUNUIiwiYWRkUHJvZHVjdCIsImNoYW5nZU9yZGVyIiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiZm9ybSIsImlucHV0VmFsdWUiLCJzaG9wTGlzdCIsIl90aGlzIiwic3Vic2NyaWJlIiwiY3JlYXRlTGkiLCJnZXRTdGF0ZSIsInByb2R1Y3RzIiwiX3RoaXMyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJlbGVtZW50RGl2IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRMaSIsImNsYXNzTGlzdCIsImlubmVyVGV4dCIsImVsZW1lbnRCdXR0b25VcCIsInNldEF0dHJpYnV0ZSIsImVsZW1lbnRCdXR0b25Eb3duIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJfdGhpczMiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==