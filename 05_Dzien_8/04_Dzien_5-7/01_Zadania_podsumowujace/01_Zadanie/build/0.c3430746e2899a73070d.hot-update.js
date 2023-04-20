"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 25:
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
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        return _this.counterValue.innerText = "".concat(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().counter, " PLN");
      });
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      this.counterIncrement.addEventListener("click", function () {
        console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState());
        _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
          type: 'INCREMENT'
        });
      });
      this.counterDecrement.addEventListener("click", function () {
        _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
          type: 'DECREMENT'
        });
      });
    }
  }]);
  return Counter;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("042e376f970a2201474b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMzQzMDc0NmUyODk5YTczMDcwZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUVBO0FBQ1M7QUFBQSxJQUVyQ0csT0FBTztFQUNYLFNBQUFBLFFBQVlDLFdBQVcsRUFBRTtJQUFBQyxlQUFBLE9BQUFGLE9BQUE7SUFDdkIsSUFBSSxDQUFDRyxRQUFRLENBQUNGLFdBQVcsQ0FBQztJQUMxQixJQUFJLENBQUNHLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNDLGFBQWEsRUFBRTtFQUN0QjtFQUFDQyxZQUFBLENBQUFQLE9BQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU4sU0FBU0YsV0FBVyxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO01BQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDUyxTQUFTLDJhQVF6QjtJQUNIO0VBQUM7SUFBQUYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUosWUFBQSxFQUFjO01BQ1osSUFBSSxDQUFDTSxZQUFZLEdBQUcsSUFBSSxDQUFDVixXQUFXLENBQUNXLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNwRSxJQUFJLENBQUNDLGdCQUFnQixHQUFHLElBQUksQ0FBQ1osV0FBVyxDQUFDVyxhQUFhLENBQUMsb0JBQW9CLENBQUM7TUFDNUUsSUFBSSxDQUFDRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUNiLFdBQVcsQ0FBQ1csYUFBYSxDQUFDLG9CQUFvQixDQUFDO0lBQzlFO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsYUFBQSxFQUFlO01BQUEsSUFBQVcsS0FBQTtNQUNiakIsOERBQWUsQ0FBQztRQUFBLE9BQU1pQixLQUFJLENBQUNKLFlBQVksQ0FBQ00sU0FBUyxNQUFBQyxNQUFBLENBQU1wQiw2REFBYyxFQUFFLENBQUNzQixPQUFPLFNBQU07TUFBQSxFQUFDO0lBQ3hGO0VBQUM7SUFBQVosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUgsY0FBQSxFQUFnQjtNQUNkLElBQUksQ0FBQ1EsZ0JBQWdCLENBQUNPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ3BEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3pCLDZEQUFjLEVBQUUsQ0FBQztRQUM3QkEsNkRBQWMsQ0FBQztVQUNiMkIsSUFBSSxFQUFFO1FBQ1IsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDWixnQkFBZ0IsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDcER2Qiw2REFBYyxDQUFDO1VBQ2IyQixJQUFJLEVBQUU7UUFDUixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQXpCLE9BQUE7QUFBQTtBQUdILGlFQUFlQSxPQUFPOzs7Ozs7Ozs7Ozs7O0FDbkRjO0FBQ0g7QUFHakMsSUFBTUYsS0FBSyxHQUFHRCxrREFBVyxDQUFDNkIsaURBQU8sQ0FBQztBQUVsQyxpRUFBZTVCLEtBQUs7Ozs7Ozs7O1VDTnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIlxyXG5pbXBvcnQge2luY3JlbWVudH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuXHJcbmNsYXNzIENvdW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcclxuICAgIHRoaXMucmVkdXhDb25uZWN0KCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+TGljem5pazwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10ZXh0XCI+V2FydG/Fm8SHIGxpY3puaWthOiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIiBpZD1cImNvdW50ZXItdmFsdWVcIj4wPC9zcGFuPjwvaDQ+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgaWQ9XCJjb3VudGVyLWRlY3JlbWVudFwiPi08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mb1wiIGlkPVwiY291bnRlci1pbmNyZW1lbnRcIj4rPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGNvbGxlY3RSZWZzKCkge1xyXG4gICAgdGhpcy5jb3VudGVyVmFsdWUgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRlci12YWx1ZVwiKTtcclxuICAgIHRoaXMuY291bnRlckRlY3JlbWVudCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyLWRlY3JlbWVudFwiKTtcclxuICAgIHRoaXMuY291bnRlckluY3JlbWVudCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyLWluY3JlbWVudFwiKTtcclxuICB9XHJcblxyXG4gIHJlZHV4Q29ubmVjdCgpIHtcclxuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNvdW50ZXJWYWx1ZS5pbm5lclRleHQgPSBgJHtzdG9yZS5nZXRTdGF0ZSgpLmNvdW50ZXJ9IFBMTmApO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlIYW5kbGVycygpIHtcclxuICAgIHRoaXMuY291bnRlckluY3JlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKVxyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0lOQ1JFTUVOVCdcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0aGlzLmNvdW50ZXJEZWNyZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdERUNSRU1FTlQnXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA0MmUzNzZmOTcwYTIyMDE0NzRiXCIpIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwic3RvcmUiLCJpbmNyZW1lbnQiLCJDb3VudGVyIiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiY291bnRlclZhbHVlIiwicXVlcnlTZWxlY3RvciIsImNvdW50ZXJEZWNyZW1lbnQiLCJjb3VudGVySW5jcmVtZW50IiwiX3RoaXMiLCJzdWJzY3JpYmUiLCJpbm5lclRleHQiLCJjb25jYXQiLCJnZXRTdGF0ZSIsImNvdW50ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidHlwZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9