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
      //   this.createLi(store.getState().products)
      // })
      var unsubscribe = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {});

      // const unsubscribe = store.subscribe(() => {
      //   console.log(store.getState().products.productsList.sort((a,b) => b.id - a.id));
      // });

      // store.subscribe(() => console.log(store.getState().products.productsList.sort((a,b) => b.id - a.id)))
    }
  }, {
    key: "createLi",
    value: function createLi() {
      var _this = this;
      var elementDiv = document.createElement("div");
      var elementLi = document.createElement("Li");
      elementLi.classList = "list-group-item d-flex justify-content-between align-items-center";
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products.productsList.forEach(function (el) {
        elementLi.innerText = el.text;
        _this.elementButtonUp = document.createElement("button");
        _this.elementButtonUp.innerText = "UP";
        _this.elementButtonUp.classList.add("upClass");
        _this.elementButtonUp.value = el.id;
        _this.elementButtonDown = document.createElement("button");
        _this.elementButtonDown.innerText = "DOWN";
        _this.elementButtonDown.classList.add("downClass");
        _this.elementButtonDown.value = el.id;
      });
      elementLi.append(this.elementButtonUp, this.elementButtonDown);
      elementDiv.appendChild(elementLi);
      this.shopList.appendChild(elementDiv);
      this.elementButtonUp.addEventListener("click", function (e) {
        return _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.changeOrderUp)(parseInt(e.target.value)));
      });
      this.elementButtonDown.addEventListener("click", function (e) {
        return _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.changeOrderUp)(parseInt(e.target.value)));
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
/******/ 	__webpack_require__.h = () => ("fda3a3367c4d6447cbfb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxDQUFDO01BQ3JDLElBQUksQ0FBQ1ksZUFBZSxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQztRQUFBLE9BQUkzQyw2REFBYyxDQUFDSSw2REFBYSxDQUFDeUMsUUFBUSxDQUFDRixDQUFDLENBQUNHLE1BQU0sQ0FBQ2hDLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFBQSxFQUFDO01BQzdHLElBQUksQ0FBQ3lCLGlCQUFpQixDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQztRQUFBLE9BQUkzQyw2REFBYyxDQUFDSSw2REFBYSxDQUFDeUMsUUFBUSxDQUFDRixDQUFDLENBQUNHLE1BQU0sQ0FBQ2hDLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFBQSxFQUFDO0lBQ2pIO0VBQUM7SUFBQUQsR0FBQTtJQUFBQyxLQUFBLEVBTUQsU0FBQUgsY0FBQSxFQUFnQjtNQUFBLElBQUFvQyxNQUFBO01BQ2QsSUFBSSxDQUFDL0IsSUFBSSxDQUFDMEIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUNDLENBQUMsRUFBSztRQUMxQ0EsQ0FBQyxDQUFDSyxjQUFjLEVBQUU7UUFDbEIsSUFBR0QsTUFBSSxDQUFDN0IsVUFBVSxDQUFDSixLQUFLLEVBQUU7VUFDeEJkLDZEQUFjLENBQUNFLDBEQUFVLENBQUM2QyxNQUFJLENBQUM3QixVQUFVLENBQUNKLEtBQUssQ0FBRSxDQUFDO1VBQ2xEO1VBQ0FpQyxNQUFJLENBQUM3QixVQUFVLENBQUNKLEtBQUssR0FBRyxFQUFFO1FBQzVCO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFULFlBQUE7QUFBQTtBQU1ILGlFQUFlQSxZQUFZOzs7Ozs7OztVQ2pHM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9TaG9wcGluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7QUREX1BST0RVQ1QsIGFkZFByb2R1Y3QsIGNoYW5nZU9yZGVyLCBjaGFuZ2VPcmRlclVwfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgU2hvcHBpbmdMaXN0IHtcclxuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XHJcbiAgICB0aGlzLnJlZHV4Q29ubmVjdCgpO1xyXG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xyXG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpc3RhIHpha3Vww7N3PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9kdWt0Li4uXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNob3AtYWRkXCI+RG9kYWo8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbXQtM1wiIGlkPVwic2hvcC1saXN0XCI+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgY29sbGVjdFJlZnMoKSB7XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udHJvbFwiKTtcclxuICAgIHRoaXMuc2hvcExpc3QgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvcC1saXN0XCIpO1xyXG4gIH1cclxuXHJcbiAgcmVkdXhDb25uZWN0KCkge1xyXG4gICAgLy8gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgIC8vICAgdGhpcy5jcmVhdGVMaShzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzKVxyXG4gICAgLy8gfSlcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgIC8vICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5wcm9kdWN0c0xpc3Quc29ydCgoYSxiKSA9PiBiLmlkIC0gYS5pZCkpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gc3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMucHJvZHVjdHNMaXN0LnNvcnQoKGEsYikgPT4gYi5pZCAtIGEuaWQpKSlcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVMaSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb25zdCBlbGVtZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGlcIilcclxuICAgIGVsZW1lbnRMaS5jbGFzc0xpc3QgPSBcImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI7XHJcblxyXG4gICAgc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy5wcm9kdWN0c0xpc3QuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgIGVsZW1lbnRMaS5pbm5lclRleHQgPSBlbC50ZXh0O1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLmlubmVyVGV4dCA9IFwiVVBcIjtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uVXAuY2xhc3NMaXN0LmFkZChcInVwQ2xhc3NcIik7XHJcbiAgICAgIHRoaXMuZWxlbWVudEJ1dHRvblVwLnZhbHVlID0gZWwuaWQ7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi5pbm5lclRleHQgPSBcIkRPV05cIjtcclxuICAgICAgdGhpcy5lbGVtZW50QnV0dG9uRG93bi5jbGFzc0xpc3QuYWRkKFwiZG93bkNsYXNzXCIpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRCdXR0b25Eb3duLnZhbHVlID0gZWwuaWQ7XHJcbiAgICB9KVxyXG4gICAgZWxlbWVudExpLmFwcGVuZCh0aGlzLmVsZW1lbnRCdXR0b25VcCwgdGhpcy5lbGVtZW50QnV0dG9uRG93bik7XHJcbiAgICBlbGVtZW50RGl2LmFwcGVuZENoaWxkKGVsZW1lbnRMaSlcclxuXHJcbiAgICB0aGlzLnNob3BMaXN0LmFwcGVuZENoaWxkKGVsZW1lbnREaXYpXHJcbiAgICB0aGlzLmVsZW1lbnRCdXR0b25VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4gc3RvcmUuZGlzcGF0Y2goY2hhbmdlT3JkZXJVcChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpKSlcclxuICAgIHRoaXMuZWxlbWVudEJ1dHRvbkRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHN0b3JlLmRpc3BhdGNoKGNoYW5nZU9yZGVyVXAocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKSkpXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgYXBwbHlIYW5kbGVycygpIHtcclxuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYodGhpcy5pbnB1dFZhbHVlLnZhbHVlKSB7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdCh0aGlzLmlucHV0VmFsdWUudmFsdWUgKSlcclxuICAgICAgICAvLyBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdBRERfUFJPRFVDVCcsIHBheWxvYWQ6IHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSB9KVxyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wcGluZ0xpc3Q7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZkYTNhMzM2N2M0ZDY0NDdjYmZiXCIpIl0sIm5hbWVzIjpbInN0b3JlIiwiQUREX1BST0RVQ1QiLCJhZGRQcm9kdWN0IiwiY2hhbmdlT3JkZXIiLCJjaGFuZ2VPcmRlclVwIiwiU2hvcHBpbmdMaXN0Iiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dFZhbHVlIiwic2hvcExpc3QiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImNyZWF0ZUxpIiwiX3RoaXMiLCJlbGVtZW50RGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudExpIiwiY2xhc3NMaXN0IiwiZ2V0U3RhdGUiLCJwcm9kdWN0cyIsInByb2R1Y3RzTGlzdCIsImZvckVhY2giLCJlbCIsImlubmVyVGV4dCIsInRleHQiLCJlbGVtZW50QnV0dG9uVXAiLCJhZGQiLCJpZCIsImVsZW1lbnRCdXR0b25Eb3duIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRpc3BhdGNoIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJfdGhpczIiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=