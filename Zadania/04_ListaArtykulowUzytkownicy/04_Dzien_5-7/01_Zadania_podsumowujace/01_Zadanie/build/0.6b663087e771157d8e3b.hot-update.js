"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
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
      var _this = this;
      this.store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_redux_reducers__WEBPACK_IMPORTED_MODULE_0__["default"]);
      this.store.subscribe(function () {
        return console.log(_this.store.getState().counter);
      });
      // store.subscribe(() => console.log(store.getState().counter))
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      var _this2 = this;
      this.counterIncrement.addListener("click", function () {
        _this2.store.dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.increment)(_this2.counterValue.value));
        // store.dispatch(increment(parseInt(this.counterValue.value)))
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
/******/ 	__webpack_require__.h = () => ("504e1723756909f17435")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YjY2MzA4N2U3NzExNTdkOGUzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ2M7QUFDZDtBQUNTO0FBQUEsSUFFckNJLE9BQU87RUFDWCxTQUFBQSxRQUFZQyxXQUFXLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixPQUFBO0lBQ3ZCLElBQUksQ0FBQ0csUUFBUSxDQUFDRixXQUFXLENBQUM7SUFDMUIsSUFBSSxDQUFDRyxZQUFZLEVBQUU7SUFDbkIsSUFBSSxDQUFDQyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDdEI7RUFBQ0MsWUFBQSxDQUFBUCxPQUFBO0lBQUFRLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFOLFNBQVNGLFdBQVcsRUFBRTtNQUNwQixJQUFJLENBQUNBLFdBQVcsR0FBR0EsV0FBVztNQUM5QixJQUFJLENBQUNBLFdBQVcsQ0FBQ1MsU0FBUywyYUFRekI7SUFDSDtFQUFDO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFKLFlBQUEsRUFBYztNQUNaLElBQUksQ0FBQ00sWUFBWSxHQUFHLElBQUksQ0FBQ1YsV0FBVyxDQUFDVyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7TUFDcEUsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUNaLFdBQVcsQ0FBQ1csYUFBYSxDQUFDLG9CQUFvQixDQUFDO01BQzVFLElBQUksQ0FBQ0UsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDYixXQUFXLENBQUNXLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztJQUM5RTtFQUFDO0lBQUFKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFMLGFBQUEsRUFBZTtNQUFBLElBQUFXLEtBQUE7TUFDYixJQUFJLENBQUNqQixLQUFLLEdBQUdGLGtEQUFXLENBQUNDLHVEQUFlLENBQUM7TUFDekMsSUFBSSxDQUFDQyxLQUFLLENBQUNrQixTQUFTLENBQUM7UUFBQSxPQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSSxDQUFDakIsS0FBSyxDQUFDcUIsUUFBUSxFQUFFLENBQUNDLE9BQU8sQ0FBQztNQUFBLEVBQUM7TUFDdEU7SUFDRjtFQUFDO0lBQUFaLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILGNBQUEsRUFBZ0I7TUFBQSxJQUFBZSxNQUFBO01BQ2QsSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQ1EsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQy9DRCxNQUFJLENBQUN2QixLQUFLLENBQUN5QixRQUFRLENBQUN4Qix5REFBUyxDQUFDc0IsTUFBSSxDQUFDVixZQUFZLENBQUNGLEtBQUssQ0FBQyxDQUFDO1FBQ3ZEO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFULE9BQUE7QUFBQTtBQUdILGlFQUFlQSxPQUFPOzs7Ozs7OztVQzlDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjb21iaW5lZFJlZHVjZXIgZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIlxyXG5pbXBvcnQge2luY3JlbWVudH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuXHJcbmNsYXNzIENvdW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcclxuICAgIHRoaXMucmVkdXhDb25uZWN0KCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+TGljem5pazwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10ZXh0XCI+V2FydG/Fm8SHIGxpY3puaWthOiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIiBpZD1cImNvdW50ZXItdmFsdWVcIj4wPC9zcGFuPjwvaDQ+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgaWQ9XCJjb3VudGVyLWRlY3JlbWVudFwiPi08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mb1wiIGlkPVwiY291bnRlci1pbmNyZW1lbnRcIj4rPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGNvbGxlY3RSZWZzKCkge1xyXG4gICAgdGhpcy5jb3VudGVyVmFsdWUgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRlci12YWx1ZVwiKTtcclxuICAgIHRoaXMuY291bnRlckRlY3JlbWVudCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyLWRlY3JlbWVudFwiKTtcclxuICAgIHRoaXMuY291bnRlckluY3JlbWVudCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyLWluY3JlbWVudFwiKTtcclxuICB9XHJcblxyXG4gIHJlZHV4Q29ubmVjdCgpIHtcclxuICAgIHRoaXMuc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lZFJlZHVjZXIpXHJcbiAgICB0aGlzLnN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnN0b3JlLmdldFN0YXRlKCkuY291bnRlcikpXHJcbiAgICAvLyBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5jb3VudGVyKSlcclxuICB9XHJcblxyXG4gIGFwcGx5SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXJJbmNyZW1lbnQuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goaW5jcmVtZW50KHRoaXMuY291bnRlclZhbHVlLnZhbHVlKSlcclxuICAgICAgLy8gc3RvcmUuZGlzcGF0Y2goaW5jcmVtZW50KHBhcnNlSW50KHRoaXMuY291bnRlclZhbHVlLnZhbHVlKSkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRlcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTA0ZTE3MjM3NTY5MDlmMTc0MzVcIikiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJjb21iaW5lZFJlZHVjZXIiLCJzdG9yZSIsImluY3JlbWVudCIsIkNvdW50ZXIiLCJyb290RWxlbWVudCIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZVVJIiwicmVkdXhDb25uZWN0IiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbm5lckhUTUwiLCJjb3VudGVyVmFsdWUiLCJxdWVyeVNlbGVjdG9yIiwiY291bnRlckRlY3JlbWVudCIsImNvdW50ZXJJbmNyZW1lbnQiLCJfdGhpcyIsInN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsImNvdW50ZXIiLCJfdGhpczIiLCJhZGRMaXN0ZW5lciIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==