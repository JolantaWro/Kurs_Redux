"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apps_ShoppingList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _apps_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);


new _apps_Counter__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector("#counter"));
new _apps_ShoppingList__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector("#shop"));

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
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
      this.rootElement.innerHTML = "\n      <div class=\"card-header\">Lista zakup\xF3w</div>\n      <div class=\"card-body\">\n        <form>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Produkt...\" />\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-primary\" type=\"button\" id=\"shop-add\">Dodaj</button>\n            </div>\n          </div>\n        </form>\n\n        <ul class=\"list-group mt-3\" id=\"shop-list\">\n        </ul>\n      </div>\n    ";
    }
  }, {
    key: "collectRefs",
    value: function collectRefs() {
      this.form = this.rootElement.querySelector("form");
      this.shopList = this.rootElement.querySelector("#shop-list");
    }
  }, {
    key: "reduxConnect",
    value: function reduxConnect() {
      var _this = this;
      var liElement = document.createElement("li");
      // this.shopList.appendChild(liElement);
      // store.subscribe(() => liElement.innerText = store.getState().products);
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        return _this.shopList.appendChild(liElement);
      });
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      this.form.addEventListener("submit", function () {
        console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products);
        console.log("wysłano");
        _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
          type: " ADD_PRODUCT"
        });
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
/******/ 	__webpack_require__.h = () => ("c132e43bddfb1079f2f8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42OTI0MGRjMmMwZWU0YmVlN2E5ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQztBQUNWO0FBRXJDLElBQUlDLHFEQUFPLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQy9DLElBQUlILDBEQUFZLENBQUNFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmQ7QUFDVTtBQUFBLElBRXZDSCxZQUFZO0VBQ2hCLFNBQUFBLGFBQVlNLFdBQVcsRUFBRTtJQUFBQyxlQUFBLE9BQUFQLFlBQUE7SUFDdkIsSUFBSSxDQUFDUSxRQUFRLENBQUNGLFdBQVcsQ0FBQztJQUMxQixJQUFJLENBQUNHLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNDLGFBQWEsRUFBRTtFQUN0QjtFQUFDQyxZQUFBLENBQUFaLFlBQUE7SUFBQWEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU4sU0FBU0YsV0FBVyxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO01BQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDUyxTQUFTLCtoQkFlekI7SUFDSDtFQUFDO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFKLFlBQUEsRUFBYztNQUNaLElBQUksQ0FBQ00sSUFBSSxHQUFHLElBQUksQ0FBQ1YsV0FBVyxDQUFDSCxhQUFhLENBQUMsTUFBTSxDQUFDO01BQ2xELElBQUksQ0FBQ2MsUUFBUSxHQUFHLElBQUksQ0FBQ1gsV0FBVyxDQUFDSCxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQzlEO0VBQUM7SUFBQVUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsYUFBQSxFQUFlO01BQUEsSUFBQVMsS0FBQTtNQUNiLElBQU1DLFNBQVMsR0FBR2pCLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDOUM7TUFDQTtNQUNBaEIsOERBQWUsQ0FBQztRQUFBLE9BQU1jLEtBQUksQ0FBQ0QsUUFBUSxDQUFDSyxXQUFXLENBQUNILFNBQVMsQ0FBQztNQUFBLEVBQUM7SUFDN0Q7RUFBQztJQUFBTixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSCxjQUFBLEVBQWdCO01BQ2QsSUFBSSxDQUFDSyxJQUFJLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO1FBQ3pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3JCLDZEQUFjLEVBQUUsQ0FBQ3VCLFFBQVEsQ0FBQztRQUN0Q0gsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3RCckIsNkRBQWMsQ0FBQztVQUNieUIsSUFBSSxFQUFDO1FBQ1AsQ0FBQyxDQUFDO01BRUosQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUE3QixZQUFBO0FBQUE7QUFHSCxpRUFBZUEsWUFBWTs7Ozs7Ozs7VUN2RDNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9TaG9wcGluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hvcHBpbmdMaXN0IGZyb20gXCIuL2FwcHMvU2hvcHBpbmdMaXN0XCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuL2FwcHMvQ291bnRlclwiO1xyXG5cclxubmV3IENvdW50ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyXCIpKTtcclxubmV3IFNob3BwaW5nTGlzdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3BcIikpO1xyXG4iLCJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7QUREX1BST0RVQ1R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcblxyXG5jbGFzcyBTaG9wcGluZ0xpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcclxuICAgIHRoaXMucmVkdXhDb25uZWN0KCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+TGlzdGEgemFrdXDDs3c8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlByb2R1a3QuLi5cIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGlkPVwic2hvcC1hZGRcIj5Eb2RhajwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtdC0zXCIgaWQ9XCJzaG9wLWxpc3RcIj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBjb2xsZWN0UmVmcygpIHtcclxuICAgIHRoaXMuZm9ybSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbiAgICB0aGlzLnNob3BMaXN0ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3AtbGlzdFwiKTtcclxuICB9XHJcblxyXG4gIHJlZHV4Q29ubmVjdCgpIHtcclxuICAgIGNvbnN0IGxpRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIC8vIHRoaXMuc2hvcExpc3QuYXBwZW5kQ2hpbGQobGlFbGVtZW50KTtcclxuICAgIC8vIHN0b3JlLnN1YnNjcmliZSgoKSA9PiBsaUVsZW1lbnQuaW5uZXJUZXh0ID0gc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cyk7XHJcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaG9wTGlzdC5hcHBlbmRDaGlsZChsaUVsZW1lbnQpKTtcclxuICB9XHJcblxyXG4gIGFwcGx5SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwid3lzxYJhbm9cIilcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6XCIgQUREX1BST0RVQ1RcIlxyXG4gICAgICB9KVxyXG5cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wcGluZ0xpc3Q7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMxMzJlNDNiZGRmYjEwNzlmMmY4XCIpIl0sIm5hbWVzIjpbIlNob3BwaW5nTGlzdCIsIkNvdW50ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdG9yZSIsIkFERF9QUk9EVUNUIiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiZm9ybSIsInNob3BMaXN0IiwiX3RoaXMiLCJsaUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3Vic2NyaWJlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwicHJvZHVjdHMiLCJkaXNwYXRjaCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9