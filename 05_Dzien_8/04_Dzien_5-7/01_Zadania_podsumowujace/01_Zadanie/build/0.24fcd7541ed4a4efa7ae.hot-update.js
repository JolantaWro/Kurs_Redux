"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
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
      // this.store = createStore(combinedReducer)
      // this.store.subscribe(() => console.log(this.store.getState().counter))
      _redux_store__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(function () {
        return console.log(_redux_store__WEBPACK_IMPORTED_MODULE_1__["default"].getState().counter);
      });
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      var _this = this;
      this.counterIncrement.addListener("click", function () {
        _redux_store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.increment)(parseInt(_this.counterValue.value)));
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
/******/ 	__webpack_require__.h = () => ("6b663087e771157d8e3b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNGZjZDc1NDFlZDRhNGVmYTdhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDYztBQUNkO0FBQ1M7QUFBQSxJQUVyQ0ksT0FBTztFQUNYLFNBQUFBLFFBQVlDLFdBQVcsRUFBRTtJQUFBQyxlQUFBLE9BQUFGLE9BQUE7SUFDdkIsSUFBSSxDQUFDRyxRQUFRLENBQUNGLFdBQVcsQ0FBQztJQUMxQixJQUFJLENBQUNHLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNDLGFBQWEsRUFBRTtFQUN0QjtFQUFDQyxZQUFBLENBQUFQLE9BQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU4sU0FBU0YsV0FBVyxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO01BQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDUyxTQUFTLDJhQVF6QjtJQUNIO0VBQUM7SUFBQUYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUosWUFBQSxFQUFjO01BQ1osSUFBSSxDQUFDTSxZQUFZLEdBQUcsSUFBSSxDQUFDVixXQUFXLENBQUNXLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNwRSxJQUFJLENBQUNDLGdCQUFnQixHQUFHLElBQUksQ0FBQ1osV0FBVyxDQUFDVyxhQUFhLENBQUMsb0JBQW9CLENBQUM7TUFDNUUsSUFBSSxDQUFDRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUNiLFdBQVcsQ0FBQ1csYUFBYSxDQUFDLG9CQUFvQixDQUFDO0lBQzlFO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsYUFBQSxFQUFlO01BQ2I7TUFDQTtNQUNBTiw4REFBZSxDQUFDO1FBQUEsT0FBTWtCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbkIsNkRBQWMsRUFBRSxDQUFDcUIsT0FBTyxDQUFDO01BQUEsRUFBQztJQUM5RDtFQUFDO0lBQUFYLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILGNBQUEsRUFBZ0I7TUFBQSxJQUFBYyxLQUFBO01BQ2QsSUFBSSxDQUFDTixnQkFBZ0IsQ0FBQ08sV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQy9DdkIsNkRBQWMsQ0FBQ0MseURBQVMsQ0FBQ3dCLFFBQVEsQ0FBQ0gsS0FBSSxDQUFDVCxZQUFZLENBQUNGLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDOUQsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFULE9BQUE7QUFBQTtBQUdILGlFQUFlQSxPQUFPOzs7Ozs7OztVQzdDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjb21iaW5lZFJlZHVjZXIgZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIlxyXG5pbXBvcnQge2luY3JlbWVudH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuXHJcbmNsYXNzIENvdW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcclxuICAgIHRoaXMucmVkdXhDb25uZWN0KCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+TGljem5pazwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10ZXh0XCI+V2FydG/Fm8SHIGxpY3puaWthOiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIiBpZD1cImNvdW50ZXItdmFsdWVcIj4wPC9zcGFuPjwvaDQ+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgaWQ9XCJjb3VudGVyLWRlY3JlbWVudFwiPi08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mb1wiIGlkPVwiY291bnRlci1pbmNyZW1lbnRcIj4rPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGNvbGxlY3RSZWZzKCkge1xyXG4gICAgdGhpcy5jb3VudGVyVmFsdWUgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRlci12YWx1ZVwiKTtcclxuICAgIHRoaXMuY291bnRlckRlY3JlbWVudCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyLWRlY3JlbWVudFwiKTtcclxuICAgIHRoaXMuY291bnRlckluY3JlbWVudCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyLWluY3JlbWVudFwiKTtcclxuICB9XHJcblxyXG4gIHJlZHV4Q29ubmVjdCgpIHtcclxuICAgIC8vIHRoaXMuc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lZFJlZHVjZXIpXHJcbiAgICAvLyB0aGlzLnN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnN0b3JlLmdldFN0YXRlKCkuY291bnRlcikpXHJcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5jb3VudGVyKSlcclxuICB9XHJcblxyXG4gIGFwcGx5SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXJJbmNyZW1lbnQuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGluY3JlbWVudChwYXJzZUludCh0aGlzLmNvdW50ZXJWYWx1ZS52YWx1ZSkpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZXI7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZiNjYzMDg3ZTc3MTE1N2Q4ZTNiXCIpIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiY29tYmluZWRSZWR1Y2VyIiwic3RvcmUiLCJpbmNyZW1lbnQiLCJDb3VudGVyIiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiY291bnRlclZhbHVlIiwicXVlcnlTZWxlY3RvciIsImNvdW50ZXJEZWNyZW1lbnQiLCJjb3VudGVySW5jcmVtZW50Iiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwiY291bnRlciIsIl90aGlzIiwiYWRkTGlzdGVuZXIiLCJkaXNwYXRjaCIsInBhcnNlSW50Il0sInNvdXJjZVJvb3QiOiIifQ==