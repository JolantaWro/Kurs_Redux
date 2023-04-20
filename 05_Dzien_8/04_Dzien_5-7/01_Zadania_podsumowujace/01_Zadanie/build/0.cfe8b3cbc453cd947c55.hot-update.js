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
        elementButtonUp.classList.add("UP");
        elementButtonUp.value = element;
        var elementButtonDown = document.createElement("button");
        elementButtonDown.innerText = "DOWN";
        elementButtonDown.classList.add("DOWN");
        elementButtonDown.value = element;
        elementLi.append(elementButtonUp, elementButtonDown);
        elementDiv.appendChild(elementLi);
        _this2.shopList.appendChild(elementDiv);
        elementButtonUp.addEventListener("click", function (e) {
          var product = e.target.value;
          var action = e.target.classList.value;
          _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.changeOrder)({
            product: product,
            action: action
          }));
        });
        // elementButtonDown.addEventListener("click", (e)=> console.log("Down", e.target.value))

        // elementButtonUp.addEventListener("click", (e)=> console.log("Uppp", "element", e.target.value, "akcja", e.target.classList.value))
        // elementButtonDown.addEventListener("click", (e)=> console.log("Down", e.target.value))
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
/******/ 	__webpack_require__.h = () => ("687161ab7c235a9faa68")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNrQixXQUFXLENBQUNULFVBQVUsQ0FBQztRQUdqQ0ssZUFBZSxDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFJO1VBQzVDLElBQU1DLE9BQU8sR0FBR0QsQ0FBQyxDQUFDRSxNQUFNLENBQUMxQixLQUFLO1VBQzlCLElBQU0yQixNQUFNLEdBQUdILENBQUMsQ0FBQ0UsTUFBTSxDQUFDVixTQUFTLENBQUNoQixLQUFLO1VBQ3ZDWiw2REFBYyxDQUFDRywyREFBVyxDQUFDO1lBQUNrQyxPQUFPLEVBQVBBLE9BQU87WUFBRUUsTUFBTSxFQUFOQTtVQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQztRQUNOOztRQUVBO1FBQ0E7TUFFSixDQUFDLENBQUM7SUFLSjs7SUFFQTtJQUNBO0VBQUE7SUFBQTVCLEdBQUE7SUFBQUMsS0FBQSxFQUVGLFNBQUFILGNBQUEsRUFBZ0I7TUFBQSxJQUFBZ0MsTUFBQTtNQUNkLElBQUksQ0FBQzNCLElBQUksQ0FBQ3FCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDQyxDQUFDLEVBQUs7UUFDMUNBLENBQUMsQ0FBQ00sY0FBYyxFQUFFO1FBQ2xCLElBQUdELE1BQUksQ0FBQzFCLFVBQVUsQ0FBQ0gsS0FBSyxFQUFFO1VBQ3hCWiw2REFBYyxDQUFDRSwwREFBVSxDQUFDdUMsTUFBSSxDQUFDMUIsVUFBVSxDQUFDSCxLQUFLLENBQUUsQ0FBQztVQUNsRDtVQUNBNkIsTUFBSSxDQUFDMUIsVUFBVSxDQUFDSCxLQUFLLEdBQUcsRUFBRTtRQUM1QjtNQUNGLENBQUMsQ0FBQztNQUNGOztNQUVBO0lBQ0Y7RUFBQztFQUFBLE9BQUFoQixZQUFBO0FBQUE7QUFNSCxpRUFBZUEsWUFBWTs7Ozs7Ozs7VUM1RzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9TaG9wcGluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hvcHBpbmdMaXN0IGZyb20gXCIuL2FwcHMvU2hvcHBpbmdMaXN0XCI7XG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi9hcHBzL0NvdW50ZXJcIjtcblxubmV3IENvdW50ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyXCIpKTtcbm5ldyBTaG9wcGluZ0xpc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG9wXCIpKTtcbiIsImltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7QUREX1BST0RVQ1QsIGFkZFByb2R1Y3QsIGNoYW5nZU9yZGVyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jbGFzcyBTaG9wcGluZ0xpc3Qge1xuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCkge1xuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xuICAgIHRoaXMucmVkdXhDb25uZWN0KCk7XG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xuICB9XG5cbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5MaXN0YSB6YWt1cMOzdzwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlByb2R1a3QuLi5cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzaG9wLWFkZFwiPkRvZGFqPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbXQtM1wiIGlkPVwic2hvcC1saXN0XCI+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgY29sbGVjdFJlZnMoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250cm9sXCIpO1xuICAgIHRoaXMuc2hvcExpc3QgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvcC1saXN0XCIpO1xuICB9XG5cbiAgcmVkdXhDb25uZWN0KCkge1xuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUxpKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMpXG4gICAgfSlcbiAgICAvLyBjb25zdCB1bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnByb2R1Y3RzTGlzdC5zb3J0KChhLGIpID0+IGIuaWQgLSBhLmlkKSk7XG4gICAgLy8gfSk7XG5cblxuICB9XG5cbiAgY3JlYXRlTGkoKSB7XG4gICAgICBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgbGV0IGVsZW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgbGV0IGVsZW1lbnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMaVwiKVxuICAgICAgICAgIGVsZW1lbnRMaS5jbGFzc0xpc3QgPSBcImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICBlbGVtZW50TGkuaW5uZXJUZXh0ID0gZWxlbWVudFxuICAgICAgICAgIGxldCBlbGVtZW50QnV0dG9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25VcC5pbm5lclRleHQgPSBcIlVQXCI7XG4gICAgICAgICAgZWxlbWVudEJ1dHRvblVwLmNsYXNzTGlzdC5hZGQoXCJVUFwiKTtcbiAgICAgICAgICBlbGVtZW50QnV0dG9uVXAudmFsdWUgPSBlbGVtZW50O1xuXG4gICAgICAgICAgbGV0IGVsZW1lbnRCdXR0b25Eb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICBlbGVtZW50QnV0dG9uRG93bi5pbm5lclRleHQgPSBcIkRPV05cIjtcblxuICAgICAgICAgIGVsZW1lbnRCdXR0b25Eb3duLmNsYXNzTGlzdC5hZGQoXCJET1dOXCIpO1xuICAgICAgICAgIGVsZW1lbnRCdXR0b25Eb3duLnZhbHVlID0gZWxlbWVudDtcblxuICAgICAgICAgIGVsZW1lbnRMaS5hcHBlbmQoZWxlbWVudEJ1dHRvblVwLCBlbGVtZW50QnV0dG9uRG93bik7XG4gICAgICAgICAgZWxlbWVudERpdi5hcHBlbmRDaGlsZChlbGVtZW50TGkpXG4gICAgICAgICAgdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChlbGVtZW50RGl2KVxuXG5cbiAgICAgICAgICAgICAgZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goY2hhbmdlT3JkZXIoe3Byb2R1Y3QsIGFjdGlvbn0pKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIC8vIGVsZW1lbnRCdXR0b25Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIkRvd25cIiwgZS50YXJnZXQudmFsdWUpKVxuXG4gICAgICAgICAgLy8gZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiBjb25zb2xlLmxvZyhcIlVwcHBcIiwgXCJlbGVtZW50XCIsIGUudGFyZ2V0LnZhbHVlLCBcImFrY2phXCIsIGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSkpXG4gICAgICAgICAgLy8gZWxlbWVudEJ1dHRvbkRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IGNvbnNvbGUubG9nKFwiRG93blwiLCBlLnRhcmdldC52YWx1ZSkpXG5cbiAgICAgIH0pXG5cblxuXG5cbiAgICB9XG5cbiAgICAvLyB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJVcFwiLCBlLnRhcmdldC52YWx1ZSkpXG4gICAgLy8gdGhpcy5lbGVtZW50QnV0dG9uRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gY29uc29sZS5sb2coXCJEb3duXCIsIGUudGFyZ2V0LnZhbHVlKSlcblxuICBhcHBseUhhbmRsZXJzKCkge1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZih0aGlzLmlucHV0VmFsdWUudmFsdWUpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdCh0aGlzLmlucHV0VmFsdWUudmFsdWUgKSlcbiAgICAgICAgLy8gc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQUREX1BST0RVQ1QnLCBwYXlsb2FkOiB0aGlzLmlucHV0VmFsdWUudmFsdWUgfSlcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBDbGFzc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJ1cFwiKSlcblxuICAgIC8vIHRoaXMuZWxlbWVudEJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IGNvbnNvbGUubG9nKFwiVXBcIikpXG4gIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjg3MTYxYWI3YzIzNWE5ZmFhNjhcIikiXSwibmFtZXMiOlsiU2hvcHBpbmdMaXN0IiwiQ291bnRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0b3JlIiwiQUREX1BST0RVQ1QiLCJhZGRQcm9kdWN0IiwiY2hhbmdlT3JkZXIiLCJyb290RWxlbWVudCIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZVVJIiwicmVkdXhDb25uZWN0IiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbm5lckhUTUwiLCJmb3JtIiwiaW5wdXRWYWx1ZSIsInNob3BMaXN0IiwiX3RoaXMiLCJzdWJzY3JpYmUiLCJjcmVhdGVMaSIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJfdGhpczIiLCJmb3JFYWNoIiwiZWxlbWVudCIsImVsZW1lbnREaXYiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudExpIiwiY2xhc3NMaXN0IiwiaW5uZXJUZXh0IiwiZWxlbWVudEJ1dHRvblVwIiwiYWRkIiwiZWxlbWVudEJ1dHRvbkRvd24iLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJvZHVjdCIsInRhcmdldCIsImFjdGlvbiIsImRpc3BhdGNoIiwiX3RoaXMzIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9