"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Counter = /*#__PURE__*/function () {
  function Counter(rootElement) {
    _classCallCheck(this, Counter);
    this.createUI(rootElement);
    this.reduxConnect();
    this.collectRefs();
    this.applyHandlers();
  }
  _createClass(Counter, [{
    key: "createUI",
    value: function createUI(rootElement) {
      this.rootElement = rootElement;
      this.rootElement.innerHTML = "\n      <div class=\"card-header\">Licznik</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-text\">Warto\u015B\u0107 licznika: <span class=\"badge badge-primary\" id=\"counter-value\">0</span></h4>\n\n        <button type=\"button\" class=\"btn btn-success\" id=\"counter-decrement\">-</button>\n        <button type=\"button\" class=\"btn btn-info\" id=\"counter-increment\">+</button>\n      </div>\n    ";
    }
  }, {
    key: "collectRefs",
    value: function collectRefs() {
      this.counterValue = this.rootElement.querySelector("#counter-value");
      this.counterDecrement = this.rootElement.querySelector("#counter-decrement");
      this.counterIncrement = this.rootElement.querySelector("#counter-increment");
    }
  }, {
    key: "reduxConnect",
    value: function reduxConnect() {
      var _this = this;
      // this.store = createStore(combinedReducer)
      // this.store.subscribe(() => console.log(this.store.getState().counter))
      this.store.subscribe(function () {
        return console.log(_this.store.getState().counter);
      });
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      this.counterIncrement.addListener("click", function () {
        console.log("Dodaje");
      });
    }
  }]);
  return Counter;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b1aeb29dea456cd7426")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZDg0MmZhMjE0NGM5MmQ3ZmI3ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ2M7QUFBQSxJQUUxQ0UsT0FBTztFQUNYLFNBQUFBLFFBQVlDLFdBQVcsRUFBRTtJQUFBQyxlQUFBLE9BQUFGLE9BQUE7SUFDdkIsSUFBSSxDQUFDRyxRQUFRLENBQUNGLFdBQVcsQ0FBQztJQUMxQixJQUFJLENBQUNHLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNDLGFBQWEsRUFBRTtFQUN0QjtFQUFDQyxZQUFBLENBQUFQLE9BQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU4sU0FBU0YsV0FBVyxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO01BQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDUyxTQUFTLDJhQVF6QjtJQUNIO0VBQUM7SUFBQUYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUosWUFBQSxFQUFjO01BQ1osSUFBSSxDQUFDTSxZQUFZLEdBQUcsSUFBSSxDQUFDVixXQUFXLENBQUNXLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNwRSxJQUFJLENBQUNDLGdCQUFnQixHQUFHLElBQUksQ0FBQ1osV0FBVyxDQUFDVyxhQUFhLENBQUMsb0JBQW9CLENBQUM7TUFDNUUsSUFBSSxDQUFDRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUNiLFdBQVcsQ0FBQ1csYUFBYSxDQUFDLG9CQUFvQixDQUFDO0lBQzlFO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsYUFBQSxFQUFlO01BQUEsSUFBQVcsS0FBQTtNQUNiO01BQ0E7TUFDQSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO1FBQUEsT0FBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUksQ0FBQ0MsS0FBSyxDQUFDSSxRQUFRLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDO01BQUEsRUFBQztJQUN4RTtFQUFDO0lBQUFiLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILGNBQUEsRUFBZ0I7TUFDZCxJQUFJLENBQUNRLGdCQUFnQixDQUFDUSxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDL0NKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUN2QixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQW5CLE9BQUE7QUFBQTtBQUdILGlFQUFlQSxPQUFPOzs7Ozs7OztVQzNDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjb21iaW5lZFJlZHVjZXIgZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzXCI7XHJcblxyXG5jbGFzcyBDb3VudGVyIHtcclxuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XHJcbiAgICB0aGlzLnJlZHV4Q29ubmVjdCgpO1xyXG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xyXG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPkxpY3puaWs8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGV4dFwiPldhcnRvxZvEhyBsaWN6bmlrYTogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCIgaWQ9XCJjb3VudGVyLXZhbHVlXCI+MDwvc3Bhbj48L2g0PlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGlkPVwiY291bnRlci1kZWNyZW1lbnRcIj4tPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIiBpZD1cImNvdW50ZXItaW5jcmVtZW50XCI+KzwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBjb2xsZWN0UmVmcygpIHtcclxuICAgIHRoaXMuY291bnRlclZhbHVlID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50ZXItdmFsdWVcIik7XHJcbiAgICB0aGlzLmNvdW50ZXJEZWNyZW1lbnQgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRlci1kZWNyZW1lbnRcIik7XHJcbiAgICB0aGlzLmNvdW50ZXJJbmNyZW1lbnQgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRlci1pbmNyZW1lbnRcIik7XHJcbiAgfVxyXG5cclxuICByZWR1eENvbm5lY3QoKSB7XHJcbiAgICAvLyB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUoY29tYmluZWRSZWR1Y2VyKVxyXG4gICAgLy8gdGhpcy5zdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2codGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmNvdW50ZXIpKVxyXG4gICAgdGhpcy5zdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2codGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmNvdW50ZXIpKVxyXG4gIH1cclxuXHJcbiAgYXBwbHlIYW5kbGVycygpIHtcclxuICAgIHRoaXMuY291bnRlckluY3JlbWVudC5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJEb2RhamVcIilcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYjFhZWIyOWRlYTQ1NmNkNzQyNlwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImNvbWJpbmVkUmVkdWNlciIsIkNvdW50ZXIiLCJyb290RWxlbWVudCIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZVVJIiwicmVkdXhDb25uZWN0IiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbm5lckhUTUwiLCJjb3VudGVyVmFsdWUiLCJxdWVyeVNlbGVjdG9yIiwiY291bnRlckRlY3JlbWVudCIsImNvdW50ZXJJbmNyZW1lbnQiLCJfdGhpcyIsInN0b3JlIiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwiY291bnRlciIsImFkZExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==